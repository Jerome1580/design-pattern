import $ from 'jquery';
import { List_Url } from '../config/index.js';
import createItem from './CreateItem.js';

export default class List {
    constructor(app){
        this.app = app 
        this.$el = $('<div>')
    }

    loadData(){
        
        return fetch(List_Url).then(res => res.json())
    }

    initItemList(data){
        data.forEach(itemData => {
            let item = createItem(this, itemData)
            item.init()
        })
    }

    render(){
        this.app.$el.append(this.$el)
    }

    init(){
        this.loadData().then(res =>{
            this.initItemList(res)
        })
        .then(()=>{
            this.render()
        })
    }
}