---
layout: page
title: "Q246860: Server Configured for OSPF Does Not Select Optimum Path"
permalink: kb/246/Q246860/
---

## Q246860: Server Configured for OSPF Does Not Select Optimum Path

	Article: Q246860
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure Windows NT 4.0 Server for Routing and Remote Access Service
	(RRAS) and Open Shortest Path First (OSPF), the server may not select the
	optimum path to a network resource.
	
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
	
	  Date      Time     Size      File name   Platform
	  -------------------------------------------------
	  11/17/99  06:46p   136,464   Ospf.dll    Intel
	  11/17/99  06:45p   209,680   Ospf.dll    Alpha
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, disable OSPF and add known static routes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search
	Version           : winnt:4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
