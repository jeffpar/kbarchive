---
layout: page
title: "Q83658: INF: Version Information Resources in VxDs"
permalink: /kb/083/Q83658/
---

## Q83658: INF: Version Information Resources in VxDs

	Article: Q83658
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.1 
	- Microsoft Windows 95 Driver Development Kit (DDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.1 of the Microsoft Windows SDK does not support adding version
	resource information to a Linear Executable (LE) format file. Windows 3.1
	Virtual Devices (VxDs) are stored in LE format. However, tools are available for
	adding version resource information to VxDs for Windows 3.10 and Windows 95.
	
	MORE INFORMATION
	================
	
	For Windows 95, see the sample VXDRES in the DDK for a makefile and templates
	which add a version resource to a VxD file. This version information is
	compatible for use under Windows 3.1 as well.
	
	For Windows 3.1, a tool called ADRC2VXD.EXE is available in the software library
	which duplicates the functionality of the Windows 95 tool. Search the Microsoft
	Download Center for VXDVER.ZIP, which contains ADRC2VXD.EXE and the files
	necessary to build a version resource. See the README file in the archive for
	full information.
	
	Additional query words: 3.10 DDKVXD
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWin95DDKSearch kbWinDDKSearch kbWinDDK310 kbWin95DDK
	Version           : :3.1
	
	=============================================================================
	
