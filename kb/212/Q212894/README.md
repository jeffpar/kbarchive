---
layout: page
title: "Q212894: SMS: Windows Clients Cannot Connect to Software Metering Server"
permalink: /kb/212/Q212894/
---

## Q212894: SMS: Windows Clients Cannot Connect to Software Metering Server

	Article: Q212894
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Software Metering on a Microsoft Windows 95/98 Systems
	Management Server (SMS) 2.0 client, the client only connects to one Software
	Metering server even if there are multiple Software Metering servers in the
	site. If the original Software Metering server the client connected to is
	unavailable, the client may repeatedly try to connect to the original Software
	Metering server.
	
	CAUSE
	=====
	
	A Client Configuration Installation Manager (CCIM) cycle (every 23 hours by
	default) has not occurred.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Wait for a CCIM cycle to occur.
	
	- Restart the client.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
