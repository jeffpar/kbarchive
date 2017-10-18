---
layout: page
title: "Q106124: Microsoft 6.x Backup Doesn't Back Up Empty Subdirectories"
permalink: kb/106/Q106124/
---

## Q106124: Microsoft 6.x Backup Doesn't Back Up Empty Subdirectories

	Article: Q106124
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Backup for Windows and Microsoft Backup for MS-DOS do not back up or
	restore empty subdirectories during partial backups whether you select an empty
	subdirectory or a group of directories that includes both an empty subdirectory
	and populated subdirectories.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- You can back up and restore an empty subdirectory if you back up the entire
	  source drive's contents by selecting All Files in the Backup From box.
	
	-or-
	
	- You can back up a partial group of subdirectories and files by selecting the
	  Restore Empty Directories and Prompt Before Creating Directories options
	  after choosing the Options button on the Restore screen. However, be aware
	  that you will be prompted for each unwanted subdirectory from the entire
	  source disk.
	
	MORE INFORMATION
	================
	
	Normally, when you select a directory in Backup for MS-DOS, the selected
	directory appears with an arrow beside it, indicating that the directory
	contains files and will be backed up. However, an empty subdirectory selected in
	Backup for MS-DOS appears without an arrow.
	
	If you select an empty subdirectory in Backup for Windows, a black square appears
	beside it, which is the same symbol that appears when you select a populated
	directory.
	
	A partial backup of drives cannot restore empty subdirectories; empty
	subdirectories can only be restored with full backups.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0 and 6.2. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 6.00 6.20 MSBackup MWBackup empty directory select phantom restore
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
