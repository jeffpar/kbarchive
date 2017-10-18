---
layout: page
title: "Q100852: Can't Delete Setup Filename with MWBACKUP"
permalink: kb/100/Q100852/
---

## Q100852: Can't Delete Setup Filename with MWBACKUP

	Article: Q100852
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You saved a setup file from Microsoft Backup or Microsoft Backup for Windows,
	and you used a space in the filename (for example, "MY WORK.SET").
	
	You can open that setup file, but you cannot delete it by choosing Delete Setup
	from the File menu in Microsoft Backup for Windows.
	
	WORKAROUND
	==========
	
	Use the MS-DOS-based version of Microsoft Backup to delete the setup file, or
	use the MS-DOS DELETE command with the question mark wildcard. For example, to
	delete "MY WORK.SET," type
	
	  " del my?work.set" (without the quotation marks)
	
	at the MS-DOS command prompt, and then press ENTER.
	
	Additional query words: 6.00 file name MSBACKUP.EXE MWBACKUP.EXE windows-based 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
