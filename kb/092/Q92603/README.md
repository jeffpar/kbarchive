---
layout: page
title: "Q92603: What is a Clean Boot for WFWG 3.1 with Novell Connectivity"
permalink: kb/092/Q92603/
---

## Q92603: What is a Clean Boot for WFWG 3.1 with Novell Connectivity

	Article: Q92603
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	A "clean boot" (starting your computer after all unnecessary commands have been
	removed from your CONFIG.SYS and AUTOEXEC.BAT files) is used as a basic
	troubleshooting step to test possible conflicts between Windows for Workgroups
	3.1 and various terminate-and-stay-resident (TSR) programs and device drivers.
	There are different types of clean boots; the correct one to use depends on
	whether or not Windows for Workgroups has been installed.
	
	NOTE: This article explains how to clean boot your system up to the point when
	you start Windows. To start Windows without loading any third-party programs,
	you must clear the StartUp group, clear the LOAD= and RUN= entries in the
	WIN.INI file, and ensure the SHELL= entry in the SYSTEM.INI file is loading
	PROGMAN.EXE. Also, make sure the SYSTEM.INI file does not include third-party
	virtual device drivers (VxDs) or other third-party Windows components.
	
	MORE INFORMATION
	================
	
	Before Clean Booting
	--------------------
	
	Create a bootable floppy disk that contains the MS-DOS system files and any other
	files that are required to make the system operational, such as disk-compression
	utilities (for example, Stacker), disk- partitioning drivers (for example, Disk
	Manager), and other third-party device drivers.
	
	To Clean Boot Before Running Windows for Workgroups Setup
	---------------------------------------------------------
	
	If you are not using any disk-compression software, disk-partitioning software,
	or other third-party drivers necessary to boot the computer, the machine can be
	booted on a floppy disk that contains only the MS-DOS system files, without a
	CONFIG.SYS or AUTOEXEC.BAT file.
	
	If there is disk-partitioning, disk-compression, or other third-party software
	required to boot the computer, the startup files on the disk created above
	should appear as follows:
	
	  CONFIG.SYS                              AUTOEXEC.BAT
	  ----------------------------------------------------
	
	  FILES=45                                PROMPT $P$G
	  BUFFERS=20
	  <Third-party disk-partitioning driver >
	  <Third-party disk-compression driver>
	  <Other required third-party driver>
	
	After Windows for Workgroups 3.1 is installed with Novell NetWare as a second
	network, a clean boot should appear as follows:
	
	  CONFIG.SYS                                    AUTOEXEC.BAT
	  ----------------------------------------------------------
	
	  FILES=45                                      <valid path>NET START
	  BUFFERS=20                                    <valid path>MSIPX
	  DEVICE=C:\<Windows 3.1 directory>\HIMEM.SYS   <valid path>NETX
	  <Third-party disk-partitioning driver>        PROMPT $P$G
	  <Third-party disk-compression driver>         PATH=C:\WINDOWS;C:\DOS;C:\ 
	  <Other required third-party drivers>          SET TEMP=C:\<valid path>
	  DEVICE=<valid path>\PROTMAN.DOS /I:<directory
	          where PROTOCOL.INI is located>
	  DEVICE=<MAC DRIVER>.DOS
	  DEVICE=<valid path>MSIPX.SYS
	  DEVICE=<valid path>WORKGRP.SYS
	  SHELL=C:\<valid path>\COMMAND.COM  /E:1024 /P
	  LASTDRIVE=P
	  STACKS=9,256
	
	Exceptions
	----------
	
	The following are examples of drivers that should NOT be removed; these drivers
	are used when the computer is turned on to make the hard drive accessible. This
	is not a complete list, but it does include most of the commonly used drivers:
	
	  Hard Disk Drivers:          SQY55.SYS, SSTBIO.SYS, SSTDRIVE.SYS,
	                              AH1544.SYS, ILIM386.SYS, ASPI4DOS.SYS,
	                              SCSIHA.SYS, SCSIDSK.EXE, SKYDRVI.SYS,
	                              ATDOSXL.SYS, NONSTD.SYS
	
	  Disk-Partitioning Drivers:  DMDRVR.BIN, SSTOR.SYS, HARDRIVE.SYS,
	                              EDVR.SYS, FIXT_DRV.SYS, LDRIVE.SYS,
	                              ENHDISK.SYS
	
	  Disk-Compression Utilities: STACKER.COM, SSWAP.COM, SSTOR.EXE,
	                              DEVSWAP.COM
	
	If the purpose of a device driver or program is unknown, do NOT remove it. Most
	device drivers and programs display a message describing the purpose when they
	are initialized.
	
	A clean boot does NOT include the following:
	
	- DOS=HIGH,UMB
	
	- EMM386.EXE
	
	- INSTALL=SHARE.EXE
	
	- INSTALL=FASTOPEN.EXE
	
	- Third-party memory managers
	
	- RAM disk devices
	
	- JOIN, GRAPHICS, PRINT, SUBST, APPEND
	
	- MODE for printer redirection
	
	- Multiple path statements
	
	- MS-DOS-level mouse drivers
	
	- Third-party disk caches
	
	- Various third-party TSRs
	
	- LOGIMENU, CLICK
	
	- Virus checkers
	
	- Drivers for scanners/fax
	
	- Drivers for CD-ROM/network
	
	- Tape backup spoolers/redirectors/buffers
	
	- Data acquisition units
	
	- Keyboard accelerators/buffers
	
	REFERENCES
	==========
	
	More information on clean booting can be found on pages 130-131 of the "Getting
	Started with Microsoft Windows for Workgroups" version 3.1 manual, on pages
	165-167 of the "Microsoft Windows for Workgroups User's Guide" version 3.1, and
	on chapter 14, page 5 of the "Microsoft Windows For Workgroups Resource Kit"
	version 3.1.
	
	For information on clean booting Windows 3.0, query on the following words in the
	Microsoft Knowledge Base:
	
	  clean and boot and windows and 3.0
	
	Additional query words: tshoot 1.0 1.00 3.00 3.10 lan manager lanman clean-boot novell print.com ramdrive.sys join.exe print.exe mode.com graphics.com subst.exe cleanboot
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
