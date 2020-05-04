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
            id: 'chap-0',
            subtitle: 'Domestic Violence Survivor',
            
            description: 'This singular  yellow point shows how little data was gathered regarding the women who have suffered domestic violence. With the lack of geographical markers related to domestic violence, we have decided to point out this aspect and reference indeed womens hidden struggles. To best protect and give voice to those affected, this chapter aims to point out their lack of representation.',
            location: {
                center: [-71.07378, 42.34039],
                zoom: 17.35,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [

                
            ],
            onChapterExit: [ 

            ]
        },
        {
            id: 'chap-1',
            subtitle: 'All Streets',
            
            description: 'Our own knowledge of the City of Boston and its toponymic landscape led us to this particular set of streets to rename. Melnea Cass Boulevard served as a launching point for this project. We noticed that the naming of this urban boulevard after a civil rights leader--one of a very few streets in Boston named for woman--may have links with the prominence of social service providers along its offshoots.  From previous work, a group member was familiar with the current struggle over the proposed move of Harriet Tubman House, and a renaming of the street itself--to commemorate the movement to abolish slavery, which was led in large part by women--was a way for us to interject in this contestation. We also wanted to create a loop that would incorporate the BPL as a starting point, so that visitors could follow the trail before or after viewing the exhibit. Lastly, considering the roots of the women’s labor movement in Chinatown, we wanted to highlight a central thoroughfare that cut through many neighborhoods, tying together seemingly disparate neighborhoods by recognizing the far-reaching impacts of women laborers city-wide. ',
            location: {
                center: [-71.08296, 42.34071],
                zoom: 14.30,
                pitch: 0.00,
                bearing: 0.00
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
            description: 'Boston was a central hub of the suffrage movement that spanned decades leading up to the ratification of the 19th Amendment in 1920 and included many prominent women in Boston history. However, hundreds, if not thousands, of women worked collectively to fight for and win the woman’s right to vote. Notably, the Woman’s Journal, distributed nationally from downtown Boston, was a major influence on the movement. Many of the offices and homes from which this movement was organized were located in the neighborhoods branching off from this street. ',
            location: {
                center: [-71.08296, 42.34071],
                zoom: 14.30,
                pitch: 0.00,
                bearing: 0.00
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
            subtitle: 'Washington Street > International Ladies’ Garment Workers Union Street (ILGWUS)',
            byline: 'Prominent women: Chew Shee Chin (left) and Helena Dudley (right)',
            image: './images/chap2.png',
            description: 'This street goes into Chinatown, where many immigrant women worked in garment factories and formed some of the first women-led unions, greatly impacting the labor movement in Boston and across the country.',
            location: {
                center: [-71.08296, 42.34071],
                zoom: 14.30,
                pitch: 0.00,
                bearing: 0.00
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
                center: [-71.08296, 42.34071],
                zoom: 14.30,
                pitch: 0.00,
                bearing: 0.00
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
                center: [-71.08296, 42.34071],
                zoom: 14.30,
                pitch: 0.00,
                bearing: 0.00
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
            image:'./images/qr.png',
            description: 'After having read the histories of the women in these 4 streets, we would like to invite you to take a tour and explore their Hidden Histories. Keep an eye out for peep holes on the walls that will give you a glimpse through their universes.',
            byline: 'Please scan the QR code with your mobile camera and head to the site!',
            location: {
                center: [-71.08296, 42.34071],
                zoom: 14.30,
                pitch: 0.00,
                bearing: 0.00
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
