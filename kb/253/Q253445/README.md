---
layout: page
title: "Q253445: System Process Hangs Windows NT with Novell Client 4.6"
permalink: /kb/253/Q253445/
---

## Q253445: System Process Hangs Windows NT with Novell Client 4.6

	Article: Q253445
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork 3rdpartynet kb3rdPartyNetClient
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT 4.0-based server may experience a sudden and steady rise in CPU
	usage that continues to increase until the server stops responding (hangs). In
	Task Manager, the System process appears to be responsible for this behavior.
	
	CAUSE
	=====
	
	The Performance Monitor log indicates that immediately before this behavior
	occurs, there is a dramatic increase in the "Packets received/sec" counter on
	the server.
	
	The Network Monitor log indicates that a Novell server sent a packet to the
	Windows NT-based server. This packet lets the Windows NT-based server know that
	the NetWare server has a message for it. The Windows NT-based server responds by
	requesting the message from the NetWare server. The NetWare server responds with
	an "Unknown Object" response, but still has a bit set in the response that
	causes the Windows NT-based server to query again for the message. This creates
	a continuous loop of requests for the message from Windows NT and denials by
	NetWare.
	
	This locked loop causes the network packet traffic between the servers to run out
	of control, increasing the CPU usage until the Windows NT-based server hangs.
	
	RESOLUTION
	==========
	
	There is a patch from Novell for the NetWare client to install on the Windows
	NT-based server. This patch is for the NetWare Client version 4.6 software.
	
	For additional information about this patch, see the following Novell article on
	the Novell Web site:
	
	  TID10019679
	  Document Title: Broadcast message causes high workstation utilization.
	  Document ID: 10019679
	  Solution ID: 1.0.34940405.2363567
	  Creation Date: 14OCT1999
	  Modified Date: 15DEC1999
	  Novell Product Class: NetWare
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 3rdpartynet kb3rdPartyNetClient 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
