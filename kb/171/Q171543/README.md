---
layout: page
title: "Q171543: FIX: _getmbp CRT Function Does Not Return Correct Value"
permalink: /kb/171/Q171543/
---

## Q171543: FIX: _getmbp CRT Function Does Not Return Correct Value

	Article: Q171543
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0sp1,5.0sp2,97,97sp1,97sp2
	Operating System(s): 
	Keyword(s): kbCRT kbVC500bug kbVS97bug kbVS97sp1bug kbVS97sp1fix kbVS97sp2bug kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp1 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp2 
	   - Microsoft Visual Studio versions 97, 97sp1, 97sp2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The C Run-time (CRT) Library function _getmbcp is supposed to return 0 if a
	single-byte code page is in use. However, this is not true with the CRT Library
	shipped with Visual C++ 5.0 in Visual Studio 97 Service Pack 1 and Service Pack
	2. The function returns the current code page value irrespective of whether it
	is a single byte or multi byte code page. This behavior breaks existing programs
	that were using this call primarily to query whether a single-byte code page is
	active.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For additional information about , please click the article number(s) below to
	view the article(s) in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The following sample program demonstrates the bug:
	
	  //sample.cpp
	  /* Compiler options: none */ 
	  #include <mbctype.h>
	  #include <stdio.h>
	
	  main()
	  {
	    printf("The return value from _getmbcp is= %d \n", _getmbcp());
	    return 0;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC500bug kbVS97bug kbVS97sp1bug kbVS97sp1fix kbVS97sp2bug kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : WINNT:5.0sp1,5.0sp2,97,97sp1,97sp2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
