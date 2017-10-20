---
layout: page
title: "Q200953: SMS: Deploying SMS 2.0 in an Existing SMS 1.2 Site"
permalink: /kb/200/Q200953/
---

## Q200953: SMS: Deploying SMS 2.0 in an Existing SMS 1.2 Site

{% raw %}

	Article: Q200953
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 28-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Systems Management Server 2.0 is deployed in an existing Systems Management
	Server 1.2 site, and Windows Networking Logon Discovery is enabled, Systems
	Management Server 2.0 will enumerate all domain controllers in the domain and
	create the SMSLOGON share on all domain controllers.
	
	MORE INFORMATION
	================
	
	Systems Management Server 2.0 Windows Networking Logon Discovery is enabled by
	domain. Systems Management Server 2.0 will still allow client assignment to a
	single subnet. All other clients on the domain will be discovered at logon, if
	Windows Networking Logon Discovery is enabled, but only those clients in the
	specified site boundary subnet will be assigned to the site. All the other
	clients in the enterprise will run the discovery phase, and will be reported to
	the site database. They will not receive any of the client agents, nor will they
	be managed by the site.
	
	Additional query words: prodsms machine machines dc DCs pdc bdc PDCs BDCs
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
