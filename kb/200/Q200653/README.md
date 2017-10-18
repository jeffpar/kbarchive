---
layout: page
title: "Q200653: SMS: Using Conv20.exe to Check Database Integrity"
permalink: kb/200/Q200653/
---

## Q200653: SMS: Using Conv20.exe to Check Database Integrity

	Article: Q200653
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200 kbsmsUtil kbhowto
	Last Modified: 05-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Database integrity is essential to any Systems Management Server site database
	if it is to operate smoothly and efficiently. In Systems Management Server 2.0,
	administrators can use the Conv20.exe utility to check for and repair any SMS
	database integrity issues.
	
	MORE INFORMATION
	================
	
	The Conv20.exe utility is primarily used to convert the SMS database from the
	schema of Systems Management Server 1.2 to that of version 2.0. During this
	conversion, Conv20.exe checks the integrity of the database and makes sure that
	triggers are in place. This utility can also be run on an existing Systems
	Management Server 2.0 database.
	
	When you initiate the Conv20.exe program, a screen requesting the following
	information appears: Server Name, Database, Logon ID, and Password. After typing
	the correct information into these four fields, Conv20.exe will check (and
	restore if necessary) stored procedures, triggers, tables, views, columns, and
	the default collections and queries (that is, everything in the SMS database
	that is installed by Systems Management Server Setup).
	
	To run this utility from a command line, use the following switches.
	
	+--------------------+
	| /S | Server name   | 
	+--------------------+
	| /D | Database name | 
	+--------------------+
	| /U | User name     | 
	+--------------------+
	| /P | Password      | 
	+--------------------+
	
	You can run the Conv20.exe utility on any Systems Management Server 2.0 database
	where corruption is suspected. The utility will find and replace any triggers or
	stored procedures that are missing or corrupted. It will also check for all the
	triggers that maintain relational integrity, and rebuild them if they are not
	there.
	
	Additional query words: smssql prodsms
	
	======================================================================
	Keywords          : kbDatabase kbsms200 kbsmsUtil kbhowto 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
