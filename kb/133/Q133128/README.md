---
layout: page
title: "Q133128: Printing From Windows NT 3.51 to an HP4 at 600 DPI is Slow"
permalink: /kb/133/Q133128/
---

## Q133128: Printing From Windows NT 3.51 to an HP4 at 600 DPI is Slow

{% raw %}

	Article: Q133128
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Printing a document from any application can be much slower in Windows NT 3.51
	than it is in Windows NT 3.5, when printing to an HP4 printer at 600 dots per
	inch (DPI). Spool files may be ten times larger under NT 3.51 than they were
	under 3.5.
	
	CAUSE
	=====
	
	The text is being printed as a graphic even though that option is not selected
	in the driver.
	
	To work around this problem, set the printer to 300 DPI.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt kbbug3.51 kbfix3.51.sp2 HP4p 4p 4si laserjet laser jet
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
