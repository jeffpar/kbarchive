---
layout: page
title: "Q71285: INFO: strtok() Needs No Additional Space to Insert Nulls"
permalink: /kb/071/Q71285/
---

## Q71285: INFO: strtok() Needs No Additional Space to Insert Nulls

{% raw %}

	Article: Q71285
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes it is mistakenly assumed that when the C strtok() function inserts a
	null character ('\0') into the source string at the end of a token, the length
	of the source string increases by this new character. This is not the case
	because an additional character is not actually being inserted. Instead, the
	delimiter that strtok() found to indicate the end of the token is replaced by
	the null character.
	
	Thus, when declaring or allocating the string of tokens, you do not need to make
	allowances for the null characters to be inserted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	
	=============================================================================
	

{% endraw %}
