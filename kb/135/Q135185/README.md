---
layout: page
title: "Q135185: Cannot View NetWare Server Files with Arcada Backup Exec 3.58"
permalink: /kb/135/Q135185/
---

## Q135185: Cannot View NetWare Server Files with Arcada Backup Exec 3.58

	Article: Q135185
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Backup Exec Windows Workstation Edition 3.58 by Arcada
	Software on a computer running the Microsoft Client for NetWare Networks to
	browse a NetWare server, you may not be able to view files that exist in
	directories that also contain subdirectories.
	
	If you select such a directory for backing up, the files in the directory are
	backed up correctly, but you receive an error message for each file in the
	directory.
	
	You can view files in directories that contain no subdirectories normally.
	
	CAUSE
	=====
	
	This problem occurs because of differences between the Microsoft Client for
	NetWare Networks and the Novell NETX and VLM clients. Backup Exec relies on
	behavior that is changed under the new client redirector.
	
	RESOLUTION
	==========
	
	To view files in directories that contain subdirectories using Backup Exec, use
	Novell's NETX or VLM client instead of the Microsoft Client for NetWare
	Networks.
	
	You may want to contact Arcada Software to inquire about possible updates to the
	Backup Exec program.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
