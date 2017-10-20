---
layout: page
title: "Q103529: FORMAT Overwrites Compressed Volume File on Floppy Disk"
permalink: /kb/103/Q103529/
---

## Q103529: FORMAT Overwrites Compressed Volume File on Floppy Disk

{% raw %}

	Article: Q103529
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	When you format a floppy disk, DoubleSpace may fail to give you the following
	error message:
	
	  You must use "DBLSPACE /FORMAT <drive>:" to format that drive
	
	As a result, you have a freshly formatted non-DoubleSpace-compressed disk.
	
	CAUSE
	=====
	
	This problem occurs if you access an uncompressed floppy disk (for example, DIR
	A:), remove the uncompressed floppy, insert a compressed floppy, and attempt to
	format it. In this situation, the DoubleSpace Automount code is never called,
	and the DoubleSpace-compressed floppy disk is not mounted.
	
	NOTE: This problem may also occur if the Automount feature has been disabled.
	
	RESOLUTION
	==========
	
	If you have already formatted a DoubleSpace-compressed floppy disk, recompress
	the disk with the DBLSPACE /COMPRESS command.
	
	To prevent this problem, access the DoubleSpace-compressed floppy disks before
	formatting them. For example, type the following at the MS-DOS command prompt,
	pressing ENTER after each line:
	
	  " a:
	  format a:" (without the quotation marks)
	
	
	Additional query words: 6.20 auto mount auto-mount dblspace double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
