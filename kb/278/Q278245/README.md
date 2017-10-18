---
layout: page
title: "Q278245: 4-Part Linked Server Queries via DB2OLEDB May Cause Exception"
permalink: kb/278/Q278245/
---

## Q278245: 4-Part Linked Server Queries via DB2OLEDB May Cause Exception

	Article: Q278245
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for DB2, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a SQL Server Linked Server uses the Microsoft OLE DB Provider for DB2 to
	access DB2 running on a mainframe computer with a large catalog size, the
	four-part query execution may lead to slow performance, or in some cases an
	Access Violation with an error message similar to the following:
	
	  SqlDumpExceptionHandler: Process <process number> generated fatal
	  exception c0000005 EXCEPTION_ACCESS_VIOLATION. SQL Server is terminating this
	  process. Connection Broken
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To workaround this problem, modify the four-part queries to use the Linked
	Server OPENQUERY syntax. For more information on OPENQUERY, please see the SQL
	Server books online.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	SP2 and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words: DB2 MVS OS/390 SNA TCP/IP TCP MSDASQL OPENROWSET Db2oledb sp2 sp3 4-part
	
	======================================================================
	Keywords          : kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvDB2400SP2 kbOLEDBProvDB2400SP3 kbOLEDBProvSearch
	Version           : :4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
