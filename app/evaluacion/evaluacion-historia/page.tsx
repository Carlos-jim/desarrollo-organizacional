"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"

const examData = {
  "title": "Evaluación: Desarrollo Organizacional y Talento Humano",
  "description": "Examen sobre conceptos históricos y el rol del ejecutivo de TH en DO",
  "sections": [
    {
      "id": "seccion1",
      "title": "Sección 1: Historia y Evolución del DO",
      "questions": [
        {
          "id": "q1",
          "type": "boolean",
          "question": "El Desarrollo Organizacional surgió como respuesta a enfoques mecanicistas de gestión.",
          "correctAnswer": "verdadero"
        },
        {
          "id": "q2",
          "type": "multiple",
          "question": "¿Qué década marcó el surgimiento formal del DO como disciplina?",
          "options": [
            "1920s",
            "1950s",
            "1980s"
          ],
          "correctAnswer": "1950s"
        }
      ]
    },
    {
      "id": "seccion2",
      "title": "Sección 2: Métodos de Sensibilización",
      "questions": [
        {
          "id": "q3",
          "type": "boolean",
          "question": "Los laboratorios de sensibilización buscan exponer a los participantes a situaciones controladas de interacción grupal.",
          "correctAnswer": "verdadero"
        },
        {
          "id": "q4",
          "type": "multiple",
          "question": "Los grupos 'T' se enfocan principalmente en:",
          "options": [
            "Entrenamiento técnico",
            "Desarrollo de sensibilidad interpersonal",
            "Automatización de procesos"
          ],
          "correctAnswer": "Desarrollo de sensibilidad interpersonal"
        }
      ]
    },
    {
      "id": "seccion3",
      "title": "Sección 3: Tendencias Actuales",
      "questions": [
        {
          "id": "q5",
          "type": "boolean",
          "question": "La digitalización ha reducido la importancia del DO en las organizaciones modernas.",
          "correctAnswer": "falso"
        },
        {
          "id": "q6",
          "type": "multiple",
          "question": "¿Cuál es una tendencia emergente en DO?",
          "options": [
            "Enfoque en jerarquías rígidas",
            "Gestión del cambio para transformación digital",
            "Reducción de la diversidad organizacional"
          ],
          "correctAnswer": "Gestión del cambio para transformación digital"
        }
      ]
    },
    {
      "id": "seccion4",
      "title": "Sección 4: Rol del Ejecutivo de TH",
      "questions": [
        {
          "id": "q7",
          "type": "boolean",
          "question": "El ejecutivo de TH actúa principalmente como administrador de nómina en procesos de DO.",
          "correctAnswer": "falso"
        },
        {
          "id": "q8",
          "type": "multiple",
          "question": "¿Cuál es el rol principal del ejecutivo de TH en DO?",
          "options": [
            "Agente de cambio",
            "Controlador disciplinario",
            "Observador pasivo"
          ],
          "correctAnswer": "Agente de cambio"
        }
      ]
    },
    {
      "id": "seccion5",
      "title": "Sección 5: Integración Conceptual",
      "questions": [
        {
          "id": "q9",
          "type": "boolean",
          "question": "Los principios del DO de los años 1950 siguen siendo completamente aplicables sin adaptaciones hoy día.",
          "correctAnswer": "falso"
        },
        {
          "id": "q10",
          "type": "multiple",
          "question": "¿Qué combinación representa mejor la evolución del DO?",
          "options": [
            "De individual a grupal a sistémico",
            "De tecnológico a mecánico a digital",
            "De financiero a productivo a comercial"
          ],
          "correctAnswer": "De individual a grupal a sistémico"
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto p-6 space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{examData.title}</CardTitle>
          <CardDescription>{examData.description}</CardDescription>
        </CardHeader>
      </Card>

      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-6">
        {examData.sections.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {section.questions.map((question, questionIndex) => (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: questionIndex * 0.05 }}
                    className="space-y-3"
                  >
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
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
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
    </motion.div>
  )
}
