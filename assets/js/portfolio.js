const portfolio =
    {
        bindSkills: function () {
            let html = ``;
            Object.values(portfolio.badges).forEach(function (value, index, array) {
                if (index < 10) {
                    html+= value;
                }
            });

            $('#skills .badges').html(html);
        },
        bindItems: function () {
            let html = ``;
            portfolio.items.forEach(function (value, index, array) {
                html += `<div class="project_wrap">`;
                html += ` <div class="period">`;
                html += `<span>${value.company}</span>`;
                html += `<span>${value.period}</span>`;
                html += `</div>`;
                html += portfolio.bindContents(value.contents ?? [], index)
                html += `</div>`;
            });

            $('#projects .project_group').html(html);
        },
        bindContents: function (contents, itemIndex) {
            let html = ``;
            if (contents.length > 0) {
                html += `<div class="contents">`;
                contents.forEach(function (value, index, array) {
                    html += `<div class="item">`;
                    html += `<p class="title">${value.title}</p>`;
                    html += portfolio.bindBadges(value.skills ?? []);
                    html += `<p class="description">${value.description}</p>`;
                    html += portfolio.bindImages(value.images ?? [], itemIndex, index);
                    html += `</div>`;
                });
                html += `</div>`;
            }

            return html;
        },
        bindImages: function (images, itemIndex, contentsIndex) {
            let collapseId = `collapseImage${itemIndex}${contentsIndex}`;
            let html = ``;
            if (images.length > 0) {
                html += `<div class="images mt-2">`;
                html += `<a class="btn_more" href="javascript:void(0);" data-toggle="collapse"
                   data-target="#${collapseId}">이미지 더 보기 <i class="fa-solid fa-angle-down"></i></a>`;
                html += ` <div id="${collapseId}" class="collapse">`;
                html += `<div class="card">`;
                html += `<div class="card-body">`;
                images.forEach(function (value, index, array) {
                    html += `<div class="card">`;
                    html += `<img class="card-img-top" src="${value.image}" />`;
                    if (value.title !== '' || value.description !== '') {
                        html += `<div class="card-body">`;
                        if (value.title !== '') {
                            html += `<h5 class="card-title">${value.title}</h5>`;
                        }
                        if (value.description !== '') {
                            html += `<p class="card-text">${value.description}</p>`;
                        }
                        html += `</div>`;
                    }
                    html += `</div>`;
                });
                html += `</div>`;
                html += `</div>`;
                html += `</div>`;
                html += `</div>`;
            }
            
            return html;
        },
        bindBadges: function (skills) {
            let html = ``;
            if (skills.length > 0) {
                html += `<div class="badges">`;
                skills.forEach(function (value, index, array) {
                    let skill = value.replaceAll(' ', '').toLowerCase();
                    let skillHtml = portfolio.badges[skill] ?? ``;
                    if (skillHtml !== '') {
                        html += skillHtml.replaceAll('for-the-badge', 'flat-squre');
                    }
                });
                html += `</div>`;
            }
            return html;
        },
        badges: {
            php: '<img class="skill" src="https://img.shields.io/badge/php-777BB4?style=for-the-badge&logo=php&logoColor=white"/>',
            laravel: '<img class="skill" src="https://img.shields.io/badge/laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"/>',
            mariadb: '<img class="skill" src="https://img.shields.io/badge/mariadb-003545?style=for-the-badge&logo=mariadb&logoColor=white"/>',
            mysql: '<img class="skill" src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>',
            aws: '<img class="skill" src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white"/>',
            github: '<img class="skill" src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/>',
            html: '<img class="skill" src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>',
            javascript: '<img class="skill" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>',
            css: '<img class="skill" src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>',
            flutter: '<img class="skill" src="https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"/>',
            asp: '<img class="skill" src="https://img.shields.io/badge/asp-146EF5?style=for-the-badge&logo=asp&logoColor=white"/>',
            mssql: '<img class="skill" src="https://img.shields.io/badge/mssql-4479A1?style=for-the-badge&logo=mssql&logoColor=white"/>',
        },
        items: [
            // {
            //     company: "",
            //     period: "",
            //     contents: [
            //         {
            //             title: "",
            //             skills: [],
            //             description: ""
            //         },
            //         {
            //             title: "",
            //             skills: [],
            //             description: ""
            //         }
            //     ],
            // },
            {
                company: "플라이북",
                period: "2020.08~2024.09",
                contents: [
                    {
                        title: "자사 앱 운영 및 유지보수",
                        skills: [
                            'Flutter',
                            'Laravel',
                            'PHP',
                            'Maria DB',
                        ],
                        description: "플러터를 이용한 iOS/Android 앱 개발<br>라라벨을 이용한 API 개발",
                        images : [
                            {
                                title : '앱스토어 스크린샷',
                                description : '회원 정보 기반 맞춤 책/이용자 추천<br>팔로우 기반 피드<br>도서 구매/대여 결제<br>멤버십 구독 기능',
                                image : './assets/images/portfolio/flybook/01.png',
                            },
                        ],
                    },
                    {
                        title: "플라이북 AI",
                        skills: [
                            'Laravel',
                            'PHP',
                            'Maria DB',
                        ],
                        description: "정보나루/도서관 API 연동, 도서 ISBN 및 카테고리별 추천 정보 분류, 입력 정보에 따른 도서 추천 기능 개발, 문자/카카오 알림톡 발송, 결제모듈 연동 등",
                        images : [
                            {
                                title : '플라이북 AI 도서추천',
                                description : '이용자가 선택한 기분/관심사에 따라 책을 추천합니다.<br>API를 이용하여 도서 위치정보 및 대출현황을 제공합니다.',
                                image : './assets/images/portfolio/flybook/05.png',
                            },
                        ],
                    },
                    {
                        title: "자사 사이트 운영 및 유지보수",
                        skills: [
                            'Laravel',
                            'PHP',
                            'Maria DB',
                        ],
                        description: "플라이북(https://flybook.kr) 사이트 개발",
                        images : [
                            {
                                title : '메인',
                                description : '',
                                image : './assets/images/portfolio/flybook/02.png',
                            },
                            {
                                title : '제휴 제안 등록',
                                description : '제휴제안 문의 글을 등록하면 슬랙봇으로 알림이 발송됩니다.',
                                image : './assets/images/portfolio/flybook/03.png',
                            },
                            {
                                title : '이벤트',
                                description : '각종 이벤트 페이지 개발',
                                image : './assets/images/portfolio/flybook/04.png',
                            },
                        ],
                    },
                ],
            },
            {
                company: "가치브라더",
                period: "2019.10~2020.05",
                contents: [
                    {
                        title: "이엠넷 사이트 및 개발",
                        skills: [
                            'windows',
                            'php'
                        ],
                        description: "php7, 1:1문의 개발, 증권정보 API 연동<br>게시판 관리 및 포트폴리오 관리 (노출 순서 변경 및 이미지 업로드) 기능 개발"
                    },
                    {
                        title: "쇼핑몰 솔루션 유지보수 및 개발",
                        skills: [],
                        description: "마녀공장 사이트 (위사 솔루션) 개발"
                    }
                ],
            },
            {
                company: "헤럴드",
                period: "2019.03~2019.06",
                contents: [
                    {
                        title: "자사 사이트 개발 (PC/Mobile)",
                        skills: [
                            'Laravel',
                            'PHP',
                            'Maria DB',
                        ],
                        description: "키핏(https://www.keefit.co.kr) 사이트 개발 (운영중단)<br>위사솔루션에서 라라벨으로 이전하였습니다.<br>이용자가 설정한 정보에 따른 제품을 추천합니다.",
                        images : [
                            {
                                title : '메인',
                                description : '',
                                image : './assets/images/portfolio/keefit/01.jpg',
                            },
                            {
                                title : '추천 정보 입력',
                                description : '이용자가 연령대, 성별, 목적, 알러지 유무를 설정하면 해당되는 제품 목록을 보여줍니다.',
                                image : './assets/images/portfolio/keefit/02.png',
                            },
                        ],
                    },
                ],
            },
            {
                company: "바른컴퍼니",
                period: "2017.08~2019.03",
                contents: [
                    {
                        title: "자사 사이트 운영 및 유지보수",
                        skills: [
                            'Laravel',
                            'PHP',
                            'Maria DB',
                        ],
                        description: "디얼디어(https://deardeer.kr) 매출 현황, 사이트 운영관리, 제휴사 관리, 게시판 관리, 쿠폰 및 할인 혜택 등 운영에 대한 사이트 고도화 및 유지보수<br>디어닷(https://deardot.net) 브랜드 및 상품 소개 사이트 제작 (반응형웹)",
                        images : [
                            {
                                title : '디얼디어 - 메인',
                                description : '장바구니 : 일반상품, 청첩장으로 장바구니가 분리되어 있습니다.<br>쿠폰 : 중복 사용 쿠폰, 단독 쿠폰을 구분하여 할인 금액을 적용합니다.',
                                image : './assets/images/portfolio/deardeer/01.jpg',
                            },
                            {
                                title : '디얼디어 - 이미지 크롭',
                                description : '이용자가 청첩장에 사용할 이미지 크롭하여 업로드할 수 있습니다.',
                                image : './assets/images/portfolio/deardeer/02.jpg',
                            },
                            {
                                title : '디얼디어 관리자 - 메인',
                                description : '대시보드를 이용하여 이용 통계 및 문의사항을 확인할 수 있습니다.',
                                image : './assets/images/portfolio/deardeer/03.jpg',
                            },
                            {
                                title : '디얼디어 관리자 - 운영관리',
                                description : '쇼핑몰에서 이용하는 기능을 켜고 끌 수 있습니다.<br>설정에 따라 홈페이지의 메뉴 구성이 변경됩니다.',
                                image : './assets/images/portfolio/deardeer/04.jpg',
                            },
                            {
                                title : '디얼디어 관리자 - 이벤트',
                                description : '댓글 사용 등 원하는 이벤트를 설정할 수 있습니다.',
                                image : './assets/images/portfolio/deardeer/05.jpg',
                            },
                            {
                                title : '디어닷 - 메인1',
                                description : '',
                                image : './assets/images/portfolio/deardot/01.jpg',
                            },
                            {
                                title : '디어닷 - 메인2',
                                description : '',
                                image : './assets/images/portfolio/deardot/01.jpg',
                            },
                            {
                                title : '디어닷 - 모바일',
                                description : '반응형 웹',
                                image : './assets/images/portfolio/deardot/03.png',
                            },
                        ],
                    },
                    {
                        title: "자사 사이트 운영 및 유지보수",
                        skills: [
                            'ASP',
                            'MS SQL',
                        ],
                        description: "바른손카드(http://www.barunsoncard.com/) 사이트 유지보수 및 이벤트, 기획전 페이지 추가 및 페이지 리뉴얼",
                    },
                    {
                        title: "모바일 광고 관리자 사이트 개발",
                        skills: [
                            'Laravel',
                            'PHP',
                            'MS SQL',
                        ],
                        description: "모바일 배너 광고주 및 관리 사이트 제작<br>광고주, 담당자 정보, 광고 계약 정보 등록 및 관리",
                        images : [
                            {
                                title : '메인',
                                description : '광고주별 이용 통계를 확인합니다.',
                                image : './assets/images/portfolio/barun-ad-admin/01.jpg',
                            },
                            {
                                title : '광고주 등록',
                                description : '광고주의 정보 및 계약 내용을 등록합니다.',
                                image : './assets/images/portfolio/barun-ad-admin/02.jpg',
                            },
                        ],
                    }
                ],
            },
        ]
    }