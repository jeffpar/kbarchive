---
layout: page
title: "Q222840: Unnecessary Delay in WINS Query"
permalink: /kb/222/Q222840/
---

## Q222840: Unnecessary Delay in WINS Query

{% raw %}

	Article: Q222840
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Small Business Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are using WINS for name resolution. When a name is not present on the
	network, it takes several seconds until an error message appears (for example,
	when typing 'ping WRONGNAME') although your WINS servers are working correctly.
	When connecting to network resources, you see the following error message:
	
	  System error 53 has occurred.
	
	  The network path was not found.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Windows NT
	version 4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	When a WINS server gets a query for a name that is not registered in its
	database, it sends back a negative response indicating the name has not been
	found. In this case, the Windows NT client with Service Pack 3 or later sends
	out an additional query to its secondary WINS server for the same name. This
	behavior has been designed for enhanced reliability when a computer has
	registered with WINS but the record is not present on the primary WINS server
	for whatever reason.
	
	However, there is a 1500ms delay for any subsequent queries for the same name.
	This has been added to prevent overloading a single WINS server. In this special
	case, the delay does not need to be observed as the second query is sent to a
	different WINS server.
	
	NOTE: Only when using P-Node as the name resolution method will this delay will
	be obvious. Other node types use broadcast name resolution, causing additional
	timeouts.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbSBServSearch kbSBServ400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
