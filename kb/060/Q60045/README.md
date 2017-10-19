---
layout: page
title: "Q60045: Error in memchr() Definition"
permalink: /kb/060/Q60045/
---

## Q60045: Error in memchr() Definition

	Article: Q60045
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 3-APR-1990
	
	The following text shown on Page 418 of the "Microsoft C Optimizing
	Compiler: Run-Time Library Reference" for Version 5.1 manual,
	regarding the definition of the memchr() function, contains a
	misleading statement that could be confusing for some customers:
	
	     void *memchr(buf,c,count);
	     void *buf;                      Pointer to buffer
	     int c;                  |-----> Character to copy
	     size_t count;           |       Number characters
	                             |
	
	Instead of "Character to copy," the definition of int c should read
	"Character to search for." Memchr() searches for, but does not copy, a
	character in a string.
