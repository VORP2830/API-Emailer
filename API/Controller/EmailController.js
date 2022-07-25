const EnviarEmail = require('../Utils/email.js')

class Email {
    static async EmailEnviar (req, res) {
        const { email, editor } = req.body;
        EnviarEmail(email, "Email enviado pelo Emailer", editor);
        res.status(200).json({mensagem: "Email enviado com sucesso!"});
    }
}

module.exports = Email;