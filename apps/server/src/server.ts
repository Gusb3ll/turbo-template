import app from './app';

app.listen(parseInt(process.env.PORT) || 8080, '0.0.0.0', () => {
  console.info(`Server started on port ${process.env.PORT || 8080}`)
})