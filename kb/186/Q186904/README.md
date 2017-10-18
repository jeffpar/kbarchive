---
layout: page
title: "Q186904: MPROUTER Access Violation on Invalid RADIUS Response"
permalink: kb/186/Q186904/
---

## Q186904: MPROUTER Access Violation on Invalid RADIUS Response

	Article: Q186904
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Routing and Remote Access Service (RRAS) update with Remote
	Authentication Dial-In User Service (RADIUS) authentication and accounting, the
	MPROUTER process may encounter an access violation.
	
	CAUSE
	=====
	
	The RADIUS client received a response packet which was less than the minimum (20
	byte) length.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Apply the Routing and Remote Access Hotfix Pack 3.0. For your convenience, the
	English version of this post-SP3 hotfix has been posted to the following
	Internet location. However, Microsoft recommends that you install Windows NT 4.0
	Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postSP3/rras30-fix/
	
	NOTE: The above link is one path; it has been wrapped for readability.
	
	For additional information about the Routing and Remote Access Hotfix Pack 3.0,
	see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q189594
	  TITLE : RRAS Upgrade for WinNT Server 4.0 Hotfix Pack 3.0 Release Notes
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Routing and Remote Access Update
	for Windows NT version 4.0. This problem was first corrected in Windows NT 4.0
	Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition Service Pack
	4.
	
	
	Additional query words: av crash
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :4.0,4.0 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
