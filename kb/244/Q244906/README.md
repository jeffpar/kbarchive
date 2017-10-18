---
layout: page
title: "Q244906: Deny Access to Programs with Software Metering in Offline Mode"
permalink: kb/244/Q244906/
---

## Q244906: Deny Access to Programs with Software Metering in Offline Mode

	Article: Q244906
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Microsoft Systems Management Server (SMS) Software Metering
	feature in Offline mode to prevent users from starting programs, such as games
	or a virus program, rather than just enforcing product license limits.
	
	MORE INFORMATION
	================
	
	A list of forbidden programs can be downloaded to the clients on each
	configuration cycle. These programs cannot run even when the client is in
	Offline mode. Also, it is irrelevant as to whether or not the client can connect
	to the license metering server.
	
	To add a product to the list of forbidden programs, license the product, and then
	delete its "Access times" value, so that there is no valid time in which this
	program can run.
	
	After the preceding configuration is downloaded to the client, the product cannot
	start when requested.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
