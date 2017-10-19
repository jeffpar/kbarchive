---
layout: page
title: "Q148789: FIX: No Error Given for Non-static Callback Member Function"
permalink: /kb/148/Q148789/
---

## Q148789: FIX: No Error Given for Non-static Callback Member Function

	Article: Q148789
	Product(s): Microsoft C Compiler
	Version(s): 4.1 4.2
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbCompiler kbVC410bug kbVC420bug kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler does not generate any compiler errors when a non-static member
	function is used as a callback function and the calling convention for the
	function is explicitly specified. For example, the sample code shown in this
	article will not cause the compiler to generate any compiler errors although it
	should.
	
	Debugging the non-static member callback function will reveal the stack is
	corrupted. Any parameters to the function, including the implied this pointer
	may be invalid.
	
	RESOLUTION
	==========
	
	By design, a member function used as a callback function must be static. A
	non-static member function cannot be used as a callback function. You can also
	use file scope global functions for callback functions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Using a non-static member function as a callback function should trigger the
	compiler to generate the following error when the callback function is invoked:
	
	  test.cpp(line#): error C2643: illegal cast from pointer to member.
	
	In C++ every callback function has its own prototype, which determines the
	parameters that the calling function can pass to the function. However, C++
	member functions have a hidden parameter known as the 'this' pointer. C++ is
	able to associate a function with a particular instance of an object by means of
	the 'this' pointer. Therefore, if a callback function, defined as a non-static
	member function, is called, it will expect a particular instance of an object.
	On the first line of the Test::Test_Func() member function in the following
	sample code, there is no object instance when the callback function is invoked,
	so a C2643 compiler error should be generated.
	
	For more information on writing C++ callback functions, please see the article
	"Calling All Members: Member Functions as Callbacks" on the Microsoft
	Development Network (MSDN) CD-ROM.
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	     /* Compile options needed: default console application
	     */ 
	     #include <stdio.h>
	     typedef void (__cdecl *lpCallback)();
	     void Function1(lpCallback)
	     {
	     }
	     class Test
	     {
	      public:
	        void _cdecl BadCallBack();       // Non-static callback function
	        static void _cdecl GoodCallBack(); // Static callback function
	        void Test_Func();
	     };
	     void Test::Test_Func()
	     {
	       Function1(BadCallBack); // Line 20 : compiler doesn't generate C2643
	       Function1(GoodCallBack);
	     }
	     void Test_Func()
	     {
	       Function1(Test::BadCallBack);  // Compiler correctly generates C2643
	       Function1(Test::GoodCallBack);
	     }
	     void main()
	     {
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbProgramming kbCompiler kbVC410bug kbVC420bug kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
