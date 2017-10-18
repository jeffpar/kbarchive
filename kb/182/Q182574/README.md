---
layout: page
title: "Q182574: SNA Server Stops Forwarding FMH-5 Attach Messages"
permalink: kb/182/Q182574/
---

## Q182574: SNA Server Stops Forwarding FMH-5 Attach Messages

	Article: Q182574
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server may unexpectedly stop forwarding FMH-5 Attach messages to a specific
	branch-based SNA Server client computer (where the invokable transaction program
	[TP] is registered or running). When this occurs, SNA Server reports an Event 60
	(DLOAD timeout) in the server's application log. For example:
	
	  Event ID: 60
	  Source:   SNA Server
	  Description: Failed to invoke APPC TP <tpname>, sense
	  data = 084C0000
	
	084C0000 refers to AP_TRANS_PGM_NOT_AVAIL_NO_RETRY.
	
	On the client computer, the APPC or CPIC invokable TP may never be invoked, or if
	it is running, the TP's call to CMAPPC or RECEIVE_ALLOCATE will not complete. To
	recover from this problem, the SnaBase service on the Windows NT client computer
	must be stopped and restarted.
	
	CAUSE
	=====
	
	This problem can occur when the SNA Server client's sponsor connection (LAN
	session) to the server-side SnaBase service is lost. This problem occurs when
	the client-end of the client end of the LAN connection fails first.
	
	If the SNA Server client's sponsor fails and reconnects to the SnaBase before
	SnaBase is notified of the LAN session failure, a timing window exists where
	client invokable TP's are deregistered even though the client has reconnected.
	This problem has also been observed if the client is connecting against two or
	more SNA Servers, where its client sponsor reconnects against another server
	after a sponsor connection failure.
	
	This problem has been observed when an SNA Server Windows NT client is connecting
	to an SNA Server over TCP/IP sockets, although it may occur with other LAN
	interfaces.
	
	WORKAROUND
	==========
	
	To work around this problem, determine and correct the cause of the underlying
	LAN session failure between the SNA Server client and the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, and 4.0. This problem was corrected in the latest SNA
	Server version 4.0 U.S. Service Pack. For information on obtaining this Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
