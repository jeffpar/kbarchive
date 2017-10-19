---
layout: page
title: "Q38024: INFO: A Case Where BUFF&#91;&#93; and &#42;BUFF Are Different"
permalink: /kb/038/Q38024/
---

## Q38024: INFO: A Case Where BUFF&#91;&#93; and &#42;BUFF Are Different

	Article: Q38024
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	When the variable buff has been declared in an assembly-language program, such
	as the following:
	
	       .data
	       public buff
	_buff   db 200 dup (0xab)
	       .data ends
	
	there is a difference between the two following C declarations:
	
	  extern unsigned char buff[];
	
	  extern unsigned *buff;
	
	The difference is that the first declaration says there is a block of memory that
	is named buff; the second says there is something called buff that is a
	pointer.
	
	This difference can be seen by referencing buff as follows:
	
	  buff[x]
	
	If buff is declared as an array, the referencing is correct.
	
	However, if buff is declared as a pointer, the referencing is incorrect. The data
	pointed to by buff (ab in this example) is translated into a memory address,
	then x bytes are added to it generating an incorrect reference.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q44463 Difference Between Arrays and Pointers in C
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
