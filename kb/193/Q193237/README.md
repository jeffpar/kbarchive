---
layout: page
title: "Q193237: Quota Advisor Causes STOP 0x00000024"
permalink: kb/193/Q193237/
---

## Q193237: Quota Advisor Causes STOP 0x00000024

	Article: Q193237
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers running Windows NT may encounter stop with the following STOP error
	message:
	
	  STOP 0x00000024 (001901b6 fc50fb8c fc50f9c8 80112cd0)
	  NTFS_FILE_SYSTEM
	
	NOTE: All parameters may vary depending on the system configurations.
	
	CAUSE
	=====
	
	This problem is caused by the Quota Advisor kernel mode driver QaFilter.sys with
	the following build date:
	
	  QaFilter.sys   Tue Jun 02 11:37:51 1998
	
	RESOLUTION
	==========
	
	The manufacturer of Quota Advisor is aware of this problem and has a fix for it.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: QaFilter.sys
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
