---
layout: page
title: "Q230640: SMS: Setup Sets &quot;Restrict filegrowth&quot; on SQL 7.0 Databases"
permalink: /kb/230/Q230640/
---

## Q230640: SMS: Setup Sets &quot;Restrict filegrowth&quot; on SQL 7.0 Databases

{% raw %}

	Article: Q230640
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,7.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SQL 7.0 automatically grows a file when more space is needed. SMS 2.0 Setup
	creates the SMS Database with this grow feature turned on, but it also sets a
	restriction on the size of the file. This restriction can cause problems when
	the database has grown to this size and cannot grow more. If the administrator
	is not aware of this setting then this could be perceived as some other problem
	and take time to diagnose and correct.
	
	CAUSE
	=====
	
	SMS 2.0 Setup creates the SMS Database with File Properties:
	
	- Automatically grow file
	
	- Restrict filegrowth (MB)
	
	"Automatically grow file" tells SQL to increase the database size as needed;
	however, "Restrict filegrowth" keeps the file from growing larger then the size
	entered.
	
	This is a problem if the SQL Administrator is not aware that this limitation has
	been set. The assumption is the database will grow as needed.
	
	WORKAROUND
	==========
	
	There are two options for correcting this problem:
	
	- Increase the maximum file size.
	
	-or-
	
	- Remove the file size restriction.
	
	The maximum file size setting can be set in SQL Server Enterprise Manager using
	the following steps:
	
	1. Select the SQL Server containing your SMS Database.
	
	2. Open the Database folder.
	
	3. Click the SMS Database.
	
	4. On the General tab, click database properties.
	
	5. At the bottom of the Properties box, locate the Maximum file size.
	
	6. Remove the restriction by selecting Unrestricted filegrowth.
	
	7. Increase the Maximum file size by selecting Restrict filegrowth (MB), and
	  entering the maximum size to allow.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	2.0. This problem has been corrected in the latest U.S. service pack for Systems
	Management Server version 2.0. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms file growth
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSQLServSearch kbSMSSearch kbAudDeveloper kbSQLServ700 kbFunImagination200
	Version           : winnt:2.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
