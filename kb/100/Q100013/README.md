---
layout: page
title: "Q100013: Defrag Reports Unmovable Block Without Any Hidden/System Files"
permalink: kb/100/Q100013/
---

## Q100013: Defrag Reports Unmovable Block Without Any Hidden/System Files

	Article: Q100013
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Microsoft Defragmenter (Defrag) displays unmovable blocks (denoted by an "X")
	and you don't have any hidden system files on your disk, you probably have one
	of the following:
	
	- Lost allocation units. To correct this problem, run CHKDSK /F before you run
	  Defrag. Or, if you have MS-DOS 6.20 or higher, run Scandisk before you run
	  Defrag.
	
	- Executable files (.EXE or .COM files) that do not have the MS-DOS signatures
	  for .EXE or .COM files ("MZ" or "SC"). Old executable files, shareware files,
	  and some executable files used in copy- protection schemes do not have the MZ
	  or SC signatures.
	
	NOTE: Defrag looks for *DOS.* and *IO.* to find all the system files on your
	disk. Defrag does not move system files and represents them in the user
	interface with an "X."
	
	Additional query words: 6.22 6.00 6.20 hard disk drive
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
