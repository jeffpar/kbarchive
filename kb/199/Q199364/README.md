---
layout: page
title: "Q199364: SMS: SQL Server Error 1105 - Tempdb Is Full"
permalink: /kb/199/Q199364/
---

## Q199364: SMS: SQL Server Error 1105 - Tempdb Is Full

	Article: Q199364
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,6.5
	Operating System(s): 
	Keyword(s): kbDatabase kbsms120
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the temporary database (tempdb) becomes full, you may be unable to perform
	queries or any activities in SQL Server. You may also get an SQL Server error
	1105:
	
	  Can't allocate space for object syslogs in database <dbname> because
	  the logsegment is full. If you ran out of space in syslogs, dump the
	  transaction log. Otherwise use ALTER DATABASE or sp_extendsegment to increase
	  the size of the segment.
	
	WORKAROUND
	==========
	
	To work around this problem, you should move tempdb onto a different device so
	that it is no longer on the master database device and then expand its size. To
	do this, perform the following steps:
	
	1. Stop and restart SQL Server. Doing this resets tempdb, which should at least
	  temporarily resolve the problem.
	
	2. See the following article in the Microsoft Knowledge Base for instructions on
	  how to move tempdb to a different device:
	
	  Q187824 INF: How to Move Tempdb to a Different Device"
	
	  Note that the instructions in this article also include the steps for
	  expanding the size of tempdb after moving it to a different device.
	
	3. Stop and restart SQL Server.
	
	MORE INFORMATION
	================
	
	In general, the size of the temporary database (tempdb) should be approximately
	20 percent of the size of your largest SQL Server database.
	
	For additional information about why the transaction log may be filling up,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q110139 INF: Causes of SQL Transaction Log Filling Up
	
	Additional query words: prodsms err message msg smssql
	
	======================================================================
	Keywords          : kbDatabase kbsms120 
	Technology        : kbSQLServSearch kbSMSSearch kbAudDeveloper kbSQLServ650 kbContentX
	Version           : winnt:1.2,6.5
	Issue type        : kbprb
	
	=============================================================================
	
