---
layout: page
title: "Q232133: STOP 0x1E or STOP 0xA with More Than 200 Ports in RRAS"
permalink: kb/232/Q232133/
---

## Q232133: STOP 0x1E or STOP 0xA with More Than 200 Ports in RRAS

	Article: Q232133
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are configuring Microsoft Routing and Remote Access Services (RRAS) for
	200 ports, RRAS allows you to finish configuring without calculating resources
	on the computer or displaying warning messages to use fewer resources. When you
	restart the computer, Windows runs out of resources and generates a STOP 0x1E or
	STOP 0xA error message on a blue screen.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words: 4.00 vpn
	
	======================================================================
	Keywords          : kberrmsg kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
