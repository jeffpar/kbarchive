---
layout: page
title: "Q127729: X400: Sample TP4 Configuration Files"
permalink: kb/127/Q127729/
---

## Q127729: X400: Sample TP4 Configuration Files

	Article: Q127729
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are examples of the AUTOEXEC.BAT, CONFIG.SYS, and PROTOCOL.INI
	files for an X.400 gateway using TP4 as the transport stack. It is assumed that
	the gateway computer has a DEC DEPCA Ethernet card in it.
	
	AUTOEXEC.BAT
	------------
	
	  Prompt $p$g
	  Echo Off
	  set path =c:\dos
	  set tmp =c:\tmp
	   
	  lh doskey
	  lh mouse
	   
	  @REM ==== LANMAN 2.2a ====
	  SET PATH=C:\LANMAN.DOS\NETPROG;%PATH%
	  c:\tp4\drivers\tp4.exe
	  NET START workstation full
	  LOAD NETBEUI
	  NET LOGON
	  @REM ==== LANMAN 2.2a ====
	
	CONFIG.SYS
	----------
	
	  device=c:\dos\himem.sys /testmem:off
	  device=c:\dos\emm386.exe noems /x=D000-DFFF
	  dos=high,umb
	  files=30
	  shell=c:\dos\command.com c:\dos\ /p
	   
	  LASTDRIVE=Z
	  DEVICE=C:\LANMAN.DOS\DRIVERS\PROTMAN\PROTMAN.DOS /i:C:\LANMAN.DOS
	  DEVICE=C:\LANMAN.DOS\DRIVERS\ETHERNET\DEPCA\DEPCA.DOS
	  device=c:\tp4\drivers\dli.dos
	
	PROTOCOL.INI
	------------
	
	  [PROTMAN]
	    DRIVERNAME = PROTMAN$
	    DYNAMIC = YES
	    PRIORITY = NETBEUI
	   
	  [CLNS]
	    DRIVERNAME = CLNS$
	    NTC        = 6
	   
	  [PLUTO]
	    DRIVERNAME = PLUTO$
	    BINDINGS   = "DEPCA_NIF"
	    NBUF       = 4
	    NTC        = 7
	   
	  [NETBEUI_XIF]
	    Drivername = netbeui$
	    SESSIONS = 6
	    NCBS = 12
	    BINDINGS = "DEPCA_NIF"
	    LANABASE = 0
	   
	  [DEPCA_NIF]
	   
	  ; PROTOCOL.INI section for the DEC EtherWORKS (MC, LC, Turbo, & DEPCA)
	  ; Adapters
	
	      DriverName   = DEPCA$
	      MaxMulticast = 12
	      MaxTransmits = 32
	      AdapterName  = DE200
	      RamAddress   = 0xD000
	      Interrupt    = 5
	   
	  ;  use Interrupt = 5 for turbo board
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
