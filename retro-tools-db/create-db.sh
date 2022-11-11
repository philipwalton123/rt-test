#! /bin/bash

brew install postgresql
brew services stop postgresql
brew postgresql-upgrade-database
brew services start postgresql
createdb
# the below line previously read 'psql -f create-db.sh'
psql -f create-user.sql
psql -d postgres -U me -f configure-db.sql