"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[514],{7514:(fe,O,C)=>{C.r(O),C.d(O,{ContatoModule:()=>he});var N=C(6895),H=C(9541),u=C(433),s=C(1571),L=C(269);function D(n,h,e,t,r,a,l){try{var m=n[a](l),i=m.value}catch(o){return void e(o)}m.done?h(i):Promise.resolve(i).then(t,r)}const P=new s.OlP("ngx-mask config"),$=new s.OlP("new ngx-mask config"),R=new s.OlP("initial ngx-mask config"),U={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,triggerOnMaskChange:!1,maskFilled:new s.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},B=["Hh:m0:s0","Hh:m0","m0:s0"],Y=["percent","Hh","s0","m0","separator","d0/M0/0000","d0/M0","d0","M0"];let Z=(()=>{class n{constructor(e){this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(t,r,a,l)=>{let m=[],i="";if(Array.isArray(a)){const p=new RegExp(a.map(g=>"[\\^$.|?*+()".indexOf(g)>=0?`\\${g}`:g).join("|"));m=t.split(p),i=t.match(p)?.[0]??""}else m=t.split(a),i=a;const o=m.length>1?`${i}${m[1]}`:"";let f=m[0];const _=this.separatorLimit.replace(/\s/g,"");_&&+_&&(f="-"===f[0]?`-${f.slice(1,f.length).slice(0,_.length)}`:f.slice(0,_.length));const k=/(\d+)(\d{3})/;for(;r&&k.test(f);)f=f.replace(k,"$1"+r+"$2");return void 0===l?f+o:0===l?f:f+o.substr(0,l+1)},this.percentage=t=>Number(t)>=0&&Number(t)<=100,this.getPrecision=t=>{const r=t.split(".");return r.length>1?Number(r[r.length-1]):1/0},this.checkAndRemoveSuffix=t=>{for(let r=this.suffix?.length-1;r>=0;r--){const a=this.suffix.substr(r,this.suffix?.length);if(t.includes(a)&&(r-1<0||!t.includes(this.suffix.substr(r-1,this.suffix?.length))))return t.replace(a,"")}return t},this.checkInputPrecision=(t,r,a)=>{if(r<1/0){if(Array.isArray(a)){const i=a.find(o=>o!==this.thousandSeparator);a=i||a[0]}const l=new RegExp(this._charToRegExpExpression(a)+`\\d{${r}}.*$`),m=t.match(l);m&&m[0].length-1>r&&(t=t.substring(0,t.length-(m[0].length-1-r))),0===r&&this._compareOrIncludes(t[t.length-1],a,this.thousandSeparator)&&(t=t.substring(0,t.length-1))}return t},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime}applyMaskWithPattern(e,t){const[r,a]=t;return this.customPattern=a,this.applyMask(e,r)}applyMask(e,t,r=0,a=!1,l=!1,m=(()=>{})){if(!t||"string"!=typeof e)return"";let i=0,o="",f=!1,_=!1,k=1,p=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e));const g=e.toString().split("");if("IP"===t){const d=e.split(".");this.ipError=this._validIP(d),t="099.099.099.099"}const v=[];for(let d=0;d<e.length;d++)e[d]?.match("\\d")&&v.push(e[d]);if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==v.length&&14!==v.length,t=v.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const d=this.getPrecision(t);e=this.checkInputPrecision(e,d,this.decimalMarker)}e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))&&(e=`${e.substring(0,e.indexOf(".")-1)}${e.substring(e.indexOf("."),e.length)}`),o=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!l?e.slice(1,e.length):e,l&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const d=this._charToRegExpExpression(this.thousandSeparator);let c='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(d,"");if(Array.isArray(this.decimalMarker))for(const y of this.decimalMarker)c=c.replace(this._charToRegExpExpression(y),"");else c=c.replace(this._charToRegExpExpression(this.decimalMarker),"");const S=new RegExp("["+c+"]");(e.match(S)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const I=this.getPrecision(t),T=(e=this.checkInputPrecision(e,I,this.decimalMarker)).replace(new RegExp(d,"g"),"");o=this._formatWithSeparators(T,this.thousandSeparator,this.decimalMarker,I);const A=o.indexOf(",")-e.indexOf(","),M=o.length-e.length;if(M>0&&","!==o[r]){_=!0;let y=0;do{this._shift.add(r+y),y++}while(y<M)}else 0!==A&&r>0&&!(o.indexOf(",")>=r&&r>3)||!(o.indexOf(".")>=r&&r>3)&&M<=0?(this._shift.clear(),_=!0,k=M,this._shift.add(r+=M)):this._shift.clear()}else for(let d=0,c=g[0];d<g.length&&i!==t.length;d++,c=g[d])if(this._checkSymbolMask(c,t[i])&&"?"===t[i+1])o+=c,i+=2;else if("*"===t[i+1]&&f&&this._checkSymbolMask(c,t[i+2]))o+=c,i+=3,f=!1;else if(this._checkSymbolMask(c,t[i])&&"*"===t[i+1])o+=c,f=!0;else if("?"===t[i+1]&&this._checkSymbolMask(c,t[i+2]))o+=c,i+=3;else if(this._checkSymbolMask(c,t[i])){if("H"===t[i]&&Number(c)>2){i+=1,this._shiftStep(t,i,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}if("h"===t[i]&&"2"===o&&Number(c)>3){i+=1,d--;continue}if("m"===t[i]&&Number(c)>5){i+=1,this._shiftStep(t,i,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}if("s"===t[i]&&Number(c)>5){i+=1,this._shiftStep(t,i,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}const S=31;if("d"===t[i]&&(Number(c)>3&&this.leadZeroDateTime||Number(e.slice(i,i+2))>S||"/"===e[i+1])){i+=1,this._shiftStep(t,i,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}if("M"===t[i]){const T=0===i&&(Number(c)>2||Number(e.slice(i,i+2))>12||"/"===e[i+1]),A=e.slice(i-3,i-1).includes("/")&&("/"===e[i-2]&&Number(e.slice(i-1,i+1))>12&&"/"!==e[i]||"/"===e[i]||"/"===e[i-3]&&Number(e.slice(i-2,i))>12&&"/"!==e[i-1]||"/"===e[i-1]),M=Number(e.slice(i-3,i-1))<=S&&!e.slice(i-3,i-1).includes("/")&&"/"===e[i-1]&&(Number(e.slice(i,i+2))>12||"/"===e[i+1]),y=Number(e.slice(i-3,i-1))>S&&!e.slice(i-3,i-1).includes("/")&&!e.slice(i-2,i).includes("/")&&Number(e.slice(i-2,i))>12,ce=Number(e.slice(i-3,i-1))<=S&&!e.slice(i-3,i-1).includes("/")&&"/"!==e[i-1]&&Number(e.slice(i-1,i+1))>12;if(Number(c)>1&&this.leadZeroDateTime||T||A||M||y||ce){i+=1,this._shiftStep(t,i,g.length),d--,this.leadZeroDateTime&&(o+="0");continue}}o+=c,i++}else" "===c&&" "===t[i]?(o+=c,i++):-1!==this.maskSpecialCharacters.indexOf(t[i])?(o+=t[i],i++,this._shiftStep(t,i,g.length),d--):this.maskSpecialCharacters.indexOf(c)>-1&&this.maskAvailablePatterns[t[i]]&&this.maskAvailablePatterns[t[i]]?.optional?(!!g[i]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&(o+=g[i]),i++,d--):"*"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(c)===this.maskExpression[i+2]&&f||"?"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(c)===this.maskExpression[i+2]&&f?(i+=3,o+=c):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(c)<0&&c!==this.placeHolderCharacter&&(p=!0);o.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1])&&(o+=t[t.length-1]);let x=r+1;for(;this._shift.has(x);)k++,x++;let b=a&&!t.startsWith("separator")?i:this._shift.has(r)?k:0;p&&b--,m(b,_),k<0&&this._shift.clear();let w=!1;l&&(w=g.every(d=>this.maskSpecialCharacters.includes(d)));let E=`${this.prefix}${w?"":o}${this.suffix}`;return 0===o.length&&(E=`${this.prefix}${o}`),E}_findSpecialChar(e){return this.maskSpecialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[t]&&this.maskAvailablePatterns[t].pattern&&this.maskAvailablePatterns[t].pattern.test(e)}_stripToDecimal(e){return e.split("").filter((t,r)=>t.match("^-?\\d")||t.match("\\s")||"."===t||","===t||"-"===t&&0===r&&this.allowNegativeNumbers).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,t,r){const a=/[*?]/g.test(e.slice(0,t))?r:t;this._shift.add(a+this.prefix.length||0)}_compareOrIncludes(e,t,r){return Array.isArray(t)?t.filter(a=>a!==r).includes(e):e===t}_validIP(e){return!(4===e.length&&!e.some((t,r)=>e.length!==r+1?""===t||Number(t)>255:""===t||Number(t.substring(0,3))>255))}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(P))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})(),F=(()=>{class n extends Z{constructor(e,t,r,a){super(t),this.document=e,this._config=t,this._elementRef=r,this._renderer=a,this.maskExpression="",this.isNumberValue=!1,this.placeHolderCharacter="_",this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this.triggerOnMaskChange=!1,this.onChange=l=>{}}applyMask(e,t,r=0,a=!1,l=!1,m=(()=>{})){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const i=e&&"number"==typeof this.selStart?e[this.selStart]:"";let o="";if(void 0!==this.hiddenInput&&!this.writingValue){let p=this.actualValue.split("");""!==e&&p.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>p.length?p.splice(this.selStart,0,i):e.length<p.length&&(p.length-e.length==1?p.splice(this.selStart-1,1):p.splice(this.selStart,this.selEnd-this.selStart))):p=[],this.showMaskTyped&&(e=this.removeMask(e)),o=this.actualValue.length&&p.length<=e.length?this.shiftTypedSymbols(p.join("")):e}o=Boolean(o)&&o.length?o:e;const f=super.applyMask(o,t,r,a,l,m);if(this.actualValue=this.getActualValue(f),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.maskSpecialCharacters=this.maskSpecialCharacters.filter(p=>!this._compareOrIncludes(p,this.decimalMarker,this.thousandSeparator))),this.formControlResult(f),!this.showMaskTyped)return this.hiddenInput&&f&&f.length?this.hideInput(f,this.maskExpression):f;const _=f.length,k=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const p=this._numberSkipedSymbols(f);return f+k.slice(_+p)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?f+k:f+k.slice(_)}_numberSkipedSymbols(e){const t=/(^|\D)(\d\D)/g;let r=t.exec(e),a=0;for(;null!=r;)a+=1,r=t.exec(e);return a}applyValueChanges(e,t,r,a=(()=>{})){const l=this._elementRef.nativeElement;l.value=this.applyMask(l.value,this.maskExpression,e,t,r,a),l!==this._getActiveElement()&&this.clearIfNotMatchFn()}hideInput(e,t){return e.split("").map((r,a)=>this.maskAvailablePatterns&&this.maskAvailablePatterns[t[a]]&&this.maskAvailablePatterns[t[a]]?.symbol?this.maskAvailablePatterns[t[a]]?.symbol:r).join("")}getActualValue(e){const t=e.split("").filter((r,a)=>this._checkSymbolMask(r,this.maskExpression[a])||this.maskSpecialCharacters.includes(this.maskExpression[a])&&r===this.maskExpression[a]);return t.join("")===e?t.join(""):e}shiftTypedSymbols(e){let t="";return(e&&e.split("").map((a,l)=>{if(this.maskSpecialCharacters.includes(e[l+1])&&e[l+1]!==this.maskExpression[l+1])return t=a,e[l+1];if(t.length){const m=t;return t="",m}return a})||[]).join("")}numberToString(e){return e||0===e?Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}):String(e)}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef.nativeElement;this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(/_/g,"").length&&(this.formElementProperty=["value",""],this.applyMask(e.value,this.maskExpression))}set formElementProperty([e,t]){Promise.resolve().then(()=>this._renderer.setProperty(this._elementRef.nativeElement,e,t))}checkSpecialCharAmount(e){return e.split("").filter(r=>this._findSpecialChar(r)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const t=[];for(let r=0;r<e.length;r++)e[r]?.match("\\d")&&t.push(e[r]);return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,r=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return t;const a=[];for(let l=0;l<e.length;l++)e[l]?.match("\\d")&&a.push(e[l]);return a.length<=3?t.slice(a.length,t.length):a.length>3&&a.length<=6?t.slice(a.length+1,t.length):a.length>6&&a.length<=9?t.slice(a.length+2,t.length):a.length>9&&a.length<11?t.slice(a.length+3,t.length):11===a.length?"":12===a.length?r.slice(17===e.length?16:15,r.length):a.length>12&&a.length<=14?r.slice(a.length+4,r.length):""}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}formControlResult(e){this.writingValue||!this.triggerOnMaskChange&&this.maskChanged?this.maskChanged=!1:Array.isArray(this.dropSpecialCharacters)?this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))):this.onChange(this.dropSpecialCharacters?this._toNumber(this._checkSymbols(e)):this._removeSuffix(e))}_toNumber(e){if(!this.isNumberValue||""===e)return e;const t=Number(e);return Number.isNaN(t)?e:t}_removeMask(e,t){return e&&e.replace(this._regExpForRemove(t),"")}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)}_regExpForRemove(e){return new RegExp(e.map(t=>`\\${t}`).join("|"),"gi")}_checkSymbols(e){if(""===e)return e;const t=this._retrieveSeparatorPrecision(this.maskExpression);let r=this._retrieveSeparatorValue(e);return"."!==this.decimalMarker&&!Array.isArray(this.decimalMarker)&&(r=r.replace(this.decimalMarker,".")),this.isNumberValue?t?e===this.decimalMarker?null:this._checkPrecision(this.maskExpression,r):Number(r):r}_retrieveSeparatorPrecision(e){const t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){return e.indexOf("2")>0?Number(t).toFixed(2):Number(t)}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(N.K0),s.LFG(P),s.LFG(s.SBq),s.LFG(s.Qsj))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})(),q=(()=>{class n{constructor(e,t,r){this.document=e,this._maskService=t,this._config=r,this.maskExpression="",this.specialCharacters=[],this.patterns={},this.prefix="",this.suffix="",this.thousandSeparator=" ",this.decimalMarker=".",this.dropSpecialCharacters=null,this.hiddenInput=null,this.showMaskTyped=null,this.placeHolderCharacter=null,this.shownMaskExpression=null,this.showTemplate=null,this.clearIfNotMatch=null,this.validation=null,this.separatorLimit=null,this.allowNegativeNumbers=null,this.leadZeroDateTime=null,this.triggerOnMaskChange=null,this.maskFilled=new s.vpe,this._maskValue="",this._position=null,this._maskExpressionArray=[],this._justPasted=!1,this.onChange=a=>{},this.onTouch=()=>{}}ngOnChanges(e){const{maskExpression:t,specialCharacters:r,patterns:a,prefix:l,suffix:m,thousandSeparator:i,decimalMarker:o,dropSpecialCharacters:f,hiddenInput:_,showMaskTyped:k,placeHolderCharacter:p,shownMaskExpression:g,showTemplate:v,clearIfNotMatch:x,validation:b,separatorLimit:w,allowNegativeNumbers:E,leadZeroDateTime:d,triggerOnMaskChange:c}=e;if(t&&(t.currentValue!==t.previousValue&&!t.firstChange&&(this._maskService.maskChanged=!0),t.currentValue&&t.currentValue.split("||").length>1?(this._maskExpressionArray=t.currentValue.split("||").sort((S,I)=>S.length-I.length),this._setMask()):(this._maskExpressionArray=[],this._maskValue=t.currentValue||"",this._maskService.maskExpression=this._maskValue)),r){if(!r.currentValue||!Array.isArray(r.currentValue))return;this._maskService.maskSpecialCharacters=r.currentValue||[]}a&&a.currentValue&&(this._maskService.maskAvailablePatterns=a.currentValue),l&&(this._maskService.prefix=l.currentValue),m&&(this._maskService.suffix=m.currentValue),i&&(this._maskService.thousandSeparator=i.currentValue),o&&(this._maskService.decimalMarker=o.currentValue),f&&(this._maskService.dropSpecialCharacters=f.currentValue),_&&(this._maskService.hiddenInput=_.currentValue),k&&(this._maskService.showMaskTyped=k.currentValue),p&&(this._maskService.placeHolderCharacter=p.currentValue),g&&(this._maskService.shownMaskExpression=g.currentValue),v&&(this._maskService.showTemplate=v.currentValue),x&&(this._maskService.clearIfNotMatch=x.currentValue),b&&(this._maskService.validation=b.currentValue),w&&(this._maskService.separatorLimit=w.currentValue),E&&(this._maskService.allowNegativeNumbers=E.currentValue,this._maskService.allowNegativeNumbers&&(this._maskService.maskSpecialCharacters=this._maskService.maskSpecialCharacters.filter(S=>"-"!==S))),d&&(this._maskService.leadZeroDateTime=d.currentValue),c&&(this._maskService.triggerOnMaskChange=c.currentValue),this._applyMask()}validate({value:e}){if(!this._maskService.validation||!this._maskValue)return null;if(this._maskService.ipError)return this._createValidationError(e);if(this._maskService.cpfCnpjError)return this._createValidationError(e);if(this._maskValue.startsWith("separator")||Y.includes(this._maskValue)||this._maskService.clearIfNotMatch)return null;if(B.includes(this._maskValue))return this._validateTime(e);if(e&&e.toString().length>=1){let t=0;for(const r in this._maskService.maskAvailablePatterns)if(this._maskService.maskAvailablePatterns[r].optional&&(this._maskValue.indexOf(r)!==this._maskValue.lastIndexOf(r)?t+=this._maskValue.split("").filter(l=>l===r).join("").length:-1!==this._maskValue.indexOf(r)&&t++,-1!==this._maskValue.indexOf(r)&&e.toString().length>=this._maskValue.indexOf(r)||t===this._maskValue.length))return null;if(1===this._maskValue.indexOf("{")&&e.toString().length===this._maskValue.length+Number(this._maskValue.split("{")[1].split("}")[0])-4||1===this._maskValue.indexOf("*")||1===this._maskValue.indexOf("?"))return null;if(this._maskValue.indexOf("*")>1&&e.toString().length<this._maskValue.indexOf("*")||this._maskValue.indexOf("?")>1&&e.toString().length<this._maskValue.indexOf("?")||1===this._maskValue.indexOf("{"))return this._createValidationError(e);if(-1===this._maskValue.indexOf("*")||-1===this._maskValue.indexOf("?")){const r=this._maskService.dropSpecialCharacters?this._maskValue.length-this._maskService.checkSpecialCharAmount(this._maskValue)-t:this._maskValue.length-t;if(e.toString().length<r)return this._createValidationError(e)}}return e&&this.maskFilled.emit(),null}onPaste(){this._justPasted=!0}onModelChange(e){(""===e||null==e)&&this._maskService.actualValue&&(this._maskService.actualValue=this._maskService.getActualValue(""))}onInput(e){const t=e.target;if(this._inputValue=t.value,this._setMask(),!this._maskValue)return void this.onChange(t.value);const r=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart;let a=0,l=!1;if(this._maskService.applyValueChanges(r,this._justPasted,"Backspace"===this._code||"Delete"===this._code,(i,o)=>{this._justPasted=!1,a=i,l=o}),this._getActiveElement()!==t)return;this._position=1===this._position&&1===this._inputValue.length?null:this._position;let m=this._position?this._inputValue.length+r+a:r+("Backspace"!==this._code||l?a:0);m>this._getActualInputLength()&&(m=this._getActualInputLength()),m<0&&(m=0),t.setSelectionRange(m,m),this._position=null}onBlur(){this._maskValue&&this._maskService.clearIfNotMatchFn(),this.onTouch()}onClick(e){if(!this._maskValue)return;const t=e.target;null!==t&&null!==t.selectionStart&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&38!==e.keyCode&&this._maskService.showMaskTyped&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(0,0)):t.selectionStart>this._maskService.actualValue.length&&t.setSelectionRange(this._maskService.actualValue.length,this._maskService.actualValue.length));const l=t.value&&t.value!==this._maskService.prefix?t.value:this._maskService.prefix+this._maskService.maskIsShown;t.value!==l&&(t.value=l),(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length?t.selectionStart=this._maskService.prefix.length:t.selectionEnd>this._getActualInputLength()&&(t.selectionEnd=this._getActualInputLength())}onKeyDown(e){if(!this._maskValue)return;this._code=e.code?e.code:e.key;const t=e.target;if(this._inputValue=t.value,this._setMask(),38===e.keyCode&&e.preventDefault(),37===e.keyCode||8===e.keyCode||46===e.keyCode){if(8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),8===e.keyCode&&0!==t.selectionStart)if(this.specialCharacters=this.specialCharacters?.length?this.specialCharacters:this._config.specialCharacters,this.prefix.length>1&&t.selectionStart<=this.prefix.length)t.setSelectionRange(this.prefix.length,t.selectionEnd);else if(this._inputValue.length!==t.selectionStart&&1!==t.selectionStart)for(;this.specialCharacters.includes(this._inputValue[t.selectionStart-1].toString())&&(this.prefix.length>=1&&t.selectionStart>this.prefix.length||0===this.prefix.length);)t.setSelectionRange(t.selectionStart-1,t.selectionEnd);this.checkSelectionOnDeletion(t),this._maskService.prefix.length&&t.selectionStart<=this._maskService.prefix.length&&t.selectionEnd<=this._maskService.prefix.length&&e.preventDefault();const r=t.selectionStart;8===e.keyCode&&!t.readOnly&&0===r&&t.selectionEnd===t.value.length&&0!==t.value.length&&(this._position=this._maskService.prefix?this._maskService.prefix.length:0,this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position))}this.suffix&&this.suffix.length>1&&this._inputValue.length-this.suffix.length<t.selectionStart?t.setSelectionRange(this._inputValue.length-this.suffix.length,this._inputValue.length):(65===e.keyCode&&e.ctrlKey||65===e.keyCode&&e.metaKey)&&(t.setSelectionRange(0,this._getActualInputLength()),e.preventDefault()),this._maskService.selStart=t.selectionStart,this._maskService.selEnd=t.selectionEnd}writeValue(e){var t=this;return function J(n){return function(){var h=this,e=arguments;return new Promise(function(t,r){var a=n.apply(h,e);function l(i){D(a,t,r,l,m,"next",i)}function m(i){D(a,t,r,l,m,"throw",i)}l(void 0)})}}(function*(){"object"==typeof e&&null!==e&&"value"in e&&("disable"in e&&t.setDisabledState(Boolean(e.disable)),e=e.value),("number"==typeof e||t._maskValue.startsWith("separator"))&&(e=t._maskService.numberToString(e),Array.isArray(t.decimalMarker)||(e="."!==t.decimalMarker?e.replace(".",t.decimalMarker):e),t._maskService.isNumberValue=!0),"string"!=typeof e&&(e=""),t._inputValue=e,t._setMask(),e&&t._maskService.maskExpression||t._maskService.maskExpression&&(t._maskService.prefix||t._maskService.showMaskTyped)?(t._maskService.writingValue=!0,t._maskService.formElementProperty=["value",t._maskService.applyMask(e,t._maskService.maskExpression)],t._maskService.writingValue=!1):t._maskService.formElementProperty=["value",e],t._inputValue=e})()}registerOnChange(e){this.onChange=e,this._maskService.onChange=this.onChange}registerOnTouched(e){this.onTouch=e}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}checkSelectionOnDeletion(e){e.selectionStart=Math.min(Math.max(this.prefix.length,e.selectionStart),this._inputValue.length-this.suffix.length),e.selectionEnd=Math.min(Math.max(this.prefix.length,e.selectionEnd),this._inputValue.length-this.suffix.length)}setDisabledState(e){this._maskService.formElementProperty=["disabled",e]}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((t,r,a)=>{if(this._start="{"===r?a:this._start,"}"!==r)return this._maskService._findSpecialChar(r)?t+r:t;this._end=a;const l=Number(e.slice(this._start+1,this._end));return t+new Array(l+1).join(e[this._start-1])},"")||e}_applyMask(){this._maskService.maskExpression=this._repeatPatternSymbols(this._maskValue||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue,this._maskService.maskExpression)]}_validateTime(e){const t=this._maskValue.split("").filter(r=>":"!==r).length;return e&&(0==+e[e.length-1]&&e.length<t||e.length<=t-2)?this._createValidationError(e):null}_getActualInputLength(){return this._maskService.actualValue.length||this._maskService.actualValue.length+this._maskService.prefix.length}_createValidationError(e){return{mask:{requiredMask:this._maskValue,actualValue:e}}}_setMask(){this._maskExpressionArray.length>0&&this._maskExpressionArray.some(e=>{const t=this._maskService.removeMask(this._inputValue)?.length<=this._maskService.removeMask(e)?.length;if(this._inputValue&&t)return this._maskValue=e,this.maskExpression=e,this._maskService.maskExpression=e,t;this._maskValue=this._maskExpressionArray[this._maskExpressionArray.length-1],this.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1],this._maskService.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1]})}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(N.K0),s.Y36(F),s.Y36(P))},n.\u0275dir=s.lG2({type:n,selectors:[["input","mask",""],["textarea","mask",""]],hostBindings:function(e,t){1&e&&s.NdJ("paste",function(){return t.onPaste()})("ngModelChange",function(a){return t.onModelChange(a)})("input",function(a){return t.onInput(a)})("blur",function(){return t.onBlur()})("click",function(a){return t.onClick(a)})("keydown",function(a){return t.onKeyDown(a)})},inputs:{maskExpression:["mask","maskExpression"],specialCharacters:"specialCharacters",patterns:"patterns",prefix:"prefix",suffix:"suffix",thousandSeparator:"thousandSeparator",decimalMarker:"decimalMarker",dropSpecialCharacters:"dropSpecialCharacters",hiddenInput:"hiddenInput",showMaskTyped:"showMaskTyped",placeHolderCharacter:"placeHolderCharacter",shownMaskExpression:"shownMaskExpression",showTemplate:"showTemplate",clearIfNotMatch:"clearIfNotMatch",validation:"validation",separatorLimit:"separatorLimit",allowNegativeNumbers:"allowNegativeNumbers",leadZeroDateTime:"leadZeroDateTime",triggerOnMaskChange:"triggerOnMaskChange"},outputs:{maskFilled:"maskFilled"},exportAs:["mask","ngxMask"],features:[s._Bn([{provide:u.JU,useExisting:(0,s.Gpc)(()=>n),multi:!0},{provide:u.Cf,useExisting:(0,s.Gpc)(()=>n),multi:!0},F]),s.TTD]}),n})();function G(n,h){return h instanceof Function?{...n,...h()}:{...n,...h}}let Q=(()=>{class n{static forRoot(e){return{ngModule:n,providers:[{provide:$,useValue:e},{provide:R,useValue:U},{provide:P,useFactory:G,deps:[R,$]},Z]}}static forChild(){return{ngModule:n}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({}),n})();const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function z(n,h){1&n&&s._UZ(0,"div")}function W(n,h){1&n&&(s.TgZ(0,"small",12),s._uU(1," M\xednimo de 4 caracteres "),s.qZA())}function K(n,h){1&n&&(s.TgZ(0,"small",12),s._uU(1," Preencha este campo "),s.qZA())}function X(n,h){1&n&&s._UZ(0,"div")}function V(n,h){1&n&&(s.TgZ(0,"small",12),s._uU(1," M\xednimo de 10 caracteres "),s.qZA())}function ee(n,h){1&n&&(s.TgZ(0,"small",12),s._uU(1," Preencha este campo "),s.qZA())}function te(n,h){1&n&&s._UZ(0,"div")}function se(n,h){1&n&&(s.TgZ(0,"small",12),s._uU(1," M\xednimo de 11 caracteres "),s.qZA())}function re(n,h){1&n&&(s.TgZ(0,"small",12),s._uU(1," Preencha este campo "),s.qZA())}function ie(n,h){1&n&&s._UZ(0,"div")}function ae(n,h){1&n&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa de um email v\xe1lido "),s.qZA())}function ne(n,h){1&n&&(s.TgZ(0,"small",12),s._uU(1," Preencha este campo "),s.qZA())}j.KeyboardEvent||(j.KeyboardEvent=function(n,h){});const oe=[{path:"",component:(()=>{class n{constructor(e,t){this.formBuilder=e,this.notificacaoService=t,this.formContato=this.formBuilder.group({nome:["",[u.kI.minLength(4),u.kI.required]],assunto:["",[u.kI.minLength(10),u.kI.required]],telefone:["",[u.kI.minLength(11),u.kI.required]],email:["",[u.kI.email,u.kI.required]],mensagem:["",[u.kI.minLength(20),u.kI.required]]})}ngOnInit(){}enviarFormulario(){this.notificacaoService.notificar("Mensagem enviada!"),this.formContato.reset()}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(u.qu),s.Y36(L.r))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-contato"]],decls:31,vars:34,consts:[[1,"contact__title"],[1,"contact__container"],["action","",1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","digite seu nome","formControlName","nome"],[4,"ngIf"],["class","error-message",4,"ngIf"],["type","assunto","placeholder","Informe o assunto","formControlName","assunto"],["type","tel","placeholder","(xx) xxxxx-xxxx ","mask","(00)0 0000-0000","formControlName","telefone"],["type","email","placeholder","digite seu e-mail","formControlName","email"],["maxlength","300","rows","4","placeholder","Digite sua mensagem","formControlName","mensagem"],["type","submit",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.306527279787!2d-38.4654287!3d-12.982938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x93d05979e29ef93b!2sCapgemini!5e0!3m2!1sen!2sbr!4v1662607098967!5m2!1sen!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],[1,"error-message"]],template:function(e,t){1&e&&(s.TgZ(0,"h2",0),s._uU(1,"Entre em contato"),s.qZA(),s.TgZ(2,"section",1)(3,"form",2),s.NdJ("ngSubmit",function(){return t.enviarFormulario()}),s._UZ(4,"input",3),s.YNc(5,z,1,0,"div",4),s.YNc(6,W,2,0,"small",5),s.YNc(7,K,2,0,"small",5),s._UZ(8,"input",6),s.YNc(9,X,1,0,"div",4),s.YNc(10,V,2,0,"small",5),s.YNc(11,ee,2,0,"small",5),s._UZ(12,"input",7),s.YNc(13,te,1,0,"div",4),s.YNc(14,se,2,0,"small",5),s.YNc(15,re,2,0,"small",5),s._UZ(16,"input",8),s.YNc(17,ie,1,0,"div",4),s.YNc(18,ae,2,0,"small",5),s.YNc(19,ne,2,0,"small",5),s.TgZ(20,"textarea",9),s._uU(21,"\n        <div *ngIf=\"formContato.controls['mensagem'].invalid "),s._uU(22,"&"),s._uU(23,"&"),s._uU(24," \n            formContato.controls['mensagem'].touched || formContato.controls['mensagem'].dirty\">\n        </div>\n\n        <small class=\"error-message\" *ngIf=\"formContato.controls['mensagem'].hasError('minlength')\">\n            Esse campo precisa de no m\xednimo 20 caracteres\n        </small>\n\n        <small class=\"error-message\" *ngIf=\"formContato.controls['mensagem'].hasError('required')\">\n            Preencha este campo\n        </small>\n\n        "),s.qZA(),s.TgZ(25,"button",10),s._uU(26,"Enviar"),s.qZA()(),s.TgZ(27,"address"),s._UZ(28,"iframe",11),s.TgZ(29,"p"),s._uU(30,"Av. Ant\xf4nio Carlos Magalh\xe3es, 3148 - Caminho das \xc1rvores, Salvador - BA, 40260-485"),s.qZA()()()),2&e&&(s.xp6(3),s.Q6J("formGroup",t.formContato),s.xp6(1),s.ekj("valid",t.formContato.controls.nome.valid)("invalid",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.nome.invalid&&t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.nome.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.nome.hasError("required")),s.xp6(1),s.ekj("valid",t.formContato.controls.assunto.valid)("invalid",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.assunto.invalid&&t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.assunto.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.assunto.hasError("required")),s.xp6(1),s.ekj("valid",t.formContato.controls.telefone.valid)("invalid",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.telefone.invalid&&t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.telefone.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.telefone.hasError("required")),s.xp6(1),s.ekj("valid",t.formContato.controls.email.valid)("invalid",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.email.invalid&&t.formContato.controls.email.touched||t.formContato.controls.email.dirty),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.email.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.email.hasError("required")),s.xp6(1),s.ekj("valid",t.formContato.controls.mensagem.valid)("invalid",t.formContato.controls.mensagem.invalid&&(t.formContato.controls.mensagem.touched||t.formContato.controls.mensagem.dirty)),s.xp6(5),s.Q6J("disabled",t.formContato.invalid))},dependencies:[N.O5,u._Y,u.Fj,u.JJ,u.JL,u.nD,u.sg,u.u,q],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),n})()}];let le=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[H.Bz.forChild(oe),H.Bz]}),n})(),he=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[N.ez,le,u.UX,Q.forRoot()]}),n})()}}]);