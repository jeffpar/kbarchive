---
layout: page
title: "Q67082: INFO: String Constants May Be Interpreted as Trigraphs in C"
permalink: kb/067/Q67082/
---

## Q67082: INFO: String Constants May Be Interpreted as Trigraphs in C

	Article: Q67082
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To maintain compatibility with other systems, a series of ANSI- mandated
	trigraphs have been implemented beginning with Microsoft C version 6.0 and
	Microsoft QuickC version 2.5. The addition of these trigraphs may require that
	changes be made to code that was previously written for other versions of C that
	do not support these codes. The sample code below illustrates one such instance
	where this is necessary. The trigraphs are listed on page 424 of the Microsoft C
	"Advanced Programming Techniques" version 6.0 manual.
	
	MORE INFORMATION
	================
	
	Trigraphs are three-character combinations that are used to represent certain
	symbols in the C language that are not available in all character sets. For
	example, some keyboards or character sets do not have the opening and closing
	brace characters, "{" and "}". These characters are essential to writing a C
	program; therefore, someone without use of these characters can use the
	trigraphs "??<" and "??>" in place of the braces.
	
	The compiler translates the three-character trigraph combinations into single
	characters at compile time. If a sequence of characters in a constant string
	matches a trigraph pattern, the compiler will replace the three characters with
	the single corresponding character that the trigraph represents.
	
	This situation may manifest itself when using functions, such as
	_dos_findfirst(), that may use these characters in a constant to represent
	wildcard characters when doing a file search. The workaround is to break up the
	constant with double quotation marks, as shown below. This procedure will cause
	the compiler to concatenate the two strings without first translating the
	characters.
	
	Sample Code
	-----------
	
	     #include <stdio.h>
	
	     void main( void)
	     {
	        /* '??-' in the following line will be replaced by a '~' */ 
	
	        printf( "??-Hello\n" );
	     }   
	
	To prevent the compiler from misinterpreting the "??-" character sequence as an
	unintended trigraph, you could replace the printf line above with the following
	line:
	
	     printf( "??""-Hello\n" );
	
	Notice that the only difference is the double quotation marks used to break up
	the string into two substrings, thus eliminating the trigraph pattern.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
