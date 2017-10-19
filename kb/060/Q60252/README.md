---
layout: page
title: "Q60252: INFO: Initializing Bitfields as Integers in C"
permalink: /kb/060/Q60252/
---

## Q60252: INFO: Initializing Bitfields as Integers in C

	Article: Q60252
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C, you can initialize the values of an entire bitfield structure as
	an integer in several ways:
	
	- Declare the bitfield structure as part of a union with an integer. (This is
	  the preferred method).
	
	- Use an integer pointer by setting the pointer to the address of the structure
	  and then changing what the pointer points to.
	
	- Enforce the bitfield type constraints to get a copy of the bitfield into an
	  integer variable.
	
	For examples of these three methods, see below.
	
	MORE INFORMATION
	================
	
	In Microsoft C, bitfields are stored in word-sized blocks with the least
	significant bit representing the first bit of the bitfield. For example, the
	bitfields in bitstruct, defined below in the example, are stored as follows:
	
	          <  p4   > <  p3   > < p2> <p1>
	       |?|?|?|?|?|?|?|?|?|?|?|?|?|?|?|?|
	
	Assigning the integer 0x4c to this structure results in the following bit
	pattern:
	
	       |0|0|0|0|0|0|0|0|0|1|0|0|1|1|0|0|
	
	The bitfields are given the following respective values:
	
	  p1=0 p2=3 p3=2 p4=0
	
	If the number of bits needed for a bitfield structure exceeds 16 in code compiled
	for MS-DOS or Windows, words will be added as needed to provide room for the
	structure with no single bitfield crossing a word boundary. Microsoft C/C++,
	32-bit Edition, stores bitfield structures in double word values. If the field
	requires more than 32 bits, the compiler uses additional double words as
	needed.
	
	NOTE: There is no "standard" for storing bitfields in memory; therefore, any
	program that depends on a particular storage method is not portable to systems
	that use a different method.
	
	Sample Code
	-----------
	
	  struct strtype
	     {
	     unsigned p1:2;
	     unsigned p2:3;
	     unsigned p3:5;
	     unsigned p4:5;
	     } bitstruct;
	
	  union untype
	     {
	     struct strtype un_bitstruct;
	     unsigned bit_integer;
	     } bitunion;
	
	  unsigned *intptr;
	  unsigned intgr;
	
	  void main(void)
	  {
	     /*  Using the bitfield structure only */ 
	
	        /* Set the pointer to address of bitfield */ 
	     intptr = (unsigned *)&bitstruct;
	
	        /* Change the bitfield */ 
	     *intptr = 0x4c;
	
	        /* Get the new value */ 
	     intgr = *(unsigned *)&bitstruct;
	
	     /* Using an union makes this much easier (syntactically) */ 
	
	        /* Set the pointer */ 
	     intptr = &bitunion.bit_integer;
	
	        /* Change the bitfield */ 
	     bitunion.bit_integer = 0x4c;
	
	        /* Get the new value */ 
	     intgr = bitunion.bit_integer;
	  }
	
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbcode kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
