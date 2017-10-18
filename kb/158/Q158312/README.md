---
layout: page
title: "Q158312: SMS: Hardware Inventory Stops Responding with Madge Token Ring"
permalink: kb/158/Q158312/
---

## Q158312: SMS: Hardware Inventory Stops Responding with Madge Token Ring

	Article: Q158312
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbnetwork kbInventory smsinv kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During the Hardware Inventory phase of a Systems Management Server client
	computer running Windows 3.x, the client may stop responding and need to be
	restarted. Further analysis shows that the client is stopping at the
	NovellNetcardInfo stage.
	
	This problem may occur on computers running MS-DOS and Windows 3.x with the
	NetWare redirector and a Madge Token Ring network adapter card.
	
	CAUSE
	=====
	
	This problem is due to the revision of the Madge Token Ring driver that is being
	used. As of October 28, 1996, the latest driver is version 4.3. This version of
	the driver can be obtained from Madge (www.madge.com).
	
	By replacing the Madge driver with the latest version, the inventory process will
	complete and the network adapter card will be inventoried correctly.
	
	Additional query words: prodsms NW Novell freeze hang hung locked lock up lock-up
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbnetwork kbInventory smsinv kbHardware 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
