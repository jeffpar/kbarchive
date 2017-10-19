---
layout: page
title: "Q111428: What is a Clean Boot for WFWG 3.11 with NetWare?"
permalink: /kb/111/Q111428/
---

## Q111428: What is a Clean Boot for WFWG 3.11 with NetWare?

	Article: Q111428
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A "clean boot" (that is, starting your computer after all unnecessary commands
	have been removed from your CONFIG.SYS and AUTOEXEC.BAT files) is used as a
	basic troubleshooting step to test possible conflicts between Windows for
	Workgroups 3.11 and various terminate-and-stay-resident (TSR) programs and/or
	device drivers. There are different types of clean boots; the correct one to use
	depends on whether or not Windows for Workgroups has been installed.
	
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
	files required to make your system operational, such as disk- compression
	utilities (for example, Stacker), disk-partitioning drivers (for example, Disk
	Manager), and other third-party device drivers.
	
	To Clean Boot Before Running Windows for Workgroups Setup
	---------------------------------------------------------
	
	If you are not using any disk-compression software, disk-partitioning software,
	or other third-party drivers necessary to boot the computer, you can boot your
	computer from a floppy disk that contains only the MS-DOS system files
	(CONFIG.SYS and AUTOEXEC.BAT files are not required).
	
	If you are using disk-partitioning, disk-compression, or other third-party
	software required to boot the computer, the startup files on the disk created
	above should appear as follows:
	
	Using ODI Drivers [NetWare 3.x or 4.x Shell]:
	
	  CONFIG.SYS                                AUTOEXEC.BAT
	  ------------------------------------------------------
	
	  FILES=45                                  PROMPT $P$G
	  BUFFERS=20                                CD\<NetWare dir>
	  <Third-party disk-partitioning driver>    LSL
	  <Third-party disk-compression driver>     <ODI network card driver>
	  <Other required third-party driver>       IPXODI
	                                            NETX <or VLM>
	                                            CD\ 
	
	Using IPX.COM (Monolithic) [NetWare 3.x Shell Only]:
	
	  CONFIG.SYS                                 AUTOEXEC.BAT
	  -------------------------------------------------------
	
	  FILES=45                                   PROMPT $P$G
	  BUFFERS=20                                 IPX
	  <Third-party disk-partitioning driver>     NETX
	  <Third-party disk-compression driver>
	  <Other required third-party driver>
	
	To Clean Boot After Running Windows for Workgroups Setup
	--------------------------------------------------------
	
	After Windows for Workgroups 3.11 is installed with Novell NetWare as a second
	network, a clean boot should appear as follows:
	
	Using ODI Drivers [NetWare 3.x or 4.x Shell]:
	
	  CONFIG.SYS                                    AUTOEXEC.BAT
	  ----------------------------------------------------------
	
	  FILES=45                                    <WFWG 3.11 dir> NET START
	  BUFFERS=20                                  PROMPT $P$G
	  DEVICE=<WFWG 3.11 dir>\HIMEM.SYS            PATH=C:\WINDOWS;C:\DOS
	  <Third-party disk-partitioning driver>      SET TEMP=C:\<valid path>
	  <Third-party disk-compression driver>       CD\<NetWare dir>
	  <Other required third-party drivers>        LSL
	  SHELL=C:\DOS\COMMAND.COM /E:1024 /P         <ODI network card driver>
	  LASTDRIVE=P <for NetWare 3.x>               IPXODI
	     or                                       <WFWG 3.11 dir>\ODIHLP.EXE
	  LASTDRIVE=Z <for NetWare 4.x>               NETX <or VLM>
	  STACKS=9,256                                CD\ 
	  DEVICE=<WFWG 3.11 dir>\IFSHLP.SYS
	
	Using IPX.COM (Monolithic) [NetWare 3.x Shell Only]:
	
	  CONFIG.SYS                                     AUTOEXEC.BAT
	  -----------------------------------------------------------
	
	  FILES=45                                       <WFWG 3.11 dir> NET START
	  BUFFERS=20                                     PROMPT $P$G
	  DEVICE=<WFWG 3.11 dir>\HIMEM.SYS               PATH=C:\WINDOWS;C:\DOS
	  <Third-party disk-partitioning driver>         SET TEMP=C:\<valid path>
	  <Third-party disk-compression driver>          IPX
	  <Other required third-party drivers>           NETX
	  SHELL=C:\DOS\COMMAND.COM /E:1024 /P
	  LASTDRIVE=P
	  STACKS=9,256
	  DEVICE=<WFWG 3.11 dir>\IFSHLP.SYS
	
	Exceptions
	----------
	
	The following are examples of drivers that should NOT be removed; these drivers
	are used when you turn on the computer to make the hard disk drive accessible.
	Although these are not complete lists, they do include most of the commonly used
	drivers.
	
	Hard Disk Drivers:
	
	SQY55.SYS, SSTBIO.SYS, SSTDRIVE.SYS, AH1544.SYS, ILIM386.SYS, ASPI4DOS.SYS,
	SCSIHA.SYS, SCSIDSK.EXE, SKYDRVI.SYS, ATDOSXL.SYS, NONSTD.SYS
	
	Disk-Partitioning Drivers:
	
	DMDRVR.BIN, SSTOR.SYS, HARDRIVE.SYS, EDVR.SYS, FIXT_DRV.SYS, LDRIVE.SYS,
	ENHDISK.SYS
	
	Disk-Compression Utilities:
	
	STACKER.COM, SSWAP.COM, SSTOR.EXE, DEVSWAP.COM, DBLSPACE.SYS
	
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
	
	- Drivers for scanners or fax machines
	
	- Drivers for CD-ROM drives or networks
	
	- Tape backup spoolers, redirectors, or buffers
	
	- Data acquisition units
	
	- Keyboard accelerators or buffers
	
	REFERENCES
	==========
	
	You can find information about clean booting on pages 153-154 of the Microsoft
	Workgroup Add-On for Windows "User's Guide" version 3.11 manual and in chapter
	13, pages 9-10 of the "Microsoft Windows for Workgroups Resource Kit Addendum
	for Operating System Version 3.11" manual.
	
	For information on clean booting Windows 3.1, query on the following words in the
	Microsoft Knowledge Base:
	
	  clean and boot and win31
	
	Additional query words: tshoot 1.0 1.00 3.00 3.10 3.11 LAN Manager LANman clean-boot novell PRINT.COM RAMDRIVE.SYS JOIN.EXE PRINT.EXE MODE.COM GRAPHICS.COM SUBST.EXE cleanboot Connectivity
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
