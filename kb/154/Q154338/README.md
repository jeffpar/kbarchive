---
layout: page
title: "Q154338: Documentation for TCP/IP Shows Incorrect Print Destination"
permalink: /kb/154/Q154338/
---

## Q154338: Documentation for TCP/IP Shows Incorrect Print Destination

{% raw %}

	Article: Q154338
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the "TCP/IP for Microsoft Windows NT Server version 3.51" manual, an
	incorrect print destination is displayed. On page 186, the steps are listed to
	create a TCP/IP printer. The steps show and state the choice as being LPRMonitor
	while the correct choice is LPR Port. There is no option for LPRMonitor in the
	dialog boxes of the actual setup for a TCP/IP printer, only LPR Port.
	
	The "System Guide for Microsoft Windows NT Workstation version 3.51" also
	incorrectly references LPRMonitor on page 197.
	
	RESOLUTION
	==========
	
	This is a documentation error. LPRMonitor should be LPR Port. Select LPR Port in
	all instances where the documentation refers to LPRMonitor.
	
	Additional query words: docerr
	
	======================================================================
	Keywords          : kbnetwork kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
