---
layout: page
title: "Q121384: Eight or More Clauses Causes Query Execution Error"
permalink: /kb/121/Q121384/
---

## Q121384: Eight or More Clauses Causes Query Execution Error

{% raw %}

	Article: Q121384
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Systems Management Server version 1.0, when you attempt to run a query
	consisting of eight or more clauses, the following error message appears in the
	Query Results dialog box:
	
	  Query Execution Error
	
	In Systems Management Server version 1.2, the following error message may
	appear:
	
	  The specified query is too complex. This query exceeds SQL Server's 8 table
	  limit. You might be to simplify this query by removing AND clauses.
	
	CAUSE
	=====
	
	This problem occurs because of the 16-table limit from SQL Server. Querying
	eight or more clauses calls eight references to the particular table as well as
	eight instances of the machine data table, thus reaching the 16- table limit.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.0.
	
	This problem was corrected in Systems Management Server version 1.1.
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2.
	
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS120
	Version           : winnt:1.0,1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
