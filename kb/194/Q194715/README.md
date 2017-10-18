---
layout: page
title: "Q194715: Oracle Diagnostic Tool Missing After Installing Service Pack 4"
permalink: kb/194/Q194715/
---

## Q194715: Oracle Diagnostic Tool Missing After Installing Service Pack 4

	Article: Q194715
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbservicepack
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 4.0 Service Pack 4 on a DEC Alpha-based computer,
	the Testoraclexaconfig.exe diagnostic tool is not copied to the
	%SystemRoot%\System32 folder. However, when you install the service pack on an
	Intel-based computer, the file is automatically copied during the Setup process.
	
	RESOLUTION
	==========
	
	If you are installing the service pack on an Alpha-based computer and you are
	using Microsoft Transaction Server (MTS) or Distributed Transaction Coordinator
	(DTC) with an Oracle or XA-compliant database, copy the Testoraclexaconfig.exe
	file from the Service Pack 4 CD-ROM to the %SystemRoot%\System32 folder.
	
	The Testoraclexaconfig.exe file is located in the root folder on the Windows NT
	4.0 Service Pack 4 CD-ROM.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The optional Testoraclexaconfig.exe diagnostic tool is used to ensure that
	Oracle software has been configured properly. Normally, it is used after
	configuring Oracle software on an Alpha-based platform to ensure that the Oracle
	configuration is correct.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbsetup kbservicepack 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400
	Version           : WINNT:4.0
	Hardware          : ALPHA
	Issue type        : kbprb
	
	=============================================================================
	
