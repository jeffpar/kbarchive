---
layout: page
title: "Q97867: Using Include/Exclude Correctly with Microsoft Backup"
permalink: kb/097/Q97867/
---

## Q97867: Using Include/Exclude Correctly with Microsoft Backup

	Article: Q97867
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some people have difficulty using the include and exclude options in Microsoft
	Backup and Microsoft Backup for Windows. This article clarifies the use of
	include and exclude.
	
	MORE INFORMATION
	================
	
	Include/Exclude Fails When Using a Default Setup File
	-----------------------------------------------------
	
	If you try to include or exclude a file or directory when you use Microsoft
	Backup, the actual files backed up may not match what you expect. For example,
	to back up your MS-DOS directory (usually c:\DOS) but exclude the *.EXE files,
	you would include C:\DOS\*.* and then exclude all the C:\DOS\*.EXE files;
	however, if you do so, all files in the MS-DOS directory may still be included
	in the backup.
	
	If you select a directory from which you have excluded files, you either select
	or clear all the files in that directory; any inclusions and exclusions are no
	longer active. If you want to include or exclude a file in a directory after you
	have selected or cleared the directory's files, hold the SHIFT key and select
	(or clear) the file.
	
	Includes and excludes are performed in the order that you specify; therefore, if
	you exclude the *.EXE files first and then include the entire directory,
	Microsoft Backup includes the entire directory.
	
	This situation also occurs when your default backup configuration overrides your
	manual excludes.
	
	To correct this situation, do the following:
	
	1. Run Microsoft Backup and choose the Backup button.
	
	2. In the Backup From box, select the drive to back up from. Select the drive
	  icon again so that there is no text (such as Some Files or All Files) beside
	  it. Note: You can select the drive icon by double-clicking or pressing
	  SPACEBAR.
	
	3. Choose the Select Files button and then use one of the following methods to
	  include and exclude files:
	
	   - Use the mouse pointer
	
	   - Select a file and press SPACEBAR
	
	   - Use the Include or Exclude dialog boxes
	
	
	Additional query words: 6.00 msbackup mwbackup 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
