---
layout: page
title: "Q82041: Windows Err Msg: Unexpected DOS Error #11"
permalink: /kb/082/Q82041/
---

## Q82041: Windows Err Msg: Unexpected DOS Error #11

	Article: Q82041
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an MS-DOS-based application is run from Windows version 3.0, 3.0a, or 3.1,
	the following error message may occur:
	
	  Application Execution Error: Unexpected DOS Error #11
	
	CAUSE
	=====
	
	This is a kernel internal error that indicates Windows has tried to execute a
	file that is in an invalid format. This problem occurs in standard or 386
	enhanced mode, and indicates that the 286GRABBER, 386GRABBER, WINOA286.MOD, or
	WINOA386.MOD file or a third-party driver that is loaded is corrupt.
	
	WORKAROUND
	==========
	
	To resolve the error, perform the following steps:
	
	1. Check the video driver. If the video driver is corrupt, one solution may be
	  to install the EGA driver through the Windows Setup program. After installing
	  the EGA driver, reinstall the original video driver.
	
	  NOTE: If you are using Windows 3.0 or 3.0a, install the CGA driver, then
	  reinstall the original driver.
	
	2. Check the DEVICE= lines in the SYSTEM.INI file that do not start with an
	  asterisk (*). The lack of an asterisk indicates an installed third-party
	  device driver. Check these drivers for possible corruption and reinstall them
	  if necessary.
	
	Additional query words: 3.00 3.00a 3.10 KERNEL.EXE 3.11
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
