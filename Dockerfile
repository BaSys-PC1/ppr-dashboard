# build stage (responsible for building a production-ready artifact of our Vue.js app)
FROM node:lts-alpine as build-stage

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

# production stage (responsible for serving such artifact using NGINX)
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

#RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=build-stage /app/docker-entrypoint.sh /

EXPOSE 80
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]