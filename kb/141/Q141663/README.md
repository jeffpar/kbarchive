---
layout: page
title: "Q141663: SMTP: Err Msg: Sockets 0116: TCP Access Failure by Sockets"
permalink: /kb/141/Q141663/
---

## Q141663: SMTP: Err Msg: Sockets 0116: TCP Access Failure by Sockets

	Article: Q141663
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the SMTPGATE.EXE with the Microsoft TCP/IP 16-bit version, you
	may get the following error message:
	
	  Error: Sockets 0116:
	  TCP Access Failure by Sockets
	
	CAUSE
	=====
	
	If SOCKETS.EXE is loaded before all TCP/IP network drivers and TSRs, the above
	error message will be displayed.
	
	WORKAROUND
	==========
	
	During installation of TCP/IP, the SOCKETS.EXE is not added to the AUTOEXEC.BAT.
	The following entries must be in the AUTOEXEC.BAT:
	
	  LOAD TCPIP
	  SOCKETS
	
	NOTE: The above entries must be in the order shown above. Sockets must be after
	all other TCP drivers.
	
	All network TSRs and drivers must be loaded and network login must be completed
	before you start SMTPGATE.EXE.
	
	Additional query words: 3.00 sockets0116:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
