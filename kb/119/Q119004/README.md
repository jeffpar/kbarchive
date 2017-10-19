---
layout: page
title: "Q119004: WinNT 3.5 RAS Compression Lost If Linked to Older RAS Version"
permalink: /kb/119/Q119004/
---

## Q119004: WinNT 3.5 RAS Compression Lost If Linked to Older RAS Version

	Article: Q119004
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you have a Remote Access Service (RAS) link established, you notice two
	symptoms:
	
	- In the Port Status dialog boxes of the RAS server and client, the Incoming
	  and Outgoing Compression fields indicate loss of software compression,
	  because they display 0 percent instead of a number greater than zero.
	
	- The effective throughput is much less than usual (presumably because of zero
	  software compression).
	
	These symptoms occur after you upgrade your RAS server or client from Windows NT
	version 3.1 to Windows NT version 3.5 (without Service Pack 2 installed), and
	the RAS client or server on the other side of the RAS link is running a
	downlevel RAS version, such as Windows NT 3.1 RAS or Windows for Workgroups
	version 3.11 RAS.
	
	NOTE: These symptoms do not occur if the RAS client and server are both running
	Windows NT 3.5.
	
	CAUSE
	=====
	
	The software compression method used in Windows NT version 3.1 RAS and Windows
	for Workgroups version 3.11 RAS is not compatible with the software compression
	used in Windows NT version 3.5.
	
	
	RESOLUTION
	==========
	
	- To work around the throughput problem, use modem hardware compression. This,
	  however, cannot give you as much throughput as RAS software compression.
	  Modem hardware compression is not monitored by RAS; therefore, the Incoming
	  and Outgoing Compression fields always display zero.
	
	- To resolve the display and throughput problems, upgrade Windows NT 3.5 to
	  version 3.51.
	
	  NOTE: Service Pack 2 for Windows NT 3.5 also fixes the throughput problem, but
	  not the display problem.
	
	RAS software compression can significantly improve throughput in comparison to
	modem hardware compression, unless previously compressed files are copied.
	
	For best performance, Microsoft suggests you configure the RAS client software on
	Windows for Workgroups 3.11, Windows NT 3.1, and Windows NT 3.51 (or Windows NT
	3.5 with Service Pack 2 installed) as follows:
	
	1. In Remote Access, make sure the Disable Software Compression option in the
	  Options menu is not checked.
	
	2. Choose the Edit button, then choose the Modem button, and select the
	  following:
	
	   - Enable Hardware Flow Control
	
	   - Enable Modem Error Control
	
	  Clear the Enable Modem Compression check box so software compression and modem
	  compression are not used at the same time (as this reduces throughput).
	
	MORE INFORMATION
	================
	
	If you still don't get compression after installing Windows NT 3.51, verify that
	your downlevel RAS software has the drivers for software compression installed.
	
	Software
	
	Compression in Windows for Workgroups 3.11 and Windows NT 3.1 RAS Clients
	-------------------------------------------------------------------------
	
	Software compression is available by default in these RAS clients unless you set
	the Disable Software Compression option from the Options menu or you purchased
	your copy of Windows for Workgroups 3.11 or Windows NT 3.1 after February 1994.
	You can tell whether or not you have RAS software compression by using the
	following information:
	
	Windows for Workgroups 3.11:
	
	  Filename     Bytes   Compression
	  --------------------------------
	  RASMAC.386   49209   YES
	  RASMAC.386   27193   NO
	
	Windows NT 3.1:
	
	  Filename       Bytes    Compression
	  -----------------------------------
	  ASYNCMAC.SYS   53188    YES
	  ASYNCMAC.SYS   53716    YES
	  ASYNCMAC.SYS   33732    NO
	
	NOTE: The Windows NT 3.1 and Windows for Workgroups 3.11 RAS compression files
	can be obtained from the SUPPORT\RAS directory on the Windows NT 3.5 U.S.
	Service Pack 2 CD.
	
	Additional query words: wfw wfwg prodnt 3.11 3.51 SP2
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.11 3.50 3.51
	
	=============================================================================
	
