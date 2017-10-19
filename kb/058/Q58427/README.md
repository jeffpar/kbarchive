---
layout: page
title: "Q58427: PRB: Changing STDIN Translation Mode from Text to Binary"
permalink: /kb/058/Q58427/
---

## Q58427: PRB: Changing STDIN Translation Mode from Text to Binary

	Article: Q58427
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbprb
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.50 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	In Microsoft C, when a ^Z (CTRL+Z) is entered as part of a string input in
	response to gets() or scanf(), the next line does not prompt for an input.
	
	CAUSE
	=====
	
	Because STDIN is a predefined file pointer opened in text mode, and a ^Z
	character is an end-of-file marker in MS-DOS, the ^Z character automatically
	closes the file pointer. The gets() or scanf() function does not stop to accept
	input from STDIN following the previous input containing a ^Z character.
	
	RESOLUTION
	==========
	
	To work around this problem, change the translation mode of STDIN from text mode
	to binary mode. Because the ^Z character is not translated as an end-of-file
	character in binary mode, the gets() from the following example accepts input
	only following a ^Z from STDIN after the translation.
	
	MORE INFORMATION
	================
	
	To change STDIN from text mode to binary mode, use the setmode() run-time
	function to change the translation mode. The following code demonstrates this
	behavior, and includes the setmode() function to show how to change STDIN from
	text mode to binary mode. Remove the comment delimiters to observe the
	difference in the program's behavior after adding the setmode() function.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	  #include <string.h>
	  #include <fcntl.h>
	
	  void main (void)
	  {
	     char str1[20];
	
	  /* if( setmode ( fileno ( stdin ), O_BINARY ) == -1 )
	            perror ( "Cannot set stdin to binary mode" );
	     else
	            printf ( "stdin mode successfully set to binary\n" );
	  */ 
	     do {
	            printf ( "Enter a string : " );
	            gets ( str1 );
	     } while ( strcmp( str1,"n" && strcmp( str1, "\n\r") );
	
	  }
	
	Compile the above code and run the program. If you enter a string and then press
	the ENTER key, the program will loop and prompt for another string. However, if
	you enter a ^Z character, you will see that the program doesn't perform as you
	would expect.
	
	Now, uncomment the if-else clause. Recompile the program and run it. Input that
	includes a ^Z character is now accepted without infinite looping.
	
	Additional query words: 1.00 1.50 2.00 5.10 6.00 6.00a 6.00ax 7.00
	
	======================================================================
	Keywords          : kbCRT kbVC kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
