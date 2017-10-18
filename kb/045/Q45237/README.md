---
layout: page
title: "Q45237: INFO: Unsigned Characters and Arithmetic Operators"
permalink: kb/045/Q45237/
---

## Q45237: INFO: Unsigned Characters and Arithmetic Operators

	Article: Q45237
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbLangC kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbV
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the sample program below, two unsigned character variables are compared. The
	conditional always evaluates to true, even when x and y are complements. When
	examining the assembly code produced, it appears as though the compiler is
	generating code to compare two unsigned integers, not unsigned characters.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	
	  void main (void)
	  {
	     unsigned char x, y;
	     x = 0;
	     y = 255;
	
	     if (x != (~y))
	         printf ("y is not a complement of x\n");
	     else
	         printf ("y is a complement of x\n");
	  }
	
	The code generated in this case is correct. Operands of unsigned character type
	are promoted to unsigned integer type when using arithmetic operators.
	
	For this sample code to work as intended, cast the "~y" as unsigned character, as
	follows:
	
	  if (x != (unsigned char)(~y))
	      printf ("y is not a complement of x\n");
	  else
	      printf ("y is a complement of x\n");
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbLangC kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
