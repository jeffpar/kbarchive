---
layout: page
title: "Q281825: Users Cannot Change Web Client Configuration Settings"
permalink: /kb/281/Q281825/
---

## Q281825: Users Cannot Change Web Client Configuration Settings

	Article: Q281825
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have the SNA Server/Host Integration Server (HIS) 2000 client installed
	for 3270 and/or 5250 session access, which was set up by way of the Web Client,
	you will not be able to change your configuration settings.
	
	These settings include pointing to a different SNA Server/Host Integration Server
	or Subdomain.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The SNA Server/HIS 2000 Web Client was designed so that all configuration
	settings must be configured and maintained by an Administrator. Therefore, once
	the Administrator configures the Web Client for 3270/5250 access, a user cannot
	alter these settings.
	
	
	For more information on using, configuring, and troubleshooting the Web Client,
	please review the Help documentation.
	
	For additional information about the Web client, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q279003 Understanding and Configuring the SNA Server/HIS 2000 Web Client
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
