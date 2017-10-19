---
layout: page
title: "Q83782: Older NWPOPUP Not Functioning Correctly in Windows"
permalink: /kb/083/Q83782/
---

## Q83782: Older NWPOPUP Not Functioning Correctly in Windows

	Article: Q83782
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using NWPOPUP.EXE, you don't receive messages from other users and
	servers while Windows is running. Instead, the messages are queued and displayed
	after you quit Windows.
	
	CAUSE
	=====
	
	This situation can occur when:
	
	- You use a version of NWPOPUP.EXE that predates the release of Windows 3.1
	  with Microsoft Windows or Windows for Workgroups.
	
	  -or-
	
	- You use the version of NWPOPUP.EXE supplied from Novell.
	
	  -or-
	
	- You use the Windows 3.11 version of NWPOPUP.EXE supplied with Windows for
	  Workgroups 3.11 (which does not include NWPOPUP.EXE).
	
	RESOLUTION
	==========
	
	To correct this problem, use the MS-DOS EXPAND utility that ships with your
	version of Windows to expand and copy a current version of NWPOPUP.EXE from your
	original Windows disks. For example:
	
	  expand a:\nwpopup.ex_ c:\windows\system\nwpopup.exe
	
	NOTE: If there is a version 3.0 NWPOPUP.EXE in the Windows directory, it is
	loaded instead of the Windows 3.1 version.
	
	The following table identifies the location of NWPOPUP.EXE and the size of the
	compressed and expanded file:
	
	Filename        Filename           Disk Number            File Size
	(Expanded)      (Compressed)  1.44MB  1.2MB   720K   (Compressed)(Expanded)
	---------------------------------------------------------------------------
	
	NWPOPUP.EXE     NWPOPUP.EX_     2       3       5        1577       2992
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q121462 Obtaining Latest Novell Client Windows Drivers and DLLs
	
	
	Additional query words: 3.10 Novell print pop messages outdated previous netware 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
