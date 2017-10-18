---
layout: page
title: "Q167748: PRB: Variable Scope in for-statement Extends Beyond Loop"
permalink: kb/167/Q167748/
---

## Q167748: PRB: Variable Scope in for-statement Extends Beyond Loop

	Article: Q167748
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC500 kbVC600
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you declare the same variable in two different for-statements, the following
	error may appear:
	
	  Test.cpp(4) : error C2374: 'i' : redefinition; multiple initialization
	
	CAUSE
	=====
	
	The scope of a variable declared in the initialization part of a "for" loop is
	given local scope, as if it had been declared immediately prior to the
	for-statement.
	
	
	RESOLUTION
	==========
	
	Compile with /Za, Disable Language Extensions. To select this option in
	Developer Studio, select Project, Settings, and then click the C/C++ Tab. Change
	the Category to Customize and select Disable Language Extensions.
	
	If you cannot use the /Za option, you can work around the problem by #defining
	the "for" keyword as follows:
	
	  #define for if(0);else for
	
	MORE INFORMATION
	================
	
	  /* Compile Options Needed to compile without error: /Za */ 
	
	   /* test.cpp */ 
	   void main()  {
	  for (int i=0; i<10; i++)
	     ;
	  for (int i=0; i<15; i++)
	     ;
	   }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangCPP kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
