---
layout: page
title: "Q316938: Active Server Pages with ODBC Driver for DB2 Causes Creation of"
permalink: kb/316/Q316938/
---

## Q316938: Active Server Pages with ODBC Driver for DB2 Causes Creation of

	Article: Q316938
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Information Server (IIS) enters a recursive loop and creates
	more than 7,000 threads under the following circumstances:
	
	- A Microsoft Active Server Pages (ASP) program uses ActiveX Data Objects (ADO)
	  and Microsoft ODBC Driver for DB2 to retrieve data.
	
	  -and-
	
	- The ASP page runs in Isolated or Pooled Out-of-Process mode on Microsoft
	  Windows 2000.
	
	  -or-
	
	- The ASP page runs in Out-of-Process mode on Microsoft Windows NT 4.0 Service
	  Pack 6a.
	
	The first ASP request completes and returns a result to the client. However, when
	the Web Application Manager (WAM) cleans up after the request, WAM enters a
	recursive loop that ends only when the system runs out of resources or when the
	CacheCreateThread function stops responding.
	
	CAUSE
	=====
	
	This problem occurs because the ODBC Driver for DB2 incorrectly calls the
	CoInitializeEx function on a newly created thread.
	
	RESOLUTION
	==========
	
	Microsoft recommends that you use the Microsoft OLE DB Provider for DB2 instead
	of ODBC Driver for DB2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	For additional information about ODBC Driver for DB2 and OLE DB Provider for
	DB2, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q282472 IIS May Stop Responding or Terminate When You Use OLE DB Provider for
	  DB2
	
	  Q247375 Inetinfo.exe Ends with MTS Event 4097 Using Microsoft ODBC for DB2
	
	Additional query words: OOP
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
