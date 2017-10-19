---
layout: page
title: "Q289110: SMS: SQL Replication of the SMS Database Is Not Supported"
permalink: /kb/289/Q289110/
---

## Q289110: SMS: SQL Replication of the SMS Database Is Not Supported

	Article: Q289110
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Systems Management Server (SMS), on a computer that is running
	Microsoft SQL Server, you can perform the replication of user databases by using
	the SQL Replication feature. However, the implementation of SQL Replication that
	is using the SMS Database is not supported by Microsoft Product Support
	Services.
	
	MORE INFORMATION
	================
	
	Some types of SQL Replication alter the SMS Database to such a degree that
	normal operations cause errors. For example, some forms of SQL Replication
	insert a time stamp column in each table that is to be replicated. The new
	column includes the constraint that the column may not contain a NULL value.
	Because SMS does not include this column in its update procedures when it
	inserts rows into tables, SMS attempts to insert a NULL value in this column,
	which produces an error and which stops the rows from being inserted.
	
	You can view these errors in the SMS component logs when Discovery records,
	Status Messages, Inventory records and other updates to the database occur.
	Consequently, further updates to these components are not successful.
	
	In addition, you may be unable to apply SMS service packs because of the database
	modifications.
	
	To recover from this problem, disable replication of the SMS Database, and
	restore the database from a backup copy that does not contain the additional
	column. You may want to reinstall the site in some instances.
	
	Additional query words: prodsms replication database
	
	======================================================================
	Keywords          : kbDatabase kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
