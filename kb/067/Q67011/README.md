---
layout: page
title: "Q67011: EGA.SYS Command Line Parameters Message"
permalink: /kb/067/Q67011/
---

## Q67011: EGA.SYS Command Line Parameters Message

	Article: Q67011
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the EGA.SYS device driver version 2.10.18 included with Microsoft Windows
	version 3.0 is loaded in CONFIG.SYS, it displays the following message on the
	screen as a default:
	
	  Command line parameters:
	
	  FUNC=XX, to change INT 2FH function number. (where XX is 80 through FF
	  hexadecimal inclusive)
	
	For example:
	
	  DEVICE=EGA.SYS FUNC=AC
	
	  Using default value of BCH for interrupt 2FH function calls. A copy of the EGA
	  Device Driver is being installed.
	
	MORE INFORMATION
	================
	
	This message is no cause for alarm. The length of this message can be reduced by
	adding the FUNC=XX parameter on the end of the DEVICE=EGA.SYS line, where XX
	refers to the default value in the message on your computer screen. In the
	example message above, this modification would appear similar to the following:
	
	      DEVICE=EGA.SYS FUNC=BC
	
	Once this change is made, the message on the screen reads as follows:
	
	  Using user defined value of BCH for interrupt 2FH function calls.
	
	Additional query words: 3.00 3.0 3.0a 3.00a windrvr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
