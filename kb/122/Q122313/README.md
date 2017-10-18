---
layout: page
title: "Q122313: Err Msg: Error 7361: IPX or NetBIOS Must Be Running..."
permalink: kb/122/Q122313/
---

## Q122313: Err Msg: Error 7361: IPX or NetBIOS Must Be Running...

	Article: Q122313
	Product(s): Microsoft Access Distribution Kit
	Version(s): MS-DOS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Microsoft Workgroup Add-On for MS-DOS with TCP/IP, the
	following message appears on startup:
	
	  Error 7361:
	  IPX or NetBIOS must be running in order to load the network services.
	
	CAUSE
	=====
	
	This message appears when the protocols and network adapter drivers have not
	been bound because there is a configuration error in PROTOCOL.INI and
	AUTOEXEC.BAT.
	
	RESOLUTION
	==========
	
	Modify the AUTOEXEC.BAT and PROTOCOL.INI files to properly bind TCP/IP to the
	network card.
	
	Before you begin, you need the latest Real Mode Microsoft TCP/IP driver. For more
	information about downloading the file WFWTCP.EXE from any of Microsoft's
	electronic services, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q112578 Creating a Setup Disk for the Updated WFW 3.11 TCP/IP Drivers
	
	When you have downloaded this file, run WFWTCP.EXE on a blank floppy disk to
	extract the necessary files.
	
	Setup Instructions
	------------------
	
	1. Start Setup for the Microsoft Workgroup Add-On for MS-DOS and during Setup,
	  select Other Protocol, specifying the path to where you have extracted the
	  files in WFWTCP.EXE (for example, A:\).
	
	2. When you have completed Setup (the message "Workgroup Add-On is now installed
	  on your computer" appears), press F3 to quit Setup.
	
	3. Edit C:\AUTOEXEC.BAT. It should contain, in order, the following lines:
	
	     C:\WRKGRP.DOS\net start NETBIND   (previously just NET START)
	     C:\WRKGRP.DOS\umb
	     C:\WRKGRP.DOS\tcptsr
	     C:\WRKGRP.DOS\tinyrfc
	     C:\WRKGRP.DOS\nmtsr.exe
	     C:\WRKGRP.DOS\emsbfr.exe
	     C:\WRKGRP.DOS\NET START   (you must add this line)
	
	4. Edit PROTOCOL.INI from the path where you installed Microsoft Workgroup
	  Add-On for MS-DOS. It should contain the following lines. Your own IP Address
	  information will likely be different.
	
	     [protman]
	     DriverName=PROTMAN$
	     PRIORITY=TCPIP   (Changed from =MS$NDISHLP)
	
	     [TCPIP]
	     DefaultGateway0=22 101 0 1   (you must add this line)
	     SubnetMask0=255 255 0 0      (you must add this line)
	     IPAddress0=22 101 47 173     (you must add this line)
	     NBSessions=6                 (you must add this line)
	     NetFiles=C:\WRKGRP.DOS       (you must add this line)
	
	5. To ensure that sockets support is configured correctly, edit the TCPUTILS.INI
	  file from the path where you installed Microsoft Workgroup Add-On for MS-DOS.
	  It should contain the following entries as well as what is there by default.
	
	     [TCPGLOBAL]
	     username=<username>   (supply the user name for <username>)
	     NetFiles=<path>       (supply the path for <path>, i.e. c:\net)
	     hostname=<hostname>   (supply the host name for this computer
	                           for <hostname>)
	     drivername=GLOBAL$
	
	6. Save the changes to AUTOEXEC.BAT, PROTOCOL.INI, and TCPUTILS.INI and restart
	  the computer.
	
	Example Files
	-------------
	
	Please note that your directory structure, network card, and IP addresses will
	differ from those listed here. These files were created on a PC using an Intel
	EtherExpress 16/16TP running MS-DOS version 6.2 and the Microsoft Workgroup
	Add-On for MS-DOS, version 3.11, with Microsoft TCP/IP as the only protocol.
	
	Example CONFIG.SYS
	
	  DEVICE=C:\DOS\SETVER.EXE
	  DEVICE=C:\DOS\HIMEM.SYS
	  DOS=HIGH
	  FILES=30
	  SHELL=C:\DOS\COMMAND.COM C:\DOS\  /p
	  DEVICE=C:\WRKGRP.DOS\IFSHLP.SYS
	  LASTDRIVE=Z
	
	Example AUTOEXEC.BAT
	
	  C:\DOS\SHARE.EXE
	  @ECHO OFF
	  PROMPT $p$g
	  PATH C:\DOS;C:\WRKGRP.DOS
	  SET TEMP=C:\DOS
	  C:\DOS\DOSKEY
	  C:\WRKGRP.DOS\net start NETBIND
	  C:\WRKGRP.DOS\umb
	  C:\WRKGRP.DOS\tcptsr
	  C:\WRKGRP.DOS\tinyrfc
	  C:\WRKGRP.DOS\nmtsr.exe
	  C:\WRKGRP.DOS\emsbfr.exe
	  C:\WRKGRP.DOS\NET START
	
	Example PROTOCOL.INI
	
	  [network.setup]
	  version=0x3110
	  netcard=ms$ee16,1,MS$EE16,1
	  transport=tcpip,TCPIP
	  lana0=ms$ee16,1,tcpip
	
	  [MS$EE16]
	  TRANSCEIVER=Twisted-Pair (TPE)
	  IOCHRDY=Late
	  IOADDRESS=0x310
	  IRQ=3
	  DriverName=EXP16$
	
	  [protman]
	  DriverName=PROTMAN$
	  PRIORITY=TCPIP
	
	  [TCPIP]
	  DriverName=TCPIP$
	  BINDINGS=MS$EE16
	  LANABASE=0
	  DefaultGateway0=22 101 0 1
	  SubnetMask0=255 255 0 0
	  IPAddress0=22 101 47 173
	  NBSessions=6
	  NetFiles=C:\WRKGRP.DOS
	
	Example TCPUTILS.INI
	
	  [tcpglobal]
	  drivername=GLOBAL$
	
	  [sockets]
	  drivername=SOCKETS$
	  bindings=TCPIP_XIF
	  numsockets=4
	  numthreads=32
	  poolsize=3200
	  maxsendsize=1024
	
	  [telnet]
	  drivername=TELNET$
	  bindings=TCPIP_XIF
	  nsessions=0
	  max_out_sends=0
	
	Example SYSTEM.INI
	
	  [network]
	  filesharing=yes
	  printsharing=yes
	  autologon=yes
	  computername=MYPC
	  lanroot=C:\WRKGRP.DOS
	  username=MYUSERID
	  workgroup=THEWRKGRP
	  reconnect=yes
	  dospophotkey=N
	  lmlogon=1
	  logondomain=THEDOMAIN
	  preferredredir=full
	  autostart=full,,server
	  maxconnections=8
	  directhosting=no
	
	NOTE: If the parameter "DIRECHOST=NO" is used instead of "DIRECTHOSTING=NO", then
	the error "Internal Error 1" will result.
	
	  [network drivers]
	  netcard=exp16.dos
	  transport=tcpdrv.dos,nemm.dos
	  devdir=C:\WRKGRP.DOS
	  LoadRMDrivers=yes
	
	  [386Enh]
	  device=vsockets.386
	  device=vbapi.386
	  TimerCriticalSection=5000
	  UniqueDosPSP=TRUE
	  PSPIncrement=2
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Workgroup Add-On for MS- DOS,
	version 3.11. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	For a related article regarding Windows for Workgroups version 3.11 and the real
	mode TCP/IP protocol as the only protocol, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q114839 Net Start Fails When TCP/IP is the Only Protocol
	
	
	Additional query words: wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : MS-DOS:3.11
	
	=============================================================================
	
