---
layout: page
title: "Q244915: Daylight Savings Time Change Not Immediately Displayed"
permalink: kb/244/Q244915/
---

## Q244915: Daylight Savings Time Change Not Immediately Displayed

	Article: Q244915
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After Daylight Savings Time ends, your Windows NT Server-based computer may be
	delayed in reflecting the correct time. While minutes and seconds are listed
	correctly, the hour may be off by one. For example, it should display 1:01am,
	but displays 2:01am instead. This problem may be seen on other Windows NT
	Server-based computers if they are performing time synchronization by using the
	W32time service. Also, after a few minutes, the problem fixes itself.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain and apply the latest service pack for Windows
	NT.
	
	To prevent this problem from occurring, do not start the server, restart the
	server, or change the time on the server within six hours before the Daylight
	Savings Time change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP3,4.0 SP4,4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
