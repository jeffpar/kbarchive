---
layout: page
title: "Q78557: EMM386 Troubleshooting and Technical Information"
permalink: /kb/078/Q78557/
---

## Q78557: EMM386 Troubleshooting and Technical Information

	Article: Q78557
	Product(s): Microsoft Disk Operating System
	Version(s): 3.1,3.11,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): kbtshoot win31 msdos win95 win98
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	If this article does not describe your hardware-related issue, please see the following Microsoft Web site to view more articles about hardware: 
	
	  http://support.microsoft.com/support/windows/topics/hardware/hwddresctr.asp
	
	SUMMARY
	=======
	
	The following topics are discussed in this article:
	
	- Troubleshooting steps to use if EMM386.EXE locks up the computer
	
	- How EMM386.EXE locates UMBs and the EMS page frame:
	
	  UMA scanning algorithm
	  EMM386 and the E000 segment
	
	- Common EMS questions concerning the following:
	
	   - "WARNING: Unable to set page frame base address--EMS unavailable" message
	
	   - "Size of expanded memory pool adjusted" message
	
	   - EMM386.EXE and Windows
	
	- EMM386.EXE version history
	
	NOTE: This information applies to the versions of EMM386.EXE included with
	MS-DOS, Microsoft Windows, and Microsoft Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	IF EMM386.EXE LOCKS UP THE COMPUTER
	-----------------------------------
	
	If EMM386.EXE locks up the computer, follow these troubleshooting steps:
	
	1. If the DEVICE=EMM386.EXE in the CONFIG.SYS file contains the HIGHSCAN
	  parameter, remove HIGHSCAN from the command, save the CONFIG.SYS file, and
	  restart your computer. (HIGHSCAN cannot be used on some computers.)
	
	2. Start EMM386.EXE with the exclude option.
	
	  EMM386.EXE may have incorrectly identified an area being used by the system as
	  a "hole" (a region that can be used as a UMB or an EMS page frame). As a
	  result, EMM386.EXE overwrites a portion of memory that is used by a hardware
	  adapter in your computer.
	
	  By excluding addresses in the range A000-EFFF, EMM386.EXE does not use any
	  part of the excluded region for a UMB or EMS page frame. Identifying the
	  correct region(s) to exclude requires experimentation. Start by excluding a
	  large region and then reducing the size of the region. For example:
	
	     DEVICE=EMM386.EXE NOEMS X=A000-EFFF
	
	     DEVICE=EMM386.EXE NOEMS X=C000-DFFF
	
	     DEVICE=EMM386.EXE NOEMS X=C800-CFFF
	
	  You can use multiple exclusions on the EMM386.EXE device line. For example:
	
	     DEVICE=EMM386.EXE NOEMS X=C000-C7FF X=E000-EFFF
	
	  Refer to the documentation included with your hardware device(s) for
	  information on the upper memory addresses the adapter card uses. Examples of
	  devices that use upper memory addresses include network cards, SCSI adapters,
	  video cards, and scanners.
	
	3. If your computer has a SCSI disk controller and requires a device driver for
	  the SCSI adapter, be sure the DEVICE= line for the SCSI driver appears before
	  the DEVICE=EMM386.EXE line. Examples of SCSI device drivers include
	  ASPI4DOS.SYS and USPI14.SYS.
	
	4. If you are experiencing problems with the computer hanging, try loading the
	  SMARTDrive double buffer driver.
	
	  NOTE: The SMARTDrive double buffer driver line should appear before the
	  DEVICE=EMM386.EXE line in the CONFIG.SYS file.
	
	  MS-DOS 6.0 or later, Windows 3.1 or later, or Windows for Workgroups:
	
	  If you use MS-DOS 6.0 or later, Microsoft Windows 3.1 or later, or Microsoft
	  Windows for Workgroups the SMARTDrive double buffer driver is loaded from the
	  CONFIG.SYS file as follows:
	
	     device=c:\windows\smartdrv.exe /double_buffer
	
	  In the AUTOEXEC.BAT file, add a /L to the end of the SMARTDRV.EXE line. For
	  example:
	
	     c:\windows\smartdrv.exe /L
	
	  If the problems persist, add a plus sign (+) to the end of the double buffer
	  device line as follows:
	
	     device=c:\windows\smartdrv.exe /double_buffer+
	
	  MS-DOS 5.x:
	
	  If you use the SMARTDRV.SYS driver included with MS-DOS 5.x the SMARTDrive
	  double buffer driver is loaded in the CONFIG.SYS as follows:
	
	     device=c:\dos\smartdrv.sys /b+
	
	5. Experiment with different HIMEM.SYS A20 handlers. This is done using the
	  /MACHINE: switch on the HIMEM.SYS device line.
	
	  For information on the HIMEM.SYS /MACHINE: switch and troubleshooting A20
	  handler problems:
	
	   - Consult your MS-DOS, Windows, or Windows for Workgroups documentation
	
	  -or-
	
	   - Query on the following words in the Microsoft Knowledge Base:
	
	  tshoot and himem.sys and control and a20 line
	
	HOW EMM386.EXE LOCATES UMBs AND THE EMS PAGE FRAME
	--------------------------------------------------
	
	UMA Scanning Algorithm:
	
	By default EMM386.EXE scans the following UMA region:
	
	  MS-DOS 5.0: C800-DFFF
	
	  Windows 3.1, Windows for Workgroups 3.1: C600-DFFF
	
	  MS-DOS 6.0 and later, Windows for Workgroups 3.11 and later: C000-EFFF
	
	NOTES:
	
	The E000-EFFF region is handled differently on certain hardware (see the
	following section).
	
	Under MS-DOS 6.0 and later and Windows for Workgroups 3.11, the F000-F7FF range
	can be included by using the HIGHSCAN switch.
	
	EMM386.EXE and the E000 Segment:
	
	On Compaq machines, the E000 segment has either shadow RAM or the segment is
	unused. For shadow RAM, the shadow area is reclaimed by EMM386.EXE if the Int 10
	vector has not been hooked before EMM386.EXE loads. This is because the shadow
	region contains a remapped copy of the video ROM from the C000 region.
	
	EMM368.EXE excludes E000 on MCA machines (IBM PS/2s) since the E000 segment has
	the system ROM.
	
	On other machines, E000 may be excluded by default. If you think the E000 range
	is available, you can explicitly include the E000 segment by adding I=E000-EFFF
	to the DEVICE=EMM386.EXE command in the CONFIG.SYS file.
	
	NOTE: When EMM386.EXE encounters the include switch, it includes the region
	without scanning it for potential conflicts.
	
	COMMON EMS ISSUES
	-----------------
	
	WARNING: Unable to Set Page Frame Base Address--EMS Unavailable:
	
	This error is displayed if EMM386.EXE cannot locate a 64K contiguous "hole" in
	the UMA for the EMS page frame.
	
	According to the LIM 3.2 specification, a page frame consists of four contiguous
	16K pages, and a LIM provider must set the page frame.
	
	According to the LIM 4.0 specification, an EMS provider need not set a 64K page
	frame, but it should set a 16K page at the minimum.
	
	Although EMM386.EXE conforms to the LIM 4.0 specification, it does not load as an
	EMS provider if it does not find a 64K contiguous hole that can be used for the
	page frame. This is because the majority of LIM 3.2 applications assume the
	existence of a page frame.
	
	EMM386.EXE can be forced to load without a LIM 3.2 (64K) page frame by using the
	Pn parameters. If you force EMM386.EXE to load as a LIM 4.0 provider, do not
	attempt to run LIM 3.2 applications. Consult with your application vendor to
	determine the required LIM version.
	
	NOTE: If you require a LIM 3.2 (64K) page frame, it may be necessary to modify
	the settings on your hardware devices to free a contiguous, 64K region in the
	UMA.
	
	Size of Expanded Memory Pool Adjusted:
	
	This error message is displayed if EMM386.EXE cannot provide all the EMS memory
	requested on the command line. For example, if you use the DEVICE=EMM386.EXE
	2048 and your computer only has 1024K of XMS memory, EMM386.EXE displays this
	error message and provides as much EMS as possible. (Note that EMM386.EXE uses
	some XMS memory for its own code and data, and this reduces the amount of XMS
	memory available for EMS.)
	
	Windows Cannot Provide EMS with the NOEMS Switch:
	
	According to the LIM 4.0 specification, an EMS page can also reside in
	conventional memory (0-640K). The EMM386 EMS line starts at 256K by default. If
	the NOEMS option is specified, all the holes in the adapter region A000-FFFF are
	used for UMBs, and EMM386.EXE does not provide any EMS.
	
	Once Windows 3.0 is started and an MS-DOS session is started, EMM386.EXE may or
	may not be able to provide EMS. If Windows is running in 386 enhanced mode,
	EMM386.EXE can provide EMS in an MS-DOS session; however, the EMS pages are in
	conventional memory. This can cause problems because of the behavior of LIM 3.2
	applications as described above.
	
	In a Windows 3.1 386 enhanced mode MS-DOS session, EMS is not provided.
	
	EMM386.EXE VERSION HISTORY
	--------------------------
	
	MS-DOS 5.0                    4.20
	MS-DOS 5.00a                  4.33
	MS-DOS 6.0                    4.45
	MS-DOS 6.2                    4.48
	MS-DOS 6.21                   4.48
	MS-DOS 6.22                   4.49
	Windows 3.1                   4.44
	Windows 3.11                  4.44
	Windows for Workgroups 3.1    4.44
	Windows for Workgroups 3.11   4.48
	Windows 95                    4.95
	Windows 98                    4.95
	
	Some of the products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding the performance
	or reliability of these products.
	
	Additional query words: HWSCSI 6.22 5.00 5.00a 6.00 6.20 3.10 freeze stop lock conflict msdos
	
	======================================================================
	Keywords          : kbtshoot win31 msdos win95 win98 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWin98search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbWin98 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : :3.1,3.11,5.0,5.0a,6.0,6.2,6.21,6.22
	Issue type        : kbinfo
	
	=============================================================================
	
