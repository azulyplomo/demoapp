$(function () {
    $('#main-menu')['each'](function () {
        var _0x6d7ax2 = $(this)['find']('.LinkList ul > li')['children']('a'),
            _0x6d7ax3 = _0x6d7ax2['length'];
        for (var _0x6d7ax4 = 0; _0x6d7ax4 < _0x6d7ax3; _0x6d7ax4++) {
            var _0x6d7ax5 = _0x6d7ax2['eq'](_0x6d7ax4),
                _0x6d7ax6 = _0x6d7ax5['text']();
            if (_0x6d7ax6['charAt'](0) !== '_') {
                var _0x6d7ax7 = _0x6d7ax2['eq'](_0x6d7ax4 + 1),
                    _0x6d7ax8 = _0x6d7ax7['text']();
                if (_0x6d7ax8['charAt'](0) === '_') {
                    var _0x6d7ax9 = _0x6d7ax5['parent']();
                    _0x6d7ax9['append']('<ul class=\"sub-menu m-sub\"/>')
                }
            };
            if (_0x6d7ax6['charAt'](0) === '_') {
                _0x6d7ax5['text'](_0x6d7ax6['replace']('_', ''));
                _0x6d7ax5['parent']()['appendTo'](_0x6d7ax9['children']('.sub-menu'))
            }
        };
        for (var _0x6d7ax4 = 0; _0x6d7ax4 < _0x6d7ax3; _0x6d7ax4++) {
            var _0x6d7axa = _0x6d7ax2['eq'](_0x6d7ax4),
                _0x6d7axb = _0x6d7axa['text']();
            if (_0x6d7axb['charAt'](0) !== '_') {
                var _0x6d7axc = _0x6d7ax2['eq'](_0x6d7ax4 + 1),
                    _0x6d7axd = _0x6d7axc['text']();
                if (_0x6d7axd['charAt'](0) === '_') {
                    var _0x6d7axe = _0x6d7axa['parent']();
                    _0x6d7axe['append']('<ul class=\"sub-menu2 m-sub\"/>')
                }
            };
            if (_0x6d7axb['charAt'](0) === '_') {
                _0x6d7axa['text'](_0x6d7axb['replace']('_', ''));
                _0x6d7axa['parent']()['appendTo'](_0x6d7axe['children']('.sub-menu2'))
            }
        };
        $('#main-menu ul li ul')['parent']('li')['addClass']('has-sub');
        $('#main-menu .widget')['addClass']('show-menu')
    });
    $('#main-menu-nav')['clone']()['appendTo']('.mobile-menu');
    $('.mobile-menu .has-sub')['append']('<div class=\"submenu-toggle\"/>');
    $('.mobile-menu ul > li a')['each'](function () {
        var _0x6d7axf = $(this),
            _0x6d7ax10 = _0x6d7axf['attr']('href')['trim'](),
            _0x6d7ax11 = _0x6d7ax10['toLowerCase'](),
            _0x6d7ax12 = _0x6d7ax10['split']('/'),
            _0x6d7ax13 = _0x6d7ax12[0];
        if (_0x6d7ax11['match']('mega-menu')) {
            _0x6d7axf['attr']('href', '/search/label/' + _0x6d7ax13 + '?&max-results=' + postPerPage)
        }
    });
    $('.slide-menu-toggle')['on']('click', function () {
        $('body')['toggleClass']('nav-active')
    });
    $('.mobile-menu ul li .submenu-toggle')['on']('click', function (_0x6d7axf) {
        if ($(this)['parent']()['hasClass']('has-sub')) {
            _0x6d7axf['preventDefault']();
            if (!$(this)['parent']()['hasClass']('show')) {
                $(this)['parent']()['addClass']('show')['children']('.m-sub')['slideToggle'](170)
            } else {
                $(this)['parent']()['removeClass']('show')['find']('> .m-sub')['slideToggle'](170)
            }
        }
    });
    $('.show-search, .show-mobile-search')['on']('click', function () {
        $('#nav-search, .mobile-search-form')['fadeIn'](250)['find']('input')['focus']()
    });
    $('.hide-search, .hide-mobile-search')['on']('click', function () {
        $('#nav-search, .mobile-search-form')['fadeOut'](250)['find']('input')['blur']()
    });
    $('.author-description a')['each'](function () {
        $(this)['attr']('target', '_blank')
    });
    $('.post-nav')['each'](function () {
        var _0x6d7ax15 = $('a.prev-post-link')['attr']('href'),
            _0x6d7ax16 = $('a.next-post-link')['attr']('href');
        $['ajax']({
            url: _0x6d7ax15,
            type: 'get',
            success: function (_0x6d7ax17) {
                var _0x6d7ax18 = $(_0x6d7ax17)['find']('.blog-post h1.post-title')['text']();
                $('.post-prev a .post-nav-inner p')['text'](_0x6d7ax18)
            }
        });
        $['ajax']({
            url: _0x6d7ax16,
            type: 'get',
            success: function (_0x6d7ax19) {
                var _0x6d7ax18 = $(_0x6d7ax19)['find']('.blog-post h1.post-title')['text']();
                $('.post-next a .post-nav-inner p')['text'](_0x6d7ax18)
            }
        })
    });
    $('#main-wrapper, #sidebar-wrapper')['each'](function () {
        if (fixedSidebar == true) {
            $(this)['theiaStickySidebar']({
                additionalMarginTop: 30,
                additionalMarginBottom: 30
            })
        }
    });
    
    $('#main-menu #main-menu-nav li')['each'](function () {
        var _0x6d7ax1a = $(this),
            _0x6d7ax10 = _0x6d7ax1a['find']('a')['attr']('href')['trim'](),
            _0x6d7axf = _0x6d7ax1a,
            _0x6d7ax11 = _0x6d7ax10['toLowerCase'](),
            _0x6d7ax12 = _0x6d7ax10['split']('/'),
            _0x6d7ax13 = _0x6d7ax12[0];
        _0x6d7ax31(_0x6d7axf, _0x6d7ax11, 4, _0x6d7ax13)
    });
    $('#hot-section .widget-content')['each'](function () {
        var _0x6d7axf = $(this),
            _0x6d7ax10 = _0x6d7axf['text']()['trim'](),
            _0x6d7ax11 = _0x6d7ax10['toLowerCase'](),
            _0x6d7ax12 = _0x6d7ax10['split']('/'),
            _0x6d7ax13 = _0x6d7ax12[0];
        _0x6d7ax31(_0x6d7axf, _0x6d7ax11, 2, _0x6d7ax13)
    });
    $('.common-widget .widget-content')['each'](function () {
        var _0x6d7axf = $(this),
            _0x6d7ax10 = _0x6d7axf['text']()['trim'](),
            _0x6d7ax11 = _0x6d7ax10['toLowerCase'](),
            _0x6d7ax12 = _0x6d7ax10['split']('/'),
            _0x6d7ax1b = _0x6d7ax12[0],
            _0x6d7ax13 = _0x6d7ax12[1];
        _0x6d7ax31(_0x6d7axf, _0x6d7ax11, _0x6d7ax1b, _0x6d7ax13)
    });
    $('.related-ready')['each'](function () {
        var _0x6d7axf = $(this),
            _0x6d7ax13 = _0x6d7axf['find']('.related-tag')['data']('label');
        _0x6d7ax31(_0x6d7axf, 'related', 3, _0x6d7ax13)
    });
function _0x6d7ax2a(_0x6d7ax1d, _0x6d7ax4) {
        var _0x6d7ax21 = _0x6d7ax1d[_0x6d7ax4]['title']['$t'],
            _0x6d7ax2b = _0x6d7ax1d[_0x6d7ax4]['content']['$t'],
            _0x6d7ax2c = $('<div>')['html'](_0x6d7ax2b);
        if ('media$thumbnail' in _0x6d7ax1d[_0x6d7ax4]) {
            var _0x6d7ax2d = _0x6d7ax1d[_0x6d7ax4]['media$thumbnail']['url'],
                _0x6d7ax2e = _0x6d7ax2d['replace']('/s72-c', '/w680');
            if (_0x6d7ax2b['indexOf']('youtube.com/embed') > -1) {
                _0x6d7ax2e = _0x6d7ax2d['replace']('/default.', '/hqdefault.')
            }
        } else {
            if (_0x6d7ax2b['indexOf']('<img') > -1) {
                _0x6d7ax2e = _0x6d7ax2c['find']('img:first')['attr']('src')
            } else {
                _0x6d7ax2e = noThumbnail
            }
        };
        var _0x6d7ax22 = '<img class=\"post-thumb\" alt=\"' + _0x6d7ax21 + '\" src=\"' + _0x6d7ax2e + '\"/>';
        return _0x6d7ax22
    }
function _0x6d7ax31(_0x6d7axf, _0x6d7ax11, _0x6d7ax1b, _0x6d7ax13) {
        if (_0x6d7ax11['match']('mega-menu') || _0x6d7ax11['match']('hot-posts') || _0x6d7ax11['match']('featured') || _0x6d7ax11['match']('post-list') || _0x6d7ax11['match']('related')) {
            var _0x6d7ax32 = '';
            if (_0x6d7ax13 == 'recent') {
                } else {
                if (_0x6d7ax13 == 'random') {
                    var _0x6d7ax33 = Math['floor'](Math['random']() * _0x6d7ax1b) + 1;
                    _0x6d7ax32 = '/feeds/posts/default?max-results=' + _0x6d7ax1b + '&start-index=' + _0x6d7ax33 + '&alt=json-in-script'
                } 
            };
            $['ajax']({
                url: _0x6d7ax32,
                type: 'get',
                dataType: 'jsonp',
                beforeSend: function () {
                    if (_0x6d7ax11['match']('hot-posts')) {
                        _0x6d7axf['html']('<div class=\"hot-loader\"/>')['parent']()['addClass']('show-hot')
                    }
                },
                success: function (_0x6d7ax34) {
                    if (_0x6d7ax11['match']('mega-menu')) {
                        var _0x6d7ax35 = '<ul class=\"mega-menu-inner\">'
                    } else {
                        if (_0x6d7ax11['match']('hot-posts')) {
                            var _0x6d7ax35 = '<ul class=\"hot-posts\">'
                        } else {
                            if (_0x6d7ax11['match']('post-list')) {
                                var _0x6d7ax35 = '<ul class=\"custom-widget\">'
                            } else {
                                if (_0x6d7ax11['match']('related')) {
                                    var _0x6d7ax35 = '<ul class=\"related-posts\">'
                                }
                            }
                        }
                    };
                    var _0x6d7ax36 = _0x6d7ax34['feed']['entry'];
                    if (_0x6d7ax36 != undefined) {
                        for (var _0x6d7ax4 = 0, _0x6d7ax1d = _0x6d7ax36; _0x6d7ax4 < _0x6d7ax1d['length']; _0x6d7ax4++) {
                            var _0x6d7ax1f = _0x6d7ax1c(_0x6d7ax1d, _0x6d7ax4),
                                _0x6d7ax18 = _0x6d7ax20(_0x6d7ax1d, _0x6d7ax4, _0x6d7ax1f),
                                _0x6d7ax37 = _0x6d7ax2a(_0x6d7ax1d, _0x6d7ax4),
                                _0x6d7ax30 = _0x6d7ax2f(_0x6d7ax1d, _0x6d7ax4),
                                _0x6d7ax38 = _0x6d7ax23(_0x6d7ax1d, _0x6d7ax4),
                                _0x6d7ax39 = _0x6d7ax24(_0x6d7ax1d, _0x6d7ax4);
                            var _0x6d7ax3a = '';
                            if (_0x6d7ax11['match']('mega-menu')) {
                                _0x6d7ax3a += '<div class=\"mega-item item-' + _0x6d7ax4 + '\"><div class=\"mega-content\"><div class=\"post-image-wrap\"><a class=\"post-image-link\" href=\"' + _0x6d7ax1f + '\">' + _0x6d7ax37 + '</a>' + _0x6d7ax30 + '</div><h2 class=\"post-title\">' + _0x6d7ax18 + '</h2><div class=\"post-meta\">' + _0x6d7ax39 + '</div></div></div>'
                            } else {
                                if (_0x6d7ax11['match']('hot-posts')) {
                                    _0x6d7ax3a += '<li class=\"hot-item item-' + _0x6d7ax4 + '\"><div class=\"hot-item-inner\"><a class=\"post-image-link\" href=\"' + _0x6d7ax1f + '\">' + _0x6d7ax37 + '</a>' + _0x6d7ax30 + '<div class=\"post-info\"><h2 class=\"post-title\">' + _0x6d7ax18 + '</h2><div class=\"post-meta\">' + _0x6d7ax38 + _0x6d7ax39 + '</div></div></div></li>'
                                } else {
                                    if (_0x6d7ax11['match']('post-list')) {
                                        _0x6d7ax3a += '<li class=\"item-' + _0x6d7ax4 + '\"><a class=\"post-image-link\" href=\"' + _0x6d7ax1f + '\">' + _0x6d7ax37 + '</a><div class=\"post-info\"><h2 class=\"post-title\">' + _0x6d7ax18 + '</h2><div class=\"post-meta\">' + _0x6d7ax39 + '</div></div></div></li>'
                                    } else {
                                        if (_0x6d7ax11['match']('related')) {
                                            _0x6d7ax3a += '<li class=\"related-item item-' + _0x6d7ax4 + '\"><div class=\"post-image-wrap\"><a class=\"post-image-link\" href=\"' + _0x6d7ax1f + '\">' + _0x6d7ax37 + '</a>' + _0x6d7ax30 + '</div><h2 class=\"post-title\">' + _0x6d7ax18 + '</h2><div class=\"post-meta\">' + _0x6d7ax39 + '</div></li>'
                                        }
                                    }
                                }
                            };
                            _0x6d7ax35 += _0x6d7ax3a
                        };
                        _0x6d7ax35 += '</ul>'
                    } else {
                        _0x6d7ax35 = '<ul class=\"no-posts\">Error: No Posts Found <i class=\"fa fa-frown\"/></ul>'
                    };
                    if (_0x6d7ax11['match']('mega-menu')) {
                        _0x6d7axf['addClass']('has-sub mega-menu')['append'](_0x6d7ax35);
                        _0x6d7axf['find']('a:first')['attr']('href', function (_0x6d7axf, _0x6d7ax14) {
                            if (_0x6d7ax13 == 'recent' || _0x6d7ax13 == 'random') {
                                _0x6d7ax14 = _0x6d7ax14['replace'](_0x6d7ax14, '/search/?&max-results=' + postPerPage)
                            } else {
                                _0x6d7ax14 = _0x6d7ax14['replace'](_0x6d7ax14, '/search/label/' + _0x6d7ax13 + '?&max-results=' + postPerPage)
                            };
                            return _0x6d7ax14
                        })
                    } else {
                        if (_0x6d7ax11['match']('hot-posts')) {
                            _0x6d7axf['html'](_0x6d7ax35)['parent']()['addClass']('show-hot')
                        } else {
                            _0x6d7axf['html'](_0x6d7ax35)
                        }
                    }
                }
            })
        }
    }
    $('.blog-post-comments')['each'](function () {
        var _0x6d7ax3b = commentsSystem,
            _0x6d7ax3c = disqus_blogger_current_url,
            _0x6d7ax3d = '<div id=\"disqus_thread\"/>',
            _0x6d7ax3e = $(location)['attr']('href'),
            _0x6d7ax3f = '<div class=\"fb-comments\" data-width=\"100%\" data-href=\"' + _0x6d7ax3e + '\" data-numposts=\"5\"></div>',
            _0x6d7ax40 = 'comments-system-' + _0x6d7ax3b;
        if (_0x6d7ax3b == 'blogger') {
            $(this)['addClass'](_0x6d7ax40)['show']()
        } else {
            if (_0x6d7ax3b == 'disqus') {
                (function () {
                    var _0x6d7ax41 = document['createElement']('script');
                    _0x6d7ax41['type'] = 'text/javascript';
                    _0x6d7ax41['async'] = true;
                    _0x6d7ax41['src'] = '//' + disqusShortname + '.disqus.com/embed.js';
                    (document['getElementsByTagName']('head')[0] || document['getElementsByTagName']('body')[0])['appendChild'](_0x6d7ax41)
                })();
                $('#comments, #gpluscomments')['remove']();
                $(this)['append'](_0x6d7ax3d)['addClass'](_0x6d7ax40)['show']()
            } else {
                if (_0x6d7ax3b == 'facebook') {
                    $('#comments, #gpluscomments')['remove']();
                    $(this)['append'](_0x6d7ax3f)['addClass'](_0x6d7ax40)['show']()
                } else {
                    if (_0x6d7ax3b == 'hide') {
                        $(this)['hide']()
                    } else {
                        $(this)['addClass']('comments-system-default')['show']()
                    }
                }
            }
        }
    })
})
