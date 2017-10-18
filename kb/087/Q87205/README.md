---
layout: page
title: "Q87205: PROFS: Typical AUTOEXEC.BAT &amp; CONFIG.SYS Files for Gateway PC"
permalink: kb/087/Q87205/
---

## Q87205: PROFS: Typical AUTOEXEC.BAT &amp; CONFIG.SYS Files for Gateway PC

	Article: Q87205
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Normally the PROFS gateway PC is configured so that the network drivers, 3270
	API, and emulation program are all loaded automatically when the system is
	started. Often the gateway program is run from another batch file, to allow for
	easy modification and testing of command-line options.
	
	MORE INFORMATION
	================
	
	Below are examples of what you might typically find in a gateway PC's
	AUTOEXEC.BAT and CONFIG.SYS files.
	
	AUTOEXEC.BAT
	------------
	
	The AUTOEXEC.BAT file loads network drivers and loads 3270 emulation.
	
	  @ECHO OFF
	  PROMPT $p$g
	  PATH C:\DOS;c:\bin;C:\COMMSRV\RBIN;
	  SET TEMP=C:\DOS
	
	  @REM == LANMAN 2.1 == DO NOT MODIFY BETWEEN THESE LINES == LANMAN 2.1
	  PATH C:\LANMAN.DOS\NETPROG;%PATH%
	  NETBIND
	  NET START WORKSTATION
	  @REM == LANMAN 2.1 == DO NOT MODIFY BETWEEN THESE LINES === LANMAN 2.1
	
	  net logon vmgate nopassword
	  net use m: \\server1\share1 password1
	  net use n: \\server2\share2 password2
	
	  SET PATH=C:\COMMSRV\RBIN;%path%
	
	  @REM DO NOT DELETE -- Comm Server setup begins mark
	  lh SHARE
	  lh c:\COMMSRV\DEV\COMNDIS 5
	  lh c:\COMMSRV\RBIN\REMNAP \\comsvr
	  @REM DO NOT DELETE -- Comm Server setup ends mark
	
	  c:\commsrv\rbin\dos3270m
	
	At this point, the administrator logs on to the gateway VM ID and makes sure that
	the PROFS:IDLE or PROFS:READY prompt appears. The 3270 emulation can then be
	made memory-resident, and the administrator hot- keys back to MS-DOS and calls
	the batch file that runs the gateway program (HostDisp or VMGATE).
	
	CONFIG.SYS
	----------
	
	  DEVICE=C:\DOS\SETVER.EXE
	  DEVICE=C:\WIN\HIMEM.SYS
	  DOS=HIGH
	  FILES=30
	  BUFFERS=30
	  SHELL=C:\DOS\COMMAND.COM /P /E:400
	  LASTDRIVE=Z
	  DEVICE=C:\LANMAN.DOS\DRIVERS\PROTMAN\PROTMAN.DOS /i:C:\LANMAN.DOS
	  DEVICE=C:\LANMAN.DOS\Drivers\Ethernet\3Com\ELNKII.DOS
	  DEVICE=C:\LANMAN.DOS\Drivers\Protocol\UBXNS\UBXPS.DOS
	  STACKS=9,256
	
	
	Additional query words: 3.00 pcmail profslan AUTOEXEC.BAT CONFIG.SYS
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
