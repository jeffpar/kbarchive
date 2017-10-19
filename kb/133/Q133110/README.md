---
layout: page
title: "Q133110: Error Message: Volume &quot;Sys&quot; Does Not Exist"
permalink: /kb/133/Q133110/
---

## Q133110: Error Message: Volume &quot;Sys&quot; Does Not Exist

	Article: Q133110
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you log on to a Novell NetWare server and your login script runs, you may
	receive the following error message:
	
	  Volume "SYS" does not exist
	
	CAUSE
	=====
	
	This error message may occur because a directory, and not the volume, referenced
	in the login script does not exist.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one of the following:
	
	- Update your login script to reference a valid directory.
	
	  -or-
	
	- Create the directory on the NetWare server.
	
	MORE INFORMATION
	================
	
	This is most commonly seen when using the following command where Windows NT
	incorrectly reports V5.00 for the %OS_VERSION variable and that directory does
	not exist on the Novell server:
	
	  Map root <drive>:=<server>\sys:public\msdos\%OS_VERSION
	
	Running the same login script from Windows 95 produces the following error
	message:
	
	  Path is invalid in map command
	  "Y:SYS:PUBLIC\MSDOS\V5.00".
	
	Running the same login script from MS-DOS, using the ODI/VLM stack and NetWare's
	Login.exe produces the following error message:
	
	  LOGIN-4.084-915: The specified volume does not exist
	  [ROOT S4:=SYS:PUBLIC\MSDOS\V5.00]
	
	Additional query words: 5.0 mapping connect connecting attach attaching
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
