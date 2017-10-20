---
layout: page
title: "Q222077: AV in RRAS When Windows Time Service Adjusts System Time"
permalink: /kb/222/Q222077/
---

## Q222077: AV in RRAS When Windows Time Service Adjusts System Time

{% raw %}

	Article: Q222077
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a system with Routing and Remote Access Service (RRAS), the following
	symptoms may occur as a result of a negative system time adjustment.
	
	- Mpradmin.exe may display an Integer Overflow exception error message (status
	  code 0xC0000095).
	
	- You may not be able to stop Mprouter.exe and it stops accepting new RRAS
	  connections.
	
	CAUSE
	=====
	
	Both symptoms are caused by an arithmetic calculation for call duration that can
	generate a negative 64-bit result that causes an integer overflow when saved in
	a 32-bit integer format. This behavior occurs only if the time adjustment is
	negative and sufficiently large enough to move the system clock back to a time
	prior to the beginning of any RRAS connection.
	
	Time adjustments are caused in a variety of ways. Manual time correction through
	the System Time tool in Control Panel is a potential source, as are automatic
	mechanisms such as the intrinisic OS operations that periodically synchronize
	the system time to the CMOS clock resource. Domain-based Microsoft network time
	services can similarly cause this problem. Additionally, third-party programs
	that synchronize the system clock to a network-accessible reference clock can
	act to stimulate this problem.
	
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
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
