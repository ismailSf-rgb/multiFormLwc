export default class FormTypeSelector {
    static getFormType(context) {
      if (context.typeConfig === 'SouscriptionOpp') return 'A';
      if (context.typeConfig === 'GestionEpargne') return 'B';
      return 'A'; // default fallback
    }
  }
  