---
layout: page
title: "Q201999: SMS: ANSI SQL-92 Keywords Used as SMS Database Column Names"
permalink: kb/201/Q201999/
---

## Q201999: SMS: ANSI SQL-92 Keywords Used as SMS Database Column Names

	Article: Q201999
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0,6.0,6.5
	Operating System(s): 
	Keyword(s): kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server, some ANSI SQL-92 keywords are also column names in
	the SMS database. This was first discovered when using SQL Server version 6.0 as
	the database for Systems Management Server 1.2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 and 2.0.
	
	MORE INFORMATION
	================
	
	The following are some of the ANSI keywords that are also column names in the
	SMS database:
	
	  ACTION
	  EXPIREDATE
	  SIZE
	  DATE
	  TIME
	  TIMESTAMP
	  VALUE
	
	The Chkup65.exe utility still reports reserved words for column names; among them
	are DOMAIN, ACTION, TIME, and SIZE. However, none of these are on the Microsoft
	SQL Server 7.0 current list of reserved words, and there is no corresponding
	upgrade-checking program for SQL Server 7.0 that reports any others. Upgrade and
	installation has not reported any keyword conflicts with Systems Management
	Server 2.0 running on SQL Server 7.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0,6.0,6.5
	Issue type        : kbbug
	
	=============================================================================
	
