---
layout: page
title: "Q244155: RRAS Does Not Use Layered Drivers Between Ndiswan and Wanarp"
permalink: /kb/244/Q244155/
---

## Q244155: RRAS Does Not Use Layered Drivers Between Ndiswan and Wanarp

	Article: Q244155
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT 4.0, support for Layered drivers, which work between Ndiswan and
	Wanarp, is not included in RRAS. This lack of support prevents the intermediate
	driver to intercept send and receive requests and connection notifications from
	Ndiswan.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time       Size    File name     Platform
	  ----------------------------------------------------
	  11/1/99   11:52 AM   106 KB  iprtrmgr.dll  i386
	  11/1/99   11:44 AM   31 KB   rasiphlp.dll  i386
	  11/1/99   11:51 AM   21 KB   wanarp.sys    i386
	  11/1/99   11:51 AM   168 KB  iprtrmgr.dll  alpha
	  11/1/99   11:42 AM   51 KB   rasiphlp.dll  alpha
	  11/1/99   11:50 AM   37 KB   wanarp.sys    alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
