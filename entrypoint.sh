#!/bin/bash

set -e

echo -e "Running in $DJANGO_ENV"

if [[ $DJANGO_MIGRATION = "on" ]]; then
  echo -e "Waiting for database to start"
  sleep 5
  echo -e "Create migrations: Start\n"
  python3 manage.py makemigrations
  echo -e "Create migrations: Done\n"
  echo -e "Run migrations: Start\n"
  python3 manage.py migrate
fi

if [[ $DJANGO_ENV = "development" ]]; then
  python3 manage.py runserver 0.0.0.0:5000

fi
