---
layout: page
title: "Q277894: Consecutive Inserts to DB2 from SQL Server by way of Linked Serv"
permalink: /kb/277/Q277894/
---

## Q277894: Consecutive Inserts to DB2 from SQL Server by way of Linked Serv

{% raw %}

	Article: Q277894
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
	
	When a Linked Server to DB2 is configured by using the Microsoft OLE DB Provider
	for DB2 from Microsoft SQL Server, and INSERT statements are issued in a loop,
	the following error message may be reported:
	
	  Could not open table '<DB2 table name>' from OLE DB provider
	  'DB2OLEDB'. Unknown provider error.
	
	  -or-
	
	  OLE DB provider 'DB2OLEDB' reported an error. The provider did not give any
	  information about the error.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 2 (SP2) and 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, configure a Linked Server to DB2 from SQL Server by
	using DB2OLEDB, and then run the following script from Query Analyzer:
	
	  DECLARE @CTR INT
	  SELECT @CTR = 10
	  WHILE (SELECT @CTR) < 100
	  BEGIN
	  INSERT INTO LinkedServerName.CatalogName.SchemaName.TableName (COL1) VALUES
	  (@CTR)
	  PRINT @CTR
	  SELECT @CTR = @CTR + 1
	  END
	
	Additional query words: DB2/400 AS/400 MVS OS/390 MSDB2OLE ODBC ADO BULK OPERATION sp2 sp3
	
	======================================================================
	Keywords          : kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvDB2400SP2 kbOLEDBProvDB2400SP3 kbOLEDBProvSearch
	Version           : :4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
