---
layout: page
title: "Q104236: AV in Rasman.exe After Many Simultaneous Connections"
permalink: /kb/104/Q104236/
---

## Q104236: AV in Rasman.exe After Many Simultaneous Connections

	Article: Q104236
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetworkkbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have multiple Remote Access Service (RAS) connections running
	simultaneously from your Windows NT 4.0 RAS client, you may receive the
	following error:
	
	  Rasman.exe: Access violation 0xc00005 address 0x7789887a
	
	CAUSE
	=====
	
	Information on the stack is being overwritten while manipulating the value
	System\CurrentControlSet\Services\Tcpip\Parameters\Transient\Nameserver in the
	HKEY_LOCAL_MACHINE hive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: AV crash dun dial-up networking
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
