#include <GLFW/glfw3.h>
#include <iostream>

int main(){
    bool initFlag = glfwInit();
    if (!initFlag){
        std::cerr <<"Cant initialize GLFW \n";
    }
    GLFWwindow * window = glfwCreateWindow(640,480,"helloWorld",NULL,NULL);
     while (!glfwWindowShouldClose(window)){
        glfwSwapBuffers(window);
        glfwPollEvents();
    };
    glfwTerminate();
}
