---
layout: page
title: "Q180853: PRB: Stored Procedure Fails if Rights Are Revoked and Regranted"
permalink: /kb/180/Q180853/
---

## Q180853: PRB: Stored Procedure Fails if Rights Are Revoked and Regranted

	Article: Q180853
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,2.1,2.5,2.6,Build 2.573.4403,Build 2.73.7283.01,Build 2.73.7283.03
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC260
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7283.01, Build 2.73.7283.03 
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.4403 
	- Microsoft Data Access Components versions 2.0, 2.1, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Oracle driver returns the following error message when user rights
	are granted and then revoked on a table accessed by a stored procedure:
	
	  Return: SQL_ERROR=-1
	  szErrorMsg="[Microsoft][ODBC driver for Oracle]Wrong number of parameters"
	  szErrorMsg="[Microsoft][ODBC driver for Oracle]Syntax error or access
	  violation"
	
	CAUSE
	=====
	
	The call to the Oracle OCI function odessp() fails in this scenario, but is
	needed in order to implement default parameters.
	
	RESOLUTION
	==========
	
	You must recompile your stored procedure after modifying underlying table
	permissions before you run the stored procedure again.
	
	STATUS
	======
	
	This is a problem with the return value from the odessp() Oracle OCI function,
	not with the Microsoft Oracle ODBC driver.
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create table table1.test(c1 varchar(20)).
	
	2. Grant user2 "INSERT" privileges to table1.test.
	
	3. Create or replace procedure user2.sp_intest(p1 in varchar) as
	
	        Begin
	        INSERT INTO user1.test values ( p1);
	        end;
	
	4. Execute user2.sp_intest to make sure the procedure works.
	
	5. Revoke "INSERT" privileges on table1.test to user2.
	
	6. Grant "INSERT" privileges on table1.test to user2.
	
	7. Execute user2.sp_intest(p1).
	
	Additional query words: ADO, ODBC, Oracle, ASP, Stored Procedure, Security
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC260 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC200 kbMDAC210 kbMDAC250 kbMDAC260 kbODBCOracle273728303 kbODBCOracle25734403 kbODBCOracle273728301 kbODBCOracle200Search kbODBCOracle250Search
	Version           : :2.0,2.1,2.5,2.6,Build 2.573.4403,Build 2.73.7283.01,Build 2.73.7283.03
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
