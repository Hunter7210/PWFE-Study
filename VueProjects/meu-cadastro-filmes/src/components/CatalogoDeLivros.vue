<template>
    <div class="catalogo-livros">
        <h2>Catálogo de livros</h2>
        <input v-model="novoFilme" @keyup.enter="adicionarlivro" placeholder="Digite um novo livro" />
        <ul>
            <li v-for="(filme, index) in filmes" :key="index">
                {{ filme.titulo }}
                <button @click="alternarStatus(filme)">Marcar como {{
                    filme.assistido ? 'Não Assistido' : 'Assistido' }}</button>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            novolivro: "",
            livros: [],
        };
    },
    methods: {
        adicionarlivro() {
            if (this.novolivro.trim() !== "") {
                this.livros.push({ titulo: this.novolivro, assistido: false });
                this.novolivro = "";
            }
        },
        alternarStatus(livro) {
            livro.assistido = !livro.assistido;
        },
    },
};
</script>
    
<style scoped>
.catalogo-livros {
    margin: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
}
</style>