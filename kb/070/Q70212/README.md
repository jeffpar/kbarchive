---
layout: page
title: "Q70212: Novell MAP ROOT and File Copy Errors"
permalink: kb/070/Q70212/
---

## Q70212: Novell MAP ROOT and File Copy Errors

	Article: Q70212
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the SETUP /N command to set up Microsoft Windows or Windows for Workgroups
	on a Novell NetWare workstation may fail if the Setup program is directed to an
	existing directory that has been mapped with the MAP command instead of using
	the MAP ROOT command.
	
	When the ROOT MAP command is not used, the following error message is displayed:
	
	  ERROR #110 Cannot write to WIN.INI...
	
	MORE INFORMATION
	================
	
	If the pre-existing directory is made a "mapped" drive under a directory where
	the user has no rights, Setup may:
	
	1. Return an
	
	  unknown file copy error
	
	  message.
	
	2. Attempt to create a "standalone" installation, replete with a system
	  subdirectory.
	
	3. Stop responding (hang) when shifting to the graphics mode.
	
	If the user has no rights in the subdirectory above the destination directory,
	the MAP ROOT command must be used.
	
	The proper syntax is the same as used with the MAP command.
	
	Example
	-------
	
	  MAP ROOT H:=SERVER1\SYS:USER\JIM
	
	REFERENCES
	==========
	
	"NetWare DOS/Windows Workstation Update" booklet.
	
	Additional query words: 3.0 3.00 win30 wfwg 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
