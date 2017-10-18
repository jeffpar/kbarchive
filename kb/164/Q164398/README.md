---
layout: page
title: "Q164398: Afd.sys May Cause a STOP 0x0000001e Error Under High Stress"
permalink: kb/164/Q164398/
---

## Q164398: Afd.sys May Cause a STOP 0x0000001e Error Under High Stress

	Article: Q164398
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 05-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under high stress, a computer running Windows NT Server may get a Blue Screen
	with a STOP 0x0000001e KMODE_EXCEPTION_NOT_HANDLED message.
	
	
	CAUSE
	=====
	
	If a TDI transport provider indicates an event after the connection is aborted,
	AFD accesses a stale connection structure.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With the hotfix, AFD
	was changed to prevent dereferencing the connection structure twice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This problem was corrected in SP3.
	
	
	Additional query words: prodnt 0x1e
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
