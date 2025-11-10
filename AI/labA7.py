# Part 1 7th one

import numpy as np
import pandas as pd
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score,classification_report,confusion_matrix

data=load_breast_cancer()
X=data.data
y=data.target

print("Feature names:",data.feature_names[:5],...)
print("Target names:",data.target_names)

X_train,X_test,y_train,y_test=train_test_split(
X,y,test_size=0.3,random_state=42
)

print("Training test size:",X_train.shape)
print("Testing test size:",X_test.shape)

model=LogisticRegression(max_iter=10000)
model.fit(X_train,y_train)

y_pred=model.predict(X_test)

print("Accuracy Score:",accuracy_score(y_test,y_pred))
print("Classification Report:",classification_report(y_test,y_pred))
print("Confusion Matrix:",confusion_matrix(y_test,y_pred))