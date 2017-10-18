---
layout: page
title: "Q239949: PRB: 16-Bit Apps May Use 32-Bit DSNs if Duplicate DSNs Exist"
permalink: kb/239/Q239949/
---

## Q239949: PRB: 16-Bit Apps May Use 32-Bit DSNs if Duplicate DSNs Exist

	Article: Q239949
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,3.0,3.5
	Operating System(s): 
	Keyword(s): kbODBC kbODBC300 kbODBC350 kbODBC200 kbGrpDSVCDB kbGrpDSMDAC kbDSupport
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 2.0, 3.0, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	16-bit applications may use the 32-bit ODBC data source name (DSN) even though
	use of the 16-bit ODBC is intended. The symptoms may vary, but unpredictable
	results can occur like using the unintended driver or the DSN.
	
	CAUSE
	=====
	
	This behavior occurs because the 16-bit Driver Manager uses the Odbc.ini file
	for DSNs and the order in which the DSNs are present in the .ini file may
	determine the one that is actually used. This only occurs if duplicate DSNs
	exist in both the 16-bit and 32-bit environments. This will only impact 16-bit
	applications, since the 32-bit ODBC does not use the 16-bit Odbc.ini file.
	
	RESOLUTION
	==========
	
	Make sure that the names in the 16-bit ODBC environment and the 32-bit ODBC
	environment are unique. Rename any duplicate DSNs and modify your applications
	to use the updated names.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbODBC300 kbODBC350 kbODBC200 kbGrpDSVCDB kbGrpDSMDAC kbDSupport 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC350 kbODBC300 kbODBC200
	Version           : :2.0,3.0,3.5
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
