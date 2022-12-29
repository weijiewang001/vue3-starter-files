export default {
  data(){
    return {
      text: '外部汇入的元件',
    };
  },
  template: `<div class="alert alert-primary" 
    role="alert">
      {{ text }}
    </div>`,
}