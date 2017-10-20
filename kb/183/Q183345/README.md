---
layout: page
title: "Q183345: FIX: ORA-00000 Error Message with ASP, MTS, and Connection Pooli"
permalink: /kb/183/Q183345/
---

## Q183345: FIX: ORA-00000 Error Message with ASP, MTS, and Connection Pooli

{% raw %}

	Article: Q183345
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.5,Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03
	Operating System(s): 
	Keyword(s): kbATM kbASP kbDatabase kbDriver kbODBC kbOracle kbGrpDSMDAC kbDSupport kbMDAC250 kbiis4
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.01, Build 2.73.7283.03 
	- ActiveX Data Objects (ADO), version 1.5 
	- Microsoft Data Access Components version 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when an Active Server Page (ASP) is
	executing the OPEN method to an Oracle data source:
	
	  Microsoft OLEDB Provider for ODBC Drivers error '80004005'
	  [Microsoft][ ODBC driver for Oracle ][Oracle ]ORA-00000: normal,
	  successful completion
	
	You may also receive an additional error message:
	
	  [Microsoft][ ODBC driver for Oracle ][Oracle ]ORA-06403 Unable to
	  Allocate memory
	
	CAUSE
	=====
	
	The problem arises due to a combination of situations occurring at the same
	time. First, Oracle uses a System Global Area (SGA) to share data between
	connections. Secondly, when Windows NT authentication is requested by the Active
	Server Pages (.asp) page, different users cannot access the same memory in the
	System Global Area due to the Windows NT security model. Internet Information
	Server (IIS) 4.0, NT LanMan security, Microsoft Oracle Driver 2.73.7283.03,
	connection pooling, and .asp use the following data scenario.
	
	USER 1 requests to connect to Oracle. They have their own user ID for Windows NT
	security. Connection Pooling is turned on. USER 1 then disconnects from Oracle.
	The .asp no longer needs the connection, but because Connection Pooling is
	turned on, the Database Environment Handle (HDBC) remains in memory for 120
	seconds. This also keeps the memory allocated in the SGA on Oracle to USER 1.
	
	USER 2 requests to connect to Oracle. They use the same connection string to
	Oracle, but they have a different Windows NT User ID. The ODBC manager sees that
	they are using the same connection string so it reuses the previous connection
	from USER 1. Oracle now tries to use the same memory that was allocated to USER
	1, but Windows NT security intervenes because USER 2 (different Windows NT ID)
	is attempting to use memory designated by USER 1. Now, the errors mentioned in
	the SYMPTOMS section occur.
	
	RESOLUTION
	==========
	
	Here are the three workarounds to this problem:
	
	- Obtain the new Microsoft Oracle ODBC Driver version 2.5 (Build 2.573.2927).
	
	  -or-
	
	- Turn off connection pooling.
	
	  Connection pooling for Oracle can be disabled by setting the
	  CPTimeout value to 0 for the Microsoft ODBC for Oracle driver.
	  CPTimeout is found in the registry in:
	
	        HKLM\Software\ODBC\ODBCINST.INI\Microsoft ODBC for Oracle
	    
	
	  -or-
	
	- Remove authentication in Internet Information Server (IIS).
	
	
	STATUS
	======
	
	You can resolve this issue by using the new Microsoft Oracle ODBC driver version
	2.5. This driver is available in Visual Studio 6.0, the Data Access Software
	Development Kit (SDK) 2.0, and Microsoft Data Access Components (MDAC) 2.0. The
	Data Access Software Development Kit (SDK) 2.0 and Microsoft Data Access
	Components (MDAC) can be download from the following Web address:
	
	  http://www.microsoft.com/data/
	
	Navigate to the Downloads page and proceed from there.
	
	Additional query words: odbcOracle adoall odbcIIS error 80004005 ORA-06403
	
	======================================================================
	Keywords          : kbATM kbASP kbDatabase kbDriver kbODBC kbOracle kbGrpDSMDAC kbDSupport kbMDAC250 kbiis400 kbMDACNoSweep 
	Technology        : kbAudDeveloper kbADOsearch kbADO150 kbODBCSearch kbMDACSearch kbMDAC150 kbODBCOracle2737269 kbODBCOracle273728303 kbODBCOracle273728301 kbODBCOracle200Search
	Version           : :1.5,Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
