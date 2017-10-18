---
layout: page
title: "Q313904: SMS: Duplicate Query Names Possible When You Rename a Query"
permalink: kb/313/Q313904/
---

## Q313904: SMS: Duplicate Query Names Possible When You Rename a Query

	Article: Q313904
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms200 kbsms200bug
	Last Modified: 31-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Systems Management Server (SMS) administrator console, when you edit a
	query that has been previously defined, it is possible to change the query name.
	If you change the query name to match the name of a query that already exists,
	the SMS administrator console accepts the change, and the result is two queries
	with the same name. When you initially build a query, it is not possible to
	choose a name that already exists. This problem occurs only when you edit a
	query and change its name.
	
	WORKAROUND
	==========
	
	To work around this problem, ensure that the name you choose for a query is
	unique.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	There are no known side effects of this problem except that when you select a
	query to use in collection rules, you see two queries with the same name. This
	makes it difficult to determine which query you need to use.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
