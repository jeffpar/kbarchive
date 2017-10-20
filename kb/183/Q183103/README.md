---
layout: page
title: "Q183103: Year 2000 Fix for Halncr.dll"
permalink: /kb/183/Q183103/
---

## Q183103: Year 2000 Fix for Halncr.dll

{% raw %}

	Article: Q183103
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kbYear2000kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the NCR 3455 and 3555 if the clock is set to a time prior to the year
	2000(for example, December 31 at 11:45), within an hour after "12:00AM January
	1, 2000" the year is rolled back to 1900.
	
	CAUSE
	=====
	
	The original Halncr.dll is not coded to support the year 2000.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Technical Support to obtain the
	following fix.
	
	This fix should have the following time stamp:
	
	  03/12/98  07:23p                80,816 Halncr.dll (Intel)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	======================================================================
	Keywords          : kbYear2000 kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
