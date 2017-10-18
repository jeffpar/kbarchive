---
layout: page
title: "Q263606: BUG: Optimization Bug When Using Array with memset Initializer"
permalink: kb/263/Q263606/
---

## Q263606: BUG: Optimization Bug When Using Array with memset Initializer

	Article: Q263606
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler kbVC600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The C/C++ compiler may generate incorrect code when compiled with the /O2 option
	if an array pointer is initialized with a call to the memset initializer.
	
	RESOLUTION
	==========
	
	Split the array initialization and pointer initialization into two steps as
	shown in the sample code below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug and the workaround:
	
	  //test.cpp
	  // compiler option needed: /O2  OR  /Og /Oi /Ot /Oy
	
	  //#define WORKAROUND /* Uncomment this line for workaround.*/ 
	  #include <stdio.h>
	  #include <string.h>
	
	  typedef struct {signed char s[118];} A;
	  typedef struct {signed char s[12];} B;
	
	  void *memset_surrogate(void *p, int i, size_t s)
	  {
	    return memset(p, i, s);
	  }
	
	  int main()
	  {
	    A a;
	  #ifndef WORKAROUND
	    A *pa= (A *)memset(&a, 0, sizeof(A));
	  #else
	    memset(&a, 0, sizeof(A));
	    A *pa= &a;
	  #endif
	
	    B bs[5];
	    memset_surrogate(bs, -1, sizeof(B));
	    printf("%d\n", pa->s[0]); // should print 0, prints -1
	    return 0;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:6.0
	Issue type        : kbbug
	
	=============================================================================
	
