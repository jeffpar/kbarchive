---
layout: page
title: "Q105333: MS-DOS 6.x Err Msg: Error Attempting to Update &lt;FILENAME&gt;.INI"
permalink: /kb/105/Q105333/
---

## Q105333: MS-DOS 6.x Err Msg: Error Attempting to Update &lt;FILENAME&gt;.INI

	Article: Q105333
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If MS-DOS Setup is interrupted by a power loss or system reboot, it can continue
	when you restart the system; however, you may receive the following error
	messages:
	
	  Error attempting to update WINFILE.INI file.
	  Error attempting to update SYSTEM.INI file.
	  Error attempting to update PROGMAN.INI file.
	
	CAUSE
	=====
	
	This problem occurs when you are installing the Windows-based version of
	Microsoft Backup, Microsoft Undelete, or Microsoft Anti-Virus, and your Windows
	installation is not on drive C.
	
	RESOLUTION
	==========
	
	To work around this problem, run SETUP /E to reinstall the optional
	Windows-based programs. This allows Setup the opportunity to correctly update
	your Windows .INI files.
	
	Additional query words: msbackup 6.22 6.00 6.20 6.21 upgrade step-up stepup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
