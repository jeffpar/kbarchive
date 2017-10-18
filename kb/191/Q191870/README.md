---
layout: page
title: "Q191870: INF: Poor Response Time Returning Multiple Mainframe Records"
permalink: kb/191/Q191870/
---

## Q191870: INF: Poor Response Time Returning Multiple Mainframe Records

	Article: Q191870
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for AS/400 and VSAM, version 1.0, included with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a consumer or client program, using ADO, asks for multiple records from an
	IBM OS/390 VSAM file, the response time is very slow and increases with the
	number of records retrieved.
	
	To improve the response time, set the CacheSize property of the ADO recordset to
	a reasonable value greater than one (1), which is the default.
	
	The CacheSize property is described in the ADO online documentation, which Can be
	installed with the Microsoft Data Access Components.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
