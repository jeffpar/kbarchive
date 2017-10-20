---
layout: page
title: "Q178758: XCON: CCMC Stops Randomly with Out of Disk Space Error"
permalink: /kb/178/Q178758/
---

## Q178758: XCON: CCMC Stops Randomly with Out of Disk Space Error

{% raw %}

	Article: Q178758
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Connector for Lotus cc:Mail logs the the following
	event in the Windows NT Event Viewer:
	
	  Event 98:
	  Insufficient Disk Space
	
	However, there is more than 4 GB of free space available on the server.
	Restarting the Connector for cc:Mail does not resolve the problem. Deleting the
	contents of the Exchsrvr\Ccmcdata\Export directory sometimes allows the
	Connector for cc:Mail to restart.
	
	CAUSE
	=====
	
	Under some circumstances, the algorithm in the connector incorrectly calculates
	disk free space on systems with less than 4 GB free.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: disk space
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
