---
layout: page
title: "Q100983: Garbage or Vertical Lines Print on HP PaintJet"
permalink: /kb/100/Q100983/
---

## Q100983: Garbage or Vertical Lines Print on HP PaintJet

{% raw %}

	Article: Q100983
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The original Hewlett-Packard (HP) PaintJet printer may print vertical lines
	through all lines containing graphics or TrueType fonts. The printer may print
	garbage characters also.
	
	CAUSE
	=====
	
	The lines through the characters may occur if the parity for the RS-232 serial
	interface is set incorrectly. The printer may print garbage characters if the
	other interface settings do not match the settings in the serial interface
	dialog box in Control Panel.
	
	RESOLUTION
	==========
	
	To correct this problem, check the serial interface settings in Control Panel.
	The common settings for this printer are 9600 baud, no parity, 8 data bits and 1
	stop bit, and XON/XOFF protocol. To set the DIP switches to match this
	configuration, set them all to the OFF position. (The OFF position is marked
	with an open circle on the printer.)
	
	The DIP switches are as follows:
	
	  DIP #     Setting         ON          OFF
	  -----------------------------------------------------------------
	  1         Language        MET         English
	  2         Character Set   Roman8      PC8
	  3         Protocol        DTR         XON/XOFF
	  4 & 5     Parity          See markings on printer (both off is none)
	  6 & 7     Baud            See table on printer (both off is 9600)
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by Hewlett-Packard, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: w4wprint win31 2.00 2.00a 2.00a-CD 2.00b 2.00c true type ttf paint jet 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
