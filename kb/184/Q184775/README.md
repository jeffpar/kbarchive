---
layout: page
title: "Q184775: FIX: Oracle ODBC Driver Creates Temporary Files on Root Drive"
permalink: /kb/184/Q184775/
---

## Q184775: FIX: Oracle ODBC Driver Creates Temporary Files on Root Drive

{% raw %}

	Article: Q184775
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.0,1.5,Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03
	Operating System(s): 
	Keyword(s): kbDriver kbMDAC kbODBC kbOracle kbODBC200bug kbODBC250fix kbGrpDSMDAC
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Oracle (Build 2.06325), version 1.0 
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.01, Build 2.73.7283.03 
	- Microsoft Data Access Components version 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Oracle ODBC driver (Msorcl32.dll) provided with the
	Microsoft Data Access Components (MDAC) 1.5x and more than 64K of data is
	returned to the client computer in a scrollable or keyset driven recordset,
	temporary files may be created in the root of the primary drive.
	
	This causes problems on secured computers where the users are not permitted to
	write to the root of the primary drive.
	
	RESOLUTION
	==========
	
	There are currently no configuration options available to change the location of
	these temporary files. However, below are some workarounds that can help
	alleviate this problem.
	
	- Change the application to use the ODBC Cursor Library. This also creates
	  temporary files, but they will be located in the default working directory of
	  the application.
	
	- Use a forward-only cursor that will not buffer records.
	
	- Return small recordsets that will not exceed the driver's 64K buffer.
	
	- Grant sufficient permissions to the root of the primary drive to allow the
	  creation of temporary files.
	
	The latest version of the Microsoft Oracle ODBC driver fixes this problem by
	creating the temporary files in the subdirectory of the application.
	
	STATUS
	======
	
	This bug has been fixed in the 2.573.2927 version of the Microsoft Oracle ODBC
	driver available in Visual Studio 6.0 and Microsoft Data Access Components
	version 2.0 and later. The MDAC files can be downloaded from the following Web
	site:
	
	  http://www.microsoft.com/data/
	
	MORE INFORMATION
	================
	
	When Microsoft's Oracle ODBC driver exceeds its internal storage buffer size of
	64K, a temporary file is created in the root of the primary drive to hold the
	cached records. If the user does not have sufficient permissions to create files
	in the root of the primary drive, a General Error is returned to the client.
	
	These file names typically begin with the letter "t" followed by a number and
	another letter, such as "t6a", "t5b.3" and "t4i.2".
	
	The following error information may be returned to the client during a Fetch
	operation:
	
	  SqlState S1000, ErrorMsg = "[Microsoft][ODBC driver for Oracle] General
	  error"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDriver kbMDAC kbODBC kbOracle kbODBC200bug kbODBC250fix kbGrpDSMDAC 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC150 kbODBCOracle206325 kbODBCOracle2737269 kbODBCOracle273728303 kbODBCOracle273728301 kbODBCOracle100Search kbODBCOracle200Search
	Version           : :1.0,1.5,Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
