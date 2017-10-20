---
layout: page
title: "Q27486: CALLing C I/O Routines Does Not Affect QB Cursor Position"
permalink: /kb/027/Q27486/
---

## Q27486: CALLing C I/O Routines Does Not Affect QB Cursor Position

{% raw %}

	Article: Q27486
	Product(s): See article
	Version(s): 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | B_BasicCom | mspl13_basic
	Last Modified: 7-FEB-1990
	
	Problem:
	
	Microsoft C routines (medium model) linked with a compiled BASIC
	program that do screen output [such as printf ("hello, world.\n");] do
	not update the cursor position after returning to the calling BASIC
	program.
	
	For example, after 1) doing a PRINT from BASIC, 2) CALLing a C routine
	that does some printf's, and 3) returning to BASIC, the next PRINT
	statement goes directly after the last BASIC PRINT statement, ignoring
	the \n's (newline characters) from the called C routine.
	
	Response:
	
	This is expected behavior. C routines should not change the BASIC
	cursor position. This information applies to Microsoft QuickBASIC
	Versions 4.00, 4.00b, and 4.50, to Microsoft BASIC Compiler Versions
	6.00 and 6.00b, and to Microsoft BASIC Professional Development System
	(PDS) Version 7.00.
	
	To work around this limitation, OPEN "CONS:" as a device in BASIC and
	print to the console (screen) using PRINT# or PRINT# USING in BASIC.
	This forces BASIC to go through the operating system's console device
	instead of using direct writes to video memory.
	
	The following is a code example where a C function doesn't change the
	cursor position in BASIC:
	
	   'The following QuickBASIC program prints:
	   ' Hello.
	   ' Goodbye.t part of this line gets erased.
	   DECLARE SUB CRoutine CDECL ()
	   CLS
	   PRINT "Hello."
	   CALL CRoutine
	   PRINT "Goodbye."
	
	   /* C program */
	   #include <stdio.h>
	   void croutine ()
	   {
	   printf ("The first part of this line gets erased.\n");
	   }

{% endraw %}
