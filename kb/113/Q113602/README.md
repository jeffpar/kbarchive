---
layout: page
title: "Q113602: Less Conventional Memory After Installing MS-DOS 6.21"
permalink: kb/113/Q113602/
---

## Q113602: Less Conventional Memory After Installing MS-DOS 6.21

	Article: Q113602
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install MS-DOS Upgrade version 6.21 or 6.22 on a system using MS-DOS
	6.0 DoubleSpace, you may notice a reduction in free conventional memory. If all
	the DoubleSpace files are loaded in the upper memory area, you may not
	experience this reduction in free conventional memory.
	
	MORE INFORMATION
	================
	
	If you have DoubleSpace installed and you install MS-DOS Upgrade over MS-DOS
	6.0, DBLSPACE.BIN is modified to give you the equivalent of the MS-DOS 6.2
	version of DBLSPACE.BIN. This DBLSPACE.BIN file includes the DoubleGuard and
	AutoMount features and therefore uses approximately 7 kilobytes (K) more memory.
	Because MS-DOS 6.21 and 6.22 Upgrade Setup cannot update the MS-DOS 6.0
	DBLSPACE.SYS to the equivalent of MS-DOS 6.2 DBLSPACE.SYS, the Microsoft
	Real-Time Compression Interface (MRCI) libraries cannot be loaded into the high
	memory area (HMA). As a result, you are more likely to encounter a reduction in
	conventional memory with MS- DOS 6.21 and 6.22 than with MS-DOS 6.2.
	
	
	WORKAROUND
	==========
	
	You can regain approximately 4K of conventional memory by deactivating the
	DoubleSpace AutoMount feature. To do so, type "dblspace /automount=0" (without
	the quotation marks) at the MS-DOS command prompt and then press ENTER. If you
	do this, you lose the ability to automatically mount compressed removable media
	(such as compressed floppy disks).
	
	If you are using an 80386 or higher computer, you can also run MemMaker to
	optimize your use of upper memory blocks. Be sure that your CONFIG.SYS file
	includes a DEVICE=C:\DOS\DBLSPACE.SYS /MOVE line before you run MemMaker.
	
	Additional query words: 6.21 6.22 available
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622
	Version           : MS-DOS:6.21,6.22
	
	=============================================================================
	
