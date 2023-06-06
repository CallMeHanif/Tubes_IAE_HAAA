# Dockerfile
FROM php:7.3-cli

RUN apt-get update -y && apt-get install -y libmcrypt-dev && apt-get install -y git
RUN apt-get install -y libzip-dev zip
RUN apt-get install -y netcat-openbsd && rm -rf /var/lib/apt/lists/*
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo pdo_mysql mbstring zip && docker-php-ext-enable pdo_mysql

WORKDIR /app
COPY . /app

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN composer install

RUN chmod +x /app/wait_for_mysql_db.sh

EXPOSE 8000

ENTRYPOINT [ "./entrypoint.sh" ]