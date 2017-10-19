---
layout: page
title: "Q243261: Terminal Server Hangs on Shutdown with GSNW or CSNW Installed"
permalink: /kb/243/Q243261/
---

## Q243261: Terminal Server Hangs on Shutdown with GSNW or CSNW Installed

	Article: Q243261
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT may stop responding (hang) during the shutdown and restart process if
	Client Services for NetWare (CSNW) or Gateway Services for NetWare (GSNW) is
	installed.
	
	CAUSE
	=====
	
	This problem is related to a timing issue in Nwrdr.sys.
	
	NOTE: These symptoms may occur for a number of reasons. This hotfix is one
	possible solution and may or may not correct the problem.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0, Terminal Server Edition, service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date         Time     Size      File name   Platform
	  ----------------------------------------------------
	  10/05/1999   11:21a   156,272   Nwrdr.sys   i386
	  10/05/1999   11:27a   279,728   Nwrdr.sys   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
