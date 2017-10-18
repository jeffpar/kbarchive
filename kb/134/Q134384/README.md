---
layout: page
title: "Q134384: Configuring for Additional Sessions under IPX/SPX"
permalink: kb/134/Q134384/
---

## Q134384: Configuring for Additional Sessions under IPX/SPX

	Article: Q134384
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set up the Windows 3.x SNA Client over Novell's IPX/SPX stack and a
	3rd party product such as Netsoft's Midrange Bundle, you can not run multiple
	sessions or can only run a limited number of sessions.
	
	RESOLUTION
	==========
	
	To configure for multiple sessions, change your NET.CFG file as follows to
	increase sessions and reduce the number of read buffers that SNA Client uses.
	
	NOTE: The following information is base on a Windows 3.1 computer using Novell's
	VLM's and Netsoft's Midrange Bundle. These changes allowed an increase in the
	number of sessions that could be run at one time from 5 to 15 on the client.
	
	In the [WNAP] section of the WIN.INI file add the following line:
	
	"SPXReadBuffers = 2" (without the quotation marks)
	
	In NET.CFG file, add the following:
	
	"Protocol Stack IPX
	IPX Sockets = 40
	SPX Connections = 50" (without the quotation marks)
	
	
	Additional query words: prodsna ipx spx
	
	======================================================================
	Keywords          : kbnetwork sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:2.11,3.0,4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
