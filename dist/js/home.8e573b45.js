(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"037b":function(e,t,i){"use strict";i("41ed")},"16c0":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],ref:"container",staticClass:"home-container",on:{wheel:e.handleWheel}},[t("ul",{staticClass:"carousel-container",style:{marginTop:e.marginTop}},e._l(e.data,(function(e){return t("li",{key:e.id},[t("Carouselitem",{attrs:{carousel:e}})],1)})),0),t("div",{directives:[{name:"show",rawName:"v-show",value:e.index>0,expression:"index > 0"}],staticClass:"icon icon-up",on:{click:function(t){e.index--}}},[t("Icon",{attrs:{type:"shangjiantou"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.index<this.data.length-1,expression:"index < this.data.length - 1"}],staticClass:"icon icon-down",on:{click:function(t){e.index++}}},[t("Icon",{attrs:{type:"xiajiantou"}})],1),t("ul",{staticClass:"indicator"},e._l(e.data,(function(i,s){return t("li",{key:i.id,class:{active:s===e.index},on:{click:function(t){e.index=s}}})})),0)])},n=[],a=function(){var e=this,t=e._self._c;return t("div",{ref:"container",staticClass:"carousel-item-container",on:{mousemove:e.handleMouseMove,mouseleave:e.handleMouseLeave}},[t("div",{ref:"image",staticClass:"carousel-img",style:e.imagePosition},[t("ImageLoader",{attrs:{src:e.carousel.bigImg,placeholder:e.carousel.midImg},on:{load:e.showWords}})],1),t("div",{ref:"info",staticClass:"info"},[t("div",{ref:"title",staticClass:"title"},[e._v(e._s(e.carousel.title))]),t("div",{ref:"description",staticClass:"description"},[e._v(" "+e._s(e.carousel.description)+" ")])])])},o=[],r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"image-loader-container"},[e.everythingDone?t("img",{staticClass:"placeholder",attrs:{src:e.placeholder}}):e._e(),t("img",{staticClass:"origin",style:{opacity:e.originOpacity,transition:e.duration+"ms"},attrs:{src:e.src},on:{load:e.handleLoaded}})])},c=[],d={name:"ImageLoader",props:{src:{type:String,required:!0},placeholder:{type:String,required:!0},duration:{type:Number,default:1e3}},data(){return{originLoaded:!1,everythingDone:!0}},computed:{originOpacity(){return this.originLoaded?1:0}},methods:{handleLoaded(){this.originLoaded=!0,setTimeout(()=>this.everythingDone=!1,this.duration),this.$emit("load")}}},h=d,l=(i("7119"),i("2877")),u=Object(l["a"])(h,r,c,!1,null,"43cb9429",null),m=u.exports,g={props:["carousel"],components:{ImageLoader:m},data(){return{titleWidth:0,descriptionWidth:0,containerSize:null,imageSize:null,mouseX:0,mouseY:0}},computed:{imagePosition(){if(!this.containerSize||!this.imageSize)return;const e=this.imageSize.width-this.containerSize.width,t=this.imageSize.height-this.containerSize.height,i=-e/this.containerSize.width*this.mouseX,s=-t/this.containerSize.height*this.mouseY;return{transform:`translate(${i}px, ${s}px)`}},center(){return{x:this.containerSize.width/2,y:this.containerSize.height/2}}},mounted(){this.titleWidth=this.$refs.title.clientWidth,this.descriptionWidth=this.$refs.description.clientWidth,this.setSize(),this.mouseX=this.center.x,this.mouseY=this.center.y,window.addEventListener("resize",this.setSize)},destroyed(){window.removeEventListener("resize",this.setSize)},methods:{showWords(){this.$refs.info.style.opacity=1,this.$refs.title.style.width=0,this.$refs.title.style.transition="2s",this.$refs.title.clientWidth,this.$refs.title.style.width=this.titleWidth+"px",this.$refs.description.style.width=0,this.$refs.description.style.transition="2s 1s",this.$refs.description.clientWidth,this.$refs.description.style.width=this.descriptionWidth+"px"},setSize(){this.containerSize={width:this.$refs.container.clientWidth,height:this.$refs.container.clientHeight},this.imageSize={width:this.$refs.image.clientWidth,height:this.$refs.image.clientHeight}},handleMouseMove(e){const t=this.$refs.container.getBoundingClientRect();this.mouseX=e.clientX-t.left,this.mouseY=e.clientY-t.top},handleMouseLeave(){this.mouseX=this.center.x,this.mouseY=this.center.y}}},p=g,f=(i("037b"),Object(l["a"])(p,a,o,!1,null,"21d5c3c8",null)),v=f.exports,w=i("d010"),x=i("5880"),y={components:{Carouselitem:v,Icon:w["a"]},data(){return{index:0,containerHeight:0}},created(){this.$store.dispatch("banner/fatchBanners")},mounted(){this.containerHeight=this.$refs.container.clientHeight},computed:{marginTop(){return-this.index*this.containerHeight+"px"},...Object(x["mapState"])("banner",["data","isLoading"])},methods:{handleWheel(e){e.deltaY<0&&this.index>0?this.index--:e.deltaY>0&&this.index<this.data.length-1&&this.index++}}},S=y,$=(i("1b29"),Object(l["a"])(S,s,n,!1,null,"74627ab2",null));t["default"]=$.exports},"1b29":function(e,t,i){"use strict";i("eddb")},"41ed":function(e,t,i){},"50c6":function(e,t,i){},7119:function(e,t,i){"use strict";i("50c6")},eddb:function(e,t,i){}}]);