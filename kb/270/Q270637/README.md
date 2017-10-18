---
layout: page
title: "Q270637: &quot;Stop 1E&quot; When Using the Japanese Version of IBM Netfinity"
permalink: kb/270/Q270637/
---

## Q270637: &quot;Stop 1E&quot; When Using the Japanese Version of IBM Netfinity

	Article: Q270637
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6a 
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Windows NT 4.0 Server with Service Pack 6a (SP6a) and you
	install the Japanese version of IBM Netfinity, you may receive the following
	error message on a blue screen:
	
	  Stop 0x000001E win32k!HmgDecrementShareReferenceCount(GreSelectFont)
	
	
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
	
	  Date        Time    Size       File name   Platform
	  ---------------------------------------------------
	  08/17/2000  08:43p    166,160  Gdi32.dll   Intel
	  08/17/2000  08:44p    326,416  User32.dll  Intel
	  08/21/2000  10:20p  1,254,544  Win32k.sys  Intel
	  08/17/2000  08:44p    175,376  Winsrv.dll  Intel
	  08/17/2000  08:42p    307,984  Gdi32.dll   Alpha
	  08/17/2000  08:42p    577,808  User32.dll  Alpha
	  08/21/2000  10:18p  2,054,832  Win32k.sys  Alpha
	  08/17/2000  08:42p    314,128  Winsrv.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400sp6 kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
