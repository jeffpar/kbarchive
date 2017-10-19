---
layout: page
title: "Q174165: XADM: Directory Replication Error 1224 After Replacing Server"
permalink: /kb/174/Q174165/
---

## Q174165: XADM: Directory Replication Error 1224 After Replacing Server

	Article: Q174165
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	After moving a Microsoft Exchange Server bridgehead server or replacing an
	existing Exchange Server in a site, the Exchange Server administrator may notice
	a large number of the following errors in the Windows NT Application log:
	
	  Event ID 1224 MSExchangeDS Replication Fatal replication error (Internal ID
	  3030174). Parameters 6c1e673d9bd6d011b66b08002be5a6b2 22627.
	
	CAUSE
	=====
	
	This error occurs when Exchange Server checks the USN from an incoming
	replication message and determines the number is too high. This is a normal
	occurrence when moving bridgehead servers within a site or replacing servers
	within a site. In these circumstances, this error can be ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words: dra restore repl
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
