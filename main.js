// 高德地图初始化
const map = new AMap.Map('map', {
  zoom: 11,
  center: [114.17, 22.30]
});

map.setMapStyle('amap://styles/grey');

// 50 条歌曲地点数据（已修正坐标）
const songLocations = [
{ Name:"黄金时代", Singer:"陈奕迅", Lyrics:"黃金廣場內分手", Location:"黃金廣場", lng:114.189175, lat:22.277117 },
  { Name:"黄金时代", Singer:"陈奕迅", Lyrics:"在時代門外再聚", Location:"時代廣場", lng:114.187019, lat:22.27555 },
  { Name:"喜帖街", Singer:"谢安琪", Lyrics:"就似這一區\n曾經稱得上\n美滿甲天下", Location:"利東街", lng:114.177243, lat:22.272843 },
  { Name:"弥敦道", Singer:"洪卓立", Lyrics:"", Location:"彌敦道", lng:114.176013, lat:22.308005 },
  { Name:"弥敦道", Singer:"洪卓立", Lyrics:"一經信和暴雨泄", Location:"信和廣場", lng:114.187385, lat:22.278546 },
  { Name:"芬梨道上", Singer:"杨千嬅", Lyrics:"", Location:"芬梨道", lng:114.155861, lat:22.268236 },
  { Name:"芬梨道上", Singer:"杨千嬅", Lyrics:"橫行直闖\n車閃過白加道旁", Location:"白加道", lng:114.16193, lat:22.268582 },
  { Name:"芬梨道上", Singer:"杨千嬅", Lyrics:"回到現今\n灣仔竟無法俯瞰", Location:"灣仔", lng:114.177904, lat:22.274386 },
  { Name:"芬梨道上", Singer:"杨千嬅", Lyrics:"施勳道上長流富貴浮雲", Location:"施勳道", lng:114.163439, lat:22.264935 },
  { Name:"芬梨道上", Singer:"杨千嬅", Lyrics:"淩霄閣不吸引 沿山腰觀景更狠", Location:"淩霄閣", lng:114.154783, lat:22.268594 },
  { Name:"下一站天后", Singer:"Twins", Lyrics:"在百德新街的愛侶\n面上有種顧盼自豪", Location:"百德新街", lng:114.190501, lat:22.277891 },
  { Name:"下一站天后", Singer:"Twins", Lyrics:"站在大丸前\n細心看看我的路", Location:"Fashion Walk（原大丸百貨）", lng:114.190132, lat:22.278468 },
  { Name:"下一站天后", Singer:"Twins", Lyrics:"", Location:"天後站", lng:114.196768, lat:22.279984 },
  { Name:"老派约会之必要", Singer:"MC 张天赋", Lyrics:"怎知道霎眼就談到赤柱了\n錯過了\n你我的家", Location:"赤柱", lng:114.214601, lat:22.216211 },
  { Name:"山林道", Singer:"谢安琪", Lyrics:"", Location:"山林道", lng:114.178685, lat:22.299986 },
  { Name:"你说得对", Singer:"容祖儿", Lyrics:"愛無聊獨行尖沙咀", Location:"尖沙咀", lng:114.17719, lat:22.294678 },
  { Name:"随意门", Singer:"陈奕迅", Lyrics:"出尖沙咀令人太累", Location:"尖沙咀", lng:114.17719, lat:22.294678 },
  { Name:"油尖旺金毛玲", Singer:"树莉莉 Serrini", Lyrics:"油尖旺金毛玲\n看盡世間事", Location:"油尖旺", lng:114.173331, lat:22.311704 },
  { Name:"石径", Singer:"张敬轩", Lyrics:"舊日圍村小徑\n踏步往返每天必經", Location:"新田围村", lng:114.191262, lat:22.367481 },
  { Name:"我是羊", Singer:"杨千嬅", Lyrics:"你住近波士頓 我住太古城", Location:"太古城", lng:114.222251, lat:22.283885 },
  { Name:"狮子山下", Singer:"罗文", Lyrics:"我哋大家在獅子山下相遇上", Location:"獅子山", lng:114.19193, lat:22.350209 },
  { Name:"南昌街王子", Singer:"薛凯琪", Lyrics:"你問南昌街有王子出沒嗎", Location:"南昌街", lng:114.170927, lat:22.329464 },
  { Name:"佳节", Singer:"李克勤", Lyrics:"颱風訪港的五月節仿如昨天\n在深水灣跳浪", Location:"深水灣", lng:114.188041, lat:22.240498 },
  { Name:"皇后大道东", Singer:"罗大佑", Lyrics:"皇后大道東上為何無皇宮", Location:"皇后大道東", lng:114.184379, lat:22.271672 },
  { Name:"皇后大道东", Singer:"罗大佑", Lyrics:"但是旺角可能要換換名字", Location:"旺角", lng:114.17432, lat:22.316633 },
  { Name:"诗歌舞街", Singer:"my little airport", Lyrics:"詩歌舞街地上有著光電閃閃", Location:"詩歌舞街", lng:114.168793, lat:22.322487 },
  { Name:"土瓜湾情歌", Singer:"my little airport", Lyrics:"我此刻仍留在土瓜灣\n想著未來怎麼辦", Location:"土瓜灣", lng:114.190195, lat:22.311485 },
  { Name:"下亚厘毕道", Singer:"my little airport", Lyrics:"由歌賦街飲去到下亞厘畢道", Location:"下亞厘畢道", lng:114.163208, lat:22.276686 },
  { Name:"牛头角青年", Singer:"my little airport", Lyrics:"牛頭角的日出都看厭\n時間不站在你身邊", Location:"牛頭角", lng:114.223841, lat:22.312658 },
  { Name:"今夜到干诺道中一起瞓", Singer:"my little airport", Lyrics:"今夜到幹諾道中一起瞓\n這是我最可負擔的租金", Location:"幹諾道中", lng:114.16123, lat:22.28261 },
  { Name:"给金钟地铁站车厢内的人", Singer:"my little airport", Lyrics:"金鐘地鐵站車廂內的人\n為什麼你們不行入啲呢", Location:"金鐘", lng:114.170298, lat:22.276502 },
  { Name:"北京北角", Singer:"李克勤", Lyrics:"北京北角金紫荊對開許過願\n以愛熱熔那界限線", Location:"北角", lng:114.205467, lat:22.288219 },
  { Name:"油麻地莎士比亚", Singer:"吕爵安", Lyrics:"那份愛卻是厚過莎翁每首詩\n凡人讀不懂說是廢紙", Location:"油麻地", lng:114.175658, lat:22.310264 },
  { Name:"东涌日和", Singer:"Shine", Lyrics:"從旺角只到樂富\n轉眼沖出將軍澳", Location:"樂富", lng:114.19218, lat:22.335052 },
  { Name:"东涌日和", Singer:"Shine", Lyrics:"從旺角只到樂富\n轉眼沖出將軍澳", Location:"將軍澳", lng:114.264721, lat:22.304583 },
  { Name:"东涌日和", Singer:"Shine", Lyrics:"腳在跳著舞\n青衣前望有去路", Location:"青衣", lng:114.112563, lat:22.355763 },
  { Name:"流泪行胜利道", Singer:"许志安", Lyrics:"流淚行勝利道\n別再做愛情奴", Location:"勝利道", lng:114.17932, lat:22.31706 },
  { Name:"樱花树下", Singer:"张敬轩", Lyrics:"如有天置地門外 乘電車跨過大海", Location:"置地廣場", lng:114.162665, lat:22.278469 },
  { Name:"欣澳别恋", Singer:"吴雨霏", Lyrics:"", Location:"欣澳", lng:114.033911, lat:22.329018 },
  { Name:"眼红馆", Singer:"关智斌", Lyrics:"寂寞便在紅館中一起呼喊", Location:"紅磡", lng:114.186698, lat:22.300117 },
  { Name:"永顺街39号", Singer:"卢瀚霆", Lyrics:"", Location:"永順街", lng:114.11834, lat:22.361839 },
  { Name:"情缘巴士站", Singer:"谭咏麟", Lyrics:"在這淺水灣的一個終站", Location:"淺水灣", lng:114.201143, lat:22.23394 },
  { Name:"毋忘", Singer:"谢安琪", Lyrics:"屯元天渡天曉到油尖旺通宵", Location:"油尖旺", lng:114.173331, lat:22.311704 },
  { Name:"浪漫九龙城", Singer:"林一峰", Lyrics:"昨日坐巴士路過九龍城", Location:"九龍", lng:114.166578, lat:22.302336 },
  { Name:"浪漫九龙城", Singer:"林一峰", Lyrics:"現在啟德已變冷清", Location:"啟德", lng:114.204299, lat:22.327686 },
  { Name:"浪漫九龙城", Singer:"林一峰", Lyrics:"註定難跟赤鱲角比拼", Location:"赤鱲角", lng:113.936353, lat:22.304839 },
  { Name:"伟业街", Singer:"胡鸿钧", Lyrics:"", Location:"偉業街", lng:114.222235, lat:22.311102 },
  { Name:"劲浪漫 超温馨", Singer:"Gareth. T", Lyrics:"銅鑼灣夠有五十只綠茶", Location:"銅鑼灣", lng:114.189409, lat:22.278213 },
  { Name:"凤凰木", Singer:"薛凯琪", Lyrics:"大埔的長街\n吹來只得眼淚吧", Location:"大埔", lng:114.171743, lat:22.445653 },
  { Name:"他约我去迪士尼", Singer:"陈慧琳/陈晓琪", Lyrics:"畢生也願記起香港迪士尼\n煙火璀璨夜晚定會很美", Location:"迪士尼", lng:114.047326, lat:22.309841 }
];

// 循环创建 Marker + InfoWindow
songLocations.forEach(item => {
  const infoHtml = `
    <div class="hk-lyric-window">
      <div class="hk-inner-border">
        <div class="hk-header-group">
          <span class="hk-artist">${item.Singer}</span>
          <span class="hk-divider">/</span>
          <span class="hk-song">${item.Name}</span>
        </div>
        <div class="hk-lyric-body">
          <p>${item.Lyrics || ''}</p>
        </div>
        <div class="hk-footer-mark">
          <span class="hk-loc-text">${item.Location}</span>
        </div>
      </div>
    </div>
  `;

  const marker = new AMap.Marker({
    position: [item.lng, item.lat],
    icon: new AMap.Icon({
      size: new AMap.Size(20, 20),
      image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png',
      imageSize: new AMap.Size(20, 20)
    })
  });
  marker.setMap(map);

  const infoWindow = new AMap.InfoWindow({
    content: infoHtml,
    offset: new AMap.Pixel(0, -30),
    isCustom: true
  });

  marker.on('click', () => {
    infoWindow.open(map, marker.getPosition());
  });
});
