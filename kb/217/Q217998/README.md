---
layout: page
title: "Q217998: BackOffice 4.5 Setup May Fail When Upgrading SQL 6.5 to 7.0"
permalink: /kb/217/Q217998/
---

## Q217998: BackOffice 4.5 Setup May Fail When Upgrading SQL 6.5 to 7.0

	Article: Q217998
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from SQL Server 6.5 to SQL Server 7.0, the "Tempdb" database
	must have a minimum of 10 MB free disk space available or the Microsoft
	BackOffice Server Setup program may fail.
	
	RESOLUTION
	==========
	
	To resolve this problem, increase the size of the "Tempdb" database. To do this,
	perform the following steps:
	
	1. From the SQL Server Enterprise Manager, right-click the Tempdb database.
	
	2. Click Edit
	
	3. Follow the on-screen instructions to increase the size of the database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ450 kbSBServ450
	Version           : winnt:4.5,7.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
