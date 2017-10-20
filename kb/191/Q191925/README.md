---
layout: page
title: "Q191925: Automatic Logon Fails Using 5250 Applet"
permalink: /kb/191/Q191925/
---

## Q191925: Automatic Logon Fails Using 5250 Applet

{% raw %}

	Article: Q191925
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	For detailed information about installation and architecture of Host Security,
	see the Microsoft Knowledge Base article Q175063, "Host Security Integration
	Setup and Architectural Overview."
	
	Steps to Reproduce the Problem:
	
	The steps below assume a Host Security Domain is installed and correctly
	configured.
	
	1. In SNA Server Manager, configure two connections to a single AS/400. Two
	  remote APPC LUs should be configured, one for each connection. A single local
	  APPC LU is acceptable.
	
	2. In SNA Server Manager, assign only one of the connections to the Host
	  Security Domain.
	
	3. Save the configuration file and restart SNA Server.
	
	4. Start the 5250 applet, select the connection assigned to the Host Security
	  Domain, and select Automatic Logon. Attempt to connect to the AS/400. The
	  connection is successful.
	
	5. Disconnect from the AS/400 and reconfigure the session. Select the connection
	  that is not assigned to the Host Security Domain and leave Automatic Logon
	  selected. Try to connect to the AS/400. The session fails with the following
	  message:
	
	  "The SNA session is unavailable [0010][00000000]."
	
	  In the Windows NT Server Application Event Log, the following is logged:
	
	  Event 38
	  APPC session deactivated abnormally
	  Qualifier
	  0003 and Event 90
	  APPC protocol violation
	  Sense data=0C001110
	
	SYMPTOMS
	========
	
	Automatic Logon using the 5250 applet can fail even though a Host Security
	Domain has been successfully configured.
	
	CAUSE
	=====
	
	Host Security Domains require assignment of connections for correct operation.
	Session configuration of the 5250 applet allows user selection of Automatic
	Logon and connection. Automatic Logon fails if the connection selected by the
	user is not assigned to the Host Security Domain.
	
	RESOLUTION
	==========
	
	To resolve this problem, assign all connections in the SNA Subdomain to the Host
	Security Domain. SNA Server must be restarted for the change to take effect.
	This allows Automatic Logon over all connections.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
