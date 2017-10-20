---
layout: page
title: "Q290907: FIX: Race Condition on Heap Variable Causes AV in Oracle ODBC"
permalink: /kb/290/Q290907/
---

## Q290907: FIX: Race Condition on Heap Variable Causes AV in Oracle ODBC

{% raw %}

	Article: Q290907
	Product(s): Open Database Connectivity (ODBC)
	Version(s): Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.573.4403,B
	Operating System(s): 
	Keyword(s): kbODBC kbOracle kbODBC360bug kbGrpDSVCDB kbGrpDSMDAC kbMDAC260sp1Fix
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202, Build 2.573.4403, Build 2.573.5303, Build 2.573.6019, Build 2.573.6526 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft ODBC driver for Oracle is being loaded for the first time and
	is still in the initialization routines, two threads attempting to use the
	driver at the same time can encounter a race condition that causes an access
	violation (AV) in the ODBC driver.
	
	This problem can occur in the Microsoft Data Access Components (MDAC) 2.6 version
	of the Oracle ODBC driver (2.573.6526.0) and earlier.
	
	CAUSE
	=====
	
	During initialization, the Microsoft Oracle ODBC driver creates a heap for its
	own internal use. This heap is created during the driver's DLLMain()
	initialization routines, and a handle to the heap is saved in a global
	variable.
	
	Just prior to the creation of the heap, the driver loads the Oracle network
	libraries, which are necessary for communicating with the Oracle server. These
	DLLs can occasionally take a considerable amount of time to load, which delays
	the initialization of the heap variable.
	
	If an additional thread is also starting up at the same time, it may attempt to
	use the heap handle before the other thread has given it a valid address, and an
	AV will occur.
	
	RESOLUTION
	==========
	
	This bug has been fixed in the Oracle ODBC Driver included with MDAC version 2.6
	SP1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Microsoft Data Access Components 2.6 Service Pack 1.
	
	MORE INFORMATION
	================
	
	This fix can be applied to MDAC 2.5 and MDAC 2.6.
	
	
	Additional query words: oracle odbc driver heap av crash dllmain initialization threads race
	
	======================================================================
	Keywords          : kbODBC kbOracle kbODBC360bug kbGrpDSVCDB kbGrpDSMDAC kbMDAC260sp1Fix 
	Technology        : kbAudDeveloper kbODBCSearch kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbODBCOracle25734403 kbODBCOracle25736526 kbodbcoracle25735303 kbODBCOracle25736019 kbODBCOracle250Search
	Version           : :Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.573.4403,Build 2.573.5303,Build 2.573.6019,Build 2.573.6526
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
