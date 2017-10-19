---
layout: page
title: "Q180211: BUG: Synonyms Do Not Work with Oracle Stored Procedures"
permalink: /kb/180/Q180211/
---

## Q180211: BUG: Synonyms Do Not Work with Oracle Stored Procedures

	Article: Q180211
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,2.5,2.6,2.7,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Bu
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210SP2 kbM
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0 Build 2.73.7269 
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202 
	- Microsoft Data Access Components versions 2.1, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Oracle ODBC Driver versions 2.0 and 2.5 do not support synonyms
	for Oracle stored procedures.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft Oracle ODBC Driver
	versions 2.0 and 2.5. We are researching this bug and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	This only occurs when calling Oracle stored procedures. Synonyms work as expected
	when used with other Oracle database objects such as tables.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Sam Carpenter, Microsoft Corporation
	
	
	Additional query words: oracle stored procedure synonym
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210SP2 kbMDAC260 kbmdac270 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC250 kbMDAC260 kbODBCOracle2737269 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbMDAC270 kbODBCOracle200Search kbODBCOracle250Search
	Version           : :2.1,2.5,2.6,2.7,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.73.7269
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
