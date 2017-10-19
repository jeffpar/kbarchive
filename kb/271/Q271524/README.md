---
layout: page
title: "Q271524: PRB: Oracle Synonyms Associated with Database Links Not Listed"
permalink: /kb/271/Q271524/
---

## Q271524: PRB: Oracle Synonyms Associated with Database Links Not Listed

	Article: Q271524
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,2.1,2.5,2.6,2.7,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.420
	Operating System(s): 
	Keyword(s): kbfile kbMDAC kbODBC kbOLEDB kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbmdac270
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202, Build 2.573.4403, Build 2.573.5303, Build 2.573.6019, Build 2.573.6526, Build 2.573.7326, Build 2.573.7626, Build 2.573.7713.2 
	- Microsoft OLE DB Provider for Oracle, versions 2.0, 2.1, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft OLE DB Provider for Oracle and the Microsoft ODBC driver for
	Oracle do not display Oracle synonyms that are associated with database links
	created for remote database objects.
	
	RESOLUTION
	==========
	
	One possible workaround is to create Oracle Views instead of synonyms for the
	database links.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the schema "scott" on an Oracle database ("Ora1DB", in this example),
	  create a database link to a remote Oracle database ("Ora2DB", in this
	  example):
	
	CREATE DATABASE LINK Ora1DBToOra2DB CONNECT TO demo IDENTIFIED BY demo using 'Ora2DB';
	
	2. Using the database link that you just created, create a synonym for a remote
	  table ("Ora2sales", in this example) on the remote Oracle database "Ora2DB":
	
	CREATE SYNONYM synOra2sales FOR Ora2sales@Ora1DBToOra2DB;
	
	Then, using the database objects created above, you can reproduce the behavior by
	using either the ODBC driver or OLE DB provider as follows.
	
	Microsoft ODBC for Oracle Driver:
	
	1. Start the ODBC Test utility, which is part of the Microsoft Data Access
	  Components (MDAC) SDK.
	
	2. Connect to Oracle server "Ora1DB" as user "scott" using the Microsoft ODBC
	  driver for Oracle.
	
	3. On the Catalog menu, click SQLTables. To minimize the search criteria,
	  specify the schema name "scott" in which this synonym exists.
	
	4. From the Results menu, click Get Data All to display the results.
	
	The synonym "synOra2sales" does not appear in the list of tables/synonyms/views.
	You can see the synonyms associated with local Oracle tables only.
	
	Microsoft OLE DB Provider for Oracle:
	
	1. Start the Rowset Viewer utility, which is part of the MDAC SDK samples.
	
	2. Connect to Oracle server "Ora1DB" as user "scott" using the Microsoft OLE DB
	  Provider for Oracle.
	
	3. On the Session menu, click IDBSchemaRowset, and then click GetRowset. In the
	  IDBSchemaRowset dialog box, click Schemas and then select DBSCHEMA_TABLES. To
	  minimize the search criteria, specify the TABLE_SCHEMA "scott" in which this
	  synonym exists.
	
	The synonym "synOra2sales" does not appear in the list of tables/synonyms/views.
	You can see the synonyms associated with local Oracle tables only.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q239103 Synonyms of DBLinked Tables Do Not Show in Data View Window
	
	You can obtain the ODBC Test and Rowset Viewer utilities from the MDAC SDK, which
	comes with Microsoft Visual Studio, or which can be downloaded from the
	following Microsoft Web site:
	
	  http://www.microsoft.com/data
	
	Additional query words: synonyms oracle database links views DB
	
	======================================================================
	Keywords          : kbfile kbMDAC kbODBC kbOLEDB kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbmdac270 
	Technology        : kbAudDeveloper kbODBCSearch kbOLEDBSearch kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbODBCOracle25734403 kbODBCOracle25736526 kbOLEDBProvOracle200 kbOLEDBProvOracle210 kbOLEDBProvOracle250 kbOLEDBProvOracle260 kbOLEDBProvSearch kbodbcOracle25737626 kbodbcoracle25735303 kbODBCOracle25736019 kbODBCOracle25737326 kbODBCOracle257377132 kbODBCOracle250Search
	Version           : :2.0,2.1,2.5,2.6,2.7,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.573.4403,Build 2.573.5303,Build 2.573.6019,Build 2.573.6526,Build 2.573.7326,Build 2.573.7626,Build 2.573.7713.2
	Issue type        : kbprb
	
	=============================================================================
	
