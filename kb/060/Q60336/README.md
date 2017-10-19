---
layout: page
title: "Q60336: PRB: fscanf() Fails to Read Consecutive Lines"
permalink: /kb/060/Q60336/
---

## Q60336: PRB: fscanf() Fails to Read Consecutive Lines

	Article: Q60336
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0;WINDOWS:1.0,1.5;WINDOWS NT:1.0,2.0,2.1,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC6
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a file is open in text mode, an attempt to read lines of text with the
	fscanf() function may fail and only one line of text is read from the file.
	
	CAUSE
	=====
	
	The delimeter is set to "[^\n]". The fscanf() function reads up to but does not
	include the delimiting character. Therefore, the file stream stops at the first
	'\n' in the file. Subsequent fscanf() calls fail because the file pointer
	remains at the delimiting character and fscanf() cannot advance the function
	pointer past it.
	
	RESOLUTION
	==========
	
	Use one of the following two methods to move the file pointer past the
	delimiting character:
	
	- Update the code to use the following fscanf() call:
	
	        fscanf(stream, "%[^\n]%*c", line)
	
	  The "%*c" format specifier reads one character from the input stream but does
	  not assign it to any of the parameters in the fscanf function call.
	
	- Call fgetc() after the fscanf() call to move the file pointer beyond the '\n'
	  character.
	
	MORE INFORMATION
	================
	
	The following code demonstrates this problem. It should read and print lines
	from a text file until it reaches EOF. However, it reads only the first line
	from the file. Since the end of file character has not been found, the example
	shown below will run in an infinite loop if the file stream contains a "\n"
	character.
	
	Sample Code
	-----------
	
	  FILE *stream;
	  char line[80];
	
	  while ((fscanf(stream, "%[^\n]", line)) != EOF )
	  {
	     printf("Line = %s \n",line);
	  }
	
	The following code demonstrates the second method above to work around this
	problem:
	
	  FILE *stream;
	  char line[80];
	
	  while ((fscanf(stream, "%[^\n]", line)) != EOF)
	  {
	     fgetc(stream);    // Reads in '\n' character and moves file
	                       // stream past delimiting character
	     printf("Line = %s \n", line);
	  }
	
	Additional query words: 8.0 9.0 10.0 11.0
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0;WINDOWS:1.0,1.5;WINDOWS NT:1.0,2.0,2.1,4.0,4.1,4.2,5.0
	Issue type        : kbprb
	
	=============================================================================
	
