---
layout: page
title: "Q250375: Host Security Events 1322 &amp; 1002 After Adding Backup Database"
permalink: /kb/250/Q250375/
---

## Q250375: Host Security Events 1322 &amp; 1002 After Adding Backup Database

{% raw %}

	Article: Q250375
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing the SNA Host Account Cache Service, also known as the
	SNADATABASE Service, to be used in a secondary (backup) role, the following
	event may be observed multiple times in the application log of the event viewer
	where the primary (master) Host Account Cache Service is running:
	
	  Event 1322 - Type:Error
	
	  A backup database was denied access to the master database. Supplied code 0x0
	
	Once the backup SNA Host Account Cache (HAC) Service has started, a request is
	sent to contact the primary HAC Service. If successful, a copy of the HAC user
	database (DBase.DBS) is copied down locally. If the request fails, the following
	event is recorded in the application log of the event viewer on that (backup)
	computer:
	
	  Event 1002 - Type:Error
	
	  A message could not be sent. Supplied code <0xe160052a>
	
	CAUSE
	=====
	
	The Windows NT service account being used on the backup HAC is not the same
	service account as the primary HAC Service. For more information on Host
	Security Service Accounts, please see the following knowledge base article:
	
	  Q235472 All Host Security Services Must Run in Same Windows NT Account
	
	RESOLUTION
	==========
	
	Change the backup SNA Host Account Cache Service to use the same Windows NT
	account credentials that the primary SNA Host Account Cache Service is using.
	
	MORE INFORMATION
	================
	
	Having additional backup HAC Services may help in eliminating network traffic
	when Single Sign-On (SSO)lookups are being performed. For more information on
	the algorithm used, please see the following knowledge base article:
	
	  Q248479 - Host Account Database Location for Single Sign-On
	
	Since the PDC must contain the primary Host Account Cache, all other
	installations of this Service will be considered backups. If only the HAC
	component was selected during the installation process (from the \HOSTSEC
	directory on the SNA Server CD), you will never be prompted for the role (either
	primary or backup) during the setup process. The primary Host Account Cache
	always resides on the PDC of the domain.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

{% endraw %}
