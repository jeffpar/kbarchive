---
layout: page
title: "Q72206: LAN Enhanced DOS Printer Message Not Displayed"
permalink: kb/072/Q72206/
---

## Q72206: LAN Enhanced DOS Printer Message Not Displayed

	Article: Q72206
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When a printer is temporarily out of service because the paper is jammed, no
	paper is in the paper tray, or the printer is offline, normally a message is
	sent to the DOS or OS/2 workstation stating that the printer is unavailable to
	complete the print job. However, quite often a DOS Enhanced workstation will not
	display the message concerning the unavailability of the printer.
	
	CAUSE
	=====
	
	The messenger section of LANMAN.INI contains a parameter called sizmessbuf. On
	OS/2 workstations, the default value for sizmessbuf is 4096 bytes. On DOS
	Enhanced workstations, the default value for sizmessbuf is 256. When a message
	is received whose total size is larger than the message buffer size, the message
	is dropped. The printer unavailability message can easily exceed the 256 byte
	buffer size.
	
	RESOLUTION
	==========
	
	Increase sizmessbuf to accommodate longer messages. Doubling the default value
	to a 512 byte buffer should be sufficient for the printer messages. Please note,
	however, that doubling this value will affect the total available memory to the
	DOS workstation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
