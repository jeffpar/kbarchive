---
layout: page
title: "Q99281: Device Drivers and TSRs That Cannot Be Loaded High"
permalink: /kb/099/Q99281/
---

## Q99281: Device Drivers and TSRs That Cannot Be Loaded High

	Article: Q99281
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MemMaker increases your conventional memory by loading device drivers and
	terminate-and-stay-resident (TSR) programs into upper memory. Sometimes a device
	driver or TSR program cannot be loaded into upper memory because of its design.
	
	Since MemMaker is not aware of every device driver or TSR that cannot be loaded
	high, your system may stop responding (hang) when you run MemMaker. To recover
	from this situation, refer to the section titled "Your computer stops responding
	while MemMaker is loading a program or device driver other than EMM386" in
	Chapter 6 of the "User's Guide."
	
	MORE INFORMATION
	================
	
	During the beta test of MS-DOS 6 Upgrade, Microsoft found several programs that
	could not be loaded high. These programs are listed in the MEMMAKER.INF file.
	
	The following device drivers and TSRs cannot be loaded into upper memory and are
	not currently listed in the MEMMAKER.INF file:
	
	  Device Driver or TSR    Function
	  --------------------------------
	  ATDOSHC.SYS             Quantum Hard Card EZ driver
	  DEVSWAP                 SuperStor Pro device driver
	  DOSCFG.EXE              Iomega OAD driver for Bernoulli drives
	  GAI.SYS                 APPIAN Rendition IIe video card device driver
	  I82593.DOS              Zenith Data System Z-Note portable computer
	                          Windows for Workgroups device driver
	  NET                     PC-NFS device driver
	  SSTORDRV                SuperStor Pro device driver
	  STAT4L.EXE              Hewlett-Packard device driver for HP 4L
	  WD80X3.EXE              Wollongong Networking Software device driver
	  PRO4.DOS                Proteon ProNet P1347 device driver
	  MC.SYS                  Memory Commander TSR
	  MCIN.EXE                Memory Commander TSR
	  SK                      Older versions (1.x) of SideKick
	  HPLANE.DOS              HP Ethertwist EISA device driver
	  NETWORK.EXE             Webs Network TSR
	  PRO16EUI.SYS            Proteon ProNet 16/4 TokenRing device driver
	  NANSI.SYS               ANSI.SYS replacement Supplied with various
	                          video cards
	  FDCD.SYS                Version 2.01 SCSI driver for NEC CD-ROM drive
	                          (currently ships with SoundBlaster compatible
	                          Aria sound card).
	
	 ADTSR.EXE                After Dark for DOS version 1.0
	
	
	WORKAROUND
	==========
	
	To avoid having to specifically exclude a device driver or TSR program each time
	you run MemMaker, add the filename to the MEMMAKER.INF file. For example, if
	GAI.SYS is causing your system to hang, edit the MEMMAKER.INF file with a text
	editor (such as MS-DOS Editor) to add the following line:
	
	  *GAI
	
	Device Drivers and TSR Programs Ignored by MemMaker
	---------------------------------------------------
	
	The following device drivers and TSR programs are listed in the MEMMAKER.INF file
	and therefore are not loaded high:
	
	  *ASPI4DOS
	  *AUTOMENU
	  *BOOT
	  *DOSEDIT
	  *DRAGON
	  *NDD
	  *NETBIOS
	  *PROTMAN
	  *RP
	  *SCREATE
	  *SMARTDRV /DOUBLE_BUFFER
	  *SMARTDRV /L
	  *SSWAP
	  *STRETCH
	  *VANSI
	  *VDEFEND
	  *VRESUME
	  *VT
	
	Additional query words: 6.00 uma umb devicehigh load high loadhigh lh hardcard hang rtr4lm.dos MSIPX Related Device Driver protman.dos smartdrv.exe aspi4dos.sys ndd.com ndd.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
