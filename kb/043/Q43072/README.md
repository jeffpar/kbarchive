---
layout: page
title: "Q43072: INFO: Switching from Reading to Writing Files Can Garble Data"
permalink: /kb/043/Q43072/
---

## Q43072: INFO: Switching from Reading to Writing Files Can Garble Data

	Article: Q43072
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:6.00ax,7.0; OS/2:6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,2.1,2.2,4.0,4.1,
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When switching from reading to writing data files, it is necessary to make a
	call to an fsetpos(), fseek(), or rewind() function. If a call to one of these
	functions is not made, the file pointer may not be updated and the data could be
	corrupted. It is also necessary to make a call to one of these functions when
	switching from writing to reading. This is documented on page 275 of the
	"Microsoft C Optimizing Compiler Run-Time Library Reference" manual, which
	shipped with version 5.1 of the Microsoft C Compiler.
	
	MORE INFORMATION
	================
	
	The following program attempts to read in the first character of a file and to
	write it out as the second character:
	
	Sample Code #1
	--------------
	
	  #include <stdio.h>
	  void main(void)
	  {
	    FILE *fp;
	    char a;
	
	    if (( fp = fopen("text.fil","r+")) != NULL)
	    {
	      fscanf(fp,"%c",&a);      /* Read one character */ 
	      fprintf(fp,"%c",a);     /* Write to the next location */ 
	      fclose(fp);
	    }
	  }
	
	The above program fails because there is no fseek, fsetpos, or rewind between the
	fscanf and fprintf to change the pointer position. The following program
	performs the desired operation:
	
	Sample Code #2
	--------------
	
	  #include <stdio.h>
	  void main(void)
	  {
	    FILE *fp;
	    char a;
	    fpos_t loc;     /* Storage for the current location */ 
	
	    if (( fp = fopen("text.fil","r+")) != NULL)
	    {
	      fscanf(fp,"%c",&a);    /* Read one character */ 
	      fgetpos(fp,&loc);     /* Get current file pointer pos */ 
	      fsetpos(fp,&loc);     /* Set current file pointer pos */ 
	      fprintf(fp,"%c",a);   /* Write to next location */ 
	      fclose(fp);
	    }
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:6.00ax,7.0; OS/2:6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,2.1,2.2,4.0,4.1,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
