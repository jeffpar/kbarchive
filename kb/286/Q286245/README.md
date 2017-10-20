---
layout: page
title: "Q286245: PRB: Error Updating Records w/DB2OLEDB &amp; Server-Side ADO Cursor"
permalink: /kb/286/Q286245/
---

## Q286245: PRB: Error Updating Records w/DB2OLEDB &amp; Server-Side ADO Cursor

{% raw %}

	Article: Q286245
	Product(s): Microsoft SNA Server
	Version(s): 2.5,2.6,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kb3rdparty kbDriver kbODBC kbOLEDB kbProvider kbGrpDSVCDB kbDSupport kbsna400sp3 kbDB2
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for DB2, version 4.0 SP3 
	- Microsoft Data Access Components versions 2.5, 2.6 
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an ActiveX Data Objects (ADO) server-side cursor with the Microsoft
	OLE DB Provider for DB2 (DB2OLEDB) that comes with Host Integration Server or
	with SNA Server 4.0 SP3 or SP4, the following error may occur when you try to
	update a recordset:
	
	  "Multiple-step OLE DB operation generated errors. Check each OLE DB status
	  value, if available. No work was done."
	
	CAUSE
	=====
	
	You have not included the FOR UPDATE option in your SQL statement. For example,
	you may have opened the ADO Recordset with a SELECT statement like the
	following:
	
	  SELECT * FROM SCHEMANAME.TABLENAME
	
	RESOLUTION
	==========
	
	To allow updates to an ADO Recordset with the DB2OLEDB provider and a
	server-side cursor, you must use the FOR UPDATE option; for example:
	
	  SELECT * FROM SCHEMANAME.TABLENAME FOR UPDATE
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	- Starting with SNA Server 4.0 SP3, DB2OLEDB supports updateable Recordset
	  objects either through an ADO client-side cursor or through a server-side
	  cursor. If you are using a client-side cursor, you do not need to use the FOR
	  UPDATE clause in the SELECT statement. However, if you are using a
	  server-side cursor, this clause is required.
	
	- If you use Microsoft OLE DB Provider for ODBC Drivers (MSDASQL) and the
	  Microsoft ODBC Driver for DB2, you do not need to use the FOR UPDATE clause
	  in the SELECT statement.
	
	- The FOR UPDATE clause is only required when you are directly using the
	  DB2OLEDB provider with a server-side ADO cursor and you are trying to update
	  a record.
	
	- FOR UPDATE is not required if you are trying to insert a new record.
	
	- When connecting to DB2 for MVS V4R1, V5R1, or V6R1 and DB2 for OS/400 V3R2,
	  there are further requirements to indicate the columns that you intend to
	  update. For example, to update the COL1_NAME and COL2_NAME columns in the
	  SCHEMANAME.TABLENAME table, the following SQL syntax must be used:
	
	  SELECT * FROM SCHEMANAME.TABLENAME FOR UPDATE OF COL1_NAME, COL2_NAME
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the DRDA_VB ADO sample that comes with the SNA/Host Integration Server
	  SDK. By default, this sample uses a server-side cursor.
	
	2. Run the sample and connect to your DB2.
	
	3. Open a Recordset with a SELECT statement that resembles the following:
	
	  SELECT * FROM SCHEMANAME.TABLENAME
	
	4. Click the Edit button and change some values.
	
	5. Click the Update button. You will see the error listed in the "Symptoms"
	  section of this article.
	
	REFERENCES
	==========
	
	For additional information on DB2OLEDB and cursors, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q269597 PRB: Limitations of ADO Client Cursor and Data-Bound Controls with
	  DB2OLEDB
	
	  Q271131 Use the DRDA_VB Sample for DB2OLEDB
	
	  Q218590 INF: Configuring Data Sources for the Microsoft OLE DB Provider for
	  DB2
	
	  Q216810 Creating Packages for Use with ODBC Driver for DB2 and OLE DB
	  Provider for DB2
	
	  Q269626 INFO: Permissions Needed to Create Packages Using DB2OLEDB on DB2 and
	  DB2/400
	
	Additional query words: adUseClient adUseServer db_e_errorsoccurred
	
	======================================================================
	Keywords          : kb3rdparty kbDriver kbODBC kbOLEDB kbProvider kbGrpDSVCDB kbDSupport kbsna400sp3 kbDB2 kbhis2000 kbsna400sp4 kbATM 
	Technology        : kbAudDeveloper kbOLEDBSearch kbSNAServSearch kbMDACSearch kbHostIntegServ2000 kbMDAC250 kbMDAC260 kbOLEDBProvDB2400SP3 kbSNAServ400SP3 kbSNAServ400SP4 kbOLEDBProvSearch
	Version           : :2.5,2.6,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
