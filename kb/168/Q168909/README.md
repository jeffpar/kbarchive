---
layout: page
title: "Q168909: Query/Remove Support for CardBus Cards Hangs Computer"
permalink: /kb/168/Q168909/
---

## Q168909: Query/Remove Support for CardBus Cards Hangs Computer

	Article: Q168909
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardwarekbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 OEM Service Release 2 (OSR2) does not support the query/remove power
	management function for CardBus cards. Therefore, SCSI (among others) cardbus
	cards may cause the computer to seem to stop responding (hang) after resuming
	from a suspended state.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	CardBus network interface cards do not experience this behavior because these
	cards' power management features are handled by the network interface driver.
	All other CardBus cards may potentially cause this behavior.
	
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
