---
layout: page
title: "Q304291: Intermittent Blue-Screen Error Messages in Terminal Server"
permalink: /kb/304/Q304291/
---

## Q304291: Intermittent Blue-Screen Error Messages in Terminal Server

{% raw %}

	Article: Q304291
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbTSE400preSP7fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under high-stress conditions (such as a large number of user logons), your
	Windows NT Server version 4.0, Terminal Server Edition-based computer may stop
	responding (hang), and you may receive the following error message on a blue
	screen:
	
	  STOP 0x0000001e (0xc0000005, 801207fb, 00000001, 00100598)
	
	CAUSE
	=====
	
	This problem can be caused by windows list pool (Uswl) allocation overruns that
	can cause pool damage to valid pools that are allocated near it.
	
	RESOLUTION
	==========
	
	To resolve this problem, apply the fix that is described in the "Resolution"
	section of the following Microsoft Knowledge base article:
	
	  Q294196 'Stop 0x0000001E' in Win32k.sys on Windows NT 4.0 Terminal Server
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbTSE400preSP7fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
