---
layout: page
title: "Q164664: DEC Celebris 590 with Buslogic KT-946C May Hang"
permalink: /kb/164/Q164664/
---

## Q164664: DEC Celebris 590 with Buslogic KT-946C May Hang

{% raw %}

	Article: Q164664
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 2 on a DEC Celebris 590 with
	buslogic KT-946C, the computer appears to stop responding when restarted.
	
	CAUSE
	=====
	
	A problem in Atapi.sys driver was causing other peripheral component interface
	(PCI) devices to not respond as expected after enumerating the PCI bus (how they
	do not respond as expected depends on the device.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
