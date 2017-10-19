---
layout: page
title: "Q304714: &quot;Client Could Not Establish a Connection to the Remote Computer&quot;"
permalink: /kb/304/Q304714/
---

## Q304714: &quot;Client Could Not Establish a Connection to the Remote Computer&quot;

	Article: Q304714
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 28-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a computer that is running the Windows NT Server 4.0 Service Pack 6
	(SP6), Terminal Server Edition client computer, you may receive the following
	error message:
	
	  The client could not establish a connection to the remote computer
	
	After you receive this error message, the client cannot create a session with a
	Terminal Server.
	
	CAUSE
	=====
	
	This problem occurs because the SynAttackProtect registry key is set to 2. For
	additional information about this registry key and value, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q142641 Internet Server Unavailable Because of Malicious SYN Attacks
	
	RESOLUTION
	==========
	
	To work around this problem, set the SynAttackProtect registry key to a value
	that is less than 2 on the Terminal Server. When you do this, clients can
	connect and provide a level of protection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
