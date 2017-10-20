---
layout: page
title: "Q158372: Black Screen During Windows NT 4.0 Upgrade on DEC"
permalink: /kb/158/Q158372/
---

## Q158372: Black Screen During Windows NT 4.0 Upgrade on DEC

{% raw %}

	Article: Q158372
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform an upgrade to Windows NT 4.0 on a DEC PC XL 590 computer with a
	Diamond Viper 9000 video card, the screen may go black when the computer
	switches from text mode to graphical mode during Setup.
	
	CAUSE
	=====
	
	This behavior occurs if you initiate the upgrade with the /B switch.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Install Windows NT 4.0 again. Install Windows NT into a folder other than the
	  one that currently contains Windows NT.
	
	- Do not use the /B switch. Run Setup using the three boot floppy disks.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
