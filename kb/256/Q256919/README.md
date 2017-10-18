---
layout: page
title: "Q256919: DLS Connection Fails with Event ID: 705"
permalink: kb/256/Q256919/
---

## Q256919: DLS Connection Fails with Event ID: 705

	Article: Q256919
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all SP),3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install a branch SNA Server by using a specific user account (as opposed
	to using the system account), if for any reason the user account cannot be
	validated by the central SNA Server, you cannot connect to the branch SNA Server
	site. In the Application event log on the branch SNA Server, the following event
	is logged:
	
	  Event ID: 705
	  Source: SNA <type> Link Service
	  Type: Warning
	  Description: Logon Failed. EXPLANATION Connection Failed due to data security.
	  Access denied -- Error Code: 44
	
	CAUSE
	=====
	
	When you attempt to connect a branch SNA Server site by using the Distributed
	Link Service (DLS), the central SNA Server attempts to validate the incoming
	connection by using the context that the DLS is running under on the branch SNA
	Server. This can potentially cause a problem if the central SNA Server is unable
	to validate the account for any reason (for example, broken trust, different
	domain, and so on), and the connection status shows Pending on the branch SNA
	Server.
	
	This problem occurs because of the different methods that Windows NT uses to
	validate the system account, as opposed to a user account. If the DLS is running
	under the local system account, then it must use Local Security Authority (LSA)
	for logon, and by default, there is no security enforced. If the DLS is running
	under a user account, then it uses Windows NT LanManager(NTLM) authentication
	for logon, and security is enforced. For example:
	
	  DLS Client-----------------------------Link Service Proxy
	  SNAREM1-------LSA logon (system)-----> SNADLC[D]
	  (no NT credentials required: local system)
	
	  SNAREM1-------NTLM logon (user)------> SNADLC[D]
	  (Valid NT credentials required: User account)
	
	RESOLUTION
	==========
	
	To resolve this issue, do one of the following:
	
	   - Enable the guest account on the central SNA Server.
	
	- On the central SNA Server, create an account with a matching user ID (UID)
	  and password (PWD) that the DLS on the branch SNA Server is running under.
	
	- Set the DLS to run under the system account on the branch SNA Server.
	
	MORE INFORMATION
	================
	
	In the Link Message Trace on the branch SNA Server, this problem occurs before
	the Open Link Request ever comes down the pipe. In the Link Message Trace, you
	can view the following:
	
	  --------------------------------------------------------------------------------
	  DLC 01160001->04020100 DLCST OUTG
	  DLC Outage: 0x0A UPTYPE:0 UPCNTR:12 COUNT:112
	  DLC
	  DLC ---- Header at address 010144B4, 0 elements ----
	  DLC 180A000C 10110070 01000400 0100D401 <.......p......M.>
	  DLC
	  --------------------------------------------------------------------------------
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q132679 Local System Account and Null Sessions in Windows NT
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.11 (all SP),3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
