class CuirVoiture :
 def __init__(self,cuir,color,type):
  self.cuir = cuir
  self.color = color
  self.type = type

 def __str__(self):
  return self.cuir+' '+self.color+' '+self.type

 def __repr__(self):
  return self.cuir+' '+self.color+' '+self.type