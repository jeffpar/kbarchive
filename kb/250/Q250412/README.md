---
layout: page
title: "Q250412: SMS: Cannot Select Query Result Format"
permalink: /kb/250/Q250412/
---

## Q250412: SMS: Cannot Select Query Result Format

{% raw %}

	Article: Q250412
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120bug
	Last Modified: 05-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a non-alphanumeric character (such as @ or !) as the first character
	in a query name, you cannot select a query result format when you run the query.
	For example, if a query is named "@Internet Explorer 4.0 SP1," the Query Result
	Format box is empty when you run the query.
	
	WORKAROUND
	==========
	
	This problem affects only the first query in the list that uses "@" (or any
	other special character) as the first character in the query name. To be able to
	select query result formats for queries whose name starts with a special
	(non-alphanumeric) character, create a "dummy" query with "!" as the query name.
	Because queries are displayed alphabetically, the "!" query is listed first and
	still exhibits this problem. However, all other queries whose name starts with a
	special characters work as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
