---
layout: page
title: "Q194113: ErrMsg: Microsoft Internet Explorer 4.0 Setup - Some Services..."
permalink: /kb/194/Q194113/
---

## Q194113: ErrMsg: Microsoft Internet Explorer 4.0 Setup - Some Services...

	Article: Q194113
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:4.01,4.01 Service Pack 1,4.01 Service Pack 2; winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	- Microsoft Internet Explorer versions 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Internet Explorer 4.01 or Internet Explorer 4.01 SP1 Beta
	to Internet Explorer 4.01 SP1 on a Windows NT 4.0-based computer that has
	Windows NT Service Pack 4 (SP4) and Windows NT Server Option Pack (NTOP) version
	4.0 installed, the following error message is displayed:
	
	  Microsoft Internet Explorer 4.0 Setup - Some services could not be
	  started. Setup needs to reboot your system in order to start the
	  services.
	
	CAUSE
	=====
	
	This behavior occurs because the installation of Internet Explorer disables the
	Protected Storage (Pstore) services and other services that are dependent on
	Pstore cannot be restarted.
	
	RESOLUTION
	==========
	
	To resolve this issue, restart the computer to re-enable the Pstore services.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search kbIEsearch kbZNotKeyword2 kbIENT400Search kbZNotKeyword3 kbIE401WinNT400 kbIE401WinNT400SP1 kbIE401WinNT400SP2
	Version           : WINDOWS:4.01,4.01 Service Pack 1,4.01 Service Pack 2; winnt:4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
