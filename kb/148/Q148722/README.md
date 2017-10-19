---
layout: page
title: "Q148722: MS Backup Reports Incorrect Number of Kilobytes Selected"
permalink: /kb/148/Q148722/
---

## Q148722: MS Backup Reports Incorrect Number of Kilobytes Selected

	Article: Q148722
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The size of selected files in Microsoft Backup is different than the size of the
	same files as reported by Windows Explorer or My Computer.
	
	CAUSE
	=====
	
	A file stored on a disk can consume more disk space than the actual size of the
	file. Windows Explorer and My Computer report the total space used by files on a
	disk, while Microsoft Backup reports the total size of files to be backed up
	based on the actual file sizes.
	
	For additional information about file allocation and how file space is allocated,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q67321 Fat Type and Cluster Size Depends on Logical Drive Size
	
	MORE INFORMATION
	================
	
	Other factors that may cause a difference in the sizes reported are:
	
	- The swap file. The swap file is not included when you back up files.
	
	- The Recycle Bin. Windows 95 uses a system folder to store deleted files. If
	  files are contained in the Recycle Bin, they are not included when you back
	  up files.
	
	Additional query words: MB wrong KB less
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
