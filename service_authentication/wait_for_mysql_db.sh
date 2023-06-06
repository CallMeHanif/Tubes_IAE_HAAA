#!/bin/sh

# Wait for MySQL to be ready
until nc -z -v -w120 micro-mysql 3306
do
  echo 'Waiting for MySQL...'
  sleep 5
done

echo "MySQL is ready!"
