---
layout: page
title: "Q190300: SMS: Windows NT Clients in SMS 1.2 Must Have Server Service"
permalink: kb/190/Q190300/
---

## Q190300: SMS: Windows NT Clients in SMS 1.2 Must Have Server Service

	Article: Q190300
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbsmsUtil smssetup smsconfig smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a Systems Management Server site, Windows NT clients must have the Server
	Service running. The Server Service is necessary for the remote installation and
	update of the client-side services on Windows NT-based systems.
	
	MORE INFORMATION
	================
	
	The Server Service is required because the Systems Management Server Client
	Configuration Manager Service must be able to connect to the client's registry
	remotely to add the Systems Management Server Client Services and to make any
	other changes required to the client's registry.
	
	Running Windows NT systems with the Server Service disabled in a Systems
	Management Server site is an untested configuration and may lead to other
	issues.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbConfig kbsmsUtil smssetup smsconfig smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
