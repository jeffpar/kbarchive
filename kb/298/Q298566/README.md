---
layout: page
title: "Q298566: &quot;Stop 0x0000000A&quot; Err Msg When You Use Nwfs.sys Redirector"
permalink: /kb/298/Q298566/
---

## Q298566: &quot;Stop 0x0000000A&quot; Err Msg When You Use Nwfs.sys Redirector

{% raw %}

	Article: Q298566
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IntranetWare Client Redirector for Windows NT (the Nwfs.sys
	file) by Novell Netware that is dated before May 2001, you may receive the
	following error message on a blue screen:
	
	  Stop 0x0000000A (0x0003aa0c, 0x00000002, 0x00000000, 0xf7026aea)
	
	NOTE: The contents of the error message may vary.
	
	CAUSE
	=====
	
	This behavior can occur because the user memory is not locked before it is
	passed to both the Transmission Control Protocol (TCP) driver and the local area
	network (LAN) driver. Most of the time the IntranetWare Client Redirector for
	Windows NT works because the memory is not paged out.
	
	RESOLUTION
	==========
	
	To resolve this behavior, contact Novell for an updated Nwfs.sys driver.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
