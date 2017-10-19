---
layout: page
title: "Q154441: Err Msg: Internet Explorer Unable to Access the Network"
permalink: /kb/154/Q154441/
---

## Q154441: Err Msg: Internet Explorer Unable to Access the Network

	Article: Q154441
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the Internet icon, you may receive the following error
	message:
	
	  Internet Explorer
	
	  Unable to access the network. Double-click the Network icon in Control Panel
	  and makes sure that TCP/IP is installed. Then try again. In the meantime, you
	  can still open files stored on your computer.
	
	CAUSE
	=====
	
	This error can occur if the Wsock32.dll file is missing or damaged.
	
	RESOLUTION
	==========
	
	Extract a new copy of the Wsock32.dll file to your Windows\System folder.
	
	The Wsock32.dll file is located in the Win95_11.cab cabinet file on the Windows
	95 CD-ROM and in the Win95_12.cab cabinet file on disk 12 of the floppy disk
	set.
	
	For information about using the Extract tool, type "extract" (without quotation
	marks) at a command prompt, or see the following article in the Microsoft
	Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	MORE INFORMATION
	================
	
	Removing networking components and reinstalling them does not replace the
	Wsock32.dll file.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
