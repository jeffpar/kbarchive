---
layout: page
title: "Q136813: PPP.LOG File Not Created Or Has File Size of 0"
permalink: kb/136/Q136813/
---

## Q136813: PPP.LOG File Not Created Or Has File Size of 0

	Article: Q136813
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use Registry Editor to configure Remote Access Services (RAS) to use a
	PPP.LOG file, the file may not be created or, the file size may be displayed as
	zero bytes, even though the file contains information about the previous RAS PPP
	connection.
	
	CAUSE
	=====
	
	RAS uses the PPP.LOG file to log information about PPP connections between a
	Windows NT RAS client or server and a remote PPP client or server.
	
	If you enable the PPP.LOG file, you restart both the RAS server service and the
	RAS client before the PPP.LOG file will be created. If you are running one of
	these two processes, you need to restart only that process.
	
	If you look at the PPP.LOG file size while RAS is running, it may be zero bytes.
	This is by design. RAS continues to use the PPP.LOG therefore, the file size may
	not be updated properly. To update the file size while the PPP.LOG file is still
	in use, simply access the file in some way. For example, open the file in
	Notepad or use the TYPE command to echo the contents of the file to the
	console.
	
	For additional instructions on how to use the Windows NT Registry Editor to
	enable the PPP.LOG file, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q115929
	  TITLE : Enabling PPP Logging in Windows NT
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
