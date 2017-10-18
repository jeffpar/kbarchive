---
layout: page
title: "Q126632: Mouse Detected as PS/2-Style or Bus Does Not Work During Setup"
permalink: kb/126/Q126632/
---

## Q126632: Mouse Detected as PS/2-Style or Bus Does Not Work During Setup

	Article: Q126632
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are setting up Windows, the mouse attached to your computer is
	incorrectly identified as a PS/2-style or an Inport (bus) mouse and the mouse
	does not work.
	
	CAUSE
	=====
	
	Setup detects mouse ports in the following order: Inport, PS/2, serial. When the
	detection routine finds the mouse port, it stops searching. For example, if
	Setup finds an Inport card, it stops searching for the mouse.
	
	Inport Card
	-----------
	
	If an Inport-style mouse card is installed in the computer, the detection routine
	sees this card first and uses it, even if the mouse is not attached to it. This
	occurs because the Inport card is the circuit board for the mouse. Detaching the
	mouse from the card does not disable the card.
	
	PS/2-Style Mouse
	----------------
	
	If a PS/2-style mouse is installed, the 0x04 bit is set in the equipment flags.
	In some computers, the BIOS mistakenly sets this bit when a second hard disk is
	installed and no PS/2-style mouse exists. When Setup issues an INT 11 (get
	equipment flags) and sees that this bit is set, it determines that there is a
	PS/2-style mouse attached to your computer.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- For an Inport card, remove the card from the computer before you run Setup.
	
	- For a PS/2-style mouse port, contact your computer vendor about a possible
	  BIOS upgrade.
	
	- For either type of mouse, run Setup with the /ID switch and choose the proper
	  mouse type when you are prompted.
	
	- For either type of mouse, set the correct type in the "MouseType=" line in
	  the MOUSE.INI file before you run Setup. Note that the mouse driver you are
	  using must support the use of a MOUSE.INI file for this method to work. For
	  additional information about the "MouseType=" setting, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q73370 Correct Entries for "MouseType=" in MOUSE.INI
	
	Additional query words: 3.10 3.11 hangs
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	
