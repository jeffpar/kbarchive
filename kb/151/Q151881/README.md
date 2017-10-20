---
layout: page
title: "Q151881: Shared Resources Disappear After NT Is Rebooted"
permalink: /kb/151/Q151881/
---

## Q151881: Shared Resources Disappear After NT Is Rebooted

{% raw %}

	Article: Q151881
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT and arrange for the sharing of file and/or printer
	resources, the shares disappear when you reboot the system.
	
	CAUSE
	=====
	
	This problem may be caused by an automatic Daylight Savings Time feature enabled
	in the system BIOS.
	
	WORKAROUND
	==========
	
	Disable the automatic Daylight Savings Time feature.
	
	NOTE: This problem and workaround are specifically related to the 486PVT-IO
	motherboard manufactured by FIC with Award BIOS version 5.162w2, but may apply
	to other motherboards as well.
	
	The 486PVT-IO motherboard is manufactured by FIC, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
