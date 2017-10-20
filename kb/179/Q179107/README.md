---
layout: page
title: "Q179107: STOP 0x0000000A in Raspptpe.sys on a Windows NT PPTP Server"
permalink: /kb/179/Q179107/
---

## Q179107: STOP 0x0000000A in Raspptpe.sys on a Windows NT PPTP Server

{% raw %}

	Article: Q179107
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience a STOP 0x0000000A in Raspptpe.sys on a Point-to-Point
	Tunneling Protocol (PPTP) server running Windows NT while PPTP clients are
	connecting.
	
	
	CAUSE
	=====
	
	The problem can be caused by an improperly formatted PPTP control packet from a
	PPTP client.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	PPTP-fix has been superseded by PPTP3-fix. For your convenience, the English
	version of this post-SP3 hotfix has been posted to the following Internet
	location. However, Microsoft recommends that you install Windows NT 4.0 Service
	Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/pptp3-fix/
	
	You can find the original hotfix at the following Microsoft ftp site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/archive/pptp-fix/
	
	WARNING: If you install the original (archived) version of this hotfix AFTER you
	apply the later version, your system may become unusable. Microsoft does not
	recommend you install the original hotfix after applying the later version.
	
	STATUS
	======
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 4.0. This problem was first corrected in
	Windows NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server
	Edition Service Pack 4.
	
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
