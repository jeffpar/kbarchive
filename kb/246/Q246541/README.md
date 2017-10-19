---
layout: page
title: "Q246541: Memory Leak in Tcpsvcs.exe When the LPD Service Is Stressed"
permalink: /kb/246/Q246541/
---

## Q246541: Memory Leak in Tcpsvcs.exe When the LPD Service Is Stressed

	Article: Q246541
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the LPD service is stressed, Tcpsvcs.exe may leak memory. If you monitor
	Working Set and Private Bytes for the Tcpsvcs.exe process in Performance
	Monitor, both of these items may show a gradually increase (which may cause the
	LPD service to not respond).
	
	NOTE: You must restart the LPD service to clear the condition.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time     Size     File name    Platform
	  ---------------------------------------------------
	  11/17/1999  03:14p   38,160   Lpdsvc.dll   Alpha
	  11/17/1999  03:14p   23,312   Lpdsvc.dll   I386
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words: Perfmon
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search
	Version           : winnt:4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
