---
layout: page
title: "Q64570: Windows 3.0 Enhanced Mode Virtual Machine and Fastopen, Share"
permalink: kb/064/Q64570/
---

## Q64570: Windows 3.0 Enhanced Mode Virtual Machine and Fastopen, Share

	Article: Q64570
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	If you launch an MS-DOS command box (an MS-DOS virtual machine) under
	Microsoft Windows or Windows for Workgroups, you can't run FASTOPEN.EXE or
	SHARE.EXE. Even if you have not loaded the Fastopen program before running
	Windows, you receive a message that reports that Fastopen or Share has
	already been loaded.
	
	The message telling you that Fastopen or Share has already been started is
	by design. The message was implemented to prevent Fastopen and Share from
	being started in a virtual machine because they can crash the system. This
	is because these utilities are all MS-DOS kernel extensions and MS-DOS and
	Windows are not set up to support loading MS-DOS kernel extensions in a
	virtual machine.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
