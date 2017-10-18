---
layout: page
title: "Q131603: Disabling the Timer for Windows NT Boot Loader"
permalink: kb/131/Q131603/
---

## Q131603: Disabling the Timer for Windows NT Boot Loader

	Article: Q131603
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can configure the Windows NT Boot Loader to pause indefinitely by editing
	the BOOT.INI and changing timeout value to -1. The following example shows the
	BOOT.INI after this change is made:
	
	     [boot loader]
	     timeout=-1
	     default=multi(0)disk(0)rdisk(0)partition(1)\WINNT35
	
	This change cannot be made through Control Panel, because the valid values are
	0-999. Any attempt to modify this value with a negative number produces the
	following error in versions 3.5 and 3.51:
	
	  Invalid Timeout Entry
	
	In Windows NT version 4.0, you will receive the following error:
	
	  Insufficient memory for this operation;
	  Close one or more windows applications to increase available memory
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,3.1,3.5,3.51,4.0
	
	=============================================================================
	
