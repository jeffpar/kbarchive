---
layout: page
title: "Q92633: Windows Err Msg: This File Is on a Network Drive with..."
permalink: /kb/092/Q92633/
---

## Q92633: Windows Err Msg: This File Is on a Network Drive with...

{% raw %}

	Article: Q92633
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you save a new file from a Windows-based application to a Novell NetWare
	server, you may receive the following error message:
	
	  This file is on a network drive with create but no modify privileges; ask the
	  administrator of this network to change this condition.
	
	In addition to the error message, a 0 byte file is created on the network drive.
	
	This error occurs when you have read, write, create, modify, and file privileges,
	but not delete privileges, and when the Windows-based application is using
	common dialog boxes (COMMDLG.DLL).
	
	To correct this problem, have the system administrator give you delete privileges
	for the server or directory you are trying to use.
	
	MORE INFORMATION
	================
	
	When you save a new file from an application that uses common dialog boxes, a
	test file is created by COMMDLG.DLL to see if the work file can be created. If
	the test file is created successfully, it is deleted so that the application can
	save the work file. If the attempt to delete the file fails because you don't
	have delete privileges, the above error message is displayed.
	
	
	KBCategory: kbnetwork kb3rdparty kberrmsg
	KBSubcategory: win31
	
	Additional query words: 3.10 box net ware share servers remote volume
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11,95; winnt:4.0
	
	=============================================================================
	

{% endraw %}
