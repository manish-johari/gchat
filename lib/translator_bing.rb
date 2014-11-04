module TranslatorBing
  def translate( text, to, from='en' )
    Translator.translate text, to: to, from: from
  end
end
