---
layout: page
title: "Q134596: Error Messages When Using Novell NE3200 EISA NDIS2 Driver"
permalink: kb/134/Q134596/
---

## Q134596: Error Messages When Using Novell NE3200 EISA NDIS2 Driver

	Article: Q134596
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
	
	When a Novell/Anthem NE3200 EISA Ethernet Adapter is configured to start using
	NE3200.DOS (the NDIS2 driver) in the Autoexec.bat file, you may receive the
	following error message when NET START /VERBOSE runs:
	
	  M0026: Failed to find controller -- Controller not present
	
	After this error message, you receive the following error message:
	
	  Error 5733: The protocol manager has reported an incomplete binding
	
	NOTE: You see the error messages only if you bypass the Windows 95 logo splash
	screen and NET START is used with the /VERBOSE switch.
	
	WORKAROUND
	==========
	
	To work around this problem, use the NE3200 NDIS3 driver. For information about
	how to install the NDIS3 drivers, click the Index tab in Windows 95 Help, type
	the following text
	
	  adapters
	
	and then double-click "adapters, adding or changing the driver for."
	
	If you still need to use the NDIS2 driver in Windows, ignore the error messages
	or remove the /VERBOSE switch from the NET START line in the Autoexec.bat file.
	
	NOTE: To use the NDIS2 driver outside of the Windows environment, you must start
	the computer using a previous version of MS-DOS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Even when you receive this error message, you still have full networking
	functionality in Windows. No functionality is lost while you are in the Windows
	95 graphical interface (GUI). The failure to bind occurs when you start in
	MS-DOS mode.
	
	
	Additional query words: err msg realmode nic
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
