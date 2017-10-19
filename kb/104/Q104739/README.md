---
layout: page
title: "Q104739: Apps and Copying Files to Floppy Seem Slow with Automount"
permalink: /kb/104/Q104739/
---

## Q104739: Apps and Copying Files to Floppy Seem Slow with Automount

	Article: Q104739
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	Under MS-DOS 6.2, copying files to (or from) removable media disks seems slower
	when the Automount switch for DoubleSpace-compressed floppy disks is enabled.
	Applications that are disk intensive (such as Microsoft Defragmenter [Defrag])
	may also seem slower under MS-DOS 6.2 when accessing removable media disks.
	
	CAUSE
	=====
	
	The additional Automount functionality comes with some performance tradeoffs.
	Those who want maximum floppy performance or who don't plan to use compressed
	floppies may choose to disable automatic mounting.
	
	RESOLUTION
	==========
	
	To work around this problem, disable Automount. To do this, type the following
	at the MS-DOS command prompt and then press ENTER:
	
	  " dblspace /automount=0" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	For more information on DoubleSpace and Automount, type "help automount"
	(without the quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	Additional query words: 6.20 floppy disk diskette performance slow auto mount slowly
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
