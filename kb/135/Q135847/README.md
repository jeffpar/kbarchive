---
layout: page
title: "Q135847: Files Open Slowly From NetWare Server"
permalink: kb/135/Q135847/
---

## Q135847: Files Open Slowly From NetWare Server

	Article: Q135847
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a file in Microsoft Word or Microsoft Excel from a computer
	running Windows NT and Client Services for NetWare (CSNW), and the file is
	located on a NetWare server, the file loads 1000 percent slower than it does
	when accessed on a Windows for Workgroups client computer.
	
	CAUSE
	=====
	
	This problem occurs on Windows NT clients using NCP burst mode to load files
	stored on NetWare 3.12 servers in a multiple route WAN environment.
	
	If, during a burst of several fragments, a fragment is received in the wrong
	order or a fragment is dropped, CSNW requests the missing fragment be
	retransmitted. This is usually handled very quickly. However, if two fragments
	are sent and the second fragment arrives first, Windows NT CSNW (NWRDR.SYS) sees
	that the NCP offset is not zero and discards the fragment (packet). When the
	first fragment arrives, Windows NT then waits approximately one second for the
	second fragment to arrive before timing out and requesting that the second
	fragment be retransmitted.
	
	The problem is due to the routers configuration.
	
	WORKAROUND
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	Set the MAXPATH router configuration parameter to 1. This ensures that only one
	network path is used to route NCP burst mode packets.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest U.S. Service Pack for Windows NT
	Workstation or Server version 3.51. For information on obtaining this update,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt ipx spx novell
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
