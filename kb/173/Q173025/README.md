---
layout: page
title: "Q173025: FIX: /Og Causes C1001 with Member Lookup in an Infinite Loop"
permalink: /kb/173/Q173025/
---

## Q173025: FIX: /Og Causes C1001 with Member Lookup in an Infinite Loop

{% raw %}

	Article: Q173025
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
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'E:\utc\src\\P2\main.c', line 379)
	
	RESOLUTION
	==========
	
	This internal compiler error can be avoided by using the volatile keyword. In
	the example below, declaring the local variable, pB, as volatile B* pB instead
	of B* pb, will work around the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Sample
	------
	
	     // compile options: /Og /c
	     struct A {
	        int i;
	     };
	     struct B {
	        struct A * pA ;
	        int j ;
	     };
	     void f()
	     {
	        //volatile //uncomment the volatile keyword for workaround
	        B * pB =0;
	        for (;;)
	        {
	           pB->j = pB->pA->i++ ;
	        }
	     }
	
	Additional query words: ICE
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbVC500bug kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : WINNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
