---
layout: page
title: "Q93434: MemMaker Copies HIMEM.SYS and EMM386.EXE to C:&#92;DOS"
permalink: /kb/093/Q93434/
---

## Q93434: MemMaker Copies HIMEM.SYS and EMM386.EXE to C:&#92;DOS

{% raw %}

	Article: Q93434
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run MemMaker and you have MS-DOS installed on a drive other than your
	startup (boot) drive (which is usually drive C), MemMaker creates a directory on
	the C drive that has the same name as the directory that MemMaker was run from
	and copies the following files to that directory:
	
	  MEMMAKER.EXE
	  MEMMAKER.HLP
	  MEMMAKER.INF
	  EMM386.EXE
	  HIMEM.SYS
	  CHKSTATE.SYS
	  SIZER.EXE
	
	During the optimization process, it also creates MEMMAKER.STS.
	
	NOTE: The original startup drive may not be drive C if you have a program such as
	Stacker from STAC Electronics.
	
	MORE INFORMATION
	================
	
	If MemMaker is run from the D:\MSDOS.622 directory, it creates a C:\MSDOS.622
	directory, copies the files listed above to that directory, and changes the
	DEVICE= statements in the CONFIG.SYS file to point to drive C to ensure that the
	files are found when MemMaker restarts the system. MemMaker copies these files
	to the startup drive because MemMaker moves the device= statements for HIMEM.SYS
	and EMM386.EXE to the top of the CONFIG.SYS file. Because these files are then
	loaded before any devices that might perform drive swapping, MemMaker must be
	sure it can find the files it needs to optimize your system's memory.
	
	MemMaker does not remove these files after it has completed its optimization. To
	remove these changes, edit the CONFIG.SYS file and make sure the device= lines
	for HIMEM.SYS and EMM386.EXE point to the drive that contains your full MS-DOS
	directory. You can then safely delete the directory on drive C created by
	MemMaker.
	
	Using SUBST
	-----------
	
	If you have a C:\DOS directory but use the SUBST command to remap the directory
	to another drive letter such as R: and place the MS-DOS directory into the PATH
	as R:\, MemMaker does not create a C:\DOS directory. Instead, MemMaker creates a
	C:\MEMMAKER directory and copies the above files into the new directory.
	MemMaker displays a message that it is copying files to the startup drive.
	MemMaker also leaves the HIMEM.SYS and EMM386.EXE lines in the CONFIG.SYS file
	pointing to the C:\MEMMAKER directory. The old CONFIG.SYS and AUTOEXEC.BAT files
	are in the C:\MEMMAKER directory.
	
	NOTE: Using the SUBST command to map directories to unused single drive letters
	saves space in the PATH statement, which is limited to 128 characters. This
	works on drives that are uncompressed, as well as on drives compressed with
	DoubleSpace.
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
