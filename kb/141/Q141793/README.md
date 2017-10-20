---
layout: page
title: "Q141793: PRB: Disk Size Reported By Compaq Differs from Windows NT"
permalink: /kb/141/Q141793/
---

## Q141793: PRB: Disk Size Reported By Compaq Differs from Windows NT

{% raw %}

	Article: Q141793
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Compaq computer, the number of bytes recognized by Disk
	Administrator may be substantially different from what is reported by the Compaq
	disk utility.
	
	For example, on a Compaq Proliant 4500, SmartScsi Controller with four 2.1
	gigabytes drives, the available disk space was reported by Compaq Smart Start as
	having 8 gigabytes available. However when Windows NT 3.5 was installed, Disk
	Administrator reported available disk space at 6 gigabytes.
	
	CAUSE
	=====
	
	This occurs when the disk is improperly formatted during setup. If a Compaq
	computer has not been previously formatted using the FORMAT FOR NT option, the
	size of the disk reported by disk administrator may differ significantly.
	
	Windows NT uses a different method of calculating the disk sectors available. For
	more information about this, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q111045
	  TITLE : Boot Partition Size Limit with Compaq SmartSCSI Controller
	
	  ARTICLE-ID: Q138064
	  TITLE : Search Order for OLE Servers
	
	RESOLUTION
	==========
	
	In order for Windows NT's Disk Administrator to see the correct number of
	sectors, the disk must be formatted under Compaq's EISA config utility, under
	advanced options, option #4, NT 3.5 MAX Partition.
	
	
	The Compaq products discussed here are manufactured by Compaq Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	

{% endraw %}
