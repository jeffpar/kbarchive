---
layout: page
title: "Q180143: Err Msg: The Microsoft Dial-Up Adapter Is Not Installed..."
permalink: kb/180/Q180143/
---

## Q180143: Err Msg: The Microsoft Dial-Up Adapter Is Not Installed...

	Article: Q180143
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a remote computer after you install the Dial-Up
	Networking 1.2 Upgrade, you may receive the following error message:
	
	  The Microsoft Dial-Up Adapter is not installed or is not responding properly.
	  In the Network section of the Control Panel, remove the driver and add it
	  again.
	
	When you click OK, you may receive one or more of the following error messages:
	
	- Rnaapp.dll caused an invalid page fault in Rnaapp.dll
	
	- Explorer caused an invalid page fault in Rnaui.dll
	
	- Rnaapp.dll caused an invalid page fault in Kernel32.dll
	
	CAUSE
	=====
	
	These error messages can occur if the Rasapi32.dll file is not updated properly
	when you install the Dial-Up Networking 1.2 Upgrade.
	
	Note that the Rasapi32.dll file included in the Dial-Up Networking 1.2 Upgrade is
	version 4.00.1537.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename the Rasapi32.dll file located in the
	Windows\System folder, and then install the Dial-Up Networking 1.3 Upgrade.
	
	For information about how to rename a file, click Start, click Help, click the
	Index tab, type "renaming" (without quotation marks), and then double-click the
	"Renaming files" topic.
	
	MORE INFORMATION
	================
	
	For information about the Dial-Up Networking 1.3 Upgrade, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q191494 Dial-Up Networking 1.3 Upgrade Available
	
	Additional query words: dun
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
