const path = require('path');

module.exports = {
    mode: 'production', // none
    entry: {
        a: './src/index',
        b: './src/index2'
    }, // String, Array<String>, Object
    output: {
        path: path.resolve(__dirname, 'dist'), // 모든 출력 파일의 대상 디렉터리는 반드시 절대 경로 여야함 (Node.js의 path 모듈을 사용)
        filename: 'only_js_[name].js', // [name] | [contenthash] | 'string',
    },
    stats: 'verbose' // more information.!!!
}