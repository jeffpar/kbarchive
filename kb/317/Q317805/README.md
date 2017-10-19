---
layout: page
title: "Q317805: Sponsor Connection Changes in Host Integration Server 2000"
permalink: /kb/317/Q317805/
---

## Q317805: Sponsor Connection Changes in Host Integration Server 2000

	Article: Q317805
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool Kbhostintegserv2000
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Starting with Host Integration Server 2000, Host Integration Server 2000 clients
	close their sponsor connections after five minutes and rely upon a "On Demand"
	(dynamic) sponsor connection. SNA clients before Host Integration Server 2000
	used "persistent" sponsor connection.
	
	MORE INFORMATION
	================
	
	After a Host Integration Server 2000 client establishes a sponsor connection to
	either an SNA server or Host Integration Server computer, the sponsor connection
	is closed after 5 minutes. This change was implemented because the client does
	not require a sponsor connection (by using port 1478) on a constant basis.
	
	This has no effect on application sessions that communicate with the SNA/Host
	Integration Server computer by using port 1477. The only circumstances where
	this does not apply are:
	
	- If an invokable Transaction Program (TP) is running on the client.
	
	- If SNA Manager is running on an administrative client.
	
	- If the SNA LU6.2 Resync TP service is running on an administrative client.
	
	Under the preceding conditions, the client uses a persistent sponsor connection.
	After the On Demand sponsor connection is closed, it will only be re-opened by
	the SNABase when it needs to send an RPC request (for example, to locate which
	servers support the requested SNA/Host Integration Server resource). During this
	time, the client updates its Service Table (ST) whenever the connection is
	reopened, but then closes again after the five-minute timeout expires. There is
	no way to turn off the use of the On Demand sponsor connection.
	
	REFERENCES
	==========
	
	For additional information about sponsor connections, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q160849 How the SNA Server Client Chooses a Sponsor SNA Server
	
	Additional query words: his
	
	======================================================================
	Keywords          : kbtool Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
