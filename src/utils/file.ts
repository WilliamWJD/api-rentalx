import fs from "fs";

export const deleteFile = async (filename: string) => {
    try {
        // verifica se o arquivo existe no diretório
        await fs.promises.stat(filename);
    } catch (err) {
        return;
    }

    // remove o arquivo
    await fs.promises.unlink(filename);
};
