---
layout: page
title: "Q96522: Regions Scanned by the EMM386.EXE HIGHSCAN Switch"
permalink: /kb/096/Q96522/
---

## Q96522: Regions Scanned by the EMM386.EXE HIGHSCAN Switch

	Article: Q96522
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The EMM386.EXE version 4.45 and 4.48 HIGHSCAN switch allows EMM386.EXE to map
	expanded memory pages or upper memory blocks (UMBs) over portions of the upper
	memory area (UMA) used by system read-only memory (ROM).
	
	Choosing "Yes" in response to the MemMaker prompt "Scan the upper memory area
	aggressively?" causes MemMaker to add HIGHSCAN to the EMM386.EXE device= line.
	
	MORE INFORMATION
	================
	
	If you use the HIGHSCAN switch on the DEVICE=C:\DOS\EMM386.EXE line in the
	CONFIG.SYS file, EMM386.EXE examines the system ROM area starting at memory
	location F000:0000. If EMM386.EXE determines that ROM is duplicated between
	F000h-F7FFh and F800h-FFFFh, EMM386.EXE uses the F000h-F7FFh region for expanded
	memory page mapping or UMB memory. (This adds up to 32 kilobytes to the UMA.
	
	On Micro Channel (MCA) systems with ROM BASIC (for example, IBM PS/2 systems),
	the HIGHSCAN switch allows EMM386.EXE to map expanded memory or UMB memory over
	the ROM BASIC code in the system ROM. Typically this is the region from F600 to
	FDFF.
	
	Note: On some systems, EMM386.EXE uses the ROM area and the system does not
	operate correctly. The symptoms of this condition vary. For example, the system
	may stop responding (hang) or appear to operate normally until you use a floppy
	disk drive. Because of these potential problems, HIGHSCAN is not used by
	default.
	
	Additional query words: 6.22 6.00 parameter 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
