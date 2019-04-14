var express=require('express');
var http=require('http');
var WebSocket=require('ws');

const app=express();
const server=http.createServer(app);
console.log(server);

/*
var chat=function(){
    this.list=[];// USER LIST OF PEOPLE IN ROOM
    this.adduser=function(a){list.push(a);};
    this.deleteuser=function(b){list.splice(list.lindexOf(b),1);};
    this.chatlog=[];//STRING OBJECT ARRAY
    this.privitet=0;///PRYWATNY
    }
    var msg=function(){
    this.user='';
    this.string='';
    }
    
    var chatlist=[];
    
    IDS;
    onfirstconnnect(){
    IDS.push();				
    }
    OBECt cjat

    PSEUDO KOT */ 