---
layout: page
title: "Q172992: FIX: /Og Causes C1001 While Looping"
permalink: /kb/172/Q172992/
---

## Q172992: FIX: /Og Causes C1001 While Looping

	Article: Q172992
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbVC500bug kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling code similar to the code in the sample below may cause the following
	error to be generated:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file
	  'E:\utc\src\\P2\main.c', line 379)
	
	RESOLUTION
	==========
	
	One way to work around the C1001 error is to correct the apparent programming
	error in the sample code below. Notice the check of p==0 in the if statement.
	The code that follows will cause an access violation if executed. Changing the
	check to p!=0 will cause the compiler to not generate the C1001 error and allow
	the code to compile. Another workaround that preserves the apparently incorrect
	algorithm is to introduce a local integer that holds the result of the
	comparison of p to zero. Use this local integer in the if statement instead of
	the actual comparison.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For additional information about the Visual Studio 97 Service Pack 3, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Sample
	------
	
	     // compile options: /Og /c
	     int f( int * p )
	     {
	        int i = 1;
	        // int i2 = (p==0); // uncomment these 2 lines and
	        // if( i2 )         // 
	        if( p == 0 )        // comment this one for workaround
	        {
	           while( i && *p != 0 )
	           {
	              i = *p++ == 3;
	           }
	        }
	        return i;
	     }
	
	Additional query words: ICE
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbVC500bug kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : WINNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
