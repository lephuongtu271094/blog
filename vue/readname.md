# cách sử dụng

vào file config/config.js để thay đổi đường dẫn vào database

npm install

node ./bin/www

### trang blog sử dụng các modules: 

express-vue : để render template vue,
khi render phải render cả các components của trang


ví dụ trang about: 
```
    router.get('/about', (req, res, next) => {
        res.render('forntend/about', {
            vue: {
                head: {
                    title: 'About'
                },
                components: ['myheader', 'myfooter', 'slide']
            }
        });
    })

```

express-validator : để kiểm tra và bắn trả cho người dùng các lỗi không nhập dữ liệu vào ô input hoặc kiểm tra xem có phải là email không hoặc so sánh password

ví dụ :

username là name của ô input , 

User Name field is required là lỗi trả ra cho người dùng, 

.notEmpty() kiểm tra xem có trống hay không

```
        req.checkBody('username', 'User Name field is required').notEmpty();
        req.checkBody('display_name', 'Display name field is required').notEmpty();
        req.checkBody('email', 'Email field is required').notEmpty();
        req.checkBody('email', 'Email not vaid').isEmail();
        req.checkBody('password', 'Password field is required').notEmpty();
        req.checkBody('confirm_password', 'Password do not match').equals(req.body.password);

```