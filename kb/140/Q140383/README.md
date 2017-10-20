---
layout: page
title: "Q140383: LPR Printer Port Requires TCP/IP Address and Printer Name"
permalink: /kb/140/Q140383/
---

## Q140383: LPR Printer Port Requires TCP/IP Address and Printer Name

{% raw %}

	Article: Q140383
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
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
	
	When you create an LPR printer port, both the TCP/IP address and a printer or
	print queue name are needed.
	
	CAUSE
	=====
	
	The dialog box for adding LPR Printing was designed to require the user to enter
	both a TCP/IP address and a name for the printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Lpdsvc.dll and Lpmon.dll have been updated in Service Pack 5 for Windows NT
	3.51 to resolve the issue. With SP5, the Add LPR Compatible Printer dialog box
	allows the user to enter a TCP/IP address without entering a printer or print
	queue name in the definition.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
