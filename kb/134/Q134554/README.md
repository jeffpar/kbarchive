---
layout: page
title: "Q134554: cc:Mobile Hangs After Editing Modem Information"
permalink: kb/134/Q134554/
---

## Q134554: cc:Mobile Hangs After Editing Modem Information

	Article: Q134554
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Lotus cc:Mobile, the program stops responding (hangs) after
	you edit the information about your modem in the Edit Default Communications
	Method dialog box.
	
	CAUSE
	=====
	
	Lotus cc:Mobile uses Notepad to edit the modem information. Once Notepad starts,
	cc:Mobile waits for it to close before continuing. Because the version of
	Notepad included with Windows 95 is a 32-bit program, and 16-bit and 32-bit
	programs behave differently, cc:Mobile never gets notified that Notepad has
	closed.
	
	RESOLUTION
	==========
	
	Contact Lotus Technical Support for information about manually editing the file
	for cc:Mobile.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
