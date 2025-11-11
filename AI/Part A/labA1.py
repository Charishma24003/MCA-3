# part 1 1st one

import random
responses={
    "hi":["Hii","Heyyy","Hello"],
    "hello":["Hello","Hey","Hello,how can i help you?"],
    "what is your name":["Im just a program","Im chatBot"],
    "bye":["Bye bye","Good Bye","Bye, lets meet tomorrow"]
}

user_name=None
def chatbot_response(user_input):
    global user_name
    user_input=user_input.lower().strip()

    if("my name is"in user_input):
        user_name=user_input.split("my name is")[-1].strip()
        return f"Nice to meet you,{user_name}!"

    if user_name and ("hi" in user_input or "hello" in user_input):
        return f"Hi {user_name},how can I assist you today?"

    for key in responses:
        if key in user_input:
            return random.choice(responses[key])
    return "Im not sure I understand.Could you rephrase?"

print("ChatBot: Type 'bye' to exit")
while True:
    message=input("You:")
    reply=chatbot_response(message)
    print("Bot:",reply)
    if message.lower()=="bye":
        break