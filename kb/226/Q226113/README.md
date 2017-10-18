---
layout: page
title: "Q226113: SMS: Client Does Not Use Existing Connection for CAP or DP"
permalink: kb/226/Q226113/
---

## Q226113: SMS: Client Does Not Use Existing Connection for CAP or DP

	Article: Q226113
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 20-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Systems Management Server (SMS) client does not not use existing connections
	or mapped drives to Client Access Points (CAPs) or Distribution Points (DPs)
	when it is attempting to connect to these site systems as documented in the
	"Systems Management Server Administrators Guide." Existing client connections
	are not evaluated. Instead, CAPs are randomly selected from the site's CAP list.
	DPs are randomly selected from the list of valid DPs on a per-package basis.
	
	CAUSE
	=====
	
	The client does not have the ability to reuse a mapped drive. The only time a
	mapped drive is used is when requested by software distribution. From the
	Network Abstraction Layer (NAL) perspective, a mapped drive is not a visible
	resource, regardless of context. Only a device-less connection is reused. This
	behavior is by design.
	
	The client only uses the IPC$ share to ping a server for presence under certain
	circumstances in which the call to NetServerGetInfo is not working. The
	connection is made, and then instantly released. This behavior is also by
	design.
	
	WORKAROUND
	==========
	
	Because sites are defined as resources connected by fast, reliable links, this
	should not be a problem for most environments. The SMS client always assumes
	that all CAPs and DPs will be accessible over fast, reliable links.
	
	In the rare case in which it is necessary to force a client to go to a particular
	CAP or DP, the Preferred Distribution Point Selection tool (Prefserv) from the
	Microsoft BackOffice Resource Kit volume 4.5 may be of use.
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
