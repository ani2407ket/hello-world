include <GLFW/glfw3.h>

int main(){
    glfwInit();
    GLFWwindow * window = glfwCreateWindow(400,400,"Test", NULL,NULL);
    while (!glfwWindowShouldClose(window)){
        glfwSwapBuffers(window);
        glfwPollEvents();
    }
    glfwTerminate();

}

