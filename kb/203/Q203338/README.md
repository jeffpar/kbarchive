---
layout: page
title: "Q203338: 16-Bit Apps Fail if Names Longer Than 8.3 Naming Convention"
permalink: kb/203/Q203338/
---

## Q203338: 16-Bit Apps Fail if Names Longer Than 8.3 Naming Convention

	Article: Q203338
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Client Services for NetWare (CSNW) or the IntranetWare Client with
	Microsoft Windows NT Workstation 4.0, and you attempt to access 16-bit
	applications on a NetWare Server in Bindery mode, the applications fail to
	start. This behavior occurs if the path to the executable file from the drive
	mapping contains folder names that are longer than allowed by the 8.3 naming
	convention.
	
	For example, the following path fails
	
	  \\Server\Exchange5.0\Windowsnt\Setup.exe
	
	while this path succeeds:
	
	  \\Server\Exch5.0\Winnt\Setup.exe
	
	With CSNW, when the path is too long, you receive the following error message:
	
	  Path not found
	
	With the IntranetWare Client, you receive this error message:
	
	  Invalid path
	
	
	WORKAROUND
	==========
	
	To work around this behavior, rename the folders on the server to conform to the
	8.3 naming convention, or map the drive to the application so that file names
	longer than allowed by the 8.3 naming convention are not in the path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Workstation
	version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
