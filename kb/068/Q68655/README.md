---
layout: page
title: "Q68655: Windows 3.0 Enhanced Mode Requires WINA20.386"
permalink: /kb/068/Q68655/
---

## Q68655: Windows 3.0 Enhanced Mode Requires WINA20.386

	Article: Q68655
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22; WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Setup program to install Microsoft MS-DOS 5.0 or later, the
	read-only file WINA20.386 is copied to the root directory of the boot drive
	(C:\).
	
	WINA20.386 is used by Microsoft Windows version 3.0 in enhanced mode to allow
	MS-DOS control of the A20 line. Enhanced mode Windows 3.0 cannot run in MS-DOS
	5.0 or later without it, and the following error message is displayed if the
	file is not present:
	
	  You must have the file WINA20.386 in the root of your boot drive to run
	  Windows in Enhanced Mode.
	
	The file must be decompressed using Setup or the Expand utility. For information
	on using Expand, see your MS-DOS User's Guide and Reference.
	
	NOTE: This information applies to Microsoft Windows version 3.0; it does not
	apply to later versions of Windows.
	
	MORE INFORMATION
	================
	
	Windows 3.0 enhanced mode uses a modular architecture based on what are called
	virtual device drivers, or VxDs. VxDs allow pieces of Windows to be replaced to
	add additional functionality. WINA20.386 is such a VxD. (VxDs could be called
	"structured" patches for Windows.)
	
	Windows 3.0 enhanced mode considers the state of the A20 line to be the same in
	all MS-DOS virtual machines (VMs). When MS-DOS is loaded in the high memory area
	(HMA), this can cause the machine to stop responding (hang) because of MS-DOS
	controlling the A20 line. If one VM is running inside the MS-DOS kernel (in the
	HMA) and Windows task switches to another VM in which MS-DOS turns off A20, the
	machine hangs when switching back to the VM that is currently attempting to
	execute code in the HMA.
	
	WINA20.386 changes the way Windows 3.0 enhanced mode handles the A20 line so that
	Windows treats the A20 status as local to each VM, instead of global to all VMs.
	This corrects the problem.
	
	For more information, query on the following words:
	
	  "Windows" (without the quotation marks) and "WINA20.386" (without the
	  quotation marks)
	
	
	Additional query words: 6.22 3.00 3.00a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22; WINDOWS:3.0
	
	=============================================================================
	
