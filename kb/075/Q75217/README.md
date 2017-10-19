---
layout: page
title: "Q75217: Xerox Ventura Publisher Behaves Erratically"
permalink: /kb/075/Q75217/
---

## Q75217: Xerox Ventura Publisher Behaves Erratically

	Article: Q75217
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Xerox Ventura Publisher versions 1.0, 2.0, and 3.0 may behave erratically under
	MS-DOS Shell versions 5.0 and 5.0a. To avoid this behavior, you should run
	Ventura Publisher from the command prompt with MS-DOS 5.0/5.0a loaded into
	conventional memory.
	
	MORE INFORMATION
	================
	
	Ventura Publisher must be run from the command prompt rather than MS-DOS
	5.0/5.0a Shell because it requires more memory than is available when the Shell
	is running. Ventura Publisher version 3.0 Professional Extension requires 560
	kilobytes (K) of free conventional memory to run. Version 3.0 base software
	requires 580K of free conventional memory to run. Consult the Ventura Publisher
	documentation for exact memory requirements for other versions.
	
	MS-DOS 5.0/5.0a must be loaded into conventional memory because Ventura Publisher
	accesses 60K of the high memory area (HMA). Loading MS-DOS 5.0/5.0a into the HMA
	with Ventura Publisher running causes erratic behavior; for example, your
	machine may stop responding (hang) or you may have problems printing.
	
	Additional query words: 5.00 5.00a 5.0 5.0a publish dosshell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
