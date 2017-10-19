---
layout: page
title: "Q234367: XADM: Cannot Perform LDAP Search on Windows NT 4.0 SP3"
permalink: /kb/234/Q234367/
---

## Q234367: XADM: Cannot Perform LDAP Search on Windows NT 4.0 SP3

	Article: Q234367
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0 SP3,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows NT 4.0 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you connect to an Exchange Server computer using the Lightweight Directory
	Access Protocol (LDAP) and Basic (Clear Text) authentication, and then bind to
	the server, you may be unable to perform an LDAP search on the directory.
	
	CAUSE
	=====
	
	This problem occurs when Windows NT Server 4.0 Service Pack 3 is running on the
	server and the Exchange Server service account is not a member of the
	Administrators group on the computer from which you are running the LDAP search.
	
	WORKAROUND
	==========
	
	To work around this problem, add the service account to the Administrators group
	on the computer from which you are running the search.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbWinNTsearch kbWinNTW400search kbWinNTW400sp3 kbWinNTSsearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:4.0 SP3,5.5
	Issue type        : kbprb
	
	=============================================================================
	
