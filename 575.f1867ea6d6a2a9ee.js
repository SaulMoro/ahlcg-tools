"use strict";(self.webpackChunkahlcg_tools=self.webpackChunkahlcg_tools||[]).push([[575],{575:(T,p,e)=>{e.r(p),e.d(p,{CampaignDetailContainerComponent:()=>g,CampaignDetailContainerComponentModule:()=>I});var c=e(9808),m=e(1163),u=e(4004),d=e(3900),s=e(5051),n=e(7587),f=e(3144);function h(t,o){1&t&&n._UZ(0,"ahlcg-tools-narration-audio",10),2&t&&n.Q6J("narration",o.ngIf)}function x(t,o){if(1&t&&(n.ynx(0),n.YNc(1,h,1,1,"ahlcg-tools-narration-audio",9),n.BQk()),2&t){const a=o.$implicit;n.xp6(1),n.Q6J("ngIf",a.narration)}}const v=function(t){return[t]};function D(t,o){if(1&t&&(n.TgZ(0,"p",11)(1,"a",12),n._uU(2),n.qZA()()),2&t){const a=o.$implicit,i=n.oxw().ngIf,r=n.oxw();n.xp6(1),n.Q6J("routerLink",n.VKq(2,v,a)),n.xp6(1),n.Oqu(r.getScenarioNameById(i,a))}}const Z=function(){return[".."]};function y(t,o){if(1&t&&(n.TgZ(0,"main",1)(1,"h1",2),n._uU(2),n.qZA(),n.TgZ(3,"a",3),n._uU(4," < Volver a listado de campa\xf1as "),n.qZA(),n.TgZ(5,"div",4)(6,"h2",5),n._uU(7,"Setup"),n.qZA(),n.YNc(8,x,2,1,"ng-container",6),n.qZA(),n.TgZ(9,"div",7)(10,"h2",5),n._uU(11,"Escenarios"),n.qZA(),n.YNc(12,D,3,4,"p",8),n.qZA()()),2&t){const a=o.ngIf;n.xp6(2),n.Oqu(a.campaign.name),n.xp6(1),n.Q6J("routerLink",n.DdM(4,Z)),n.xp6(5),n.Q6J("ngForOf",a.campaign.steps),n.xp6(4),n.Q6J("ngForOf",a.campaign.scenarios)}}let g=(()=>{class t{constructor(a,i){this.narrationsService=a,this.route=i,this.campaign$=this.route.params.pipe(function C(...t){const o=t.length;if(0===o)throw new Error("list of properties cannot be empty.");return(0,u.U)(a=>{let i=a;for(let r=0;r<o;r++){const l=null==i?void 0:i[t[r]];if(void 0===l)return;i=l}return i})}("id"),(0,d.w)(r=>this.narrationsService.getCampaign(r)))}getScenarioNameById(a,i){var r;return null===(r=a.scenarios.find(l=>l.id===i))||void 0===r?void 0:r.full_name}}return t.\u0275fac=function(a){return new(a||t)(n.Y36(f.x),n.Y36(m.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["ahlcg-tools-campaign-detail-container"]],decls:2,vars:3,consts:[["class","space-y-8",4,"ngIf"],[1,"space-y-8"],[1,"text-3xl","text-bold"],[1,"text-xl","text-medium",3,"routerLink"],[1,"bg-gray-400"],[1,"text-xl","text-bold"],[4,"ngFor","ngForOf"],[1,"bg-orange-300"],["class","mt-4 text-lg text-medium",4,"ngFor","ngForOf"],[3,"narration",4,"ngIf"],[3,"narration"],[1,"mt-4","text-lg","text-medium"],[3,"routerLink"]],template:function(a,i){1&a&&(n.YNc(0,y,13,5,"main",0),n.ALo(1,"async")),2&a&&n.Q6J("ngIf",n.lcZ(1,1,i.campaign$))},directives:[c.O5,m.yS,c.sg,s.D],pipes:[c.Ov],encapsulation:2,changeDetection:0}),t})(),I=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.ez,s.Z,m.Bz.forChild([{path:"",component:g},{path:":scenarioId",loadChildren:()=>Promise.resolve().then(e.bind(e,8606)).then(o=>o.CampaignScenarioContainerComponentModule)}])]]}),t})()}}]);