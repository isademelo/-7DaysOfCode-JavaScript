/* Você alguma vez já jogou algum jogo que te desse mais de uma escolha e, dependendo do que você escolhesse, o destino do personagem seria totalmente diferente?

Hoje você vai desenvolver um exemplo assim com Javascript!

Eu quero que você trabalhe com estruturas de controle de fluxo. Esse jeito complicado de falar só quer dizer que, assim como nos jogos, a história que você montar precisa se adaptar às respostas dadas por quem está jogando.

Para isso, você vai precisar de algumas estruturas capazes de alterar o fluxo da aplicação, como for, while, if e else. Todas essas conseguem cumprir esse objetivo, dada uma certa condição.

O if e o else, que eu já te mostrei nos últimos dias, são capazes de criar ramificações dentro da aplicação para que seja tomada uma ou outra ação, dependendo da condição fornecida.

Os loops (como for e while) são capazes de fazer uma tarefa repetitiva se transformar em poucas linhas de código, independente de quantas vezes você precisar repetir aquela tarefa.

Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.

DICA
Já deu pra ter uma ideia de como fazer toda essa historinha acontecer, né? Principalmente lembrando como utilizar as estruturas condicionais e loops em Javascript!

Caso você ainda não saiba como imprimir e receber valores nas páginas web com HTML e CSS, você poderá usar console.log, prompt e alert para desenvolver o seu jogo, como você já viu nos últimos dias.

Lembre-se que você pode sempre personalizar o jogo da forma que quiser. */
let areaTrabalho = prompt("Você quer trabalhar em qual área da programação? Front-End ou Back-End?");

    while (areaTrabalho.trim() === ""){
        alert("Resposta inválida");
        areaTrabalho = prompt("Você quer trabalhar em qual área da programação? Front-End ou Back-End?");
    }

    if (areaTrabalho.trim().toUpperCase() === "FRONTEND" || areaTrabalho.trim().toUpperCase() === "FRONT-END"){
        let frameworkFront = prompt("Você escolheu o front-end, você quer aprender o framework React ou framework Vue?");

            while (frameworkFront.trim() === ""){
                alert("Resposta inválida");
                frameworkFront = prompt("Você escolheu o front-end, você quer aprender o framework React ou framework Vue?");
            }
            if (frameworkFront.trim().toUpperCase() === "VUE"){
                alert("Muito bem! Vue.js é um framework JavaScript progressivo usado para construir interfaces de usuário (IU) e aplicações web, especialmente aplicações de página única (SPAs). Ele se destaca pela sua facilidade de aprendizado e flexibilidade, permitindo que seja usado tanto em projetos existentes quanto no desenvolvimento de aplicações completas do zero.")
            } else if (frameworkFront.trim().toUpperCase() === "REACT"){
                alert("O React é uma biblioteca JavaScript para a criação de interfaces de usuário interativas e dinâmicas, especialmente para aplicações web de página única e aplicativos móveis multiplataforma. Ele permite dividir a interface em componentes reutilizáveis, facilitando o desenvolvimento e a manutenção de aplicações complexas.");
            } else {
                 alert("Resposta não reconhecida."); 
            }

    } else if (areaTrabalho.trim().toUpperCase() === "BACKEND" || areaTrabalho.trim().toUpperCase() === "BACK-END"){
        let backend =  prompt("Você escolheu o back-end, você quer aprender C# ou aprender Java.");

             while (backend.trim() === ""){
                alert("Resposta inválida");
                backend = prompt("Você escolheu o back-end, você quer aprender C# ou aprender Java.");
            }
            if (backend.trim().toUpperCase() === "C#"){
                alert(`Boa escolha,o C# é uma linguagem de programação versátil e poderosa, adequada para uma ampla gama de aplicações, desde desenvolvimento de jogos até aplicações web e desktop, além de inteligência artificial. Sua integração com o ecossistema .NET da Microsoft a torna uma escolha popular para desenvolvedores que trabalham com a plataforma Windows, mas também oferece opções multiplataforma através do .NET Core e .NET. `)
            } else if (backend.trim().toUpperCase() === "JAVA"){
                alert(`Muito bom, Java é uma linguagem de programação versátil e amplamente utilizada, conhecida por sua portabilidade, orientação a objetos e grande comunidade de suporte. É uma escolha popular para desenvolver uma variedade de aplicações, incluindo aplicativos de desktop, web, móveis (Android) e servidores. Java também se destaca em aplicações empresariais devido à sua robustez e capacidade de lidar com tarefas complexas. `)
            } else {
                alert("Resposta não reconhecida."); 
            }
    } else {
            alert("Resposta não reconhecida."); 
        }
let stack = prompt('Você quer se desenvolver para ser Fullstack? (responda "sim" caso queria se desenvolver na área do Fullstack ou "não" caso queira permanecer se especializando na área que você escolheu anteriormente.)');

    if (stack.trim().toUpperCase() === "SIM"){
        alert("Que legal! Seguir para o Fullstack é um ótimo caminho, pois você vai dominar tanto o Front-End quanto o Back-End. Continue se dedicando e em breve estará desenvolvendo projetos completos!");
    } else if (stack.trim().toUpperCase() === "NÃO" || stack.trim().toUpperCase() === "NAO"){
        alert("Sem problemas! Focar em uma área específica também é uma ótima escolha. Aprofundar seus conhecimentos vai te tornar uma referência nessa especialidade. Continue firme no seu caminho!");
    } else {
        alert("Resposta não reconhecida."); 
    }

let tecnologia = prompt("qual é a tecnologia na qual você gostaria de se especializar ou de conhecer?")
alert (`${tecnologia} é uma tecnologia muito interessante. Vale a pena se aprofundar nela!`);

 while (confirm("Existe alguma outra tecnologia que voce gostaria de se aprofundar?")){
        let outraTecnologia = prompt("Qual seria a outra tecnologia que você tem vontade de se aprofundar?");
        alert(`Ótimo! ${outraTecnologia} tambem é muito interessante. Continue se dedicando e aprendendo cada vez mais. Sucesso na sua jornada!`);
}