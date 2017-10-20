---
layout: page
title: "Q47987: _bios_serialcom Sends and Receives Single Character Data"
permalink: /kb/047/Q47987/
---

## Q47987: _bios_serialcom Sends and Receives Single Character Data

{% raw %}

	Article: Q47987
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft C online help and run-time library reference documentation,
	_bios_serialcom() is documented as taking an unsigned integer as the data. Even
	though an unsigned integer is large enough for two characters, only one
	character can be sent or received with each call to _bios_serialcom().
	
	MORE INFORMATION
	================
	
	The _bios_serialcom() function sends (and receives) character data. Two
	characters cannot be sent (or received) with one call because the function call
	is a simple interface to the BIOS interrupt 0x14. This interrupt expects the
	data to be sent (or received) to be in the AL register (an 8- bit register).
	Therefore, the data is limited to 8 bits, even though the function requires an
	unsigned integer as the data parameter.
	
	The parameter is an unsigned integer because the _bios_serialcom() function also
	uses the data parameter in initialization and status checks. In the send (and
	read) functions of the interrupt, however, only a single byte in the low-order 8
	bits of the unsigned integer passed as the data parameter are sent. For more
	information, see interrupt 0x14 in "IBM ROM BIOS" by Ray Duncan. This book
	clarifies the interrupt calls that are being made, and what is actually passed
	to the machine.
	
	For more details on serial-communication programming in C, see the "C
	Programmer's Guide to Serial Communications" by Joe Campbell.
	
	Additional query words: kbinf 1.00 1.50 5.10 6.00 6.00a 6.00ax 7.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	
	=============================================================================
	

{% endraw %}
