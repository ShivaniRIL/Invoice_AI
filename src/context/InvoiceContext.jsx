import { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const InvoiceContext = createContext();

const initialState = {
  invoices: [],
};

function invoiceReducer(state, action) {
  switch (action.type) {
    case 'ADD_INVOICE':
      return {
        ...state,
        invoices: [...state.invoices, { ...action.payload, id: uuidv4() }],
      };
    case 'UPDATE_INVOICE':
      return {
        ...state,
        invoices: state.invoices.map((invoice) =>
          invoice.id === action.payload.id ? action.payload : invoice
        ),
      };
    case 'UPDATE_STATUS':
      return {
        ...state,
        invoices: state.invoices.map((invoice) =>
          invoice.id === action.payload.id
            ? { ...invoice, status: action.payload.status }
            : invoice
        ),
      };
    default:
      return state;
  }
}

export function InvoiceProvider({ children }) {
  const [state, dispatch] = useReducer(invoiceReducer, initialState);

  return (
    <InvoiceContext.Provider value={{ state, dispatch }}>
      {children}
    </InvoiceContext.Provider>
  );
}

export function useInvoice() {
  return useContext(InvoiceContext);
}