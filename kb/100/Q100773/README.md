---
layout: page
title: "Q100773: PRB: No Symbolic Information for Local Variables"
permalink: /kb/100/Q100773/
---

## Q100773: PRB: No Symbolic Information for Local Variables

{% raw %}

	Article: Q100773
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC100 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 05-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Developer Studio integrated debugger may display incorrect values for the
	local variables in an application. This can occur when the application being
	debugged was compiled with optimizations on.
	
	RESOLUTION
	==========
	
	During the debugging process for your application, specify the /Od compiler
	option switch to disable optimizations.
	
	MORE INFORMATION
	================
	
	The C/C++ compilers mentioned above make ample use of registers to store local
	variables. This is particularly true when optimizations are turned on.
	Therefore, information regarding local variable storage is not always available
	to the debugger.
	
	The following code example demonstrates this behavior. If you compile this code
	with optimizations disabled (specify the /Od compiler option switch), the values
	of the local variables in the func1() function are correctly displayed after the
	code calls the func2() function. However, if you compile the code with
	optimizations (specify the /Ox compiler option switch), the values of the same
	local variables do not display correctly until the code executes the return
	statement from func2().
	
	Sample Code
	-----------
	
	     /*
	      * Compile options needed: /Ox
	      */ 
	
	     void func2(int *arg1, int *arg2, int *arg3)
	     {
	        *arg1 = *arg2 = *arg3 = 5;
	     }
	
	     int func1(int arg1)
	     {
	        int local1, local2;
	
	        func2(&arg1, &local1, &local2);
	
	        return arg1 + local1 + local2;
	
	     }
	
	     void main(void)
	     {
	        func1(1);
	     }
	
	Additional query words: vwbdebug vcnt
	
	======================================================================
	Keywords          : kbDebug kbide kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :1.0,2.0,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
