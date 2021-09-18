#define TRIG 2
#define ECHO 3
long Tiempo;
float Distancia;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  Tiempo = (pulseIn(ECHO, HIGH)/2);
  Distancia = float(Tiempo * 0.0343);
  Serial.println(Distancia);
  delay(1000);
}
