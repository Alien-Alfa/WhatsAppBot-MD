//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                                                     //
//                                                             ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ                                                               //
//                                                                                                                                                     //
//                                                                    Ｖ：１．０．１                                                                     //
//                                                                                                                                                     //
//                                     ░█████╗░██╗░░░░░██╗███████╗███╗░░██╗  ░█████╗░██╗░░░░░███████╗░█████╗░                                          //
//                                     ██╔══██╗██║░░░░░██║██╔════╝████╗░██║  ██╔══██╗██║░░░░░██╔════╝██╔══██╗                                          //
//                                     ███████║██║░░░░░██║█████╗░░██╔██╗██║  ███████║██║░░░░░█████╗░░███████║                                          //
//                                     ██╔══██║██║░░░░░██║██╔══╝░░██║╚████║  ██╔══██║██║░░░░░██╔══╝░░██╔══██║                                          //
//                                     ██║░░██║███████╗██║███████╗██║░╚███║  ██║░░██║███████╗██║░░░░░██║░░██║                                          //
//                                     ╚═╝░░╚═╝╚══════╝╚═╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚═╝░░╚═╝                                          //
//                                                                                                                                                     //
//                                                                                                                                                     //
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//

// Obfuscated By AlienAlfa

// CURRENTLY RUNNING ON BETA VERSION!!
/**
   * MIT License
* 
   * Create By Dika Ardnt.
   * Edited By Alien-Alfa
   * Copyright (c) 2021 Alien-Alfa.
* 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
* 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
*/




require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
//const heroku = require('heroku')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const speedofbot = require("performance-now")
const fetch = require('node-fetch')
const maker = require('mumaker')

//-[database]-\\

global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) 
global.db = {
    users: {},
    chats: {},
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    ...(global.db || {})
}



 let globalimage = fs.readFileSync('./lib/lowdb/adapters/alfa.jpg')
 let antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
 let kuismath = db.game.math = []
 let caklontong = db.game.lontong = []
 let caklontong_desk = db.game.lontong_desk = []
 let vote = db.others.vote = []
 let linkmsgurl = global.linkurl
 let linktext = global.linktext
 let myyt = 'https://youtube.com/c/alienalfa'
 let myig = 'https://www.instagram.com/alienalfa/'
 let myghub = 'https://github.com/Alien-alfa/'
 let linkurl1 = global.butturl1
 let linkurl2 = global.butturl2
 let linkbuttid1 = global.linkbuttid1
 let linkbuttid2 = global.linkbuttid2
 let menuhead = global.menuhead
 let alfafooter = global.mainfooter
 let linkNAME = global.linkname
 let AlfaINSTA = global.insta
 let icon = global.icon
 let greetings = global.greetings
 let alienWM = global.wm
 let alfaNAME = global.botname
 let listicon = global.listicon
 let developerName = global.devname
 let developerNo = global.devNum
 let welcome = global.welcomeactive
 let az = '╭═══〘 '
 let ay = ' 〙═══⊷❍'
 let bz = '┃✩╭──────────────'
 let cz = '┃✩│'
 let dz = '┃✩╰───────────────'
 let ez = '╰═════════════════⊷'
 let bcz = '  ▎▍▌▌▉▏▎▌▉▐▏▌▎'


global.gversion = '1.8.0 BETA TEST'


/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|
  
    °◦¸¸.◦°˚°◦☙°◦¸¸.◦°˚°◦☙ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥ 𝙀𝙓𝙏𝙍𝘼 𝙈𝙊𝘿𝙀𝘿 𝙊𝙍 𝘼𝘿𝙀𝘿 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 ♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡❧◦°˚°◦.¸¸◦°❧◦°˚°◦.¸¸◦°

  |⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 
                

//|⬡══════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|⬡══════════════════|

    
    let devsound1 = fs.readFileSync('./lib/lowdb/adapters/Alfa.mp3')
    
    
    
    
    let ranaud = [devsound1]

	let devsound = ranaud[Math.floor(Math.random() * ranaud.length)]


                const used = process.memoryUsage()
                let timestamp = speed()
                let latensi = speed() - timestamp
                
                
                
                
//|⬡══════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|⬡══════════════════|  


var ownerid = `${global.owner[0]}@s.whatsapp.net`
	
                 
/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|
  
    °◦¸¸.◦°˚°◦☙°◦¸¸.◦°˚°◦☙ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥ 𝙀𝙓𝙏𝙍𝘼 𝙈𝙊𝘿𝙀𝘿 𝙊𝙍 𝘼𝘿𝙀𝘿 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 ♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡❧◦°˚°◦.¸¸◦°❧◦°˚°◦.¸¸◦°

  |⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 
  
  
                	
module.exports = alienalfa = async (alienalfa, m, chatUpdate, store) => {
    try {

        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await alienalfa.decodeJid(alienalfa.user.id)
        const isCreator = [botNumber, ...global.owner, ...global.sudo, ...global.devNum].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isDev = ['447405935355@s.whatsapp.net']
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)

//-[gc]
        const groupMetadata = m.isGroup ? await alienalfa.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const isGreetings = m.isGroup ? greetings.includes(m.chat) : false
        //const isadminonly = m.isGroup ? adminonly.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
		const c = args.join(' ')
	
//════════[runtime]═════════//
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}


/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 

const listmsg = (from, title, desc, list) => { let po = alienalfa.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝗠𝗘𝗡𝗨","footerText": `${alfaNAME}`,"listType": "SINGLE_SELECT","sections": list}}, {})
return alienalfa.relayWAMessage(po, {waitForAck: true })}
const alfasuccess = (teks) => {alienalfa.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `>>ꜱᴜᴄᴄᴇꜱꜱ<<`,"body": `ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": globalimage, "sourceUrl": "https://github.com/Alien-alfa"}}}, { quoted: m})}
const alfaerr = (teks) => {alienalfa.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `>>ᴇʀʀᴏʀ<<`,"body": `ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": globalimage, "sourceUrl": "https://github.com/Alien-alfa"}}}, { quoted: m})}
const replay = (teks) => {alienalfa.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": ` ꜰᴏʟʟᴏᴡ ᴏɴ ɢɪᴛʜᴜʙ`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": globalimage,"sourceUrl": "https://www.instagram.com/alienalfa/"}}}, { quoted: m})}

/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 
 
    try {

try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
                if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.data.chats[m.chat] = {
                mute: false,
                wame: false,
        }
        } catch (err) {
            console.error(err)
        }
	    

        // Public & Self
        if (!alienalfa.public) 
        
        {
        if (!m.key.fromMe) return
        }

//[push msg to console & autoread]\\



	
        if (m.message) { 
            alienalfa.readMessages(m.chat, m.sender, [m.key.id])
            alienalfa.sendPresenceUpdate('available')
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        
        }

//-[Antilink]-

	if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               if (!m.key.fromMe) {
               m.reply('*ʟɪɴᴋ ᴅᴇᴛᴇᴄᴛᴇᴅ*\nWow, You naughty, this group has been installed with Antilink, OK?..,\nGood Bye To You..👋🏻')
               let sianj = m.sender
               await alienalfa.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               }
	  }
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ᴀɴᴛɪ ʟɪɴᴋ 」\n\nʏᴏᴜ ʜᴀᴠᴇ ʙᴇᴇɴ ᴅᴇᴛᴇᴄᴛᴇᴅ ꜱᴇɴᴅɪɴɢ ᴀ ɢʀᴏᴜᴘ ʟɪɴᴋ, ꜱᴏʀʀʏ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ᴋɪᴄᴋᴇᴅ!`)
        if (!isBotAdmins) return m.reply(`ᴇʜʜ ɪ ᴀᴍ ɴᴏᴛ ᴀɴ ᴀᴅᴍɪɴ (ᴛ_ᴛ)`)
        let gclink = (`https://wa.me/`)
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`ᴜʜ ꜱᴏʀʀʏ ɪᴛ ᴅɪᴅɴ'ᴛ ʜᴀᴘᴘᴇɴ, ʙᴇᴄᴀᴜꜱᴇ ʏᴏᴜ ꜱᴇɴᴛ ᴛʜᴇ ʟɪɴᴋ ᴛᴏ ᴛʜɪꜱ ɢʀᴏᴜᴘ`)
        if (isAdmins) return m.reply(`ᴇʜʜ ꜱᴏʀʀʏ ʏᴏᴜ ᴀʀᴇ ᴀɴ ᴀᴅᴍɪɴ`)
        if (isCreator) return m.reply(`ᴇʜʜ ꜱᴏʀʀʏ ʏᴏᴜ'ʀᴇ ᴛʜᴇ ᴏᴡɴᴇʀ ᴏꜰ ᴍʏ ʙᴏᴛ`)
        alienalfa.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('welcome' in chats)) chats.greetings = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                greetings: false,
            }
            

//-[mute chat]-\\

      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//-[write database every 1min]-\\

	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

//-[reset limit every 12hrs]-\\


        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
	    
//-[respond cmd with media]-\\

        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
			        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: alienalfa.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, alienalfa.user.id, isCreator)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        alienalfa.ev.emit('messages.upsert', msg)
        }
	    
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[ᴅᴇʙᴜɢ]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'ɢᴀᴍᴇ ʜᴀꜱ ᴇɴᴅᴇᴅ',
	    '-2': 'ɪɴᴠᴀʟɪᴅ',
	    '-1': 'ɪɴᴠᴀʟɪᴅ ᴘᴏꜱɪᴛɪᴏɴ',
	    0: 'ɪɴᴠᴀʟɪᴅ ᴘᴏꜱɪᴛɪᴏɴ',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
${isWin ? `@${winner.split('@')[0]} ᴡɪɴ!` : isTie ? `ɢᴀᴍᴇ ᴏᴠᴇʀ` : `ᴛᴜʀɴ ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}
ᴜꜱᴇ *ꜱᴋɪᴘ* ᴛᴏ ꜱᴜʀʀᴇɴᴅᴇʀ ᴀɴᴅ ᴀᴅᴍɪᴛ ᴅᴇꜰᴇᴀᴛ`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await alienalfa.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await alienalfa.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
        //Suit PvP                    
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    alienalfa.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} ʀᴇᴊᴇᴄᴛ ᴛʜᴇ ꜱᴜɪᴛ, ᴛʜᴇ ꜱᴜɪᴛ ɪꜱ ᴄᴀɴᴄᴇʟᴇᴅ`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    
	    
	    		    let buttons9 = [
                        {buttonId: `Rock`, buttonText: {displayText: 'Rock' }, type: 2},
                        {buttonId: `Paper`, buttonText: {displayText: 'Paper' }, type: 2},
                        {buttonId: `Scissors`, buttonText: {displayText: 'Scissors' }, type: 2}
                    ]
                    
                    
	    alienalfa.sendText(m.chat, `ꜱᴜɪᴛ ʜᴀꜱ ʙᴇᴇɴ ꜱᴇɴᴛ ᴛᴏ ᴄʜᴀᴛ
@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}
ᴘʟᴇᴀꜱᴇ ᴄʜᴏᴏꜱᴇ ᴀ ꜱᴜɪᴛ ɪɴ ᴛʜᴇ ʀᴇꜱᴘᴇᴄᴛɪᴠᴇ ᴄʜᴀᴛ"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })


	    //if (!roof.pilih) alienalfa.sendText(roof.p, `ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ \n\nʀᴏᴄᴋ🗿\nᴘᴀᴘᴇʀ📄\nꜱᴄɪꜱꜱᴏʀꜱ✂️`, buttons, m)
	    
	    
	    if (!roof.pilih) alienalfa.sendButtonText(roof.p, buttons9, `ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ \n\nʀᴏᴄᴋ🗿\nᴘᴀᴘᴇʀ📄\nꜱᴄɪꜱꜱᴏʀꜱ✂`, `${alfafooter}`, m)
	    
	    
	    //if (!roof.pilih2) alienalfa.sendText(roof.p2, `ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ \n\nʀᴏᴄᴋ🗿\nᴘᴀᴘᴇʀ📄\nꜱᴄɪꜱꜱᴏʀꜱ✂️`, buttons, m)
	    
	    
	    if (!roof.pilih2) alienalfa.sendButtonText(roof.p2, buttons9, `ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ \n\nʀᴏᴄᴋ🗿\nᴘᴀᴘᴇʀ📄\nꜱᴄɪꜱꜱᴏʀꜱ✂`, `${alfafooter}`, m)
	    
	    
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) alienalfa.sendText(m.chat, `ʙᴏᴛʜ ᴘʟᴀʏᴇʀꜱ ʜᴀᴠᴇ ɴᴏ ɪɴᴛᴇɴᴛɪᴏɴ ᴏꜰ ᴘʟᴀʏɪɴɢ,\nꜱᴜɪᴛ ɪꜱ ᴄᴀɴᴄᴇʟʟᴇᴅ`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    alienalfa.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} ᴅᴏɴ'ᴛ ᴄʜᴏᴏꜱᴇ ꜱᴜɪᴛ, ɢᴀᴍᴇ ᴏᴠᴇʀ`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) alienalfa.sendText(roof.p2, '_Your opponent has chosen_\nNow its your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) alienalfa.sendText(roof.p, '_Your opponent has chosen_\nNow its your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    alienalfa.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERI' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Hey This is a Bot. He is Currently Not Here
He's in AFK ${reason ? 'with reason ' + reason : 'Busy With Some Work'}
Last Seen ${clockString(new Date - afkTime)}
`.trim())
        }

        if (global.db.data.users[m.sender].afkTime > -1) {
            let user = global.global.db.data.users[m.sender]
            m.reply(`
You quit AFK${user.afkReason ? ' after ' + user.afkReason : ''}
Afk Time ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
 
 
	 		switch(command) {
			
/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|
  
                                            °◦¸¸.◦°˚°◦☙°◦¸¸.◦°˚°◦☙ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.
   

                                            ██████╗░██╗░░░██╗██████╗░██╗░░░░░██╗░█████╗░
                                            ██╔══██╗██║░░░██║██╔══██╗██║░░░░░██║██╔══██╗
                                            ██████╔╝██║░░░██║██████╦╝██║░░░░░██║██║░░╚═╝
                                            ██╔═══╝░██║░░░██║██╔══██╗██║░░░░░██║██║░░██╗
                                            ██║░░░░░╚██████╔╝██████╦╝███████╗██║╚█████╔╝
                                            ╚═╝░░░░░░╚═════╝░╚═════╝░╚══════╝╚═╝░╚════╝░
 
 
                                            .•*❤´°◦¸¸.◦°˚°◦☙◦彡彡❧◦°˚°◦.¸¸◦°❧◦°˚°◦.¸¸◦°
   
  |⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 
/*






                                      █▀▀ █░█ █▄░█   ▀█▀ █▀█ █▀█ █░░ █▀
                                      █▀░ █▄█ █░▀█   ░█░ █▄█ █▄█ █▄▄ ▄█





*/
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

//--------------------------------- FUN ---------------------------------
			
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) m.reply(m.chat, 'You are still in the game', m)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply(`Partners found!
            
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}


First move: ❌

*Start*`)
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
ᴡᴀɪᴛɪɴɢ @${room.game.currentTurn.split('@')[0]}
ᴡʜᴇɴ *ꜱᴋɪᴘ* ᴛᴏ ꜱᴜʀʀᴇɴᴅᴇʀ ᴀɴᴅ ᴀᴅᴍɪᴛ ᴅᴇꜰᴇᴀᴛ`
            if (room.x !== room.o) await alienalfa.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await alienalfa.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            replay('ᴡᴀɪᴛɪɴɢ ꜰᴏʀ ᴘᴀʀᴛɴᴇʀ' + (text ? ` ᴛʏᴘᴇ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʙᴇʟᴏᴡ ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            alienalfa.sendText(m.chat, `ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴅᴇʟᴇᴛᴇ ᴛʜᴇ ᴛɪᴄᴛᴀᴄᴛᴏᴇ ꜱᴇꜱꜱɪᴏɴ`, m)
            } else if (!this.game) {
            m.reply(`ꜱᴇꜱꜱɪᴏɴ ᴛɪᴄᴛᴀᴄᴛᴏᴇ🎮 ᴅᴏᴇꜱ ɴᴏᴛ ᴇxɪꜱᴛ`)
            } else m.reply(m.chat, '?', m)
            } catch (e) {
            m.reply('damaged')
            }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let buttons8 = [
                 {buttonId: `accept`, buttonText: {displayText: 'ᴀᴄᴄᴇᴘᴛ' }, type: 2},
                 {buttonId: `reject`, buttonText: {displayText: 'ʀᴇᴊᴇᴄᴛ' }, type: 2}
						   ]
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`ᴄᴏᴍᴘʟᴇᴛᴇ ʏᴏᴜʀ ᴘʀᴇᴠɪᴏᴜꜱ ꜱᴜɪᴛ`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`ᴄᴀɴ ɴᴏᴛ ᴘʟᴀʏ ᴡɪᴛʜ ʏᴏᴜʀꜱᴇʟꜰ !`)
            if (!m.mentionedJid[0]) return m.reply(`_ᴡʜᴏ ᴅᴏ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ʙᴇ ᴀʙᴏᴜᴛ?_\nᴛᴀɢ ᴛʜᴇ ᴘᴇʀꜱᴏɴ..\n\nᴇxᴀᴍᴘʟᴇ : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) m.reply(m.chat, `ᴛʜᴇ ᴘᴇʀꜱᴏɴ ʏᴏᴜ ᴀʀᴇ ᴄʜᴀʟʟᴇɴɢɪɴɢ ɪꜱ ᴘʟᴀʏɪɴɢ ꜱᴜɪᴛ ᴡɪᴛʜ ꜱᴏᴍᴇᴏɴᴇ ᴇʟꜱᴇ:(`, m)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} ᴄʜᴀʟʟᴇɴɢɪɴɢ @${m.mentionedJid[0].split`@`[0]} ᴛᴏ ᴘʟᴀʏ ꜱᴜɪᴛ
ᴘʟᴇᴀꜱᴇ @${m.mentionedJid[0].split`@`[0]} ᴛᴏ ᴛʏᴘᴇ ᴀᴄᴄᴇᴘᴛ/ʀᴇᴊᴇᴄᴛ`
            this.suit[id] = {
            chat: await alienalfa.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
	        chat: await alienalfa.sendButtonText(m.chat, buttons8, `ᴀᴄᴄᴇᴘᴛ/ʀᴇᴊᴇᴄᴛ`, `${alfafooter}`, m),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) alienalfa.sendText(m.chat, `_ꜱᴜɪᴛ ᴛɪᴍᴇ ᴏᴜᴛ_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw`ꜱᴇɴᴅ/ʀᴇᴘʟʏ ᴛᴇxᴛ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}` 
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
			
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
			
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!" 
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium` 
                let result = await genMath(text.toLowerCase())
                alienalfa.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    m.reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'soulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'soulmate', buttonText: { displayText: 'my soulmate'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, jawab, `${alfafooter}`, m, {mentions: ments})
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'invented': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee Who Made💖 Don't forget the tax🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'invented', buttonText: { displayText: 'my soulmate'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, jawab, `${alfafooter}`, m, {mentions: menst})
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

	    case 'anonymous': {
                if (m.isGroup)  throw 'Features Cannot Be Used For Groups!'
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start'  }, type: 2 }
                ]
                alienalfa.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await alienalfa.getName(m.sender)} Welcome To Anonymous Chat\on\click the button below to find a partner\`\`\``, `${alfafooter}`, m)
            }
			break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            case 'keluar': case 'leave': {
                if (m.isGroup) throw 'Features Cannot Be Used For Groups!'
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await alienalfa.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                 }
                
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            
            case 'mulai': case 'start': {
				
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, `\`\`\`You are still in an anonymous session, press the button below to terminate your anonymous session\`\`\``, `${alfafooter}`, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip'  }, type: 2 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, `${alfafooter}`, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await alienalfa.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, `${alfafooter}`, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, `${alfafooter}`, m)
                }}
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await alienalfa.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip'  }, type: 2 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, `${alfafooter}`, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await alienalfa.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, `${alfafooter}`, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, `${alfafooter}`, m)
                }}
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
/*






                                      █▀▄▀█ ▄▀█ █ █▄░█   ▀█▀ █▀█ █▀█ █░░ █▀
                                      █░▀░█ █▀█ █ █░▀█   ░█░ █▄█ █▄█ █▄▄ ▄█





*/
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

//--------------------------------- TOOLS ---------------------------------
			

            
			case 'version': {

			let buttons = [{ buttonId: 'newfeatures', buttonText: { displayText: 'Update Logs' }, type: 2 }]

			await alienalfa.sendButtonText(m.chat, buttons, `𝐀𝐋𝐈𝐄𝐍 𝐀𝐋𝐅𝐀-𝐌𝐃\n\n𝐕𝐞𝐫𝐬𝐢𝐨𝐧:${gversion} \n`, `${alfafooter}`, m)
            
          } break 
          
          
          
          case 'newfeatures': {
			  
			let texks = `
𝐀𝐋𝐈𝐄𝐍 𝐀𝐋𝐅𝐀-𝐌𝐃\n\n𝐕𝐞𝐫𝐬𝐢𝐨𝐧:${gversion}

            𝐍𝐞𝐰 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬


----------
                 𝐁𝐮𝐠 𝐅𝐢𝐱


---------
                𝐄𝐱𝐭𝐫𝐚


---------`

			let buttons = [{ buttonId: 'command', buttonText: { displayText: 'Menu' }, type: 2 }]

			await alienalfa.sendButtonText(m.chat, buttons, texks, `${alfafooter}`, m)
            
          } break 

            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            
                        case 'sessionfetch': {
				
				if (!isCreator) throw mess.owner
				
				let sessionf = fs.readFileSync('./session.alfa.json')
				
            alienalfa.sendMessage(m.chat, {document: sessionf, mimetype: 'application/json', fileName: `session.alfa.json`})
            
            
            }
            break 
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

	    case 'afk': {
                let user = global.global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Is Now AFK${text ? ': ' + text : ''}`)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate':
	        {	let imgs = await (await fetch('https://telegra.ph/file/ddda0b94db5bb70b90e01.jpg')).buffer()
				anu =  `*Hey ${m.pushName}*\n        nice to meet you,\n\n*I Dont Charge You For Using This Bot*\nJust Do Simple Things,\n\n${icon} Subscribe to my YouTube channel at\nYT:  ${myyt}\n${icon} Follow me on GitHub\nGH: https://github.com/Alien-alfa\n\n*The Full Original File have a small Fee.*\n\n*Premium Bot Price*\n${icon} This is my free project so its not for sale, but if you like my work you can donate to me.\n\n*Donations can be via Paypal or UPI ID*\n\nFor more details, you can chat with the owner directly\nhttps://wa.me/447405935355 (Owner)\n\nDonate For Me At : \n\n${icon} UPI ID : alienalfa.yt@oksbi`
				let btn = [{
                                urlButton: {
                                    displayText: 'ᴘᴀʏᴘᴀʟ',
                                    url: 'https://www.paypal.me/alienalfa'
                                }
                            }]
                 alienalfa.send5ButImg(m.chat, anu, `${alfafooter}`, imgs, btn)
			}
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'sc': {
                anu = `*ᴀʟɪᴇɴ-ᴀʟꜰᴀ-ʙᴏᴛ*\n\n• 𝐆𝐢𝐭𝐇𝐮𝐛: https://github.com/Alien-Alfa/WhatsAppBot-MD\n\n• 𝐅𝐮𝐥𝐥 𝐒𝐜𝐫𝐢𝐩𝐭 : ᴜꜱᴇ *.donate* ᴛᴏ ᴋɴᴏᴡ ᴍᴏʀᴇ \n\nꜱᴜʙꜱᴄʀɪʙᴇ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɪɴꜱᴛᴀ `
				let tempimg = await (await fetch('https://avatars.githubusercontent.com/u/64305844?v=4')).buffer()
				let btn = [{
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: `${myig}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: `${myyt}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴅᴏɴᴀᴛᴇ',
                                    id: 'donate'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴄʀɪᴘᴛ',
                                    id: 'sc'
                                }
                            }]
                      alienalfa.send5ButImg(m.chat, anu, `${alfafooter}`, tempimg, btn)
		}
            break
            
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            
		case 'source': 
	   {
		       teks = `>>>>>>>*ᴀʟɪᴇɴ-ᴀʟꜰᴀ-ʙᴏᴛ*<<<<<<<\n\n        ᴜꜱᴇ *.ᴅᴏɴᴀᴛᴇ* ᴛᴏ ᴋɴᴏᴡ ᴍᴏʀᴇ`
		       
		       let buffimg = await (await fetch(`https://avatars.githubusercontent.com/u/64305844?v=4`)).buffer()
				
		alienalfa.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `>>>𝘾𝙡𝙞𝙘𝙠 𝙃𝙚𝙧𝙚<<<`,"body": `>ᴛʜɪꜱ ɪꜱ ᴛʜᴇ ʀᴇᴘᴏꜱɪᴛᴏʀʏ<`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": buffimg,"sourceUrl": "https://github.com/Alien-Alfa/WhatsAppBot-MD"}}}, { quoted: m})
	   }
        break
        
        
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            case 'infochat': {
                if (!m.quoted) throw'Reply Message'
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `${icon} @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━${icon} *ᴛɪᴍᴇ :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${icon} *ꜱᴛᴀᴛᴜꜱ :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                alienalfa.sendTextWithMentions(m.chat, teks, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            case 'q': case 'quoted': {
		if (!m.quoted) throw'ʀᴇᴘʟʏ ᴍᴇꜱꜱᴀɢᴇ!!'
		let wokwol = await conn.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) throw'ᴛʜᴇ ᴍᴇꜱꜱᴀɢᴇ ʏᴏᴜ ʀᴇᴘʟɪᴇᴅ ᴅᴏᴇꜱ ɴᴏᴛ ᴄᴏɴᴛᴀɪɴ ᴀ ʀᴇᴘʟʏ'
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
	    
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//

		case 'style': case 'styletext': case 'fancy': {
	        if (!isPremium && global.global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		global.db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) m.reply(m.chat, 'Enter Query text!', m)
                let anu = await styletext(text)
                let teks = `Style Text From *${text}*\n\n`
                let no = 1
                for (let i of anu) {
                    teks += `${icon} ${no++} : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
			
	
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
/*






                          ▄▀█ █▀▄ █▀▄▀█ █ █▄░█ ░░▄▀ █▀█ █░█░█ █▄░█ █▀▀ █▀█   ▀█▀ █▀█ █▀█ █░░ █▀
                          █▀█ █▄▀ █░▀░█ █ █░▀█ ▄▀░░ █▄█ ▀▄▀▄▀ █░▀█ ██▄ █▀▄   ░█░ █▄█ █▄█ █▄▄ ▄█





*/
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

//--------------------------------- ADMIN/OWNER ---------------------------------

			
            case 'join': {
                if (!isCreator) throw mess.admin
                if (!text) throw 'Enter the group link!' 
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) m.reply(m.chat, 'Link Invalid!', m)
                m.reply(m.chat, '```Wait 3 seconds```')
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await alienalfa.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'leave': {
                if (!isCreator) throw mess.admin
                await alienalfa.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'setexif': {
               if (!isCreator) throw mess.admin
               if (!text) m.reply(m.chat, `Example : ${prefix + command} packname|author`, m)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif has been successfully changed to\n\n${icon} ᴘᴀᴄᴋɴᴀᴍᴇ : ${global.packname}\n${icon} ᴀᴜᴛʜᴏʀ : ${global.author}`)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		
		
		await alienalfa.groupParticipantsUpdate(m.chat, [users], 'remove'
		
		
		
		
		).then((res) => alfasuccess('ɴᴜᴍʙᴇʀ ʀᴇᴍᴏᴠᴇᴅ')).catch((err) => alfaerr('𝘏𝘮𝘮.. 𝘪𝘵 𝘭𝘰𝘰𝘬𝘴 𝘭𝘪𝘬𝘦 𝘵𝘩𝘪𝘴 𝘪𝘴 𝘢 𝘞𝘳𝘰𝘯𝘨 𝘕𝘶𝘮𝘣𝘦𝘳 𝘖𝘳 𝘐𝘯𝘷𝘢𝘭𝘪𝘥 𝘯𝘶𝘮𝘣𝘦𝘳'))
	}
	break

			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	
	
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		
		let buffimg = await (await fetch(`https://avatars.githubusercontent.com/u/64305844?v=4`)).buffer()            
        
		await alienalfa.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => alfasuccess('ɴᴜᴍʙᴇʀ ᴀᴅᴅᴇᴅ')).catch((err) => alfaerr('𝘏𝘮𝘮.. 𝘪𝘵 𝘭𝘰𝘰𝘬𝘴 𝘭𝘪𝘬𝘦 𝘵𝘩𝘪𝘴 𝘪𝘴 𝘢 𝘞𝘳𝘰𝘯𝘨 𝘕𝘶𝘮𝘣𝘦𝘳 𝘖𝘳 𝘐𝘯𝘷𝘢𝘭𝘪𝘥 𝘯𝘶𝘮𝘣𝘦𝘳'))
	}
	break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await alienalfa.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => alfasuccess('ɴᴜᴍʙᴇʀ ᴘʀᴏᴍᴏᴛᴇᴅ')).catch((err) => alfaerr(`𝘌𝘳𝘳𝘰𝘳 𝘖𝘤𝘤𝘶𝘳𝘳𝘦𝘥     \n \`\`\`error ID: Ipv4/Promote.json.err \`\`\`-`))
	}
	break

					
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await alienalfa.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => alfasuccess('ɴᴜᴍʙᴇʀ ᴅᴇᴍᴏᴛᴇᴅ')).catch((err) => alfaerr(`𝘌𝘳𝘳𝘰𝘳 𝘖𝘤𝘤𝘶𝘳𝘳𝘦𝘥     \n \`\`\`error ID: Ipv4/Demote.json.err \`\`\`-`))
	}
	break
			

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
        case 'block': {
		if (!isCreator) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await alienalfa.updateBlockStatus(users, 'block').then((res) => alfasuccess('𝘉𝘭𝘰𝘤𝘬𝘪𝘯𝘨 𝘛𝘩𝘪𝘴 𝘕𝘶𝘮𝘣𝘦𝘳')).catch((err) => alfaerr(`𝘌𝘳𝘳𝘰𝘳 𝘖𝘤𝘤𝘶𝘳𝘳𝘦𝘥     \n \`\`\`error ID: Ipv4/Block.json.err \`\`\`-`))
	}
	break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
        case 'unblock': {
		if (!isCreator) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await alienalfa.updateBlockStatus(users, 'unblock').then((res) => alfasuccess('𝘜𝘯𝘣𝘭𝘰𝘤𝘬𝘪𝘯𝘨 𝘛𝘩𝘪𝘴 𝘕𝘶𝘮𝘣𝘦𝘳')).catch((err) => alfaerr(`𝘌𝘳𝘳𝘰𝘳 𝘖𝘤𝘤𝘶𝘳𝘳𝘦𝘥     \n \`\`\`error ID: Ipv4/Unblock.json.err \`\`\`-`))
	}
	break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?' 
                await alienalfa.groupUpdateSubject(m.chat, text).then((res) => alfasuccess(mess.success)).catch((err) => alfaerr(jsonformat(err)))
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?' 
                await alienalfa.groupUpdateDescription(m.chat, text).then((res) => alfasuccess(mess.success)).catch((err) => alfaerr(jsonformat(err)))
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
          case 'pp': {
                if (!isCreator) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}` 
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`  
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}` 
                let media = await alienalfa.downloadAndSaveMediaMessage(quoted)
                await alienalfa.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
           case 'setppgroup': case 'setppgrup': case 'ppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await alienalfa.downloadAndSaveMediaMessage(quoted)
                await alienalfa.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'tagall': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            alienalfa.sendMessage(m.chat, { text : q ? q : 'ᴛᴀɢɢᴇᴅ ʙʏ ᴀᴅᴍɪɴ' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
                case '.tag': case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            alienalfa.sendMessage(m.chat, { text : m.quoted && m.quoted.text , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            
//══════════════════════════            ══════════════════════════            ══════════════════════════            ══════════════════════════      

     
            case '.hidetag': case 'tag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            
            
            if (/image/.test(mime)) {
                let media = await alienalfa.downloadAndSaveMediaMessage(quoted)
                let buffer = fs.readFileSync(media)
                alienalfa.sendMessage(m.chat, { image : buffer , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            if (/video/.test(mime)) {
                let media = await alienalfa.downloadAndSaveMediaMessage(quoted)
                let buffer = fs.readFileSync(media)
                alienalfa.sendMessage(m.chat, { video : buffer , mentions: participants.map(a => a.id)}, { quoted: m })
            }     
            if (!/webp/.test(mime)) {
              let media = await alienalfa.downloadAndSaveMediaMessage(quoted)
              let buffer = fs.readFileSync(media)
              alienalfa.sendVideoAsSticker(m.chat, { video : buffer , mentions: participants.map(a => a.id)}, { quoted: m }, { packname: global.packname, author: global.author })
          }     

            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await alienalfa.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Successfully Opened Edit Group Info`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await alienalfa.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Successfully Close Edit Group Info`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'ᴏᴘᴇɴ'  }, type: 2 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'ᴄʟᴏꜱᴇ'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, `Mode Edit Info`, `${alfafooter}`, m)
            }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'linkgroup': case 'linkgc': case 'invite': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await alienalfa.groupInviteCode(m.chat)
                alienalfa.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable values'
                if (args[0] === 'enable') {
                    await alienalfa.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await alienalfa.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'delete': case 'del': {
                if (!m.quoted) throw 'Tag A Message'
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Hey I didnt Sent That!'
                alienalfa.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


           case 'worktype': case 'workmode': {
				
                if (!isCreator) throw mess.admin
                if (args[0] === 'self')
				{
                    alienalfa.public = false
                m.reply('ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟ ᴄʜᴀɴɢᴇ ᴛᴏ ᴜꜱᴇʀʙᴏᴛ ᴍᴏᴅᴇ')
            	}
		       
                 else if (args[0] === 'public')
			 
				{
                    alienalfa.public = true
                m.reply('ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟ ᴄʜᴀɴɢᴇ ᴛᴏ ᴘᴜʙʟɪᴄʙᴏᴛ ᴍᴏᴅᴇ')
                } 
		       else {
                let buttons = [
                        { buttonId: 'worktype self', buttonText: { displayText: 'ꜱᴇʟꜰ' }, type: 1 },
                        { buttonId: 'worktype public', buttonText: { displayText: 'ᴘᴜʙʟɪᴄ' }, type: 1 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, `Set Work Type\n`, `${alfafooter}`, m)
				}
            }
            break

             
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (global.db.data.chats[m.chat].antilink) return m.reply(`ᴀʟʀᴇᴀᴅʏ ᴀᴄᴛɪᴠᴇ`)
                global.db.data.chats[m.chat].antilink = true
                m.reply(`ᴀɴᴛɪʟɪɴᴋ ᴇɴᴀʙʟᴇᴅ !`)
                } else if (args[0] === "off") {
                if (!global.db.data.chats[m.chat].antilink) return m.reply(`ᴀʟʀᴇᴀᴅʏ ᴅɪꜱᴀʙʟᴇᴅ`)
                global.db.data.chats[m.chat].antilink = false
                m.reply(`ᴀɴᴛɪʟɪɴᴋ ᴅɪꜱᴀʙʟᴇᴅ !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'ᴏɴ'  }, type: 2 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'ᴏꜰꜰ'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, `Mode Antilink\n`, `${alfafooter}`, m)
                }
             }
             break
             
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

				case 'banchat': 
             {
                if (!m.isGroup) throw mess.group
                if (!isCreator) throw mess.admin
                if (args[0] === "on") {
                if (global.db.data.chats[m.chat].mute) return m.reply(`already done`)
                global.db.data.chats[m.chat].mute = true
                m.reply(`${alfafooter}\n\n has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!global.db.data.chats[m.chat].mute) return m.reply(`already done bro`)
                global.db.data.chats[m.chat].mute = false
                m.reply(`${alfafooter}\n\n has been unmuted in this group !`)
                } else {
                 let buttons = [
                        { buttonId: 'banchat on', buttonText: { displayText: 'ᴍᴜᴛᴇ ʙᴏᴛ'  }, type: 2 },
                        { buttonId: 'banchat off', buttonText: { displayText: 'ᴜɴᴍᴜᴛᴇ ʙᴏᴛ'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, `ᴛᴜʀɴ ᴏɴ ᴏʀ ᴏꜰꜰ ʙᴏᴛ ɪɴ ᴛʜɪꜱ ᴄʜᴀᴛ`, `${alfafooter}`, m)
                }
             }
             break
             
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

				case 'welcome': 
             {
                if (!m.isGroup) throw mess.group
                if (!isCreator) throw mess.admin
                if (args[0] === "on") {
                if (global.db.data.chats[m.chat].greetings) return m.reply(`already done`)
                global.db.data.chats[m.chat].greetings = true
                m.reply(`${alfafooter}\n\n Greeting is ENABLED in this group !`)
                } else if (args[0] === "off") {
                if (!global.db.data.chats[m.chat].greetings) return m.reply(`already done bro`)
                global.db.data.chats[m.chat].greetings = false
                m.reply(`${alfafooter}\n\n Greeting Message is DISABLED in this group !`)
                } else {
                 let buttons = [
                        { buttonId: 'welcome on', buttonText: { displayText: 'ɢʀᴇᴇᴛɪɴɢꜱ ᴏɴ'  }, type: 2 },
                        { buttonId: 'welcome off', buttonText: { displayText: 'ɢʀᴇᴇᴛɪɴɢꜱ ᴏꜰꜰ'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, `ᴛᴜʀɴ ᴏɴ ᴏʀ ᴏꜰꜰ ɢʀᴇᴇᴛɪɴɢꜱ ɪɴ ᴛʜɪꜱ ᴄʜᴀᴛ`, `${alfafooter}`, m)
                }
             }
             break
             
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await alienalfa.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Successfully Closing Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await alienalfa.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Successfully Opening a Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'ᴏᴘᴇɴ'  }, type: 2 },
                        { buttonId: 'group close', buttonText: { displayText: 'ᴄʟᴏꜱᴇ'  }, type: 2 }
                    ]
                    await alienalfa.sendButtonText(m.chat, buttons, `Mode Group`, `${alfafooter}`, m)
             }
            }
            break
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            
            case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
				await alienalfa.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Successfully Closing Group`)).catch((err) => m.reply(jsonformat(err)))
				}
            break    
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'unmute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
				await alienalfa.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Successfully Opening Group`)).catch((err) => m.reply(jsonformat(err)))
                 }
            break             
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.admin
                if (!text) m.reply(m.chat, `Text man an\Example : ${prefix + command} fatih-san`, m)
                let getGroups = await alienalfa.groupFetchAllParticipating()
                let tempimg = await (await fetch(`${profileimage}`)).buffer()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 3} seck`)
                for (let i of anu) {
                    await sleep(3000)
                    let btn = [{
                                urlButton: {
                                    displayText: `${linkbuttid1}`,
                                    url: `${linkurl1}`
                                }
                            }, {
                                urlButton: {
                                    displayText: `${linkbuttid2}`,
                                    url: `${linkurl2}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴄʀɪᴘᴛ',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      alienalfa.send5ButImg(i, txt, `${alfafooter}`, tempimg, btn)
                    }
                replay(`Successfully Sending Broadcast To ${anu.length} Group`)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.admin
                if (!text) throw `Text man an\Example : ${prefix + command} hi all`
                let anu = await store.chats.all().map(v => v.id)
                let tempimg = await (await fetch(`${profileimage}`)).buffer()
                m.reply(`Sending Broadcast To ${anu.length} Chat\nDone Time ${anu.length * 1.5} seconds`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: `${linkbuttid1}`,
                                    url: `${linkurl1}`
                                }
                            }, {
                                urlButton: {
                                    displayText: `${linkbuttid2}`,
                                    url: `${linkurl2}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴄʀɪᴘᴛ',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      alienalfa.send5ButImg(yoi, txt, `${alfafooter}`, tempimg, btn)
		}
		m.reply('ʙʀᴏᴀᴅᴄᴀꜱᴛ ꜱᴜᴄᴄᴇꜱꜱ')
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

			
            case 'bcalll': {
                if (!isCreator) throw mess.admin
				if (!m.quoted) throw`*${alfaNAME}*\n\n*Reply to a Message*`
		       let buffimg = await (await fetch(`https://avatars.githubusercontent.com/u/64305844?v=4`)).buffer()
					let buff1 = fs.readFileSync('./lib/lowdb/adapters/alfa.jpg')
					let buff2 = fs.readFileSync('./lib/lowdb/adapters/alfa.jpg')
					let options = {}
					let media = await alienalfa.downloadAndSaveMediaMessage(quoted)
					let anu = await store.chats.all().map(v => v.id)
					m.reply(`Sending Broadcast To ${anu.length} Chat\nDone Time ${anu.length * 3.5} seconds`)
				for (let yoi of anu) { alienalfa.sendMessage(yoi, { audio: media, contextInfo:{"linkPreview": {"title": `---${linkNAME}---`,"body": `${linktext}`, "mediaType": "PHOTO","thumbnailUrl": ``,"thumbnail": buffimg,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})} 
				}
            break
			

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

	
            case 'listpc': {
              if (!isCreator) throw mess.admin
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *ɴᴀᴍᴇ :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 alienalfa.sendTextWithMentions(m.chat, teks, m)
             }
             break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
                case 'listgc': {
				if (!isCreator) throw mess.admin
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *ʟɪꜱᴛ ɢʀᴏᴜᴘ ᴄʜᴀᴛ*\n\nᴛᴏᴛᴀʟ ɢʀᴏᴜᴘ : ${anu.length} ɢʀᴏᴜᴘ\n\n`
                 for (let i of anu) {
                     let metadata = await alienalfa.groupMetadata(i)
                     teks += `⬡ *ɴᴀᴍᴇ :* ${metadata.subject}\n⬡ *ᴏᴡɴᴇʀ :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 alienalfa.sendTextWithMentions(m.chat, teks, m)
             }
             break 
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
/*






                                      █▀█ ▀█▀ █░█ █▀▀ █▀█   ▀█▀ █▀█ █▀█ █░░ █▀
                                      █▄█ ░█░ █▀█ ██▄ █▀▄   ░█░ █▄█ █▄█ █▄▄ ▄█





*/
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

//--------------------------------- OTHER TOOLS ---------------------------------


             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    alienalfa.sendText(m.chat, 'List Online:\n\n' + online.map(v => '> @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
             case 'take': case 'wm': case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}` 

            			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m}) }
				 

                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await alienalfa.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) throw'10 seconds max!'
                let media = await quoted.download()
                let encmedia = await alienalfa.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(m.chat, `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`, m)
                }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Send/m.reply text with caption ${prefix + command}` 
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'binary': {
            if (!m.quoted.text && !text) throw `Send/m.reply text with caption ${prefix + command}` 
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
/*






                                      █▀▄▀█ █▀▀ █▀▄ █ ▄▀█   ▀█▀ █▀█ █▀█ █░░ █▀
                                      █░▀░█ ██▄ █▄▀ █ █▀█   ░█░ █▄█ █▄█ █▄▄ ▄█





*/
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

//--------------------------------- MEDIA TOOLS ---------------------------------

            case 'emojimix': case 'emix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split(' ')
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await alienalfa.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'toimage': case 'toimg': case 'photo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
										
				 

                let media = await alienalfa.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) m.reply(m.chat, err, m)
                    let buffer = fs.readFileSync(ran)
                    alienalfa.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'tomp4': case 'tovideo': case 'mp4': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

		let { webp2mp4File } = require('./lib/uploader')
                let media = await alienalfa.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await alienalfa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'toaud': case 'toaudio': case 'mp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
            			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            alienalfa.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            case 'tomp3': case 'doc': {
              if (!quoted) throw `Send/Reply Video/Audio You Want To Answer MP3 With Caption ${prefix + command}`
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want To Answer MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Answer MP3 With Caption ${prefix + command}`
            
            			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            alienalfa.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Doc By ${alienWM}.mp3`}, { quoted : m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            case 'tovn': case 'toptt': case 'unvoice': {
            if (!quoted) throw `Reply Video/Audio You Want to Do VN With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio You Want to Do VN With Caption ${prefix + command}`

            			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            alienalfa.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'togif': case 'gif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

		let { webp2mp4File } = require('./lib/uploader')
                let media = await alienalfa.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await alienalfa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'tourl': case 'url': {
            if (!quoted) throw `Tag media`
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await alienalfa.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
			
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'imagenobg': case 'removebg': case 'remove-bg': case 'rmbg': {
	    if (!quoted) throw `Left reply Image With Caption ${prefix + command}` 
	    if (!/image/.test(mime)) throw `Left reply Image With Caption ${prefix + command}` 
	    if (/webp/.test(mime)) throw `Left reply Image With Caption ${prefix + command}` 
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await alienalfa.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
      
	    			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    alienalfa.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

                let media = await alienalfa.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                alienalfa.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply to the audio you want to change with the caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
/*






                                      █▀▄ █▀█ █░█░█ █▄░█ █░░ █▀█ ▄▀█ █▀▄ █▀▀ █▀█   ▀█▀ █▀█ █▀█ █░░ █▀
                                      █▄▀ █▄█ ▀▄▀▄▀ █░▀█ █▄▄ █▄█ █▀█ █▄▀ ██▄ █▀▄   ░█░ █▄█ █▄█ █▄▄ ▄█





*/
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

//--------------------------------- DOWNLOADER TOOLS ---------------------------------


	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime` 
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `𒆜 ɴᴏ : ${no++}\n𒆜 ᴛʏᴘᴇ : ${i.type}\n𒆜 ᴠɪᴅᴇᴏ ɪᴅ : ${i.videoId}\n𒆜 ᴛɪᴛʟᴇ : ${i.title}\n𒆜 ᴠɪᴇᴡꜱ : ${i.views}\n𒆜 Duration : ${i.timestamp}\n𒆜 ᴜᴘʟᴏᴀᴅ ᴀᴛ : ${i.ago}\n𒆜 ᴜʀʟ : ${i.url}\n\n─────────────────\n\n`
                }
                alienalfa.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                
                try {
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
		
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ ᴀᴜᴅɪᴏ' }, type: 2},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► ᴠɪᴅᴇᴏ' }, type: 2}
                ]
                let bonk =`https://hardianto.xyz/api/rankcard?profile=${encodeURIComponent(anu.thumbnail)}&name=${encodeURIComponent(anu.title)}&bg=${encodeURIComponent(anu.thumbnail)}&needxp=1000&curxp=500&level=20&logorank=https://i.ibb.co/Wn9cvnv/FABLED.png`
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
${icon} ᴛɪᴛʟᴇ : ${anu.title}
${icon} ᴇxᴛ : Search
${icon} ɪᴅ : ${anu.videoId}
${icon} ᴅᴜʀᴀᴛɪᴏɴ : ${anu.timestamp}
${icon} ᴠɪᴇᴡᴇʀꜱ : ${anu.views}
${icon} ᴜᴘʟᴏᴀᴅ At : ${anu.ago}
${icon} ᴀᴜᴛʜᴏʀ : ${anu.author.name}
${icon} ᴄʜᴀɴɴᴇʟ : ${anu.author.url}
${icon} ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ${anu.description}
${icon} ᴜʀʟ : ${anu.url}`,
                    footer: `${alfafooter}`,
                    buttons: buttons,
                    headerType: 4
                }
                alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            
            
            } catch(e){ 
            if (e.message.includes("reading")) return await m.reply("Only use Query Words If You Want The Video Use .ytv <your query url>"); 
            }
            
            
            
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	    	    case 'song':  {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
		
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'ʜᴇᴀʀ ᴛʜɪꜱ' }, type: 2}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
${icon} ᴛɪᴛʟᴇ : ${anu.title}
${icon} ᴇxᴛ : Search
${icon} ɪᴅ : ${anu.videoId}
${icon} ᴅᴜʀᴀᴛɪᴏɴ : ${anu.timestamp}
${icon} ᴠɪᴇᴡᴇʀꜱ : ${anu.views}
${icon} ᴜᴘʟᴏᴀᴅ At : ${anu.ago}
${icon} ᴀᴜᴛʜᴏʀ : ${anu.author.name}
${icon} ᴄʜᴀɴɴᴇʟ : ${anu.author.url}
${icon} ᴜʀʟ : ${anu.url}`,
                    footer: `${alfafooter}`,
                    buttons: buttons,
                    headerType: 4
                }
                alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
		case 'ytmp3': case 'ytaudio': case 'yta': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                try {
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
		       let buffimg = await (await fetch(`https://avatars.githubusercontent.com/u/64305844?v=4`)).buffer()
                if (media.filesize >= 100000) return m.reply('File Over Limit \n\n\n '+util.format(media))
                let infox = `${icon} ꜰɪʟᴇꜱɪᴢᴇ: ${media.filesizeF}`
                let tempimg = await (await fetch(`${profileimage}`)).buffer()

             //   alienalfa.sendImage(m.chat, media.thumb, `${icon} ᴛɪᴛʟᴇ : ${media.title}\n${icon} ꜰɪʟᴇ ꜱɪᴢᴇ : ${media.filesizeF}\n${icon} ᴜʀʟ : ${isUrl(text)}\n${icon} ᴇxᴛ : ᴍᴘ3\n${icon} ʀᴇꜱᴏʟᴜᴛɪᴏɴ : ${args[1] || '128kbps'}`, m)
               
               
              //  alienalfa.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": buffimg,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})



alienalfa.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype:"audio/mpeg", ptt:true, contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${icon} ${media.title} 💕`,
thumbnail: tempimg,
mediaType:2,
mediaUrl: `https://youtube.com/alienalfa`,
sourceUrl: `https://youtube.com/alienalfa`
}}}, {quoted:m})



                        } catch(e){ 
            if (e.message.includes("reading")) return await m.reply("Only use Youtube Url, If You Want To Search Video Use .Play <your query text>"); 
            }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	
	
	    case 'video':  
	    {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                try {
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]






let template = await generateWAMessageFromContent

(m.chat, proto.Message.fromObject({
                listMessage : {
                    title: `ꜱᴇʟᴇᴄᴛ ᴛʜᴇ Qᴜᴀʟɪᴛʏ ꜰᴏ ᴛʜᴇ ᴠɪᴅᴇᴏ`,
                    description: `${icon} ᴛɪᴛʟᴇ : ${anu.title}
${icon} ᴅᴜʀᴀᴛɪᴏɴ : ${anu.timestamp}
${icon} ᴜᴘʟᴏᴀᴅ At : ${anu.ago}
${icon} ᴀᴜᴛʜᴏʀ : ${anu.author.name}`,
                    buttonText: "Menu",
                    footerText: `*${alfaNAME}*`,
                    listType: "SINGLE_SELECT",
                    sections: [
{
"title": `${alfaNAME}`,
rows: [
{
"title": "► 144p",
"description": `𝔻𝕠𝕨𝕟𝕠𝕒𝕕 (𝔼𝕩𝕡𝕖𝕣𝕚𝕞𝕖𝕟𝕥𝕒𝕝)`,
"rowId": `ytmp4 ${anu.url} 144p`
},
{
"title": "► 240p",
"description": `𝔻𝕠𝕨𝕟𝕠𝕒𝕕 (𝔼𝕩𝕡𝕖𝕣𝕚𝕞𝕖𝕟𝕥𝕒𝕝)`,
"rowId": `ytmp4 ${anu.url} 240p`
},
{
"title": "► 360p",
"description": `𝔻𝕠𝕨𝕟𝕠𝕒𝕕 (𝔼𝕩𝕡𝕖𝕣𝕚𝕞𝕖𝕟𝕥𝕒𝕝)`,
"rowId": `ytmp4 ${anu.url} 360p`
},
{
"title": "► 480p",
"description": `𝔻𝕠𝕨𝕟𝕠𝕒𝕕 (𝔼𝕩𝕡𝕖𝕣𝕚𝕞𝕖𝕟𝕥𝕒𝕝)`,
"rowId": `ytmp4 ${anu.url} 480p`
},
{
"title": "► 720p",
"description": `𝔻𝕠𝕨𝕟𝕠𝕒𝕕 (𝔼𝕩𝕡𝕖𝕣𝕚𝕞𝕖𝕟𝕥𝕒𝕝)`,
"rowId": `ytmp4 ${anu.url} 720p`
},
{
"title": "► 1080p",
"description": `𝔻𝕠𝕨𝕟𝕠𝕒𝕕 (𝔼𝕩𝕡𝕖𝕣𝕚𝕞𝕖𝕟𝕥𝕒𝕝)`,
"rowId": `ytmp4 ${anu.url} 1080p`
}]
}],
          listType: 1
                }
            }), {})
            
alienalfa.relayMessage(m.chat, template.message, { messageId: template.key.id })

}catch(err) { m.reply(m.chat, 'Some error Occoured while Processing', m) }
	
            }
            break
            
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
			
               case 'ytmp4': case 'ytvideo': case 'ytv': {
                let { ytv } = require('./lib/y2mate')

                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                try {
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                let tempimg = await (await fetch(`${profileimage}`)).buffer()
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                let infox = `${icon} ${media.title} 💕`
                        
alienalfa.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype:"video/mp4", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body: infox,
thumbnail: tempimg,
mediaType:2,
mediaUrl: `https://youtube.com/alienalfa`,
sourceUrl: `https://youtube.com/alienalfa`
}}}, {quoted:m})} catch(e){ 
            if (e.message.includes("reading")) return await m.reply("Only use Youtube Url, If You Want To Search Video Use .Play <your query text>"); 
            }}
            break
				
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) throw 'Reply Pesan'
                if (!m.quoted.isBaileys) throw `Can only reply to messages from bots`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) m.reply(m.chat, `Maybe the message you replied does not contain the ytsearch result`, m)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                alienalfa.sendImage(m.chat, media.thumb, `${icon} ᴛɪᴛʟᴇ : ${media.title}\n${icon} ꜰɪʟᴇ ꜱɪᴢᴇ : ${media.filesizeF}\n${icon} ᴜʀʟ : ${urls[text - 1]}\n${icon} ᴇxᴛ : ᴍᴘ3\n${icon} ʀᴇꜱᴏʟᴜᴛɪᴏɴ : ${args[1] || '128kbps'}`, m)
                alienalfa.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) throw 'Reply Pesan'
                if (!m.quoted.isBaileys) throw `ᴄᴀɴ ᴏɴʟʏ ʀᴇᴘʟʏ ᴛᴏ ᴍᴇꜱꜱᴀɢᴇꜱ ꜰʀᴏᴍ ʙᴏᴛꜱ`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) m.reply(m.chat, `ᴍᴀʏʙᴇ ᴛʜᴇ ᴍᴇꜱꜱᴀɢᴇ ʏᴏᴜ ʀᴇᴘʟɪᴇᴅ ᴅᴏᴇꜱ ɴᴏᴛ ᴄᴏɴᴛᴀɪɴ ᴛʜᴇ ʏᴛꜱᴇᴀʀᴄʜ ʀᴇꜱᴜʟᴛ`, m)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                alienalfa.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', ꜰɪʟᴇɴᴀᴍᴇ: `${media.title}.mp4`, caption: `${icon} ᴛɪᴛʟᴇ : ${media.title}\n${icon} ꜰɪʟᴇ ꜱɪᴢᴇ : ${media.filesizeF}\n${icon} ᴜʀʟ : ${urls[text - 1]}\n${icon}ᴇxᴛ : ᴍᴘ3\n${icon} ʀᴇꜱᴏʟᴜᴛɪᴏɴ : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'pinterest': {
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}

		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                alienalfa.sendMessage(m.chat, { image: { url: result }, caption: `${icon} ᴍᴇᴅɪᴀ ᴜʀʟ : `+result }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw global.notext
                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 
                let anu = await fetchJson('https://zenzapis.xyz/downloader/tiktok?apikey='+'apikey'+'&url='+text)
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► ᴡɪᴛʜ ᴡᴀᴛᴇʀᴍᴀʀᴋ' }, type: 2},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ ᴀᴜᴅɪᴏ' }, type: 2}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍ ${text}`,
                    footer: 'ᴘʀᴇꜱꜱ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ',
                    buttons: buttons,
                    headerType: 5
                }
                alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw global.notext
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► ɴᴏ ᴡᴀᴛᴇʀᴍᴀʀᴋ' }, type: 2},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ ᴀᴜᴅɪᴏ' }, type: 2}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍ ${text}`,
                    footer: 'ᴘʀᴇꜱꜱ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ',
                    buttons: buttons,
                    headerType: 5
                }
                alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw global.notext

                
                	if ( speedmode == 'active') {
                	let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► ɴᴏ ᴡᴀᴛᴇʀᴍᴀʀᴋ' }, type: 2},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► ᴡɪᴛʜ ᴡᴀᴛᴇʀᴍᴀʀᴋ' }, type: 2}
                ]
                let buttonMessage = {
                    text: `ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍ ${text}`,
                    footer: 'ᴘʀᴇꜱꜱ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
                alienalfa.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


                    case 'instagram': case 'ig': case 'igdl': case 'insta': {

                if (!m.quoted.text && !text) throw 'No Query Url!'
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text

                m.reply(mess.wait)
                try {

                let tempimg = await (await fetch(`${profileimage}`)).buffer()
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(budy)[0])) {
					
                    let json = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/downloader/instagram?url=${isUrl(teks)[0]}`)
                    for (let media of json.result){ alienalfa.sendMessage(m.chat, { video: { url: media.url }, mimetype: 'video/mp4', fileName: `Instagram Downloader`, caption: `𒆜Insta Downloader  `, contextInfo:{"externalAdReply": {"title": `---𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼---`,"body": `${linktext}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m}) }
                } else  {
					 try {
                    let json = await fetchJson(`https://api-toxic-devil.herokuapp.com/api/downloader/instagram-story/?username=${teks}`)
                    for (let media of json.result){ alienalfa.sendMessage(m.chat, { image: { url: media.url }, fileName: `Instagram Downloader`, caption: `𒆜Insta Downloader  `, contextInfo:{"externalAdReply": {"title": `---𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼---`,"body": `${linktext}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m}) }
                } catch (e) {
				m.reply('```Url Error```')
				}
				}
      }catch(err){

        let tempimg = await (await fetch('https://ih1.redbubble.net/image.1942835786.9251/st,small,507x507-pad,600x600,f8f8f8.jpg')).buffer()
        alienalfa.sendMessage(m.chat, { text: `ᴡᴇ ᴀʀᴇ ꜰᴀᴄɪɴɢ ꜱᴏᴍᴇ ɪꜱꜱᴜᴇ ᴡɪᴛʜ ᴛʜɪꜱ ʀᴇQᴜᴇꜱᴛ \nɪ ᴀᴍ ᴜɴᴀʙʟᴇ ᴛᴏ ᴜꜱᴇ ᴛʜɪꜱ ꜰᴇᴀᴛᴜʀᴇ\n\n🙇🏻  ꜱᴏʀʀʏ ꜰᴏʀ ᴛʜᴇ ɪɴᴄᴏɴᴠᴇɴɪᴇɴᴄᴇ`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})

      }
            }
            break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await alienalfa.sendImage(m.chat, anu.result.img, `${icon} ᴛɪᴛʟᴇ : ${anu.result.lagu}\n${icon} ᴀʟʙᴜᴍ : ${anu.result.album}\n${icon} ꜱɪɴɢᴇʀ : ${anu.result.penyanyi}\n${icon} ᴘᴜʙʟɪꜱʜ : ${anu.result.publish}\n${icon} ʟɪʀɪᴋ :\n${anu.result.lirik.result}`, m)
                alienalfa.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await alienalfa.sendImage(m.chat, anu.result.thumb, `${icon} ᴛɪᴛʟᴇ : ${anu.result.title}\n${icon} ᴜʀʟ : ${isUrl(text)[0]}`)
                alienalfa.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'twitdl': case 'twitter': {
                if (!text) throw global.notext
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio' }, type: 2}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw global.notext
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video' }, type: 2}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
                alienalfa.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw global.notext
                
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                alienalfa.sendMessage(m.chat, { video: { url: anu.result }, caption: `${icon} ᴛɪᴛʟᴇ : ${anu.result.title}`}, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw global.notext
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                alienalfa.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'umma': case 'ummadl': {
	        if (!text) throw `ᴇxᴀᴍᴘʟᴇ : ${prefix + command} ʜᴛᴛᴘꜱ://ᴜᴍᴍᴀ.ɪᴅ/ᴄʜᴀɴɴᴇʟ/ᴠɪᴅᴇᴏ/ᴘᴏꜱᴛ/ɢᴜꜱ-ᴀʀᴀꜰᴀᴛ-ꜱᴜᴍʙᴇʀ-ᴋᴇᴄᴇᴡᴀ-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ ᴀᴜᴅɪᴏ' }, type: 2},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► ᴠɪᴅᴇᴏ' }, type: 2}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
${icon} ᴛɪᴛʟᴇ : ${anu.title}
${icon} ᴀᴜᴛʜᴏʀ : ${anu.author.name}
${icon} ʟɪᴋᴇ : ${anu.like}
${icon} ᴄᴀᴘᴛɪᴏɴ : ${anu.caption}
${icon} ᴜʀʟ : ${anu.media[0]}
ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇᴅɪᴀ, ᴘʟᴇᴀꜱᴇ ᴄʟɪᴄᴋ ᴏɴᴇ ᴏꜰ ᴛʜᴇ ʙᴜᴛᴛᴏɴꜱ ʙᴇʟᴏᴡ ᴏʀ ᴇɴᴛᴇʀ ᴛʜᴇ ʏᴛᴍᴘ3/ʏᴛᴍᴘ4 ᴄᴏᴍᴍᴀɴᴅ ᴡɪᴛʜ ᴛʜᴇ ᴜʀʟ ᴀʙᴏᴠᴇ
`,
			footer: `${alfafooter}`,
			buttons,
			headerType: 4
		    }
		    alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        alienalfa.sendMessage(m.chat, { image: { url }, caption: `${icon} ᴛɪᴛʟᴇ : ${anu.title}\n${icon} Author : ${anu.author.name}\n${icon} Like : ${anu.like}\n${icon} Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
        case 'ringtone': {
		if (!text) throw`Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		alienalfa.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
/*






                                      █▀ █▀▀ ▄▀█ █▀█ █▀▀ █░█     █ █▀▄▀█ ▄▀█ █▀▀ █▀▀ █▀▄▀█ ▄▀█ █▄▀ █▀▀ █▀█
                                      ▄█ ██▄ █▀█ █▀▄ █▄▄ █▀█     █ █░▀░█ █▀█ █▄█ ██▄ █░▀░█ █▀█ █░█ ██▄ █▀▄





*/
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho` 
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `${icon} *ᴛɪᴛʟᴇ* : ${g.title}\n`
                teks += `${icon} *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ* : ${g.snippet}\n`
                teks += `${icon} *ʟɪɴᴋ* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
        case 'gimage': case 'image': case 'img': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'ɴᴇxᴛ ɪᴍᴀɢᴇ' }, type: 2}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 ɢɪᴍᴀɢᴇ ꜱᴇᴀʀᴄʜ 」-------*
 *Qᴜᴇʀʏ* : ${text}
 *ᴍᴇᴅɪᴀ ᴜʀʟ* : ${images}`,
                    footer: `${alfafooter}`,
                    buttons: buttons,
                    headerType: 4
                }
                alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

			
			case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'cosplay': case 'asupan': {
				
			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
                     selfies 

				let imgs = await (await fetch('https://zenzapis.xyz/randomanime/'+command+`?apikey=`+'apikey' )).buffer()

				 
				anu =  'Generate Random ' + command
				
				let btn = [{
                                urlButton: {
                                    displayText: `${linkbuttid2}`,
                                    url: `${linkurl2}`
                                }
                            },{
                                quickReplyButton: {
                                    displayText: 'ɴᴇxᴛ',
                                    id: command
                                }
                            }]
                 alienalfa.send5ButImg(m.chat, anu, `${alfafooter}`, imgs, btn)
			}
            break
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            
            case 'anime': {
			
						                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

				let imgs = await (await fetch('https://api-toxic-devil.herokuapp.com/api/random/anime?type=sfw')).buffer()
				
				anu =  'Generate Random Anime'
				
				let btn = [{
                                urlButton: {
                                    displayText: `${linkbuttid2}`,
                                    url: `${linkurl2}`
                                }
                            },{
                                quickReplyButton: {
                                    displayText: 'ɴᴇxᴛ',
                                    id: command
                                }
                            }]
                 alienalfa.send5ButImg(m.chat, anu, `${alfafooter}` +`\nᴛᴏxɪᴄ ᴅᴇᴠɪʟ`, imgs, btn)
			}
            break
            
            //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            
            case 'waifu': case 'neko':  {
			
						                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}

				let anu = await fetchJson('https://api.waifu.pics/sfw/'+command)
				
				let imgs = await (await fetch(anu.url)).buffer()

				anu2 =  'Generate Random'+command
				
				let btn = [{
                                urlButton: {
                                    displayText: `${linkbuttid2}`,
                                    url: `${linkurl2}`
                                }
                            },{
                                quickReplyButton: {
                                    displayText: 'ɴᴇxᴛ',
                                    id: command
                                }
                            }]
                 alienalfa.send5ButImg(m.chat, anu2, `${alfafooter}` +`\nʙᴇᴛᴀ ᴛᴇꜱᴛ`, imgs, btn)
			}
            break
			
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

	    case 'couple': {
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                alienalfa.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                alienalfa.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'ɴᴇxᴛ ɪᴍᴀɢᴇ' }, type: 2}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ ʀᴀɴᴅᴏᴍ ᴄᴏꜰꜰᴇ`,
                    footer: `${alfafooter}`,
                    buttons: buttons,
                    headerType: 4
                }
                alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'wallpaper': {
              if (!text)  throw 'Enter Query Title'
              let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'ɴᴇxᴛ ɪᴍᴀɢᴇ' }, type: 2}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `${icon} ᴛɪᴛʟᴇ : ${result.title}\n${icon} ᴄᴀᴛᴇɢᴏʀʏ : ${result.type}\n${icon} ᴅᴇᴛᴀɪʟ : ${result.source}\n${icon} ᴍᴇᴅɪᴀ ᴜʀʟ : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${alfafooter}`,
                    buttons: buttons,
                    headerType: 4
                }
                alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



		 
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'neko': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'shinobu': case 'megumin': case 'handhold': {



					let dat = await fetchJson('https://api.waifu.pics/sfw/'+command)
					let img = dat.url
					let imgs = await (await fetch(img)).buffer()
					
					alienalfa.sendVideoAsSticker(m.chat, imgs, m, { packname: global.packname, author: global.author })
					
				
				}
break

					
/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|
  
  °◦¸¸.◦°˚°◦☙°◦¸¸.◦°˚°◦☙ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥ 𝙀𝙓𝙏𝙍𝘼 𝙈𝙊𝘿𝙀𝘿 𝙊𝙍 𝘼𝘿𝙀𝘿 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 ♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡❧◦°˚°◦.¸¸◦°❧◦°˚°◦.¸¸◦°
  * 
  |⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 


case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {

	 

              if (!q) throw `Need some More Text \nExample : ${prefix + command} ${global.devname}`

             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                alienalfa.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: m })
             }

break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/

            case 'wikimedia': {
                if (!text)  throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'ɴᴇxᴛ ɪᴍᴀɢᴇ' }, type: 2}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${icon} ᴛɪᴛʟᴇ : ${result.title}\n${icon} ꜱᴏᴜʀᴄᴇ : ${result.source}\n${icon} ᴍᴇᴅɪᴀ ᴜʀʟ : ${result.image}`,
                    footer: `${alfafooter}`,
                    buttons: buttons,
                    headerType: 4
                }
                alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'ɴᴇxᴛ' }, type: 2}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'ᴘʀᴇꜱꜱ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ',
                    buttons: buttons,
                    headerType: 2
                }
                alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'motivation': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson('https://zenzapis.xyz/'+command+`?apikey=`+'apikey' )

                let buttons = [
                    {buttonId: `motivation`, buttonText: {displayText: 'ɴᴇxᴛ' }, type: 2}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'ᴘʀᴇꜱꜱ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ',
                    buttons: buttons,
                    headerType: 2
                }
                alienalfa.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text)  throw 'No Query Text'
                			                if ( speedmode == 'active') {
                				let tempimg = await (await fetch(`${profileimage}`)).buffer()
				alienalfa.sendMessage(m.chat, { text: `ʟᴏᴀᴅɪɴɢ...`, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `${linktext}`, "previewType": "preview","thumbnailUrl": ``,"thumbnail": tempimg ,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})
										}
				 

                alienalfa.sendMessage(m.chat, { image: { url: 'https://zenzapis.xyz/ephoto/' + command+'?text='+text+'&apikey='+'apikey' }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
			

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//			


	    case 'stalker': case 'stalk': {
		if (!isPremium && global.global.db.data.users[m.sender].limit < 1) throw 'ʏᴏᴜʀ ᴅᴀɪʟʏ ʟɪᴍɪᴛ ʜᴀꜱ ᴇxᴘɪʀᴇᴅ'
                if (!text) throw `Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    global.db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    global.db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    global.db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    global.db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id)  throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    global.db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig alien.alfa`


                    let { result: anu } = await fetchJson('https://zenzapis.xyz/stalker/ig?username'+id+'&apikey='+'apikey')
                    if (anu.status == false) return m.reply(anu.result.message)
                    alienalfa.sendMedia(m.chat, anu.caption.profile_hd, '', `${icon} ꜰᴜʟʟ ɴᴀᴍᴇ : ${anu.caption.full_name}\n${icon} ᴜꜱᴇʀ ɴᴀᴍᴇ : ${anu.caption.user_name}\n${icon} ɪᴅ ${anu.caption.user_id}\n${icon} ꜰᴏʟʟᴏᴡᴇʀꜱ : ${anu.caption.followers}\n${icon} ꜰᴏʟʟᴏᴡɪɴɢ : ${anu.caption.following}\n${icon} ʙᴜꜱꜱɪɴᴇꜱ : ${anu.caption.bussines}\n${icon} ᴘʀᴏꜰᴇꜱɪᴏɴᴀʟ : ${anu.caption.profesional}\n${icon} ᴠᴇʀɪꜰɪᴇᴅ : ${anu.caption.verified}\n${icon} ᴘʀɪᴠᴀᴛᴇ : ${anu.caption.private}\n${icon} ʙɪᴏ : ${anu.caption.biography}\n${icon} ʙɪᴏ ᴜʀʟ : ${anu.caption.bio_url}`, m)
		    global.db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`

                    

                    let { result: anu } = await fetchJson('https://zenzapis.xyz/stalker/npm?query'+id+'&apikey='+'apikey')
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`${icon} ɴᴀᴍᴇ : ${anu.name}\n${icon} ᴠᴇʀꜱɪᴏɴ : ${Object.keys(anu.versions)}\n${icon} ᴄʀᴇᴀᴛᴇᴅ : ${tanggal(anu.time.created)}\n${icon} ᴍᴏᴅɪꜰɪᴇᴅ : ${tanggal(anu.time.modified)}\n${icon} ᴍᴀɪɴᴛᴀɪɴᴇʀꜱ :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n${icon} ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ${anu.description}\n${icon} ʜᴏᴍᴇᴘᴀɢᴇ : ${anu.homepage}\n${icon} ᴋᴇʏᴡᴏʀᴅꜱ : ${anu.keywords}\n${icon} ᴀᴜᴛʜᴏʀ : ${anu.author.name}\n${icon} ʟɪᴄᴇɴꜱᴇ : ${anu.license}\n${icon} ʀᴇᴀᴅᴍᴇ : ${anu.readme}`)
		    global.db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


            case 'react': {
                if (!isCreator) throw mess.admin
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                alienalfa.sendMessage(m.chat, reactionMessage)
            }
            break  

         
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



            case 'setcmd': {
                if (!m.quoted) throw  'Reply Message!'
                if (!m.quoted.fileSha256) throw  'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.global.db.sticker[hash] && global.global.db.sticker[hash].locked) m.reply(m.chat, 'You have no permission to change this sticker command', m)
                global.global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) m.reply(m.chat, `No hashes`, m)
                if (global.global.db.sticker[hash] && global.global.db.sticker[hash].locked) m.reply(m.chat, 'You have no permission to delete this sticker command', m)
                delete global.global.db.sticker[hash]
                m.reply(`Done!`)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                alienalfa.sendText(m.chat, teks, m, { mentions: Object.values(global.global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'lockcmd': {
                if (!isCreator) throw mess.admin
                if (!m.quoted) throw m.chat, 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.global.db.sticker)) m.reply(m.chat, 'Hash not found in database', m)
                global.global.db.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'addmsg': {
                if (!m.quoted) m.reply(m.chat, 'Reply Message You Want To Save In Database', m)
                if (!text) m.reply(m.chat, `Example : ${prefix + command} nama file`, m)
                let msgs = global.global.global.db.ase
                if (text.toLowerCase() in msgs) m.reply(m.chat, `'${text}'has been registered in the message list`, m)
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}
View list of Messages With ${prefix}listmsg`)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'getmsg': {
                if (!text) m.reply(m.chat, `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`, m)
                let msgs = global.global.global.db.ase
                if (!(text.toLowerCase() in msgs)) m.reply(m.chat, `'${text}' not listed in the message list`, m)
                alienalfa.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.global.global.db.ase).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.global.global.db.ase
	        if (!(text.toLowerCase() in msgs))  throw `'${text}' not listed in the message list`
		delete msgs[text.toLowerCase()]
		m.reply(`Successfully removed '${text}' from message list`)
            }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 


            case 'public': {
                if (!isCreator) throw mess.admin
                alienalfa.public = true
                m.reply('Successful Change To public Usage')
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            case 'self': {
                if (!isCreator) throw mess.admin
                alienalfa.public = false
                m.reply('Successful Change To Self Usage')
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            case 'ping': case 'botstatus': case 'statusbot': case 'atst': {
				

                let buffimg = await (await fetch(`https://avatars.githubusercontent.com/u/64305844?v=4`)).buffer()
                const used = process.memoryUsage()
                let timestamp = speed()
                let latensi = speed() - timestamp
                
                neww = performance.now()
                oldd = performance.now()
                respon = `ᴘɪɴɢ: *${latensi.toFixed(4)}* sec`.trim()
               
alienalfa.sendMessage(m.chat, { text: respon, contextInfo:{"externalAdReply": {"title": `---${linkNAME}---`,"body": `𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())} >>>ᴄʟɪᴄᴋ ʜᴇʀᴇ<<<`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": buffimg,"sourceUrl": `${linkmsgurl}`}}}, { quoted: m})

            }
            
            break
            
                        case 'ping2': {
				
                const used = process.memoryUsage()
                let buffimg = await (await fetch(`https://avatars.githubusercontent.com/u/64305844?v=4`)).buffer()

                let timestamp = speed()
                let latensi = speed() - timestamp
                
                neww = performance.now()
                oldd = performance.now()
                respon = `
                
>>>ʙᴏᴛ ᴀᴄᴛɪᴠᴇ
ᴘɪɴɢ: *${latensi.toFixed(3)}* sec

Yeeee!! You Found it!!

Here is a Bonous Command!!
\nUse \`\`\`Cosplay\`\`\`\n

`.trim()
               
m.reply(respon)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            case 'owner': case 'creator': 
            
            {
                
                m.reply(`wa.me/${global.owner[0]}\n\n${ownermess}`)
            }
            break



//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



					case 'getsudo': {
					if (!isCreator) return 

                m.reply(global.sudo, m)

            }
            break


/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|
  
  °◦¸¸.◦°˚°◦☙°◦¸¸.◦°˚°◦☙ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥ 𝙀𝙓𝙏𝙍𝘼 𝙈𝙊𝘿𝙀𝘿 𝙊𝙍 𝘼𝘿𝙀𝘿 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 ♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡❧◦°˚°◦.¸¸◦°❧◦°˚°◦.¸¸◦°
  * 
  |⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 

case 'dev': case 'devoloper': {


                alienalfa.sendFontact(m.chat, global.devNum, m)



alienalfa.sendMessage(m.chat, {audio: devsound, mimetype:'audio/mpeg', ptt:true }, {quoted:m})

}
break



//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
/*






                                      █▀▄▀█ █▀▀ █▄░█ █░█
                                      █░▀░█ ██▄ █░▀█ █▄█





*/
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

//--------------------------------- MENU ---------------------------------


  case 'command': case 'menu': case 'help': case '?':{
   
var fontchange = `${az} ${alfaNAME} ${ay}
   ${bz}
   ${cz}
   ${cz} Name : ${alfaNAME}
   ${cz} Mode : ${global.worktype}
   ${cz} Server : ${herokuapp}
   ${cz} Ram: 1.00 GB
   ${cz} Version: ${gversion}
   ${cz} Prefix : Global
   ${cz} 
   ${cz} Ping   : ${latensi.toFixed(4)} ᴍꜱ
   ${cz} Runtime : ${runtime(process.uptime())}
   ${cz} 
   ${cz} 
   ${cz}${bcz}
   ${cz}${bcz}
   ${cz}  
   ${dz} 
   ${ez} `
																																																																																																	function _0x456e(_0x237db0,_0x514902){const _0x400857=_0x4008();return _0x456e=function(_0x456e44,_0x5d3d54){_0x456e44=_0x456e44-0x116;let _0x517f64=_0x400857[_0x456e44];return _0x517f64;},_0x456e(_0x237db0,_0x514902);}const _0x2b1e16=_0x456e;(function(_0x163772,_0x5548aa){const _0x1f5d27=_0x456e,_0x2f6f61=_0x163772();while(!![]){try{const _0x509f9e=-parseInt(_0x1f5d27(0x11e))/0x1+-parseInt(_0x1f5d27(0x11d))/0x2+-parseInt(_0x1f5d27(0x11b))/0x3+parseInt(_0x1f5d27(0x11f))/0x4*(parseInt(_0x1f5d27(0x117))/0x5)+parseInt(_0x1f5d27(0x11a))/0x6+-parseInt(_0x1f5d27(0x119))/0x7*(-parseInt(_0x1f5d27(0x11c))/0x8)+-parseInt(_0x1f5d27(0x118))/0x9;if(_0x509f9e===_0x5548aa)break;else _0x2f6f61['push'](_0x2f6f61['shift']());}catch(_0x329975){_0x2f6f61['push'](_0x2f6f61['shift']());}}}(_0x4008,0xc259b));function _0x4008(){const _0xcaa1ff=['1054952otqOsL','replaceAll','25DGPzgi','7859583KByYab','54607EMdVCU','6547062yhGuwn','2184792AWPEda','688WspBXo','538322dtbknN','413982SGfQUA'];_0x4008=function(){return _0xcaa1ff;};return _0x4008();}const AlfaFont=fontchange[_0x2b1e16(0x116)]('0','𝟘')[_0x2b1e16(0x116)]('1','𝟙')[_0x2b1e16(0x116)]('2','𝟚')['replaceAll']('3','𝟛')[_0x2b1e16(0x116)]('4','𝟜')[_0x2b1e16(0x116)]('5','𝟝')['replaceAll']('6','𝟞')[_0x2b1e16(0x116)]('7','𝟟')[_0x2b1e16(0x116)]('8','𝟠')['replaceAll']('9','𝟡')[_0x2b1e16(0x116)]('a','𝕒')[_0x2b1e16(0x116)]('b','𝕓')[_0x2b1e16(0x116)]('c','𝕔')[_0x2b1e16(0x116)]('d','𝕕')[_0x2b1e16(0x116)]('e','𝕖')[_0x2b1e16(0x116)]('f','𝕗')[_0x2b1e16(0x116)]('g','𝕘')['replaceAll']('h','𝕙')[_0x2b1e16(0x116)]('i','𝕚')[_0x2b1e16(0x116)]('j','𝕛')['replaceAll']('k','𝕜')[_0x2b1e16(0x116)]('l','𝕝')[_0x2b1e16(0x116)]('m','𝕞')[_0x2b1e16(0x116)]('n','𝕟')['replaceAll']('o','𝕠')[_0x2b1e16(0x116)]('p','𝕡')[_0x2b1e16(0x116)]('q','𝕢')[_0x2b1e16(0x116)]('r','𝕣')[_0x2b1e16(0x116)]('s','𝕤')[_0x2b1e16(0x116)]('t','𝕥')[_0x2b1e16(0x116)]('u','𝕦')[_0x2b1e16(0x116)]('v','𝕧')[_0x2b1e16(0x116)]('w','𝕨')[_0x2b1e16(0x116)]('x','𝕩')['replaceAll']('y','𝕪')[_0x2b1e16(0x116)]('z','𝕫')[_0x2b1e16(0x116)]('A','𝔸')['replaceAll']('B','𝔹')[_0x2b1e16(0x116)]('C','ℂ')[_0x2b1e16(0x116)]('D','𝔻')['replaceAll']('E','𝔼')[_0x2b1e16(0x116)]('F','𝔽')['replaceAll']('G','𝔾')[_0x2b1e16(0x116)]('H','ℍ')[_0x2b1e16(0x116)]('I','𝕀')[_0x2b1e16(0x116)]('J','𝕁')[_0x2b1e16(0x116)]('K','𝕂')[_0x2b1e16(0x116)]('L','𝕃')[_0x2b1e16(0x116)]('M','𝕄')['replaceAll']('N','ℕ')[_0x2b1e16(0x116)]('O','𝕆')[_0x2b1e16(0x116)]('P','ℙ')[_0x2b1e16(0x116)]('Q','ℚ')[_0x2b1e16(0x116)]('R','ℝ')[_0x2b1e16(0x116)]('S','𝕊')['replaceAll']('T','𝕋')[_0x2b1e16(0x116)]('U','𝕌')['replaceAll']('V','𝕍')[_0x2b1e16(0x116)]('W','𝕎')[_0x2b1e16(0x116)]('X','𝕏')['replaceAll']('Y','𝕐')[_0x2b1e16(0x116)]('Z','ℤ');
   let template = await generateWAMessageFromContent
  
   (m.chat, proto.Message.fromObject({
                   listMessage :{
                       title: ` `,
                       description: AlfaFont,
                       buttonText: "Menu",
                       footerText: `${alfaNAME}`,
                       listType: "SINGLE_SELECT",
                       sections: [{
               
   "title": `${alfaNAME}`,
   
   
   "rows": [{
   "title": `${listicon}  ᴀʟʟ ᴍᴇɴᴜ`,
   "description": `Full List Of Functions`,
   "rowId": `list alllmenu`
   }],
   "title": `${alfaNAME}`
   },
   
   {
   "rows": [{
   "title": `${listicon}  ɢʀᴏᴜᴘ ᴍᴇɴᴜ`,
   "description": `Display A List Of Group Features`,
   "rowId": `list grupmenu`
   }],
   "title": "───── ɢʀᴏᴜᴘ"
   },
   {
   "rows": [{
   "title": `${listicon} ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ`,
   "description": `Display A List Of Features To Download`,
   "rowId": `list downloadmenu`
   }],
   "title": "─────ᴅᴏᴡɴʟᴏᴀᴅ"
   },
   {
   "rows": [{
   "title": `${listicon} ᴍᴀᴋᴇʀ ᴍᴇɴᴜ`,
   "description": `Display A List Of Features To Create Logo`,
   "rowId": `list makermenu`
   }],
   "title": "─────ᴍᴀᴋᴇʀ"
   },
   {
   "rows": [{
   "title": `${listicon} ɢᴀᴍᴇ ᴍᴇɴᴜ`,
   "description": `Display A List Of Game Features`,
   "rowId": `list funmenu`
   }],
   "title": "─────ɢᴀᴍᴇ"
   },
   {
   "rows": [{
   "title": `${listicon} ʀᴀɴᴅᴏᴍ ɪᴍᴀɢᴇ ᴍᴇɴᴜ`,
   "description": `Display A List Of Random Photo Features`,
   "rowId": `list randommenu`
   }],
   "title": "─────ʀᴀɴᴅᴏᴍ"
   },
   {
   "rows": [{
   "title": `${listicon} ᴠᴏɪᴄᴇᴄʜᴀɴɢᴇʀ ᴍᴇɴᴜ`,
   "description": `Display A List Of Random Video Features`,
   "rowId": `list voicemenu`
   }],
   "title": "─────ᴠᴏɪᴄᴇ"
   },
   {
   "rows": [{
   "title": `${listicon} ᴇᴘʜᴏᴛᴏ ᴍᴇɴᴜ`,
   "description": `Ephoto Maker`,
   "rowId": `list ephotomenu`
   }],
   "title": "─────ᴘʜᴏᴛᴏ"
   },
   {
   "rows": [{
   "title": `${listicon} ᴘʜᴏᴛᴏᴍᴀᴋᴇʀ ᴍᴇɴᴜ`,
   "description": ``,
   "rowId": `list photomakermenu`
   }],
   "title": "─────ᴍᴀᴋᴇʀ"
   },
   {
   "rows": [{
   "title": `${listicon} ꜰᴜɴ ᴍᴇɴᴜ`,
   "description": `List of Fun Features`,
   "rowId": `list funmenu`
   }],
   "title": "─────ꜰᴜɴ"
   },
   {
   "rows": [{
   "title": `${listicon} ᴀɴᴏɴʏᴍᴏᴜꜱ ᴄʜᴀᴛ`,
   "description": ``,
   "rowId": `list anonymouschatmenu`
   }],
   "title": "─────ᴄʜᴀᴛ"
   },
   {
   "rows": [{
   "title": `${listicon} ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ`,
   "description": `Display A List Of Convert Features`,
   "rowId": `list convertmenu`
   }],
   "title": "─────ᴄᴏɴᴠᴇʀᴛᴇʀ"
   },
   {
   "rows": [{
   "title": `${listicon} ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ`,
   "description": `Display A List Of Searching Features`,
   "rowId": `list searchmenu`
   }],
   "title": "─────ꜱᴇᴀʀᴄʜ"
   },
   {
   "rows": [{
   "title": `${listicon} ᴅᴀᴛᴀʙᴀꜱᴇ ᴍᴇɴᴜ`,
   "description": ``,
   "rowId": `list databasemenu`
   }],
   "title": "─────ᴅᴀᴛᴀʙᴀꜱᴇ"
   },
   {
   "rows": [{
   "title": `${listicon} ᴍᴀɪɴ ᴍᴇɴᴜ`,
   "description": `Display A List Of Other Features`,
   "rowId": `list mainmenu`
   }],
   "title": "─────ᴍᴀɪɴ"
   },
   {
   "rows": [{
   "title": `${listicon} ᴏᴡɴᴇʀ ᴍᴇɴᴜ`,
   "description": `Display A List Of Owner Features`,
   "rowId": `list ownermenu`
   }],
"title": "─────ᴏᴡɴᴇʀ"
}
],
          listType: 1
                }
            }), {})

            alienalfa.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
  	
  //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'list': {

if (!text) throw 'Use Command: ```menu```'

  let template = await generateWAMessageFromContent

  try {
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
  
 let grupmenu = `
 
 ${az} *Group Menu* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}linkgroup
 ┃✩│ ${prefix}ephemeral [option]
 ┃✩│ ${prefix}setppgc [image]
 ┃✩│ ${prefix}setname [text]
 ┃✩│ ${prefix}setdesc [text]
 ┃✩│ ${prefix}group [option]
 ┃✩│ ${prefix}editinfo [option]
 ┃✩│ ${prefix}add @user
 ┃✩│ ${prefix}kick @user
 ┃✩│ ${prefix}hidetag [text]
 ┃✩│ ${prefix}tagall [text]
 ┃✩│ ${prefix}antilink [on/off]
 ┃✩│ ${prefix}mute [on/off]
 ┃✩│ ${prefix}promote @user
 ┃✩│ ${prefix}demote @user
 ┃✩│ ${prefix}vote [text]
 ┃✩│ ${prefix}devote
 ┃✩│ ${prefix}upvote
 ┃✩│ ${prefix}cekvote
 ┃✩│ ${prefix}hapusvote
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`
             
 
 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

 let downloadmenu = `
  
 ${az} *Downloader Menu* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}tiktoknowm [url]
 ┃✩│ ${prefix}tiktokwm [url]
 ┃✩│ ${prefix}tiktokmp3 [url]
 ┃✩│ ${prefix}instagram [url] 
 ┃✩│ ${prefix}twitter [url]
 ┃✩│ ${prefix}twittermp3 [url]
 ┃✩│ ${prefix}facebook [url]
 ┃✩│ ${prefix}pinterestdl [url]
 ┃✩│ ${prefix}ytmp3 [url]
 ┃✩│ ${prefix}ytmp4 [url]
 ┃✩│ ${prefix}getmusic [query]
 ┃✩│ ${prefix}getvideo [query]
 ┃✩│ ${prefix}umma [url]
 ┃✩│ ${prefix}joox [query]
 ┃✩│ ${prefix}soundcloud [url]
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`
             
             
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
             

 let searchmenu = `
              
 ${az} *Search Menu* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}play [query]
 ┃✩│ ${prefix}song [query]
 ┃✩│ ${prefix}video [query]
 ┃✩│ ${prefix}yts [query]
 ┃✩│ ${prefix}google [query]
 ┃✩│ ${prefix}gimage [query]
 ┃✩│ ${prefix}pinterest [query]
 ┃✩│ ${prefix}wallpaper [query]
 ┃✩│ ${prefix}wikimedia [query]
 ┃✩│ ${prefix}ytsearch [query]
 ┃✩│ ${prefix}ringtone [query]
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`

 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

 let randommenu = `
  
 ${az} *Random Menu* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}coffee
 ┃✩│ ${prefix}couplepp
 ┃✩│ ${prefix}coffe
 ┃✩│ ${prefix}quotesanime
 ┃✩│ ${prefix}motivasi
 ┃✩│ ${prefix}dilanquote
 ┃✩│ ${prefix}bucinquote
 ┃✩│ ${prefix}katasenja
 ┃✩│ ${prefix}puisi
 ┃✩│ ${prefix}couple
 ┃✩│ ${prefix}anime
 ┃✩│ ${prefix}waifu
 ┃✩│ ${prefix}husbu
 ┃✩│ ${prefix}neko
 ┃✩│ ${prefix}shinobu
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`

 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

 let funmenu = `
  
 ${az} *Fun Menu* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}halah
 ┃✩│ ${prefix}hilih
 ┃✩│ ${prefix}huluh
 ┃✩│ ${prefix}heleh
 ┃✩│ ${prefix}holoh
 ┃✩│ ${prefix}jadian
 ┃✩│ ${prefix}jodohku
 ┃✩│ ${prefix}delttt
 ┃✩│ ${prefix}tictactoe
 ┃✩│ ${prefix}math [mode]
 ┃✩│ ${prefix}suitpvp [@tag]
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`

 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

 let voicemenu = `
  
 ${az} *Voice Changer* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}bass
 ┃✩│ ${prefix}blown
 ┃✩│ ${prefix}deep
 ┃✩│ ${prefix}earrape
 ┃✩│ ${prefix}fast
 ┃✩│ ${prefix}fat
 ┃✩│ ${prefix}nightcore
 ┃✩│ ${prefix}reverse
 ┃✩│ ${prefix}robot
 ┃✩│ ${prefix}slow
 ┃✩│ ${prefix}tupai
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`

 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

 let ephotomenu = `
  
 ${az} *Ephoto Menu* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}ffcover
 ┃✩│ ${prefix}crossfire
 ┃✩│ ${prefix}galaxy
 ┃✩│ ${prefix}glass
 ┃✩│ ${prefix}neon
 ┃✩│ ${prefix}beach
 ┃✩│ ${prefix}blackpink
 ┃✩│ ${prefix}igcertificate
 ┃✩│ ${prefix}ytcertificate
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`

 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

 let photomakermenu = `

 ${az} *Photo Oxy Menu* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}shadow
 ┃✩│ ${prefix}romantic
 ┃✩│ ${prefix}smoke
 ┃✩│ ${prefix}burnpapper
 ┃✩│ ${prefix}naruto
 ┃✩│ ${prefix}lovemsg
 ┃✩│ ${prefix}grassmsg
 ┃✩│ ${prefix}lovetext
 ┃✩│ ${prefix}coffecup
 ┃✩│ ${prefix}butterfly
 ┃✩│ ${prefix}harrypotter
 ┃✩│ ${prefix}retrolol
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`

 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

 let convertmenu = `
  
 ${az} *Convert Menu* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}toimage
 ┃✩│ ${prefix}removebg
 ┃✩│ ${prefix}sticker
 ┃✩│ ${prefix}emojimix
 ┃✩│ ${prefix}tovideo
 ┃✩│ ${prefix}togif
 ┃✩│ ${prefix}tourl
 ┃✩│ ${prefix}tovn
 ┃✩│ ${prefix}tomp3
 ┃✩│ ${prefix}toaudio
 ┃✩│ ${prefix}ebinary
 ┃✩│ ${prefix}dbinary
 ┃✩│ ${prefix}styletext
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`

 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

 let mainmenu = `
  
 ${az} *Main Menu* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}ping
 ┃✩│ ${prefix}owner
 ┃✩│ ${prefix}menu / ${prefix}help / ${prefix}?
 ┃✩│ ${prefix}delete
 ┃✩│ ${prefix}infochat
 ┃✩│ ${prefix}quoted
 ┃✩│ ${prefix}listpc
 ┃✩│ ${prefix}listgc
 ┃✩│ ${prefix}listonline
 ┃✩│ ${prefix}report (report bug to owner)
 ┃✩│ ${prefix}heroku
 ┃✩│ ${prefix}restart
 ┃✩│ ${prefix}dyno
 ┃✩│ ${prefix}shutdown
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`

 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

 let databasemenu = `
  
 ${az} ${alfaNAME} ${ay}
 ${bz}*Database Menu*
 ┃✩│
 ┃✩│ ${prefix}setcmd
 ┃✩│ ${prefix}listcmd
 ┃✩│ ${prefix}delcmd
 ┃✩│ ${prefix}lockcmd
 ┃✩│ ${prefix}addmsg
 ┃✩│ ${prefix}listmsg
 ┃✩│ ${prefix}getmsg
 ┃✩│ ${prefix}delmsg
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`

 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

let anonymouschatmenu = `
  
 ${az} *Anonymous Menu* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}anonymous
 ┃✩│ ${prefix}start
 ┃✩│ ${prefix}next
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}	`

 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

 let sistemmenu = `

   *System Menu*
   
   ➙ ${prefix}antilink On/Off
   ➙ ${prefix}mute On/Off
   ➙ ${prefix}antiwame On/Off
 `

 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

 let ownermenu = `

 ${az} *Owner Menu* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}chat [option]
 ┃✩│ ${prefix}join [link]
 ┃✩│ ${prefix}leave
 ┃✩│ ${prefix}block @user
 ┃✩│ ${prefix}unblock @user
 ┃✩│ ${prefix}bcgroup [text]
 ┃✩│ ${prefix}bcall [text]
 ┃✩│ ${prefix}setppbot [image]
 ┃✩│ ${prefix}setexif
 ┃✩│ ${prefix}heroku
 ┃✩│ ${prefix}restart
 ┃✩│ ${prefix}dyno
 ┃✩│ ${prefix}shutdown
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez} `

 
 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 

 let makermenu = `

 ${az} *Text Pro Menu* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}candy
 ┃✩│ ${prefix}christmas
 ┃✩│ ${prefix}3dchristmas
 ┃✩│ ${prefix}sparklechristmas
 ┃✩│ ${prefix}deepsea
 ┃✩│ ${prefix}scifi
 ┃✩│ ${prefix}rainbow
 ┃✩│ ${prefix}waterpipe
 ┃✩│ ${prefix}spooky
 ┃✩│ ${prefix}pencil
 ┃✩│ ${prefix}circuit
 ┃✩│ ${prefix}discovery
 ┃✩│ ${prefix}metalic
 ┃✩│ ${prefix}fiction
 ┃✩│ ${prefix}demon
 ┃✩│ ${prefix}transformer
 ┃✩│ ${prefix}berry
 ┃✩│ ${prefix}thunder
 ┃✩│ ${prefix}magma
 ┃✩│ ${prefix}3dstone
 ┃✩│ ${prefix}neonlight
 ┃✩│ ${prefix}glitch
 ┃✩│ ${prefix}harrypotter
 ┃✩│ ${prefix}brokenglass
 ┃✩│ ${prefix}papercut
 ┃✩│ ${prefix}watercolor
 ┃✩│ ${prefix}multicolor
 ┃✩│ ${prefix}neondevil
 ┃✩│ ${prefix}underwater
 ┃✩│ ${prefix}graffitibike
 ┃✩│ ${prefix}snow
 ┃✩│ ${prefix}cloud
 ┃✩│ ${prefix}honey
 ┃✩│ ${prefix}ice
 ┃✩│ ${prefix}fruitjuice
 ┃✩│ ${prefix}biscuit
 ┃✩│ ${prefix}wood
 ┃✩│ ${prefix}chocolate
 ┃✩│ ${prefix}strawberry
 ┃✩│ ${prefix}matrix
 ┃✩│ ${prefix}blood
 ┃✩│ ${prefix}dropwater
 ┃✩│ ${prefix}toxic
 ┃✩│ ${prefix}lava
 ┃✩│ ${prefix}rock
 ┃✩│ ${prefix}bloodglas
 ┃✩│ ${prefix}hallowen
 ┃✩│ ${prefix}darkgold
 ┃✩│ ${prefix}joker
 ┃✩│ ${prefix}wicker
 ┃✩│ ${prefix}firework
 ┃✩│ ${prefix}skeleton
 ┃✩│ ${prefix}blackpink
 ┃✩│ ${prefix}sand
 ┃✩│ ${prefix}glue
 ┃✩│ ${prefix}1917
 ┃✩│ ${prefix}leaves
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`

 
 
 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 

   let alllmenu = `${az} ${alfaNAME} ${ay}
 ${bz}
 ┃✩│
 ┃✩│ 𝕆𝕨𝕟𝕖𝕣 : ${alfaNAME}
 ┃✩│ 𝕄𝕠𝕕𝕖 : ${global.worktype}
 ┃✩│ 𝕊𝕖𝕣𝕧𝕖𝕣 : ${herokuapp}
 ┃✩│ ℝ𝕒𝕞: 0.5GB
 ┃✩│ 𝕍𝕖𝕣𝕤𝕚𝕠𝕟: ${gversion}
 ┃✩│ ℙ𝕣𝕖𝕗𝕚𝕩 : Global
 ┃✩│ 
 ┃✩│ ℙ𝕚𝕟𝕘   : ${latensi.toFixed(4)} ᴍꜱ
 ┃✩│ ℝ𝕦𝕟𝕥𝕚𝕞𝕖 : ${runtime(process.uptime())}
 ┃✩│ 
 ┃✩│ 
 ┃✩│${bcz}
 ┃✩│${bcz}
 ┃✩│  
 ${dz} 
 ${ez} 
 
 ${az} *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}linkgroup
 ┃✩│ ${prefix}ephemeral [option]
 ┃✩│ ${prefix}setppgc [image]
 ┃✩│ ${prefix}setname [text]
 ┃✩│ ${prefix}setdesc [text]
 ┃✩│ ${prefix}group [option]
 ┃✩│ ${prefix}editinfo [option]
 ┃✩│ ${prefix}add @user
 ┃✩│ ${prefix}kick @user
 ┃✩│ ${prefix}hidetag [text]
 ┃✩│ ${prefix}tagall [text]
 ┃✩│ ${prefix}antilink [on/off]
 ┃✩│ ${prefix}mute [on/off]
 ┃✩│ ${prefix}promote @user
 ┃✩│ ${prefix}demote @user
 ┃✩│ ${prefix}vote [text]
 ┃✩│ ${prefix}devote
 ┃✩│ ${prefix}upvote
 ┃✩│ ${prefix}cekvote
 ┃✩│ ${prefix}hapusvote
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} *ᴍᴀɪɴ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}ping
 ┃✩│ ${prefix}owner
 ┃✩│ ${prefix}menu / ${prefix}help / ${prefix}?
 ┃✩│ ${prefix}delete
 ┃✩│ ${prefix}infochat
 ┃✩│ ${prefix}quoted
 ┃✩│ ${prefix}listpc
 ┃✩│ ${prefix}listgc
 ┃✩│ ${prefix}listonline
 ┃✩│ ${prefix}report (report bug to owner)
 ┃✩│ ${prefix}heroku
 ┃✩│ ${prefix}restart
 ┃✩│ ${prefix}dyno
 ┃✩│ ${prefix}shutdown
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}tiktoknowm [url]
 ┃✩│ ${prefix}tiktokwm [url]
 ┃✩│ ${prefix}tiktokmp3 [url]
 ┃✩│ ${prefix}instagram [url] 
 ┃✩│ ${prefix}twitter [url]
 ┃✩│ ${prefix}twittermp3 [url]
 ┃✩│ ${prefix}facebook [url]
 ┃✩│ ${prefix}pinterestdl [url]
 ┃✩│ ${prefix}ytmp3 [url]
 ┃✩│ ${prefix}ytmp4 [url]
 ┃✩│ ${prefix}getmusic [query]
 ┃✩│ ${prefix}getvideo [query]
 ┃✩│ ${prefix}umma [url]
 ┃✩│ ${prefix}joox [query]
 ┃✩│ ${prefix}soundcloud [url]
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}play [query]
 ┃✩│ ${prefix}song [query]
 ┃✩│ ${prefix}video [query]
 ┃✩│ ${prefix}yts [query]
 ┃✩│ ${prefix}google [query]
 ┃✩│ ${prefix}gimage [query]
 ┃✩│ ${prefix}pinterest [query]
 ┃✩│ ${prefix}wallpaper [query]
 ┃✩│ ${prefix}wikimedia [query]
 ┃✩│ ${prefix}ytsearch [query]
 ┃✩│ ${prefix}ringtone [query]
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} *ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}coffee
 ┃✩│ ${prefix}couplepp
 ┃✩│ ${prefix}coffe
 ┃✩│ ${prefix}quotesanime
 ┃✩│ ${prefix}motivasi
 ┃✩│ ${prefix}dilanquote
 ┃✩│ ${prefix}bucinquote
 ┃✩│ ${prefix}katasenja
 ┃✩│ ${prefix}puisi
 ┃✩│ ${prefix}couple
 ┃✩│ ${prefix}anime
 ┃✩│ ${prefix}waifu
 ┃✩│ ${prefix}husbu
 ┃✩│ ${prefix}neko
 ┃✩│ ${prefix}shinobu
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} *ᴛᴇxᴛ ᴘʀᴏ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}candy
 ┃✩│ ${prefix}christmas
 ┃✩│ ${prefix}3dchristmas
 ┃✩│ ${prefix}sparklechristmas
 ┃✩│ ${prefix}deepsea
 ┃✩│ ${prefix}scifi
 ┃✩│ ${prefix}rainbow
 ┃✩│ ${prefix}waterpipe
 ┃✩│ ${prefix}spooky
 ┃✩│ ${prefix}pencil
 ┃✩│ ${prefix}circuit
 ┃✩│ ${prefix}discovery
 ┃✩│ ${prefix}metalic
 ┃✩│ ${prefix}fiction
 ┃✩│ ${prefix}demon
 ┃✩│ ${prefix}transformer
 ┃✩│ ${prefix}berry
 ┃✩│ ${prefix}thunder
 ┃✩│ ${prefix}magma
 ┃✩│ ${prefix}3dstone
 ┃✩│ ${prefix}neonlight
 ┃✩│ ${prefix}glitch
 ┃✩│ ${prefix}harrypotter
 ┃✩│ ${prefix}brokenglass
 ┃✩│ ${prefix}papercut
 ┃✩│ ${prefix}watercolor
 ┃✩│ ${prefix}multicolor
 ┃✩│ ${prefix}neondevil
 ┃✩│ ${prefix}underwater
 ┃✩│ ${prefix}graffitibike
 ┃✩│ ${prefix}snow
 ┃✩│ ${prefix}cloud
 ┃✩│ ${prefix}honey
 ┃✩│ ${prefix}ice
 ┃✩│ ${prefix}fruitjuice
 ┃✩│ ${prefix}biscuit
 ┃✩│ ${prefix}wood
 ┃✩│ ${prefix}chocolate
 ┃✩│ ${prefix}strawberry
 ┃✩│ ${prefix}matrix
 ┃✩│ ${prefix}blood
 ┃✩│ ${prefix}dropwater
 ┃✩│ ${prefix}toxic
 ┃✩│ ${prefix}lava
 ┃✩│ ${prefix}rock
 ┃✩│ ${prefix}bloodglas
 ┃✩│ ${prefix}hallowen
 ┃✩│ ${prefix}darkgold
 ┃✩│ ${prefix}joker
 ┃✩│ ${prefix}wicker
 ┃✩│ ${prefix}firework
 ┃✩│ ${prefix}skeleton
 ┃✩│ ${prefix}blackpink
 ┃✩│ ${prefix}sand
 ┃✩│ ${prefix}glue
 ┃✩│ ${prefix}1917
 ┃✩│ ${prefix}leaves
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} *ᴘʜᴏᴛᴏ ᴏxʏ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}shadow
 ┃✩│ ${prefix}romantic
 ┃✩│ ${prefix}smoke
 ┃✩│ ${prefix}burnpapper
 ┃✩│ ${prefix}naruto
 ┃✩│ ${prefix}lovemsg
 ┃✩│ ${prefix}grassmsg
 ┃✩│ ${prefix}lovetext
 ┃✩│ ${prefix}coffecup
 ┃✩│ ${prefix}butterfly
 ┃✩│ ${prefix}harrypotter
 ┃✩│ ${prefix}retrolol
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} *ᴇᴘʜᴏᴛᴏ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}ffcover
 ┃✩│ ${prefix}crossfire
 ┃✩│ ${prefix}galaxy
 ┃✩│ ${prefix}glass
 ┃✩│ ${prefix}neon
 ┃✩│ ${prefix}beach
 ┃✩│ ${prefix}blackpink
 ┃✩│ ${prefix}igcertificate
 ┃✩│ ${prefix}ytcertificate
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} *ꜰᴜɴ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}halah
 ┃✩│ ${prefix}hilih
 ┃✩│ ${prefix}huluh
 ┃✩│ ${prefix}heleh
 ┃✩│ ${prefix}holoh
 ┃✩│ ${prefix}jadian
 ┃✩│ ${prefix}jodohku
 ┃✩│ ${prefix}delttt
 ┃✩│ ${prefix}tictactoe
 ┃✩│ ${prefix}math [mode]
 ┃✩│ ${prefix}suitpvp [@tag]
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} *ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}toimage
 ┃✩│ ${prefix}removebg
 ┃✩│ ${prefix}sticker
 ┃✩│ ${prefix}emojimix
 ┃✩│ ${prefix}tovideo
 ┃✩│ ${prefix}togif
 ┃✩│ ${prefix}tourl
 ┃✩│ ${prefix}tovn
 ┃✩│ ${prefix}tomp3
 ┃✩│ ${prefix}toaudio
 ┃✩│ ${prefix}ebinary
 ┃✩│ ${prefix}dbinary
 ┃✩│ ${prefix}styletext
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} *ᴅᴀᴛᴀʙᴀꜱᴇ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}setcmd
 ┃✩│ ${prefix}listcmd
 ┃✩│ ${prefix}delcmd
 ┃✩│ ${prefix}lockcmd
 ┃✩│ ${prefix}addmsg
 ┃✩│ ${prefix}listmsg
 ┃✩│ ${prefix}getmsg
 ┃✩│ ${prefix}delmsg
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} *ᴀɴᴏɴʏᴍᴏᴜꜱ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}anonymous
 ┃✩│ ${prefix}start
 ┃✩│ ${prefix}next
 ┃✩│
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} ${alfaNAME} ${ay}
 ${bz}*ᴠᴏɪᴄᴇ ᴄʜᴀɴɢᴇʀ*
 ┃✩│
 ┃✩│ ${prefix}bass
 ┃✩│ ${prefix}blown
 ┃✩│ ${prefix}deep
 ┃✩│ ${prefix}earrape
 ┃✩│ ${prefix}fast
 ┃✩│ ${prefix}fat
 ┃✩│ ${prefix}nightcore
 ┃✩│ ${prefix}reverse
 ┃✩│ ${prefix}robot
 ┃✩│ ${prefix}slow
 ┃✩│ ${prefix}tupai
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}
 
 ${az} *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* ${ay}
 ${bz}
 ┃✩│
 ┃✩│ ${prefix}chat [option]
 ┃✩│ ${prefix}join [link]
 ┃✩│ ${prefix}leave
 ┃✩│ ${prefix}block @user
 ┃✩│ ${prefix}unblock @user
 ┃✩│ ${prefix}bcgroup [text]
 ┃✩│ ${prefix}bcall [text]
 ┃✩│ ${prefix}setppbot [image]
 ┃✩│ ${prefix}setexif
 ┃✩│ ${prefix}heroku
 ┃✩│ ${prefix}restart
 ┃✩│ ${prefix}dyno
 ┃✩│ ${prefix}shutdown
 ┃✩│
 ┃✩│${bcz}
 ${dz} 
 ${ez}`
 
       if (args[0] === 'grupmenu') anu = grupmenu
       if (args[0] === 'downloadmenu') anu = downloadmenu
       if (args[0] === 'searchmenu') anu = searchmenu
       if (args[0] === 'randommenu') anu = randommenu
       if (args[0] === 'funmenu') anu = funmenu
       if (args[0] === 'voicemenu') anu = voicemenu
       if (args[0] === 'ephotomenu') anu = ephotomenu
       if (args[0] === 'photomakermenu') anu = photomakermenu
       if (args[0] === 'convertmenu') anu = convertmenu
       if (args[0] === 'mainmenu') anu = mainmenu
       if (args[0] === 'databasemenu') anu = databasemenu
       if (args[0] === 'anonymouschatmenu') anu = anonymouschatmenu
       if (args[0] === 'ownermenu') anu = ownermenu
       if (args[0] === 'makermenu') anu = makermenu
       if (args[0] === 'alllmenu') anu = alllmenu
 
 
  //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
																																																																																																																																													var _0x24e9d6=_0x27bf;(function(_0x1e5a07,_0x1b0ff1){var _0x1272ab=_0x27bf,_0x3ab925=_0x1e5a07();while(!![]){try{var _0x20c9eb=-parseInt(_0x1272ab(0x191))/0x1+parseInt(_0x1272ab(0x18f))/0x2+parseInt(_0x1272ab(0x196))/0x3*(-parseInt(_0x1272ab(0x18c))/0x4)+-parseInt(_0x1272ab(0x190))/0x5*(-parseInt(_0x1272ab(0x18d))/0x6)+-parseInt(_0x1272ab(0x192))/0x7*(-parseInt(_0x1272ab(0x18e))/0x8)+-parseInt(_0x1272ab(0x193))/0x9+-parseInt(_0x1272ab(0x195))/0xa*(-parseInt(_0x1272ab(0x194))/0xb);if(_0x20c9eb===_0x1b0ff1)break;else _0x3ab925['push'](_0x3ab925['shift']());}catch(_0x22133b){_0x3ab925['push'](_0x3ab925['shift']());}}}(_0x38a6,0x7170d));function _0x38a6(){var _0x4c67fe=['2663896DOdWAU','683550CzSmIo','513870RdIRHW','669447AsCyKu','7fjTurO','5441364poSSsK','2816BqYyHj','53410LaqJVr','47148HfwOYk','replaceAll','208FIzbtj','30zDnuEy'];_0x38a6=function(){return _0x4c67fe;};return _0x38a6();}function _0x27bf(_0x2a1846,_0x5d24b1){var _0x38a665=_0x38a6();return _0x27bf=function(_0x27bf4f,_0x111cdc){_0x27bf4f=_0x27bf4f-0x18c;var _0x2ba13d=_0x38a665[_0x27bf4f];return _0x2ba13d;},_0x27bf(_0x2a1846,_0x5d24b1);}var AlfaFont=anu[_0x24e9d6(0x197)]('0','𝟘')['replaceAll']('1','𝟙')[_0x24e9d6(0x197)]('2','𝟚')[_0x24e9d6(0x197)]('3','𝟛')[_0x24e9d6(0x197)]('4','𝟜')[_0x24e9d6(0x197)]('5','𝟝')[_0x24e9d6(0x197)]('6','𝟞')[_0x24e9d6(0x197)]('7','𝟟')[_0x24e9d6(0x197)]('8','𝟠')[_0x24e9d6(0x197)]('9','𝟡')[_0x24e9d6(0x197)]('a','𝕒')[_0x24e9d6(0x197)]('b','𝕓')[_0x24e9d6(0x197)]('c','𝕔')[_0x24e9d6(0x197)]('d','𝕕')[_0x24e9d6(0x197)]('e','𝕖')['replaceAll']('f','𝕗')['replaceAll']('g','𝕘')['replaceAll']('h','𝕙')['replaceAll']('i','𝕚')['replaceAll']('j','𝕛')['replaceAll']('k','𝕜')[_0x24e9d6(0x197)]('l','𝕝')[_0x24e9d6(0x197)]('m','𝕞')['replaceAll']('n','𝕟')[_0x24e9d6(0x197)]('o','𝕠')[_0x24e9d6(0x197)]('p','𝕡')[_0x24e9d6(0x197)]('q','𝕢')['replaceAll']('r','𝕣')[_0x24e9d6(0x197)]('s','𝕤')['replaceAll']('t','𝕥')[_0x24e9d6(0x197)]('u','𝕦')[_0x24e9d6(0x197)]('v','𝕧')[_0x24e9d6(0x197)]('w','𝕨')[_0x24e9d6(0x197)]('x','𝕩')['replaceAll']('y','𝕪')[_0x24e9d6(0x197)]('z','𝕫')[_0x24e9d6(0x197)]('A','𝔸')[_0x24e9d6(0x197)]('B','𝔹')[_0x24e9d6(0x197)]('C','ℂ')[_0x24e9d6(0x197)]('D','𝔻')[_0x24e9d6(0x197)]('E','𝔼')[_0x24e9d6(0x197)]('F','𝔽')[_0x24e9d6(0x197)]('G','𝔾')['replaceAll']('H','ℍ')[_0x24e9d6(0x197)]('I','𝕀')['replaceAll']('J','𝕁')[_0x24e9d6(0x197)]('K','𝕂')[_0x24e9d6(0x197)]('L','𝕃')['replaceAll']('M','𝕄')[_0x24e9d6(0x197)]('N','ℕ')['replaceAll']('O','𝕆')['replaceAll']('P','ℙ')[_0x24e9d6(0x197)]('Q','ℚ')[_0x24e9d6(0x197)]('R','ℝ')[_0x24e9d6(0x197)]('S','𝕊')['replaceAll']('T','𝕋')[_0x24e9d6(0x197)]('U','𝕌')['replaceAll']('V','𝕍')[_0x24e9d6(0x197)]('W','𝕎')[_0x24e9d6(0x197)]('X','𝕏')[_0x24e9d6(0x197)]('Y','𝕐')[_0x24e9d6(0x197)]('Z','ℤ');
  let tempimg = await (await fetch(`${profileimage}`)).buffer()


let btn = [{
  urlButton: {
      displayText: `${linkbuttid1}`,
      url: `${linkurl1}`
  }
}, {
  urlButton: {
      displayText: `${linkbuttid2}`,
      url: `${linkurl2}`
  }
}, {
  quickReplyButton: {
      displayText: '𝕄𝔼ℕ𝕌',
      id: 'menu'
  }  
}]
              
   alienalfa.send5ButImg(m.chat, `${AlfaFont}`, `${alfafooter}`, tempimg, btn) 


} catch(err) { m.reply(m.chat, `${err}`, m) }

}
break


  //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


			case 'videoh': case 'songh': case 'playh': case 'doch': case 'igh': case 'menuh': {
       
                                m.reply(`${alfaNAME}\n this option is under work`)

            }
            break
            
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


	case 'jid': 
	   {
		   	   m.reply('```Jid: '+m.chat+'```')
	   
	   }
    break

	
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


			case 'tqto': {
                anu = `┌──────────────𒆜 
│  ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ᴛᴏ
└───────𒆜`
let tempimg = await (await fetch(`${profileimage}`)).buffer()
                   let btn = [{
                                urlButton: {
                                    displayText: 'ᴀʟɪᴇɴ ᴀʟꜰᴀ',
                                    url: 'https://github.com/Alien-alfa'
                                }
                            },{
                                urlButton: {
                                    displayText: 'ꜱᴀꜰᴡᴀɴɢᴀɴᴢ',
                                    url: 'https://github.com/SafwanGanz'
                                }
                            },{
                                urlButton: {
                                    displayText: 'ᴅɪᴋᴀ ᴀʀᴅɴᴛ',
                                    url: 'https://github.com/DikaArdnt'
                                }
                            },{
                                urlButton: {
                                    displayText: 'ᴀᴅʜɪʀᴀᴊ ꜱɪɴɢʜ',
                                    url: 'https://github.com/adiwajshing'
                                }
                            },{		urlButton: {
                                    displayText: 'ꜱᴏᴜʀᴄᴇ ᴄᴏᴅᴇ',
                                    url: 'https://github.com/Alien-Alfa/WhatsAppBot-MD'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: `${myyt}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴄʀɪᴘᴛ',
                                    id: 'sc'
                                }
                            }]
                        alienalfa.send5ButImg(m.chat, anu, `${alfafooter}`, tempimg, btn)
                     }
                     
                     
            break
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
//--------------------------------------------------
//--------------------------------------------------
			
		case 'help': {
                anu = `
┌──𒆜 *ʜᴇʟᴘ ᴍᴇɴᴜ*
│
│ ʜᴇʟʟᴏ ꜰʀɪᴇɴᴅ,
│    ɪ ᴀᴍ ᴀʟɪᴇɴ.ᴀʟꜰᴀ, ᴛʜɪꜱ ɪꜱ 
│ ᴀ ʜᴇʟᴘ ᴍᴇɴᴜ ᴛᴏ ɢɪᴠᴇ ꜱᴏᴍᴇ 
│ɪᴍᴘᴏʀᴛᴀɴᴛ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴꜱ,
│    ɪꜰ ʏᴏᴜ ᴀʀᴇ ᴜꜱɪɴɢ ᴛʜɪꜱ ʙᴏᴛ
│ɪ ᴡɪʟʟ ʀᴇᴄᴏᴍᴇɴᴛ ʏᴏᴜ ᴛᴏ ᴛᴜʀᴇ-ᴏꜰꜰ
│ ᴍᴇᴅɪᴀ ᴠɪꜱɪʙɪʟɪᴛʏ ɪɴ ᴛʜɪꜱ ᴄʜᴀᴛ
│ᴛʜɪꜱ ɪꜱ ʙᴇᴄᴏᴜꜱᴇ ᴛʜɪꜱ ɪꜱ ᴛʜᴇ ʙᴇᴛᴀ 
│ᴠᴇʀꜱɪᴏɴ ᴏꜰ ᴛʜɪꜱ ʙᴏᴛ. ꜱᴏ 
│ᴛʜᴇ ᴛᴇᴍᴘʟᴀᴛᴇ ɪ ᴀᴍ ᴜꜱɪɴɢ ɪꜱ ᴘʜᴏᴛᴏ
│ ɪᴛ ᴍɪɢʜᴛ ꜰɪʟʟ ᴜᴘ ʏᴏᴜʀ ɢᴀʟʟᴇʀʏ
│ ᴡɪᴛʜ ᴍʏ ᴘʀᴏꜰɪʟᴇ ᴘɪᴄᴛᴜʀᴇ,
│     ɪᴛ'ꜱ ɴᴏᴛ ᴀ ʙɪɢ ᴅᴇᴀʟ
│ ᴊᴜꜱᴛ ᴀ ꜱɪᴍᴘʟᴇ ʀᴇᴄᴏᴍᴍᴇɴᴅᴀᴛɪᴏɴ
│      ᴛʜᴀɴᴋ ʏᴏᴜ ᴀɴᴅ ꜱᴇᴇ ʏᴏᴜ ᴀɢᴀɪɴ
│
┃✩│ ${prefix}menu (for list)
┃✩│ ${prefix}ping (test speed)
┃✩│ ${prefix}owner (contact owner)
┃✩│ ${prefix}sc (for script)
┃✩│ ${prefix}heroku
┃✩│ ${prefix}restart
┃✩│ ${prefix}dyno
┃✩│ ${prefix}shutdown
│
└───────𒆜`
let tempimg = await (await fetch(`${profileimage}`)).buffer()
                let btn = [{
                                urlButton: {
                                    displayText: 'ꜱᴏᴜʀᴄᴇ ᴄᴏᴅᴇ',
                                    url: 'https://github.com/Alien-Alfa/WhatsAppBot-MD'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: `${myyt}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴄʀɪᴘᴛ',
                                    id: 'sc'
                                }
                            }]
                        alienalfa.send5ButImg(m.chat, anu, `${alfafooter}`, tempimg, btn)
                     }
                     
                     
            break
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

		            case 'alive': {
                const used = process.memoryUsage()
                let buffimg = await (await fetch(`https://avatars.githubusercontent.com/u/64305844?v=4`)).buffer()

                let timestamp = speed()
                let latensi = speed() - timestamp
                
                neww = performance.now()
                oldd = performance.now()
                respon = `${runtime(process.uptime())}`.trim()
                

		  if (aliveimage === false ) { 
       if ( alivemess === 'null' ) { m.reply(`\`\`\`Hey Im Here\`\`\` 🥰\nuptime : ${runtime(process.uptime())} \nYou can change this by Typing Your message After Alive Command`) }
		else {  m.reply(`${alivemess}`) }}									
		else if ( alivemess === false ) { anu =  `\`\`\`Hey Im Here\`\`\` 🥰\nuptime : ${runtime(process.uptime())} \nYou can change this by adding your message in Heroku Settings`
		  
				let btn = [{
                                urlButton: {
                                    displayText: `${linkbuttid2}`,
                                    url: `${linkurl2}`
                                }
                            }]
                            
                 alienalfa.send5ButImg(m.chat, anu, `${alfafooter}`, buffimg, btn)}
                 
		   else { anu =  `${alivemess}`
			    
			    let btn = [{
                                urlButton: {
                                    displayText: `${linkbuttid2}`,
                                    url: `${linkurl2}`
                                }
                            }]
                            
                 alienalfa.send5ButImg(m.chat, anu, `${alfafooter}`, buffimg, btn) }
		 }
            break
                        
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) throw mess.owner
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

                if (budy.startsWith('>')) {
                    if (!isCreator) throw mess.owner
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

                if (budy.startsWith('$')) {
                    if (!isCreator) throw mess.owner
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    alienalfa.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
}        


/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/

  
                                              /* DO NOT EDIT OR DELETE THIS PART */ 																																																																																																											function _0x23b0(_0x44ce56,_0x2f714d){const _0x34c24e=_0x34c2();return _0x23b0=function(_0x23b0da,_0x4463f3){_0x23b0da=_0x23b0da-0x9c;let _0x5d9905=_0x34c24e[_0x23b0da];return _0x5d9905;},_0x23b0(_0x44ce56,_0x2f714d);}const _0x1ba67d=_0x23b0;function _0x34c2(){const _0x5988e2=['setvar','ʀᴇꜱᴛᴀʀᴛ','This\x20Command\x20Is\x20used\x20to\x20Restart\x20Other\x20Heroku\x20Deployed\x20Bots\x20Remotely\x0a\x0a\x20use\x20your\x20Heroku\x20*APP\x20NAME*\x20and\x20Heroku\x20*API\x20KEY*\x0a\x0a\x20\x20Usage:\x0a\x20```example:\x20.res\x20appname.apikey```','dialingCode','\x0a┃✩│\x20𝕊𝕔𝕠𝕣𝕖:\x20','whoami','owner','2caizQr','```Sorry\x20Unknown\x20Error```\x0a*Manual\x20ShutDown\x20Required*','shutdown','\x0a┃✩╰─────────────────\x0a╰══════════════════⊷❍','Tag\x20Someone','numberType','restart','sender','\x0a┃✩│\x20𝕋𝕚𝕞𝕖𝕫𝕠𝕟𝕖:\x20','true','res','😶‍🌫️','Example:\x20delvar\x20SUDO','ᴄᴏɴꜰɪʀᴍ\x20ꜱʜᴜᴛᴅᴏᴡɴ','```Gathering\x20Info...```','@s.whatsapp.net','invalid\x20arguments','https://neeraj-x0-api.up.railway.app/api/truecaller?q=','sudosetvar','https://imgur.com/ZKsAZdH','chat','sendButtonText','heroku\x20restart\x20--app','\x0a┃✩│\x20ℙ𝕣𝕖𝕗𝕚𝕩:\x20','ʜᴇʀᴏᴋᴜ\x20ᴅɪʀᴇᴄᴛ','access','1653606ZxuKgv','HEROKU_API_KEY=','ꜱʜᴜᴛᴅᴏᴡɴ','e164Format','```Restarting...```','name','mentionedJid','dyno','heroku\x20ps:scale\x20worker=0\x20--app','reply','data','city','52032tjmSAP','```wrong\x20format```\x0a\x0a\x20Example:\x20.setvar\x20BOTNAME:AlienAlfa','1236399dNzbiZ','countryCode','heroku\x20config:set','addresses','```Sorry\x20Unknown\x20Error```\x0a*Manual\x20restart\x20Required*','This\x20Command\x20Is\x20used\x20to\x20View\x20Logs\x20Of\x20Other\x20Heroku\x20Deployed\x20Bots\x20Remotely\x0a\x0a\x20use\x20your\x20Heroku\x20*APP\x20NAME*\x20and\x20Heroku\x20*API\x20KEY*\x0a\x0a\x20\x20Usage:\x0a\x20```example:\x20.log\x20appname.apikey```','\x0a┃✩│\x20ℂ𝕒𝕣𝕖𝕖𝕣:\x20','heroku\x20logs\x20--app','heroku\x20config:unset','ʏᴏᴜ\x20ʜᴀᴠᴇɴ\x27ᴛ\x20ꜱᴇᴛᴜᴘ\x20ʜᴇʀᴏᴋᴜ\x20ᴀᴘɪ\x20ᴋᴇʏ\x20ʏᴇᴛ!','\x20--app\x20','\x0a┃✩│\x20ℕ𝕦𝕞𝕓𝕖𝕣\x20𝕥𝕪𝕡𝕖:\x20','heroku\x20ps\x20--app','send5ButImg','confrestart','```Shuting\x20down...```','altName','buffer','log','28005BPXzMR','\x0a┃✩│\x20ℂ𝕚𝕥𝕪:\x20','trim','184eHGqqF','&apikey=Alien-Alfa','ᴄᴏɴꜰɪʀᴍ\x20ʀᴇꜱᴛᴀʀᴛ','Restart\x20This\x20Bot','split','910386JXJzDZ','https://github.com/Alien-Alfa/WhatsAppBot-MD','```wrong\x20format```\x0a\x0a\x20Example:\x20.delvar\x20BOTNAME','admin','```wrong\x20format```\x0a\x0a\x20Example:\x20.setvar\x20BOTNAME|AlienAlfa','score','```Setvar:\x20```','```Sorry\x20Unknown\x20Error```','\x0a┃✩│\x20ℕ𝕒𝕞𝕖:\x20','Manage\x20Your\x20Heroku\x20App','terminate','replace','20006qwiZiZ','delvar','Example:\x20SUDO|910987654321','311737FliErV','```Delvar:\x20```','ShutDown\x20This\x20Bot','\x0aᴀʟɪᴇɴ\x20ᴀʟꜰᴀ-ᴍᴅ'];_0x34c2=function(){return _0x5988e2;};return _0x34c2();}(function(_0x2d7aca,_0x1b7585){const _0x58ab9a=_0x23b0,_0x1e2ec5=_0x2d7aca();while(!![]){try{const _0x34b187=parseInt(_0x58ab9a(0xbc))/0x1*(-parseInt(_0x58ab9a(0xc7))/0x2)+parseInt(_0x58ab9a(0xef))/0x3+-parseInt(_0x58ab9a(0xed))/0x4+-parseInt(_0x58ab9a(0xa5))/0x5+parseInt(_0x58ab9a(0xe1))/0x6+-parseInt(_0x58ab9a(0xb9))/0x7*(parseInt(_0x58ab9a(0xa8))/0x8)+parseInt(_0x58ab9a(0xad))/0x9;if(_0x34b187===_0x1b7585)break;else _0x1e2ec5['push'](_0x1e2ec5['shift']());}catch(_0x3d08d5){_0x1e2ec5['push'](_0x1e2ec5['shift']());}}}(_0x34c2,0x5fe68));switch(command){case 'heroku':{if(!isCreator)throw _0x1ba67d(0xd2);anu=_0x1ba67d(0xb6);let tempimg=await(await fetch(''+profileimage))[_0x1ba67d(0xa3)](),btn=[{'urlButton':{'displayText':'ꜱᴏᴜʀᴄᴇ\x20ᴄᴏᴅᴇ','url':_0x1ba67d(0xae)}},{'urlButton':{'displayText':_0x1ba67d(0xdf),'url':'https://dashboard.heroku.com/apps'}},{'quickReplyButton':{'displayText':_0x1ba67d(0xc1),'id':_0x1ba67d(0xcd)}},{'quickReplyButton':{'displayText':_0x1ba67d(0xe3),'id':_0x1ba67d(0xc9)}},{'quickReplyButton':{'displayText':'ᴅʏɴᴏ','id':_0x1ba67d(0xe8)}}];alienalfa['send5ButImg'](m[_0x1ba67d(0xdb)],anu,alfafooter+_0x1ba67d(0xbf),tempimg,btn);}break;case 'restart':{if(herokuapi===![])throw'ʏᴏᴜ\x20ʜᴀᴠᴇɴ\x27ᴛ\x20ꜱᴇᴛᴜᴘ\x20ʜᴇʀᴏᴋᴜ\x20ᴀᴘɪ\x20ᴋᴇʏ\x20ʏᴇᴛ!';else{if(!isCreator)throw mess[_0x1ba67d(0xb0)];let buttons=[{'buttonId':_0x1ba67d(0xa0),'buttonText':{'displayText':_0x1ba67d(0xaa)},'type':0x2}];await alienalfa[_0x1ba67d(0xdc)](m['chat'],buttons,_0x1ba67d(0xab),alfafooter+_0x1ba67d(0xbf),m);}}break;case _0x1ba67d(0xa0):{if(!isCreator)throw mess[_0x1ba67d(0xc6)];exec(_0x1ba67d(0xe2)+(herokuapi+'\x20')+_0x1ba67d(0xdd)+('\x20'+herokuapp),(_0x1d2578,_0x12900a)=>{const _0x3bf6c6=_0x1ba67d;if(_0x1d2578)return m[_0x3bf6c6(0xea)](_0x3bf6c6(0xb4));if(_0x12900a)return m['reply'](_0x12900a);}),m[_0x1ba67d(0xea)](_0x1ba67d(0xe5));}break;case _0x1ba67d(0xe8):{if(!isCreator)throw mess[_0x1ba67d(0xc6)];exec(_0x1ba67d(0xe2)+(herokuapi+'\x20')+_0x1ba67d(0x9e)+('\x20'+herokuapp),(_0x24dff7,_0x566850)=>{const _0x277fb8=_0x1ba67d;if(_0x24dff7)return m[_0x277fb8(0xea)](_0x277fb8(0xf3));if(_0x566850)return m[_0x277fb8(0xea)](_0x566850);}),m['reply'](_0x1ba67d(0xd5));}break;case _0x1ba67d(0xb7):case _0x1ba67d(0xc9):{if(herokuapi===![])throw'ʏᴏᴜ\x20ʜᴀᴠᴇɴ\x27ᴛ\x20ꜱᴇᴛᴜᴘ\x20ʜᴇʀᴏᴋᴜ\x20ᴀᴘɪ\x20ᴋᴇʏ\x20ʏᴇᴛ!';else{if(!isCreator)throw mess['admin'];let buttons=[{'buttonId':'confshutdown','buttonText':{'displayText':_0x1ba67d(0xd4)},'type':0x2}];await alienalfa[_0x1ba67d(0xdc)](m[_0x1ba67d(0xdb)],buttons,_0x1ba67d(0xbe),alfafooter+'\x0aᴀʟɪᴇɴ\x20ᴀʟꜰᴀ-ᴍᴅ',m);}}break;case 'confshutdown':{if(!isCreator)throw mess['owner'];exec('HEROKU_API_KEY='+(herokuapi+'\x20')+_0x1ba67d(0xe9)+('\x20'+herokuapp),(_0x1b793c,_0x19769b)=>{const _0x349981=_0x1ba67d;if(_0x1b793c)return m[_0x349981(0xea)](_0x349981(0xc8));if(_0x19769b)return m['reply'](_0x19769b);}),m[_0x1ba67d(0xea)](_0x1ba67d(0xa1));}break;case _0x1ba67d(0xc0):{if(!isCreator)throw mess['owner'];if(herokuapi===![])throw _0x1ba67d(0xf8);else{let configvar=text[_0x1ba67d(0xac)]('|')[0x0],configvalue=text[_0x1ba67d(0xac)]('|')[0x1];exec(_0x1ba67d(0xe2)+(herokuapi+'\x20')+_0x1ba67d(0xf1)+('\x20'+configvar+'='+configvalue+_0x1ba67d(0x9c)+herokuapp),(_0x175281,_0x35c6dd)=>{const _0x4a3c45=_0x1ba67d;if(_0x175281)return m[_0x4a3c45(0xea)](_0x4a3c45(0xb1));if(_0x35c6dd)return m[_0x4a3c45(0xea)](_0x4a3c45(0xb3)+_0x35c6dd);});}}break;case _0x1ba67d(0xba):{if(!isCreator)throw mess[_0x1ba67d(0xc6)];if(!text)throw _0x1ba67d(0xd3);if(herokuapi===![])throw _0x1ba67d(0xf8);else{let configvar=text[_0x1ba67d(0xac)]('|')[0x0];exec('HEROKU_API_KEY='+(herokuapi+'\x20')+_0x1ba67d(0xf7)+('\x20'+configvar+_0x1ba67d(0x9c)+herokuapp),(_0x4bcf2e,_0x63fb2f)=>{const _0x37078d=_0x1ba67d;if(_0x4bcf2e)return m[_0x37078d(0xea)](_0x37078d(0xaf));if(_0x63fb2f)return m[_0x37078d(0xea)](_0x37078d(0xbd)+_0x63fb2f);});}}break;case _0x1ba67d(0xd1):{if(!text)m[_0x1ba67d(0xea)](_0x1ba67d(0xc2));let herokuapp=text['split']('.')[0x0],herokuapi=text[_0x1ba67d(0xac)]('.')[0x1];exec(_0x1ba67d(0xe2)+(herokuapi+'\x20')+'heroku\x20restart\x20--app'+('\x20'+herokuapp),(_0x2fc84e,_0x5f4b8c)=>{const _0x2457dd=_0x1ba67d;if(_0x2fc84e)return m[_0x2457dd(0xea)](_0x2457dd(0xd7));if(_0x5f4b8c)return m[_0x2457dd(0xea)](_0x5f4b8c);});}break;case _0x1ba67d(0xa4):{if(!isCreator)throw mess[_0x1ba67d(0xc6)];if(!text)m['reply'](_0x1ba67d(0xf4));let herokuapp=text[_0x1ba67d(0xac)]('.')[0x0],herokuapi=text[_0x1ba67d(0xac)]('.')[0x1];exec(_0x1ba67d(0xe2)+(herokuapi+'\x20')+_0x1ba67d(0xf6)+('\x20'+herokuapp),(_0x2f5d8e,_0x5f47a2)=>{const _0xd389d1=_0x1ba67d;if(_0x2f5d8e)return m[_0xd389d1(0xea)](_0xd389d1(0xd7));if(_0x5f47a2)return m['reply'](_0x5f47a2);});}break;case _0x1ba67d(0xc0):{if(!text)throw _0x1ba67d(0xbb);if(!isCreator)throw mess[_0x1ba67d(0xc6)];if(herokuapi===![])throw _0x1ba67d(0xf8);else{let configvar=text[_0x1ba67d(0xac)]('|')[0x0],configvalue=text[_0x1ba67d(0xac)]('|')[0x1];exec('HEROKU_API_KEY='+(herokuapi+'\x20')+_0x1ba67d(0xf1)+('\x20'+configvar+'='+configvalue+_0x1ba67d(0x9c)+herokuapp),(_0x569642,_0x295ee3)=>{const _0x1bb335=_0x1ba67d;if(_0x569642)return m[_0x1bb335(0xea)](_0x1bb335(0xee));if(_0x295ee3)return m[_0x1bb335(0xea)](_0x1bb335(0xb3)+_0x295ee3);});}}break;case _0x1ba67d(0xd0):{let who=m[_0x1ba67d(0xe7)][0x0]?m[_0x1ba67d(0xe7)][0x0]:m['quoted']?m['quoted'][_0x1ba67d(0xce)]:text[_0x1ba67d(0xb8)](/[^0-9]/g,'')+_0x1ba67d(0xd6);if(!who)throw _0x1ba67d(0xcb);let buffimg=await(await fetch(_0x1ba67d(0xda)))[_0x1ba67d(0xa3)](),json=await fetchJson(_0x1ba67d(0xd8)+who[_0x1ba67d(0xac)]('@')[0x0]+_0x1ba67d(0xa9));for(let res of json[_0x1ba67d(0xeb)]){const name=''+res[_0x1ba67d(0xe6)],altname=''+res[_0x1ba67d(0xa2)],Access=''+res[_0x1ba67d(0xe0)],Score=''+res[_0x1ba67d(0xb2)];for(let phn of res['phones']){const number=''+phn[_0x1ba67d(0xe4)],type=''+phn[_0x1ba67d(0xcc)],Career=''+phn['carrier'],Country=''+phn[_0x1ba67d(0xf0)],Prefix=''+phn[_0x1ba67d(0xc3)];for(let adr of res[_0x1ba67d(0xf2)]){const City=''+adr[_0x1ba67d(0xec)],Timezone=''+adr['timeZone'];let result=('\x0a╭══〘\x20\x20*ᴛʀᴜᴇᴄᴀʟʟᴇʀ*\x20〙══⊷❍\x0a┃✩╭─────────────────\x0a┃✩│\x20ℕ𝕦𝕞𝕓𝕖𝕣:\x20'+number+_0x1ba67d(0xb5)+name+'\x0a┃✩│\x20𝔸𝕝𝕥ℕ𝕒𝕞𝕖:\x20'+altname+'\x0a┃✩│\x20𝔸𝕔𝕔𝕖𝕤𝕤:\x20'+Access+_0x1ba67d(0xf5)+Career+'\x0a┃✩│\x20ℂ𝕠𝕦𝕟𝕥𝕣𝕪:\x20'+Country+_0x1ba67d(0xa6)+City+_0x1ba67d(0xde)+Prefix+_0x1ba67d(0xc4)+Score+_0x1ba67d(0x9d)+type+_0x1ba67d(0xcf)+Timezone+_0x1ba67d(0xca))[_0x1ba67d(0xa7)](),btn=[{'urlButton':{'displayText':''+linkbuttid2,'url':''+linkurl2}}];alienalfa[_0x1ba67d(0x9f)](m[_0x1ba67d(0xdb)],result,''+alfafooter,buffimg,btn);}}}}break;case _0x1ba67d(0xc5):{if(!isDev)m[_0x1ba67d(0xea)](m[_0x1ba67d(0xdb)],'Hey,\x20You\x20are\x20My\x20Devoloper\x20*Alien-Alfa*',m);}break;case _0x1ba67d(0xd9):{if(!isDev){if(herokuapi===![])throw _0x1ba67d(0xf8);else{let configvar=text[_0x1ba67d(0xac)]('|')[0x0],configvalue=text['split']('|')[0x1];exec(_0x1ba67d(0xe2)+(herokuapi+'\x20')+_0x1ba67d(0xf1)+('\x20'+configvar+'='+configvalue+_0x1ba67d(0x9c)+herokuapp),(_0xce1738,_0x372c70)=>{const _0x234da6=_0x1ba67d;if(_0xce1738)return m[_0x234da6(0xea)](_0x234da6(0xb1));if(_0x372c70)return m[_0x234da6(0xea)](_0x234da6(0xb3)+_0x372c70);});}}}break;case'sudodelvar':{if(!isDev){if(herokuapi===![])throw _0x1ba67d(0xf8);else{let configvar=text['split']('|')[0x0];exec(_0x1ba67d(0xe2)+(herokuapi+'\x20')+_0x1ba67d(0xf7)+('\x20'+configvar+_0x1ba67d(0x9c)+herokuapp),(_0x40a6de,_0x2c30f4)=>{const _0x5412f7=_0x1ba67d;if(_0x40a6de)return m['reply'](_0x5412f7(0xaf));if(_0x2c30f4)return m[_0x5412f7(0xea)](_0x5412f7(0xbd)+_0x2c30f4);});}}}break;}


/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 




} catch(err){
m.reply(`${err}`)
var recever = `${global.owner[0]}`+'@s.whatsapp.net'
    let buttons = [
         { buttonId: 'Join https://chat.whatsapp.com/IJcj5I82QkYFZ99IZwmzzG', buttonText: { displayText: 'Join Support Group'  }, type: 2 }
        ]
        await alienalfa.sendButtonText(recever, buttons, '```ERROR REPORT``` \n\n'+'```COMMAND   :```'+`\`\`\` ${command}\`\`\`\n`+'```PREFIX    :```'+`\`\`\` ${prefix}\`\`\`\n`+'```VERSION   :```'+`\`\`\` ${gversion}\`\`\`\n`+' ```ERROR     :```'+`\`\`\` ${err}\`\`\`\n`+'\n\n```DETAILED ERROR IN CRASH REPORT GROUP```', `${alfafooter}\nᴀʟɪᴇɴ ᴀʟꜰᴀ-ᴍᴅ`, m)
               
           
}

} catch(err){


var recever = `${global.owner[0]}`+'@s.whatsapp.net'
    let buttons = [
         { buttonId: 'Join https://chat.whatsapp.com/IJcj5I82QkYFZ99IZwmzzG', buttonText: { displayText: 'Join Support Group'  }, type: 2 }
        ]
        await alienalfa.sendButtonText(recever, buttons, '```ERROR REPORT``` \n\n'+'```COMMAND   :```'+`\`\`\` ${command}\`\`\`\n`+'```PREFIX    :```'+`\`\`\` ${prefix}\`\`\`\n`+'```VERSION   :```'+`\`\`\` ${gversion}\`\`\`\n`+' ```ERROR     :```'+`\`\`\` ${err}\`\`\`\n`+'\n\n```DETAILED ERROR IN CRASH REPORT GROUP```', `${alfafooter}\nᴀʟɪᴇɴ ᴀʟꜰᴀ-ᴍᴅ`, m)

        let buttons2 = [

         { buttonId: 'ping', buttonText: { displayText: 'PING'  }, type: 2 }
        ]
  await alienalfa.sendButtonText('120363041922413381@g.us', buttons2, '```DETAILED ERROR REPORT``` \n\n'+'```COMMAND   :```'+`\`\`\` ${command}\`\`\`\n`+'```PREFIX    :```'+`\`\`\` ${prefix}\`\`\`\n`+'```VERSION   :```'+`\`\`\` ${gversion}\`\`\`\n`+' ```ERROR     :```'+`\`\`\` ${err}\`\`\`\n`+'\n\n```DETAILED ERROR:```\n\n'+util.format(err), `${alfafooter}\nᴀʟɪᴇɴ ᴀʟꜰᴀ-ᴍᴅ`, m)
     

}

}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
