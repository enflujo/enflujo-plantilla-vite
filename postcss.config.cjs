const esProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [require('autoprefixer'), ...(esProd ? [require('cssnano')({ preset: 'default' })] : [])],
};
