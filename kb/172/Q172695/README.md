---
layout: page
title: "Q172695: FIX: Visual FoxPro ODBC Driver Creates an Invalid File DSN"
permalink: /kb/172/Q172695/
---

## Q172695: FIX: Visual FoxPro ODBC Driver Creates an Invalid File DSN

{% raw %}

	Article: Q172695
	Product(s): Microsoft FoxPro
	Version(s): 1.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbODBC kbvfp kbVisID
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	- Microsoft Visual InterDev, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to configure a Visual FoxPro file DSN a message similar to the
	following appears:
	
	  General error: Invalid file dsn 'Windows\ODBC\Data Sources\MyData.dsn'
	
	When trying to make a connection to a Visual FoxPro database with a file DSN the
	following message appears:
	
	  [Microsoft][ODBC Driver Manager]Data source name not found and no default
	  driver specified
	
	CAUSE
	=====
	
	The Visual FoxPro ODBC driver incorrectly adds the entry "DSN=" to the file DSN.
	
	RESOLUTION
	==========
	
	To correct this problem, remove the "DSN=" line from the .dsn file. This file,
	by default, is located in the "\Windows\ODBC\Data Sources" directory.
	
	Be aware that every time this DSN entry is configured using the ODBC Data Source
	Administrator, the .dsn file is rewritten along with the "DSN=" line. This means
	that any time you modify this DSN entry using the ODBC Data Source
	Administrator, you must also remove the "DSN=" line.
	
	Some applications save the DSN information (including the "DSN=") when an ODBC
	connection is made. Even after the original file DSN is corrected, problems
	still occur when these connections are used. To correct this problem, delete and
	re-create the connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 5.0a.
	
	MORE INFORMATION
	================
	
	This problem is known to occur in the Visual FoxPro ODBC Driver versions
	5.00.00402 and 5.00.00412.
	
	Additional query words: 80004005
	
	======================================================================
	Keywords          : kberrmsg kbODBC kbvfp kbVisID 
	Technology        : kbVisIDsearch kbVFPsearch kbAudDeveloper kbVFP500 kbVisID100
	Version           : :1.0,5.0
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
