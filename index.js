class Noticia{
  constructor(titulo, data_publicaçao, resumo, texto){
    this.titulo = titulo
    this.data_publicaçao = data_publicaçao
    this.resumo = resumo
    this.texto = texto
  }
  mostrarNoticias(){
    return this.titulo + "\n" + this.data_publicaçao + "\n" +  this.resumo +"\n" + "\n" +  this.texto + "\n"
    
}
    }

  let noticia = new Noticia ("Harry Styles anuncia estreia de novo álbum", "23/03/2022", "Ele é o momento! Nesta quarta-feira (23.03), Harry Styles surpreendeu os fãs ao anunciar o novo álbum dele", "O ganhador do Grammy por Watermelon Sugar High postou no Twitter que o seu terceiro álbum solo chegará em 20 de maio. Com uma mistura de minimalismo com surrealismo, Harry aparece em uma casa de ponta cabeça com uma expressão pensativa. Os internautas já desconfiavam que o cantor estava tramando algo, mas até então eram só teorias")
console.log(noticia.mostrarNoticias())


   
