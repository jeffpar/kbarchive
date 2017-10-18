---
layout: page
title: "Q97697: Generic/Text Only: Can't Use Null Character in Escape Sequence"
permalink: kb/097/Q97697/
---

## Q97697: Generic/Text Only: Can't Use Null Character in Escape Sequence

	Article: Q97697
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you enter printer commands in the Modify dialog box for the Generic/Text
	Only printer driver (TTY.DRV), the null character (ASCII 0), entered by pressing
	CTRL+SHIFT+@ (At sign), is incorrectly sent to the printer as ASCII character
	255. However, when the null character is entered in the Character dialog box to
	substitute it for another character, it is sent correctly.
	
	CAUSE
	=====
	
	The null character is required by many printers in their escape sequence
	commands. The null character cannot be entered in a document in most
	Windows-based applications.
	
	WORKAROUND
	==========
	
	As a workaround, substitute the null character for an unused character in the
	Characters dialog box and use that character in an embedded escape sequence in
	the application.
	
	For example, to send "ESC X (0)" (in ASCII, 27 120 0) from Microsoft Windows
	Write and replace character 255, do the following:
	
	1. In the Characters dialog box of the Generic/Text Only driver, choose
	  character 255 in the On Screen box and press CTRL+SHIFT+@ in the On Printer
	  box.
	
	2. In Write, enter the escape sequence as "ESC X (255)" (without the quotation
	  marks). The key combination is ALT+027 on the numeric keypad X ALT+0255 on
	  the numeric keypad.
	
	Additional query words: 2.00 2.00a 2.00a-CD 2.00b 2.00c 3.10 win31 macppt winppt w4wprint 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
