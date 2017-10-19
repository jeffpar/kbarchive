---
layout: page
title: "Q123095: Windows Err Msg: Invalid VxD... Device # 0484, Service 800D..."
permalink: /kb/123/Q123095/
---

## Q123095: Windows Err Msg: Invalid VxD... Device # 0484, Service 800D...

	Article: Q123095
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may occur when you start Windows for Workgroups
	version 3.11:
	
	  Invalid VxD dynamic link call to device # 0484, service 800D. Your Windows
	  configuration is invalid. Run the Windows Setup program again to correct this
	  problem.
	
	After receiving this message, you cannot enter Windows.
	
	CAUSE
	=====
	
	This error message is caused by either a corrupted IFSMGR.386 file, or a missing
	device line in the [386Enh] section of the SYSTEM.INI file.
	
	RESOLUTION
	==========
	
	To correct this error, verify that the device line exists in the SYSTEM.INI
	file. If necessary, edit the SYSTEM.INI file with a text editor, such as Windows
	Notepad or MS-DOS Editor, and add the following line to the [386Enh] section:
	
	  device=ifsmgr.386
	
	Then, expand the file from your original Windows for Workgroups 3.11 disk set to
	your Windows SYSTEM subdirectory. For example, if your hard disk is drive C and
	your Windows directory is called WINDOWS, type the following command:
	
	  c:\windows\expand a:\ifsmgr.38_ c:\windows\system\ifsmgr.386
	
	NOTE: The file IFSMGR.38_ is located on Disk 4 of the 3.5-inch disk set and Disk
	5 of the 5.25-inch disk set.
	
	For more information about using the EXPAND command, type "EXPAND /?" (without
	the quotation marks) at an MS-DOS command prompt.
	
	Additional query words: 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	
	=============================================================================
	
