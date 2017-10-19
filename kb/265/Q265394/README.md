---
layout: page
title: "Q265394: XFOR:Windows NNTP Service Does Not Support DefaultLogonDomain"
permalink: /kb/265/Q265394/
---

## Q265394: XFOR:Windows NNTP Service Does Not Support DefaultLogonDomain

	Article: Q265394
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Network News Transfer Protocol (NNTP) service that is shipped with the
	Microsoft Windows NT 4.0 Option Pack does not support DefaultLogonDomain; the
	File Transfer Protocol (FTP) service and the Simple Mail Transfer Protocol
	(SMTP) service support this feature.
	
	MORE INFORMATION
	================
	
	If you use the NNTP service, you must log on to the NNTP service by using the
	following format: <Windows NT domain>/<Windows NT account name>
	
	There are no plans to change this behavior at this time.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
