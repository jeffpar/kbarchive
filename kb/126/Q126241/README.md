---
layout: page
title: "Q126241: Clients Cannot Run NetWare System Utilities Through GSNW"
permalink: /kb/126/Q126241/
---

## Q126241: Clients Cannot Run NetWare System Utilities Through GSNW

{% raw %}

	Article: Q126241
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a client computer is connected to a NetWare server shared by Gateway Service
	for NetWare (GSNW) on a Windows NT Server, you cannot use any of the supported
	NetWare system utilities (Syscon, PConsole, Whoami, Filer, etc.) or
	NetWare-aware applications from the client computer.
	
	CAUSE
	=====
	
	The NetWare system utilities and NetWare-aware applications use NetWare client
	application program interface (API) calls. A client computer connected to a
	shared NetWare resource through a Windows NT Server running GNSW, sends and
	receives information through a Server Message Block (SMB)- based redirector that
	cannot interpret any of the NetWare API calls or NCP packets. Client Service for
	NetWare and Gateway Service for NetWare interpret NetWare API calls through
	NWRDR.SYS, but only for local processes.
	
	RESOLUTION
	==========
	
	To run the NetWare system utilities and NetWare-aware applications on the client
	computer:
	
	1. If the client computer is a Windows NT Workstation, install the Client
	  Service for NetWare.
	
	2. If the client computer is using an operating system other than Windows NT,
	  install the NetWare drivers and redirectors in real mode according to the
	  following conditions:
	
	  - If you are using Novell NetWare to work with IPXODI.COM, add the following
	  lines to your AUTOEXEC.BAT file:
	
	  LSL
	  <appropriate ODI driver for your network card>
	  IPXODI
	  NETX /ps=<preferred server name>
	
	  - If you are using Novell NetWare to work with IPX.COM, add the following
	  lines to your AUTOEXEC.BAT file.
	
	  IPX
	  NETX /ps=<preferred server name>
	
	MORE INFORMATION
	================
	
	For a list of supported NetWare utilities and NetWare-aware applications used
	via the Gateway Service for NetWare or Client Service for NetWare, query on the
	following words here in the Microsoft Knowledge Base:
	
	  CSNW GSNW NETWARE SNU
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 4.0
	
	=============================================================================
	

{% endraw %}
