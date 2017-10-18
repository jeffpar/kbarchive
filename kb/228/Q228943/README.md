---
layout: page
title: "Q228943: FIX: Degree of Derived Table Err Using Table Name in Select List"
permalink: kb/228/Q228943/
---

## Q228943: FIX: Degree of Derived Table Err Using Table Name in Select List

	Article: Q228943
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,2.1 SP2,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210SP2fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711 
	- Microsoft Data Access Components versions 2.1, 2.1 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to issue a SQLSetPos() (UPDATE a record) on a SELECT statement
	that uses table names in the field/column list, you will receive the following
	error message:
	
	  [Microsoft][ODBC driver for Oracle]Degree of derived table does not match
	  column list.
	
	A simple SELECT statement similar to the following causes the error:
	
	  SELECT customer.customer_ID, customer.name FROM customer
	
	Also, using alias names for the table, as in the following, also causes the
	error:
	
	  SELECT a.name FROM customer a
	
	CAUSE
	=====
	
	This is a bug in the statement parsing routine for the Microsoft Oracle ODBC
	driver.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The QFE is for the MDAC 2.1 GA stack. The English version of this fix should have
	the following file attributes or later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  4/10/99           02.573.4104  138KB   msorcl32.dll
	
	
	
	NOTE: If you are installing this QFE onto a Windows 95 computer, or a computer
	with the original release of Windows 98, please read the information included in
	Migrate.exe, which is included in the download.
	
	WORKAROUND
	----------
	
	To work around this problem, use coded SQL UPDATE statements to send your data to
	the database if your SELECT statement contains table names in the field list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Microsoft ActiveX Data
	Objects versions 2.1 Service Pack 2 and later.
	
	MORE INFORMATION
	================
	
	SQLSetPos() ODBC API is used by several different Microsoft technologies such as
	ADO, RDO, MFC ODBC, and straight ODBC APIs. You may see the above error message
	if you are updating data via these database API or object technologies.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210SP2fix kbMDAC250 kbGrpDSODBC kbATM 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC210SP2 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle250Search
	Version           : :2.1,2.1 SP2,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
