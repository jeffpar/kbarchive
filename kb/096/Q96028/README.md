---
layout: page
title: "Q96028: Using /S Switch with LOADHIGH"
permalink: kb/096/Q96028/
---

## Q96028: Using /S Switch with LOADHIGH

	Article: Q96028
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
	
	You can use the LOADHIGH switches /S and /L together to control where programs
	are loaded in upper memory blocks (UMBs) and how much space they allocate. Both
	switches affect the way programs interpret UMBs.
	
	MORE INFORMATION
	================
	
	If you load a program with the /L switch, the program only recognizes the memory
	regions you specify in the /L parameters. If you load a program with the /S
	switch, the program only recognizes the regions you specify and the amount of
	memory you specify--these switches are useful if you are optimizing conventional
	memory because you can restrict the way a program uses a particular memory
	region.
	
	For example, the SMARTDrive utility has the ability to load itself into UMBs: it
	is first loaded and initialized in conventional memory and then is relocated to
	the largest available UMB it finds. By default, SMARTDrive attempts to load as
	much of itself as it can into UMBs; other programs will not be able to use free
	UMBs because SMARTDrive has used too much space. Since SMARTDrive does not have
	to reside in one memory area, you can use your UMBs more efficiently by forcing
	SMARTDrive to use only a certain amount of UMB space. You can accomplish this by
	using the /L and /S switches together.
	
	The following command line (from AUTOEXEC.BAT) tells SMARTDrive that only region
	0 (conventional memory) and 3 are free:
	
	     loadhigh /l:0;3,42416 /s =c:\dos\smartdrv.exe
	
	SMARTDrive is first loaded and initialized in conventional memory (region 0) and
	then relocates itself to region 3. Since the /L switch specifies a minimum size
	of 42416 bytes and the /S switch changes this minimum to the absolute value free
	in region 3, SMARTDrive only recognizes region 0 and 3 as free and only
	recognizes 42416 bytes available in region 3. Therefore, SMARTDrive loads 42416
	bytes of itself into region 3 and the rest in region 0.This loading process
	results in more free memory in region 3 because SMARTDrive is not able to
	relocate all of itself in that region. The next program you load with the
	LOADHIGH command has enough space to load completely and your available
	conventional memory is increased.
	
	For more information on the LOADHIGH command and its switches, use MS-DOS Help by
	typing "HELP LOADHIGH" (without the quotation marks) at any MS-DOS command
	prompt.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
