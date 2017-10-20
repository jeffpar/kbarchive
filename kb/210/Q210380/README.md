---
layout: page
title: "Q210380: SMS: Unable to Join Array Columns When Creating Queries"
permalink: /kb/210/Q210380/
---

## Q210380: SMS: Unable to Join Array Columns When Creating Queries

{% raw %}

	Article: Q210380
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsms200bug
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a query, you receive the following error message:
	
	  Out of Virtual Memory.
	
	After you press OK to close this dialog box, you may also receive the following
	error message:
	
	  The thread %lu (0x%x) completely used up its stack and raised an
	  exception_stack_overflow exception.
	
	CAUSE
	=====
	
	The query has a join to an array column.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
