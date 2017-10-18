---
layout: page
title: "Q125625: Software Compression Compatibility in Windows NT 3.5 RAS"
permalink: kb/125/Q125625/
---

## Q125625: Software Compression Compatibility in Windows NT 3.5 RAS

	Article: Q125625
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Several fixes were made to Windows NT Remote Access Service (RAS) that are
	included in the latest U.S. Service Pack for Windows NT version 3.5. This
	article provides background information on client compatibility with RAS.
	
	MORE INFORMATION
	================
	
	NOTE: If you don't already have RAS installed, install it from your original
	Windows NT installation media before applying the Service Pack.
	
	RAS Software Compression Compatibility with Windows for Workgroups 3.11
	
	and Windows NT 3.1
	------------------
	
	In addition to other fixes, the Service Pack installs files that make Windows NT
	3.5 software compression compatible with Windows for Workgroups 3.11 and Windows
	NT 3.1. Throughput should improve significantly unless previously compressed
	files are copied. For best performance, Microsoft suggests you configure the RAS
	client software on Windows for Workgroups 3.11, Windows NT 3.1, and Windows NT
	3.51 (or Windows NT 3.5 with Service Pack 2 installed) as follows:
	
	1. In Remote Access, make sure the Disable Software Compression option in the
	  Options menu is not selected.
	
	2. Choose the Edit button, then choose the Modem button, and select the
	  following:
	
	   - Enable Hardware Flow Control
	
	   - Enable Modem Error Control
	
	  Clear the Enable Modem Compression check box so software compression and modem
	  compression are not used at the same time (as this reduces throughput).
	
	Windows NT Servers and Clients and RAS Software Compression
	-----------------------------------------------------------
	
	If you install the Service Pack on a Windows NT 3.5 RAS server, unmodified
	Windows NT 3.5 RAS clients do not lose software compression compatibility when
	calling the RAS server. Windows for Workgroups 3.11 and Windows NT 3.1 RAS
	clients can use RAS software compression without any need for new files, except
	as noted below.
	
	All copies of Windows NT 3.5 have RAS software compression built-in. Only Windows
	NT 3.5 computers that are acting as RAS servers need the Service Pack for
	compression compatibility with Windows NT 3.1 and Windows for Workgroups 3.11
	RAS clients. However, because of several code improvements, Microsoft recommends
	that you also apply this patch to Windows NT 3.5 RAS clients. The patch is
	required for RAS software compression compatibility when you call a Windows NT
	3.1 or Windows for Workgroups 3.11 RAS server from a Windows NT 3.5 RAS client.
	
	Software Compression in Windows for Workgroups 3.11
	
	and Windows NT 3.1 RAS Clients
	------------------------------
	
	Software compression is available, by default, in the following RAS clients
	unless you select Disable Software Compression from the Options menu, or you
	purchased your copy of Windows for Workgroups 3.11 or Windows NT 3.1 after
	February 1994. You can tell whether or not you have RAS software compression by
	using the following information:
	
	Windows for Workgroups 3.11:
	
	  Filename     Bytes   Compression
	  --------------------------------
	  RASMAC.386   49209   Yes
	  RASMAC.386   27193   No
	
	Windows NT 3.1:
	
	  Filename       Bytes    Compression
	  -----------------------------------
	  ASYNCMAC.SYS   53188    Yes
	  ASYNCMAC.SYS   53716    Yes
	  ASYNCMAC.SYS   33732    No
	
	NOTE: The Windows NT 3.1 and Windows for Workgroups 3.11 RAS compression files
	can be obtained from the SUPPORT\RAS directory on the Windows NT 3.5 U.S.
	Service Pack 2 compact disc.
	
	STATUS
	======
	
	These fixes are included in the latest Windows NT 3.5 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
