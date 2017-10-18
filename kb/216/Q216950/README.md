---
layout: page
title: "Q216950: How to Enable ODBC Connection Pooling Performance Counters"
permalink: kb/216/Q216950/
---

## Q216950: How to Enable ODBC Connection Pooling Performance Counters

	Article: Q216950
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ODBC Connection Pooling enhances the performance of database connections in
	Active Server Pages (ASP) applications. By default, the performance counters for
	Connection Pooling are disabled. This article describes the counters and how to
	enable them.
	
	MORE INFORMATION
	================
	
	To enable the performance counters, follow these steps:
	
	1. Open Control Panel.
	
	2. Double-click the ODBC icon.
	
	3. Click the Connection Pooling tab.
	
	4. In the PerfMon section, select Enable.
	
	5. Click OK.
	
	In Performance Monitor, the following counters will now be listed under the ODBC
	Connection Pooling object:
	
	- Connections Currently Active: The current number of connections being used by
	  applications.
	
	- Connections Currently Free: The current number of connections available for
	  connection requests.
	
	- Connections Sec/Hard: The number of connections made to data sources per
	  second.
	
	- Connections Sec/Soft: The number of connections from the pool per second.
	
	- Disconnections Sec/Hard: The number of disconnects made to data sources per
	  second.
	
	- Disconnections Sec/Soft: The number of disconnects from the pool per second.
	
	For more information on Active Server Pages and ODBC connection pooling, see the
	following articles in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q169470
	  TITLE: INF: Frequently Asked Questions About ODBC Connection Pooling
	
	  ARTICLE-ID: Q189410
	  TITLE: HOWTO: Enable or Disable Connection Pooling in IIS 4.0
	
	  ARTICLE-ID: Q164221
	  TITLE: INF: How to Enable Connection Pooling in an ODBC Application
	
	  ARTICLE-ID: Q166083
	  TITLE: INF: How to Enable Connection Pooling in an OLE DB Application
	
	  ARTICLE-ID: Q176056
	  TITLE: INFO: ADO/ASP Scalability FAQ
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200
	Version           : winnt:2.0,3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
