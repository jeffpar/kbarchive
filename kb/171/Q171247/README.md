---
layout: page
title: "Q171247: FIX: Setup Quits When Microsoft ODBC Driver for Oracle Is Used"
permalink: kb/171/Q171247/
---

## Q171247: FIX: Setup Quits When Microsoft ODBC Driver for Oracle Is Used

	Article: Q171247
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Oracle (Build 2.06325), version 1.0 
	- Microsoft Commerce Server 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Commerce Server Setup uses the Microsoft ODBC driver for Oracle version
	2.00.006325 to configure a new datasource, the Setup program quits without any
	error messages.
	
	CAUSE
	=====
	
	The Commerce Server Setup program uses invalid keywords for the Oracle driver in
	the connection string. The driver does not permit any keywords that it does not
	recognize, and closes the Setup program. This is a problem in the ODBC driver
	that will be addressed in a future version.
	
	WORKAROUND
	==========
	
	Configure a new system datasource using the ODBC Administrator in Control Panel
	and then select this datasource during the Commerce Server Setup. Note that the
	problem only occurs if you try to configure a new datasource from within the
	Commerce Server Setup program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of the article. This bug has been corrected in Microsoft's Oracle ODBC
	driver, version 2.73.7269 and higher. You can obtain this driver or new drivers
	in the Microsoft Data Access Components at the following Web address:
	
	  http://www.microsoft.com/data/
	
	Additional query words: Site Enterprise Edition DSN abort aborts terminate terminates exit exits kbOracle kbODBC kbDriver kbDatabase
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbZNotKeyword kbODBCSearch kbCommServSearch kbCommServ200 kbODBCOracle206325 kbODBCOracle100Search
	Version           : :1.0,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
