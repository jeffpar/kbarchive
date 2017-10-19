---
layout: page
title: "Q160702: Event 2006 Errors in Xcopy from WinNT 4.0 to OS/2 3.0 Client"
permalink: /kb/160/Q160702/
---

## Q160702: Event 2006 Errors in Xcopy from WinNT 4.0 to OS/2 3.0 Client

	Article: Q160702
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT 4.0 copying files to an OS/2 Warp 3.0 client fails
	with an Event 2006 in the Event Log.
	
	A regular COPY works, as well as copying files from the OS/2 client to the
	computer running Windows NT 4.0.
	
	CAUSE
	=====
	
	The Server Message Block (SMB) that fails is transact2 Query path info with QFS
	Info Level = 0x0004 [SMB_INFO_QUERY_ALL_EAS]. Windows NT 4.0 returns
	
	  SMB error - Server Error, Non-Specific.
	
	The SMB transaction was being processed twice.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.00. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt Event ID 2006
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
