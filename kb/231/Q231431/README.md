---
layout: page
title: "Q231431: Raptor CIFS Firewall Disables Access to Network Monitor Agents"
permalink: /kb/231/Q231431/
---

## Q231431: Raptor CIFS Firewall Disables Access to Network Monitor Agents

	Article: Q231431
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbNetMon
	Last Modified: 08-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When it is running on Sparc/Solaris, Network Monitor 4.0 cannot connect to a
	remote agent through an agent's Raptor version 5.0.3 firewall.
	
	CAUSE
	=====
	
	Raptor 5 includes a new proxy service called Common Internet File System, or
	CIFS (also known as SMB), to handle NetBIOS traffic. This advanced proxy
	provides fine control to administrators over the kind of NetBIOS traffic that is
	allowed (files, printers, read-only, and so on), and provides better logging.
	
	The CIFS proxy, however, does not understand Network Monitor's remote agent
	connections. Network Monitor stops responding (hangs) when it attempts the
	connection to the remote agent, even though there may be a rule permitting CIFS
	traffic.
	
	WORKAROUND
	==========
	
	To work around this issue, reconfigure the Raptor firewall to use compatible
	proxy services:
	
	1. Disable the new CIFS proxy.
	
	2. Define a generic service proxy (GSP service) on TCP port 139.
	
	3. Use this new service instead of CIFS proxy in your rules.
	
	4. Restart the firewall.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms netmon bloodhound bh
	
	======================================================================
	Keywords          : kbsms120 kbNetMon 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
