---
layout: page
title: "Q95861: RAMDRIVE.SYS Should Precede DBLSPACE.SYS in CONFIG.SYS"
permalink: /kb/095/Q95861/
---

## Q95861: RAMDRIVE.SYS Should Precede DBLSPACE.SYS in CONFIG.SYS

{% raw %}

	Article: Q95861
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	The RAMDRIVE.SYS line in the CONFIG.SYS file should precede the DBLSPACE.SYS line
	or the RAMDrive will receive a different drive designation from what it was
	before. This can become a problem if you have many batch files referencing the
	RAMDrive. For example, if your batch files reference drive D and it becomes
	drive I after DoubleSpace is installed, your batch files will not work.
	
	MORE INFORMATION
	================
	
	The drives used for DoubleSpace are selected from the last available drive
	rather than the first available drive. If RAMDRIVE.SYS precedes the DBLSPACE.SYS
	line, then the RAMDrive's drive letter comes right after the last physical
	drive. For example, if you have a drive C and a floppy disk drive A, then the
	RAMDrive is assigned the letter D.
	
	If the RAMDRIVE.SYS line comes after the DBLSPACE.SYS line, DoubleSpace has
	already allocated all the drive letters between drive C and its host drive
	(probably drive H) so the RAMDrive is assigned letter I.
	
	For information on how DoubleSpace assigns host drive letters, query on the
	following words in the Microsoft Knowledge Base:
	
	  doublespace and assigns and host
	
	For more information on RAMDrive, type "help ramdrive.sys" (without the quotation
	marks) at the MS-DOS command prompt and press ENTER.
	
	Additional query words: 6.00 6.20 double space dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
