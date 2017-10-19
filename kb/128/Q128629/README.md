---
layout: page
title: "Q128629: Cannot Boot Windows NT on a Diskless Workstation"
permalink: /kb/128/Q128629/
---

## Q128629: Cannot Boot Windows NT on a Diskless Workstation

	Article: Q128629
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2.2c,3.0,3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For several reasons, you cannot boot Windows NT from a diskless workstation.
	Primarily, Windows NT requires a local hard disk for the paging file, and RPL
	requires the real mode drivers (RPLBOOT.SYS, RPLDISK.SYS, etc.) to load during
	the boot process.
	
	MORE INFORMATION
	================
	
	The following operating systems can be used on diskless workstations, or from
	any workstation using a supported network card that allows remoteboot.
	
	- MS-DOS 3.30
	
	- MS-DOS 4.01
	
	- MS-DOS 5.00
	
	- MS-DOS 6.xx
	
	- Microsoft Windows 3.1 running on one of the above versions of MS-DOS.
	
	
	The following diskless workstation network software is supported:
	
	- Microsoft LAN Manager for MS-DOS, version 2.2c
	
	- Any protocol that DOS LAN Manager supports (NetBEUI or TCP/IP)
	
	
	For more information on installation of remoteboot workstations, see the Windows
	NT Server version 3.5 Installation Guide, page 111.
	
	Additional query words: 2.20 3.10 prodnt remote boot less
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbZNotKeyword kbLanManSearch kbNetworkClientSearch kbLanMan220c kbNetworkClient300DOS
	Version           : :2.2c,3.0,3.1,3.5
	Issue type        : kbinfo
	
	=============================================================================
	
