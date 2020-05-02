var config = {
    style: 'mapbox://styles/romysayah/ck94vqx4g130j1is3l3rrmob2',
    accessToken: 'pk.eyJ1Ijoicm9teXNheWFoIiwiYSI6ImNrOTR2d2pncTA1aGwzcW81MXp4bDVpbWQifQ.qezBYoy33VWQVJ5YV69eog',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    
    footer: 'Source: aggregated data from bwht.org',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Hidden Histories',
            subtitle: 'Mapping womens struggles',
            byline: 'By Romy Sayah, Chenab Navalkha, Gina Hanhee Lee, Meesh Zucker - in collaboration with the Boston Public Library',
            
            description: 'Our goal is to highlight and feature lesser-known histories of prominent Boston women over the decades who built our streets, in our streets. Their narratives and struggles are largely buried in the landscape and our larger project aims to bring them to life through wayfinding, street renaming and miniature cinema projections. Here, you will experience the first feature of our project, where we mapped rights that women fought for, and renamed 4 streets that we chose as part of our in-person experience.',
            location: {
                center: [-71.07606, 42.35023],
                zoom: 13.21,
                pitch: 1.00,
                bearing: -8.80
            },
            onChapterEnter: [
                 {
                     layer: 'hiddenhistories',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'chap-1',
            subtitle: 'All Streets',
            
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-71.08056, 42.34109],
                zoom: 14.27,
                pitch: 1.00,
                bearing: -8.80
            },
            onChapterEnter: [
                {
                    layer: 'street-rename',
                    opacity: 1     
                }
                
            ],
            onChapterExit: [ 
                {
                    layer: 'street-rename',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chap-2',
            subtitle: 'Darmouth Street > Massachusetts Women’s Suffrage Association Avenue (MWSAA)',
            byline: 'Prominent women: Lucy Stone (left) and Julia Ward Howe (right)',
            image: './images/chap1.png',
            description: 'This street is currently the site of the Harriet Tubman House, out of which programs and social services for the Black community in the South End are run. While the history of women abolitionists and their crucial participation in the underground railroad is commemorated in the landscape in some ways, these histories and their markers are constantly contested.',
            location: {
                center: [-71.08056, 42.34109],
                zoom: 14.27,
                pitch: 1.00,
                bearing: -8.80
            },
            onChapterEnter: [
                {
                    layer: 'street-rename',
                    opacity: 1     
                },
                {
                    layer: 'named',
                    opacity: 1
                }
                
            ],
            onChapterExit: [ 
                {
                    layer: 'named',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chap-3',
            subtitle: 'Washington Street > International Ladies’ Garment Workers Union Street (ILGWU)',
            byline: 'Prominent women: Chew Shee Chin (left) and Helena Dudley (right)',
            image: './images/chap2.png',
            description: 'This street goes into Chinatown, where many immigrant women worked in garment factories and formed some of the first women-led unions, greatly impacting the labor movement in Boston and across the country.',
            location: {
                center: [-71.08056, 42.34109],
                zoom: 14.27,
                pitch: 1.00,
                bearing: -8.80
            },
            onChapterEnter: [
                {
                    layer: 'street-rename',
                    opacity: 1     
                },
                {
                    layer: 'named',
                    opacity: 1
                },
                {
                    layer: 'namew',
                    opacity: 1
                }
                
            ],
            onChapterExit: [ 
                {
                    layer: 'namew',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chap-4',
            subtitle: 'Melnea Cass Boulevard',
            byline: 'Prominent women: Maria Louise Baldwin (left) and Josephine St. Pierre Ruffin (right)',
            image:'./images/chap3.png',
            description: 'This central boulevard is named for Melnea Cass, a civil rights leader who was active in the South End and Roxbury communities, and was planned as a part of the Inner Belt highway expansion project which was ultimately rejected due to community resistance. This street name holds many layers of significance for the Boston civil rights movement and communities who continue to fight for racial justice.',
            location: {
                center: [-71.08056, 42.34109],
                zoom: 14.27,
                pitch: 1.00,
                bearing: -8.80
            },
            onChapterEnter: [
                {
                    layer: 'street-rename',
                    opacity: 1     
                },
                {
                    layer: 'named',
                    opacity: 1
                },
                {
                    layer: 'namew',
                    opacity: 1
                },
                {
                    layer:'namem',
                    opacity:1
                }
                
            ],
            onChapterExit: [ 
                {
                    layer: 'namem',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chap-5',
            subtitle: 'Columbus Avenue > Underground Railroad Avenue (URA)',
            byline: 'Prominent women: Harriet Tubman (left) and Harriet Bell Hayden (right)',
            image:'./images/chap4.png',
            description: 'This street is currently the site of the Harriet Tubman House, out of which programs and social services for the Black community in the South End are run. While the history of women abolitionists and their crucial participation in the underground railroad is commemorated in the landscape in some ways, these histories and their markers are constantly contested. ',
            location: {
                center: [-71.08056, 42.34109],
                zoom: 14.27,
                pitch: 1.00,
                bearing: -8.80
            },
            onChapterEnter: [
                {
                    layer: 'street-rename',
                    opacity: 1     
                },
                {
                    layer: 'named',
                    opacity: 1
                },
                {
                    layer: 'namew',
                    opacity: 1
                },
                {
                    layer:'namem',
                    opacity:1
                },
                {
                    layer:'namec',
                    opacity:1
                }
                
            ],
            onChapterExit: [ 
                {
                    layer: 'namec',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chap-6',
            subtitle: 'Navigate Now!',
            image:'./images/chap4.png',
            description: 'After having read the histories of the women in these 4 streets, we would like to invite you to take a tour and explore their Hidden Histories. Keep an eye out for peep holes on the walls that will give you a glimpse through their universes.',
            byline: 'Please scan the QR code with your mobile camera and head to the site!',
            location: {
                center: [-71.08056, 42.34109],
                zoom: 14.27,
                pitch: 1.00,
                bearing: -8.80
            },
            onChapterEnter: [
                {
                    layer: 'street-rename',
                    opacity: 1     
                },
                {
                    layer: 'named',
                    opacity: 1
                },
                {
                    layer: 'namew',
                    opacity: 1
                },
                {
                    layer:'namem',
                    opacity:1
                },
                {
                    layer:'namec',
                    opacity:1
                }
                
            ],
            onChapterExit: [ 
                {
                    layer: 'namec',
                    opacity: 0
                }
            ]
        }
    ]
};
