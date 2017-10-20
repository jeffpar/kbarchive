---
layout: page
title: "Q64859: Testing the Connection to a PostScript Printer"
permalink: /kb/064/Q64859/
---

## Q64859: Testing the Connection to a PostScript Printer

{% raw %}

	Article: Q64859
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides instructions for determining if your PostScript printer
	(such as an Apple LaserWriter) is connected properly to the computer.
	
	MORE INFORMATION
	================
	
	Windows 3.1 and 3.11
	--------------------
	
	Microsoft Windows 3.1 installs TESTPS.TXT in your WINDOWS\SYSTEM subdirectory for
	testing your PostScript output. To use this file, copy it to the port connected
	to the PostScript printer. The following is an example:
	
	  copy c:\windows\system\testps.txt lpt1
	
	The output at the printer should be a single page, with the following information
	in the lower-left corner:
	
	  Max Printer VM (KB):
	  Max Suggested VM (KB):
	  Baud Rate:
	  Data Bits:
	  Parity:
	  Stop Bits:
	  Flow Control:
	
	Windows 3.0 and 3.0a
	--------------------
	
	At the MS-DOS command prompt, type the following:
	
	  " COPY CON COMx:
	  showpage " (without the quotation marks)
	
	NOTE: After each line (command) above has been entered, press CTRL+Z and then
	ENTER. COMx: refers to the physical port where the PostScript printer is
	connected. You can substitute COMx for COM1, COM2, LPT1, LPT2, and so on.
	
	You will be returned to an MS-DOS command prompt. If the connection between the
	printer and the computer is good, a blank page ejects from the printer.
	
	To test the processor of the PostScript printer, type the following commands at
	the MS-DOS command prompt:
	
	  " COPY CON COMx:
	  initgraphics
	  /ZapfChancery-MediumItalic findfont 48 scalefont setfont
	  200 432 moveto
	  (This is a test) show
	  showpage" (without the quotation marks)
	
	NOTE: After each line (command) above has been entered, press CTRL+Z and then
	ENTER. COMx: refers to the physical port where the PostScript printer is
	connected.
	
	You will be returned to an MS-DOS command prompt. If the connection has been
	properly made, a sheet prints with the words "This is a test."
	
	
	KBCategory: kbprint
	KBSubCategory:
	
	Additional query words: tshoot 3.00 3.0 3.0a 3.00a 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
