---
layout: page
title: "Q122410: DOC: pow(0,0) Function Not Documented"
permalink: /kb/122/Q122410/
---

## Q122410: DOC: pow(0,0) Function Not Documented

	Article: Q122410
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 23-JUL-2001
	
	2.00
	WINDOWS NT
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The return value of the pow() function, which computes the value of x raised to
	the y power, is not documented in the case of pow(0,0). In this case, the pow()
	function returns 1.
	
	MORE INFORMATION
	================
	
	The behavior of pow(0,0) conforms to the proposed NCEG (Numerical C Extensions
	Group) standard. See NCEG draft 92-014, F.4.3 for more information. The
	documents were corrected in Microsoft Visual C++, version 4.0.
	
	Additional query words: 2.00 4.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVCsearch kbAudDeveloper kbVC200
	
	=============================================================================
	
