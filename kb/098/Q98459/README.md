---
layout: page
title: "Q98459: Determining Which Files to Back Up When You Use DoubleSpace"
permalink: /kb/098/Q98459/
---

## Q98459: Determining Which Files to Back Up When You Use DoubleSpace

{% raw %}

	Article: Q98459
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use DoubleSpace, you should back up the files on your compressed
	volume, not the compressed volume file (CVF) on the host drive. For example, if
	you have compressed drive C and DoubleSpace has created the host drive as drive
	H, you should back up all your files on drive C and any data files left on drive
	H. You do not need to back up any DBLSPACE.<nnn> files (for example,
	DBLSPACE.000) on the host drive.
	
	This allows you to restore single files from drive C if necessary. If you back up
	only the DBLSPACE.<nnn> file(s) you can restore only an entire drive. This
	could be a problem because all changes to all files (on the compressed drive)
	since the last backup are overwritten when you restore the DBLSPACE.<nnn>
	file.
	
	For more information on DoubleSpace terminology, run DoubleSpace, choose Contents
	from the Help menu, and then select Understanding DoubleSpace Terms.
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	
	Additional query words: 6.00 6.20 double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
