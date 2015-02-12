# test

<script type="text/javascript">
    function compile(symbols) {
        var execute;
        var fn = 'execute = function(element, data){ ';
        fn += "var html = \'\';";
        $.each(symbols, function (i, p) {
            if (p.tagName != 'for') {

            } else {

            }
        });

        fn += 'return html;';
        fn += '}';
        eval(fn);

        return execute;
    }

    $.fn.extend({
        template: function (tpl, data) {
            var symbols = $(tpl);
            var me = this;
            var innerHtml = '';

            if (symbols.length) {
                var fn = compile(symbols);
                innerHtml = fn(me, data);
            }


            innerHtml = test(me, data);

            this.html(innerHtml);
        }
    });

    $('#container').template(
        '<h1>{name}</h1><tpl for=".rows"><a href="link">{text}</a></tpl>',
        { name: '测试', rows: [{ link: '#1', text: '链接1' }, { link: '#2', text: '链接2' }] });

    function test(element, data) {
        var html = '';
        html += '<h1>' + data.name + '</h1>';
        $.each(data.rows, function (i, n) {
            html += '<a href="' + n.link + '">' + n.text + '</a>';
        });

        return html;
    }

</script>
