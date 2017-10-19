---
layout: page
title: "Q307975: Problems with TrendMicro Interscan Virus Firewall Software"
permalink: /kb/307/Q307975/
---

## Q307975: Problems with TrendMicro Interscan Virus Firewall Software

	Article: Q307975
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Server or Windows NT Server, Terminal Server Edition may generate the
	following STOP error message on a blue screen:
	
	  STOP 0x00000050 (0xbebea8a8, 0x00000000, 0x00000000, 0x00000002)
	  Page_Fault_in_Non-Paged_Area
	
	CAUSE
	=====
	
	This issue can be caused if the Trend Micro Interscan Virus Firewall and
	ServerProtect software is installed on your computer, and these programs are not
	configured correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Trend Micro to verify that your programs are
	correctly configured for your server, or disable the Vsapint.sys and
	Tmfilter.sys files to test if Trend Micro's anti-virus is involved in the STOP
	error message. For information about how to contact Trend Micro, please view the
	following Trend Micro Web site:
	
	  http://www.antivirus.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	
