---
layout: page
title: "Q134547: Arcada Backup Exec Error Message: Drive Not Responding"
permalink: kb/134/Q134547/
---

## Q134547: Arcada Backup Exec Error Message: Drive Not Responding

	Article: Q134547
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
	
	When you use the Microsoft Client for NetWare Networks and Arcada Backup Exec
	Windows Workstation version 3.58 in Windows 95, you may receive one of the
	following error messages:
	
	  - There are no more connections available for this device.
	
	  -or-
	
	  - Drive not responding.
	
	CAUSE
	=====
	
	There is a LASTDRIVE=Z statement in the Config.sys file.
	
	RESOLUTION
	==========
	
	Remove the LASTDRIVE statement from the Config.sys file.
	
	If you must have a LASTDRIVE statement in the Config.sys file for compatibility
	with an MS-DOS-based program, change the LASTDRIVE statement to a last-drive
	letter less than Z. For example, the Config.sys file can contain the following
	line:
	
	  LASTDRIVE=Y
	
	This leaves at least one drive letter at the end of the alphabet that Arcada
	Backup Exec can use for temporary drive mappings.
	
	MORE INFORMATION
	================
	
	The Microsoft Client for NetWare Networks handles drive mappings in protected
	mode properly when there is no LASTDRIVE statement in the Config.Sys file, but
	is bound to use the LASTDRIVE setting in the Config.Sys file if it is present.
	This affects the operation of Backup Exec in the Microsoft Client for NetWare
	Networks.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
