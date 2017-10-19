---
layout: page
title: "Q193840: RAS Fails with NetBEUI Protocol Service Failed to Start Error"
permalink: /kb/193/Q193840/
---

## Q193840: RAS Fails with NetBEUI Protocol Service Failed to Start Error

	Article: Q193840
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Remote Access Service, you receive the following error:
	
	  Error starting Remote Access Service on <servername>. Check the Event
	  log on <servername> for details. Error 1068: The dependency service or
	  group failed to start.
	
	The System Event log on <servername> contains the following errors:
	
	  Event Id 7000
	  The NetBEUI Protocol failed to start due to the following
	  error: The system cannot find the file specified.
	
	  Event Id 7001
	  The Remote Access Service depends on the NetBEUI protocol service
	  which failed to start because of the following error:
	  The system cannot find the file specified.
	
	CAUSE
	=====
	
	The Nbf.sys file may be missing or corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and reinstall the NetBEUI Protocol from Network
	utility in Control Panel, and then reapply the latest service pack.
	
	Additional query words: 7000 7001 1068 NetBEUI RAS
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
