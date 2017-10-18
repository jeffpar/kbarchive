---
layout: page
title: "Q68389: INFO: sizeof(char Expression) Same as sizeof(int)"
permalink: kb/068/Q68389/
---

## Q68389: INFO: sizeof(char Expression) Same as sizeof(int)

	Article: Q68389
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 18-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C/C++, expressions involving variables of type "char" are promoted
	to type "int".
	
	MORE INFORMATION
	================
	
	This is ANSI-specified behavior. Below is Section 3.3.7 from the ANSI
	specifications, which details the semantics of the shift operator:
	
	  Semantics
	  The integral promotions are performed on each of the operands. The type of the
	  result is that of the promoted left operand. If the value of the right
	  operand is negative or is greater than or equal to the width in bits of the
	  promoted left operand, the behavior is undefined.
	
	This means that chars are promoted to integers by default. If you really want a
	char result, you must cast the final result.
	
	The ANSI-specified semantics of all operators specify promotion from char to int,
	so the size of any char expression will be the sizeof int. This was also the
	case for Kernighan and Ritchie (K & R) C.
	
	The sizes of the int and long expressions stay the same because no promotion
	takes place.
	
	Note that if int is the same size as long rather than short in this
	implementation, the sizeof both a short expression and a char expression will be
	4, as will be the sizeof both an int and a long expression.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	
	  void main(void)
	  {
	     short si;
	     long li;
	     char sc;
	     unsigned char uc;
	
	     printf("Signed char width: %d\n",
	             sizeof((char)(sc<<1)));          // 1 byte
	
	     printf("Signed char width: %d\n",
	             sizeof(sc<<1));                 // 2 bytes
	
	     printf("Unsigned char width: %d\n",
	             sizeof((unsigned char)uc<<1));  // 2 bytes
	
	     printf("Unsigned char width: %d\n",
	             sizeof(uc<<1));                 // 2 bytes
	
	     printf("Short width: %d\n",
	             sizeof(si<<1));                 // 2 bytes
	
	     printf("Long width: %d\n",
	             sizeof(li<<1));                 // 4 bytes
	  }
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbcode kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
