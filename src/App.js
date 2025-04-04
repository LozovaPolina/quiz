

import {createBrowserRouter,RouterProvider} from "react-router";

import Root from "./pages/Root";
import GenderPage from "./pages/servey/GenderPage";
import QuizStartPage from "./pages/QuizStartPage";
import AgePage from "./pages/servey/AgePage";

import QuizPage from "./pages/QuizPage";
import AnswerRoot from "./pages/AnswerRoot";
import FormEmailPage from "./pages/servey/FormEmailPage";
import AnalyzerPage from "./pages/servey/AnalyzerPage";
import ErrorPage from "./pages/ErrorPage";
import PaywallPage from "./pages/payment/PaywallPage";
import MoneyBackPolicyPage from "./pages/documents/MoneyBackPolicyPage";
import PaymentFormPage from "./pages/payment/PaymentFormPage";



function App() {
    const router = createBrowserRouter([
        {path: '/',
            errorElement: <ErrorPage />,
            element: <Root/> , children: [
                {index: true,element: <QuizStartPage/> },
            ]
        },
        {path: 'quiz',
            errorElement: <ErrorPage />,
            element: <QuizPage/> ,
        },
        {path: "answer",errorElement: <ErrorPage />, element: <AnswerRoot/>,
            children: [
                {path: 'gender' ,element: <GenderPage/>},
                {path: 'age',element: <AgePage/>},
                {path: 'analyzer',element: <AnalyzerPage/>},
                {path: 'email',element: <FormEmailPage/>},
            ]
        },
        {path: "payment",errorElement: <ErrorPage />,
            children: [

                {index: true, element: <PaywallPage/>},
                {path: 'payment-form', element: <PaymentFormPage/>},
                {path:"money-back", element:<MoneyBackPolicyPage />}
            ]
        }

    ]);
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}
export default App
