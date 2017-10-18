---
layout: page
title: "Q160016: Parity Errors with DirectX Video Drivers"
permalink: kb/160/Q160016/
---

## Q160016: Parity Errors with DirectX Video Drivers

	Article: Q160016
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): osr2 win95kbfaq
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install DirectX video drivers, you may receive the following error
	message when you start your computer:
	
	  System Error
	  Memory parity error detected.
	  System halted.
	
	CAUSE
	=====
	
	This behavior can occur if all of the following conditions are true:
	
	- Your computer uses a chip set that checks parity on video memory.
	
	- The video memory on your video card is not parity memory.
	
	- A memory-mapped video driver such as a DirectX-enabled video driver is
	  installed in your computer.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, do not install a memory mapped video
	driver.
	
	MORE INFORMATION
	================
	
	For additional information about the video memory capabilities of your video
	adapter, refer to your hardware documentation, or consult your hardware vendor.
	
	
	REFERENCES
	==========
	
	For additional information about parity error messages in Microsoft Windows,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q93521 Parity Errors in Windows 3.x
	
	  Q134503 Parity Error Messages May Indicate Bad Memory
	
	Additional query words: win95x plus95 direct-x dx dx6
	
	======================================================================
	Keywords          : osr2 win95 kbfaq
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbOPKSearch kbWin95 kbPlus95
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
