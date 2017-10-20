---
layout: page
title: "Q226914: SMS: Status Message Query Fails Due to Insufficient Tempdb Space"
permalink: /kb/226/Q226914/
---

## Q226914: SMS: Status Message Query Fails Due to Insufficient Tempdb Space

{% raw %}

	Article: Q226914
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
	
	When you run a Status Message Query against the local site, an error occurs. If
	you use the query tool to run the same query, an error appears that indicates
	that the tempdb database is full.
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- For clients that are running Microsoft SQL Server 6.5, you must manually
	  Expand the size of Tempdb.
	
	- For clients that are running SQL Server 7.0, verify that Automatically grow
	  file is enabled in the tempdb File Properties, and that Unrestricted
	  filegrowth is enabled for Maximum File Size.
	
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
