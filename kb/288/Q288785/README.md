---
layout: page
title: "Q288785: INFO: Cursor Type Supported by DB2OLEDB Provider"
permalink: /kb/288/Q288785/
---

## Q288785: INFO: Cursor Type Supported by DB2OLEDB Provider

	Article: Q288785
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbGrpDSVCDB kbDSupport kbGrpDSOLEDB kbhis2000 kbsna400sp4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DB2OLEDB Provider supports only the forward-only cursor type when used with
	an ADO server-side cursor. The DB2OLEDB Provider does not support keyset,
	dynamic, or static cursor types for server-side cursors.
	
	MORE INFORMATION
	================
	
	The Microsoft OLEDB Provider for DB2 that ships with SNA server 4.0 or with Host
	Integration Server supports the forward-only cursor type. When you open a
	recordset using ADO with a server-side cursor (specifying
	CursorLocation=adUseServer), you cannot use the ADO MoveLast or MovePrevious
	functions. You may use the MoveFirst and MoveNext functions.
	
	If you open a client-side cursor with ADO (specifying
	CursorLocation=adUseClient), you will always get a static cursor. In this case,
	because you are using the ADO Client Cursor Engine (CCE), you will be able to
	use MoveLast and MovePrevious, as well as MoveFirst and MoveNext, with a
	Recordset object.
	
	NOTE: To get an updateable recordset with DB2OLEDB provider with a server-side
	cursor, you must specify the FOR UPDATE or FOR UPDATE OF clause with the SELECT
	statement. For additional information, see the following article in the
	Microsoft Knowledge Base:
	
	  Q286245 PRB: Error Updating Records Using DB2OLEDB and Server-Side ADO Cursor
	
	REFERENCES
	==========
	
	For additional information on DB2OLEDB and cursors, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q269597 PRB: Limitations of ADO Client Cursor and Data-Bound Controls with
	  DB2OLEDB
	
	  Q218590 INF: Configuring Data Sources for the Microsoft OLE DB Provider
	
	  Q216810 Creating Packages for ODBC Driver for DB2 and OLE DB Provider
	
	  Q269626 INFO: Permissions Needed to Create Packages Using DB2OLEDB on DB2 and
	  DB2/400
	
	Additional query words: DB2OLEDB cursor
	
	======================================================================
	Keywords          : kbGrpDSVCDB kbDSupport kbGrpDSOLEDB kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
