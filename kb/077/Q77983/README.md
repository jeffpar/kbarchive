---
layout: page
title: "Q77983: Using MS-DOS 5.x/6.x with Win 3.0 Enhanced Without WINA20.386"
permalink: /kb/077/Q77983/
---

## Q77983: Using MS-DOS 5.x/6.x with Win 3.0 Enhanced Without WINA20.386

{% raw %}

	Article: Q77983
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.0 operates under MS-DOS 5.x, 6.0, and 6.2 without
	the WINA20.386 file if you include the line "SWITCHES=/W" in the CONFIG.SYS
	file. Although it is possible to run Windows 3.0 this way, doing so may cause
	Windows to stop responding (hang) if the following conditions are true:
	
	- Windows 3.0 is running in 386 enhanced mode
	
	- MS-DOS (or another program) is using the high memory area (HMA)
	
	This information does not apply to later versions of Microsoft Windows.
	
	MORE INFORMATION
	================
	
	Windows 3.0 enhanced mode considers the status of the A20 line to be identical
	in all MS-DOS virtual machines (VMs). Changing the status of the A20 line can
	have dangerous results, as in the following example. While one VM is accessing
	the MS-DOS kernel located in the HMA, Windows task switches to another VM in
	which MS-DOS turns off the A20 line. When Windows switches back to the original
	VM that is currently attempting to execute code in the HMA, Windows hangs
	(stops).
	
	The WINA20.386 file is designed to force Windows 3.0 enhanced mode to treat the
	A20 line status as local to each VM, instead of global to all VMs. This is why
	it is not recommended to force Windows 3.0 enhanced mode to run without
	WINA20.386.
	
	For more information about Windows and WINA20.386, query on the following words
	in the Microsoft Knowledge Base:
	
	  "Windows" (without the quotation marks) and "WINA20.386" (without the
	  quotation marks)
	
	
	Additional query words: 6.22 3.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
