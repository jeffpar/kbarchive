---
layout: page
title: "Q128898: Missing Network Software Components in Control Panel"
permalink: /kb/128/Q128898/
---

## Q128898: Missing Network Software Components in Control Panel

	Article: Q128898
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install network software by running Control Panel and
	choosing Network, the network software components are missing.
	
	CAUSE
	=====
	
	This problem occurs when the network software component's corresponding .INF
	file is either damaged or missing.
	
	RESOLUTION
	==========
	
	To correct this problem, use EXPAND.EXE to expand the .INF files for the missing
	network software components from the original installation media to the
	%SystemRoot%\SYSTEM32 subdirectory.
	
	The following table lists the appropriate .INF file for each network software
	component:
	
	File Name      Network Software Component
	---------      --------------------------
	
	OEMNSVBH.INF   Network Monitor Agent (Windows NT 3.5)
	OEMNSVCU.INF   TCP/IP utilities (Windows NT 3.5)
	OEMNSVFT.INF   FTP Server
	OEMNSVNB.INF   NetBIOS Transport Interface
	OEMNSVNW.INF   Client Service for NetWare/Gateway Service for NetWare
	              (Windows NT 3.5)
	OEMNSVRA.INF   Remote Access Server, NetBIOS Gateway, API Layer, RAS
	              Hub and AsyMAC driver
	OEMNSVRI.INF   Remoteboot Service (Windows NT Server 3.5)
	OEMNSVRP.INF   Remote Procedure Call Locator service
	OEMNSVSA.INF   SAP Agent (Windows NT 3.5)
	OEMNSVSM.INF   AppleTalk protocol
	OEMNSVSP.INF   Simple TCP/IP Services (Windows NT 3.5)
	OEMNSVTP.INF   TCP/IP Print Server (Windows NT 3.5)
	OEMNSVWK.INF   Windows NT Workstation
	OEMNXPDL.INF   DLC protocol
	OEMNXPIP.INF   NWLink Transport driver and NWLink NetBIOS driver
	OEMNXPS1.INF   SNMP Service (Windows NT 3.5)
	OEMNXPSM.INF   Service for Macintosh, including the AppleTalk protocol,
	              File Server for Macintosh, Kernel driver and Print Server
	              for Macintosh (Windows NT Server 3.5)
	OEMNXPST.INF   Streams Environment
	OEMNXPTC.INF   TCP/IP protocol, including TCP/IP NetBIOS, Telnet, Loop
	              Support Environment, and TCP/IP NetBIOS helper
	OTHER.INF      "Other" Driver selections
	
	Additional query words: prodnt 3.10 cd-rom cdrom cd
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
