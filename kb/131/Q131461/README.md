---
layout: page
title: "Q131461: Forcing Windows NT Clients to Use Non-Named Pipe LAN Transport"
permalink: kb/131/Q131461/
---

## Q131461: Forcing Windows NT Clients to Use Non-Named Pipe LAN Transport

	Article: Q131461
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During SNA Server Windows NT client setup, you configure which LAN transport the
	SNA Server client should use to communicate to the SNA Server. SNA Server 2.0
	supports Microsoft Networking (Named pipes) or Novell Netware (IPX/SPX). SNA
	Server 2.1 supports those, plus Banyan Vines, and TCP/IP.
	
	SNA Server version 2.0 and 2.1 Windows NT clients default to named pipes even
	when the TCP/IP sockets, NetWare IPX/SPX, or Banyan IP interface is the only
	option chosen.
	
	CAUSE
	=====
	
	In version 2.0 and 2.1, the SNA Server Windows NT client software defaults
	internally to use named pipes, even if named pipes is not chosen during SNA
	Server client setup.
	
	
	RESOLUTION
	==========
	
	This problem is fixed in SNA Server 2.11. Under 2.11, the SNA Server Windows NT
	client will only try the LAN transport(s) configured during SNA Server Windows
	NT client setup.
	
	WORKAROUND
	==========
	
	Under SNA Server 2.0 and 2.1, the following registry setting can be used to
	force the SNA Server Windows NT client to try a specific transport first:
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\Parameters
	
	  TransportBase: REG_DWORD: 1
	
	This will cause the SNA Server client to try the first transport selected in the
	SNA client installation, assuming the Microsoft Networking (named pipes) option
	is not chosen. If the client-server connection attempt fails, the SNA Server
	client will try the next transport configured during SNA client setup. If all of
	these fail, named pipes is tried.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT,
	versions 2.0 and 2.1. This problem has been corrected in SNA Server for Windows
	NT version 2.11.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
