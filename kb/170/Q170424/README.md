---
layout: page
title: "Q170424: Enhancements to DLSSTAT for 802.2 Distributed Links"
permalink: /kb/170/Q170424/
---

## Q170424: Enhancements to DLSSTAT for 802.2 Distributed Links

	Article: Q170424
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under SNA Server, the DLSSTAT utility shows which SNA Server computer(s) are
	currently using distributed link services. For example
	
	  SnaDlc1 (DLC 802.2 Link Service #1) is used by:
	  \\servername
	
	  SnaDlc2 (DLC 802.2 Link Service #2) is used by:
	
	  SnaDlc3 (DLC 802.2 Link Service #3) is used by:
	  \\servername
	  \\servername2
	
	where the \\servername(s) are the SNA Server running the remote link service(s)
	that currently have an active connection through the distributed link.
	
	However, in complex 802.2 distributed link environments, support personnel may
	want to know more details about the 802.2 connections, including:
	
	- name of remote connection
	
	- remote adapter address and SAP address
	
	- Token Ring source routing information
	
	STATUS
	======
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	An enhancement is planned for SNA Server 3.0 SP2. Dlsstat.exe and the SNA Server
	DLC link service (Snadlc.dll) will be implemented to display more information
	about the state of distributed links. With the updated Dlsstat.exe and
	Snadlc.dll applied, DLSSTAT displays the following additional information:
	
	  SnaDlc1 (DLC 802.2 Link Service #1) is used by:
	  \\servername TOKEN1    400012201000 04    02 101 1 1fe 2 131
	
	  SnaDlc2 (DLC 802.2 Link Service #2) is used by:
	
	  SnaDlc3 (DLC 802.2 Link Service #3) is used by:
	  \\servername  TOKEN1   400012201000 04    02 101 1 1fe 2 131
	  \\servername2 TOKEN1   400012102000 04    02 101 1 1fe 3 2dc
	
	where
	
	  TOKEN1 = connection name on remote server
	  4000122201000  04  = remote adapter address and remote SAP
	  02 101 1 1fe 2 131 = Token Ring source routing information
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
