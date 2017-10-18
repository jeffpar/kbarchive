---
layout: page
title: "Q51327: INFO: strtok(): C Function -- Documentation Supplement"
permalink: kb/051/Q51327/
---

## Q51327: INFO: strtok(): C Function -- Documentation Supplement

	Article: Q51327
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5;
	WINDOWS NT:1.0,2.0,4.0,5.0
	
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C for OS/2 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C, the strtok() function takes two strings as arguments. The first
	is a series of zero or more tokens separated by delimiters defined by the second
	string. The first call to strtok() returns a pointer to the first token in the
	first argument. To get the next token in the original string, a call to strtok()
	must be made with NULL as the first argument, which tells strtok() to search for
	the next token in the previous token string.
	
	Keep the following information in mind when using strtok():
	
	- strtok() will replace a delimiter in the original string with a NULL each
	  time the function is called using the same string, so the original string is
	  modified by the use of strtok().
	
	- The second argument to strtok() can be changed at any time to a different
	  delimiter.
	
	- Only single characters are considered to be delimiters.
	
	MORE INFORMATION
	================
	
	On the first call to strtok(), the function searches the string argument given
	as the first parameter for any token delimiter defined in the second string
	argument. Any further call to strtok() with NULL as the first argument will
	return a pointer to the next token in the original string. The following sample
	program from page 603 of the "Microsoft C Optimizing Compiler: Run-Time Library
	Reference" manual for version 5.1 shows how strtok() searches a token string:
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <string.h>
	  #include <stdio.h>
	
	  char string[] = "a string,of ,,tokens";
	  char *token;
	
	  void main(void)
	  {
	          token = strtok(string," ,"); /*There are two delimiters here*/ 
	          while (token != NULL){
	                  printf("The token is:  %s\n", token);
	                  token = strtok(NULL," ,");
	          }
	  }
	
	The output of this program is as follows:
	
	- The token is: a
	
	- The token is: string
	
	- The token is: of
	
	- The token is: tokens
	
	The following is a sample representation of the area in memory around the token
	pointer during execution of the above program. Note the replacement of the
	delimiter with a NULL character each time a token is found:
	
	  -------------------------------------------------------------
	  |a |  |s |t |r |i |n |g |, |o |f |  |, |, |t |o |k |e |n |s |
	  -------------------------------------------------------------
	  This is the original string before the first call to strtok().
	
	  -------------------------------------------------------------
	  |a |\0|s |t |r |i |n |g |, |o |f |  |, |, |t |o |k |e |n |s |
	  -------------------------------------------------------------
	   ^----- Token will point here on the first call.
	
	  -------------------------------------------------------------
	  |a |\0|s |t |r |i |n |g |\0|o |f |  |, |, |t |o |k |e |n |s |
	  -------------------------------------------------------------
	         ^------ Token will point here on the second call.
	
	  -------------------------------------------------------------
	  |a |\0|s |t |r |i |n |g |\0|o |f |\0|, |, |t |o |k |e |n |s |
	  -------------------------------------------------------------
	                              ^----- Token will point here on
	                                     the third call.
	
	                               (and so on)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
