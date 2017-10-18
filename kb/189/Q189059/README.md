---
layout: page
title: "Q189059: Stop: 0x0000000A Using Microtest CD-ROM Changer Software"
permalink: kb/189/Q189059/
---

## Q189059: Stop: 0x0000000A Using Microtest CD-ROM Changer Software

	Article: Q189059
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Microtest DiskPort CD-ROM changer software to operate a CD- ROM
	tower, you may intermittently receive System Stop messages:
	
	  0x0000000A ( 0xE11B1FB0, 0x00000002, 0x00000001, 0x80003D4A )
	  IRQL_NOT_LESS_OR_EQUAL
	
	NOTE: The parameters may vary depending on the hardware configuration.
	
	CAUSE
	=====
	
	The CD-ROM driver Mtdpfltr.sys may not be written to function properly on
	multiprocessor computers.
	
	RESOLUTION
	==========
	
	To work around this problem, you can try using the /numproc=1 switch in the
	boot.ini file and see if the server runs without problems; otherwise, removing
	the Microtest product is required.
	
	MORE INFORMATION
	================
	
	Microtest is aware of this problem and has newer products available.
	
	The Microtest product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 0xA
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
