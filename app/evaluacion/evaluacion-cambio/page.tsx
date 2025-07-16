"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle } from "lucide-react"

const examData = {
 "title": "Examen de Cambio y Desarrollo Organizacional",
  "description": "Evalúa la comprensión sobre la relación entre el cambio y el desarrollo organizacional",
  "sections": [
    {
      "id": "seccion1",
      "title": "Sección 1: Naturaleza del Cambio",
      "questions": [
        {
          "id": "q1",
          "type": "boolean",
          "question": "El cambio organizacional siempre debe ser reactivo a problemas existentes.",
          "correctAnswer": "falso"
        },
        {
          "id": "q2",
          "type": "multiple",
          "question": "¿Qué tipo de cambio afecta directamente a la estructura formal de la organización?",
          "options": [
            "Cambio en el sistema orgánico",
            "Cambio en el campo de fuerza", 
            "Cambio tecnológico"
          ],
          "correctAnswer": "Cambio en el sistema orgánico"
        }
      ]
    },
    {
      "id": "seccion2",
      "title": "Sección 2: Proceso de Cambio",
      "questions": [
        {
          "id": "q3",
          "type": "boolean",
          "question": "El modelo de campo de fuerzas de Lewin considera que el cambio ocurre cuando las fuerzas impulsoras superan a las restrictivas.",
          "correctAnswer": "verdadero"
        },
        {
          "id": "q4",
          "type": "multiple",
          "question": "¿Cuál es la primera fase del proceso de cambio según Lewin?",
          "options": [
            "Recongelamiento",
            "Descongelamiento",
            "Implementación"
          ],
          "correctAnswer": "Descongelamiento"
        }
      ]
    },
    {
      "id": "seccion3",
      "title": "Sección 3: Resistencia al Cambio",
      "questions": [
        {
          "id": "q5",
          "type": "boolean",
          "question": "La resistencia al cambio siempre es negativa para la organización.",
          "correctAnswer": "falso"
        },
        {
          "id": "q6",
          "type": "multiple",
          "question": "¿Cuál es una causa común de resistencia al cambio?",
          "options": [
            "Exceso de comunicación",
            "Pérdida percibida de estatus",
            "Participación temprana en el proceso"
          ],
          "correctAnswer": "Pérdida percibida de estatus"
        }
      ]
    },
    {
      "id": "seccion4",
      "title": "Sección 4: Cambio Planeado",
      "questions": [
        {
          "id": "q7",
          "type": "boolean",
          "question": "Un cambio planeado requiere considerar tanto los aspectos técnicos como los humanos.",
          "correctAnswer": "verdadero"
        },
        {
          "id": "q8",
          "type": "multiple",
          "question": "¿Cuál NO es un requisito para un cambio planeado efectivo?",
          "options": [
            "Imposición sin consulta",
            "Diagnóstico preciso",
            "Participación de los afectados"
          ],
          "correctAnswer": "Imposición sin consulta"
        }
      ]
    },
    {
      "id": "seccion5",
      "title": "Sección 5: Sistemas y Comportamiento",
      "questions": [
        {
          "id": "q9",
          "type": "boolean",
          "question": "Los sistemas abiertos son más resistentes al cambio que los sistemas cerrados.",
          "correctAnswer": "falso"
        },
        {
          "id": "q10",
          "type": "multiple",
          "question": "¿Qué aspecto del comportamiento humano es más afectado por los cambios organizacionales?",
          "options": [
            "Patrones de comunicación",
            "Color favorito",
            "Estatura física"
          ],
          "correctAnswer": "Patrones de comunicación"
        }
      ]
    }
  ]
}

export default function ExamForm() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }

  const calculateScore = () => {
    let correctAnswers = 0
    const totalQuestions = examData.sections.reduce((total, section) => total + section.questions.length, 0)

    examData.sections.forEach((section) => {
      section.questions.forEach((question) => {
        if (answers[question.id] === question.correctAnswer) {
          correctAnswers++
        }
      })
    })

    setScore(Math.round((correctAnswers / totalQuestions) * 100))
    setShowResults(true)
  }

  const resetExam = () => {
    setAnswers({})
    setShowResults(false)
    setScore(0)
  }

  const isAnswerCorrect = (questionId: string, correctAnswer: string) => {
    return answers[questionId] === correctAnswer
  }

  const allQuestionsAnswered = () => {
    const totalQuestions = examData.sections.reduce((total, section) => total + section.questions.length, 0)
    return Object.keys(answers).length === totalQuestions
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{examData.title}</CardTitle>
          <CardDescription>{examData.description}</CardDescription>
        </CardHeader>
      </Card>

      {showResults && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <CheckCircle className="w-5 h-5" />
              Resultados del Examen
            </CardTitle>
            <CardDescription className="text-green-700">
              Tu puntuación: {score}% ({score >= 70 ? "Aprobado" : "Reprobado"})
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      <div className="space-y-6">
        {examData.sections.map((section) => (
          <Card key={section.id}>
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {section.questions.map((question, questionIndex) => (
                <div key={question.id} className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm text-gray-600 mt-1">{questionIndex + 1}.</span>
                    <div className="flex-1">
                      <p className="font-medium mb-3">{question.question}</p>

                      {question.type === "boolean" ? (
                        <RadioGroup
                          value={answers[question.id] || ""}
                          onValueChange={(value) => handleAnswerChange(question.id, value)}
                          disabled={showResults}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="verdadero" id={`${question.id}-true`} />
                            <Label htmlFor={`${question.id}-true`}>Verdadero</Label>
                            {showResults && question.correctAnswer === "verdadero" && (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="falso" id={`${question.id}-false`} />
                            <Label htmlFor={`${question.id}-false`}>Falso</Label>
                            {showResults && question.correctAnswer === "falso" && (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            )}
                          </div>
                        </RadioGroup>
                      ) : (
                        <RadioGroup
                          value={answers[question.id] || ""}
                          onValueChange={(value) => handleAnswerChange(question.id, value)}
                          disabled={showResults}
                        >
                          {question.options?.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center space-x-2">
                              <RadioGroupItem value={option} id={`${question.id}-${optionIndex}`} />
                              <Label htmlFor={`${question.id}-${optionIndex}`}>{option}</Label>
                              {showResults && option === question.correctAnswer && (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              )}
                              {showResults && option === answers[question.id] && option !== question.correctAnswer && (
                                <XCircle className="w-4 h-4 text-red-600" />
                              )}
                            </div>
                          ))}
                        </RadioGroup>
                      )}

                      {showResults && (
                        <div className="mt-2 p-2 rounded-md bg-gray-50">
                          <p className="text-sm">
                            <span className="font-medium">Respuesta correcta:</span> {question.correctAnswer}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Tu respuesta:</span> {answers[question.id] || "No respondida"}
                            {isAnswerCorrect(question.id, question.correctAnswer) ? (
                              <span className="text-green-600 ml-2">✓ Correcta</span>
                            ) : (
                              <span className="text-red-600 ml-2">✗ Incorrecta</span>
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-4 justify-center">
        {!showResults ? (
          <Button onClick={calculateScore} disabled={!allQuestionsAnswered()} size="lg">
            Enviar Respuestas
          </Button>
        ) : (
          <Button onClick={resetExam} variant="outline" size="lg">
            Reiniciar Examen
          </Button>
        )}
      </div>

      {!allQuestionsAnswered() && !showResults && (
        <p className="text-center text-sm text-gray-600">Responde todas las preguntas para enviar el examen</p>
      )}
    </div>
  )
}
