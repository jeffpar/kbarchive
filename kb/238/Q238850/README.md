---
layout: page
title: "Q238850: XFOR: Migration Fails with Error Message and Event 6003"
permalink: /kb/238/Q238850/
---

## Q238850: XFOR: Migration Fails with Error Message and Event 6003

	Article: Q238850
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrating a Lotus cc:Mail DB 8 post office with an illegal character
	for a file directory name, you receive the following error message
	
	  Title: Microsoft Exchange Server Migration wizard
	  Contents: Error creating IFF files:
	  <migration_directory><post_office_name>.001. The error is: The
	  system cannot find the path specified.
	
	and event log message:
	
	  EventID: 6003
	  Source: MsExchangeMig
	  Type: error
	  Description: Error creating IFF PRImary and SECondary files in -
	  <migration_directory><post_office_name>.001. Error Code:
	  00000003.
	
	CAUSE
	=====
	
	The Migration wizard creates a directory under the <migration_directory>
	with the name of the post office. If the post office has a character in it that
	would be illegal for a file name, the migration fail immediately fails.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
