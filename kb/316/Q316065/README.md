---
layout: page
title: "Q316065: PRB: Emulator Connection Is Lost if SNA Host Printer Is Added"
permalink: kb/316/Q316065/
---

## Q316065: PRB: Emulator Connection Is Lost if SNA Host Printer Is Added

	Article: Q316065
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an administrator adds additional Systems Network Architecture (SNA) host
	print sessions to an SNA Server or Host Integration Server (HIS) 2000
	configuration, users who are connected to 3270 sessions may get disconnected
	when the SNA/HIS 2000 configuration is saved. Additionally, users may not be
	able to reconnect to their 3270 sessions after the configuration change is
	made.
	
	This behavior only occurs if the 3270 printer Logical Units (LUs) that are used
	by the SNA/HIS 2000 Print Server and host print sessions are also assigned to
	specific users or groups in the SNA Manager.
	
	CAUSE
	=====
	
	When a user starts a 3270 emulator, a request is sent to a SNA/HIS 2000 Server
	prompting for a list of the 3270 LUs/Pools assigned to the user. If the response
	to this request contains more 3270 LUs/Pools then the 3270 emulator supports,
	the emulator may not connect to the SNA/HIS 2000 server. It has been observed
	that users may be disconnected from active 3270 sessions when this behavior
	occurs also.
	
	
	RESOLUTION
	==========
	
	If the 3270 printer LUs that is being used by the SNA/HIS 2000 host print
	sessions is assigned to users or groups in the SNA Manager, remove the LU
	assignments and save the SNA configuration.
	
	MORE INFORMATION
	================
	
	Do not assign 3270 print LUs that are being used by the SNA/HIS 2000 Print
	Server host print sessions to users or groups as they operate under the context
	of the SNA/HIS 2000 print service (Snaprint.exe).
	
	A behavior with similar symptoms can occur if large numbers of 3270 LUs/Pools are
	assigned to specific users or groups in the SNA Manager even if the SNA/HIS 2000
	print service is not being used. The SNA Manager allows a maximum of 4000 3270
	LUs/Pools to be assigned to each configured user or group. If a 3270 emulator or
	other SNA application that uses 3270 LUs has a limit to the number of LUs/Pools
	that it can accept from the SNA/HIS 2000 Server, then this behavior can occur if
	the application limit is exceeded.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
