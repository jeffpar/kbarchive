---
layout: page
title: "Q126618: Cannot See All NetWare Volumes from Windows NT"
permalink: /kb/126/Q126618/
---

## Q126618: Cannot See All NetWare Volumes from Windows NT

	Article: Q126618
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT machines do not see all available NetWare volumes on a NetWare server
	when you browse the network or run NET VIEW. MS-DOS-based and Windows-based
	network clients have no problems seeing all the shared resources on the same
	NetWare server.
	
	CAUSE
	=====
	
	This situation occurs when there is a problem with the NetWare server bindery.
	
	RESOLUTION
	==========
	
	To correct this problem, run the NetWare server BINDFIX utility. It may be
	necessary to perform a more thorough check of the NetWare Bindery than BINDFIX
	can perform. On one occasion the problem with the Bindery didn't show up until
	the user attempted restore it to a new NetWare server.
	
	Additional query words: prodnt 3.50 csnw nwcs gsnw gateway
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
