---
layout: page
title: "Q271472: HIS 2000 May Require Restarting Your System after Installation"
permalink: kb/271/Q271472/
---

## Q271472: HIS 2000 May Require Restarting Your System after Installation

	Article: Q271472
	Product(s): Microsoft SNA Server
	Version(s): ; WINDOWS:2000,2000 SP1; winnt:4.0 SP6a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows versions 2000, 2000 SP1 Server 
	- Microsoft Windows versions 2000, 2000 SP1 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Host Integration Server 2000 on Windows NT 4.0 (SP6a
	or later) or Windows 2000 (SP1 or later), you may be required to restart your
	system after the installation has completed.
	
	CAUSE
	=====
	
	Host Integration Server 2000 only requires that you restart your system if you
	selected to install the security integration component named Windows Account
	Synchronization. This component installs the SNA Windows NT Account
	Synchronization Service (SNAPMP), as well as the password change DLL,
	Snapwchg.dll.
	
	Because of the way that Windows NT and Windows 2000 security are implemented, the
	Local Security Authority (LSA) can only load the password change DLL during
	startup, and not dynamically.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbAudDeveloper kbWinAdvServSearch kbHostIntegServ2000 kbWin2000AdvServSP1 kbwin2000ServSP1
	Version           : :; WINDOWS:2000,2000 SP1; winnt:4.0 SP6a
	Issue type        : kbinfo
	
	=============================================================================
	
