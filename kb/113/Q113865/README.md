---
layout: page
title: "Q113865: NET 0101 Error Installing Microsoft TCP/IP on WFWG 3.11"
permalink: kb/113/Q113865/
---

## Q113865: NET 0101 Error Installing Microsoft TCP/IP on WFWG 3.11

	Article: Q113865
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11; :1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft TCP/IP, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting up Windows for Workgroups 3.11 with Microsoft TCP/IP may return this
	error:
	
	  NET 0101: Value for keyword not found in PROTOCOL.INI or TCPUTILS.INI file
	
	CAUSE
	=====
	
	Version 1.0 of Microsoft TCP/IP does not create the TCPUTILS.INI file correctly
	on Windows for Workgroups 3.11.
	
	RESOLUTION
	==========
	
	Version 1.0A of Microsoft TCP/IP corrects this problem. It is available from
	Microsoft Product Support Services.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft TCP/IP version 1.0.
	This problem was corrected in the Microsoft TCP/IP version 1.0A.
	
	MORE INFORMATION
	================
	
	Here is an example TCPUTILS.INI file created by Microsoft TCP/IP 1.0A:
	
	TCPUTILS.INI
	
	[tcpglobal]
	username=<username>
	NetFiles=C:\<directory name>
	hostname=<hostname>
	drivername=GLOBAL$
	
	[sockets]
	drivername=SOCKETS$
	bindings=TCPIP_XIF
	numsockets=4
	numthreads=32
	poolsize=3200
	maxsendsize=1024
	
	[telnet]
	drivername=TELNET$
	bindings=TCPIP_XIF
	nsessions=0
	max_out_sends=0
	
	Additional query words: WFW WFWG 3.11 TCPIP
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbWFW311 kbTCPIP100 kbTCPIP100a
	Version           : WINDOWS:3.11; :1.0,1.0a
	
	=============================================================================
	
