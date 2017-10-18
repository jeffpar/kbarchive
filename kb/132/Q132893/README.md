---
layout: page
title: "Q132893: PRB: Exceptions Thrown During Construction Can Orphan Memory"
permalink: kb/132/Q132893/
---

## Q132893: PRB: Exceptions Thrown During Construction Can Orphan Memory

	Article: Q132893
	Product(s): Microsoft C Compiler
	Version(s): 2.0 2.1 4.0 4.2 5.0
	Operating System(s): 
	Keyword(s): kbcode kbCodeGen kbCompiler kbCPPonly kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Memory that is dynamically allocated in a constructor can be orphaned when an
	exception is thrown in the constructor.
	
	CAUSE
	=====
	
	When inside a constructor, the object is partially constructed, so the
	destructor is not called. While automatic data is freed during stack unwinding,
	memory that is dynamically allocated is not properly cleaned up.
	
	RESOLUTION
	==========
	
	Two-phased construction of objects resolves this problem (see the following code
	sample). This way, the object is fully constructed, so when it is deleted,
	cleanup is handled correctly.
	
	Sample Code
	-----------
	
	The following sample code shows both single- and two-phased construction for a
	class.
	
	     /* Compile options needed: /MT /GX
	     */ 
	     // Change the following line into a comment to show the problem:
	     #define TWO_PHASED_CONSTRUCTION
	     // Include the MFC debug memory allocation functions. You will see the
	     // memory leaks reported by MFC when the application terminates when you
	     // run the program in the Visual C++ debugger.
	     #include "afx.h"
	     #define new DEBUG_NEW
	     class A
	     {
	        char *x;
	     public:
	     #ifndef TWO_PHASED_CONSTRUCTION
	        A() // This code doesn[ASCII 146]t clean up.
	        {
	           x = new char[10]; // x will be orphaned.
	           throw int(1);
	        }
	     #else
	        A() // This code cleans up fine.
	        {
	           // Initialize automatic variables here.
	        }
	        void Create()
	        {
	           // Initialize dynamic members here.
	           x = new char[10];
	           throw int(1);
	        }
	     #endif
	        ~A()
	        {
	           delete [] x;
	        }
	     };
	     void main()
	     {
	        A *a;
	        try
	        {
	           a=0;
	           a=new A;
	     // Do memory allocation in Create() when doing two-phased construction.
	     #ifdef TWO_PHASED_CONSTRUCTION
	           a-<Create();
	     #endif
	        }
	        catch(int)
	        {
	           delete a;
	        }
	     }
	
	Additional query words: 9.0 9.1 9.00 9.10
	
	======================================================================
	Keywords          : kbcode kbCodeGen kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 2.0 2.1 4.0 4.2 5.0
	Issue type        : kbprb
	
	=============================================================================
	
