---
layout: page
title: "Q193818: SNA Server 3.0 Logs Repeated BIND Errors (Event 18)"
permalink: /kb/193/Q193818/
---

## Q193818: SNA Server 3.0 Logs Repeated BIND Errors (Event 18)

{% raw %}

	Article: Q193818
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SNA Server 3.0 (including SP1, SP2 and SP3) sends an LU6.2 BIND request to
	establish an independent LU6.2 session and the remote system rejects the BIND
	request, SNA Server logs an Event 18 to the Windows NT application event log:
	
	  Event ID: 18
	  Source: SNA Server
	  Description: APPC session activation failure: BIND negative response
	  or UNBIND request received...
	
	SNA Server retries the BIND request in some cases. If the remote system continues
	to reject the BIND, an Event 18 is logged for every negative response received.
	
	CAUSE
	=====
	
	SNA Server 3.0 is designed to log an Event 18 whenever a BIND negative response
	is received.
	
	WORKAROUND
	==========
	
	There is no workaround for SNA Server 3.0 systems, except to remove any Local or
	Remote APPC LUs from SNA Server that are not configured on the remote system,
	assuming these LUs are causing the repeated BIND errors. For SNA Server 2.11
	systems, refer to the following Knowledge Base article:
	
	  Q150959 Preventing Repeated APPC Session Activation Failures Event 18
	
	MORE INFORMATION
	================
	
	The initial retail version of SNA Server 4.0 implements a new behavior. SNA
	Server 4.0 reduces the number of Event 18 errors that are logged by only logging
	the first BIND negative response for a given LU/LU/mode combination. When SNA
	Server 4.0 is retrying a BIND request and receives a BIND negative response,
	Event 18 is no longer logged.
	
	Note that the SNA Server BIND retry interval defaults to 10 seconds. This
	interval can be controlled by tuning the SNA Server BINDRETRY registry
	parameter, described in the SNA Server Reference Guide, Chapter 8: SNA Server
	Registry Settings.
	
	If the client application attempts to allocate a conversation, causing SNA Server
	to attempt a new BIND request, and the remote system rejects this BIND request,
	SNA Server still logs an Event 18 for the first BIND attempt, but not subsequent
	BIND retries.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
