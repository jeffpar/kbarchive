---
layout: page
title: "Q150152: Printing from Mac to HP 3x with 52.2 HP Postscript Cartridge"
permalink: /kb/150/Q150152/
---

## Q150152: Printing from Mac to HP 3x with 52.2 HP Postscript Cartridge

{% raw %}

	Article: Q150152
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print from a Macintosh client using any version of the Apple
	Laserwriter driver, and you are using a Hewlett-Packard HP 3x printer with a
	52.2 HP Postscript Cartridge, the output includes unwanted mirror and inverse
	images.
	
	CAUSE
	=====
	
	This problem is caused by a flaw in the version of SFMPrint.exe that was
	included in Service Pack 2 for Windows NT Server version 3.51.
	
	RESOLUTION
	==========
	
	To solve this problem, replace SFMPrint.exe from SP2 with the original Windows
	NT Server SFMPrint.exe, dated May 26, 1995.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows NT Server version 3.51
	Service Pack 2. This problem was corrected in the latest Windows NT 3.51 U.S.
	Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5
	
	=============================================================================
	

{% endraw %}
