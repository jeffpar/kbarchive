---
layout: page
title: "Q143081: PRB: Ambiguous Msg If Function Template Return Type Omitted"
permalink: /kb/143/Q143081/
---

## Q143081: PRB: Ambiguous Msg If Function Template Return Type Omitted

	Article: Q143081
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Given a function template, if the return type is omitted, the error that results
	is a syntax error on the semicolon preceding the closing brace of the function.
	
	  minmax.cpp(4) : error C2059: syntax error : ';'
	
	RESOLUTION
	==========
	
	Specify a return type for the function template.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In C++, it is an error for a function to be declared without a return type. This
	is in compliance with the proposed ANSI C++ specification (ref. ARM, section
	7.1.1).
	
	Sample Code
	-----------
	
	      /* Compile options needed: /c */ 
	
	     // This Min is in error (no return type is specified)
	     template <class X> Min (X &t1, X &t2) {
	        if (t1<t2) return t1;
	        return t2;
	     } //the error message appears for this line
	
	     //This Min is correct
	     template <class X> X& Min (X &t1, X &t2) {
	        if (t1<t2) return t1;
	        return t2;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
