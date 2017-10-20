---
layout: page
title: "Q263398: ITG: Site Component Manager  Reinstalls Repeatedly"
permalink: /kb/263/Q263398/
---

## Q263398: ITG: Site Component Manager  Reinstalls Repeatedly

{% raw %}

	Article: Q263398
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200preSP3
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run various Microsoft Systems Management Server services in both
	Microsoft Windows NT 4.0 and Microsoft Windows 2000, you may find that the
	services are unable to establish communication with a site system and the site
	system is flagged to be reinstalled.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- A server is unavailable during the Systems Management Server services normal
	  polling cycle, because of scheduled downtime or transient network failure.
	
	- The security policy is modified to prevent domain administrators from making
	  policy changes.
	
	- The security policy is configured to deny "logon as a service" rights to all
	  domain accounts. When Systems Management Server services are configured to
	  use one of these accounts and the Systems Management Server Administrator
	  configures either logon discovery/installation or configures a domain
	  controller as a client access point (CAP), the logon server manager or site
	  component manager configures itself on the new site system. The security
	  policy prevents "logon as a service" rights and a new account is created to
	  support the new service. The new account works until the security policy is
	  applied to the system at the next logon or refresh interval. The new account
	  does not have "logon as a service" rights and the service cannot start again.
	  When the failed service is detected, the site system is marked for
	  reinstallation. This cycle continues until the security policy is corrected.
	
	WORKAROUND
	==========
	
	To work around this issue, try one of the following:
	
	- Grant the Systems Management Server Service account the rights to add this
	  policy to accounts.
	
	- Change the default policy to allow any account to log on as a service on
	  domain controllers.
	
	- Do not use Logon Discovery. Use logon installation or Network Discovery -
	  Remote Client Installation to install clients.
	
	- Do not use domain controllers as CAPs.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
