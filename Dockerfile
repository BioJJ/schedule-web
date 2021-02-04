FROM nginx:1.16-alpine

COPY default.conf /etc/ngix/conf.d
COPY ./dist/schedule-web /usr/share/nginx/html