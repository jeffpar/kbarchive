---
layout: page
title: "Q262677: SMS: Clients Are Not Upgraded by Logon Points with SP2"
permalink: /kb/262/Q262677/
---

## Q262677: SMS: Clients Are Not Upgraded by Logon Points with SP2

{% raw %}

	Article: Q262677
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP2
	Operating System(s): 
	Keyword(s): kbsetup kbClient kbServer kbsms200 kbCAP kbUpgrade kbsms200sp2fix
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The process that Systems Management Server (SMS) clients use for upgrading to a
	new service pack has changed in SMS 2.0 Service Pack 2 (SP2).
	
	For additional information on how to obtain the latest Systems Management Server
	2.0 service pack, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	MORE INFORMATION
	================
	
	Clients that are assigned to SMS sites do not receive a significantly new
	version of the Clicore file by using the logon scripts or Smsman. For example,
	if a client with version 2.00.1380.0000 logs on to a logon point that has
	version 2.00.1999.2000 of the Clicore file, Boot32wn quits without copying the
	new Clicore file, and without running the new Clicore file on the client.
	Hotfixes are not defined as a "significant" new version (for example, a logon
	script can run Clicore version 2.00.1999.2001 against a client with version
	2.00.1999.2000).
	
	Also, new clients are not assigned to significantly earlier sites that
	participate on the logon point. For example, if site A runs Service Pack 1
	(SP1), site B runs SP2, and they both share a logon point, clients that log on
	to that logon point are only assigned to site B. This prevents new clients from
	getting the new Clicore file and then being assigned to an earlier site
	(preventing clients from having an SP2 Clicore file with SP1 components).
	
	A client is correctly upgraded when its Client Configuration and Installation
	Manager (CCIM) maintenance cycle runs and reads information from the Client
	Access Point (CAP).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbClient kbServer kbsms200 kbCAP kbUpgrade kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : winnt:2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
