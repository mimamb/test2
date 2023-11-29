// 柱状图模块1-片区备案数
(function(){
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2.指定配置项和数据
    var option = {
        color:['#3398DB'],
        // 坐标轴指示器，触发生效，影子效果
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        // 图表的大小
        grid: {
          left: '0%',
          right: '0%',
          bottom: '4%',
          top: '10px',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['高教区', '上市产业园', '斜塘', '桑田岛'],
            axisTick: {
              alignWithLabel: true
            },
            // 修改刻度标签相关样式
            axisLabel: {
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: 10.5
            },
            // 不显示X坐标抽样式
            axisLine: {
              show: false,
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            // 修改刻度标签相关样式
            axisLabel:{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: 12
            },
            // Y坐标轴样式改为2像素
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, .6)",
                width: 2
              }
            },
            // Y轴分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.1)"
              }
            },
            // 不显示Y轴的刻度
            axisTick: {
              show: false,
            },
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '30%',
            data: [329, 28, 58, 133],
            itemStyle: {
              //  修改柱子圆角
              barBorderRadius: 5
            },
            //  柱状图表显示数值
            label:{
              show: true,
              position: 'outside',
              color: 'rgba(255, 255, 255, .6)',
              formatter: function(params){
                return params.data
              }
            }
          }
        ]
      };
    //  3.把配置项给实例对象
    myChart.setOption(option);
    //  4.让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function(){
      myChart.resize();
    })
})();

//  柱状图模块2-片区联系单数
(function(){
  var myColor = ["#1089E7", "#F57474", "#56D0E3",  "#8B78F6"];
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2.指定配置和数据
  var option = {
    grid: {
      left: '22%',
      bottom: '10%',
      top: '10%',
      // containLabel: true
    },
    // X轴不显示
    xAxis: {
      show: false,
    },
    yAxis: [
    {// Y轴第一组数据
      type: 'category',
      inverse: true,
      data: ['高教区', '上市产业园', '斜塘', '桑田岛'],
      // 不显示Y轴的线
      axisLine: {
        show: false
      },
      // 不显示Y轴的刻度
      axisTick: {
        show: false
      },
      // 把刻度标签里面的文字颜色设置为白色
      axisLabel: {
        color: "#fff",
        fontSize: 12
      }
    },
    {// Y轴第二组数据
      data: ['130', '11', '22', '54'],
      inverse: true,
      // 不显示Y轴的线
      axisLine: {
        show: false
      },
      // 不显示Y轴的刻度
      axisTick: {
        show: false
      },
      // 把刻度标签里面的文字颜色设置为白色
      axisLabel: {
        color: "#fff",
        fontSize: 12
      }
    },
  ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [60, 5, 10, 25],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 修改柱子的颜色
          color: function (params){
            // params传进来的是柱子对象
            // dataIndex是当前柱子索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          // 图形内的显示
          position: "inside",
          // 文字显示的格式,{c}%解析为data里的数据
          formatter: "{c}%"
        },
      },
      {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        data: [100, 100, 100, 100],
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子宽度
        barWidth: 15,
        // 柱子边框
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15,
        },
      }
    ]
  };
  // 3.把配置给实例对象
  myChart.setOption(option);
  //  4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function(){
    myChart.resize();
  })
})();

//  折线图模块1-每年监管数量变化
(function(){
  // 年份对应数据
  var yearData = [{
    year: "2023", // 年份
    data: [
      // 两个数组是因为有两条线
      [21,
        42,
        41,
        46,
        43,
        48,
        50,
        54,
        63,
        45,
        48,
        47,
        ],
      [21,
        20,
        19,
        15,
        20,
        15,
        17,
        16,
        18,
        20,
        20,
        16,
        ]
    ]
  },
  {
    year: "2022", // 年份
    data: [
      // 两个数组是因为有两条线
      [30,
        8,
        22,
        53,
        44,
        46,
        42,
        34,
        55,
        40,
        43,
        65,
        ],
      [18,
        15,
        16,
        19,
        16,
        20,
        18,
        17,
        19,
        15,
        19,
        15,
        ]
    ]
  }
];
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 2.指定配置
  var option = {
    color: ['#ed3f35','#00f2f1', ], // 通过color修改两条线的颜色
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      //data: ['2023年', '2022年', ],
      // 修改图例组件 文字颜色
      textStyle: {
        color: '#4c9bfd',
        fontSize: 15  // 修改图例字体
      },
      right: '0%',
    },
    grid: {
      top: '20%',
      left: '0%',
      right: '4%',
      bottom: '3%',
      show: true, // 显示边框
      borderColor: '#012f4a', // 边框颜色
      containLabel: true // 包含刻度在文字内
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴内间距
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "备案数",
        type: 'line',
        smooth: true,
        data: yearData[0].data[0], 
      },
      {
        name: '联系单数',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: yearData[0].data[1]
      },
    ]
  };
  // 3.把配置给实例化对象
  myChart.setOption(option);
  //  4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function(){
    myChart.resize();
  });
  // 5.点击切换2023 和 2022 的数据
  $('.line h2 a').on('click', function () {
    // console.log($(this).index());
    // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 选中年份高亮
    $('.line h2 a').removeClass('a-active');
    $(this).addClass('a-active');

    // 需要重新渲染
    myChart.setOption(option);
  })
})();

//  折线图模块2-月检查数量
(function() {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));
  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: '0%',
      //data: ['抖音', '快手', ],
      textStyle: {
        color: 'rgba(255, 255, 255, .5)',
        fontSize: 15
      }
    },
    grid: {
      left: '10',
      right: '10',
      bottom: '10',
      top: "30",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", ],
        axisLabel: {
          textStyle: {
            color: "rgba(255, 255, 255, .6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .2)"
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
            fontSize: 12
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)"
          }
        }
      }
    ],
    series: [
      {
        name: '巡查数',
        type: 'line',
        smooth: true,
        lineStyle: { // 单独修改当前线条的样式
          color: "#0184d5",
          width: 2,
        },
        areaStyle: { // 填充颜色
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        emphasis: {
          focus: 'series'
        },
        symbol: 'circle', // 设置拐点
        symbolSize: 8,
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, 0.1)",
          borderWidth: 12
        },
        showSymbol: false,
        data: [248,
          240,
          249,
          247,
          242,
          485,
          485,
          483,
          721,
          723,
          722,
          723,
          ]
      },
      {
        name: "隐患数",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [63,
          60,
          57,
          45,
          60,
          45,
          51,
          48,
          54,
          60,
          60,
          48,          
          ]
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

//  饼形图模块1-金额分布
(function() {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2.指定配置
  var option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448",],
    tooltip: {
      trigger: 'item',
      formatter: function (params) {  
        var value = Math.round(params.value); // 对数值进行四舍五入  
        var percent = Math.round(params.percent ); // 对百分数进行四舍五入并转化为整数  
        return params.name + '<br/>' + value + '家'+' : ' + percent + '%';  
      } 
    },
    legend: {
      bottom: 0,
      itemWidth: 10, // 修改小图标的大小
      itemHeight: 10,
      textStyle: {
        color: "rgba(255, 255, 255, .5)",
        fontSize: 12
      }
    },
    series: [
      {
        name: '金额：',
        type: 'pie',
        radius: ['45%', '65%'], // radius修改饼形图大小，第一个值是內圆半径，第二个值是外圆半径
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        label: { // 图形上的文字
          show: true, // 修改此处配置，让标签显示在饼图外部  
          position: 'outside',  
          fontSize: 12,
          formatter: function(params) { // 对标签的显示格式进行自定义  
            var value = Math.round(params.value); // 对数值进行取整  
                    var percent = Math.round(params.percent); // 对百分数进行取整并转化为整数  
                    return params.name + '\n' + value + "家" + ' (' + percent + '%)';     
          },
        },
        itemStyle: {
          borderRadius: 5
        },
        labelLine: { // 链接文字和图形的线是否显示
          length : 15,
          length2: 10
        },
        data: [{
          value: 276,
          name: "0-10万元"
        },
        {
          value: 90,
          name: "10-20万元"
        },
        {
          value: 146,
          name: "20-30万元"
        },
        {
          value: 36,
          name: "30万元以上"
        },
      ]
      }
    ]
  };
  // 3.把配置给实例对象
  myChart.setOption(option);
  // 4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function(){
    myChart.resize();
  });
})();

//  饼形图模块2-面积分布
(function() {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
    color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', ],
    tooltip: {
      trigger: 'item',
      formatter: function (params) {  
        var value = Math.round(params.value); // 对数值进行四舍五入  
        var percent = Math.round(params.percent ); // 对百分数进行四舍五入并转化为整数  
        return params.name + '<br/>' + value + '家'+' : ' + percent + '%';  
      }  
    },
    legend: {
      bottom: 0,
      itemWidth: 10, // 修改小图标的大小
      itemHeight: 10,
      textStyle: {
        color: "rgba(255, 255, 255, .5)",
        fontSize: 14
      }
    },
    series: [
      {
        name: '面积：',
        type: 'pie',
        radius: ['30%', '70%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        label: {  // 图形文字的标签
          fontSize: 12,
          formatter: function(params) { // 对标签的显示格式进行自定义  
            var value = Math.round(params.value); // 对数值进行取整  
            var percent = Math.round(params.percent); // 对百分数进行取整并转化为整数  
          return params.name + '\n' + value + "家" + ' (' + percent + '%)';     
          },
        },
        labelLine: {  // 链接图形和文字的线条
            length : 15,
            length2: 10
        },
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 144, name: '0-100㎡' },
          { value: 129, name: '100-200㎡' },
          { value: 112, name: '200-300㎡' },
          { value: 163, name: '300㎡以上' },

        ]
      }
    ]
  };
  myChart.setOption(option);
})();

// 模拟飞行路线地图-地图模块
(function() {
  var myChart = echarts.init(document.querySelector(".map .chart"));
// 加载本地的吴中区JSON数据  
var uploadedDataURL = "../geojson/科创区.geojson";
myChart.showLoading();
$.getJSON(uploadedDataURL, function (园区geoJson) {
  echarts.registerMap("kechuangqu", 园区geoJson);
  myChart.hideLoading();
  var geoCoordMap = {
    高教区: [120.74055428, 31.25907629],
    斜塘: [120.75895494, 31.28807782],
    东区: [120.81238311, 31.2791245],
    上市产业园: [120.76478344, 31.2718185],
    桑田岛: [120.78354521, 31.2827690415],
  };
  var data = [
    { name: "高教区", value: 329 },
    { name: "斜塘", value: 28 },
    { name: "东区", value: 2 },
    { name: "上市产业园", value: 58 },
    { name: "桑田岛", value: 131 },
  ];
  var max = 480,
    min = 9; // todo
  var maxSize4Pin = 100,
    minSize4Pin = 40;

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  };

  option = {
    title: {
      text: "苏 州 独 墅 湖 科 教 创 新 区",
      subtext: "",
      x: "center",
      top: "5%",
      textStyle: {
        color: "rgba(181, 68, 2)",
        fontSize: 38,
      },
    },
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        if (typeof (params.value)[2] == "undefined") {
          return params.name + " : " + params.value;
        } else {
          return params.name + " : " + params.value[2];
        }
      },
    },
    geo: {
      zoom: 1,  // 修改地图大小
      map: "kechuangqu",
      label: {
        normal: {
					show: false
				},
        emphasis: {
          show: true ,
          color: '#fff'
        },
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: "rgba(34, 70, 168, .8)",
          borderColor: "#0692a4",
          borderWidth: 3,
        },
        emphasis: {
          areaColor: "rgba(119, 139, 224, 0.548)",
        },
      },
    },
    series: [
      {
        name: "credit_pm2.5",
        type: "scatter",
        coordinateSystem: "geo",
        data: convertData(data),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            color: "#05C3F9",
          },
        },
      },
      {
        type: "map",
        map: "kechuangqu",
        geoIndex: 0,
        aspectScale: 0.75, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
            textStyle: {
              color: "#fff",
            },
          },
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: "#031525",
            borderColor: "#3B5077",
          },
          emphasis: {
            areaColor: "#2B91B7",
          },
        },
        animation: false,
        data: data,
      },
      {
        name: "点",
        type: "scatter",
        coordinateSystem: "geo",
        symbol: "pin",
        symbolSize: function (val) {
          var a = (maxSize4Pin - minSize4Pin) / (max - min);
          var b = minSize4Pin - a * min;
          b = maxSize4Pin - a * max;
          return a * val[2] + b;
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
            formatter (value){
              return value.data.value[2]
          }
          },
        },
        itemStyle: {
          normal: {
            color: "#F62157", //标志颜色
          },
        },
        zlevel: 6,
        data: convertData(data),
      },
      {
        name: "Top 5",
        type: "effectScatter",
        coordinateSystem: "geo",
        data: convertData(
          data
            .sort(function (a, b) {
              return b.value - a.value;
            })
            .slice(0, 5)
        ),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        showEffectOn: "render",
        rippleEffect: {
          brushType: "stroke",
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: true,
          },
        },
        itemStyle: {
          normal: {
            color: "#05C3F9",
            shadowBlur: 10,
            shadowColor: "#05C3F9",
          },
        },
        zlevel: 1,
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
});
})()