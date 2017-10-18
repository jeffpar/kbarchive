---
layout: page
title: "Q198751: SMS: Query Statement Window Displays Maximum of 3,955 Characters"
permalink: kb/198/Q198751/
---

## Q198751: SMS: Query Statement Window Displays Maximum of 3,955 Characters

	Article: Q198751
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbQuery
	Last Modified: 07-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server version 2.0 the Query Statement Properties window
	will truncate text that exceeds 3,955 characters even though queries are
	designed to handle up to 4,096 characters.
	
	You can see an example of this behavior by using the following steps:
	
	1. Start Systems Management Server Administrator Console and create a new query
	  or go to the properties of a current query.
	
	2. Click the "Edit Query Statement" button.
	
	3. Click the "Show Query Language" button.
	
	Note that you can view only 3,955 characters in this window. Queries that contain
	more than 3,955 characters are truncated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms queries query
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbQuery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
