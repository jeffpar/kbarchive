---
layout: page
title: "Q115347: PRB: Debugger Cannot Watch Global Constants in C++ Programs"
permalink: /kb/115/Q115347/
---

## Q115347: PRB: Debugger Cannot Watch Global Constants in C++ Programs

{% raw %}

	Article: Q115347
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.1,4.0,4.01,4.1,5.0
	Operating System(s): 
	Keyword(s): kbCodeView kbDebug kbide kbVC
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - Microsoft Visual C++, version 1.0 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.1 
	   - Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On page 17 in chapter 2 of the C++ Tutorial included in Microsoft C/C++, version
	7.0 and Visual C++, version 1.0, it states:
	
	  "Constants declared with const have an advantage over those defined by
	  #define in that they are accessible to a symbolic debugger, making debugging
	  easier."
	
	However, when global constants are used in a C++ program, they cannot be watched
	in a local or watch window with CodeView or the Integrated (IDE) Debugger in
	Visual C++.
	
	RESOLUTION
	==========
	
	The above behavior is by design in the products listed above. In these versions,
	with the exception of CodeView 4.25 for Win32S, only local constants are
	accessible to CodeView and the Visual C++ IDE debugger.
	
	CAUSE
	=====
	
	In Microsoft C++, storage of global constants is optimized for the purpose of
	saving space, therefore no debug information is generated.
	
	MORE INFORMATION
	================
	
	When debugging the following C++ sample program with CodeView, attempting to
	watch the global const a yields the following error:
	
	  A = CXX0030: Error: expression cannot be evaluated
	
	Attempting to watch A using the Visual C++ for Windows version 1.0 or the Visual
	C++ 32-bit Edition version 1.0 or 2.1 IDE Debugger yields a dialog box with the
	following text:
	
	  Cannot watch 'A'.
	
	Attempting to watch A using the Visual C++ 32-bit Edition version 4.0 IDE
	Debugger produces the following in the Watch window:
	
	  A = CXX0017: Error: symbol "A" not found
	
	Sample Code
	-----------
	
	     /* Compile options needed: /Zi /Od
	     */ 
	
	     const int A=100;
	     void main()
	     {
	        int dummy=0;
	        dummy++;
	     }
	
	Additional query words: utilities
	
	======================================================================
	Keywords          : kbCodeView kbDebug kbide kbVC 
	Technology        : kbVSsearch kbAudDeveloper kbVWB
	Version           : :1.0,2.1,4.0,4.01,4.1,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
