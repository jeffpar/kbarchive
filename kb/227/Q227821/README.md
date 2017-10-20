---
layout: page
title: "Q227821: Blue Screen STOP Error When Connecting to UNIX Server Volume"
permalink: /kb/227/Q227821/
---

## Q227821: Blue Screen STOP Error When Connecting to UNIX Server Volume

{% raw %}

	Article: Q227821
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer displays a blue screen STOP error message when you connect to a
	UNIX server volume through the Sun Solstice client. The STOP code and parameters
	may vary.
	
	CAUSE
	=====
	
	The problem occurs because of a Sunwnfs.sys system thread that does not complete
	IRPs properly before freeing the IRP's pool block. This causes pointer
	calculation errors and random pool corruption.
	
	RESOLUTION
	==========
	
	Please contact the vendor for an update to the Sun Solstice client installable
	file system driver.
	
	STATUS
	======
	
	This issue has been identified in Sunwnfs.sys dated May 10, 1998.
	
	
	REFERENCES
	==========
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
