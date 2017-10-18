---
layout: page
title: "Q38728: HOW TO: Initilize Large Character Arrays"
permalink: kb/038/Q38728/
---

## Q38728: HOW TO: Initilize Large Character Arrays

	Article: Q38728
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbHOWTO
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A common problem in C programming is initializing a large character array. There
	are several ways of doing this, as well as several potential problems.
	
	Method 1 -- String Literals
	---------------------------
	
	One method of initializing character arrays is to use a character string literal.
	The minimum limit allowed by ANSI for a character string literal after
	concatenation is 509 characters. The limit in early versions of Microsoft C/C++
	was between 512-2048 characters depending on the specific version of the
	compiler. Because of the limit on the length of a string literal, you cannot
	initialize character arrays longer than these limits with this method. (These
	limits include the final null character of a C "string." Thus the statement char
	a[] = "12"; results in a 3-element array.)
	
	Because there is also a limit on the line length in most editors, you normally
	cannot directly put this many characters in a string literal. The compiler will
	concatenate a series of quoted strings into a single string, however, so the
	declaration
	
	  char a[] = "a"
	             "b";
	
	is the same as:
	
	  char a[] = "ab";
	
	This allows placing large literal initializers into the code as shown below. This
	method runs into the compiler limit.
	
	  char stuff[] =
	     "xxx...xxx"
	         ...
	     "xxx...xxx";
	
	(The ANSI standard states that strings separated only by white space are
	automatically concatenated.)
	
	Method 2 -- Character Initializers
	----------------------------------
	
	The following can be used:
	
	  char stuff [] =
	     { 'a', ...
	            ...
	       ... 'z' };
	
	However, such an initializer is tedious to type. If using this method, write a
	program that will read a data file and output the proper initializer.
	
	Method 3 -- Multidimensional Arrays
	-----------------------------------
	
	  char stuff[][10] =  {
	     "0123456789",
	     ...
	     "0123456789"  };
	
	The value 10 is not important EXCEPT that it must match the actual length of the
	string constants. If any of the constants are shorter than the length specified,
	the end of that row will be padded out with zero bytes. If any are longer, the
	extra characters will be thrown away. This results in a two dimensional array.
	Another pointer can be used to access the following in almost any method
	desired:
	
	     char *stuffptr = (char *) stuff;
	
	This method seems to be the most convenient. The big problem with using a pointer
	to try and address the array as a single dimensional array is that the extra
	null characters make counting difficult, particularly if all the initializer
	strings are not the same length. Thus stuffptr[97] may not access the element
	you expect unless you count very carefully.
	
	Method 4 -- Assembly Modules
	----------------------------
	
	The array can also be defined in MASM and linked to your C program. In MASM, once
	the correct segment and public definitions are done, write the following:
	
	  stuff   db      "abcdefghijkl"
	          db      "morestuff"
	          ...
	          db      "laststuff"
	
	In C, access the array with the following:
	
	  extern char stuff[];   /*    char * stuff;   will NOT work    */ 
	
	Method 5 -- Read from a File
	----------------------------
	
	Another method is to read the values into the array at run time from a data file.
	If the file is read in large blocks (for example, using read or fread), the I/O
	will be quite fast. This method also has the advantage that the initialization
	string can be changed without having to change and recompile the code.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbHOWTOmaster 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
