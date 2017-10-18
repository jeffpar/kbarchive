---
layout: page
title: "Q94968: 3COM: Gateway Won't Run -- Validate GATEWAY.INI Entries"
permalink: kb/094/Q94968/
---

## Q94968: 3COM: Gateway Won't Run -- Validate GATEWAY.INI Entries

	Article: Q94968
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail for PC Networks Gateway to 3Com 3+Mail, version 1.00,
	sometimes does not run after a successful installation, or the gateway stops
	working even though nothing seems to have changed since the last time it was
	run.
	
	CAUSE
	=====
	
	You may have an invalid installation configuration.
	
	RESOLUTION
	==========
	
	Validate the installation configuration by validating the contents and location
	of the GATEWAY.INI file. The GATEWAY.INI file must reside in the same directory
	as the GATEWAY.EXE file (the executable file).
	
	MORE INFORMATION
	================
	
	Sample GATEWAY.INI File
	-----------------------
	
	[3+Mail_PCMail]
	
	  MSMailDrive = M:\MAILDAT\
	  FFAPIPath = M:\3GATEWAY\
	  3ComGateDomain = MSMAIL:CORP
	  3ComDefaultDomain = HQ:CORP
	  MSNotifyUser = MAIN/P01/ADMIN
	  3ComNotifyUser = ADMIN:HQ:CORP
	  GatewayPath = M:\3GATEWAY\
	  AuditFile = M:\3GATEWAY\LOGS\AUDIT.LOG
	  ErrorFile = M:\3\GATEWAY\ERROR.LOG
	  BadMessageFile = M:\3GATEWAY\LOGS\BADMSG.LOG
	  MFFSendFile = MMFF.PUT
	  MFFRetrvFile = MMFF.GET
	  ImmFireKey = F10
	  ShutdownKey = F3
	  Max3ComMsgSize = 20232
	  MaxPCMailMsgSize = 4000000
	  DefaultShutdownInt = 0
	  FireInterval = 240
	  Pass3ComAtch = YES
	  Break3ComMsg = YES
	  BreakPCMailMsg = YES
	  3ComProperty = 5001
	
	Here is a list of items to check:
	
	- The path statements for MSMailDrive, FFAPIPath, and GatewayPath must all end
	  with a backslash (\). Other path statements must end with a filename.
	
	- The directory listed for MSMailDrive must be the current MS-DOS directory. In
	  other words, for the example above, if you type DIR M:, the directory listing
	  should list the subdirectories for the logical root of the Microsoft Mail
	  database (ATT, GLB, NME, MAI, P1, and so on).
	
	- The location listed in FFAPIPath must contain the two spawned executables,
	  COURGET.EXE and COURPUT.EXE.
	
	- All the directories listed must have Read/Write/Create/Delete permissions for
	  temporary files used by the gateway.
	
	- The property number listed for the XNS name service must be correct. You can
	  use the 3Com 3N utility and issue a 3N DIR PROP 5001 (or whatever is listed)
	  command to validate the entries for that property.
	
	- 3ComGateDomain must not be the same as 3ComDefaultDomain.
	
	- The PC running GATEWAY.EXE must be logged in to the XNS name service as the
	  _GATEWAY user in the 3ComGateDomain.
	
	Additional query words: 1.00 gateway 3Com INI install
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus100
	Version           : :1.0
	
	=============================================================================
	
