---
layout: page
title: "Q185540: APPC/5250 Hot Backup Fails If Connection Is Inactive or Pending"
permalink: kb/185/Q185540/
---

## Q185540: APPC/5250 Hot Backup Fails If Connection Is Inactive or Pending

	Article: Q185540
	Product(s): Microsoft SNA Server
	Version(s): 2.1,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	APPC/5250 applications connecting to SNA Server computers that are configured
	for APPC Load Balancing and Hot Backup may fail to connect to a remote system if
	one or more of the configured connections to the remote system are in an
	Inactive or Pending state. This occurs even though other connections to the
	remote system are in an Active state.
	
	The error returned by the APPC/5250 application when this problem occurs may
	vary. The 5250 utility included with SNA Server generates the following error
	message when this problem occurs:
	
	  Could not connect to the remote host.
	  [0003][00000004]
	
	In addition, the following message may be written in the Windows NT Server
	application event log if the APPC/5250 application is run on SNA Server or on an
	SNA Server Windows NT Client:
	
	  Event ID: 93
	  Source: SNA APPC Application
	  Description: APPC local conversation start failed:
	
	  Primary_rc = 0003 Secondary_rc = 00000004 TP_ID = 00000000C0452500 Dest TP
	  name = 30F0F0F5 LU alias = <Local APPC LU Alias> PLU alias =
	  <Partner APPC LU Alias> Mode name = <APPC Mode Name>
	
	For additional information about configuring SNA Server for Load Balancing and
	Hot Backup for both 3270 and APPC sessions, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q128244 SNA Server Load Balancing and Hot Backup
	
	CAUSE
	=====
	
	The APPC library is responsible for locating an available LU 6.2 session that
	matches the parameters (Local APPC LU and Remote APPC LU, for example) requested
	by the application. If there are multiple SNA Server computers that can provide
	the requested Local and/or Remote APPC LUs, the APPC Library contacts the SNA
	Server computers in a random order according to how the servers are listed in
	the SNA Client's Service Table. The SNA Server computer can respond to the
	session requests with various errors depending on the state of its configured
	connections and the availability of the LU 6.2 sessions on those connections.
	
	When the APPC library receives these error responses from the available SNA
	Server computers, it ranks the errors it receives to determine which SNA Server
	computer has the greatest probability of providing the requested LU 6.2
	session.
	
	This problem occurs when SNA Server receives an LU 6.2 session request for
	sessions that are defined to use a connection that is in an Inactive or Pending
	state. The SNA Server service returns an error to the APPC Library that is the
	same error that it returns for an Active connection that does not currently have
	any suitable active LU 6.2 sessions available. Therefore, the APPC library ranks
	these Inactive and/or Pending connections at the same level as Active
	connections. If one of these Inactive or Pending connections is identified as
	the best connection, the APPC/5250 application will fail to get a session.
	
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in. Microsoft has confirmed this to
	be a problem in SNA Server versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3 and 4.0. This
	problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : :2.1,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
