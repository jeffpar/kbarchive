---
layout: page
title: "Q202937: SMS: SMS Does Not Support Spaces in SQL Server Database Names"
permalink: /kb/202/Q202937/
---

## Q202937: SMS: SMS Does Not Support Spaces in SQL Server Database Names

{% raw %}

	Article: Q202937
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200 kbsms200bug
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server Setup application does not allow you to type SQL
	Server database names with space characters in them, regardless of the version
	of Microsoft SQL Server that you are using.
	
	CAUSE
	=====
	
	Although SQL Server version 7.0 supports spaces in database names, Systems
	Management Server 2.0 does not support spaces in SQL Server database names.
	
	WORKAROUND
	==========
	
	To work around this problem, use SQL Server database names that do not contain
	spaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Systems Management Server 2.0 can be used with both SQL Server versions 6.5 and
	7.0.
	
	Additional query words: prodsms db
	
	======================================================================
	Keywords          : kbDatabase kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
