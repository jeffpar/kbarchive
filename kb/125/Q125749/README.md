---
layout: page
title: "Q125749: PRB: Cause of the R6025 Run-Time Error"
permalink: /kb/125/Q125749/
---

## Q125749: PRB: Cause of the R6025 Run-Time Error

	Article: Q125749
	Product(s): Microsoft C Compiler
	Version(s): 1.0 1.5 1.51 1.52 2.0 2.1 4.0 5.
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbCPPonly kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The C++ program fails, and reports the following run-time error:
	
	  runtime error R6025
	  - pure virtual function call
	
	CAUSE
	=====
	
	This error occurs when your application indirectly calls a pure virtual member
	function in a context where a call to the function is not valid. In most cases,
	the compiler detects this and reports the error when building the application.
	But depending on how your code is written, sometimes the problem is detected
	only at run-time.
	
	The error occurs when you indirectly call a pure virtual function within the
	context of a call to the constructor or destructor of an abstract base class.
	This is illustrated in the sample code below, along with some more description.
	
	RESOLUTION
	==========
	
	Calling a pure virtual function is a programming error, so you need to find the
	call to the pure virtual function and rewrite the code so it is not called.
	
	One way to find a call to a pure virtual function is to replace the pure virtual
	function with an implementation that calls the Windows API function
	DebugBreak(). When using the debugger, DebugBreak() will cause a hard-coded
	breakpoint. When the code stops running at this breakpoint, you can view the
	callstack to see where the function was called.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For more information, refer to the "C Run-Time Errors R6002 through R6025"
	chapter of the "Build Errors" book included with Visual C++ 32-bit Edition,
	version 4.0, Books Online or search the Books Online for "R6025."
	
	NOTE: The R6025 error is not documented in the manuals or online help included
	with Visual C++, versions 2.x or below. However, it is briefly discussed in Part
	3 of the README.WRI file shipped with Visual C++ version 2.0.
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     class A;
	
	     void fcn( A* );
	
	     class A
	     {
	     public:
	         virtual void f() = 0;
	         A() { fcn( this ); }
	     };
	
	     class B : A
	     {
	         void f() { }
	     };
	
	     void fcn( A* p )
	     {
	         p->f();
	     }
	
	     // The declaration below invokes class B's constructor, which
	     // first calls class A's constructor, which calls fcn. Then
	     // fcn calls A::f, which is a pure virtual function, and
	     // this causes the run-time error. B has not been constructed
	     // at this point, so the B::f cannot be called. You would not
	     // want it to be called because it could depend on something
	     // in B that has not been initialized yet.
	
	     B b;
	
	     void main()
	     {
	     }
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbCPPonly kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : 1.0 1.5 1.51 1.52 2.0 2.1 4.0 5.
	Issue type        : kbprb
	
	=============================================================================
	
