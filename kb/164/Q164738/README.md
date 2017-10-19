---
layout: page
title: "Q164738: Shared Installation May Fail with IBM Token Ring Auto 16/4 ISA"
permalink: /kb/164/Q164738/
---

## Q164738: Shared Installation May Fail with IBM Token Ring Auto 16/4 ISA

	Article: Q164738
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are performing a shared installation of Windows 95 using an IBM Token
	Ring Auto 16/4 ISA network adapter, Windows 95 may not connect to the network
	during the real-mode to protected-mode network transition.
	
	CAUSE
	=====
	
	IBM Token Ring Auto 16/4 ISA network adapters with a microcode level 000700
	PP1FA7 have a Plug and Play BIOS that cannot be disabled using the Lanaid.exe
	configuration tool supplied by IBM.
	
	RESOLUTION
	==========
	
	You must disable the network adapter's Plug and Play BIOS in order for the
	network transition to be successful.
	
	Contact IBM Corporation for more information about this procedure.
	
	
	MORE INFORMATION
	================
	
	In a local installation of Windows 95 with this adapter at this microcode level,
	the results are that two IBM Token Ring Auto 16/4 ISA network adapters are
	enumerated and listed in Device Manager. One of the devices is listed as not
	working. Removing either device prevents the network adapter from working
	properly; and on reboot the device is enumerated and listed twice in Device
	Manager again.
	
	Additional query words: Netsetup MSBATCH
	
	======================================================================
	Keywords          : kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
