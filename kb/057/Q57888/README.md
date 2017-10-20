---
layout: page
title: "Q57888: INFO: Return Value for getch() on Extended Characters"
permalink: /kb/057/Q57888/
---

## Q57888: INFO: Return Value for getch() on Extended Characters

{% raw %}

	Article: Q57888
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C, when reading extended characters you must make two calls to
	getch() because the first call returns a value indicating that the key is an
	extended character. The second call returns the actual key code.
	
	MORE INFORMATION
	================
	
	When you are reading an extended character, the first return value will be
	either 0xE0 or 0x00, depending on which extended key is pressed.
	
	Sample Code
	-----------
	
	  #include <stdio.h>
	  #include <conio.h>
	
	  void main(void)
	  {
	      int ch, scan;
	
	      do {
	          ch = getch();    /* 1st getch() gets ASCII code */ 
	          printf("Character is %d\n", ch);
	             if (ch == 0x00 || ch == 0XE0)  { /* if extended key */ 
	              scan = getch();  /* 2nd getch() gets "scan code" */ 
	              printf("\tExtended character:  scan is %d\n", scan);
	          }
	      }  while (ch != 27);    /* exit loop on ESC */ 
	  }
	
	For a discussion of keystrokes and scan codes, refer to "The New Peter Norton
	Programmer's Guide to the IBM PC & PS/2," by Peter Norton and Richard
	Wilton.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
