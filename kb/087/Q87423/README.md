---
layout: page
title: "Q87423: 360K Floppy Boot Disk for LAN Manager Basic Workstation"
permalink: kb/087/Q87423/
---

## Q87423: 360K Floppy Boot Disk for LAN Manager Basic Workstation

	Article: Q87423
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article describes how to create a 360K LAN Manager 2.1 Basic workstation
	boot disk.
	
	This procedure requires:
	
	- A Microsoft LAN Manager 2.1 server with a 5.25-inch high density floppy drive
	
	- A PC with 5.25-inch high density floppy drive using the same version of
	  MS-DOS the Basic workstation will be using
	
	- LAN Manager 2.1 installation disks
	
	- LAN Manager "Installation and Configuration Guide" for version 2.1
	
	To create a 360K LAN Manager 2.1 Basic workstation boot disk, do the following:
	
	1. Using the MS-DOS PC, prepare two boot disks (one 5.25-inch 360K and one
	  5.25-inch 1.2 MB disk). For more information about formatting disks, see your
	  MS-DOS manual.
	
	2. Prepare the LAN Manager server for installing MS-DOS workstations over the
	  network using the instructions on page 75 of the "Installation and
	  Configuration Guide." The procedure copies all files to the server that are
	  required to create a LAN Manager Basic workstation boot disk.
	
	3. Prepare a configuration template file that contains information about your
	  Basic workstation, using the instructions on page 77 of the "Installation and
	  Configuration Guide." Information from the template file is used to create
	  the PROTOCOL.INI file.
	
	4. Make a LAN Manager Basic boot disk on the 5.25-inch 1.2 MB disk with the
	  "ndisk /f" command. Follow the instructions on the screen and provide the
	  server name, template name, and MS-DOS version on the floppy disk. For more
	  information, see page 82 of the "Installation and Configuration Guide."
	
	5. Using the list below, copy files from the 1.2 MB disk onto the 360K disk. All
	  the files except the protocol manager can be in the root directory.
	
	6. Create the AUTOEXEC.BAT and CONFIG.SYS files using the examples below.
	
	7. You can copy the LANMAN.INI and PROTOCOL.INI files from the 1.2 MB Basic
	  workstation floppy disk without modification.
	
	Notes: This example uses a 3Com EtherLink II (C503) card and the NetBEUI
	protocol. You can replace the ELNKII.DOS file with the appropriate driver for
	your network card (and change the driver line in CONFIG.SYS). However, some
	drivers will be too large to fit on the 360K disk. LAN Manager Basic
	workstations only support the NetBEUI protocol. You can delete the Help files
	(*.HLP) if you want the room for something else.
	
	C:.
	|   COMMAND.COM - MS-DOS command file
	|   IO.SYS - MS-DOS hidden file
	|   MSDOS.SYS - MS-DOS hidden file
	|   CONFIG.SYS - MS-DOS configuration file
	|   AUTOEXEC.BAT - MS-DOS startup file
	|---LANMAN
	
	   |   PROTOCOL.INI - LM config. file
	   |   ELNKII.DOS - MAC driver
	   |   CONTI.HLP - Optional
	   |   NETBEUI.EXE - NetBEUI protocol
	   |   LANMAN.INI - LM config. file
	   |   NET.EXE - Required for net commands
	   |   SETNAME.EXE - Sets workstation computername
	   |   CHKNET.EXE- Required for redirector
	   |   MINSES.EXE - Required for redirector
	   |   USE.EXE - Required for net use
	   |   NETBIND.COM - Bind MAC driver and protocol
	   |   REDIR.EXE - Basic workstation redirector
	   |   NAME.HLP - Optional
	   |   NET.HLP - Optional
	   |   PAUSE.HLP - Optional
	   |   PRINT.HLP - Optional
	   |   START.HLP - Optional
	   |   USE.HLP - Optional
	   |
	   \---DRIVERS
	       \---PROTMAN
	               PROTMAN.DOS - Protocol manager
	               PROTMAN.EXE - Protocol manager
	
	AUTOEXEC.BAT
	------------
	
	prompt $p$g
	set path=a:\;a:\lanman;
	netbeui
	netbind
	rem You can add the following lines as needed:
	net start workstation workstation_name
	net use lpt1: \\server\share
	net use u: \\server\share
	
	CONFIG.SYS
	----------
	
	lastdrive=z
	device=a:\lanman\drivers\protman\protman.dos /i:a:\lanman
	device=a:\lanman\elnkii.dos
	
	Additional query words: 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
