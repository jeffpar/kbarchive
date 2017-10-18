---
layout: page
title: "Q199329: SMS: &quot;Machine Merge Failed&quot;  when Attempting to Merge History"
permalink: kb/199/Q199329/
---

## Q199329: SMS: &quot;Machine Merge Failed&quot;  when Attempting to Merge History

	Article: Q199329
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbsms120 kbsmsUtil
	Last Modified: 03-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to Merge Machine History for selected computers using Systems
	Management Server Database Manager, you may receive the following error after
	executing Display Duplicate Personal Computers from the machine's menu:
	
	  Machine Merge Failed
	
	CAUSE
	=====
	
	This may occur when the Systems Management Server database is very low or out of
	space.
	
	WORKAROUND
	==========
	
	Expand the size of the database to increase the amount of space available.
	
	MORE INFORMATION
	================
	
	Information on how to expand a database can be found in the SQL Server Books
	Online in the section titled "Expanding or Shrinking Databases". This can be
	found in Chapter 6: Managing Databases, under Part 3: Devices, Databases and
	Drives.
	
	Additional query words: prodsms kbsql
	
	======================================================================
	Keywords          : kbDatabase kbsms120 kbsmsUtil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
