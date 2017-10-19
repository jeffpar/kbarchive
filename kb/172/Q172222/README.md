---
layout: page
title: "Q172222: Err Msg: No More Internal File Identifiers Available"
permalink: /kb/172/Q172222/
---

## Q172222: Err Msg: No More Internal File Identifiers Available

	Article: Q172222
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.00
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view files on a network share after a few hours of using your
	Windows NT 4.0-based computer, you may receive the following error message:
	
	  No More Internal File Identifiers Available
	
	-or-
	
	You may receive the following event in the system event log:
	
	  Event Id: 2009
	  Source: Srv
	  Description: The server could not expand a table because the table reached the
	  maximum size.
	
	With the 11th DWORD at 0x28 equal to 0x3e9 (SRV_TABLE_FILE). This indicates that
	no more file IDs (FIDs) can be allocated to process the various open file server
	message blocks (SMBs) because of a shortage of available FIDs.
	
	CAUSE
	=====
	
	This behavior can occur if a third-party program has leaked memory and/or
	resources.
	
	NOTE: One such program is Acrobat Distiller (Distasst.exe) version 3.0 which is
	part of Acrobat Exchange.
	
	RESOLUTION
	==========
	
	To work around this issue, end the offending task.
	
	
	MORE INFORMATION
	================
	
	For more information on the Event 2009 errors, please see the following
	Microsoft Knowledge Base article:
	
	  Q165815 How To Troubleshoot Event ID 2009 Errors
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: handles 3rd connect logoff logout logon log off out on pop-up
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.00
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
