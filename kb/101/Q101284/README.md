---
layout: page
title: "Q101284: Lucid Lightning Disk-Caching Software and SMARTDrive 4.x"
permalink: /kb/101/Q101284/
---

## Q101284: Lucid Lightning Disk-Caching Software and SMARTDrive 4.x

{% raw %}

	Article: Q101284
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The setup program for Lucid Lightning disk-caching software does not detect
	other disk-caching software, such as Microsoft SMARTDrive version 4.x, if it is
	loaded high in upper memory. If disk-caching software is loaded low, Lucid
	Lightning disables it. In addition, the installations of Windows 3.1, Windows
	for Workgroups 3.1, and MS-DOS 6.0 do not detect third-party disk- caching
	software. As a result, running both disk-caching utilities simultaneously may
	produce cross-linked files or lost clusters.
	
	To correct this problem, disable one of the two disk-caching utilities by
	modifying the AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	Lucid Corporation manufactures the following three versions of its Lightning
	disk-caching software:
	
	- Lightning version 6.0 for DOS
	
	- Lightning version 1.21 for Windows
	
	- Lightning version 1.1 for CD
	
	To disable any version of the Lightning disk-caching software, modify the
	AUTOEXEC.BAT file as follows:
	
	  REM C:\LIGHT60\L
	  REM C:\WINDOWS\LIGHTWIN\L
	  REM C:\LIGHTCD\L
	
	For more information, call Lucid Corporation Technical Support.
	
	The products included here are manufactured by Lucid Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 6.22 6.00 6.20 4.0 4.00 4.1 4.10 third party 3rdparty smartdrv
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
