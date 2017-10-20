---
layout: page
title: "Q274160: FIX: Four-Part Inserts to DB2 Through LinkedServer Fail"
permalink: /kb/274/Q274160/
---

## Q274160: FIX: Four-Part Inserts to DB2 Through LinkedServer Fail

{% raw %}

	Article: Q274160
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for DB2, versions 4.0 SP2, 4.0 SP3 
	- Microsoft ODBC Driver for DB2, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a LinkedServer is configured by using SQL Server to DB2 (OS/390 version 5.1)
	with the Microsoft OLE DB Provider for DB2 (DB2OLEDB) or the Microsoft ODBC
	Driver for DB2 (MSDB2OLE), and an INSERT statement is issued by using the
	four-part syntax similar to the following
	
	  INSERT INTO <LinkedServer Name>.<Catalog>.<Owner>.<Table
	  name> VALUES (...)
	
	the following error message may be reported:
	
	  [OLE/DB provider returned message: A SQL error has occurred. Please consult
	  the documentation for your specific DB2 version for a description of the
	  associated Native Error and SQL State. SQLSTATE: 24501, SQLCODE: -501]
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	REFERENCES
	==========
	
	SQL Server books online.
	
	Additional query words: Mainframe OS/390 MVS DQP DB2/MVS
	
	======================================================================
	Keywords          : kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbODBCSearch kbOLEDBSearch kbODBCDB2400SP2 kbODBCDB2400SP3 kbOLEDBProvDB2400SP2 kbOLEDBProvDB2400SP3 kbOLEDBProvSearch
	Version           : :4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
