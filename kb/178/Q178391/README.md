---
layout: page
title: "Q178391: PRB: Oracle TNS: Authentication Service Initialization Error"
permalink: kb/178/Q178391/
---

## Q178391: PRB: Oracle TNS: Authentication Service Initialization Error

	Article: Q178391
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,2.1,2.5,2.6,Build 2.573.2927,Build 2.73.7269,Build 2.73.7283.03,Build 2.73.7356
	Operating System(s): 
	Keyword(s): kb3rdparty kbATM kbDatabase kbDriver kbODBC kbOracle kbGrpDSMDAC kbDSupport kbIIS kbGrp
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.03, Build 2.73.7356 
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	- Microsoft Data Access Components versions 2.0, 2.1, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Oracle databases authenticate users that are logged on with SQL*Net
	Authentication services. This service works fine for users logged into Oracle
	through SQLPlus; however, when the logged on user is a service like Internet
	Information Server, the authentication fails with the following error:
	
	  [Microsoft][ODBC driver for Oracle][Oracle]ORA-12641: TNS:authentication
	  service failed to initialize
	
	CAUSE
	=====
	
	This is a known limitation of SQL*Net Authentication.
	
	RESOLUTION
	==========
	
	The problem may be corrected by editing the Sqlnet.ora file. This configuration
	file is usually stored in the Network/Admin subdirectory of the Oracle Home
	directory. The following line needs to be added to this file:
	
	  SQLNET.AUTHENTICATION_SERVICES = (none)
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbATM kbDatabase kbDriver kbODBC kbOracle kbGrpDSMDAC kbDSupport kbIIS kbGrpDSODBC 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC200 kbMDAC210 kbMDAC250 kbMDAC260 kbODBCOracle2737269 kbODBCOracle273728303 kbODBCOracle25732927 kbODBCOracle2737356 kbODBCOracle200Search kbODBCOracle250Search
	Version           : :2.0,2.1,2.5,2.6,Build 2.573.2927,Build 2.73.7269,Build 2.73.7283.03,Build 2.73.7356
	Issue type        : kbprb
	
	=============================================================================
	
