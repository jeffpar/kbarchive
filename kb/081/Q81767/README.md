---
layout: page
title: "Q81767: System Changes Made by PC Tools 7.1 with Windows 3.0 and 3.1"
permalink: /kb/081/Q81767/
---

## Q81767: System Changes Made by PC Tools 7.1 with Windows 3.0 and 3.1

	Article: Q81767
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When PC Tools 7.1 is installed on a system running Microsoft Windows or Windows
	for Workgroups, PC Tools makes some or all of the following changes to the
	SYSTEM.INI and WIN.INI files.
	
	MORE INFORMATION
	================
	
	Changes Made to [386ENH] Section of SYSTEM.INI
	----------------------------------------------
	
	  device=*vdmad   is changed to      device=vdmad.386
	  device=*vfd     is changed to      device=vfd.386
	
	Changes Made to WIN.INI
	-----------------------
	
	The following three utilities are added to the LOAD= line in the [windows]
	section of the WIN.INI file:
	
	  c:\pctools\wnschedl.exe
	  c:\pctools\wnlaunch.exe
	  c:\pctools\wntsrman.exe
	
	The following line is added to the [EXTENSIONS] section of the WIN.INI file:
	
	     set=wnbackup.exe ^.set
	
	The PC Tools products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these product's
	performance or reliability.
	
	
	Additional query words: 3.00 3.00a 3.10 disable 3rdparty wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
