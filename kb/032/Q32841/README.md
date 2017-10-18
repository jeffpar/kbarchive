---
layout: page
title: "Q32841: INFO: How Bitfields Are Stored in Memory"
permalink: kb/032/Q32841/
---

## Q32841: INFO: How Bitfields Are Stored in Memory

	Article: Q32841
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 28-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application developed with one of the Microsoft compilers above stores
	bitfields from low memory to high memory. For example, consider the following
	declaration:
	
	  struct x {
	     unsigned field_one:3;
	     unsigned field_two:9;
	     unsigned field_three:5;
	  };
	
	Compiled with a 16-bit compiler, the above code stores field_one in bits 0- 2 of
	the first word, field_two in bits 3-11 of the same word, and field_three in bits
	0-4 of the next word (because the field cannot fit in the remaining four bits of
	the first word and bit fields do not cross byte boundaries). Compiled with a
	32-bit compiler, the same code stores the struct in the 17 least significant
	bits of a word.
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
