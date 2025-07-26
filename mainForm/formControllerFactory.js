import FormA from 'c/formA';
import FormB from 'c/formB';

export function createFormController(type, context) {
  switch (type) {
    case 'A': return new FormA(context);
    case 'B': return new FormB(context);
    default: throw new Error(`Unknown controller type: ${type}`);
  }
}
