---
layout: page
title: "Q244531: FIX:SQL DSN Revert from Standard Security to Integrated Security"
permalink: /kb/244/Q244531/
---

## Q244531: FIX:SQL DSN Revert from Standard Security to Integrated Security

	Article: Q244531
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.7
	Operating System(s): 
	Keyword(s): kbODBC kbGrpDSVCDB kbGrpDSMDAC kbODBC370bug kbMDAC260fix kbMDACNoSweep
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 3.7 
	-------------------------------------------------------------------------------
	
	BUG #: 56502 (SQLBUG_70)
	
	SYMPTOMS
	========
	
	Using ODBC Administrator, If you reopen an existing SQL Server DSN and click
	Finish on the first screen, it may revert the security mode from standard SQL
	security to integrated security. This may cause login failure when you connect
	to SQL Server if the requirements for Windows NT Authentication are not
	satisfied.
	
	RESOLUTION
	==========
	
	The workaround is not to click Finish on the first screen when you edit an
	existing SQL Server DSN. If you go through the other screens during second edit
	of DSN, the problem will not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in MDAC 2.6.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Set up a DSN using SQL Server ODBC driver with standard SQL security.
	
	2. On the last screen , click Finish and make sure the Use Integrated Security
	  attribute is selected as "No".
	
	3. Click OK to save the DSN.
	
	4. Reopen the DSN and click Finish on the first screen, notice the Use
	  Integrated Security attribute has changed to "Yes".
	
	5. Test fails if you are logged on as a non-admin account.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbGrpDSVCDB kbGrpDSMDAC kbODBC370bug kbMDAC260fix kbMDACNoSweep 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ370
	Version           : :3.7
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
