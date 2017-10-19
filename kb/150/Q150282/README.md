---
layout: page
title: "Q150282: NT 3.x Video and Print Drivers Not Compatible with NT 4.0"
permalink: /kb/150/Q150282/
---

## Q150282: NT 3.x Video and Print Drivers Not Compatible with NT 4.0

	Article: Q150282
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51 4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to load OEM video and print drivers written for Windows NT version
	3.51 and earlier on a computer running Windows NT 4.0, the following error
	message is displayed:
	
	  The specified .INF file could not be found or was written for a previous
	  version of Windows NT. This release of Windows NT requires new video drivers
	  be installed.
	
	CAUSE
	=====
	
	Windows NT 3.x video and print drivers are not compatible with Windows NT 4.0.
	
	This incompatibility is a result of changes made under Windows NT 4.0 to move GDI
	into the Kernel.
	
	RESOLUTION
	==========
	
	Many Windows NT 3.x drivers continue to be compatible with Windows NT 4.0.
	Please contact the manufacturer of your particular print/video device for
	information concerning the availability of Windows NT 4.0 OEM drivers.
	
	NOTE: Even if Windows NT 3.x drivers seem to install correctly, they are not
	loaded by the operating system. Windows NT 4.0-compatible drivers must be
	obtained.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbdisplay kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51 4.0
	
	=============================================================================
	
