import z from 'zod';

export const todoSchema = z.object({
  title: z.string(),
  description: z.string().nullish(),
  completed: z.boolean().optional(),
});

export type Todo = z.infer<typeof todoSchema>;
