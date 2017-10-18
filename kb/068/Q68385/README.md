---
layout: page
title: "Q68385: PRB: Compiler Lacks Warnings for Options Incompatible with /u"
permalink: kb/068/Q68385/
---

## Q68385: PRB: Compiler Lacks Warnings for Options Incompatible with /u

	Article: Q68385
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft C/C++ compiler, the /u compiler option turns off the definition
	of all predefined identifiers. Therefore, other compiler options that implicitly
	define identifiers are incompatible with /u. Nevertheless, no warnings or errors
	are generated if an option incompatible with /u is specified.
	
	For example, the /J option changes the default char type from signed char to
	unsigned char and implicitly defines the macro _CHAR_UNSIGNED. If both /u and /J
	are specified on the same command line, the default char type for that
	translation unit will be unsigned char but _CHAR_UNSIGNED will not be defined.
	Moreover, the compiler issues no warning, not even at warning level 4, that /u
	will undefine those macros defined by /J.
	
	CAUSE
	=====
	
	This is expected behavior. The /U (undefine) option turns off the definition of
	an single identifier already defined for the preprocessor. The /u option turns
	off every defined identifier. Both the /U and /u options apply to predefined
	names and user defined ones.
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
