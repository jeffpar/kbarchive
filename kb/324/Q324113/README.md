---
layout: page
title: "Q324113: SDB Cannot Service Look-up Requests Before Required Steps Comple"
permalink: kb/324/Q324113/
---

## Q324113: SDB Cannot Service Look-up Requests Before Required Steps Comple

	Article: Q324113
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 Kbhostintegserv2000
	Last Modified: 25-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the computer where the primary SNA Host Account Cache Service Master Database
	(MDB) resides is unavailable (down or off-line), and if the only other computer
	that is running a backup SNA Host Account Cache Service Secondary Database (SDB)
	is restarted during this time, all account look-ups to the SDB will fail after
	the SDB computer restarts and the SNA Host Account Cache Service shows as
	started.
	
	For example, this problem occurs as follows:
	
	- The computer where the MDB is running is taken off-line (or becomes
	  unavailable).
	
	- Account look-ups continue to work using the SDB.
	
	- With the MDB off-line, the SDB computer is restarted.
	
	- The backup SNA Host Account Cache Service indicates the SDB is available
	  again to service account look-up requests.
	
	- While the MDB is still off-line, any additional account look-ups to the SDB
	  fail.
	
	When the SDB computer starts, it tries to contact the MDB. If it cannot contact
	the MDB, the following warning event is recorded in the application log of the
	event viewer on the SDB computer:
	
	  Event ID: 1345 - Source: SNA Host Security
	
	  Unable to get Master database information. Please verify the network
	  connection and Master status. Keep trying.
	
	
	Because the SDB cannot contact the MDB, the next Single Sign-on (SSO) requests
	also fail.
	
	The actual error message that an end-user sees during this time varies across
	applications, however, the following warning event is recorded in the
	application log of the event viewer on the SDB computer:
	
	  Event ID: 403 - Source: SNA Server
	
	  Single Sign-On request for <domain\user> failed - Could not locate a
	  host account cache for host domain <Host Security Domain Name>.
	
	The Event 403 message is logged when an account look-up request fails when trying
	to access the Host Account Cache (HAC). In this example, it cannot access the
	SDB, the reason for which is explained in the "More Information" section of this
	article.
	
	For additional information about how an SDB is located, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q248479 Host Account Database Location for Single Sign-On
	
	
	CAUSE
	=====
	
	Before an SDB can service any account look-up requests, the following steps must
	complete:
	
	- The backup SNA Host Account Cache Service contacts the primary SNA HAC
	  Service where the MDB resides.
	
	  If the SDB cannot locate the MDB information (event 1345), then the remaining
	  steps do not complete, and the result is that all SSO look-ups fail.
	
	- The local SDB synchronizes with the MDB.
	
	- The SDB is initialized.
	
	SSO account look-ups would continue to succeed in environments that contain other
	SDBs that have not been restarted while the MDB is off-line.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
