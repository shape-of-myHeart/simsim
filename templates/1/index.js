$(document).ready(function () {

    const main = $('.main');

    const sections = [
        {
            thumbnail: 'https://static.giantbomb.com/uploads/square_small/15/154387/2340397-dishonored_corvobase_v2.png',
            caption: {
                text: '이벤트',
            }
        },
        {
            thumbnail: 'https://s-media-cache-ak0.pinimg.com/originals/c0/5d/58/c05d58bc81dc1a3d280538ad6b162242.png',
            caption: {
                text: '이벤트',
                backgroundColor: '#0080FF'
            }
        }
    ];
    let sectionIndex = 0;
    const makeSection = ({ thumbnail, caption }) => `
<div class="section" style="top: 0; right: 0; animation-delay: ${(++sectionIndex * .25)}s">
    <div class="thumbnail" style="background-image: url(${thumbnail});"></div>
    <div class="caption" style="background-color: ${caption.backgroundColor}">${caption.text}</div>
</div>
`;

    for(const i in sections){
        const section = sections[i];
        main.append(makeSection(section, i));
        // 테스트
        main.append(makeSection(section, i));
        main.append(makeSection(section, i));
        main.append(makeSection(section, i));
        main.append(makeSection(section, i));
        main.append(makeSection(section, i));
    }
    
});