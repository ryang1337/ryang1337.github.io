const content =
`
# Overview
Ray Clone is the product of my curiosity in both distributed computing as well as the
infrastructure that supports large scale machine learning. It is a simplified and
barebones C++ implementation that I created to help me better understand the architecture
of something as complex as Ray. For this project, I heavily referenced the Ray [white paper](https://docs.google.com/document/d/1tBw9A4j62ruI5omIJbMxly-la5w4q_TjyJgJL_jN2fI/preview#heading=h.iyrm5j2gcdoq)
V2 in addition to the Ray [source code](https://github.com/ray-project/ray) and *Learning Ray*
by Max Pumperla, Edward Oakes, and Richard Liaw. If you don't know what Ray is, I suggest
checking out the [docs](https://docs.ray.io/en/latest/index.html).
\n &nbsp;

The main features that Ray Clone supports are only a subset of the Ray Core library. This consists of
Task creation, Remote function calls on Tasks, Get function calls on the result of Remote calls, and
ObjectRefs that represent the result of the asynchronous Remote calls. Higher level components such
as the Raylet and GCS were omitted for the sake of reducing the complexity of this project.
\n &nbsp;

# Implementation
Behind the scenes, there are a few things happening. First, when a user defines a function to be
executed as a Task, it is added to a map that maps the function to its name. This name, along with
the arguments of the function which are serialized by msgpack, is what is passed to worker processes
to describe how to execute the function remotely. The functions themselves are passed to worker processes
through the use of DLLs.
\n &nbsp;

When a Task is executed, it is first sent to a scheduler that is determining which worker node the
Task should be executed on. The current implementation is using a simple round robin scheduler, since
I did not add support for obtaining a worker nodes resource utilization. The scheduler creates the
TaskSpec which defines the Task to be executed in a serializable way. This is then sent to a gRPC Client
which sends an RPC to the receiver. The receiver deserializes the TaskSpec and executes the specified
function and returns the result. While the client is waiting for the response, it initially creates
an ObjectRef, which is essentially a future, for the asynchronous result. In the meantime, the user can execute other
computations and eventually call Get on the ObjectRef, which will block until the result is obtained.
\n &nbsp;

# Conclusion
This project only scratched the surface of what is truly a complex and intricate system. However, I gained an
immense amount of knowledge from working on this, from how large codebases are written in modern C++
(yay move semantics!), to understanding different libraries like boost::DLL, boost::asio, and gRPC,
to honing my skills with distributed computing. I had lots of fun designing and implementating such a
compex system, and I believe this was a worthwhile experience that increased my expertise with
distributed computing, machine learning infrastructure, and modern C++.
\n &nbsp;

If you're intereseted, you can view the source code [here](https://www.github.com/ryang1337/ray-clone)
`

export { content }