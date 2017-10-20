---
layout: page
title: "Q271552: Stop 0x0a in zzzDesktopThread() When Computer Shuts Down"
permalink: /kb/271/Q271552/
---

## Q271552: Stop 0x0a in zzzDesktopThread() When Computer Shuts Down

{% raw %}

	Article: Q271552
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run UNISYS MAPPER System for Windows NT version 6.1.1 on a computer
	with multiple processors, you may receive the following STOP error message
	during Windows NT shutdown:
	
	  STOP 0x0000000A (0xBAD0B0E4,0x00000002,0x00000001,0x80003D3A)
	  IRQL_NOT_LESS_OR_EQUAL
	
	
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
	
	  Date      Time                Size       File name      Platform
	  ----------------------------------------------------------------
	  10/11/2000 01:55p             166,160    Gdi32.dll      x86
	  10/11/2000 01:55p             326,416    User32.dll     x86
	  10/23/2000 06:01p             1,254,512  Win32k.sys     x86
	  10/11/2000 01:55p             175,376    Winsrv.dll     x86
	
	  10/11/2000 01:53p             307,984    Gdi32.dll      Alpha
	  10/11/2000 01:54p             577,808    User32.dll     Alpha
	  10/23/2000 05:59p             2,054,896  Win32k.sys     Alpha
	  10/11/2000 01:54p             314,128    Winsrv.dll     Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
