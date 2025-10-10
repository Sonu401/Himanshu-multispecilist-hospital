"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  department: z.string().min(1, "Choose a department"),
  date: z.string().min(1, "Select a date"),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState<null | FormValues>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (values: FormValues) => {
    setSubmitted(values)
    reset()
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-lg border bg-white p-6 shadow-sm" data-aos="fade-up">
        <h2 className="mb-1 text-center text-2xl font-bold text-gray-900">Book an Appointment</h2>
        <p className="mb-6 text-center text-gray-700">Fill the form and we&apos;ll confirm your booking.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" aria-invalid={!!errors.name} {...register("name")} />
            {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
          </div>
          <div className="grid gap-1 md:grid-cols-2 md:gap-4">
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div className="grid gap-1">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+1 555..." aria-invalid={!!errors.phone} {...register("phone")} />
              {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
            </div>
          </div>
          <div className="grid gap-1 md:grid-cols-2 md:gap-4">
            <div className="grid gap-1">
              <Label>Department</Label>
              <Select onValueChange={(v) => setValue("department", v)} value={watch("department")}>
                <SelectTrigger aria-invalid={!!errors.department}>
                  <SelectValue placeholder="Choose department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cardiology">Cardiology</SelectItem>
                  <SelectItem value="General Medicine">General Medicine</SelectItem>
                  <SelectItem value="Radiology">Radiology</SelectItem>
                  <SelectItem value="Dentistry">Dentistry</SelectItem>
                </SelectContent>
              </Select>
              {errors.department && <p className="text-sm text-red-600">{errors.department.message}</p>}
            </div>
            <div className="grid gap-1">
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" type="date" aria-invalid={!!errors.date} {...register("date")} />
              {errors.date && <p className="text-sm text-red-600">{errors.date.message}</p>}
            </div>
          </div>
          <div className="grid gap-1">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea id="message" placeholder="Any additional details..." {...register("message")} />
          </div>
          <Button className="mt-2 bg-blue-600 text-white hover:bg-blue-700">Confirm Appointment</Button>
        </form>

        {submitted && (
          <div
            className="mt-6 rounded-md border border-green-200 bg-green-50 p-4 text-green-800"
            role="status"
            aria-live="polite"
          >
            Appointment request submitted for {submitted.name}. We will contact you at {submitted.email}.
          </div>
        )}
      </div>
    </section>
  )
}
