---
layout: page
title: "Q48732: Format Specifier %p Not Found in Documentation"
permalink: /kb/048/Q48732/
---

## Q48732: Format Specifier %p Not Found in Documentation

	Article: Q48732
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 10-OCT-1989
	
	The format specifier %p was left out of both the QuickC Version 2.00
	written documentation and the on-line help facility included with the
	package. %p is used to display the contents of pointer variables. This
	is useful for debugging programs that use pointers. The pointer should
	be near or far, depending on the memory model. However, the pointer
	size can be overridden with the "N" or "F" attribute, depicting near
	or far, respectively. The following small model program declares two
	pointers (near and far) and prints out their contents with printf:
	
	#include <stdio.h>
	void main(void)
	{
	  int     i    =1;
	  int     *ptr =&i;
	  int far *fptr=(int far *)&i;
	
	  printf("the near pointer: %p    the far pointer: %Fp",ptr,fptr);
	}
