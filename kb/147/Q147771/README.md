---
layout: page
title: "Q147771: Removable Media with IDE Interface Not Supported"
permalink: kb/147/Q147771/
---

## Q147771: Removable Media with IDE Interface Not Supported

	Article: Q147771
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	Windows NT does not support removable media with an IDE interface and IDE
	device drivers. Windows NT only supports removable media that uses the SCSI
	interface and drivers.
	
	For example, the default installation of an IDE SyQuest EZ Drive uses a
	real-mode driver specified in CONFIG.SYS. The driver swaps the Syquest
	removable drive when the system boots to MS-DOS, Windows 3.x or Windows 95.
	Windows NT does not support real-mode drivers. Therefore, this
	configuration is not supported.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
