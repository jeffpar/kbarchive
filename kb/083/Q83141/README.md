---
layout: page
title: "Q83141: SMARTDrive May Be Required to Use EMM386.SYS or EMM386.EXE"
permalink: /kb/083/Q83141/
---

## Q83141: SMARTDrive May Be Required to Use EMM386.SYS or EMM386.EXE

	Article: Q83141
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some hard drive controllers use direct memory addressing (DMA) that can
	interfere with EMM386.SYS, EMM386.EXE, or running Windows in 386 enhanced mode.
	Symptoms of this interference include:
	
	- System stops responding (hangs) when loading programs that use expanded
	  memory provided by EMM386.EXE.
	
	- System hangs when attempting to load programs with DEVICEHIGH= or LOADHIGH
	  (LH) into upper memory blocks (UMBs) provided by EMM386.EXE.
	
	- Data corruption on the hard disk drive when running Windows in 386 enhanced
	  mode.
	
	- CHKDSK or MS-DOS 6.2 ScanDisk reports data corruption (such as truncated or
	  invalid directories).
	
	In this case, SMARTDrive should be loaded in conventional memory before loading
	any device drivers that use expanded memory provided by EMM386.EXE or before
	loading any drivers into UMBs using DEVICEHIGH= statements. For example:
	
	  device=c:\dos\smartdrv.sys
	
	If you are using Microsoft Windows 3.1, use:
	
	  device=c:\windows\smartdrv.exe /double_buffer
	
	MORE INFORMATION
	================
	
	MS-DOS versions 4.x and Windows 3.0 include EMM386.SYS, an expanded memory
	emulator. MS-DOS versions 5.x and 6.0 and Windows 3.1 include EMM386.EXE, which
	also can be used to create UMBs along with providing expanded memory. In all
	versions, EMM386.EXE uses the virtual 8086 mode of the 80386 and 80486
	processors to make extended memory appear to be in the upper memory area. This
	allows EMM386.EXE to simulate expanded memory or create UMBs out of extended
	memory; in actuality, there isn't any RAM where the UMBs or page frame appears
	to be.
	
	These disk controllers attempt to directly transfer information from disk to
	memory, without involving the CPU. By bypassing the CPU to transfer information
	from disk to memory, the controller tries to access nonexistent RAM. This
	usually causes the system to hang, but it can also cause data corruption on the
	disk.
	
	A protocol called Virtual DMA Services (VDS) has been developed to work around
	this problem. Most hard disk drives being produced now are VDS-compliant. A
	VDS-compliant hard disk drive knows when the machine is in virtual 8086 mode and
	communicates with the virtual mode monitor (in this case, Windows or EMM386.EXE)
	to ensure that information is put in the correct place.
	
	SMARTDrive also works around this problem by hooking all disk transfers into its
	own buffer. The DMA works in this case because SMARTDrive is loaded in
	conventional memory (hence the requirement that SMARTDrive be loaded low). Then,
	SMARTDrive transfers the information into the buffer where it really needs to be
	placed. This is called "double buffering."
	
	Using SMARTDRV.SYS (Versions 3.x)
	---------------------------------
	
	SMARTDRV.SYS versions 3.x, included with Windows 3.0 and MS-DOS versions 4.x and
	5.x, perform both double buffering and disk caching. When loaded, SMARTDRV.SYS
	performs double buffering if it detects that it is required. Double buffering
	can also be forced by loading SMARTDrive with the /B+ option.
	
	WARNING: Some drives have more than 1024 cylinders or use sector sizes of other
	than 512 bytes per sector. If this is the case, SMARTDRV.SYS should not be used.
	SMARTDRV.SYS versions 3.06 (included in Windows 3.0a) and 3.13 (included in
	MS-DOS 5.0) refuse to load if a third-party partitioning utility (commonly used
	on such systems) is detected. SMARTDRV.SYS can be forced to load despite this
	check by using the /P switch. For example, to forcibly load SMARTDRV.SYS, add
	the following command to the CONFIG.SYS file:
	
	  " device=<path>\smartdrv.sys /p " (without the quotation marks)
	
	To forcibly load SMARTDRV.SYS with forced double buffering, add the following
	command to the CONFIG.SYS file:
	
	  " device=<path>\smartdrv.sys /b+ /p " (without the quotation marks)
	
	NOTE: Use the /P option only if the disk drive has fewer than 1024 cylinders and
	the ROM BIOS supports the disk drive size; otherwise, the /P option can lead to
	data corruption. For information on using disks with more than 1024 cylinders
	with MS-DOS, query on the following words in the Microsoft Knowledge Base:
	
	  " 1024 and cylinders and workarounds " (without the quotation marks)
	
	Using SMARTDRV.EXE (Version 4.0)
	--------------------------------
	
	Windows 3.1 and MS-DOS 6.0 include SMARTDrive version 4.0. SMARTDrive 4.0 is
	loaded differently depending on whether double buffering, disk caching, or both
	is desired. To load SMARTDrive for double buffering, use the following line in
	the CONFIG.SYS file:
	
	  device=c:\windows\smartdrv.exe /double_buffer+
	
	The double buffer portion must be loaded in conventional memory; it displays an
	error and exits if loaded into a UMB. The disk cache (usually loaded from the
	AUTOEXEC.BAT file) can still be loaded into a UMB and tries to do so
	automatically if MS-DOS is providing UMBs.
	
	REFERENCES
	==========
	
	For information on using SMARTDRV.EXE with third-party partitioning software,
	query on the following words in the Microsoft Knowledge Base:
	
	  " SMARTDRV.EXE and partitioning " (without the quotation marks)
	
	For information on using SMARTDRV.EXE with MS-DOS 6, refer to SMARTDrive Help.
	
	Additional query words:
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	Issue type        : kbinfo
	
	=============================================================================
	
