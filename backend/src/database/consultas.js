const fs = require('fs')
const path = require('path');

async function usuario_existe(usuario) {
    const bancoLocalPath = './src/database/banco_local.json';
    let bancoLocalData = {};

    bancoLocalData = await fs.promises.readFile(bancoLocalPath);
    const db = JSON.parse(bancoLocalData);

    const usuarioExistente = db.usuarios.find((user) => user.usuario === usuario);
    if(usuarioExistente) {
        return true
    }
    return false
}

async function cadastrar_usuario(usuario, senha) {
    try {
        const bancoLocalPath = './src/database/banco_local.json';
        let bancoLocalData = {};
    
        bancoLocalData = await fs.promises.readFile(bancoLocalPath);
        const db = JSON.parse(bancoLocalData);

    
        // Gera um novo ID para o usuário
        const novoId = db.usuarios.length + 1;
    
        // Cria o novo usuário
        const novoUsuario = {
            id: novoId,
            usuario: usuario,
            senha: senha
        };
    
        // Adiciona o novo usuário ao banco de dados
        db.usuarios.push(novoUsuario);

        const novoBancoLocalData = JSON.stringify(db,null,2)
        await fs.promises.writeFile(bancoLocalPath,novoBancoLocalData)
        return true
    } catch (error) {
        return false
    }    
}

async function login(usuario, senha) {
    const bancoLocalPath = './src/database/banco_local.json';
    let bancoLocalData = {};

    bancoLocalData = await fs.promises.readFile(bancoLocalPath);
    const db = JSON.parse(bancoLocalData);

    const usuarioExistente = db.usuarios.find((user) => user.usuario === usuario);
    if(usuarioExistente) {
        if (usuarioExistente.senha == senha){
            await salvar_login()
            return true
        }
        return false
    }
    return false
}

async function resetar_senha(usuario, nova_senha) {
    try {
        const bancoLocalPath = './src/database/banco_local.json';
        let bancoLocalData = {};

        bancoLocalData = await fs.promises.readFile(bancoLocalPath);
        const db = JSON.parse(bancoLocalData);

        const usuarioExistente = db.usuarios.find((user) => user.usuario === usuario);
        if(usuarioExistente) {
            usuarioExistente.senha = nova_senha;

            const novoBancoLocalData = JSON.stringify(db, null, 2);
            await fs.promises.writeFile(bancoLocalPath, novoBancoLocalData);
        }
        return true
    } catch (error) {
        return false
    }    
}


async function verificar_login(req, res, next) {
  try {
    const flagPath = './src/database/flag.json';
    let flagData = {};

    flagData = await fs.promises.readFile(flagPath);
    var flag = JSON.parse(flagData);
    
    if (flag.logado === true) {
      const currentTime = new Date();
      const lastLoginTime = new Date(flag.data);
      const timeDifference = (currentTime - lastLoginTime) / (1000 * 60); // Difference in minutes

      if (timeDifference > 20) {
        await deslogar();
        res.status(401)
        res.setHeader('WWW-Authenticate', 'Bearer');
        res.json({
            'erro': 'faça login para assistir'
        })
        } else {
            next()
        }
    } else {
        res.status(401)
        res.setHeader('WWW-Authenticate', 'Bearer');
        res.json({
            'erro': 'faça login para assistir'
        })
        
    }
  } catch (error) {
        res.status(500)
        res.json({
            'erro': 'algo de muito errado ocorreu'
        })
  }
}



async function salvar_login() {
    const flagPath = './src/database/flag.json';
  try {
    const currentTime = new Date();
    const flag = {
      logado: true,
      data: currentTime.toISOString(),
    };

    const flagData = JSON.stringify(flag, null, 2);
    await fs.promises.writeFile(flagPath, flagData);
  } catch (error) {
    console.error('Erro ao salvar o login:', error);
  }
}

async function deslogar() {
    const flagPath = './src/database/flag.json';
  try {
    const flag = {
      logado: false,
      data: null,
    };

    const flagData = JSON.stringify(flag, null, 2);
    await fs.promises.writeFile(flagPath, flagData);
  } catch (error) {
    console.error('Erro ao deslogar:', error);
  }
}


module.exports = {usuario_existe, cadastrar_usuario, resetar_senha, login, verificar_login}