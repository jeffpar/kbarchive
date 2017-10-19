---
layout: page
title: "Q127857: Required Number of SQL Connections Needed for SMS"
permalink: /kb/127/Q127857/
---

## Q127857: Required Number of SQL Connections Needed for SMS

	Article: Q127857
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbdocerr kbsmsAdmin smsadmin smsdocerr
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Systems Management Server Administrator's Guide incorrectly
	specifies the recommended number of SQL server connections needed for setting up
	SMS on page 55:
	
	  Make sure that the SQL Server has a maximum user connection
	  setting that has at least 5 connections for use by SMS. Ten
	  connections are recommended.
	
	If you attempt to setup SMS version 1.0 with less than 20 connections, then the
	following error appears during Setup:
	
	  Not enough SQL connections are available for correct execution of SMS. At
	  least 20 connections are recommended.
	
	If you choose OK, the following error appears:
	
	  Error: Number of requested connections must be >= 20.
	
	RESOLUTION
	==========
	
	Increase the number of connections available to SQL to 20 or greater.
	
	NOTE: Systems Management Server version 1.0 and 1.1 require SQL Server, not SQL
	Workstation. SQL Server allows more than 20 connections, SQL Workstation allows
	a maximum of 15.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbdocerr kbsmsAdmin smsadmin smsdocerr 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
