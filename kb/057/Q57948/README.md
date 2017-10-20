---
layout: page
title: "Q57948: INFO: Escape Character Erases First Characters in gets() String"
permalink: /kb/057/Q57948/
---

## Q57948: INFO: Escape Character Erases First Characters in gets() String

{% raw %}

	Article: Q57948
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	In Microsoft C for MS-DOS and Windows NT, if you enter the escape character
	(ASCII 1Bh) from the keyboard (console) into a string that gets(), cgets(), or
	fgets() is reading, all the string previously read in is erased. The string
	pointer is reset so that characters following the escape character are read into
	the beginning of the string. This is consistent with the action taken by the
	operating system to parse the input line. However, if the escape character is
	input from a file by redirection, the entire string, including the escape
	character, will be read into the string.
	
	MORE INFORMATION
	================
	
	Sample Code #1
	--------------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <conio.h>
	  #include <stdio.h>
	
	  char buf[22];
	  char *result;
	
	  void main(void)
	  {
	       int i;
	       buf[0] = 20;
	
	       printf("Enter your text: \n");
	       result = gets(buf);
	
	       printf ( "Resulting String: %s\n", result );
	       for( i = 0; i < 20; i ++ )
	       {
	            printf("Buf[%2d] = %c (char)\n", i, buf[i]);
	       }
	  }
	
	Enter the following string as a test:
	
	  abcdef<esc>ghijk
	
	Note that the resulting string is output as:
	
	  ghijk
	
	Now, create a data file named test.dat containing the string
	"abcdef<esc>ghijk" either by using a text editor that permits escape
	characters to be embedded in a string or by using the sample code #2 below.
	
	Sample Code #2
	--------------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	
	  void main(void)
	  {
	     FILE* fp;
	     char* fname = "test.dat";
	     int   numwrote;
	
	     if ( (fp = fopen( fname, "wt" )) == NULL )
	        printf( "Unable to open text file \"%s\" for writing.\n", fname );
	     else
	     {
	        if ( (numwrote = fprintf( fp, "abcdef""\x1b""ghijk" )) != 12 )
	           printf( "Write to file failed!  %d bytes written!\n", numwrote );
	        fclose( fp );
	     }
	  }
	
	If the program from sample code #1 is run with input redirected from the data
	file, as follows:
	
	  program <test.dat
	
	the resulting string is output as follows:
	
	  abcdef<esc>ghijk
	
	This behavior occurs in the entire gets() family of routines, including gets(),
	cgets(), and fgets(). If the input is coming from the console, the run time will
	use the standard MS-DOS, OS/2, or Windows NT keyboard read routines. On the
	other hand, if the input is coming from a file (through redirection), the
	operating system doesn't perform any editing and the file is read in literally.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
