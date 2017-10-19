---
layout: page
title: "Q225127: No Remote Access Functionality with Same User and Domain Name"
permalink: /kb/225/Q225127/
---

## Q225127: No Remote Access Functionality with Same User and Domain Name

	Article: Q225127
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbCOMM
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a user name in the Remote Access Server Administration tool, you
	may receive the following error message:
	
	  Error: 6 The handle is invalid
	
	If the user attempts to dial in to a Remote Access server, the user may receive
	the following error message:
	
	  Error 649: The account does not have Remote Access permissions
	
	CAUSE
	=====
	
	This behavior can occur if the user name is the same as the domain name. A
	change was made to the Windows NT 4.0 Service Pack 4 version of the Rassapi.dll
	file that prevents a user with the same name as the domain from being validated
	properly.
	
	RESOLUTION
	==========
	
	To work around this problem, do not create users with the same name as the
	domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: RAS username domainname
	
	======================================================================
	Keywords          : kberrmsg kbCOMM 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400xsearch kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400xsearch
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
