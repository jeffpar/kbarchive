---
layout: page
title: "Q164925: Non-paged Pool Leak in Ftdisk.sys"
permalink: /kb/164/Q164925/
---

## Q164925: Non-paged Pool Leak in Ftdisk.sys

{% raw %}

	Article: Q164925
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a server has been running for a period of time, users connecting to the
	server over the network may receive RPC Server Busy errors. If users tries to
	log on locally, they may receive the following error message:
	
	  C0000017 (STATUS_NO_MEMORY)
	
	Further investigation with Performance Monitor may show a nonpaged pool leak.
	
	CAUSE
	=====
	
	An IRP is allocated for a write to a shadow member. This IRP is never
	deallocated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: FTDISK leak non-paged pool perfmon leaking
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Hardware          : ALPHA MIPS x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
