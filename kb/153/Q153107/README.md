---
layout: page
title: "Q153107: Incorrect Configuration of TEMPDB Causes Query Execution Error"
permalink: /kb/153/Q153107/
---

## Q153107: Incorrect Configuration of TEMPDB Causes Query Execution Error

	Article: Q153107
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbsmsAdmin smsadmin smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when you query the Systems Management Server
	database:
	
	  ERROR: Could Not Execute Specified Query
	  Execution Error 0.
	
	If you enable SQL tracing, you will also see the following error logged in the
	Datalodr.log file:
	
	  SQL>>>>> You cannot run SELECT INTO in this database. The DBO
	  would have to run sp_dboption to enable this option.
	
	CAUSE
	=====
	
	This problem may occur because the TEMPDB database option "Select Into/Bulk
	Copy" is not enabled.
	
	RESOLUTION
	==========
	
	Verify or enable this option on the TEMPDB database using SQL Enterprise
	Manager, using the following steps:
	
	1. Using SQL Enterprise Manager, drill down to the TEMPDB database.
	
	2. Right-click on the TEMPDB database and click Edit.
	
	3. Click the Options tab.
	
	4. Click the Select Into/Bulk Copy checkbox.
	
	5. Click OK.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbsmsAdmin smsadmin smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
