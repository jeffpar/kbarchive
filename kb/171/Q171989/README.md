---
layout: page
title: "Q171989: Windows NT Services for Macintosh May Not Start in Desired Zone"
permalink: /kb/171/Q171989/
---

## Q171989: Windows NT Services for Macintosh May Not Start in Desired Zone

{% raw %}

	Article: Q171989
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On some networks, Windows NT Services for Macintosh may not start in the
	configured zone every time. The computer may choose a zone at random or may
	choose the network's default zone each time.
	
	Similar behavior can be seen if the Windows NT Server computer is in a multiple
	seeded range where the ranges are not exactly the same for the zones, which can
	cause confusion among nonseed routers. This would also affect browsing for
	printers because the printers may go back and forth between the different seeded
	ranges. An example would be seed router A routes 1-5 while, on the same net
	seed, router b routes 2-6. The devices listing 1 or 6 as their seeded range
	would not be visible by the other ranges.
	
	CAUSE
	=====
	
	Some routers may send late responses to "Get Net Info" AppleTalk Request,
	causing Service for Macintosh to come up in the wrong zone.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Technical Support for more
	information on the availability of this fix.
	
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: atalk zip sfm macfile fiddi
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
