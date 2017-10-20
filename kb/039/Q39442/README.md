---
layout: page
title: "Q39442: DOCERR: asub and ctest in MASM Programmer's Guide"
permalink: /kb/039/Q39442/
---

## Q39442: DOCERR: asub and ctest in MASM Programmer's Guide

{% raw %}

	Article: Q39442
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a documentation error on Page 91 of the "Microsoft Mixed Language
	Programming Guide" for Microsoft C, FORTRAN, and MASM. In figure 6.7, the
	assembly procedure "asub" should be defined as
	
	  _asub PROC
	
	not as follows:
	
	  PROC asub
	
	Also, the call to "ctest" should appear as
	
	  call _ctest
	
	not as follows:
	
	  call ctest
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	
	=============================================================================
	

{% endraw %}
