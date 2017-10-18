---
layout: page
title: "Q81607: Rebooting from a Batch File with SMARTDRV.EXE Loaded"
permalink: kb/081/Q81607/
---

## Q81607: Rebooting from a Batch File with SMARTDRV.EXE Loaded

	Article: Q81607
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a command that causes the computer to reboot is used in a batch file while
	SMARTDRV.EXE is loaded, the following command should precede the reboot
	command:
	
	     SMARTDRV.EXE /C
	
	MORE INFORMATION
	================
	
	SMARTDRV.EXE writes data to the disk in the background. Normally, the cache (or
	buffer) that contains this information is flushed when there is a brief pause in
	activity. However, in a batch file, there is no significant pause between
	commands, so it is not possible for SMARTDRV.EXE to flush its cache before a
	reboot command is given. This can result in data loss. To correct this problem,
	you must explicitly tell SMARTDRV.EXE to flush its cache. This is done by
	executing SMARTDRV.EXE with the /C parameter as shown above.
	
	For more information on a program that will reboot the computer from a batch
	file, query on the following words in the Microsoft Knowledge Base:
	
	  reboot and batch and jmp
	
	Additional query words: 3.10 3.1 3.11 SMARTDRV.SYS win31 winmem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
