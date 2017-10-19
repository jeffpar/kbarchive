---
layout: page
title: "Q255227: Partial Domain Synchronization From Server Manager Does Not Work"
permalink: /kb/255/Q255227/
---

## Q255227: Partial Domain Synchronization From Server Manager Does Not Work

	Article: Q255227
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When partial domain synchronization requests are issued through Server Manager,
	they may not succeed and Event Viewer may record neither success nor failure
	events. However, full synchronization requests that use the net accounts /sync
	command from the primary domain controller (PDC) work correctly and Event Viewer
	logs the successful synchronization.
	
	CAUSE
	=====
	
	This behavior can occur when an earlier installation of Novell NetWare Directory
	Services (NDS) for Windows NT was not fully removed from the PDC.
	
	RESOLUTION
	==========
	
	To resolve this behavior, completely remove the Novell NDS program from the
	PDC.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
