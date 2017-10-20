---
layout: page
title: "Q170510: Double-Clicking the Mouse Button Acts as a Single Click"
permalink: /kb/170/Q170510/
---

## Q170510: Double-Clicking the Mouse Button Acts as a Single Click

{% raw %}

	Article: Q170510
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): kb3rdparty kbWinNT400sp4fix
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Double-clicking the mouse in your application behaves as if you clicked the
	mouse button once. This behavior has been observed in the following applications
	running in Windows NT 4.0 Service Pack 3:
	
	- Microsoft Visio Professional 4.x
	
	CAUSE
	=====
	
	Windows NT 4.0 Service Pack 3 adds a code path where mouse movement does not
	update the timestamp for a WM_MOUSEMOVE event. This behavior can potentially
	occur with any application that relies on WM_MOUSEMOVE timestamps. For example,
	Visio uses a custom event handler to detect double-clicks rather than checking
	for the WM_LBUTTONDBLCLK message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Dblclick-fix has been superseded by Getadmin-fix. For your convenience, the
	English version of this post-SP3 hotfix has been posted to the following
	Internet location. However, Microsoft recommends that you install Windows NT 4.0
	Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/getadmin-fix
	
	You can find the original hotfix at the following Microsoft ftp site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/archive/dblclick-fix
	
	WARNING: If you install the original (archived) version of this hotfix AFTER you
	apply the later version, your system may become unusable. Microsoft does not
	recommend you install the original hotfix after applying the later version.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	Visio Professional is manufactured by Visio Incorporation, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 4.00 single click left handed
	
	======================================================================
	Keywords          : kb3rdparty kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0,4.0 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
