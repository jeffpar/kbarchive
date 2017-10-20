---
layout: page
title: "Q235760: SMS:Queries Fail if Alias Specified &amp; Collection Limiting Used"
permalink: /kb/235/Q235760/
---

## Q235760: SMS:Queries Fail if Alias Specified &amp; Collection Limiting Used

{% raw %}

	Article: Q235760
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbMMC kbSecurity kbWBEM kbsms200 kbsms200bug kbCollections kbQuery kbsmsAdmin kbsmsProv
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When executing a query in Systems Management Server 2.0, the query may fail if
	Collection Limiting is being used. The following error may also be reported:
	
	  The SMS Provider reported the following error: SQL Err >> #107 Sev 16:
	  The column 'SMS_R_System' does not match with a table name or alias name used
	  in the query. SQL Err>> #10007 Sev 5: General SQL Server error: Check
	  messages from the SQL Server. 9null0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbMMC kbSecurity kbWBEM kbsms200 kbsms200bug kbCollections kbQuery kbsmsAdmin kbsmsProvider 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
