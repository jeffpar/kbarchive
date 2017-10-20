---
layout: page
title: "Q298433: SMS: Clients in Shared Subnet Don't Inst. in Multiple SMS Sites"
permalink: /kb/298/Q298433/
---

## Q298433: SMS: Clients in Shared Subnet Don't Inst. in Multiple SMS Sites

{% raw %}

	Article: Q298433
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbConfig kbServer kbsms200 kbDiscovery kbUpgrade
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clients that are in a subnet that is listed in the site boundaries of multiple
	Systems Management Server (SMS) 2.0 sites may not be listed as "installed into
	all sites" if the following conditions are met:
	
	- Remote installation is enabled.
	
	- Logon installation is disabled.
	
	CAUSE
	=====
	
	When remote installation creates a client configuration request (CCR) to
	remotely install a client, remote installation first checks the client for the
	existence of the SMS client service. This issue can occur if this service is
	found; the remote client installation stops, even though remote installation may
	be installing from a different site.
	
	WORKAROUND
	==========
	
	To work around this issue, enable logon installation in all of the domains from
	which clients log on. A client that is using logon installation checks all known
	sites for membership by evaluating the site boundary lists that logon points
	contain, and installs into all eligible sites.
	
	Additional query words: smallbiz prodsms
	
	======================================================================
	Keywords          : kbsetup kbClient kbConfig kbServer kbsms200 kbDiscovery kbUpgrade 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
