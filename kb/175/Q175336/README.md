---
layout: page
title: "Q175336: 3270 User Connects to Host Session of Previous User"
permalink: /kb/175/Q175336/
---

## Q175336: 3270 User Connects to Host Session of Previous User

	Article: Q175336
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using pooled 3270 LUs with SNA Server, a new 3270 user connects to the host
	session of the previous user. This problem was observed when using a CICS host
	application, and CICS and VTAM are configured to use the CLSDST and OPTION=PASS
	host options.
	
	When CICS issues CLSDST, it saves information about the user id and LU. The
	CLSDST=PASS option causes VTAM to drop the current session, put in on queue, and
	then start a new session with another VTAM application. When the second session
	ends, VTAM takes the session on the queue, and then establishes a session
	between the LU and CICS. CICS retrieves the saved information about the user id,
	so the users do not need to do a new sign on to RACF.
	
	CAUSE
	=====
	
	When SNA Server terminates a 3270 session, SNA Server sends a TERMSELF to the
	host, followed by NOTIFY with type 01, which means:
	
	  SLU capability is disabled. Sessions can be Queued but not started.
	
	When a new user activates a 3270 session, SNA Server sends a NOTIFY(type 03 = SLU
	Enabled), the old CICS session is started over the LU.
	
	This problem does not occur if SNA Server sends a NOTIFY Type 00, which means
	
	  SLU Capability is Inhibited. Sessions can be Neither Queued nor Started.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions listed at
	the beginning of this article.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	MORE INFORMATION
	================
	
	An update to SNA Server 3.0 Service Pack 2 is available from Microsoft which
	supports the ability to send a NOTIFY with type = 00 (SLU Inhibited) when a 3270
	session is ended. With this update applied, the following registry entry can be
	used to activate this behavior:
	
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/Snaservr
	  /parameters/ 
	
	  NotifyInhibited: REG_SZ: YES
	
	Note: This registry parameter is also available in SNA Server 4.0.
	
	For additional information about SNA Server 3270 session termination, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q132436 SNA Server Handling of 3270 LU Session Cleanup
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
