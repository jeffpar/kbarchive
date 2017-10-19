---
layout: page
title: "Q244554: FIX: Oracle ODBC Driver Appends Trailing Zero to Numeric Columns"
permalink: /kb/244/Q244554/
---

## Q244554: FIX: Oracle ODBC Driver Appends Trailing Zero to Numeric Columns

	Article: Q244554
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,2.5,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.57
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210SP2bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202, Build 2.573.4403, Build 2.573.5303, Build 2.573.6019 
	- Microsoft Data Access Components versions 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft ODBC Driver for Oracle, NUMERIC fields that have been
	defined with a null or odd scale but are bound as a character ODBC datatype
	(such as SQL_C_CHAR) are returned with a trailing zero appended to the decimal
	portion of the number, so that the scale contains an even number of digits.
	
	This can potentially cause problems in applications such as Microsoft Access,
	which does not compare "1.123" and 1.1230" equally.
	
	CAUSE
	=====
	
	Internal to Oracle, NUMERIC fields that have been defined with an odd scale are
	actually stored in Oracle with a trailing zero as the least significant digit.
	Changes in recent builds of the ODBC driver for Oracle permit these trailing
	zeros to be returned to the calling application.
	
	RESOLUTION
	==========
	
	This problem has been resolved with the Microsoft Oracle ODBC driver that ships
	with MDAC 2.6.
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Data Access Components service pack that contains this
	fix.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  8/17/99           2.573.4509  141KB    msorcl32.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in MDAC 2.6.
	
	MORE INFORMATION
	================
	
	
	The hotfix version of the Microsoft Oracle ODBC driver (msorcl32.dll) has been
	modified to include a new connection attribute that will strip trailing zeros
	from NUMERIC fields being returned as SQL_C_CHAR. This connection attribute may
	also be added as an additional parameter to an Oracle connection string.
	
	To configure this new attribute once the hotfix has been installed, use the ODBC
	Administrator to locate an existing datasource that uses the Microsoft ODBC for
	Oracle driver, and double-click on the DSN to bring up the configuration
	screen.
	
	In the Oracle ODBC driver configuration screen, use the Options button to expand
	the dialog box so that extended configuration attributes are displayed. At the
	bottom of the dialog box will be a checkbox titled "Truncate insignificant
	trailing zero when using null or odd scale."
	
	Checking this box will cause a new parameter called "StripTrailingZero" to be
	added to the datasource in the registry. This is a String value, and will be set
	to "1" for TRUE, and "0" for FALSE.
	
	"StripTrailingZero" can also be added directly to a connection string, for
	example:
	
	DSN=OracleServer;UID=scott;PWD=tiger;StripTrailingZero=1;
	
	-or-
	
	Driver=Microsoft ODBC for Oracle;Server=OracleServer;UID=scott;PWD=tiger;StripTrailingZero=1;
	
	Manual Installation
	-------------------
	
	1. Close or stop any applications or services that are using Msorcl32.dll. This
	  may include Internet Information Server (IIS), Microsoft Transaction Server
	  (MTS), and any ODBC, ADO, or OLE DB applications.
	
	2. Download the hotfix version of Msorcl32.dll into a temporary directory.
	
	3. Locate and rename the current version of Msorcl32.dll, which is in the
	  \Winnt\System32 folder for Windows NT computers, and in the \Windows\System
	  folder for Windows 9x computers.
	
	4. Copy the hotfix version of Msorcl32.dll into the same location, and then
	  restart your services and applications.
	
	Steps to Reproduce Behavior
	---------------------------
	
	- Use the ODBC Administrator to configure an Oracle datasource so that the
	  "Truncate insignificant trailing zero when using null or odd scale" checkbox
	  is cleared (not set).
	
	- Copy the following code into a console application (modifying your Oracle
	  server, username and password as necessary), compile and run it.
	
	- Notice that several values have extra zeros appended to them. In particular,
	  all of the odd scale fields have extra zeros, even when this puts the number
	  of decimal digits beyond the defined size. Additionally, the no-scale fields
	  will have zeros appended to create an even number of decimal digits.
	
	- Use the ODBC Administrator to modify the Oracle datasource so that the
	  "Truncate insignificant trailing zero when using null or odd scale" checkbox
	  is checked, and run the code again. Notice that all values appear as they
	  should.
	
	  #include "stdafx.h"
	  #include <windows.h>
	  #include <stdio.h>
	  #include <sql.h>
	  #include <sqlext.h>
	
	  void CreateTable(HSTMT);
	
	  main()
	  {
	
	  	RETCODE rc;
	  	HENV henv;
	  	HDBC hdbc;
	  	HSTMT hstmt;
	
	  //	Variables for SQLConnect
	  	char * dsn = "OracleServer";
	  	char * uid = "scott";
	  	char * pwd = "tiger";
	
	  //	Variables for SQLBindCol
	  	char m_charOddScale[20] = {"\0"};
	  	char m_charNoScale[20] = {"\0"};	
	  	long sqlnts = SQL_NTS;
	
	  //	miscellaneous variables	
	  	char strOutput[40] = {"\0"};
	  	char * SQLStr = "select OddScale, NoScale from ScaleTable";
	
	  //	Allocate ODBC handles and connect to Oracle
	  	rc = SQLAllocHandle(SQL_HANDLE_ENV,SQL_NULL_HANDLE,&henv);
	  	rc = SQLSetEnvAttr(henv, SQL_ATTR_ODBC_VERSION, (void*)SQL_OV_ODBC3,0);
	  	rc = SQLAllocHandle(SQL_HANDLE_DBC,henv, &hdbc);
	
	  	rc = SQLConnect(hdbc, (unsigned char *)dsn,
	  		SQL_NTS, (unsigned char *)uid,
	  		SQL_NTS, (unsigned char *)pwd, SQL_NTS);
	
	  	rc = SQLAllocHandle(SQL_HANDLE_STMT, hdbc, &hstmt);
	
	  //	Table creation function
	  	CreateTable(hstmt);
	
	  //	Execute the statement and bind the column as SQL_C_CHAR
	  	rc = SQLExecDirect(hstmt, (unsigned char *)SQLStr, SQL_NTS);
	
	  	rc = SQLBindCol(hstmt, 1, SQL_C_CHAR, m_charOddScale, 20, &sqlnts);
	  	rc = SQLBindCol(hstmt, 2, SQL_C_CHAR, m_charNoScale, 20, &sqlnts);
	
	  	printf("\nOddScale (3) and NoScale as SQL_C_CHAR\n\n");
	
	  //	Fetch records and print the results
	  	while (SQLFetch(hstmt) != SQL_NO_DATA_FOUND)
	  	{
	
	  	memset(strOutput,' ',sizeof(strOutput));
	  	strncpy(strOutput, m_charOddScale, strlen(m_charOddScale));
	  	strncpy(&strOutput[15],m_charNoScale, strlen(m_charNoScale)+1);
	
	  	printf("\t%s\n",strOutput);
	
	  	}
	
	  //	Cleanup
	  	SQLFreeStmt(hstmt, SQL_CLOSE);
	  	SQLFreeStmt(hstmt, SQL_DROP);
	  	SQLDisconnect(hdbc);
	  	SQLFreeConnect(hdbc);
	  	SQLFreeEnv(henv);
	  	return(TRUE);
	  };
	
	  //------- CreateTable() ----------------
	
	  void CreateTable(HSTMT hstmt)
	  {
	
	  	RETCODE rc = 0;
	  	char SqlStatements[6][70] = 
	  	{"Drop table ScaleTable",
	  	 "Create table ScaleTable (OddScale number(10,3), NoScale number)",
	  	 "Insert into ScaleTable values (1.1, 1.1)",
	  	 "Insert into ScaleTable values (1.12, 1.12)",
	  	 "Insert into ScaleTable values (1.123, 1.123)",
	  	 "Insert into ScaleTable values (1.005, 1.005)"};
	
	  	rc = SQLExecDirect(hstmt, (unsigned char *)SqlStatements[0], SQL_NTS);
	  	SQLFreeStmt(hstmt, SQL_CLOSE);
	  	rc = SQLExecDirect(hstmt, (unsigned char *)SqlStatements[1], SQL_NTS);
	  	SQLFreeStmt(hstmt, SQL_CLOSE);
	  	rc = SQLExecDirect(hstmt, (unsigned char *)SqlStatements[2], SQL_NTS);
	  	SQLFreeStmt(hstmt, SQL_CLOSE);
	  	rc = SQLExecDirect(hstmt, (unsigned char *)SqlStatements[3], SQL_NTS);
	  	SQLFreeStmt(hstmt, SQL_CLOSE);
	  	rc = SQLExecDirect(hstmt, (unsigned char *)SqlStatements[4], SQL_NTS);
	  	SQLFreeStmt(hstmt, SQL_CLOSE);
	  	rc = SQLExecDirect(hstmt, (unsigned char *)SqlStatements[5], SQL_NTS);
	  	SQLFreeStmt(hstmt, SQL_CLOSE);
	
	  }
	
	Additional query words: oracle msorcl32.dll odbc null odd scale numeric sql_c_char truncate extra trailing zero
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210SP2bug kbMDAC260fix kbMDACNoSweep 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC250 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbODBCOracle25734403 kbodbcoracle25735303 kbODBCOracle25736019 kbODBCOracle250Search
	Version           : :2.1,2.5,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.573.4403,Build 2.573.5303,Build 2.573.6019
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
