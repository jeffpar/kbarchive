---
layout: page
title: "Q247253: PRB: Using Lower Case Table Names Exporting Access 2000 Table"
permalink: kb/247/Q247253/
---

## Q247253: PRB: Using Lower Case Table Names Exporting Access 2000 Table

	Article: Q247253
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,2.6,2.7,Build 2.573.4403,Build 2.573.6526,Build 2.573.7713.2
	Operating System(s): 
	Keyword(s): kbAccess900 kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMD
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.4403, Build 2.573.6526, Build 2.573.7713.2 
	- Microsoft Data Access Components versions 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error message:
	
	  ORA-00942: table or view does not exist
	
	will be seen when trying to access a table which was exported from Access 2000
	using MSORCL32.DLL and the destination table is not specified using upper case
	letters.
	
	CAUSE
	=====
	
	By Default Oracle stores the names of database objects and other schema
	information in upper case in its system catalogs. When an Access 2000 table is
	exported using Msorlc32.dll, the table is created on the Oracle server and the
	table name is stored in exactly the same way as specified during the export
	process. Specifying table names using lower case letters results in problems
	because in this case the table name is stored differently compared to the
	default storage pattern.
	
	
	RESOLUTION
	==========
	
	Specify the name of the destination table using upper case letters when
	exporting a table from an Access 2000 database to an Oracle Server.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This problem is seen because of the way in which Oracle internally stores schema
	information.
	
	Steps to Reproduce Behavior
	---------------------------
	
	- Create a system DSN using Msorcl32.dll version 2.573.4202 which connects
	  successfully to an Oracle 8.0.5 server.
	
	- Create a table in Access 2000 and try to export this table to the Oracle
	  8.0.5 server using the system DSN created in step 1. When asked to specify
	  the destination table name use a combination of lower and upper case letters
	  or just lower case letters.
	
	- Connect using SQL*PLUS or any other oracle client utility and then run the
	  following query "Select object_name from user_objects". It is seen that the
	  table name in the system catalog appears similar to the name specified for
	  the destination table during the export process. All the other object names
	  appear in upper case.
	
	- Try importing the table from Access 2000 using the system DSN created in step
	  1.
	
	- Errors are seen indicating that such a table doesn't exist in the schema.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAccess900 kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbMDAC260 kbODBCOracle25734403 kbODBCOracle25736526 kbMDAC270 kbODBCOracle257377132 kbODBCOracle250Search
	Version           : :2.5,2.6,2.7,Build 2.573.4403,Build 2.573.6526,Build 2.573.7713.2
	Issue type        : kbprb
	
	=============================================================================
	
