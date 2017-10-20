---
layout: page
title: "Q174981: HOWTO: Retrieve Typical Resultsets From Oracle Stored Procedures"
permalink: /kb/174/Q174981/
---

## Q174981: HOWTO: Retrieve Typical Resultsets From Oracle Stored Procedures

{% raw %}

	Article: Q174981
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0,Build 2.573.2927,Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03,Build 2
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.01, Build 2.73.7283.03, Build 2.73.7356 
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to create a Remote Data Object (RDO) project that returns
	a typical Resultset from an Oracle stored procedure. This article builds on the
	concepts covered in the following Microsoft Knowledge Base article:
	
	  Q174679 : HOWTO: Retrieve Resultsets from Oracle Stored Procedures
	
	MORE INFORMATION
	================
	
	Microsoft Knowledge Base article Q174679 gives an in-depth example of all the
	possible ways to return a Resultset from a stored procedure. The example in this
	article is a simplified version. Please refer to Q174679 if you want more
	information about the process.
	
	NOTE: The Resultsets created by the Microsoft ODBC Driver for Oracle v2.0 using
	Oracle stored procedures are READ ONLY and STATIC. To retrieve a Resultset
	requires that an Oracle Package be created.
	
	The sample project in this article was created in Visual Basic 5.0 and uses RDO
	to access and manipulate the Resultsets created by the Microsoft ODBC Driver for
	Oracle version 2.0 or higher. You will need to have this driver to use the
	Resultsets - from-stored-procedures functionality discussed in this article and
	KB Q174679. (currently, it is the only driver on the market that can return a
	Resultset from a stored procedure). If you want more information about using RDO
	2.0 with Oracle, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q167225 : HOWTO: Access an Oracle Database Using RDO
	
	This article is in two parts. The first part is a step-by-step procedure for
	creating the project. The second is a detailed discussion about the interesting
	parts of the project.
	
	Step-by-Step Example
	--------------------
	
	1. Run the following DDL script on your Oracle server:
	
	        DROP TABLE person;
	
	        CREATE TABLE person
	         (ssn     NUMBER(9) PRIMARY KEY,
	          fname   VARCHAR2(15),
	          lname   VARCHAR2(20));
	
	        INSERT INTO person VALUES(555662222,'Sam','Goodwin');
	
	        INSERT INTO person VALUES(555882222,'Kent','Clark');
	
	        INSERT INTO person VALUES(666223333,'Sally','Burnett');
	
	        COMMIT;
	        / 
	
	2. Create the following package on your Oracle server:
	
	        CREATE OR REPLACE PACKAGE packperson
	        AS
	            TYPE tssn is TABLE of  NUMBER(10)
	            INDEX BY BINARY_INTEGER;
	            TYPE tfname is TABLE of VARCHAR2(15)
	            INDEX BY BINARY_INTEGER;
	            TYPE tlname is TABLE of VARCHAR2(20)
	            INDEX BY BINARY_INTEGER;
	
	            PROCEDURE allperson
	                    (ssn    OUT     tssn,
	                     fname  OUT     tfname,
	                     lname  OUT     tlname);
	          PROCEDURE oneperson
	                (onessn IN      NUMBER,
	                 ssn    OUT     tssn,
	                     fname  OUT     tfname,
	                     lname  OUT     tlname);
	        END packperson;
	        / 
	
	3. Create the following package body on your Oracle server:
	
	        CREATE OR REPLACE PACKAGE BODY packperson
	        AS
	
	        PROCEDURE allperson
	                    (ssn    OUT     tssn,
	                     fname  OUT     tfname,
	                     lname  OUT     tlname)
	        IS
	            CURSOR person_cur IS
	                    SELECT ssn, fname, lname
	                    FROM person;
	
	            percount NUMBER DEFAULT 1;
	
	        BEGIN
	            FOR singleperson IN person_cur
	            LOOP
	                    ssn(percount) := singleperson.ssn;
	                    fname(percount) := singleperson.fname;
	                    lname(percount) := singleperson.lname;
	                    percount := percount + 1;
	            END LOOP;
	        END;
	
	        PROCEDURE oneperson
	              (onessn  IN    NUMBER,
	                     ssn     OUT   tssn,
	                     fname   OUT   tfname,
	                     lname   OUT   tlname)
	        IS
	          CURSOR person_cur IS
	                     SELECT ssn, fname, lname
	                     FROM person
	                     WHERE ssn = onessn;
	
	             percount NUMBER DEFAULT 1;
	
	         BEGIN
	             FOR singleperson IN person_cur
	             LOOP
	                     ssn(percount) := singleperson.ssn;
	                     fname(percount) := singleperson.fname;
	                     lname(percount) := singleperson.lname;
	                     percount := percount + 1;
	             END LOOP;
	         END;
	         END;
	         / 
	
	4. Open a new project in Visual Basic Enterprise edition. Form1 is created by
	  default.
	
	5. Place the following controls on the form:
	
	  Control     Name             Text/Caption
	  -----------------------------------------
	  Button      cmdGetEveryone   Get Everyone
	  Button      cmdGetOne        Get One
	
	6. From the Tools menu, select the Options item. Click the "Default Full Module
	  View" option, and then click OK. This allows you to view all of the code for
	  this project.
	
	7. Paste the following code into your code window:
	
	        Option Explicit
	        Dim Cn As rdoConnection
	        Dim En As rdoEnvironment
	        Dim CPw1 As rdoQuery
	        Dim CPw2 As rdoQuery
	        Dim Rs As rdoResultset
	        Dim Conn As String
	        Dim QSQL As String
	        Dim tempcnt As Integer
	    
	        Private Sub cmdGetEveryone_Click()
	
	           Set Rs = CPw1.OpenResultset(rdOpenStatic, rdConcurReadOnly)
	
	           While Not Rs.EOF
	
	              MsgBox "Person data: " & Rs(0) & ", " & Rs(1) & ", " & Rs(2)
	              Rs.MoveNext
	
	           Wend
	
	           Rs.Close
	
	           Set Rs = Nothing
	
	        End Sub
	
	        Private Sub cmdGetOne_Click()
	
	           Dim inputssn As Long
	
	           inputssn = InputBox("Enter an SSN number:")
	
	           CPw2(0) = inputssn
	
	           Set Rs = CPw2.OpenResultset(rdOpenStatic, rdConcurReadOnly)
	
	           MsgBox "Person data: " & Rs(0) & ", " & Rs(1) & ", " & Rs(2)
	
	           Rs.Close
	
	           Set Rs = Nothing
	
	        End Sub
	
	        Private Sub Form_Load()
	
	           'Change the text in <> to the appropriate logon
	           'information.
	           Conn = "UID=<your user ID>;PWD=<your password>;" _
	                   & "DRIVER={Microsoft ODBC for Oracle};" _
	                   & "SERVER=<your database alias>;"
	
	           Set En = rdoEnvironments(0)
	           En.CursorDriver = rdUseOdbc
	           Set Cn = En.OpenConnection("", rdDriverNoPrompt, False, Conn)
	
	           QSQL = "{call packperson.allperson({resultset 9, ssn, fname, " _
	                & "lname})}"
	
	           Set CPw1 = Cn.CreateQuery("", QSQL)
	
	           QSQL = "{call packperson.oneperson(?,{resultset 2, ssn, fname, " _
	                & "lname})}"
	
	           Set CPw2 = Cn.CreateQuery("", QSQL)
	
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	
	           En.Close
	
	        End Sub
	
	8. Run the project.
	
	When you click the "Get Everyone" button, it executes the following query:
	
	     QSQL = "{call packperson.allperson({resultset 9, ssn, fname, "_ & "lname})}"
	
	This query is executing the stored procedure "allperson," which is in the package
	"packperson" (referenced as "packperson.allperson"). There are no input
	parameters and the procedure is returning three arrays (ssn, fname, and lname),
	each with 9 or fewer records. As stated in Q174679, you must specify the maximum
	number of rows you will be returning. Please refer to the Microsoft ODBC Driver
	for Oracle Help File and Q174679 for more information on this issue.
	
	When you click on the "Get One" button, you see an input box that prompts you for
	an SSN. Once you input a valid SSN and click OK, this query is executed:
	
	     QSQL = "{call packperson.oneperson(?,{resultset 2, ssn, fname, "_ & "lname})}"
	
	The stored procedure, packperson.oneperson, uses a single input parameter as the
	selection criteria for the Resultset it creates. Just like packperson.allperson,
	the Resultset is constructed using the table types defined in packperson. (See
	Q174679 for more information.)
	
	NOTE: You can only define input parameters for Oracle stored procedures that
	return a Resultset. You cannot define output parameters for these stored
	procedures.
	
	These two stored procedures cover the basic uses of stored procedures that return
	Resultsets. The first one gives you a predefined set of records (such as
	everyone) and the second will gives you a set of records (or just one record)
	based on one or more input parameters. Once you have these Resultsets, you can
	do inserts, updates, and deletes either through stored procedures or SQL that
	you create on the client.
	
	REFERENCES
	==========
	
	Microsoft ODBC Driver for Oracle Help File
	
	Oracle PL/SQL Programming by Steven Feuerstein
	
	Hitchhiker's Guide to Visual Basic & SQL Server by William Vaughn
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q174679 : HOWTO: Retrieve Resultsets from Oracle Stored Procedures
	
	  Q167225 : HOWTO: Access an Oracle Database Using RDO
	
	  Q175018 : HOWTO: Acquire and Install the Microsoft Oracle ODBC Driver
	
	Additional query words: Oracle stored procedures kbrdo msorcl32.dll kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbOracle kbOdbc kbDatabase kbDriver (c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Sam Carpenter,
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbODBCSearch kbVB500 kbVB600 kbODBCOracle2737269 kbODBCOracle273728303 kbODBCOracle25732927 kbODBCOracle273728301 kbODBCOracle2737356 kbODBCOracle200Search kbODBCOracle250Search
	Version           : :5.0,6.0,Build 2.573.2927,Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03,Build 2.73.7356
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
