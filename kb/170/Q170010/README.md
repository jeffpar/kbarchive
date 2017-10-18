---
layout: page
title: "Q170010: XADM: After Upgrade User Can't Administer Exchange"
permalink: kb/170/Q170010/
---

## Q170010: XADM: After Upgrade User Can't Administer Exchange

	Article: Q170010
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading the Microsoft Exchange Server computer from version 4.0 Service
	Pack 4 to version 5.0, the administrator can not use the Microsoft Exchange
	Administrator program to administer Microsoft Exchange Server via Remote Access
	Service (RAS).
	
	CAUSE
	=====
	
	Upgrading to Exchange Server 5.0 causes some problems with the RAS service. For
	more information please see Section 3.3.5 of the Exchange Server CD Readme.wri
	file. This problem may also affect the dynamic RAS connection to other Exchange
	Server computers.
	
	RESOLUTION
	==========
	
	Install Windows NT Server 4.0 Service Pack 3 on the computer running the
	Microsoft Exchange Administrator program and on the computer running Microsoft
	Exchange Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
