(function () {
  $(".monitor .tabs").on("click", "a", function () {
    $(this).addClass("active").siblings("a").removeClass("active")
    $(".monitor .content").eq($(this).index()).show().siblings(".content").hide()
  })
  // 克隆行
  $(".marquee-view .marquee").each(function () {
    let rows = $(this).children().clone()
    $(this).append(rows)
  })
})();
(function () {
  let myChart = echarts.init(document.querySelector(".pie"));
  let option = {

    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],

    series: [
      {
        name: "面积模式",
        type: "pie",
        // 如果是百分比则必须是引号
        radius: ["10%", "60%"],
        center: ["50%", "50%"],
        roseType: "radius",
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 30, name: "rose 1" },
          { value: 28, name: "rose 2" },
          { value: 26, name: "rose 3" },
          { value: 24, name: "rose 4" },
          { value: 22, name: "rose 5" },
          { value: 20, name: "rose 6" },
          { value: 18, name: "rose 7" },
          { value: 16, name: "rose 8" }
        ],
        label: {
          fontSize: 10
        },
        labelLine: {
          length: 8,
          length2: 8
        }
      }
    ]
  };
  myChart.setOption(option);
  // 等比例缩放
  window.addEventListener("resize", function () {
    myChart.resize()
  })
})();

(function () {
  var item = {
    name: "",
    value: 1200,
    // 1. 修改当前柱形的样式
    itemStyle: {
      color: "#254065"
    },
    // 2. 鼠标放到柱子上不想高亮显示
    emphasis: {
      itemStyle: {
        color: "#254065"
      }
    },
    // 3. 鼠标经过柱子不显示提示框组件
    tooltip: {
      extraCssText: "opacity: 0"
    }
  };
  let myChart = echarts.init(document.querySelector(".bar"))
  let option = {
    color: {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0, color: "#00fffd" // 0% 处的颜色
      }, {
        offset: 1, color: "#0061ce" // 100% 处的颜色
      }],
      global: false // 缺省为 false
    },
    tooltip: {
      trigger: "item",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      left: "0%",
      right: "3%",
      bottom: "3%",
      top: "4%",
      containLabel: true,
      show: true,
      borderColor: "rgba(0,240,255,0.3)"
    },
    xAxis: [
      {
        type: "category",
        data: ["上海", "广州", "北京", "深圳", "合肥", "", "......", "", "杭州", "厦门", "济南", "成都", "重庆"],
        axisTick: {
          alignWithLabel: false,
          show: false
        },
        axisLabel: {
          color: "#4c9bfd"
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0,240,255,0.3)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          alignWithLabel: false,
          show: false
        },
        axisLabel: {
          color: "#4c9bfd"
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0,240,255,0.3)"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0,240,255,0.3)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "60%",
        data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240
        ]
      }
    ]

  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize()
  })
})();
// tab栏切换
(function () {
  $(".order .filter").on("click", "a", function () {
    $(this).addClass("active").siblings("a").removeClass("active")
    $(".order .data").eq($(this).index()).show().siblings(".data").hide()
  })
})();

// 销售模块
(function () {
  // (1)准备数据
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  };
  let myChart = echarts.init(document.querySelector(".line"))
  let option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      right: "10%",
      // data: ['Direct', 'Search Engine'],
      top: "-3%",
      textStyle: {
        color: "#4c9bfd"
      }
    },
    grid: {
      left: '0%',
      right: '3%',
      bottom: '0%',
      top: '13%',
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ["1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "#4c9bfd",
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "#4c9bfd"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [

      {
        name: '预期销售额',
        type: 'line',
        stack: '总量',
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: '实际销售额',
        type: 'line',
        stack: '总量',
        smooth: true,
        data: data.year[1]
      }
    ]
  };
  myChart.setOption(option)
  // 点击切换数据
  $(".sales .caption").on("click", "a", function () {
    index=$(this).index()-1
    $(this).addClass("active").siblings("a").removeClass("active")
    // $(".order .data").eq($(this).index()).show().siblings(".data").hide()
    var date = data[this.dataset.type]
    option.series[0].data = date[0]
    option.series[1].data = date[1]
    myChart.setOption(option)

  })

  let as = $(".sales .caption a")
  let index = 0
  let timer=setInterval(function () {
    index++
    if (index >= 4) index = 0
    as.eq(index).click()
  }, 1000)

  $(".sales").hover(function(){
    clearInterval(timer)
  },function(){
    clearInterval(timer)
     timer=setInterval(function () {
      index++
      if (index >= 4) index = 0
      as.eq(index).click()
    }, 1000)
  })
})();

(function(){
  let myChart =echarts.init(document.querySelector(".radar"))
  let option = {
    // backgroundColor: '#161627',
    tooltip: {
      show: true,
      // 控制提示框组件的显示位置
      position: ["60%", "10%"]
    },
   
    radar: {
      indicator: [
        { name: '机场', max: 100 },
        { name: '商场', max: 100 },
        { name: '火车站', max: 100 },
        { name: '汽车站', max: 100 },
        { name: '地铁', max: 100 }
      ],
      radius: "55%",
      shape: 'circle',
      splitNumber: 4,
      name: {
        // 修饰雷达图文字的颜色
        textStyle: {
          color: "#4c9bfd"
        }
      },
      
      
      splitLine: {
        lineStyle: {
          color: [
            'rgba(255, 255, 255, 0.5)'   
          ]
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      }
    },
    series: [
      {
        name: '北京',
        type: 'radar',
        lineStyle: {
          normal: {
            color: "#fff",
            width: 1,
            opacity: 0.5
          }
        },
        data: [[90, 19, 56, 11, 34]],
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
          color: '#fff'
        },
        label: {
          show: true,
          fontSize: 10
        },
        areaStyle: {
          color: "rgba(238, 197, 102, 0.6)"
        }
      }
   
    ]
  };
  myChart.setOption(option)
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  })
})();

(function(){
  let myChart=echarts.init(document.querySelector('.gauge'))
  let option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: '销售进度',
        type: 'pie',
        radius: ['130%', '150%'],
        center: ["48%", "80%"],
        labelLine: {
          show: false
        },
        startAngle: 180,
        // 鼠标经过不需要放大偏移图形
        hoverOffset: 0,
        data: [
          {
            value: 100,
            itemStyle: {
              // 颜色渐变#00c9e0->#005fc1
              color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                  { offset: 1, color: "#005fc1" } // 1 结束颜色
                ]
              )
            }
          },
          { value: 100,
            itemStyle: {
            color: "#12274d"
          }},
         
          { value: 200 ,
            itemStyle: {
              color: "transparent"
            }
          },
        ]
      }
    ]
  };
  myChart.setOption(option)
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

(function() {
  // 1. 准备相关数据
  var hotData = [
    {
      city: "北京", // 城市
      sales: "25, 179", // 销售额
      flag: true, //  上升还是下降
      brands: [
        //  品牌种类数据
        { name: "可爱多", num: "9,086", flag: true },
        { name: "娃哈哈", num: "8,341", flag: true },
        { name: "喜之郎", num: "7,407", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "6,724", flag: false },
        { name: "好多鱼", num: "2,170", flag: true }
      ]
    },
    {
      city: "河北",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "3,457", flag: false },
        { name: "娃哈哈", num: "2,124", flag: true },
        { name: "喜之郎", num: "8,907", flag: false },
        { name: "八喜", num: "6,080", flag: true },
        { name: "小洋人", num: "1,724", flag: false },
        { name: "好多鱼", num: "1,170", flag: false }
      ]
    },
    {
      city: "上海",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "2,345", flag: true },
        { name: "娃哈哈", num: "7,109", flag: true },
        { name: "喜之郎", num: "3,701", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "2,724", flag: false },
        { name: "好多鱼", num: "2,998", flag: true }
      ]
    },
    {
      city: "江苏",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "2,156", flag: false },
        { name: "娃哈哈", num: "2,456", flag: true },
        { name: "喜之郎", num: "9,737", flag: true },
        { name: "八喜", num: "2,080", flag: true },
        { name: "小洋人", num: "8,724", flag: true },
        { name: "好多鱼", num: "1,770", flag: false }
      ]
    },
    {
      city: "山东",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "9,567", flag: true },
        { name: "娃哈哈", num: "2,345", flag: false },
        { name: "喜之郎", num: "9,037", flag: false },
        { name: "八喜", num: "1,080", flag: true },
        { name: "小洋人", num: "4,724", flag: false },
        { name: "好多鱼", num: "9,999", flag: true }
      ]
    }
  ];
  //  2. 根据数据渲染各省热销 sup 模块内容
  // (1) 遍历 hotData对象
  var supHTML = "";
  $.each(hotData, function(index, item) {
    // console.log(item);
    supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=
    ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
  });
  $(".sup").html(supHTML);

  $(".province .sup").on("mouseenter", "li", function() {
    index = $(this).index();
    render($(this));
  });

  function render(currentEle) {
    currentEle
      .addClass("active")
      .siblings()
      .removeClass();
    // 拿到当前城市的品牌对象
    // console.log($(this).index());
    // 可以通过hotData[$(this).index()] 得到当前的城市
    // console.log(hotData[$(this).index()]);
    // 我们可以通过hotData[$(this).index()].brands 拿到的是城市对象的品牌种
    // console.log(hotData[$(this).index()].brands);
    // 开始遍历品牌数组
    var subHTML = "";
    $.each(hotData[currentEle.index()].brands, function(index, item) {
      // 是对应城市的每一个品牌对象
      // console.log(item);
      subHTML += `<li><span>${item.name}</span><span> ${item.num}<s class=
    ${item.flag ? "icon-up" : "icon-down"}
    ></s></span></li>`;
    });
    // 把生成的6个小li字符串给 sub dom盒子
    $(".sub").html(subHTML);

  }
  // 4. 默认把第一个小li处于鼠标经过状态
var lis = $(".province .sup li");
lis.eq(0).mouseenter();
// 5 开启定时器
var index = 0;
var timer = setInterval(function() {
  index++;
  if (index >= 5) index = 0;
  // lis.eq(index).mouseenter();
  render(lis.eq(index));
}, 2000);
$(".province .sup").hover(
  // 鼠标经过事件
  function() {
    clearInterval(timer);
  },
  // 鼠标离开事件
  function() {
    clearInterval(timer);
    timer = setInterval(function() {
      index++;
      if (index >= 5) index = 0;
      // lis.eq(index).mouseenter();
      render(lis.eq(index));
    }, 2000);
  }
);
})();
