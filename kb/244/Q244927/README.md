---
layout: page
title: "Q244927: Dr. Watson Error in CSRSS on Terminal Server Computer"
permalink: /kb/244/Q244927/
---

## Q244927: Dr. Watson Error in CSRSS on Terminal Server Computer

{% raw %}

	Article: Q244927
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbWinNT4sp6fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a connection from a client, a Dr. Watson error in CSRSS may be
	generated on the Terminal Server computer. This causes a single session to not
	connect.
	
	CAUSE
	=====
	
	This behavior occurs because of an initialization timing issue in CSRSS during
	ClientThreadSetup. The first thread performs some of the initialization, but
	other threads may enter the code even though the first thread has not yet
	completed initialization.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 and
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT 4.0 and Windows NT Server 4.0,
	Terminal Server Edition Service Pack 6.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
