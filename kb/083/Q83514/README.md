---
layout: page
title: "Q83514: Windows Err Msg: Inadequate DPMI Server"
permalink: kb/083/Q83514/
---

## Q83514: Windows Err Msg: Inadequate DPMI Server

	Article: Q83514
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message after you upgrade your Microsoft
	Windows installation:
	
	  Inadequate DPMI server
	
	CAUSE
	=====
	
	This error can be caused by one of the following:
	
	- A failed upgrade attempt from Windows 3.0 to Windows version 3.1 or to
	  Windows for Workgroups version 3.1 or 3.11, or a combination of Windows 3.0
	  and 3.1 files in the same directory.
	
	  This error message is displayed when KRNL386.EXE and WIN386.EXE are mismatched
	  (one from Windows 3.0 and the other from Windows 3.1). This can happen if
	  KRNL386.EXE is expanded into the Windows\SYSTEM directory during
	  installation, but WIN386.EXE is not.
	
	- An incorrect memory configuration. An example of an incorrect memory
	  configuration would be a machine that does not have the correct value
	  specified for the RAM installed.
	
	- A third party 32-Bit Disk Access driver that conflicts with 32-Bit File
	  Access. To work around this problem either disable 32-Bit Disk Access or
	  32-Bit File Access.
	
	
	Additional query words: 3.1 3.10 3.11 invalid fastdisk vfat
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
