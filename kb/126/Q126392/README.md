---
layout: page
title: "Q126392: SNA Server Vines PC-based Service Doesn't Get Created"
permalink: kb/126/Q126392/
---

## Q126392: SNA Server Vines PC-based Service Doesn't Get Created

	Article: Q126392
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server registers itself with the Banyan Vines Directory Services when the
	SNABASE service is started. This is necessary for SNA Server clients that are
	communicating over the Banyan Vines redirector to connect to SNA Server. If the
	StreetTalk username is the same as the SNA Server machine name, the Vines
	StreetTalk server rejects a request from SNA Server to create its PC-based
	service.
	
	CAUSE
	=====
	
	When SNABASE service starts up, it attempts to create a PC-based service with
	its local StreetTalk Server using the StreetTalk Group name (for example,
	CNS@Microsoft).
	
	The PC-based service name that SNA Server submits to the Vines StreetTalk server
	is a combination of the SNA Server computername along with the StreetTalk group
	name. For example, if the computername is Godzilla, then Godzilla@CNS@Microsoft
	is the PC-based service submitted by SNA Server.
	
	If there is a StreetTalk username with Godzilla@CNS@Microsoft, then the Banyan
	Vines server rejects the request (return code 1013) to create a PC- based
	service.
	
	WORKAROUND
	==========
	
	To work around this problem, change the SNA Server computername or delete the
	user record from the Vines StreetTalk server. You can do this using the Vines
	Manage program.
	
	Additional query words: prodsna Banyan Vines computer user name
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
