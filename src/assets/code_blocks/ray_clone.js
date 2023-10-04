const RayCloneCode =
`#include <rayclone.h>

int longRunning(int n){
    return n;
}
REGISTER_REMOTE(longRunning)

int main(){
    std::vector<rayclone::ObjectRef<int>> vals;
    for(int i = 0; i < 10; i++){
        vals.push_back(rayclone::Task(longRunning).Remote(i));
    }
    for(auto res : vals){
        std::cout << rayclone::Get(res) << "\\n";
    }
}`;

export default RayCloneCode;