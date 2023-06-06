#!/bin/sh

set -e

# Wait for MySQL to be ready
./wait_for_mysql_db.sh

# Run migrations and start server
php artisan migrate:fresh --seed

php -S 0.0.0.0:8000 -t public