import { QrScanner } from '@yudiel/react-qr-scanner';


function QR() {

    return (
        <>
            <QrScanner
                onDecode={(result) => console.log(result)}
                onError={(error) => console.log(error?.message)}
            />
        </>
    );
}

export default QR;