---
layout: page
title: "Q294884: TN3270 and TN5250 Emulators Only Supported Through TN Service"
permalink: kb/294/Q294884/
---

## Q294884: TN3270 and TN5250 Emulators Only Supported Through TN Service

	Article: Q294884
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The 3270 and 5250 emulators that are included with Microsoft SNA Server 3.0 (and
	later) and Host Integration Server 2000 have the ability to run in Telnet (TN)
	mode for session access.
	
	This article explains the limitations when running the 3270 and 5250 emulators in
	TN mode (TN3270 and TN5250).
	
	MORE INFORMATION
	================
	
	TN3270
	------
	
	- You can use the 3270 emulator in TN3270 mode only when you are going through
	  the SNA Server/Host Integration Server 2000 TN3270 Server service
	  (Tn3servr.exe).
	
	- Direct TN3270 connectivity to a mainframe is not supported by this emulator.
	
	- Third-party TN3270 emulators are supported when you are going through the SNA
	  Server/Host Integration Server 2000 TN3270 Server service.
	
	- Running the 3270 emulator in TN3270 mode through a third-party TN3270 gateway
	  is not supported.
	
	TN5250
	------
	
	- You can use the 5250 emulator in TN5250 mode only when going through the SNA
	  Server/Host Integration Server 2000 TN5250 Server service (Tn5250.exe).
	
	- Direct TN5250 connectivity to an AS/400 is not supported by this emulator.
	
	- Third-party TN5250 emulators are supported when you are going through the SNA
	  Server/Host Integration Server 2000 TN5250 Server service.
	
	- Running the 5250 emulator in TN5250 mode through a third-party TN5250 gateway
	  is not supported.
	
	Although direct TN3270 and TN5250 connectivity may work to a mainframe and
	AS/400, these emulators running in TN mode are not licensed for direct access to
	these systems and are therefore not supported.
	
	
	REFERENCES
	==========
	
	For a list of third-party supported TN3270 and TN5250 emulators, see the
	Companion Product Catalog on the SNA Server/Host Integration Server 2000
	CD-ROM.
	
	The latest version of the Companion Product Catalog (ISVCAT.exe) can also be
	downloaded from:
	
	  ftp://ftp.microsoft.com/bussys/winnt/sna-mrktg/
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
