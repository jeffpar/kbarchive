---
layout: page
title: "Q151499: FIX: Compiler Performs Illegal Sign Conversion Optimization"
permalink: /kb/151/Q151499/
---

## Q151499: FIX: Compiler Performs Illegal Sign Conversion Optimization

	Article: Q151499
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbtool kbVS97sp1fix kbVS97sp2fix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the /Og optimization, or an option that includes it such as /Ox, /O2,
	or /O1, the compiler may incorrectly sign extend a value when performing a
	conversion.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97,
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The following sample demonstrates this bug. As you step through this code in the
	debugger, you will observed that i and j compare as equal when they should not.
	
	Sample Code
	-----------
	
	     int i, j;
	     char c1=-1, c2, c3;
	     bool f()
	     {
	        i = c1 + (unsigned char)c1;
	        j = c1 + c1;
	        if( i == j )  // this should fail
	           return false;
	        else
	           return true;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbVS97sp1fix kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
