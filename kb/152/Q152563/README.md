---
layout: page
title: "Q152563: How to Back Up and Restore Files with Microsoft Backup"
permalink: /kb/152/Q152563/
---

## Q152563: How to Back Up and Restore Files with Microsoft Backup

{% raw %}

	Article: Q152563
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95kbfaq
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to back up and restore files with Microsoft Backup.
	
	MORE INFORMATION
	================
	
	To back up files, follow these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click Backup.
	
	  NOTE: For information about how to install Backup, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q152561 How to Install Microsoft Backup
	
	2. Click the Backup tab.
	
	3. Create a backup set. A backup set is an index of the files you plan to back
	  up. The first time you run Backup, a Full System Backup Set is created. This
	  set includes every file on your hard disk.
	
	  NOTE: If you have the original installation disks for the programs you use, it
	  is usually not necessary to back up your programs. Instead, back up only the
	  documents you have created.
	
	  To create a smaller set of selected files, use the Select Files To Backup
	  window. In this window, each drive, folder, and file has a check box next to
	  it. If a check appears in a check box, the file, the contents of the folder,
	  or the contents of the drive will be backed up. If a check appears in a check
	  box with a dark background, some items, but not everything, in the folder or
	  drive will be backed up.
	
	4. Click Next Step.
	
	5. In the "Select a destination for the backup" window, click the destination
	  for the backup.
	
	  If you have a supported tape backup drive that is detected by Backup, it
	  appears at the bottom of the "Select a destination for the backup" window. If
	  you do not have a tape drive, or your tape drive is not supported or
	  detected, you can select a floppy disk drive or a location on your hard
	  disk.
	
	  NOTE: You can also back up your files to a network drive. The easiest way to
	  accomplish this is to map a drive letter to the network destination to which
	  you want to back up your files. If you have mapped a drive letter to a
	  network drive, Backup displays it in the "Select a destination for the
	  backup" window.
	
	6. Click Start Backup. If you have created a new backup set, you are prompted to
	  name the new backup set. Backup informs you when the backup operation is
	  finished.
	
	To restore files, follow these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click Backup.
	
	2. Click the Restore tab.
	
	3. In the Restore From window, click the drive or folder where the backup is
	  stored.
	
	4. In the Backup Set window, click the backup set you want to restore, and then
	  click Next Step.
	
	5. Click the check boxes of the files you want to restore so that a check
	  appears in the check box. Clear the check boxes for files you do not want to
	  restore.
	
	6. Click Start Restore. Backup informs you when the backup operation is
	  finished.
	
	NOTE: If you receive an error message while you are restoring files, Backup
	displays a log showing where the error occurred. For information about how to
	troubleshoot this problem, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q151961 Err Msg: Errors Occurred During this Operation...
	
	Additional query words: money
	
	======================================================================
	Keywords          : win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
