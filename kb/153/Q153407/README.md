---
layout: page
title: "Q153407: SMS: Inventory Does Not Collect Windows NT Service Pack Versions"
permalink: kb/153/Q153407/
---

## Q153407: SMS: Inventory Does Not Collect Windows NT Service Pack Versions

	Article: Q153407
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	On a Windows NT client computer, the Service Pack version information is not
	collected by Systems Management Server inventory.
	
	
	MORE INFORMATION
	================
	
	The CurrentVersion value is collected during inventory in the following
	HKEY_LOCAL_MACHINE subtree:
	
	  \SOFTWARE\Microsoft\Windows NT
	
	Therefore, Windows NT 3.51 is displayed. However, the CSDVersion value is not
	collected during inventory.
	
	The ability to see which service packs have been installed is important for
	managing computers in a network enterprise. Some software only runs on specific
	Service Pack versions, and an administrator needs to be able to determine which
	computer has been upgraded and which one still requires upgrades to a specific
	Service Pack. This feature allows us to see whether the update to a new service
	pack has been successful. Windows NT resets the value CSDVersion at every boot
	time to match the kernel that is loaded. Therefore, if an update job fails, the
	computer still displays the previous service pack version that was inventoried.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
