// Dados locais de reviews
const reviews = [
    {
        id: 1,
        nome: 'Andréia Santos',
        profissao: 'Web Developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam nemo voluptate ab unde, beatae sapiente, nobis voluptatum hic odio sed ducimus quibusdam sint a aperiam debitis velit. Quas, ea."
    },

    {
        id: 2,
        nome: 'Giovana Golveia',
        profissao: 'Web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        texto: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
    },
      
    {
        id: 3,
        nome: 'Pedro Noronha',
        profissao: 'Estagiário',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        texto: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
    },
 
    {
        id: 4,
        nome: 'Rafael Silva',
        profissao: 'The boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        texto: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    }
]

// Seleção de items do review
const imagem = document.querySelector('.img-pessoa');
const autor = document.querySelector('.autor');
const profissao = document.querySelector('.profissao');
const info = document.querySelector('.info');

// Seleção de botões
const btnAnt = document.querySelector('.btn-ant');
const btnProx = document.querySelector('.btn-prox');
const btnAleatorio = document.querySelector('.btn-aleatorio');

// Item inicial
let itemAtual = 0;

// Carregando um item inicial
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[itemAtual];
    imagem.src = item.img;
    autor.textContent = item.nome;
    profissao.textContent = item.profissao;
    info.textContent = item.texto;
});

// Mostra pessoa de acordo com os itens
function mostraPessoa(pessoa) {
    const item = reviews[pessoa];
    imagem.src = item.img;
    autor.innerHTML = item.nome;
    profissao.textContent = item.profissao;
    info.textContent = item.texto;
}

// Mostra a próxima pessoa
btnProx.addEventListener('click', () => {
    console.log('Botão próximo funcionando!')
    itemAtual++;
    if (itemAtual > reviews.length - 1) {
        itemAtual = 0;
    }
    mostraPessoa(itemAtual);
});

// Mostra a pessoa anterior
btnAnt.addEventListener('click', () => {
    console.log('Botão anterior funcionando!')
    itemAtual--;
    if (itemAtual < 0) {
        itemAtual = reviews.length - 1;
    }
    mostraPessoa(itemAtual);
});

// Mostra pessoa aleatória
btnAleatorio.addEventListener('click', () => {
    console.log('Aleatório funcionando!')

    itemAtual = Math.floor(Math.random() * reviews.length);
    mostraPessoa(itemAtual);
});