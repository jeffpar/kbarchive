---
layout: page
title: "Q138135: Restoring Backups Created with Earlier Versions of MS-DOS"
permalink: /kb/138/Q138135/
---

## Q138135: Restoring Backups Created with Earlier Versions of MS-DOS

{% raw %}

	Article: Q138135
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool kbusage win95kbfaq
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Backup program included with Windows 95 cannot restore files that were
	backed up with an earlier version of Backup (such as the versions of Backup
	included with MS-DOS versions 5.0 and 6.x). To restore backups created with
	earlier versions of Backup, you must use the Restore.exe or Msbackup.exe program
	located on the Windows 95 CD-ROM.
	
	MORE INFORMATION
	================
	
	NOTE: Before you use the Restore.exe or Msbackup.exe program on the Windows 95
	CD-ROM, please read the Lfnbk.txt file in the Admin\ Apptools\Lfnback folder on
	the Windows 95 CD-ROM, or see the following article in the Microsoft Knowledge
	Base:
	
	  Q120442 Using Hard Disk Utilities with Windows 95
	
	Backups Made Using MS-DOS 5.0
	-----------------------------
	
	To restore a backup created with the Backup program included with MS-DOS 5.0, use
	the Restore.exe program located in the Other\Oldmsdos folder on the Windows 95
	CD-ROM. To run this program, copy it to a folder on your hard disk, and then run
	it from a command prompt, making sure to use the appropriate syntax. For
	information about the syntax for the Restore.exe program, type the following
	line:
	
	  " restore /? " (without the quotation marks)
	
	If you receive the error message "Incorrect DOS version" when you try to run
	Restore.exe, type the following line to modify the version table:
	
	  " setver restore.exe 6.22 " (without the quotation marks)
	
	After you type this line, restart your computer, and then try to run Restore.exe
	again.
	
	Backups Made Using MS-DOS 6.x
	-----------------------------
	
	To restore a backup created with the backup programs included with MS-DOS 6.x,
	use the Msbackup.exe program located in the Other\Oldmsdos\Msbackup folder on
	the Windows 95 CD-ROM. To run this program, copy all the files from the folder
	on the Windows 95 CD-ROM to a folder on your hard disk. Double-click the
	Msbackup.exe file in Windows Explorer to start it. For information about using
	the Msbackup.exe program, start the program, and then click Restore on the Help
	menu.
	
	
	======================================================================
	Keywords          : kbtool kbusage win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
