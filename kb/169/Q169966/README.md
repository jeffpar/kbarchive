---
layout: page
title: "Q169966: Err Msg: Setup Did Not Find Any Hard Drives on Your Computer"
permalink: kb/169/Q169966/
---

## Q169966: Err Msg: Setup Did Not Find Any Hard Drives on Your Computer

	Article: Q169966
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbsetup kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows NT version 4.0 on an IBM PS/2 Model 77i 9577
	computer with an EIDE hard disk, the following error message may occur when
	Setup inspects the hard disk:
	
	  Setup did not find any hard drives on your computer.
	
	CAUSE
	=====
	
	The IBM-supplied Abios.sys and .bio files must be installed for Setup to work
	properly.
	
	RESOLUTION
	==========
	
	Upgrade the computer to the latest BIOS and copy the Abios.sys and .bio files
	from the IBM reference disk to the root folder of the boot drive, and then
	install Windows NT again. For additional information about these files, please
	contact IBM.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kberrmsg kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
