---
layout: page
title: "Q87672: Create a Boot Disk for LAN Manager Enhanced Workstation"
permalink: /kb/087/Q87672/
---

## Q87672: Create a Boot Disk for LAN Manager Enhanced Workstation

	Article: Q87672
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	SUMMARY
	=======
	
	Microsoft LAN Manager version 2.1 has been designed to run from a hard disk.
	However, it is possible to fit all the required files for an MS-DOS Enhanced
	workstation on a 720K 3.5-inch or 1.2 MB 5.25-inch floppy disk. It is not
	possible to create an Enhanced workstation boot disk on a 5.25-inch 360K floppy
	disk.
	
	MORE INFORMATION
	================
	
	The easiest way to build an Enhanced workstation boot disk is to install an
	MS-DOS Enhanced workstation on a computer with a hard drive, copy the minimum
	files you need onto a bootable floppy disk, and then edit the configuration
	files appropriately for the recipient LAN Manager workstation without a hard
	drive.
	
	For information on how to create a system disk, see your MS-DOS manual. This
	example is for a computer with a 3Com EtherLink II network card and the NetBEUI
	protocol. Instructions for editing the AUTOEXEC.BAT, CONFIG.SYS, LANMAN.INI, and
	PROTOCOL.INI files are included at the end of this article. The following files
	and directories should be placed on a system disk:
	
	  Directory of A:\ 
	  ----------------
	  COMMAND.COM      MS-DOS command file
	  AUTOEXEC.BAT     MS-DOS configuration file
	  CONFIG.SYS       MS-DOS configuration file
	  PROTOCOL.INI     LAN Manager configuration file
	  LANMAN.INI       LAN Manager configuration file
	  PROTMAN.DOS      Protocol Manager
	  PROTMAN.EXE      Protocol Manager
	  PRO.MSG          Help Messages
	  PROH.MSG         Help Messages
	  ELNKII.DOS       3Com net card driver
	  NETBEUI.EXE      NetBEUI Protocol
	  ENCRYPT.EXE      Encrypt service
	  MSRV.EXE         Messenger service
	  NETPOPUP.EXE     Netpopup service
	  CHKNET.EXE       Started with the workstation
	  MINSES.EXE       Started with the workstation
	  NETWKSTA.EXE     Started with the workstation
	  NET.EXE          Used for all Enhanced commands
	  NET.MSG          Additional help messages
	  LOAD.COM         Binds MAC driver to Protocol
	  LOGS <DIR>       Directory for error messages
	
	More information about MS-DOS Enhanced workstation files can be found on page 209
	of the "Microsoft LAN Manager Administrator's Reference."
	
	SAMPLE CONFIGURATION FILES
	--------------------------
	
	AUTOEXEC.BAT:
	
	PROMPT $P$G
	SET PATH=A:\;
	NET START WORKSTATION
	LOAD NETBEUI
	
	CONFIG.SYS:
	
	lastdrive=z
	device=A:\protman.dos /i:A:
	device=A:\ELNKII.DOS
	
	LANMAN.INI:
	
	Copy the LANMAN.INI file from an existing LAN Manager 2.1 MS-DOS Enhanced
	workstation onto the boot disk. In the [workstation] section, change the
	LANROOT= entry from C:\LANMAN.DOS to A:\ and change the COMPUTERNAME= entry. In
	the [netshell] section, change the USERNAME= entry if needed. In the [services]
	section, change the paths to the correct location for the files listed (relative
	to the LANROOT= entry).
	
	[networks]
	 netservices = chknet, minses
	
	[workstation]
	 wrkservices = messenger,netpopup,encrypt
	 computername = *put computername here*
	 domain = cavalier
	 lanroot = A:\ 
	 othdomains =
	 numdgrambuf = 3
	
	[netshell]
	 username = *put username here*
	
	 autorestore = NO
	 saveconnections = NO
	
	[version]
	 lan_manager = 2.1.0
	
	[messenger]
	
	[services]
	 chknet        = chknet.exe
	 minses        = minses.exe /n
	 workstation   = netwksta.exe
	 messenger     = msrv.exe
	 netpopup      = netpopup.exe
	 encrypt       = encrypt.exe
	 minipop       = minipop.exe
	
	PROTOCOL.INI:
	
	[PROTMAN]
	 DRIVERNAME = PROTMAN$
	 DYNAMIC = YES
	 PRIORITY = NETBEUI
	
	[NETBEUI_XIF]
	 Drivername = netbeui$
	 SESSIONS = 6
	 NCBS = 12
	 BINDINGS = "ELNKII_NIF"
	
	[ELNKII_NIF]
	
	; protocol.ini section for the 3Com Etherlink II Adapter Card
	
	;   The next two lines are defaults, the correct settings for your
	;   net card may differ
	
	   IOADDRESS = 0x300
	   INTERRUPT = 3
	   MAXTRANSMITS = 40
	   DRIVERNAME = ELNKII$
	
	;   Add this line if you are using an external transceiver
	
	   transceiver = external
	
	Additional query words: 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
