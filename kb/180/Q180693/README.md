---
layout: page
title: "Q180693: IPX Clients Fail to Obtain A Sponsor Connection"
permalink: /kb/180/Q180693/
---

## Q180693: IPX Clients Fail to Obtain A Sponsor Connection

	Article: Q180693
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading an SNA Server 2.11 Windows NT or Windows 95 client workstation
	(attached via Netware IPX/SPX) to SNA Server 3.0, 3.0 Service Pack 1 (SP1) or
	SP2, the workstation may fail to obtain a sponsor connection to an SNA Server.
	
	CAUSE
	=====
	
	An SNA Server 3.0 Windows NT or Windows 95 client may issue a Get General Server
	query in an attempt to locate a sponsor SNA server. When the client workstation
	receives the query reply, it will attempt to contact the first server in the
	list that is provided. The client will then create an IPX connection to the
	remote server and query the bindery for the address of the sponsor server. In
	certain situations, possibly due to SAP filtering strategies, the remote bindery
	based server will not have the IPX address and SAP type (0x444) registered for
	the intended SNA Server and the connection attempt will fail.
	
	STATUS
	======
	
	A correction has been made to the SNA Server client IPX interface (SNANCP.DLL)
	which forces the SNA IPX client to query with a Get Nearest Server request first
	before attempting to use a Get General Server query.
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0 SP1,
	and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This problem is fixed in the original retail release of SNA Server 4.0.
	
	MORE INFORMATION
	================
	
	With this SNA Server client update applied, the following registry entry can be
	used to force the client to use only Get General Server queries if required. It
	also works with SNA Server version 4.0.
	
	For Windows NT Clients
	----------------------
	
	Subtree:   HKEY_LOCAL_MACHINE
	Key:       \SYSTEM\CurrentControlSet\Services\SnaBase\Parameters\SnaSpx
	Type:      REG_SZ
	Value:     UseGeneralQuery=YES
	
	For Windows 95 Clients
	----------------------
	
	Subtree:   HKEY_LOCAL_MACHINE
	Key:       \SOFTWARE\Microsoft\SnaBase\Parameters\SnaSpx
	Type:      REG_SZ
	Value:     UseGeneralQuery=YES
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
