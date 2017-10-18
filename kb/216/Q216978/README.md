---
layout: page
title: "Q216978: BUG: &quot;Invalid number&quot; When Inserting Decimals into UNIX Oracle"
permalink: kb/216/Q216978/
---

## Q216978: BUG: &quot;Invalid number&quot; When Inserting Decimals into UNIX Oracle

	Article: Q216978
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,2.1,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle kbOSUNIX kbODBC250bug kbODBC351qfe
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711 
	- Microsoft Data Access Components versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using parameter binding in the Microsoft Oracle ODBC driver to insert
	decimal values into an Oracle server installed on UNIX, the following error is
	returned:
	
	  [Microsoft][ODBC driver for Oracle][Oracle]ORA-01722: invalid number
	
	This error does not occur when inserting the same values into an Oracle server
	installed on Windows NT.
	
	CAUSE
	=====
	
	During connection, the Oracle driver determines the character to use as a
	decimal separator by issuing the following statement:
	
	    SELECT 99/100 FROM DUAL
	
	which should return ".99", and the first character is used as the decimal
	separator.
	
	On UNIX platforms, " .9" is returned instead of the expected ".99", which causes
	a decimal such as "123.45" to be passed as "123 45". This generates the "Invalid
	number" error.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	         Date      Time   Version      Size   File name   Platform
	         ---------------------------------------------------------
	MDAC 2.0  02/02/99         02.573.3802  136KB  Msorcl32.dll        
	MDAC 2.1  02/01/99         02.573.3801  139KB  Msorcl32.dll
	
	This hotfix is engineered to work with Microsoft Data Access Components (MDAC)
	builds 2.0 and 2.1. The hotfix contains the MDAC 2.0 MSORACL32.DLL and MDAC 2.1
	MSORACL32.DLL. See installation instructions below.
	
	Installation Instructions
	-------------------------
	
	1. Place the self-extracting zip file (OraUnix.exe) into a temporary directory.
	
	2. Unzip the file with the "-d" option, to preserve directory information. For
	  example: "OraUnix.exe -d". Two subfolders - Mdac20 and Mdac21 - will be
	  created.
	
	3. Locate msorcl32.dll in the system folder.
	
	4. Verify that no applications or services are using the driver.
	
	5. Copy the new driver from the folder it was extracted to (choosing the
	  appropriate version directory) into the system folder.
	
	6. Register the new driver using the following:
	
	  Regsvr32.exe msorcl32.dll
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	Do not use parameter binding in your application; instead, just insert the
	values hard-coded into an INSERT statement. Install MDAC 2.1 SP2 or higher as
	the Oracle ODBC driver is updated with the fix in those versions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: decimal oracle unix invalid number parameter ORA-01722
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle kbOSUNIX kbODBC250bug kbODBC351qfe 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC200 kbMDAC210 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle250Search
	Version           : :2.0,2.1,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
