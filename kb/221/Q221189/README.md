---
layout: page
title: "Q221189: HOWTO: Retrieve a Resultset from Oracle Stored Procedures"
permalink: kb/221/Q221189/
---

## Q221189: HOWTO: Retrieve a Resultset from Oracle Stored Procedures

	Article: Q221189
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how use the Microsoft ODBC Driver for Oracle version
	2.0 and later with an Oracle PL/SQL package to retrieve resultsets from an
	Oracle stored procedure.
	
	MORE INFORMATION
	================
	
	With the release of the Microsoft ODBC Driver for Oracle version 2.0 and higher,
	it is possible to retrieve resultsets from Oracle stored procedures. By creating
	Oracle stored procedures that return parameters of type TABLE, row and column
	data can be returned, which can then be manipulated and displayed as a
	resultset.
	
	The resultsets created by the Microsoft ODBC Driver for Oracle version 2.0 and
	2.5 using Oracle stored procedures are READ ONLY and STATIC. Retrieving a
	resultset requires that an Oracle Package be created.
	
	Before beginning to work with the Visual FoxPro application, an Oracle package
	called FoxPackage must be created. FoxPackage is taken from the Help File for
	Microsoft ODBC Driver for Oracle: Advanced Topics: "Returning Array Parameters
	from Stored Procedures."
	
	1. Create a program file named Procs.prg, using the code snippet below. This
	  code is used to create an Oracle package definition and package body:
	
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
	
	  gnConnHandle=SQLSTRINGCONN('DRIVER={Microsoft ODBC for Oracle};' + ;
	     'SERVER=MyServer;UID=MyUserID;PWD=MyPassword')
	  IF gnConnHandle>0
	     Create_Pack=SQLEXEC(gnConnHandle,Proc_String1)
	     IF Create_Pack>0
	        Create_Body=SQLEXEC(gnConnHandle,Proc_String2)
	     ENDIF
	     =SQLDISCONN(gnConnHandle)
	  ENDIF
	
	2. Create a second program named Execsql.prg using the code snippet below. This
	  program will be used later to call the Oracle stored procedure:
	
	  PARAMETER var1, var2
	  Proc_String1 = "{call FoxPackage.Proc1({resultset 3, o_id , " + ;
	     "ao_course, ao_dept})}"
	  Proc_String2 = "{call FoxPackage.Proc1({resultset 3, o_id}, " + ;
	     "{resultset 3, ao_course}, {resultset 3, ao_dept})}"
	  IF PARAMETERS()>0
	     IF TYPE('VAR1')='N'
	        Proc_String3 = "{call FoxPackage.Proc2(" + ALLTRIM(STR(var1)) + ;
	           ",{resultset 3, ao_Arg2, ao_Arg3})}"
	     ENDIF
	  ENDIF
	  IF PARAMETERS()>1
	     IF TYPE('VAR2')='N'
	        Proc_String4 = "{call FoxPackage.Proc2(" + ALLTRIM(STR(var2)) + ;
	           ",{resultset 3, ao_Arg2}, {resultset 3, ao_Arg3})}"
	     ENDIF
	  ENDIF
	  gnConnHandle=SQLSTRINGCONN('DRIVER={Microsoft ODBC for Oracle};' + ;
	     'SERVER=dseOracle;UID=DEMO;PWD=DEMO')
	  IF gnConnHandle>0
	     Get_One=SQLEXEC(gnConnHandle,Proc_String1,'SQLRESULTA')
	     IF Get_One>0
	        SELECT SQLRESULTA
	        BROW
	     ENDIF
	     Get_Two=SQLEXEC(gnConnHandle,Proc_String2,'SQLRESULTB')
	     IF Get_Two>0
	        SELECT SQLRESULTB
	        BROW
	     ENDIF
	     IF PARAMETERS()>0
	        Get_Three=SQLEXEC(gnConnHandle,Proc_String3,'SQLRESULTC')
	        IF Get_Three>0
	           SELECT SQLRESULTC
	           BROW
	        ENDIF
	     ENDIF
	     IF PARAMETERS()>1
	        Get_Four=SQLEXEC(gnConnHandle,Proc_String4,'SQLRESULTD')
	        IF Get_Four>0
	           SELECT SQLRESULTD
	           BROW
	        ENDIF
	     ENDIF
	     =SQLDISCONN(gnConnHandle)
	  ENDIF
	  CLOSE ALL
	
	3. Run the Procs.prg program file to create the Oracle package.
	
	4. After the PROCS procedure finishes executing, run the EXECSQL program from
	  the Command line, using the following syntax:
	
	DO EXECSQL WITH 3,3
	
	5. Observe that four different resultsets are returned.
	
	REFERENCES
	==========
	
	For additional information about Returning resultsets from Oracle stored
	procedures, click on the article numbers to see the following articles in the
	Microsoft Knowledge Base:
	
	  Q174679 HOWTO: Retrieve Resultsets from Oracle Stored Procedures
	
	  Q149882 HOWTO: Execute a Stored Procedure on an Oracle Server
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by John Desch, Microsoft Corporation
	
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
