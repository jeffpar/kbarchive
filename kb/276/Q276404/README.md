---
layout: page
title: "Q276404: Error Message &quot;Stop 0xA&quot; When Running Tcpip.sys"
permalink: /kb/276/Q276404/
---

## Q276404: Error Message &quot;Stop 0xA&quot; When Running Tcpip.sys

{% raw %}

	Article: Q276404
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a post-Service Pack 6 (SP6) version of Tcpip.sys that is dated
	2/22/00 through 5/26/00, you may receive the following error message on a blue
	screen with parameters similar to:
	
	  0x0000000a (0x00000000, 0x00000002, 0x00000001, 0xf31ded4a)
	
	CAUSE
	=====
	
	A regression was introduced in the hotfix for the UDP broadcast attack because
	of a change in IpRoute.c.
	
	RESOLUTION
	==========
	
	Please contact Microsoft Product Support Services for a new hotfix version of
	the Tcpip.sys file.
	
	The following hotfix resolves the problem. (Hotfixes which have file date on or
	past the date/time stamp in the following list can also resolve the problem.)
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 Service Pack that contains this fix.
	
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
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	05/26/2000  01:33p              174,544    tcpip.sys   i386
	05/26/2000  01:32p              310,896    tcpip.sys   alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: tcpip sys IpRoute c
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP6
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
