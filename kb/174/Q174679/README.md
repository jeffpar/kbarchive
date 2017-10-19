---
layout: page
title: "Q174679: HOWTO: Retrieve Resultsets from Oracle Stored Procedures"
permalink: /kb/174/Q174679/
---

## Q174679: HOWTO: Retrieve Resultsets from Oracle Stored Procedures

	Article: Q174679
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0,Build 2.573.2927,Build 2.73.7283.03
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle kbRDO kbVBp kbVBp500 kbVBp600 kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft ODBC for Oracle version 2.0 Build 2.73.7283.03 
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use Visual Basic Enterprise Edition, Remote
	Data Object (RDO), the Microsoft ODBC Driver for Oracle version 2.0 and higher,
	and an Oracle PL/SQL package to retrieve resultsets from an Oracle stored
	procedure.
	
	MORE INFORMATION
	================
	
	With the release of the Microsoft ODBC Driver for Oracle version 2.0 and higher,
	you can now retrieve resultsets from Oracle stored procedures. By creating
	Oracle stored procedures that return parameters of type TABLE, you can return
	row and column data that can then be manipulated and displayed as a resultset.
	This article uses the example in the Help file for the Microsoft ODBC Driver for
	Oracle v2.0 and shows how to use that example in Visual Basic.
	
	NOTE: The resultsets created by the Microsoft ODBC Driver for Oracle version 2.0
	and 2.5 using Oracle stored procedures are READ ONLY and STATIC. To retrieve a
	resultset requires that an Oracle Package be created.
	
	Before you can start working with the Visual Basic application, you must create
	an Oracle package called SimplePackage. SimplePackage is taken from the Help
	File for Microsoft ODBC Driver for Oracle: Advanced Topics: "Returning Array
	Parameters from Stored Procedures."
	
	The following package definition and package body for SimplePackage need to be
	added to your Oracle server either through SQL*Plus or through the Data Tools in
	Visual Basic 5.0 Enterprise edition:
	
	Step 1
	------
	
	      CREATE OR REPLACE PACKAGE SimplePackage AS
	
	        TYPE t_id is TABLE of  NUMBER(5)
	         INDEX BY BINARY_INTEGER;
	
	        TYPE t_Course is TABLE of VARCHAR2(10)
	         INDEX BY BINARY_INTEGER;
	
	        TYPE t_Dept is TABLE of VARCHAR2(5)
	         INDEX BY BINARY_INTEGER;
	
	        TYPE t_pk1Type1 IS TABLE OF VARCHAR2(100)
	         INDEX BY BINARY_INTEGER;
	
	        TYPE t_pk1Type2 IS TABLE OF NUMBER(5)
	         INDEX BY BINARY_INTEGER;
	
	        PROCEDURE proc1
	        (   o_id           OUT  t_id,
	              ao_course      OUT  t_Course,
	              ao_dept        OUT  t_Dept
	        );
	
	        PROCEDURE proc2
	          (
	              i_Arg1         IN   NUMBER,
	              ao_Arg2        OUT  t_pk1Type1,
	              ao_Arg3        OUT  t_pk1Type2
	        );
	
	      END SimplePackage;
	
	Step 2
	------
	
	  CREATE OR REPLACE PACKAGE BODY SimplePackage AS
	
	        
	       PROCEDURE  proc1
	          (
	              o_id           OUT  t_id,
	              ao_course      OUT  t_Course,
	              ao_dept        OUT  t_Dept
	          )
	        AS
	        BEGIN
	
	              o_id(1):= 200;
	              ao_course(1) :=  'M101';
	              ao_dept(1) :=  'EEE' ;
	
	              o_id(2) := 201;
	              ao_course(2) :=  'PHY320';
	              ao_dept(2) :=  'ECE' ;
	
	        END proc1;
	
	        PROCEDURE proc2
	          (
	              i_Arg1         IN   NUMBER,
	              ao_Arg2        OUT  t_pk1Type1,
	              ao_Arg3        OUT  t_pk1Type2
	          )
	        AS
	              i  NUMBER;
	      BEGIN
	
	              FOR i IN 1 .. i_Arg1 LOOP
	                ao_Arg2(i) := 'Row Number ' || to_char(i);
	              END LOOP;
	
	              FOR i IN 1 .. i_Arg1 LOOP
	                ao_Arg3(i) := i;
	              END LOOP;
	
	        END proc2;
	
	      END SimplePackage;
	
	Once SimplePackage is loaded and compiled on the Oracle server, you can start
	working on the Visual Basic application.
	
	Step-by-Step Example
	--------------------
	
	This example project uses a simple form to call the two procedures in the
	SimplePackage package. Both procedures (Proc1 and Proc2) return arrays (Oracle
	TABLE data type) that are converted to resultsets by the Microsoft ODBC Driver
	for Oracle version 2.0 or 2.5. These resultsets are manipulated and displayed in
	the project using the Remote Data Object. Here are the steps to create the
	project:
	
	1. Open a new project in Visual Basic 5.0 Enterprise edition. Form1 is created
	  by default.
	
	2. Place the following controls on the form:
	
	     Control     Name      Text/Caption
	     ----------------------------------
	     Button      cmdProc1A  Proc1A
	     Button      cmdProc1B  Proc1B
	     Button      cmdProc2A  Proc2A
	     Button      cmdProc2B  Proc2B
	     Text Box    txtZero1
	     Text Box    txtZero2
	     Text Box    txtOne1
	     Text Box    txtOne2
	
	NOTE: The text boxes should be laid out in the following grid format:
	
	     txtZero1           txtOne1
	     txtZero2           txtOne2
	
	1. From the Tools menu, select the Options item. Click the Default Full Module
	  View option and then click OK. This allows you to view all of the code for
	  this project.
	
	2. Paste the following code into the General Declarations section of the new
	  form:
	
	        Option Explicit
	        Dim Cn As rdoConnection
	        Dim En As rdoEnvironment
	        Dim CPw1 As rdoQuery
	        Dim CPw2 As rdoQuery
	        Dim CPw3 As rdoQuery
	        Dim CPw4 As rdoQuery
	        Dim Rs As rdoResultset
	        Dim Conn As String
	        Dim QSQL As String
	
	        Private Sub cmdProc1A_Click()
	
	          Set Rs = CPw1.OpenResultset(rdOpenStatic, rdConcurReadOnly)
	
	          txtZero1 = Rs(0)
	          txtOne1 = Rs(1) & "       " & Rs(2)
	
	          Rs.MoveNext
	
	          txtZero2 = Rs(0)
	          txtOne2 = Rs(1) & "   " & Rs(2)
	
	          Rs.Close
	
	          MsgBox "Done"
	
	        End Sub
	
	        Private Sub cmdProc1B_Click()
	
	          Dim tempOne1 As String
	          Dim tempOne2 As String
	
	          Set Rs = CPw2.OpenResultset(rdOpenForwardOnly, rdConcurReadOnly)
	
	          txtZero1 = Rs(0)
	
	          Rs.MoveNext
	
	          txtZero2 = Rs(0)
	
	          Rs.MoreResults
	
	          tempOne1 = Rs(0)
	
	          Rs.MoveNext
	
	          tempOne2 = Rs(0)
	
	          Rs.MoreResults
	
	          txtOne1 = tempOne1 & "       " & Rs(0)
	
	          Rs.MoveNext
	
	          txtOne2 = tempOne2 & "   " & Rs(0)
	
	           Rs.Close
	
	          MsgBox "Done"
	
	        End Sub
	
	        Private Sub cmdProc2A_Click()
	
	          CPw3(0) = 2
	          Set Rs = CPw3.OpenResultset(rdOpenForwardOnly, rdConcurReadOnly)
	
	          txtZero1 = Rs(0)
	          txtOne1 = Rs(1)
	
	          Rs.MoveNext
	
	          txtZero2 = Rs(0)
	          txtOne2 = Rs(1)
	
	          Rs.Close
	
	          MsgBox "Done"
	
	         End Sub
	
	        Private Sub cmdProc2B_Click()
	
	          CPw4(0) = 2
	          Set Rs = CPw4.OpenResultset(rdOpenForwardOnly, rdConcurReadOnly)
	
	          txtZero1 = Rs(0)
	
	          Rs.MoveNext
	
	          txtZero2 = Rs(0)
	
	          Rs.MoreResults
	
	          txtOne1 = Rs(0)
	
	          Rs.MoveNext
	
	          txtOne2 = Rs(0)
	
	          Rs.Close
	
	          MsgBox "Done"
	
	        End Sub
	
	        Private Sub Form_Load()
	
	          Conn = "UID=<user ID>;PWD=<password>;"_
	              & "driver={Microsoft ODBC for Oracle};SERVER=RonOracle;"
	
	          Set En = rdoEnvironments(0)
	          En.CursorDriver = rdUseOdbc
	          Set Cn = En.OpenConnection("", rdDriverNoPrompt, False, Conn)
	
	          QSQL = "{call SimplePackage.Proc1({resultset 3, o_id , " _
	                 & "ao_course, ao_dept})}"
	          Set CPw1 = Cn.CreateQuery("", QSQL)
	
	          QSQL = "{call SimplePackage.Proc1({resultset 3, o_id}, " _
	                 & "{resultset 3, ao_course}, {resultset 3, ao_dept})}"
	          Set CPw2 = Cn.CreateQuery("", QSQL)
	
	          QSQL = "{call SimplePackage.Proc2(?,{resultset 3, ao_Arg2," _
	                 & " ao_Arg3})}"
	          Set CPw3 = Cn.CreateQuery("", QSQL)
	
	          QSQL = "{call SimplePackage.Proc2(?,{resultset 3, ao_Arg2}, " _
	                 & "{resultset 3, ao_Arg3})}"
	          Set CPw4 = Cn.CreateQuery("", QSQL)
	
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	
	          En.Close
	
	        End Sub
	
	3. Run the project.
	
	Note that the array returned by the stored procedure is being turned into an RDO
	resultset. The code in this example is fairly standard except for the creation
	and execution of the Oracle stored procedures.
	
	The query objects created in the code each do something a little different. The
	first one is the simplest and probably the most common way to call this type of
	stored procedure:
	
	  QSQL = "{call SimplePackage.Proc1({resultset 3, o_id , " _
	              & "ao_course, ao_dept})}"
	
	Within the call statement, you must supply the keyword RESULTSET followed by the
	maximum number of rows you will be returning.
	
	NOTE: If you return more than the maximum specified, you get an error. If you
	return less, everything works fine.
	
	After the resultset keyword and maximum number of rows, this form of the call
	statement supplies the stored procedure parameter list. Each parameter is
	actually an array (or Oracle TABLE variable) containing all of the elements for
	a given column of a resultset. In this example (Proc1), there are three columns
	in the returning resultset represented by the three arrays o_id, ao_course, and
	ao_dept.
	
	NOTE: This parameter list needs to appear exactly as it does in the stored
	procedure.
	
	The next query object does something different:
	
	  QSQL = "{call SimplePackage.Proc1({resultset 3, o_id}, " _
	              & "{resultset 3, ao_course}, {resultset 3, ao_dept})}"
	
	This form of the call statement is actually creating three resultsets; one for
	each column in the original (or returning) resultset. Note that you must use the
	keyword RESULTSET and the maximum number of rows for each resultset. This form
	of the call statement is actually giving the resultset for each array declared
	in the parameter list.
	
	The next query object is taking in an input parameter and then returning
	resultset as before:
	
	  QSQL = "{call SimplePackage.Proc2(?,{resultset 3, ao_Arg2," 
	              & " ao_Arg3})}"
	
	Note that not much has changed. An input placeholder (?) has been added to the
	beginning of the parameter list, where it must be if it is to be used.
	
	The last form of the call statement is the multiple result example from above
	with an input placeholder added to the parameter list:
	
	  QSQL = "{call SimplePackage.Proc2(?,{resultset 3, ao_Arg2}, " _
	              & "{resultset 3, ao_Arg3})}"
	
	Once the query object is defined, everything else in the project is standard RDO;
	setting input and output parameters, moving within the RDO resultsets, and
	moving between resultsets.
	
	REFERENCES
	==========
	
	Help file for Microsoft ODBC Driver for Oracle: Advanced Topics: "Returning
	Array Parameters from Stored Procedures"
	
	Visual Basic 5.0 Enterprise Documentation: The Guide to Building Client/Server
	Applications with Visual Basic: Data Access Options: "Remote Data Objects (RDO)
	- Chapter 11"
	
	For more information on working with RDO 2.0 and Oracle, please click on the
	article number below to see the article in the Microsoft Knowledge Base:
	
	  Q167225 HOWTO: Access an Oracle Database Using RDO
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Sam Carpenter, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle kbRDO kbVBp kbVBp500 kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbODBCSearch kbVB500 kbVB600 kbODBCOracle273728303 kbODBCOracle25732927 kbODBCOracle200Search kbODBCOracle250Search
	Version           : :5.0,6.0,Build 2.573.2927,Build 2.73.7283.03
	Issue type        : kbhowto
	
	=============================================================================
	
