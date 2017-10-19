---
layout: page
title: "Q182913: SNA Server is Working Although SNA Manager Shows &quot;Offline&quot;"
permalink: /kb/182/Q182913/
---

## Q182913: SNA Server is Working Although SNA Manager Shows &quot;Offline&quot;

	Article: Q182913
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server Manager opens a LAN connection to the ?Manage Agent? (MngAgent)
	service that is running on each active SNA Server in the SNA subdomain to
	retrieve and display status information for the server. However, if SNA Server
	Manager loses its LAN connection to the server and is unable to reconnect to it,
	Manager will display the SNA Server status as ?Offline,? even when the SNA
	Server service is actually running.
	
	If SNA Server Manager loses its LAN session to an SNA Server, Manager attempts to
	reopen the connection for another three to four minutes. After that time passes,
	Manager attempts to reconnect to the SNA Server only if its local ?service
	table? (maintained by the SnaBase service) indicates that the MngAgent service
	is active on that server. When running on an SNA Server Windows NT client, the
	SnaBase service receives this status information from its ?sponsor? SNA Server.
	When running on an SNA Server, the SnaBase periodically receives status updates
	from other servers in the subdomain.
	
	MORE INFORMATION
	================
	
	To diagnose the cause of the offline status:
	
	1. Verify the communication between Manager and the SNA Server
	
	  If TCP/IP is being used to connect to the SNA Server, try issuing a "ping"
	  command to determine if the remote SNA Server is reachable. If SNA Server is
	  not reachable, there is a problem in the LAN connection, between the Manager
	  computer and the SNA Server. If some other transport is being used, try to
	  connect to a network resource on the server. If the connection attempt fails,
	  this could be because of a LAN connection problem, or the user may not be
	  authorized to connect to the server.
	
	2. Determine whether the SNA Manage Agent service (MngAgent) is running on the
	  SNA Server that appears as Offline. If this service is stopped, restart it
	  and check for the presence of an <ntroot>\drwtsn32.log file, which may
	  indicate that SNA Manage Agent failed abnormally. If the service is running,
	  try stopping the service and restarting it.
	
	  NOTE: See the following articles in the Microsoft Knowledge Base that describe
	  known problems that can cause a Manage Agent failure with SNA Server 3.0. If
	  you run SNA Server 3.0, try upgrading to the latest SNA Server 3.0 Service
	  Pack.
	
	  Q178493 SNA Server Status Shows "Off Line" Even Though It's Active
	
	
	  Q169490 SNA Server Appears to Be Offline After MNGAGENT AV
	
	
	  Q173173 SNA Manage Agent Traps After Saving Configuration Change
	
	
	3. Capture the following additional diagnostic information if the problem is not
	  related to the status of the Manage Agent service:
	
	   - Capture a Microsoft Network Monitor (or Network General Sniffer(TM)) LAN
	     trace of all traffic to and from the computer where SNA Manager is
	     running.
	
	   - Capture the following SNA traces from the computer running Manager:
	
	      - SnaBase full internal trace
	
	      - Manage Client full internal trace
	
	  The above traces should capture the time period when the server status changes
	  to the Offline status.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
