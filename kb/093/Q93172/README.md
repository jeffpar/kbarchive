---
layout: page
title: "Q93172: CURRENT.STS Stored According to USER Environment Variable"
permalink: /kb/093/Q93172/
---

## Q93172: CURRENT.STS Stored According to USER Environment Variable

	Article: Q93172
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1,2.0,2.1.49
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1, 2.0, 2.1.49 
	-------------------------------------------------------------------------------
	
	When a system does not have any value assigned to the INIT environment
	variable, Programmer's Workbench uses the value of the USER
	environment variable to determine where to store the CURRENT.STS file.
	
	For example, the USER environment variable is set with the following
	MS-DOS command in the AUTOEXEC.BAT file or at the MS-DOS prompt:
	
	  SET USER=username
	
	If the current directory is C:\TEST and the INIT environment variable
	does not exist, PWB attempts to create the CURRENT.STS file in the
	C:\TEST\username directory.
	
	Additional query words: kbinf 1.00 1.10 2.00 2.1.49 novell PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB200DOS kbPWB2149DOS
	Version           : MS-DOS:1.0,1.1,2.0,2.1.49
	
	=============================================================================
	
