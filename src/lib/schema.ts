import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Ad en az 2 karakter olmalıdır',
  }),
  email: z.string().email({
    message: 'Geçerli bir e-posta adresi giriniz',
  }),
  phone: z.string().min(10, {
    message: 'Geçerli bir telefon numarası giriniz',
  }),
  subject: z.string().min(2, {
    message: 'Konu en az 2 karakter olmalıdır',
  }),
  message: z.string().min(10, {
    message: 'Mesaj en az 10 karakter olmalıdır',
  }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export const priceRequestFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Ad en az 2 karakter olmalıdır',
  }),
  email: z.string().email({
    message: 'Geçerli bir e-posta adresi giriniz',
  }),
  phone: z.string().min(10, {
    message: 'Geçerli bir telefon numarası giriniz',
  }),
  company: z.string().optional(),
  container: z.string(),
  quantity: z.string().min(1, {
    message: 'Miktar giriniz',
  }),
  message: z.string().optional(),
})

export type PriceRequestFormValues = z.infer<typeof priceRequestFormSchema> 