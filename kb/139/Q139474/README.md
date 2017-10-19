---
layout: page
title: "Q139474: Cannot Access Floppy Drive When Backup Program Is Running"
permalink: /kb/139/Q139474/
---

## Q139474: Cannot Access Floppy Drive When Backup Program Is Running

	Article: Q139474
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are running Microsoft Backup (or another 32-bit Windows-based backup
	program) you may receive the following error message if you try to access a
	floppy disk drive from My Computer or Windows Explorer:
	
	  <drive>:\ is not accessible
	
	You may also receive the following error message:
	
	  device is not ready
	
	These error messages can occur even if there is a formatted disk in the drive.
	
	In addition, if you are performing a backup, restore, or compare operation, the
	operation may be canceled if you try to access the floppy disk drive from a
	command prompt.
	
	MORE INFORMATION
	================
	
	This behavior occurs when you have a tape drive connected to the same floppy
	disk drive controller as the floppy disk drive you are trying to access.
	
	When a 32-bit Windows-based program is accessing one of the drives connected to
	the floppy disk drive controller, all other drives on the controller are
	unavailable. When you attempt to access a floppy disk drive from a command
	prompt, any active backup, restore, or compare operation is canceled because
	Windows 95 cannot prevent floppy disk drive access from occurring when the drive
	is accessed from a command prompt.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
