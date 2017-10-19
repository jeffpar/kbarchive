---
layout: page
title: "Q43998: QuickC Internal Compiler Error: gencode.c, line 389"
permalink: /kb/043/Q43998/
---

## Q43998: QuickC Internal Compiler Error: gencode.c, line 389

	Article: Q43998
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist2.00 | mspl13_c
	Last Modified: 31-MAY-1989
	
	Compiling the program below causes the Microsoft QuickC 2.00 compiler
	to produce the following error message, regardless of memory model or
	optimization level:
	
	   bile.c(7) : fatal error C1001: Internal Compiler Error
	           (compiler file 'gencode.c', line 389)
	           Contact Microsoft Technical Support
	
	The program is as follows:
	
	    /* bile.c -- causes ICE, gencode.c, line 389
	     */
	    char Image;
	
	    void main()
	    {
	        Image = (char huge *)1;
	    }
	
	The compiler will correctly generate a warning about the different
	levels of indirection on the same line as the one causing the ICE. The
	problem can be eliminated by properly declaring Image. Image should be
	declared as follows:
	
	   char huge *Image;
	
	This mistake can be made easily if Image is the second of two
	variables in a declaration, as follows:
	
	   char huge *foo, Image;
	
	This is a declaration of one huge pointer to character and one
	character variable, not two huge pointers to character. The
	declaration of two huge pointers to character is as follows:
	
	   char huge *foo,
	        huge *Image;
	
	Microsoft has confirmed this to be a problem in Version 2.00 We are
	researching this problem and will post new information as it becomes
	available.
