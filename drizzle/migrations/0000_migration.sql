CREATE TABLE public.orcamentos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL CHECK (char_length(nome) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  telefone text CHECK (telefone IS NULL OR char_length(telefone) <= 40),
  servico text CHECK (servico IS NULL OR char_length(servico) <= 120),
  mensagem text NOT NULL CHECK (char_length(mensagem) BETWEEN 1 AND 3000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.orcamentos TO anon, authenticated;
GRANT ALL ON public.orcamentos TO service_role;
ALTER TABLE public.orcamentos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Qualquer visitante pode enviar orcamento" ON public.orcamentos FOR INSERT TO anon, authenticated WITH CHECK (true);