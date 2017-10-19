---
layout: page
title: "Q246136: XADM: How to Increase Number of Exchange Server Tracking Logs"
permalink: /kb/246/Q246136/
---

## Q246136: XADM: How to Increase Number of Exchange Server Tracking Logs

	Article: Q246136
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	For troubleshooting purposes, it may become necessary to increase or decrease
	the number of tracking log files for mail in Microsoft Exchange Server. This
	article describes how to adjust this number.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The following registry key can be modified to change the number of days covered
	by the tracking log:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeSA\Parameters\OldLogsCleaningInterval(Days):
	  Reg_DWORD: 0x7
	
	By changing the OldLogsCleaningInterval(Days) value, you can increase or decrease
	the number of tracking log files for that Exchange Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
