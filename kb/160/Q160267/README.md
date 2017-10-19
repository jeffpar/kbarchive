---
layout: page
title: "Q160267: Error When Xcopying from Lan Manager Server"
permalink: /kb/160/Q160267/
---

## Q160267: Error When Xcopying from Lan Manager Server

	Article: Q160267
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0 2.2
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft LAN Manager, version 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Lanman Manager 2.1 Client, Lan Manager 2.2 Server, or IBM OS/2 Warp system
	attempts to xcopy a file on a Windows NT 4.0 system to itself or location on the
	same or another Windows NT 4.0 system, the operation will fail as follows:
	
	  SYS1192: XCOPY cannot access the source or target drive.
	
	CAUSE
	=====
	
	The server is incorrectly responding to the Server Message Block (SMB) C
	transact2 Query path info, File = <filename>
	
	A network trace will show the following SMB response from the server:
	
	  R transact2 - Server Error, (1) Non-specific error code
	
	The expected response is:
	
	  SMB: R transact2 Open (response)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodlm lanman
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbLanManSearch kbLanMan220
	Version           : WinNT:4.0 2.2
	Issue type        : kbbug
	
	=============================================================================
	
