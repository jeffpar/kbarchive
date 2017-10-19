---
layout: page
title: "Q159340: Err Msg: This File Is Not a Windows Help File"
permalink: /kb/159/Q159340/
---

## Q159340: Err Msg: This File Is Not a Windows Help File

	Article: Q159340
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a,3.1,3.11; WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): win31 win95
	Last Modified: 19-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a Help (.hlp) file located on the Microsoft Windows 95
	CD-ROM using Microsoft Windows or Windows for Workgroups version 3.x, the
	following error message is displayed:
	
	  This file is not a Windows Help file.
	
	When you click OK, you receive the following error message:
	
	  A newer version of Help is needed to view this Help file.
	
	CAUSE
	=====
	
	Due to formatting changes made in Windows 95 Help files, the Windows or Windows
	for Workgroups 3.x version of Winhelp.exe is unable to open Windows 95 Help
	files. This includes the uncompressed Help files located on the Windows 95
	CD-ROM.
	
	RESOLUTION
	==========
	
	Upgrade your version of Windows to Windows 95.
	
	MORE INFORMATION
	================
	
	When you upgrade Windows or Windows for Workgroups 3.x to Windows 95, the old
	version of Winhelp.exe is replaced with new versions of Winhelp.exe and
	Winhelp32.exe. These versions can open the uncompressed Help files located on
	the Windows 95 CD-ROM, and allow for backwards compatibility in that they are
	also able to open Windows or Windows for Workgroups 3.x Help files.
	
	Additional query words: 3.00 3.00a 3.10 3.11 hlp
	
	======================================================================
	Keywords          : win31 win95 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.0,3.0a,3.1,3.11; WINDOWS:3.1,3.11,95
	
	=============================================================================
	
