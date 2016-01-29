FROM ruby:2.3.0

ENV APP /app

RUN mkdir $APP

WORKDIR $APP

ADD Gemfile Gemfile.lock app.rb $APP/

RUN bundle install

EXPOSE 4567

CMD ["ruby", "app.rb", "-p", "4567", "-o", "0.0.0.0"]
