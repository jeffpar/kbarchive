---
layout: page
title: "Q261130: Cached Profile Deleted Even If Central Profile Is Not Updated"
permalink: kb/261/Q261130/
---

## Q261130: Cached Profile Deleted Even If Central Profile Is Not Updated

	Article: Q261130
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be using the "DeleteRoamingCache" setting to delete cached profiles
	during logoff (after the central location is updated). However, if a problem
	(such as a network problem) occurs while the current profile is being copied to
	the central location, the local cached profile may be deleted. When this occurs,
	there is no easy way to recover the last profile used.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name    Platform
	  --------------------------------------------------
	  04/25/2000  04:06p   76,560  Userenv.dll  Intel
	  04/25/2000  03:53p  125,200  Userenv.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
