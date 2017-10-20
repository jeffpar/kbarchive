---
layout: page
title: "Q160373: Adaptec Aic78xx Does Not Issue Multiple Tagged Commands"
permalink: /kb/160/Q160373/
---

## Q160373: Adaptec Aic78xx Does Not Issue Multiple Tagged Commands

{% raw %}

	Article: Q160373
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The AIC78xx SCSI controller on Windows NT 4.0 has very slow device access.
	
	CAUSE
	=====
	
	The AIC78xx.sys drive does not recognize the command queuing capabilities on the
	Adaptec 788xx device and, therefore, does not issue multiple commands.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.00. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt SCSI Adaptec performance aic78xx.sys
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
