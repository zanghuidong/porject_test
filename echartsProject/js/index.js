//监控区域tab栏切换
; (function () {
    $(window).on('load', function () {
        $('.monitor .tabs').on('click', 'a', function () {
            $(this)
                .addClass('active')
                .siblings('a')
                .removeClass('active')
            $('.monitor .content')
                .eq($(this).index())
                .show()
                .siblings('.content')
                .hide()

        })
        $('.marquee-view .marquee').each(function () {
            let rows = $(this).children().clone()
            $(this).append(rows)
        })

    })

}())
    // 点位区域
    ; (function () {
        $(window).on('load', function () {
            let myChart = echarts.init(document.querySelector('.pie'))
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                series: [
                    {
                        name: '点位统计',
                        type: 'pie',
                        radius: ['10%', '70%'],
                        center: ['50%', '50%'],
                        roseType: "radius",
                        itemStyle: {
                            borderRadius: 5
                        },
                        data: [
                            { value: 20, name: '云南' },
                            { value: 26, name: '北京' },
                            { value: 24, name: '山东' },
                            { value: 25, name: '河北' },
                            { value: 20, name: '江苏' },
                            { value: 25, name: '浙江' },
                            { value: 30, name: '四川' },
                            { value: 42, name: '湖北' }
                        ],
                        label: {
                            fontSize: 10,
                        },
                        labelLine: {
                            length: 6,
                            length2: 8,
                        },
                        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
                    }
                ]
            };
            myChart.setOption(option)
            window.addEventListener('resize', function () {
                myChart.resize()
            })
        })
    }())
    ; (function () {
        $(window).on('load', function () {
            var items = {
                name: '',
                value: 1200,
                itemStyle: {
                    color: '#254065',
                },
                emphasis: {
                    itemStyle: {
                        color: '#254065',
                    },
                },
                tooltip: {
                    extraCssText: 'opacity: 0',
                },
            }
            let myChart = echarts.init(document.querySelector('.bar'))
            var option = {
                tooltip: {
                    trigger: 'item',
                },
                grid: {
                    left: '0%',
                    right: '3%',
                    bottom: '3%',
                    top: '3%',
                    containLabel: true,
                    show: true,
                    borderColor: 'rgba(0, 240, 255, 0.3)',
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                        axisTick: {
                            alignWithLabel: false,
                            show: false,
                        },
                        axisLabel: {
                            color: '#4c9bfd',
                            interval: 0,
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(0, 240, 255, 0.3)',
                            },
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisTick: {
                            alignWithLabel: false,
                            show: false,
                        },
                        axisLabel: {
                            color: '#4c9bfd',
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(0, 240, 255, 0.3)',
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(0, 240, 255, 0.3)',
                            },
                        },
                    }
                ],
                series: [
                    {
                        name: 'Direct',
                        type: 'bar',
                        barWidth: '60%',
                        data: [2100, 1900, 1700, 1560, 1400, items, items, items, 900, 750, 600, 480, 240]
                    }
                ],
                color: new echarts.graphic.LinearGradient(
                    // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#00fffb' }, // 0 起始颜色
                        { offset: 1, color: '#0061ce' }  // 1 结束颜色
                    ]
                ),
            };
            myChart.setOption(option)
            window.addEventListener('resize', function () {
                myChart.resize()
            })
        })
    }())

    ; (function () {
        $(window).on('load', function () {
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
            }
            let myChart = echarts.init(document.querySelector('.line'))
            var option = {
                color: ['#00f2f1', '#ed3f35'],
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    right: '10%',
                    textStyle: {
                        color: '#4c9bfd',
                    },
                    // data: ['预期销售额', '实际销售额',]
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top: '20%',
                    show: true,
                    borderColor: '#012f4a',
                    containLabel: true,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: '#4c9bfd',
                        interval: 0,
                    },
                    axisLine: {
                        show: false,
                    },
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                },
                yAxis: {
                    type: 'value',
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: '#4c9bfd',
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#012f4a',
                        },
                    },
                },
                series: [
                    {
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        name: '预期销售额',
                        data: data.year[0],
                    },
                    {
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        name: '实际销售额',
                        data: data.year[1],
                    },
                ]
            };
            myChart.setOption(option)
            $('.sales .caption').on('click', 'a', function () {
                index = $(this).index() - 1
                $(this)
                    .addClass('active')
                    .siblings('a')
                    .removeClass('active')
                let arr = data[this.dataset.type]
                option.series[0].data = arr[0]
                option.series[1].data = arr[1]
                myChart.setOption(option)

            })
            var btn = $('.sales .caption a')
            var index = 0
            var timer = setInterval(function () {
                index++
                if (index >= 4) index = 0
                btn.eq(index).click()
            }, 1000)

            $('.inner').hover(function () {
                clearInterval(timer)
            }, function () {
                clearInterval(timer)
                timer = setInterval(function () {
                    index++
                    if (index >= 4) index = 0
                    btn.eq(index).click()
                }, 1000)
            })
            window.addEventListener('resize', function () {
                myChart.resize()
            })

        })
    }())
    ; (function () {
        $(window).on('load', function () {
            let myChart = echarts.init(document.querySelector('.radar'))
            var option = {
                tooltip: {
                    show: true,
                    position: ['10%', '40%'],
                },
                backgroundColor: '#161627',
                radar: {
                    indicator: [
                        { name: '机场', max: 100 },
                        { name: '商场', max: 100 },
                        { name: '火车站', max: 100 },
                        { name: '汽车站', max: 100 },
                        { name: '地铁', max: 100 }
                    ],
                    center: ['50%', '50%'],
                    radius: '50%',
                    shape: 'circle',
                    splitNumber: 4,
                    axisName: {
                        color: 'rgb(238, 197, 102)'
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)',
                        }
                    },
                    splitArea: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)',
                        },
                    },
                    name: {
                        textStyle: {
                            color: '#4c9bfd',
                        },
                    },
                },
                series: [
                    {
                        name: 'Beijing',
                        type: 'radar',
                        lineStyle: {
                            normal: {
                                width: 1,
                                color: '#fff',
                                opacity: 0.5,
                            },
                        },
                        data: [[90, 19, 56, 11, 34]],
                        symbol: 'circle',
                        symbolSize: 5,
                        itemStyle: {
                            color: '#fff'
                        },
                        label: {
                            show: true,

                            fontSize: 10,
                        },
                        areaStyle: {
                            color: 'rgba(238, 197, 102, 0.6)',
                        }
                    },
                ]
            }
            myChart.setOption(option)
            window.addEventListener('resize', function () {
                myChart.resize()
            })
        })
    }())

    ; (function () {
        $(window).on('load', function () {
            let myChart = echarts.init(document.querySelector('.gauge'))
            var option = {
                series: [
                    {
                        name: '销售进度',
                        type: 'pie',
                        radius: ['130%', '150%'],
                        center: ['48%', '80%'],
                        //avoidLabelOverlap: false,
                        labelLine: {
                            show: false
                        },
                        startAngle: 180,
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
                                },
                            },
                            {
                                value: 100,
                                itemStyle: { color: '#12274d' }
                            },
                            {
                                value: 200,
                                itemStyle: {
                                    color: 'transparent',
                                },

                            },
                        ]
                    }
                ]
            }
            myChart.setOption(option)
            window.addEventListener('resize', function () {
                myChart.resize()
            })
        })

    }())

    ; (function () {
        $(window).on('load', function () {
            var hotData = [
                {
                    city: '北京',  // 城市
                    sales: '25, 179',  // 销售额
                    flag: true, //  上升还是下降
                    brands: [   //  品牌种类数据
                        { name: '可爱多', num: '9,086', flag: true },
                        { name: '娃哈哈', num: '8,341', flag: true },
                        { name: '喜之郎', num: '7,407', flag: false },
                        { name: '八喜', num: '6,080', flag: false },
                        { name: '小洋人', num: '6,724', flag: false },
                        { name: '好多鱼', num: '2,170', flag: true },
                    ]
                },
                {
                    city: '河北',
                    sales: '23,252',
                    flag: false,
                    brands: [
                        { name: '可爱多', num: '3,457', flag: false },
                        { name: '娃哈哈', num: '2,124', flag: true },
                        { name: '喜之郎', num: '8,907', flag: false },
                        { name: '八喜', num: '6,080', flag: true },
                        { name: '小洋人', num: '1,724', flag: false },
                        { name: '好多鱼', num: '1,170', flag: false },
                    ]
                },
                {
                    city: '上海',
                    sales: '20,760',
                    flag: true,
                    brands: [
                        { name: '可爱多', num: '2,345', flag: true },
                        { name: '娃哈哈', num: '7,109', flag: true },
                        { name: '喜之郎', num: '3,701', flag: false },
                        { name: '八喜', num: '6,080', flag: false },
                        { name: '小洋人', num: '2,724', flag: false },
                        { name: '好多鱼', num: '2,998', flag: true },
                    ]
                },
                {
                    city: '江苏',
                    sales: '23,252',
                    flag: false,
                    brands: [
                        { name: '可爱多', num: '2,156', flag: false },
                        { name: '娃哈哈', num: '2,456', flag: true },
                        { name: '喜之郎', num: '9,737', flag: true },
                        { name: '八喜', num: '2,080', flag: true },
                        { name: '小洋人', num: '8,724', flag: true },
                        { name: '好多鱼', num: '1,770', flag: false },
                    ]
                },
                {
                    city: '山东',
                    sales: '20,760',
                    flag: true,
                    brands: [
                        { name: '可爱多', num: '9,567', flag: true },
                        { name: '娃哈哈', num: '2,345', flag: false },
                        { name: '喜之郎', num: '9,037', flag: false },
                        { name: '八喜', num: '1,080', flag: true },
                        { name: '小洋人', num: '4,724', flag: false },
                        { name: '好多鱼', num: '9,999', flag: true },
                    ]
                }
            ]
            var supHtml = ''
            $.each(hotData, function (index, item) {
                supHtml += `<li>
                <span>${item.city}</span>
                <span>${item.sales}<s class=${item.flag ? "icon-up" : "icon-down"}></s></span>
            </li>`
            })
            $('.sup').html(supHtml)
            var subHtml = ''
            function render(that) {
                that
                    .addClass('active')
                    .siblings('li')
                    .removeClass('active')
                let index = that.index()
                var subHtml = ''
                $.each(hotData[index].brands, function (index, item) {
                    subHtml += `<li>
                <span>${item.name}</span>
                <span>${item.num}<s class=${item.flag ? "icon-up" : "icon-down"}></s></span>
            </li>`
                })
                $('.sub').html(subHtml)
            }
            $('.sup').on('mouseenter', 'li', function () {
                index = $(this).index()
                render($(this))
            })
            var lis = $('.province .sup li')
            lis.eq(0).mouseenter()
            var index = 0
            let timer = setInterval(function () {
                index++
                if (index >= 5) index = 0
                render(lis.eq(index))
            }, 2000)
            $('.province .sup').hover(function () {
                clearInterval(timer)
            }, function () {
                clearInterval(timer)
                timer = setInterval(function () {
                    index++
                    if (index >= 5) index = 0
                    render(lis.eq(index))
                }, 2000)
            })
        })
    }())