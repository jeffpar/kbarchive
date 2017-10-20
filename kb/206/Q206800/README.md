---
layout: page
title: "Q206800: SMS: How to Force Hardware and Software Inventory in SMS 2.0"
permalink: /kb/206/Q206800/
---

## Q206800: SMS: How to Force Hardware and Software Inventory in SMS 2.0

{% raw %}

	Article: Q206800
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbInventory
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server 2.0, you can force inventory to be taken on Windows
	95/98 and Windows NT systems running the Systems Management Server client using
	the following steps:
	
	1. In Control Panel, double-click Systems Management.
	
	2. Click the Components tab.
	
	3. Select Hardware Inventory Agent.
	
	4. Click Start Component.
	
	The following message will appear:
	
	  Hardware Inventory Agent will be started. This may take several minutes to
	  complete.
	
	The Hardware Inventory Agent will start and take inventory on this client.
	
	NOTE: Taking hardware and software inventory is processor-intensive, so the
	client may operate more slowly while inventory is taken.
	
	MORE INFORMATION
	================
	
	In Systems Management Server 1.x you could force inventory to be taken by
	running the inventory agent with a /f switch (such as invdos /f or invwin32 /e
	/f). In Systems Management Server 2.0, Microsoft introduced the Systems
	Management (Smscfg.cpl) control panel tool to enable you to perform a number of
	tasks, including forcing both hardware and software inventory.
	
	Another method to force inventory is to use the Inventory Synchronizer tool,
	InvSync.exe. This tool can be used to send a hardware or software inventory
	resynchronization request to a Systems Management Server 2.0 client. It is
	located on the Systems Management Server 2.0 CD-ROM in the \Support\Reskit\Bin
	subdirectory. More information about the tool can be found in the Tools.htm file
	located in the \Support\Reskit subdirectory.
	
	The syntax for the tool is as follows:
	
	  C:\>invsync [hw | sw] client_NetBiosName
	
	Example:
	
	  C:\>invsync hw SMSClient1
	
	NOTE: This tool cannot send a resynchronization request to a client that belongs
	to a child site. The Inventory Synchronizer tool can only be run from a Systems
	Management Server site server to force inventory for a client that reports
	directly to the site the tool is executed on.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbInventory 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
