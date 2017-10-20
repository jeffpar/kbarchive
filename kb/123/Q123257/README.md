---
layout: page
title: "Q123257: TCP/IP Socket Numbers Used by SNA Server 2.1"
permalink: /kb/123/Q123257/
---

## Q123257: TCP/IP Socket Numbers Used by SNA Server 2.1

{% raw %}

	Article: Q123257
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SNA Server uses the following socket numbers to support SNA Server clients
	over TCP/IP (over Windows Sockets):
	
	0x05C5 - Socket used to receive SNA application traffic (3270, APPC). This
	        is the socket used to communicate to the SNA Server service.
	
	0x05C6 - Socket used to support SNA Server client "sponsor sessions". This
	        is the socket used to communicate to the Snabase service over
	        which the client workstation receives a list of other SNA Servers
	        running in the domain.
	
	The SNA Server client socket number is allocated dynamically through the
	Windows Sockets interface.
	
	In addition to TCP/IP protocol over Windows Sockets, Microsoft SNA Server
	version 2.1 clients use the following to communicate with the server:
	
	- Named pipes (over any local area network [LAN] transport supported by the
	  Microsoft network redirector included with Windows for Workgroups, Windows
	  NT, or LAN Manager)
	
	- NetWare IPX/SPX
	
	- Banyan IP (over Banyan Vines)
	
	- AppleTalk
	
	The third-party products discussed here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: wfw wfwg prodsna 2.10
	
	======================================================================
	Keywords          : kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	

{% endraw %}
