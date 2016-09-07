var v = new Vue({
    el: 'body',
    data: {
        categoryList: [],
        newsList: [],
        categoryId: '0',
        searchKey: ''
    },
    ready: function() {
        $('#my-modal-loading').modal('open');
        $.ajax({
            type: 'GET',
            url: 'https://apis.baidu.com/showapi_open_bus/channel_news/channel_news',
            headers: {
                apikey: 'b9879e5e82c630b8de50e26b1759db30'
            },
            success: function(data) {
                try {
                    var json = data;

                    if (json.showapi_res_error != '') {
                        return false;
                    }

                    v.categoryList = json.showapi_res_body.channelList;
                } catch (e) {

                }

                $('#my-modal-loading').modal('close');
            }
        });
    },
    methods: {
        searchEvent: function() {
            $('#my-modal-loading').modal('open');

            var obj = $(event.target);

            obj.blur();
            var categoryId = obj.attr('data-categoryId');

            obj.parent().siblings().removeClass('news-tag-curr');
            obj.parent().addClass('news-tag-curr');
            obj.parent().parent().addClass('dm-nav-hidden');
            $('body').scrollTop(0);

            $.ajax({
                type: 'GET',
                url: 'https://apis.baidu.com/showapi_open_bus/channel_news/search_news',
                data: $.param({
                    channelId: categoryId,
                    title: v.searchKey,
                    page: 1,
                    needContent: 0,
                    needHtml: 1
                }),
                headers: {
                    apikey: 'b9879e5e82c630b8de50e26b1759db30'
                },
                success: function(data) {
                    try {
                        var json = data;

                        if (json.showapi_res_error != '') {
                            return false;
                        }

                        v.newsList = json.showapi_res_body.pagebean.contentlist;
                    } catch (e) {

                    }

                    $('#my-modal-loading').modal('close');
                }
            });
        },
        returnTop: function() {
            $('body').scrollTop(0);
        },
        detailEvent: function() {
            var obj = $(event.target);

            obj.addClass('am-hide');
            obj.next().removeClass('am-hide');
        },
        imgErrorEvent: function() {
            var obj = $(event.target);

            obj.remove();
        },
        toggleMenu: function() {
            var obj = $(event.target);

            obj.parent().toggleClass('dm-nav-hidden');
        }
    }
});