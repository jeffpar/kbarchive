---
layout: page
title: "Q164957: FIX: Failure to Load Odbccr32.dll on Alpha Machine"
permalink: /kb/164/Q164957/
---

## Q164957: FIX: Failure to Load Odbccr32.dll on Alpha Machine

{% raw %}

	Article: Q164957
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 2.5, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open and close a database connection many times, the following error
	message may appear:
	
	  Initialization of the dynamic link library
	  d:\winnt32\system32\odbccr32.dll failed. The process is terminating normally
	
	In one case, the error occurred on the 54th time the connection was opened. This
	happens when you use the version 2.50.3321 ODBC components that came with the
	Visual C++ 4.x Alpha products.
	
	You can duplicate the behavior by calling CDatabase::Open() followed by a
	corresponding CDatabase::Close() in a loop.
	
	CAUSE
	=====
	
	The problem appears to be with the ODBC components.
	
	RESOLUTION
	==========
	
	To work around the problem, use the ODBC 3.0 components for Alpha which are
	available on the Internet at the following Web site:
	
	  http://www.microsoft.com/odbc/
	
	STATUS
	======
	
	This problem was corrected in Microsoft ODBC Driver for SQL Server, version 3.0.
	
	Additional query words: kbDatabase kbMFC kbODBC kbSQLServ kbDSupport kbdsd
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:2.5
	Hardware          : ALPHA
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
