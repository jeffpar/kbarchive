---
layout: page
title: "Q148963: XADM: Disabling Message Tracking For One or More Servers"
permalink: kb/148/Q148963/
---

## Q148963: XADM: Disabling Message Tracking For One or More Servers

	Article: Q148963
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you enable message tracking for a site, all Microsoft Exchange Servers in the
	site perform message tracking. This article describes how you can exclude one or
	more specific Microsoft Exchange Servers from performing message tracking.
	
	MORE INFORMATION
	================
	
	The enabling and disabling of message tracking on a Microsoft Exchange Server
	are done separately for the Information Store (IS) and the Message Transfer
	Agent(MTA). To disable the message tracking for IS and MTA, do the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services\MSExchangeIS\Parameters\Private
	
	2. From the Edit menu, select Add Value.
	
	3. Enter the following:
	
	     Value Name: X.400 Service Event Log
	     Data Type:  REG_DWORD
	     String:     0
	
	4. Click OK and locate the following Registry subkey in the HKEY_LOCAL_MACHINE
	  subtree:
	
	  \SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	5. From the Edit menu, select Add Value.
	
	6. Enter the following:
	
	     Value Name: X.400 Service Event Log
	     Data Type:  REG_DWORD
	     String:     0
	
	7. Click OK and quit the Registry Editor.
	
	8. Shut down and restart Windows NT Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
