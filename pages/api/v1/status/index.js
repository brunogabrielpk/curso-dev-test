function status(request, response) {
  response.status(200).json({"chave" : "Curso.Dev students are awesome.\n Testando caracteres:  ç ã é"})
}

export default status

