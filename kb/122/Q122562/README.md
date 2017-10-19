---
layout: page
title: "Q122562: DOC: _set_se_translator and set_terminate Help Info Incorrect"
permalink: /kb/122/Q122562/
---

## Q122562: DOC: _set_se_translator and set_terminate Help Info Incorrect

	Article: Q122562
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbCompiler kbCPPonly kbVC
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Quick Reference Help and Books Online both state that the
	_set_se_translator() and set_terminate() functions return a pointer to their
	argument. In fact, they return a pointer to the previous translator or terminate
	function respectively.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in the documentation of
	Microsoft Visual C++ 4.0.
	
	MORE INFORMATION
	================
	
	Annotate the Books Online and the Quick Reference Help to include the correct
	documentation. For the _set_se_translator help or Books Online:
	
	1. Choose Annotate from the Edit menu.
	
	2. Enter the following text:
	
	  " The return value is incorrectly documented. _set_se_translator() returns a
	  pointer to the previous translator function." (without the quotation marks)
	
	3. Click the Save button.
	
	For the set_terminate function, repeat the above steps using the following text:
	
	- The return value is incorrectly documented. set_terminator() returns a
	  pointer to the previous terminator function.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0
	
	=============================================================================
	
