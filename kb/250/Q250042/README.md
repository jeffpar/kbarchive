---
layout: page
title: "Q250042: Performance Issue and Delay in Keyboard Input"
permalink: /kb/250/Q250042/
---

## Q250042: Performance Issue and Delay in Keyboard Input

{% raw %}

	Article: Q250042
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0; :4.0
	Operating System(s): 
	Keyword(s): kbenv kbprint kbWinNT4sp6fixkbbuglist
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows Base Terminal Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Periodically all clients see delayed "buffered" keyboard input and programs
	temporarily are not responsive.
	
	CAUSE
	=====
	
	This issue can occur when a user logs on to the server with client printer
	mapping enabled.
	
	Client printer mapping causes a large number of writes to the registry when a
	user logs in. These then have to be flushed to disk, and the registry flusher
	holds the registry lock exclusively while flushing. So, any program that tries
	to access the registry must wait until the flusher releases the lock, which can
	take several seconds.
	
	RESOLUTION
	==========
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Windows Base Terminal Server, Version 4.0
	-----------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	Windows Base Terminal Server, Version 4.0
	-----------------------------------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbprint kbWinNT4sp6fix kbbuglist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbWBTSearch kbWBTServ400
	Version           : winnt:4.0; :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
