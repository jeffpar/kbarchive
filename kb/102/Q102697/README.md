---
layout: page
title: "Q102697: PRB: Build Errors Using Precompiled Header in Debugging Lib"
permalink: /kb/102/Q102697/
---

## Q102697: PRB: Build Errors Using Precompiled Header in Debugging Lib

{% raw %}

	Article: Q102697
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC600
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 2.2, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to create a debugging library that uses precompiled headers may fail
	and fatal build errors may be generated. With the 16-bit edition, the CVPACK and
	LINK utilities may generate the following error message:
	
	  CVPACK : fatal error CK1017: cannot find precompiled types file; relink with
	  file.obj
	  LINK : warning LNK4027: CVPACK error
	
	With the 32-bit edition, the LINK utility may generate the following error
	message:
	
	  LINK : fatal error LNK1211: precompiled type information not found;
	  "<filename>" not linked or overwritten
	
	CAUSE
	=====
	
	When you specify the /Yc and /Z7 options on the compiler command line, Microsoft
	C/C++ generates a precompiled header file that contains CodeView debugging
	information. The error occurs only when you store the precompiled header in a
	library, use the library to build an object module, and the source code does not
	refer to any of the functions the precompiled header file defines.
	
	
	RESOLUTION
	==========
	
	There are two methods to work around this situation, as follows:
	
	- Specify the /Yd compiler option switch to add the CodeView information from
	  the precompiled header to each object module. This method is less desirable
	  because it generally produces large object modules that can increase the time
	  required to link the application.
	
	- NOTE: The following work-around is for 32-bit versions only. Specify the
	  /Yl<symbol> compiler option switch, where <symbol> is the name of
	  an arbitrary symbol in the library, when you create a precompiled header file
	  that does not contain any function definitions. This switch directs the
	  compiler to store the debugging information in the precompiled header file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you compile a module with the /Yc and /Yl<symbol_name> option
	switches using the 32-bit edition, the compiler creates a symbol similar to
	__@@_PchSym_@00@...@<symbol_name>, where the ellipsis (...) represents a
	linker generated character string, and stores it in the object module. Any
	source file that you compile with this precompiled header refers to the
	specified symbol, which causes the linker to include the object module and its
	debugging information from the library.
	
	The following code example demonstrates the problem.
	
	Sample Code
	-----------
	
	     /*
	
	      * To demonstrate this problem, perform the following five steps:
	      *
	      * 1. Compile TEST1.C as follows: cl /Yctest.h /Z7 /c TEST1.C
	      * 2. Compile TEST2.C as follows: cl /Yutest.h /Z7 /c TEST2.C
	      * 3. Build a library that contains TEST1.OBJ and TEST2.OBJ as
	      *    follows: lib /out:test.lib test1.obj test2.obj
	      * 4. Compile TEST3.C as follows: cl /Yutest.h /Z7 /c TEST3.C
	      * 5. Link the application as follows:
	      *       link /debugtype:cv /debug:notmapped,full test3.obj test.lib
	      *
	      * To correct this problem, do one of the following:
	      *
	      *   1. 32-bit only)  Compile TEST1.C in step 1 as follows:
	      *        cl /Yctest.h /YlAnyName /Z7 /c TEST1.C
	      *      Then, repeat step 2 through 5.
	      *
	      *   2. Repeat steps 1 through 5, adding the /Yd command line option
	      *      to steps 1, 2, and 4.
	
	      */ 
	
	TEST.H
	------
	
	     #include <stdio.h>
	
	TEST1.C
	-------
	
	     #include "test.h"
	
	TEST2.C
	-------
	
	     #include "test.h"
	
	     void test2func(void)
	     {
	        printf("inside TEST2FUNC...\n");
	     }
	
	TEST3.C
	-------
	
	     #include "test.h"
	
	     void test2func(void);
	
	     void main(void)
	     {
	        printf("inside MAIN...\n");
	     }
	
	Additional query words: 8.00 8.00c 9.00 /YX hdrstop /Fp
	
	======================================================================
	Keywords          : kbCompiler kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbvc100 kbVC220 kbVC410 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVCNET kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.1,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
