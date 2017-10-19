---
layout: page
title: "Q191669: PRB: LNK2001: Unresolved External Symbol &#95;&#95;chkesp"
permalink: /kb/191/Q191669/
---

## Q191669: PRB: LNK2001: Unresolved External Symbol &#95;&#95;chkesp

	Article: Q191669
	Product(s): Microsoft C Compiler
	Version(s): WINNT:6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCRT kbVC600
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a project with Visual C++ 6.0, you may get the following linker
	error:
	
	  error LNK2001: unresolved external symbol __chkesp
	
	CAUSE
	=====
	
	The new compiler stack-checking feature requires you to link with the C run-
	time library.
	
	RESOLUTION
	==========
	
	Either link with one of the C run-time libraries or disable the compiler stack
	checking feature (remove /GZ from the compiler switches).
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Sample Code
	-----------
	
	     // test.cpp
	     // compile with: cl /GZ t.cpp /link /nod
	     void f() {}
	     int main ()
	     {
	        f();
	        return 0;
	     }
	
	======================================================================
	Keywords          : kbCompiler kbCRT kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : WINNT:6.0
	Issue type        : kbprb
	
	=============================================================================
	
