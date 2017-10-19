---
layout: page
title: "Q180876: XFOR: Err Msg: Invalid Home Server Definition in User List File"
permalink: /kb/180/Q180876/
---

## Q180876: XFOR: Err Msg: Invalid Home Server Definition in User List File

	Article: Q180876
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the migration utility in command line mode against a CSV file,
	using a control file to mandate what characteristics of the users are migrated
	and how, you find that the mail migration utility fails, with the following
	error message in the event log:
	
	  Event id 7032 Invalid Home Server definition in user list file for user
	  "Home-Server"
	
	CAUSE
	=====
	
	This is due to a bug in the Exchange Server 5.5 migration utility that is
	exposed only when you run the migration utility in command line mode. This issue
	does not occur in Exchange Server 4.0 or 5.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Invalid Home-Server
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
