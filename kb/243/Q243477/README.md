---
layout: page
title: "Q243477: STOP 0x0000001E Error Message with Intermediate Network Driver"
permalink: kb/243/Q243477/
---

## Q243477: STOP 0x0000001E Error Message with Intermediate Network Driver

	Article: Q243477
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install an intermediate network driver (for example, the DynamicAccess
	software intermediate driver from 3Com), your Terminal Server computer may
	display a blue screen error message in Tcpip.sys with a STOP 0x0000001E. The
	second DWORD of the stop code is 0xC00000005. This behavior has only been
	observed on multiprocessor computers.
	
	CAUSE
	=====
	
	This behavior occurs because the Tcpip.sys driver does not properly initialize
	on multiprocessor computers.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time      Size      File name     Platform
	  ----------------------------------------------------
	  9/23/99   5:09am    148,048   Tcpip.sys     Intel
	  9/23/99   1:11am    269,840   Tcpip.sys     Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition.
	
	MORE INFORMATION
	================
	
	An intermediate driver is a network driver that is layered between a transport
	driver and a miniport driver to provide added functionality.
	
	This fix was created from a similar fix made in Windows NT 4.0. For additional
	information about Tcpip.sys, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q195725 Intermediate Network Driver Causes STOP 0x0000001E on MP PC
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
