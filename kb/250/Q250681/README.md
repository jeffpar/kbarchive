---
layout: page
title: "Q250681: Access Violation in Mprouter.exe with OSPF Hardcoded Breakpoint"
permalink: kb/250/Q250681/
---

## Q250681: Access Violation in Mprouter.exe with OSPF Hardcoded Breakpoint

	Article: Q250681
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6a 
	- Microsoft Windows NT Server version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Open Shortest Path First (OSPF) routing protocol with the
	Routing and Remote Access service (RRAS), the following error message may
	occur:
	
	  Dr Watson for Windows NT
	  MPROUTER.EXE
	  Exception: hardcoded breakpoint (0x80000003)
	
	This can occur when you are using two or more IP address per network adapter, two
	of the addresses are enabled in the OSPF routing protocol, and a router in area
	0.0.0.0 is removed.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
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
	
	  Date      Time       Size     File name     Platform
	  ----------------------------------------------------
	  2/15/00   06:58 pm   75,024   Ospfmib.dll   Intel
	  2/15/00   06:57 pm   93,456   Ospfmib.dll   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400sp6 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : winnt:4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
