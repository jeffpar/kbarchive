---
layout: page
title: "Q255959: SMS: Turning Off Software Inventory on a Single Client"
permalink: kb/255/Q255959/
---

## Q255959: SMS: Turning Off Software Inventory on a Single Client

	Article: Q255959
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbhowto
	Last Modified: 02-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following procedure describes how to disable software inventory on a single
	client server, such as a large file server.
	
	MORE INFORMATION
	================
	
	To turn off software inventory on a single client, create the Skpswi.dat hidden
	file and place it in the root of each drive to turn off software inventory.
	
	Software inventory cannot start on the treated server again unless this file is
	deleted from all drives on the client computer.
	
	Additional query words: prodsms skpswi dat
	
	======================================================================
	Keywords          : kbsms200 kbhowto 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
