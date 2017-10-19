---
layout: page
title: "Q113479: WFWG 3.11 Err Msg: Error 3: The Specified Path Was Not Found"
permalink: /kb/113/Q113479/
---

## Q113479: WFWG 3.11 Err Msg: Error 3: The Specified Path Was Not Found

	Article: Q113479
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load the real-mode portion of the Microsoft Windows for Workgroups 3.11
	network, you receive the following error message:
	
	  Error 3: The specified path was not found.
	
	CAUSE
	=====
	
	This error occurs after you upgrade Microsoft Workgroups Connections 1.0 to
	Windows for Workgroups 3.11 if the Workgroups Connections directory is listed
	before the Windows for Workgroups 3.11 directory in the PATH statement in the
	AUTOEXEC.BAT file.
	
	RESOLUTION
	==========
	
	- Change the PATH statement so that the Windows for Workgroups directory comes
	  before the Workgroups Connections directory. For example, change
	
	     PATH=C:\DOS;C:\WINDOWS;...   --->WORKGROUP CONNECTIONS 1.0
	
	  to:
	
	    PATH=C:\WINDOWS;C:\DOS;...   --->WINDOWS FOR WORKGROUPS 3.11
	
	  NOTE: The above error message persists if you issue the NET command from the
	  Workgroups Connections directory.
	
	  -or-
	
	- Remove the Workgroups Connections installation.
	
	MORE INFORMATION
	================
	
	The Workgroups Connections NET.EXE command parses the CONFIG.SYS file for the
	location of the PROTOCOL.INI file and cannot locate it since PROTMAN.DOS no
	longer loads from the CONFIG.SYS file.
	
	For instructions on using Microsoft Workgroup Add-On for MS-DOS version 3.11 in
	conjunction with Microsoft Windows for Workgroups 3.11, query on the following
	words in the Microsoft Knowledge Base:
	
	  how to and wgao and wfwg and same and computer
	
	Additional query words: err msg error message 3
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
