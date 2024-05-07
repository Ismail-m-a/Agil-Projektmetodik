//Importerar nödvändiga paket/ filer
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Boka.css';

//Definierar Boka-komponenten
const Boka = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  //Funktion för att hantera bokningsförsök
  const handleBoka = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/boka', { //Skickar en POST-förfrågan till servern med bokningsdata
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });

      if (!response.ok) { //Om svar inte är OK, kasta ett fel med meddelande från servern
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      toast.success(`Bokningen bekräftad, tack ${data.name}! Din meddelande "${data.message}"`);
      reset(); //Återställ formuläret efter framgångsrik insändning
    } catch (error) { //Hantera fel som kan uppstå under bokningsprocessen
      toast.error(`Bokningen är misslyckad, vänligen försök igen: ${error.message || error.toString()}`);
    }
  };

  //Funktion för att hantera valideringsfel
  const onError = (errors) => {
    const errorMessages = Object.entries(errors).map(([key, value]) => ( //Skapar en lista med felmeddelanden baserat på valideringsfel
      <div key={key} className="toast-error-message">
        {value.message || `${key.charAt(0).toUpperCase() + key.slice(1)} is required`}
      </div>
    ));

    //Visar ett samlingsfelmeddelande för användaren
    toast.error(<div>{errorMessages}</div>, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  //Returnerar Boka-komponenten
  return (
    <>
      <div id='boka'>
        <h2 className="boka-title">StädaFint AB</h2>
      </div>
      <div className="boka-container">
        <div className="boka-header">
          <h4>Välkommen till StädaFint AB Bokning!</h4>
          <p>Säkra din plats för städning av högsta kvalitet med bara några få klick.</p>
          <p>Fyll i formuläret för att få en gratis offert eller få veta mer om vad vi erbjuder.</p>
          <p>Så här går du tillväga:</p>
          <ol>
            <li>Ange dina kontaktuppgifter.</li>
            <li>För en snabbare offert, vänligen ange ytterligare information.</li>
            <li>Vi återkommer med ett snabbt svart till dig !</li>
          </ol>
          <p>Föredrar du att prata? Ring oss direkt på 0844 68 51 40.</p>
        </div>

        <Form className="boka-form" onSubmit={handleSubmit(handleBoka, onError)}>
          <Form.Group className="mb-3">
          <Form.Label>Namn </Form.Label>
          <Form.Control type="text" placeholder="Ange ditt namn *" {...register("name", { required: "Namn är obligatorisk", validate: value => value.trim() !== '' })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>E-post</Form.Label>
          <Form.Control type="email" placeholder="Ange din e-post *" {...register("email", { required: "Mejl är obligatorisk", validate: value => value.trim() !== '' })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Adress</Form.Label>
          <Form.Control type="text" placeholder="Ange din adress * (gatanummer, ort och stad)" {...register("address", { required: "Adress är obligatorisk", validate: value => value.trim() !== '' })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Välj tjänst *</Form.Label>
          <Form.Select {...register("service", { required: "Städtjänst val är obligatorisk" })}>
            <option value="">Välj en tjänst</option>
            <option value="hemstadning">Hemstädning</option>
            <option value="kontorstadning">Kontorstädning</option>
            <option value="flyttstadning">Flyttstädning</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Välj bostads typ *</Form.Label>
          <Form.Select {...register("housingType", { required: "Bostadstyp är obligatorisk" })}>
            <option value="">Välj en bostadstyp </option>
            <option value="Lägenhet">Lägenhet</option>
            <option value="hus">Hus</option>
            <option value="fastighet">Fastighet</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Datum *</Form.Label>
          <Form.Control type="date" {...register("date", { required: "Datum är obligatorisk" })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tid *</Form.Label>
          <Form.Control type="time" {...register("time", { required: "Tid är obligatorisk" })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Meddelande</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Skriv ditt meddelande här" {...register("message")} />
        </Form.Group>
          <Button variant="primary" type="submit">Skicka bokning</Button>
        </Form>
        <ToastContainer position="top-center" autoClose={5000} /> {/* Renderar en toast-container för att visa meddelanden */}
      </div>
    </>
  );
};

export default Boka;
