---
layout: page
title: "Q136105: No Network Access After First Boot on EISA Computer"
permalink: kb/136/Q136105/
---

## Q136105: No Network Access After First Boot on EISA Computer

	Article: Q136105
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows 95 on a computer with an EISA motherboard and an EISA
	network adapter, you cannot access the network after the computer is restarted
	the first time. Network access works correctly after all subsequent restarts.
	
	CAUSE
	=====
	
	The network adapter is not yet completely configured in the registry the first
	time the computer is restarted.
	
	RESOLUTION
	==========
	
	Continue setting up your computer. Setup will require you to restart the
	computer again, after which you will be able to access the network.
	
	If Setup requires additional files from a network resource, use the original
	installation disks instead, or copy the appropriate files to a floppy disk.
	
	MORE INFORMATION
	================
	
	The first time Windows 95 starts, the registry configures all the connected
	hardware devices. At this point, the network adapter is recognized but it is not
	enabled until the EISA enumerator is built. You cannot access the network until
	the slot configuration for the network adapter is determined and enabled.
	
	Note that turning the computer off and back on is not a workaround for this
	behavior. The network adapter is not enabled until Setup is finished.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
