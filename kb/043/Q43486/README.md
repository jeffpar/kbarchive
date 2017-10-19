---
layout: page
title: "Q43486: C: Automatic Casting from Near Pointer to Far Pointer"
permalink: /kb/043/Q43486/
---

## Q43486: C: Automatic Casting from Near Pointer to Far Pointer

	Article: Q43486
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 17-MAY-1989
	
	In Microsoft C, the automatic type casting from a near pointer to a
	far pointer that is performed by the compiler will make the segment
	address of the resulting pointer the same as that of DGroup. In those
	cases, no explicit type casting is needed.
	
	Two of the cases of the automatic casting are shown in the following
	sample program:
	
	#include <malloc.h>
	
	void foo (char far *) ;
	void main (void)
	{
	char far *lpChar ;
	char * npChar ;
	lpChar = malloc( 100 );   /* malloc is mapped to _nmalloc,
	                          ** and returns near pointer, automatic type
	                          ** casting is performed with assignment */
	
	foo( npChar ) ;           /* npChar is converted to a far pointer
	                          ** with the segment address to be DS */
	}
	
	void foo (char far * p)
	{
	}
