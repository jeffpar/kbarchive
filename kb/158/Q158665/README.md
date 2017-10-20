---
layout: page
title: "Q158665: FIX: 16-Bit Driver Keyset Cursor Operations with Query Timeout"
permalink: /kb/158/Q158665/
---

## Q158665: FIX: 16-Bit Driver Keyset Cursor Operations with Query Timeout

{% raw %}

	Article: Q158665
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.65
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.65 
	-------------------------------------------------------------------------------
	
	BUG #: 15946 (WINDOWS SQLBUG 2.65.0212)
	
	SYMPTOMS
	========
	
	When you use the client-side SPX Net-Library for Windows (Dbmsspx3.dll), the
	Microsoft SQL Server 16-bit ODBC Driver version 2.65 may perform significantly
	slower in operations involving both keyset-driven cursors and the setting of a
	query timeout. Microsoft has observed a difference up to a factor of six when
	Dbmsspx3.dll is used, versus the other available net- libraries. Note that for
	this problem to occur, both a query timeout must be set and keyset-driven
	cursors must be in use with Dbmsspx3.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft client-side SPX
	Net-Library for Windows (Dbmsspx3.dll) and Open Database Connectivity version
	2.65. This problem has been corrected in U.S. Service Pack 2 for Microsoft SQL
	Server version 6.5. For more information, contact your primary support provider.
	
	Additional query words: kbusage kbinterop kbbug2.65 kbfix6.50.sp2
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:2.65
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
