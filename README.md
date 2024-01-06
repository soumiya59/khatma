## Prerequisite
1. Make sure you have [composer](https://getcomposer.org/download/) installed.
2. Make sure you have latest stable version of [node](https://nodejs.org/en/download/) installed.

## Installation
1. `git clone https://github.com/soumiya59/khatma.git`
2. `cd khatma`
3. `composer install && composer update`
4.  Copy content of .env.example and paste it in a new file called .env and run `php artisan key:generate`
5. `cd frontend`
6. `npm install`

## Development
- `cd .. && php artisan serve` for running Laravel app
- `cd frontend && npm run dev` to run React app (if not working then --force)
