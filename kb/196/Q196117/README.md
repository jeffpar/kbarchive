---
layout: page
title: "Q196117: Files Are Replicated Even When No Sync Appears in Status"
permalink: /kb/196/Q196117/
---

## Q196117: Files Are Replicated Even When No Sync Appears in Status

	Article: Q196117
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows NT 3.51 computer operates as an export server and a Windows NT
	4.0 computer operates as an import server to participate in directory
	replication, the Status column on the import server's Directory Replication
	dialog box may display NO SYNC. This status appears under the heading "Import
	Directories" on the import server. Users have reported that even though the NO
	SYNC status is shown, files appear to be replicated correctly.
	
	RESOLUTION
	==========
	
	This problem is resolved by assuring that the export files contained on the
	Windows NT 3.51 export server are stabilized prior to replication time.
	
	This may be accomplished by performing the following steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  Server.
	
	2. Click Replication.
	
	3. Under Export Directories, click to select Wait Until Stabilized. By default,
	  the Stabilize check box is not selected under Windows NT 3.51 and Windows NT
	  4.0.
	
	
	Additional query words: 3.51 4.00
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
