---
layout: page
title: "Q269597: PRB: Limits of ADO Client Cursor &amp; Data-bound Controls w/DB2OLDB"
permalink: kb/269/Q269597/
---

## Q269597: PRB: Limits of ADO Client Cursor &amp; Data-bound Controls w/DB2OLDB

	Article: Q269597
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbOLEDB kbProvider kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbDB2 kbADO250
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for DB2, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an ActiveX Data Objects (ADO) application uses a client-side cursor with
	the Microsoft OLE DB Provider for DB2 (DB2OLEDB) to retrieve data from DB2 (MVS
	or OS/390), an empty read-only recordset may be returned.
	
	CAUSE
	=====
	
	This problem occurs when the Auto Commit Mode property of the DB2OLEDB
	connection string is set to True, or is unspecified. By default, the Auto Commit
	Mode property is set to True.
	
	RESOLUTION
	==========
	
	To work around this behavior, set Auto Commit Mode to False in the connection
	string, or if a Data Link (.udl) file is used for the connection, change the
	Auto Commit Mode property to False.
	
	MORE INFORMATION
	================
	
	This behavior is observed only with the DB2OLEDB provider that is included with
	SNA 4.0 Service Pack 3 (SP3) and later. (This change was made after the SNA 4.0
	SP2 provider shipped to fix other problems and improve performance.) This
	problem does not affect DB2/400 or other supported platforms.
	
	The OLE DB Provider for DB2 that is included with SNA Server 4.0 SP3 and later
	supports updating capabilities when used with a client cursor engine. To support
	updates (UPDATE, INSERT, and DELETE) using a client cursor engine, the values in
	at least one column in the target table must be unique, and the Auto Commit Mode
	parameter must be set to False when configuring the data source, or when this
	parameter is passed as part of a connection string.
	
	Earlier versions of the OLE DB Provider for DB2 do not support any updating
	capabilities when used with a client cursor engine. In other words, if the
	client cursor engine is enabled using Remote Data Service (RDS) or ADO, the SNA
	4.0 SP2 OLE DB Provider for DB2 cannot be used to update data on the host. The
	ADO recordset is treated as if it were read-only.
	
	Microsoft Visual Studio 6.0 offers a number of ADO data-bound controls, including
	a data grid and the ADO Data Control. When using these ADO data controls, you
	must set the CursorLocation property on the recordset to adUseClient. Also, when
	using these ADO data controls with DB2 for OS/390, you must set the OLE DB
	Provider for DB2 Auto Commit Mode property in the data link or connection string
	to False. When using the client cursor engine with DB2 for OS/390, you must set
	the OLE DB Provider for DB2 Auto Commit Mode property in the data link or
	connection string to False. This is not required when connecting to DB2 for
	OS/400.
	
	REFERENCES
	==========
	
	For additional information on Microsoft OLEDB Provider for DB2 (DB2OLEDB), click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q218590 INF: Configuring Data Sources for the Microsoft OLE DB Provider for
	  DB2
	
	  Q216879 BUG: 'Errors occurred' Results When Converting OS/390 Signed Zoned
	  Decimal Field
	
	Additional query words: Mainframe MF DB2/MVS
	
	======================================================================
	Keywords          : kbOLEDB kbProvider kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbDB2 kbADO250 
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvDB2400SP2 kbOLEDBProvDB2400SP3 kbOLEDBProvSearch
	Version           : WINDOWS:4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
