---
layout: page
title: "Q177245: Multiprocessor Computer May Hang Because of Tcpip.sys"
permalink: /kb/177/Q177245/
---

## Q177245: Multiprocessor Computer May Hang Because of Tcpip.sys

{% raw %}

	Article: Q177245
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A multiprocessor computer running Microsoft Windows NT version 4.0 may appear to
	stop responding (hang) when subjected to heavy TCP/IP stress. The system will
	continue to respond to PINGs, but higher level TCP/IP activity will be blocked.
	If other network protocols are installed, the system may continue to function
	normally except for activities that depend on TCP/IP.
	
	CAUSE
	=====
	
	For this problem to occur, a process must have an open handle to an address and
	an open handle to a connection and must try to close both simultaneously (as,
	for example, might happen at process termination). Under very specific and
	timing-dependent situations, Tcpip.sys can become deadlocked, blocking further
	work by the driver. When this happens, other parts of the system will typically
	continue running for a period of minutes or longer until higher level services
	that depend on Tcpip.sys also become blocked, waiting for the driver.
	
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: This hotfix is superseded by the fix referred to in the following article
	in the Microsoft Knowledge Base:
	
	  Q179129 STOP 0x0000000A or 0x00000019 Due to Modified Teardrop Attack
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT Server 4.0, Terminal Server Edition service pack that
	contains this fix.
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  07/21/99  05:13p             147,920   Tcpip.sys     x86
	  07/21/99  04:05p             269,648   Tcpip.sys     Alpha
	
	
	
	STATUS
	======
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 4.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition.
	
	Additional query words: multi-processor multi processor
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
