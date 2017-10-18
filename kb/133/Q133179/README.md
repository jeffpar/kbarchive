---
layout: page
title: "Q133179: BUG: Compiler Fails Syntax Check of Extra Comma in enum List"
permalink: kb/133/Q133179/
---

## Q133179: BUG: Compiler Fails Syntax Check of Extra Comma in enum List

	Article: Q133179
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC400bug kbVC500bug kbVC600bug kbDSupport
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 2.2, 4.0, 4.1, 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler syntax checker does not detect the presence of a trailing comma in
	an enum list declaration.
	
	RESOLUTION
	==========
	
	Do not use a comma at the end of an enum list declaration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	An extra comma at the end of an initializer in braces as in the following is
	allowed, however, it should not be allowed in enum lists:
	
	  { ... , },
	
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	     /* Compile options needed: None
	     */ 
	
	     enum enmX { ka =0, kb = 1, };   // No error or warning in this line
	     void main(void){}
	
	
	Additional query words: 8.00 8.0 8.00c 8.0c 9.00 9.0 9.10 9.1 9.20 9.2 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbVC400bug kbVC500bug kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
