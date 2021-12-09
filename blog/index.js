import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine({
    // extname : ".hdb" : dùng để đổi tên đuôi file
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});
app.listen(3000);