---
layout: page
title: "Q84706: Troubleshooting SMARTDrive Version 4.0"
permalink: /kb/084/Q84706/
---

## Q84706: Troubleshooting SMARTDrive Version 4.0

	Article: Q84706
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): kbtool kbtshoot
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMARTDrive version 4.0 (SMARTDRV.EXE), which comes with Microsoft Windows
	version 3.1, should run on almost any computer system. This article discusses
	troubleshooting steps that may be needed to get SMARTDrive to work with your
	system.
	
	There are three situations covered by this article:
	
	- Your computer runs properly without SMARTDrive loaded.
	
	- Your computer requires SMARTDrive to run properly (that is, SCSI controller).
	
	- You need to simulate SMARTDrive memory use to see if SMARTDrive is adversely
	  affecting your system.
	
	MORE INFORMATION
	================
	
	
	Computer Runs Properly Without SMARTDrive
	-----------------------------------------
	
	Situation: During standard troubleshooting, you start the system without
	SMARTDrive, and the problem no longer exists.
	
	Use the following steps to get SMARTDrive running:
	
	1. Third-party device drivers in the CONFIG.SYS file for external floppy drives
	  or removable hard drives may cause SMARTDrive not to function properly. If
	  possible, work from a bootable floppy and do not load these drivers. See if
	  SMARTDrive loads and runs properly. If it does, then contact the company who
	  wrote the driver.
	
	  Also, SMARTDrive cannot cache a CD-ROM device because a CD-ROM is viewed as
	  network drives.
	
	2. Make sure you are not using another cache at the same time you are using
	  SMARTDRV.EXE.
	
	  If you have an external RAM cache module attached that isn't functioning
	  correctly, Windows will stop responding (hang) in enhanced mode. Disconnect
	  the plug-in cache module and Windows should run in enhanced mode. (You should
	  replace the RAM cache module.)
	
	
	3. Load SMARTDRV.EXE low into conventional memory with /L on the command line in
	  the AUTOEXEC.BAT file:
	
	  c:\windows\smartdrv.exe 2048 1024 /l
	
	  SMARTDRV.EXE will automatically load itself into upper memory blocks (UMBs) if
	  they are free. If the /L corrects the problem, there may be a range of memory
	  that must be excluded with your UMB manager, such as EMM386.EXE, located in
	  the CONFIG.SYS file.
	
	  For example, if you have a network card that does not correctly "check in" to
	  the UMA and is using the address range D800-DFFF, then configure EMM386.EXE
	  to exclude that range by modifying the command line in the CONFIG.SYS file:
	
	  device=c:\windows\emm386.exe noems x=d800-dfff
	
	4. If SMARTDRV.EXE, while loaded low, is still causing the problem, then modify
	  the AUTOEXEC.BAT command line as follows so that it does not cache "writes"
	
	  c:\windows\smartdrv.exe 2048 1024 a b c d
	
	  where A, B, C, and D are drives to "read" cache only.
	
	5. Modify the SMARTDRV.EXE line in the AUTOEXEC.BAT command line to turn off
	  caching of any type for all drives, as follows:
	
	  c:\windows\smartdrv.exe 2048 1024 a- b- c- d-
	
	  If this corrects the problem, then activate one driver at a time by removing
	  the hyphen (-) from after the drive letter. This is sometimes necessary when
	  using third-party floppy drivers or disk compression software in the
	  CONFIG.SYS file.
	
	  SMARTDRV.EXE knows the footprint of Stac Electronics Stacker version 2.0 and
	  does not require a drive letter to be excluded. Earlier versions of Stacker
	  require excluded drive letters.
	
	6. Stacks in the CONFIG.SYS may be set too low and cause the system to lock or
	  hang. Try the following value for stacks:
	
	  Stacks=9,256
	
	7. If you do not have enough free memory for an application to run in MS-DOS or
	  in Windows, then check the values you have set for the SMARTDRV.EXE cache.
	  Also, if you have to type WIN /3 to get into 386 enhanced mode, then your
	  cache sizes may be too large.
	
	8. If SMARTDRV.EXE is still causing the problem, then try using the SMARTDRV.SYS
	  file that came with MS-DOS 5.0 or Windows 3.0. This earlier SMARTDRV.SYS file
	  loads from the CONFIG.SYS file.
	
	Computer Requires SMARTDRV.EXE to Run Properly
	----------------------------------------------
	
	When Windows is installed, it tests the hard drive to see if it can understand it
	for advance features such as 32-Bit Disk Access. If it cannot, then it installs
	SMARTDRV.EXE in the CONFIG.SYS file with the /double_buffer switch (as in the
	following example), and in the AUTOEXEC.BAT as normal. This usually occurs with
	SCSI and some ESDI controllers.
	
	  device=c:\windows\smartdrv.exe /double_buffer
	
	1. If you cannot get into 386 enhanced mode, have problems running applications
	  from 386 enhanced mode, or get Violate System Integrity error messages, then
	  add a + to the command line in the CONFIG.SYS file, as follows:
	
	  device=c:\windows\smartdrv.exe /double_buffer+
	
	  Note: Do Not load SMARTDRV.EXE high in the upper memory blocks (UMBs) in the
	  CONFIG.SYS file.
	
	2. If SMARTDRV.EXE is slower than the SMARTDRV.SYS file that came with Windows
	  3.0 and MS-DOS 5.0, then have SMARTDRV.EXE load low with the /L switch.
	
	  /DOUBLE_BUFFER slows down the system. If you want to avoid using
	  /DOUBLE_BUFFER, obtain updated ROM for your hard drive adapter, or obtain a
	  Virtual DMA Services (VDS) driver from the manufacturer of your controller.
	
	Simulating SMARTDrive Memory Usage for Testing
	----------------------------------------------
	
	Sometimes, problems are caused by memory configurations unrelated to but
	exacerbated by SMARTDrive. To verify that a problem is related to the memory
	configuration, and not SMARTDrive, RAMDrive can be loaded using the same amount
	of extended memory as SMARTDrive. You may have to manipulate the free
	conventional memory to match when RAMDrive is loaded instead of SMARTDrive. You
	can do this by loading a terminate-and-stay-resident (TSR) program that causes
	the first free block of memory to be in the same place as before. You can do
	this using MS-DOS 5.0 with the following steps:
	
	1. Use the MEM /DEBUG command to show how much conventional memory is available
	  when SMARTDrive is loaded.
	
	2. Edit the CONFIG.SYS and AUTOEXEC.BAT files. Add RAMDrive to the CONFIG.SYS
	  file and remove SMARTDrive from the AUTOEXEC.BAT file path.
	
	3. Load TSRs to reduce the free conventional memory to the value found in step
	  1. The MS-DOS 5.0 utility DOSKEY is convenient for this because you can
	  control its conventional memory size with the /REINSTALL /BUFSIZE=
	  parameters.
	
	Additional query words: 3.10 3.11 SCSI scuzzy Future Domain
	
	======================================================================
	Keywords          : kbtool kbtshoot 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	Issue type        : kbinfo
	
	=============================================================================
	
