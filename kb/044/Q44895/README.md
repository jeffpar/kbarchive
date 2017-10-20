---
layout: page
title: "Q44895: INFO: kbhit() Does Not Take Character out of Buffer"
permalink: /kb/044/Q44895/
---

## Q44895: INFO: kbhit() Does Not Take Character out of Buffer

{% raw %}

	Article: Q44895
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C for OS/2 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	When an application tests the value returned by the kbhit() function, the
	application must explicitly remove the character from the keyboard buffer after
	entering the keystroke. Otherwise, kbhit() continues to return TRUE.
	
	The following code example demonstrates the situation:
	
	Sample Code
	-----------
	
	  /*
	   * Compiler options needed: None
	   */ 
	
	  #include <conio.h>
	
	  void main(void)
	  {
	     while (!kbhit())
	        ;          // Waits for keystroke
	     while (kbhit())
	        getch();   // Empties buffer
	     while (!kbhit())
	        ;          // Waits for keystroke
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
