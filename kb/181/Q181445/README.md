---
layout: page
title: "Q181445: XADM: Files Needed to Perform Exchange NT Backup on Workstation"
permalink: kb/181/Q181445/
---

## Q181445: XADM: Files Needed to Perform Exchange NT Backup on Workstation

	Article: Q181445
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 01-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to execute the Exchange version of Windows NT Backup on another
	workstation to back up Exchange Server computers remotely, the following files
	are required:
	
	  Ntbackup.exe
	  Edbbcli.dll
	  Backup.cnt
	  Backup.hlp
	
	Installing Exchange Administrator will install the Exchange version of Windows NT
	Backup and appropriate files onto the workstation. In addition, Windows NT 4.0
	Service Pack 3 is required when installing the Exchange 5.5 Administrator
	program.
	
	MORE INFORMATION
	================
	
	These files can also be copied from the correct CD-ROM into the workstation's
	SYTSTEM32 directory. The Edbbcli.dll, Backup.cnt, and Backup.hlp files can be
	found on the Exchange versions 4.0, 5.0, and 5.5 CD- ROM. Ntbackup.exe can be
	found on the Exchange versions 4.0 and 5.0 CD-ROM or the Windows NT 4.0 Service
	Pack 3 CD-ROM.
	
	Windows NT versions prior to Windows NT 4.0 Service Pack 3 do not contain an
	Exchange-aware version of Ntbackup.exe. Also, Exchange 5.5 does not contain
	Ntbackup.exe. Thus, the Exchange 5.5 Administrator program must be installed on
	a computer with Windows NT 4.0 Service Pack 3. Because Exchange versions 4.0 and
	5.0 contain the Exchange-aware Ntbackup.exe, the Administrator program can be
	installed on any supported version of Windows NT.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
