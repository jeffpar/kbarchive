---
layout: page
title: "Q112366: No Network Drives Visible in File Manager or at MS-DOS Prompt"
permalink: kb/112/Q112366/
---

## Q112366: No Network Drives Visible in File Manager or at MS-DOS Prompt

	Article: Q112366
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using an IBM OS/2 LAN Server, Microsoft LAN Manager, or Artisoft
	LANtastic network in conjunction with Microsoft Windows for Workgroups version
	3.11, one or more of the following symptoms occur:
	
	- You receive the following error message when you try to view files on a
	  network drive from either File Manager or the MS-DOS command prompt:
	
	  An error occurred reading drive <x>
	
	- You are not be able to print from MS-DOS-based applications to network
	  printers.
	
	- No files are listed in File Manager for the network drive.
	
	- Directory listings are incomplete.
	
	- Directory listings appear to be corrupted in File Manager.
	
	- You are able to run programs from the network drive only when you specify the
	  full path and filename in the File menu Run dialog box.
	
	CAUSE
	=====
	
	If you select the "Support for the Following Network Only" option in the
	Networks dialog box of Network Setup and then choose one of the following
	
	  100% MS-Net Compatible
	  Artisoft LANtastic (any version)
	  IBM OS/2 LAN Server (any version)
	
	the device for IFSHLP.SYS may not be removed from the CONFIG.SYS file, resulting
	in the above error message. This file conflicts with the proper running of
	Windows when any one of these three network choices is selected.
	
	RESOLUTION
	==========
	
	To correct this problem, remove IFSHLP.SYS from the CONFIG.SYS file.
	
	NOTE: Because IFSHLP.SYS is the real-mode component for the 32-bit file system,
	removing this file takes away the ability to use 32-bit file access. The only
	workaround is to adjust the WindowsMemSize value for SMARTDrive, which should be
	referenced in the AUTOEXEC.BAT file. [For more information, type "help
	smartdrv.exe" (without the quotation marks) at the MS-DOS command prompt.]
	
	To remove this line from the CONFIG.SYS file, open the CONFIG.SYS file in an
	ASCII text editor, such as Windows Notepad, and change
	
	  device=c:\windows\ifshlp.sys*
	
	to:
	
	  REM device=c:\windows\ifshlp.sys
	
	Additional query words: 3.11 permissions r r/w rw directories DOS LAN requestor
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
