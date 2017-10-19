---
layout: page
title: "Q31448: Array Index Multiplication with Integers Causes Link Error"
permalink: /kb/031/Q31448/
---

## Q31448: Array Index Multiplication with Integers Causes Link Error

	Article: Q31448
	Product(s): See article
	Version(s): 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | TAR77788 | mspl13_c
	Last Modified: 16-JUN-1988
	
	When the following program is compiled and linked, the linker
	generates the error "L2029 -unresolved external for the variable
	_arr." However, the array appears to be declared legally. The
	following code generates the error:
	
	   char huge arr[256*512];
	   main(){}
	
	  The problem occurs because the multiplication for the array index is
	done with integers and the result of the multiplication is too large
	to fit in an integer. This will result in the array index being 0
	(zero). Because of this array, the following declaration
	
	   char huge arr[256*512];
	
	is equivalent to the following declaration:
	
	   char huge arr[0];
	
	   The second declaration in turn, is equivalent to the following
	declaration:
	
	   char huge arr[];
	
	   This type of declaration will cause the compiler to generate an
	explicit external reference for the array arr and force the linker to
	look for the variable arr.
	   To solve this problem, do the multiplication for the array index
	with long integers by declaring one or both of the integer constants
	as long. The following is a code example:
	
	   char huge arr[256L*512];
