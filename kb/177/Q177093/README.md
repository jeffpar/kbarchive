---
layout: page
title: "Q177093: FPNW Service Fails to Start"
permalink: kb/177/Q177093/
---

## Q177093: FPNW Service Fails to Start

	Article: Q177093
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.00
	Operating System(s): 
	Keyword(s): kbinfo kbArtTypeINF
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following Drwtsn32 error may appear when restarting a computer running
	Windows NT Server and running File and Print Services for NetWare (FPNW):
	
	  Instruction at 0x7722D608 referenced memory at 0x003DDEE0 could not be
	  read. Exception error in nwssvc.exe.
	
	Instruction address and memory address may be different; however, the exception
	should occur in Nwssvc.exe
	
	The FPNW service will also fail to start and cannot be started manually.
	
	CAUSE
	=====
	
	This problem may be caused by a corrupt Net$prn.dat file located in the Sysvol
	directory.
	
	RESOLUTION
	==========
	
	To fix the problem, delete or rename the current Net$prn.dat file and restart
	the server. When the server restarts, a new Net$prn.dat file will be created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : WinNT:4.00
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
