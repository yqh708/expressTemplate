'use strict';
import BaseComponent from '../../prototype/baseComponent'
import formidable from 'formidable'
import MovieModel from '../../models/movie/movie'
class Movie extends BaseComponent{
    constructor(){
        super()
        this.addMovie = this.addMovie.bind(this);
    }
    async getMovieTop(req, res, next){
        try{
            res.send('sddf')
        }catch(err){
            console.log('获取电影前10失败', err);
            res.send({
                type: 'ERROR_GET_ADDRESS',
                message: '获取电影前10失败'
            })
        }
    }
    async addMovie(req, res, next){
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            // const movie_id = req.params.movie_id;
            const {name, role, type, grade, introduce} = fields;
            try{
                if(!name){
                    throw new Error('地址信息错误');
                }else if(!role){
                    throw new Error('详细地址信息错误');
                }else if(!type){
                    throw new Error('geohash参数错误');
                }else if(!grade){
                    throw new Error('收货人姓名错误');
                }else if(!introduce){
                    throw new Error('收获手机号错误');
                }
            }catch(err){
                console.log(err.message);
                res.send({
                    status: 0,
                    type: 'GET_WRONG_PARAM',
                    message: err.message
                })
                return
            }
            try{
                const movie_id = await this.getId('movie_id');
                const newAddress = {
                    movie_id:movie_id,
                    name,
                    role,
                    type,
                    grade,
                    introduce,
                }
                await MovieModel.create(newAddress);
                res.send({
                    status: 1,
                    success: '添加地址成功'
                })
            }catch(err){
                console.log('添加地址失败', err);
                res.send({
                    status: 0,
                    type: 'ERROR_ADD_ADDRESS',
                    message: '添加地址失败'
                })
            }
        })
    }
    async getAllMovie(req, res, next){
        try{
            const movieList = await MovieModel.find();
            res.send({
                status: 0,
                code:200,
                data:movieList
            })
        }catch(err){
            res.send({
                status: 0,
                type: 'ERROR_ADD_ADDRESS',
                message: '获取失败'
            })
        }
    }

}

export default new Movie()
