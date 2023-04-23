
export default new class MaskHelper {
    public getMask(mask: string) {
        switch (mask.toLowerCase()) {
            case 'cpf':
                return '###.###.###-##'
            case 'cnpj':
                return '##.###.###/####-##'
        }

        return null
    }

    public allowAllMask() {
        return {mask: '*'.repeat(256), tokens: {
            '*': {pattern: /./},
        }}
    }
}()
