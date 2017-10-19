---
layout: page
title: "Q309150: PRB: SNA Server Sends Incorrect Format 3 XID Commands"
permalink: /kb/309/Q309150/
---

## Q309150: PRB: SNA Server Sends Incorrect Format 3 XID Commands

	Article: Q309150
	Product(s): Microsoft SNA Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 07-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server and Host Integration Server 2000 use exchange identification (XID)
	commands to negotiate their link roles. Format 3 XID commands contain a setting
	for a data link control (DLC) type.
	
	When you connect through a channel connection, SNA Server and Host Integration
	Server 2000 may incorrectly mark outgoing format 3 XID commands with a DLC type
	of SDLC (0x01) instead of System/370 channel to controller (0x02).
	
	CAUSE
	=====
	
	If you do not configure the Local Node ID setting on a channel connection, the
	SNA Server service incorrectly sends out the format 3 XID command with a DLC
	type of SDLC (0x01).
	
	RESOLUTION
	==========
	
	To resolve this problem, configure a Local Node ID on the System Identification
	tab of the channel connection. You must do this even if the remote host system
	does not require a Local Node ID. In most cases, you can use the default Local
	Node ID of 05D FFFFF.
	
	MORE INFORMATION
	================
	
	Byte 17 of the format 3 XID command represents the DLC type. For more
	information on XID commands, refer to the IBM SNA Formats documentation (IBM
	Document GA27-3136-12).
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: HIS 2000
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
