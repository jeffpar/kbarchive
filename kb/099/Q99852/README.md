---
layout: page
title: "Q99852: SMTP: Err Msg: ERROR Connect: (121) Network Error"
permalink: kb/099/Q99852/
---

## Q99852: SMTP: Err Msg: ERROR Connect: (121) Network Error

	Article: Q99852
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 2.1 and 3.0 of Microsoft Mail Gateway to SMTP may display one of the
	following messages:
	
	- 
	
	  ERROR connect: (121) network error
	
	  -or-
	
	- 
	
	  ERROR connection to smart host failed
	
	  -or-
	
	- 
	
	  NC_incoming: unavailable
	
	These errors indicate that the SMTP Gateway cannot connect to the SMTP router,
	also called the smarthost, which you can configure in the Administrator program
	under Gateway, SMTP, Setup, as follows:
	
	  IP address of SMTP Router:  XXX.XXX.XXX.XXX
	
	CAUSE
	=====
	
	The error occurs if:
	
	- The smarthost is down.
	
	- The smarthost is not configured to answer SMTP calls.
	
	- The network between the SMTP gateway computer and the smarthost is down.
	
	- The TCP/IP configuration on the gateway computer is incorrect.
	
	RESOLUTION
	==========
	
	You can test for the above conditions by trying to "telnet" to port 25 of the
	SMTP router: type the number "25" (without the quotation marks) after the IP
	address of your SMTP router. If this test succeeds, the gateway will run. If it
	fails, you have to bring the host or network back up, or make configuration
	changes as needed.
	
	The telnet process may differ with software. Consult the telnet documentation for
	a particular port connection procedure.
	
	Additional query words: 2.10 3.00 errmsg admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
