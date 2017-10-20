---
layout: page
title: "Q38335: HOWTO: sscanf() Example Using a Comma (,) as Delimiter"
permalink: /kb/038/Q38335/
---

## Q38335: HOWTO: sscanf() Example Using a Comma (,) as Delimiter

{% raw %}

	Article: Q38335
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:6.0,6.00a,6.00ax,7.0; OS/2:6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The example below shows how to use the sscanf() C run-time function to read from
	an internal buffer delimiting fields with a comma (,). The key is to use the
	brackets in the format of sscanf() function. The format will be %[^','], which
	tells the function to read from the buffer until a comma (,) is reached.
	
	Sample Code
	-----------
	
	  /* The following sample illustrates the use of brackets and the
	     caret (^) with sscanf().
	     Compile options needed: none
	  */ 
	
	  #include <math.h>
	  #include <stdio.h>
	  #include <stdlib.h>
	
	  char *tokenstring = "first,25.5,second,15";
	  int result, i;
	  double fp;
	  char o[10], f[10], s[10], t[10];
	
	  void main()
	  {
	     result = sscanf(tokenstring, "%[^','],%[^','],%[^','],%s", o, s, t, f);
	     fp = atof(s);
	     i  = atoi(f);
	     printf("%s\n %lf\n %s\n %d\n", o, fp, t, i);
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:6.0,6.00a,6.00ax,7.0; OS/2:6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
