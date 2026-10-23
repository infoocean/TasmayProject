"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { vehicleCategories, services } from "@/data/site-content";
import { carModels } from "@/data/car-models";
import { siteConfig } from "@/config/site";

type EnquiryValues = {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  vehicle: string;
  model: string;
  tripType: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof EnquiryValues, string>>;

const initialValues: EnquiryValues = {
  name: "",
  phone: "",
  pickup: "",
  destination: "",
  date: "",
  vehicle: "",
  model: "",
  tripType: "",
  message: "",
};

function validate(values: EnquiryValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.phone.trim()) errors.phone = "Enter a phone number so the business can identify your enquiry.";
  if (!values.pickup.trim()) errors.pickup = "Enter a pickup location.";
  if (!values.destination.trim()) errors.destination = "Enter a destination.";
  if (!values.date) errors.date = "Choose a travel date.";
  if (!values.vehicle && !values.model.trim()) errors.vehicle = "Choose a category or enter a car model.";
  if (!values.tripType) errors.tripType = "Choose an enquiry type.";
  return errors;
}

function formatSummary(values: EnquiryValues) {
  return [
    `${siteConfig.name} — quote enquiry`,
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Pickup: ${values.pickup.trim()}`,
    `Destination: ${values.destination.trim()}`,
    `Travel date: ${values.date}`,
    ...(values.vehicle ? [`Vehicle category: ${values.vehicle}`] : []),
    ...(values.model.trim() ? [`Vehicle model: ${values.model.trim()}`] : []),
    `Enquiry type: ${values.tripType}`,
    ...(values.message.trim() ? [`Message: ${values.message.trim()}`] : []),
  ].join("\n");
}

type QuoteFormProps = { initialValues?: Partial<EnquiryValues> };

export function QuoteForm({ initialValues: providedValues }: QuoteFormProps) {
  const [values, setValues] = useState<EnquiryValues>(() => ({ ...initialValues, ...providedValues }));
  const [errors, setErrors] = useState<FieldErrors>({});

  function update<K extends keyof EnquiryValues>(key: K, value: EnquiryValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
    if (key === "model" && value.trim() && errors.vehicle) setErrors((current) => ({ ...current, vehicle: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }
    const enquiry = formatSummary(values);
    const messageUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(enquiry)}`;
    window.open(messageUrl, "_blank", "noopener,noreferrer");
  }

  const fieldProps = (key: keyof EnquiryValues) => ({
    id: key,
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  return (
    <div className="quote-form-wrap">
      <form className="quote-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">Your name <span aria-hidden="true">*</span></label>
            <input {...fieldProps("name")} value={values.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" placeholder="Name" />
            {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="phone">Your phone number <span aria-hidden="true">*</span></label>
            <input {...fieldProps("phone")} type="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" placeholder="Phone number" />
            {errors.phone && <p className="field-error" id="phone-error">{errors.phone}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="pickup">Pickup location <span aria-hidden="true">*</span></label>
            <input {...fieldProps("pickup")} value={values.pickup} onChange={(event) => update("pickup", event.target.value)} placeholder="Where should the trip start?" />
            {errors.pickup && <p className="field-error" id="pickup-error">{errors.pickup}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="destination">Destination <span aria-hidden="true">*</span></label>
            <input {...fieldProps("destination")} value={values.destination} onChange={(event) => update("destination", event.target.value)} placeholder="Where are you going?" />
            {errors.destination && <p className="field-error" id="destination-error">{errors.destination}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="date">Travel date <span aria-hidden="true">*</span></label>
            <input {...fieldProps("date")} type="date" value={values.date} onChange={(event) => update("date", event.target.value)} />
            {errors.date && <p className="field-error" id="date-error">{errors.date}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="vehicle">Vehicle category <span className="optional-label">(optional if adding a model)</span></label>
            <select {...fieldProps("vehicle")} value={values.vehicle} onChange={(event) => update("vehicle", event.target.value)}>
              <option value="">Choose a category</option>
              {vehicleCategories.map((vehicle) => <option key={vehicle.slug} value={vehicle.name}>{vehicle.name}</option>)}
            </select>
            {errors.vehicle && <p className="field-error" id="vehicle-error">{errors.vehicle}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="model">Car model <span className="optional-label">(optional)</span></label>
            <input {...fieldProps("model")} list="car-model-options" value={values.model} onChange={(event) => update("model", event.target.value)} placeholder="Search or enter a model" />
            <datalist id="car-model-options">
              {carModels.map((model) => <option key={model.slug} value={`${model.brand} ${model.name}`} />)}
            </datalist>
          </div>
          <div className="form-field">
            <label htmlFor="tripType">Enquiry type <span aria-hidden="true">*</span></label>
            <select {...fieldProps("tripType")} value={values.tripType} onChange={(event) => update("tripType", event.target.value)}>
              <option value="">Choose an enquiry type</option>
              {services.map((service) => <option key={service.slug} value={service.name}>{service.name}</option>)}
              <option value="Other">Other</option>
            </select>
            {errors.tripType && <p className="field-error" id="tripType-error">{errors.tripType}</p>}
          </div>
          <div className="form-field form-field--wide">
            <label htmlFor="message">Additional details <span className="optional-label">(optional)</span></label>
            <textarea id="message" value={values.message} onChange={(event) => update("message", event.target.value)} rows={4} placeholder="Add any details that may help describe your trip." />
          </div>
        </div>
        <button className="button button--primary quote-form__submit" type="submit">Send enquiry on WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></button>
      </form>

    </div>
  );
}
