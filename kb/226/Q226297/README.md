---
layout: page
title: "Q226297: SMS: How Remote Tools Locates a Client and Establishes a Session"
permalink: kb/226/Q226297/
---

## Q226297: SMS: How Remote Tools Locates a Client and Establishes a Session

	Article: Q226297
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how Systems Management Server 2.0 establishes a
	connection with a client computer.
	
	MORE INFORMATION
	================
	
	When you attempt to establish a remote tools session with a Systems Management
	Server client computer, the Systems Management Server Administrator console uses
	a specific order to establish the session. The following list outlines this
	order:
	
	1. The Systems Management Server Administrator console uses the name of the
	  client stored in the site database. This method is dependant on network-level
	  name resolution.
	
	2. The Systems Management Server Administrator console uses all IP and IPX
	  addresses for the resource from the site database.
	
	3. The Systems Management Server Administrator console connects using the
	  NetBIOS base's LANA numbers.
	
	The Systems Management Server Administrator console attempts name resolution
	first to account for clients who have recently been assigned a new IP address.
	The time delay to update the routers and name servers in your environment is
	dependant upon your network topology and configuration. The next client
	discovery cycle updates the IP, IPX, and NetBIOS names and addresses
	automatically in the Systems Management Server database.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
