---
layout: page
title: "Q82856: Configuring SMARTDRV.EXE 4.0 DOUBLE_BUFFERING Properly"
permalink: /kb/082/Q82856/
---

## Q82856: Configuring SMARTDRV.EXE 4.0 DOUBLE_BUFFERING Properly

{% raw %}

	Article: Q82856
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Failure to use the double-buffering feature of the SMARTDrive (SMARTDRV.EXE)
	utility included with the Microsoft Windows version 3.1 when this feature is
	required may cause MS-DOS virtual machines to crash, Windows to crash at
	startup, and other random operational problems.
	
	The Windows Setup program attempts to install the double-buffering portion of
	SMARTDrive if Windows detects that it is needed. These problems may occur if the
	DOUBLE_BUFFERING entry is disabled in the CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	To verify whether the SMARTDrive utility is necessary, enter the following
	command at the MS-DOS command prompt:
	
	  smartdrv
	
	If all of the buffering entries list "no", then double buffering is not
	necessary. If the double-buffering entry is contained within the CONFIG.SYS
	file, it may be disabled. The entry in the AUTOEXEC.BAT file should not be
	disabled.
	
	If the 32-Bit Disk Access option is available, then double-buffering is probably
	not necessary. If the 32-Bit Disk Access option is not available, the following
	command line should be present in the CONFIG.SYS file
	
	  DEVICE=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER
	
	where C is the drive and Windows is the directory location of the Windows 3.1
	SMARTDrive utility.
	
	If at any time the buffering entries list "yes", then the problem has been
	corrected. If the entry "-" appears in the DEVICE= buffering line, SMARTDrive
	hasn't yet determined if double buffering is necessary. This entry may be forced
	to change (from a "-" to a "yes" or a "no") by one of the following methods:
	
	1. Loading drivers or TSRs (terminate-and-stay-resident) programs into UMBs
	  (upper memory blocks).
	
	2. Run Windows and start multiple instances of MS-DOS virtual machines. This may
	  not trigger it to change, however, because only certain types of writes (DMA
	  into linear != physical memory) will cause the buffering to start. If
	  problems occur and the line still says "-", then this is most likely not the
	  problem.
	
	Some disk ROM BIOS versions cause Windows to crash when multitasking occurs.
	(Technically, this occurs when a page-fault or instance fault occurs during a
	read of memory-mapped I/O). Double buffering usually works around this problem
	because faults will not occur on the double buffer. In these cases, double
	buffering can be forced to start by adding a plus sign (+) to the end of the
	command line in the CONFIG.SYS file as follows
	
	  DEVICE=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER+
	
	where C is the drive and Windows is the directory location of the Windows 3.1
	SMARTDrive utility.
	
	Usually, a better approach is to disable the 32-Bit Disk Access option and use a
	temporary swap file.
	
	If the machine continues to exhibit random operational problems while the 32-Bit
	Disk Access option is disabled, install the DOUBLE_BUFFER+ entry into the
	CONFIG.SYS file. Because "instance faults" on the double buffer may still occur,
	the complete solution is to load a 4K memory buffer before and after the
	double-buffer line in the CONFIG.SYS file. (Most any driver will work, as long
	as it does not contain Windows instance data. The idea is to ensure there is no
	Windows instance data in the same 4K page[s] as the double buffer.)
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
