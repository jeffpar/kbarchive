---
layout: page
title: "Q45563: setbuf() Doesn't Control MS-DOS Buffer or Keyboard Buffer"
permalink: /kb/045/Q45563/
---

## Q45563: setbuf() Doesn't Control MS-DOS Buffer or Keyboard Buffer

{% raw %}

	Article: Q45563
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The getchar() function will wait for a carriage return even if setbuf() is used
	to unbuffer stdin.
	
	MORE INFORMATION
	================
	
	The function setbuf() affects a stream file buffer, such as stdin, but has no
	effect on the keyboard or MS-DOS device buffers. The stream I/O function
	getchar() can read a character from the keyboard buffer only when the keyboard
	buffer is flushed by either being filled, by a carriage return, or by an
	interrupt 0x21, function 0xC call.
	
	To read normal characters directly from the keyboard, you can use the console I/O
	function getch(). To read control codes such as ALT+Q (echo subsequent output to
	printer) or ALT+R (pause output), you can use the _bios_keybrd() function. For
	more information on this function, query on the following word in the Microsoft
	Knowledge Base:
	
	  _bios_keybrd()
	
	The following example demonstrates the difference between using getchar() and
	getch().
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	  #include <conio.h>
	
	  void main (void)
	
	  {
	     setbuf (stdin, NULL);        /* cause stdin to be unbuffered */ 
	     if (getchar () != EOF )
	        printf ("getchar() still waits for return key\n");
	     if (getch () != EOF )
	        printf ("getch() does not wait for return key\n");
	  }
	
	Additional query words: kbinf 1.00 1.50 5.10 6.00 6.00a 6.00ax 7.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	
	=============================================================================
	

{% endraw %}
