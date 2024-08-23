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
                html += portfolio.bindContents(value.contents ?? [])
                html += `</div>`;
            });

            $('#projects .project_group').html(html);
        },
        bindContents: function (contents) {
            let html = ``;
            if (contents.length > 0) {
                html += `<div class="contents">`;
                contents.forEach(function (value, index, array) {
                    html += `<div class="item">`;
                    html += `<p class="title">${value.title}</p>`;
                    html += portfolio.bindBadges(value.skills ?? []);
                    html += `<p class="description">${value.description}</p>`;
                    html += portfolio.bindImages(value.images ?? []);
                    html += `</div>`;
                });
                html += `</div>`;
            }

            return html;
        },
        bindImages: function (images) {
            let html = ``;
            if (images.length > 0) {
                html += `<div class="image-wrap">`;
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
                console.log(images);
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
                period: "(2020.08~2024.09)",
                contents: [
                    {
                        title: "자사 앱 운영 및 유지보수",
                        skills: [
                            'Flutter',
                            'Laravel',
                            'PHP',
                            'Maria DB',
                        ],
                        description: "플러터를 이용한 iOS/Android 앱 개발<br>라라벨을 이용한 API 개발"
                    },
                    {
                        title: "플라이북 AI",
                        skills: [
                            'Laravel',
                            'PHP',
                            'Maria DB',
                        ],
                        description: "정보나루/도서관 API 연동, 도서 ISBN 및 카테고리별 추천 정보 분류, 입력 정보에 따른 도서 추천 기능 개발, 문자/카카오 알림톡 발송, 결제모듈 연동 등"
                    },
                    {
                        title: "자사 사이트 운영 및 유지보수",
                        skills: [
                            'Laravel',
                            'PHP',
                            'Maria DB',
                        ],
                        description: "플라이북(https://flybook.kr) 사이트 개발"
                    },
                ],
            },
            {
                company: "가치브라더",
                period: "(2019.10~2020.05)",
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
                period: "(2019.03~2019.06)",
                contents: [
                    {
                        title: "자사 사이트 개발 (PC/Mobile)",
                        skills: [
                            'Laravel',
                            'PHP',
                            'Maria DB',
                        ],
                        description: "키핏(https://www.keefit.co.kr) 사이트 개발 (운영중단)"
                    },
                ],
            },
            {
                company: "바른컴퍼니",
                period: "(2017.08~2019.03)",
                contents: [
                    {
                        title: "자사 사이트 운영 및 유지보수",
                        skills: [
                            'Laravel',
                            'PHP',
                            'Maria DB',
                        ],
                        description: "디얼디어(https://deardeer.kr) 매출 현황, 사이트 운영관리, 제휴사 관리, 게시판 관리, 쿠폰 및 할인 혜택 등 운영에 대한 사이트 고도화 및 유지보수<br>디어닷(https://deardot.net) 브랜드 및 상품 소개 사이트 제작 (반응형웹)"
                    },
                    {
                        title: "자사 사이트 운영 및 유지보수",
                        skills: [
                            'ASP',
                            'MS SQL',
                        ],
                        description: "바른손카드(http://www.barunsoncard.com/) 사이트 유지보수 및 이벤트, 기획전 페이지 추가 및 페이지 리뉴얼"
                    },
                    {
                        title: "모바일 광고 관리자 사이트 개발",
                        skills: [
                            'Laravel',
                            'PHP',
                            'MS SQL',
                        ],
                        description: "모바일 배너 광고주 및 관리 사이트 제작",
                        images : [
                            {
                                title : '메인',
                                description : '',
                                image : './assets/images/portfolio/barun-ad-admin/01.jpg',
                            },
                            {
                                title : '광고주 등록',
                                description : '',
                                image : './assets/images/portfolio/barun-ad-admin/02.jpg',
                            },
                        ],
                    }
                ],
            },
        ]
    }