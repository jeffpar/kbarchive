---
layout: page
title: "Q100794: MSBACKUP Fails on DEC or Dell with Logically Swapped Disks"
permalink: /kb/100/Q100794/
---

## Q100794: MSBACKUP Fails on DEC or Dell with Logically Swapped Disks

{% raw %}

	Article: Q100794
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a Digital Equipment Corporation (DEC) or Dell system and you use the
	BIOS option to logically swap drives A and B, Microsoft Backup and Microsoft
	Backup for Windows cannot back up or restore files to those drives.
	
	CAUSE
	=====
	
	This problem occurs because Microsoft Backup reads from the floppy disk drive
	through BIOS disk services but writes to the floppy disk drive directly through
	the I/O ports.
	
	Microsoft Backup can work successfully with logically swapped floppy disk drives
	that are implemented by physically exchanging the hardware signals.
	
	WORKAROUND
	==========
	
	You may be able to work around this situation by using MS-DOS Path as your
	backup destination.
	
	
	Additional query words: 6.00 logical msbackup.exe mwbackup.exe ms- dos-based windows-based 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
