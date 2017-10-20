---
layout: page
title: "Q166266: STOP 0x0000000A Using OpenNT Commands and Utilities"
permalink: /kb/166/Q166266/
---

## Q166266: STOP 0x0000000A Using OpenNT Commands and Utilities

{% raw %}

	Article: Q166266
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdpartykbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Softway Systems OpenNT Commands and Utilities version 1.1 to
	execute a whole disk find, Windows NT may blue screen. For example, the
	following command may result in a blue screen:
	
	  $ find . -type f -exec grep -l "info" {} \;
	
	CAUSE
	=====
	
	This problem occurs because Windows NT does not free the virtual memory
	correctly. This is not a problem with OpenNT Commands and Utilities.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	OpenNT Commands and Utilities is manufactured by Softway Systems, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 0x prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
