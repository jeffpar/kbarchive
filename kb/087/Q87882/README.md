---
layout: page
title: "Q87882: Using SHARE.EXE and Sharing Violations with WinLogin"
permalink: /kb/087/Q87882/
---

## Q87882: Using SHARE.EXE and Sharing Violations with WinLogin

{% raw %}

	Article: Q87882
	Product(s): Miscellaneous Windows Products
	Version(s): 1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft WinLogin, version 1.0 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some MS-DOS-based networks use SHARE.EXE to provide file locking and sharing
	capabilities. To run WinLogin 1.0 on these networks, SHARE must be loaded on
	both the client and the server.
	
	Some MS-DOS-based networks, including IBM PC LAN, do not fully support the file
	locking (byte-range locking) necessary to use some types of databases. WinLogin
	will not work with these networks.
	
	For information about ordering Microsoft WinLogin, call the Microsoft Sales
	Information Center (MSIC) at (800) 426-9400, or mail the form supplied with the
	Windows Resource Kit (WRK) for the Microsoft Windows operating system version
	3.1.
	
	MORE INFORMATION
	================
	
	Using SHARE.EXE
	---------------
	
	The default number of files and locks that SHARE.EXE uses may need to be
	increased for WinLogin to operate properly. The recommended configuration for
	SHARE.EXE is as follows:
	
	       SHARE /L:200 /F:4096
	
	This line will provide sufficient files and locks for most WinLogin
	installations.
	
	Sharing Violations
	------------------
	
	A "Sharing Violation on Drive X:" error may occur during the setup of WinLogin
	1.0 in the following situations:
	
	1. After the client installation of WinLogin has completed. The VER.DLL file is
	  being used by both Windows and the WinLogin setup programs.
	
	  To correct for this problem, choose the OK button on the error dialog, then
	  close and re-start Windows to run as a WinLogin client.
	
	2. If the WinLogin Setup fails. Check for the existence of the directory called
	  "\MS-SETUP.T" that may have been left in the root directory of the local hard
	  drive. If this directory exists, and it contains the file, VER.DLL, then any
	  subsequent attempts to run Setup will produce the Sharing Violation message.
	
	  To correct for this problem:
	
	  a. Delete all files from this directory.
	
	  b. Remove the directory from the hard drive and rerun Setup.
	
	For further information about WinLogin, query on the following word in the
	Microsoft Knowledge Base:
	
	  WinLogin
	
	Additional query words: 1.00 1.0 3.10 3.1 LAN Manager novell network winlog LANMan
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : :1.0,3.1,3.11
	
	=============================================================================
	

{% endraw %}
