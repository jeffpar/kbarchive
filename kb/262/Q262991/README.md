---
layout: page
title: "Q262991: All 3270 Clients Stop Responding When Snaservr.exe Starts"
permalink: /kb/262/Q262991/
---

## Q262991: All 3270 Clients Stop Responding When Snaservr.exe Starts

	Article: Q262991
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the SNA Server service Snaservr.exe is started or restarted, all 3270
	clients may stop responding with a black screen while attempting to open a new
	session through the server. A similar problem can affect LUA or APPC
	applications, if the LUA or APPC security feature is enabled in the SNA Server
	subdomain's Security folder. If APPC security is enabled and this problem
	occurs, the APPC application's [MC_]ALLOCATE request stops responding
	indefinitely. If LUA security is enabled and this problem occurs, the LUA
	application's RUI_INIT or SLI_OPEN does not complete.
	
	CAUSE
	=====
	
	This problem occurs if the server-side SnaBase service receives more than 256
	concurrent client sponsor connections before the SNA Server service attempts its
	first RPC communication to the local SnaBase service. When a 3270 client
	attempts to open a session through SNA Server, SNA Server sends a "Request LU
	Access" RPC request to the local SnaBase service to verify that the user has
	permissions to open the session. However, if there are already over 256 client
	connections to SnaBase, the server never receives the reply due to a problem
	with internal addressing of messages on the server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	This update is intended for systems running Microsoft SNA Server 4.0 Service Pack
	3. In addition to this update, see the "More Information" section of this
	article for information on the registry value that must also be applied.
	
	
	WORKAROUND
	==========
	
	The following procedure ensures that the SNA Server service does not encounter
	this problem after its started. This procedure assumes that Ethernet and/or
	Token Ring are being used to connect to the SNA client computers, and a separate
	Ethernet or Token Ring adapter is being used for SNA DLC connectivity.
	
	1. Stop the SnaBase service on the server.
	
	2. Disconnect the Ethernet cable(s), which connects the SNA Server with the
	  client network(s). All host network connections need to be attached.
	
	  NOTE: If SnaBase, SNA Server, or SNA link services are configured to run under
	  a user account, unplugging the LAN cable causes these services to fail to be
	  validated by a domain controller. Therefore, these services need to be
	  changed to run under the Local System account before this step is performed.
	
	3. Start the SnaBase and SNA Server service.
	
	4. From the server, open a new 3270 session through the SNA Server.
	
	5. Reconnect the network cable(s) so that clients can now connect to SNA Server.
	
	NOTE: If a single Token Ring or Ethernet adapter is being used for client and SNA
	connectivity, the SnaBase service fails to restart in step 3. Therefore, you
	need to disconnect client connectivity from the hub, switch, or router when you
	perform this procedure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 3.0 (all
	service packs), and SNA Server 4.0, 4.0 SP1, 4.0 SP2 and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	To correct this problem, apply the hotfix described in the previous section.
	
	NOTE: The initial version of this hotfix (dated 5/2/2000 or 5/18/2000) required
	the manual configuration of a "FastLocalRpc" registry setting. However, the
	current hotfix (dated 6/6/2000 or later) does not require any registry entries.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
