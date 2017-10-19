---
layout: page
title: "Q165684: INFO: Visual C++ 5.0 Readme, Language Issues"
permalink: /kb/165/Q165684/
---

## Q165684: INFO: Visual C++ 5.0 Readme, Language Issues

	Article: Q165684
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Language Issues
	---------------
	
	Member Templates Not Supported by the Compiler Addendums to the __declspec
	Documentation Behavior of In-Constructor Exception Handling Not Correctly
	Documented Size Mismatch for Type bool in Visual C++ 4.2 Programs Built with
	Visual C++ 5.0
	
	MORE INFORMATION
	================
	
	Member Templates Not Supported by the Compiler
	----------------------------------------------
	
	Simple member templates may not generate a compiler error. Use of member
	templates can result in undefined behavior.
	
	Addendums to the __declspec Documentation
	-----------------------------------------
	
	The documentation for the _declspec keyword is missing the following
	information:
	
	Addendum One
	
	The __declspec keywords should be placed at the beginning of a simple
	declaration. __declspec keywords placed after * or & and in front of the
	variable identifier in a declaration will be ignored by the compiler without
	error message or warnings. See the __declspec topic in Language Quick Reference
	for more information about using the __declspec attributes.
	
	Addendum Two
	
	The following three declarations are equivalent:
	
	  #define WINAPI __declspec(nothrow) __stdcall
	
	  void WINAPI test1();
	
	  void __declspec(nothrow) __stdcall test2();
	
	  void __stdcall test3() throw();
	
	Using "void __declspec(nothrow) __stdcall test2();" has the advantage that you
	can use an API definition, such as the illustrated by the #define statement, to
	easily specify nothrow on a set of functions. The third declaration, "void
	__stdcall test3() throw();" is the syntax defined by the C++ standard.
	
	Behavior of In-Constructor Exception Handling Not Correctly Documented
	----------------------------------------------------------------------
	
	If you use the operator new without any extra arguments, and compile with the
	/GX, /EHs, or /EHa option, the compiler will generate code to call operator
	delete if the constructor throws an exception.
	
	If you use the placement new form of the new operator, the form with arguments in
	addition to the size of the allocation, the compiler does not support a
	placement form of the delete operator if the constructor throws an exception.
	
	Example:
	
	     class A {
	
	     public:
	         A(int) { throw "Fail!"; }
	     };
	
	     void test(void)
	     {
	         try {
	             // heap memory pointed to by pa1 will be deallocated
	             // by calling ::operator delete(void*).
	
	             A* pa1 = new A(10);
	
	         } catch (...) {
	         }
	
	         try {
	             // This will call ::operator new(size_t, char*, int).
	             // When A::A(int) does a throw, we should call
	             // ::operator delete(void*, char*, int) to deallocate
	             // the memory pointed to by pa2, but that's something
	             // we don't support yet, so we'll leak memory.
	
	             A* pa2 = new(__FILE__, __LINE__) A(20);
	
	         } catch (...) {
	         }
	     }
	
	Size Mismatch for Type bool in Visual C++ 4.2 Programs Built with Visual
	C++ 5.0
	--------------------------------------------------------------------------------
	
	In Visual C++4.2, the Standard C++ header files contained a typedef that equated
	bool with int. In Visual C++ 5.0, bool is implemented as a built-in type with a
	size of 1 byte. That means that for Visual C++ 4.2, a call of sizeof(bool)
	yields 4, while in Visual C++ 5.0, the same call yields 1. This can cause memory
	corruption problems if you have defined structure members of type bool in Visual
	C++ 4.2 and are mixing object files (OBJ) and/or DLLs built with the 4.2 and 5.0
	compilers.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	
	=============================================================================
	
