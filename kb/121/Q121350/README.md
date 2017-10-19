---
layout: page
title: "Q121350: CTRL Key Does Not Work in Windows or Windows for Workgroups"
permalink: /kb/121/Q121350/
---

## Q121350: CTRL Key Does Not Work in Windows or Windows for Workgroups

	Article: Q121350
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Commands that use the CTRL key (for example, CTRL+F4 or CTRL+HOME) do not work.
	
	CAUSE
	=====
	
	This problem can occur when Windows is using the KEYBOARD.DRV and *VKD drivers
	and the keyboard driver selected in Windows Setup differs from the type in use.
	(For example, Setup displays "All AT type keyboards [84--86 keys]" when the
	keyboard in use is actually a 101-key keyboard.)
	
	RESOLUTION
	==========
	
	Change the keyboard driver in Windows Setup to match the type of keyboard in
	use. Most keyboards with 12 function keys use the "Enhanced 101- or 102- key
	U.S. and Non-U.S. keyboards" driver.
	
	REFERENCES
	==========
	
	"Windows for Workgroups Resource Kit," page 6-57 through 6-62.
	
	Additional query words: 3.10 control
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
