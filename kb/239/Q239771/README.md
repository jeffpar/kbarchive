---
layout: page
title: "Q239771: HOWTO: Return Oracle Stored Procedure Resultset to ADO Recordset"
permalink: /kb/239/Q239771/
---

## Q239771: HOWTO: Return Oracle Stored Procedure Resultset to ADO Recordset

	Article: Q239771
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbADO kbADO200 kbADO201 kbDatabase kbODBC kbOracle kbvfp600 KbDBFDBC kbGrpDSFox kbDSupp
	Last Modified: 20-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how use the Microsoft ODBC Driver for Oracle version
	2.0 and later with an Oracle PL/SQL package to return resultsets from an Oracle
	stored procedure to an ADO recordset.
	
	MORE INFORMATION
	================
	
	With the release of the Microsoft ODBC Driver for Oracle version 2.0 and higher,
	it is possible to retrieve resultsets from Oracle stored procedures. By creating
	Oracle stored procedures that return parameters of type TABLE, row, and column,
	data can be returned that can then be manipulated and displayed as a resultset.
	
	The resultsets created by the Microsoft ODBC Driver for Oracle version 2.0 and
	2.5 using Oracle stored procedures are READ ONLY and Static. Retrieving a
	resultset requires the creation of an Oracle Package.
	
	Before beginning to work with the Visual FoxPro application, an Oracle package
	called FoxPackage must be created. FoxPackage is taken from the Help File for
	Microsoft ODBC Driver for Oracle: Advanced Topics: "Returning Array Parameters
	from Stored Procedures".
	
	NOTE: The following code requires installation of Microsoft Data Access
	Components (MDAC) version 2.x or later. MDAC is included in the data components
	of Visual Studio 6.0 or can be downloaded from the following Web site:
	
	  http://www.microsoft.com/data/
	
	1. Create a program file named Procs.prg using the code snippet below. This code
	  will be used to create an Oracle package definition and package body:
	
	  *!* Step 1 Create the package definition string
	  Proc_String1="CREATE OR REPLACE PACKAGE FoxPackage AS " + CHR(13) + ;
	     CHR(10) + ;
	     "   TYPE t_id is TABLE of  NUMBER(5) " + CHR(13) + CHR(10) + ;
	     "    INDEX BY BINARY_INTEGER; " + CHR(13) + CHR(10) + ;
	     "   TYPE t_Course is TABLE of VARCHAR2(10) " + CHR(13) + CHR(10) + ;
	     "    INDEX BY BINARY_INTEGER; " + CHR(13) + CHR(10) + ;
	     "   TYPE t_Dept is TABLE of VARCHAR2(5) " + CHR(13) + CHR(10) + ;
	     "    INDEX BY BINARY_INTEGER; " + CHR(13) + CHR(10) + ;
	     "   TYPE t_pk1Type1 IS TABLE OF VARCHAR2(100) " + CHR(13) + CHR(10) + ;
	     "    INDEX BY BINARY_INTEGER; " + CHR(13) + CHR(10) + ;
	     "   TYPE t_pk1Type2 IS TABLE OF NUMBER(5) " + CHR(13) + CHR(10) + ;
	     "    INDEX BY BINARY_INTEGER; " + CHR(13) + CHR(10) + ;
	     "   PROCEDURE proc1 " + CHR(13) + CHR(10) + ;
	     "   (   o_id           OUT  t_id, " + CHR(13) + CHR(10) + ;
	     "       ao_course      OUT  t_Course, " + CHR(13) + CHR(10) + ;
	     "       ao_dept        OUT  t_Dept " + CHR(13) + CHR(10) + ;
	     "   ); " + CHR(13) + CHR(10) + ;
	     "   PROCEDURE proc2 " + CHR(13) + CHR(10) + ;
	     "   ( " + CHR(13) + CHR(10) + ;
	     "         i_Arg1         IN   NUMBER, " + CHR(13) + CHR(10) + ;
	     "         ao_Arg2        OUT  t_pk1Type1, " + CHR(13) + CHR(10) + ;
	     "         ao_Arg3        OUT  t_pk1Type2 " + CHR(13) + CHR(10) + ;
	     "   ); " + CHR(13) + CHR(10) + ;
	     "   END FoxPackage; "
	  *!* Step 2 Create the package body string
	  Proc_String2="CREATE OR REPLACE PACKAGE BODY FoxPackage AS " + CHR(13) + ;
	     CHR(10) + "   PROCEDURE  proc1 " + CHR(13) + CHR(10) + ;
	     "     ( " + CHR(13) + CHR(10) + ;
	     "         o_id           OUT  t_id, " + CHR(13) + CHR(10) + ;
	     "         ao_course      OUT  t_Course, " + CHR(13) + CHR(10) + ;
	     "         ao_dept        OUT  t_Dept " + CHR(13) + CHR(10) + ;
	     "     ) " + CHR(13) + CHR(10) + ;
	     "   AS " + CHR(13) + CHR(10) + ;
	     "   BEGIN " + CHR(13) + CHR(10) + ;
	     "         o_id(1):= 200; " + CHR(13) + CHR(10) + ;
	     "         ao_course(1) :=  'M101'; " + CHR(13) + CHR(10) + ;
	     "         ao_dept(1) :=  'EEE' ; " + CHR(13) + CHR(10) + ;
	     "         o_id(2) := 201; " + CHR(13) + CHR(10) + ;
	     "         ao_course(2) :=  'PHY320'; " + CHR(13) + CHR(10) + ;
	     "         ao_dept(2) :=  'ECE' ; " + CHR(13) + CHR(10) + ;
	     "   END proc1; " + CHR(13) + CHR(10) + ;
	     "   PROCEDURE proc2 " + CHR(13) + CHR(10) + ;
	     "     ( " + CHR(13) + CHR(10) + ;
	     "         i_Arg1         IN   NUMBER, " + CHR(13) + CHR(10) + ;
	     "         ao_Arg2        OUT  t_pk1Type1, " + CHR(13) + CHR(10) + ;
	     "         ao_Arg3        OUT  t_pk1Type2 " + CHR(13) + CHR(10) + ;
	     "     ) " + CHR(13) + CHR(10) + ;
	     "   AS " + CHR(13) + CHR(10) + ;
	     "         i  NUMBER; " + CHR(13) + CHR(10) + ;
	     "   BEGIN " + CHR(13) + CHR(10) + ;
	     "      FOR i IN 1 .. i_Arg1 LOOP " + CHR(13) + CHR(10) + ;
	     "         ao_Arg2(i) := 'Row Number ' || to_char(i); " + CHR(13) + ;
	               CHR(10) + ;
	     "         END LOOP; " + CHR(13) + CHR(10) + ;
	     "         FOR i IN 1 .. i_Arg1 LOOP " + CHR(13) + CHR(10) + ;
	     "            ao_Arg3(i) := i; " + CHR(13) + CHR(10) + ;
	     "            END LOOP; " + CHR(13) + CHR(10) + ;
	     "      END proc2; " + CHR(13) + CHR(10) + ;
	     "   END FoxPackage; "
	
	  *!* Note that the Server name, User ID, and Passwords in the following
	  *!* SQLSTRINGCONNECT should be changed to reflect the environment.
	  gnConnHandle=SQLSTRINGCONN('DRIVER={Microsoft ODBC for Oracle};' + ;
	     'SERVER=MyServer;UID=MyUserID;PWD=MyPassword')
	  IF gnConnHandle>0
	     Create_Pack=SQLEXEC(gnConnHandle,Proc_String1)
	     IF Create_Pack>0
	        Create_Body=SQLEXEC(gnConnHandle,Proc_String2)
	     ENDIF
	     =SQLDISCONN(gnConnHandle)
	  ENDIF
	
	2. Create a second program named Execado.prg using the code snippet below. This
	  program will be used later to call the Oracle package:
	
	  PARAMETER var1, var2
	  PUBLIC oConnection,rs1,rs2,rs3,rs4,is_add
	  LOCAL lcConnStr,lcAlias
	  LOCAL Proc_String1,Proc_String2,Proc_String3,Proc_String4
	  *!* Setup a DSN-Less connection to Sample Data Files
	  *!* Note that the Server name, User ID, and Passwords in the following
	  *!* string should be changed to reflect the environment.
	  lcConnStr="DRIVER={Microsoft ODBC for Oracle};" + ;
	      "SERVER=MyServer;" + ;
	      "UID=MyUserID;PWD=MyPassword"
	  *!* Create An ADO Connection
	  oConnection=CREATEOBJECT("ADODB.Connection")
	  oConnection.ConnectionString = lcConnStr
	  oConnection.CursorLocation   = 3 && Server Side Cursor
	  oConnection.OPEN
	  *!* Build strings that will be used to call the Oracle Package
	  Proc_String1 = "{call FoxPackage.Proc1({resultset 3, o_id , " + ;
	      "ao_course, ao_dept})}"
	  Proc_String2 = "{call FoxPackage.Proc1({resultset 3, o_id}, " + ;
	      "{resultset 3, ao_course}, {resultset 3, ao_dept})}"
	  Proc_String3 = "{call FoxPackage.Proc2(" + ALLTRIM(STR(var1)) + ;
	      ",{resultset 3, ao_Arg2, ao_Arg3})}"
	  Proc_String4 = "{call FoxPackage.Proc2(" + ALLTRIM(STR(var2)) + ;
	      ",{resultset 3, ao_Arg2}, {resultset 3, ao_Arg3})}"
	
	  *!* Create An ADO recordset for the first resultset returned from Package Proc1
	  rs1=CREATEOBJECT("ADODB.Recordset")
	  rs1.activeconnection         = oConnection
	  rs1.CursorLocation           = 3 && Client Side Cursor
	  rs1.cursortype               = 1 && OpenKeyset
	  rs1.LockType                 = 3 && LockOptimistic
	  rs1.OPEN(Proc_String1)
	  rs1.movefirst
	
	  *!* Create An ADO recordset for the second resultset returned from Package Proc1
	  rs2=CREATEOBJECT("ADODB.Recordset")
	  rs2.activeconnection         = oConnection
	  rs2.CursorLocation           = 3 && Client Side Cursor
	  rs2.cursortype               = 1 && OpenKeyset
	  rs2.LockType                 = 3 && LockOptimistic
	  rs2.OPEN(Proc_String2)
	  rs2.movefirst
	
	  *!* Create An ADO recordset for the first resultset returned from Package Proc2
	  rs3=CREATEOBJECT("ADODB.Recordset")
	  rs3.activeconnection         = oConnection
	  rs3.CursorLocation           = 3 && Client Side Cursor
	  rs3.cursortype               = 1 && OpenKeyset
	  rs3.LockType                 = 3 && LockOptimistic
	  rs3.OPEN(Proc_String3)
	  rs3.movefirst
	
	  *!* Create An ADO recordset for the second resultset returned from Package Proc2
	  rs4=CREATEOBJECT("ADODB.Recordset")
	  rs4.activeconnection         = oConnection
	  rs4.CursorLocation           = 3 && Client Side Cursor
	  rs4.cursortype               = 1 && OpenKeyset
	  rs4.LockType                 = 3 && LockOptimistic
	  rs4.OPEN(Proc_String4)
	  rs4.movefirst
	
	  *!* Navigate through the first ADO Recordset
	  ? "Resultset 1"
	  DO WHILE !rs1.EOF()
	      FOR i=0 TO rs1.FIELDS.COUNT-1
	          ? rs1.FIELDS(i).VALUE
	      NEXT
	      rs1.movenext
	  ENDDO
	
	  *!* Navigate through the second ADO Recordset
	  ? "Resultset 2"
	  DO WHILE !rs2.EOF()
	      FOR i=0 TO rs2.FIELDS.COUNT-1
	          ? rs2.FIELDS(i).VALUE
	      NEXT
	      rs2.movenext
	  ENDDO
	
	  *!* Navigate through the third ADO Recordset
	  ? "Resultset 3"
	  DO WHILE !rs3.EOF()
	      FOR i=0 TO rs3.FIELDS.COUNT-1
	          ? rs3.FIELDS(i).VALUE
	      NEXT
	      rs3.movenext
	  ENDDO
	
	  *!* Navigate through the fourth ADO Recordset
	  ? "Resultset 4"
	  DO WHILE !rs4.EOF()
	      FOR i=0 TO rs4.FIELDS.COUNT-1
	          ? rs4.FIELDS(i).VALUE
	      NEXT
	      rs4.movenext
	  ENDDO
	
	  *!* Done with the ADO Recordsets, so close
	  rs1.CLOSE
	  rs2.CLOSE
	  rs3.CLOSE
	  rs4.CLOSE
	  *!* Done with the ADO Connection, so close
	  oConnection.CLOSE
	
	3. Run the Procs.prg program file to create the Oracle package.
	
	4. After the Procs procedure finishes executing, run the Execado program from
	  the command line, using the following syntax:
	
	  DO Execado WITH 3,3
	
	5. Note that four different resultsets are returned to the FoxPro desktop.
	
	REFERENCES
	==========
	
	For additional information about returning resultsets from Oracle stored
	procedures, please click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q174679 HOWTO: Retrieve Resultsets from Oracle Stored Procedures
	
	  Q149882 HOWTO: Execute a Stored Procedure on an Oracle Server
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO kbADO200 kbADO201 kbDatabase kbODBC kbOracle kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
