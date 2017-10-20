---
layout: page
title: "Q163506: HP 4M Plus Printer Fails Printing Duplex When Set at 600 DPI"
permalink: /kb/163/Q163506/
---

## Q163506: HP 4M Plus Printer Fails Printing Duplex When Set at 600 DPI

{% raw %}

	Article: Q163506
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint
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
	
	The Hewlett-Packard (HP) 4M Plus printer using the PostScript driver does not
	print duplex at 600 dots per inch (DPI), while 300 DPI works fine.
	
	CAUSE
	=====
	
	The 600 DPI setting requires more resources than 300 DPI. The 600 DPI setting
	prints four times as many dots per inch as 300 DPI. The default memory in the HP
	4M Plus is not enough for most printouts to be duplexed. These printouts will
	print duplex if enough memory is added to the printer.
	
	RESOLUTION
	==========
	
	The manual for the HP 4M Plus recommends 12 MB of RAM for duplexing legal size
	pages. Some printouts may be complex enough to require even more memory to
	duplex.
	
	MORE INFORMATION
	================
	
	HP 4M Plus is manufactured by Hewlett-Packard, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kb3rdparty kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
