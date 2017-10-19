---
layout: page
title: "Q111296: WFWG 3.11 Resource Kit Err Msg: THREED.VBX Is Out of Date"
permalink: /kb/111/Q111296/
---

## Q111296: WFWG 3.11 Resource Kit Err Msg: THREED.VBX Is Out of Date

	Article: Q111296
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start some of the utilities that come with the Windows for Workgroups
	Resource Kit version 3.11, the following error message is displayed:
	
	  The file THREED.VBX is out of date. This program requires a newer version.
	
	CAUSE
	=====
	
	This error message is displayed because an older version of THREED.VBX is on the
	hard disk drive and still in memory. Some of the utilities in the Resource Kit
	use the file THREED.VBX to display 3-dimensional controls. Other third party
	applications also use THREED.VBX, so this may occur even though the Resource Kit
	is not installed on the machine.
	
	RESOLUTION
	==========
	
	To correct this problem, search the hard disk drive for any THREED.VBX files
	that are not 64,544 in size and delete them. The correct THREED.VBX, which is
	installed by the Windows for Workgroups Resource Kit, should be located in the
	Windows SYSTEM subdirectory. The file date should be the date that the Windows
	for Workgroups 3.11 Resource Kit utilities were installed on the machine.
	
	After you delete any THREED.VBX files that are not 64,544 in size, exit and
	reenter Windows for Workgroups.
	
	If there is not a THREED.VBX file with the size 64,544, you should expand this
	file from the Resource Kit disk by using the EXPAND.EXE utility. To expand
	THREED.VB_ from the Resource Kit disk, type the following from the Windows
	directory at an MS-DOS command prompt
	
	  expand <a>:\mail\threed.vb_ <c>:\windows\system\threed.vbx
	
	where <a> is the floppy disk drive containing the Resource Kit disk,
	<c> is your hard disk drive, and <windows\system> is your Windows
	SYSTEM subdirectory.
	
	Additional query words: res kit 3.11 3d.vbx err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
