---
layout: page
title: "Q87290: What Is a Clean Boot for Windows 3.1?"
permalink: kb/087/Q87290/
---

## Q87290: What Is a Clean Boot for Windows 3.1?

	Article: Q87290
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbtlc kbtshoot
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	A "clean boot" (starting your computer after all unnecessary commands have been
	removed from your CONFIG.SYS and AUTOEXEC.BAT files) is used as a basic
	troubleshooting step to test possible conflicts between Windows 3.1 and various
	terminate-and-stay-resident (TSR) programs and device drivers. There are
	different types of clean boots; the correct one to use depends on whether or not
	Microsoft Windows has been installed.
	
	More information about clean booting can be found on pages 99-100 of the "Getting
	Started with Microsoft Windows" version 3.1 manual and on pages 528-531 of the
	version 3.1 "Microsoft Windows Users Guide."
	
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
	utilities (for example, Stacker), disk partitioning drivers (for example, Disk
	Manager), and other third-party device drivers.
	
	To Clean Boot Before Running Windows 3.1 Setup
	----------------------------------------------
	
	If there is no disk compression software, disk partitioning software, or other
	third-party drivers necessary to boot the computer, the machine can be booted on
	a floppy disk that contains only the MS-DOS system files, without a CONFIG.SYS
	or AUTOEXEC.BAT file.
	
	If there is disk partitioning, disk compression, or other third-party software
	required to boot the computer, the startup files on the disk created above
	should appear as follows:
	
	  CONFIG.SYS                              AUTOEXEC.BAT
	  ----------                              ------------
	
	  FILES=45                                PROMPT $P$G
	  BUFFERS=20
	  <Third-party disk partitioner>
	  <Third-party disk compression driver>
	  <Other third-party driver>
	
	AFTER Windows 3.1 is installed, a clean boot should appear as follows:
	
	  CONFIG.SYS                              AUTOEXEC.BAT
	  ----------                              ------------
	  FILES=45                                PROMPT $P$G
	  BUFFERS=20                              PATH=C:\WINDOWS;C:\DOS;C:\ 
	  DEVICE=C:\<dir>\HIMEM.SYS               SET TEMP=C:\<valid path>
	  <Third-party disk partitioner>
	  <Third-party disk compression driver>
	  <Other third-party drivers>
	  STACKS=9,256
	  SHELL=C:\<valid path>\COMMAND.COM  /E:1024 /P
	
	Exceptions
	----------
	
	The following are examples of drivers that SHOULD NOT be removed; they are used
	when the computer is turned on to make the hard drive accessible. This is not a
	complete list, but it does include most of the commonly used drivers:
	
	  Hard Disk Drivers:          SQY55.SYS, SSTBIO.SYS, SSTDRIVE.SYS,
	                              AH1544.SYS, ILIM386.SYS, ASPI4DOS.SYS,
	                              SCSIHA.SYS, SCSIDSK.EXE, SKYDRVI.SYS,
	                              ATDOSXL.SYS, NONSTD.SYS
	
	  Disk Partitioners:          DMDRVR.BIN, SSTOR.SYS, HARDRIVE.SYS,
	                              EDVR.SYS, FIXT_DRV.SYS, LDRIVE.SYS,
	                              ENHDISK.SYS
	
	  Disk Compression Utilities: STACKER.COM, SSWAP.COM, SSTOR.EXE,
	                              DEVSWAP.COM
	
	If the purpose of a device driver or program is unknown, DO NOT remove it. Most
	device drivers and programs will display a message describing their purpose when
	they are initialized.
	
	A clean boot DOES NOT include:
	
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
	
	- Drivers for CD ROM/network
	
	- Tape backup spoolers/redirectors/buffers
	
	- Data acquisition units
	
	- Keyboard accelerators/buffers
	
	For information on clean booting Windows 3.0, query on the following words in the
	Microsoft Knowledge Base:
	
	  clean and boot and windows and 3.0
	
	Additional query words: tshoot clean-boot PRINT.COM RAMDRIVE.SYS JOIN.EXE PRINT.EXE MODE.COM GRAPHICS.COM SUBST.EXE 3.10 3.11 cleanboot
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
