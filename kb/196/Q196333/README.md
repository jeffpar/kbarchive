---
layout: page
title: "Q196333: PRB: Not Null Field Returns Error Using VFPODBC SQL Insert"
permalink: /kb/196/Q196333/
---

## Q196333: PRB: Not Null Field Returns Error Using VFPODBC SQL Insert

	Article: Q196333
	Product(s): Microsoft FoxPro
	Version(s): 2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbMDAC250 _IK
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft ODBC Driver for Visual FoxPro, versions 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	- Microsoft Access 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When inserting a record into a table that has a field that does not allow nulls,
	records inserted through the VFPODBC driver react differently than native Visual
	FoxPro.
	
	When you are inserting the record into a linked table through the Microsoft
	Access user interface, you see the following error message:
	
	  ODBC call failed
	
	followed by:
	
	  [Microsoft][ODBC Visual FoxPro Driver] Field <FieldName> does not
	  accept null values.
	
	When you are inserting the record into a linked table through Microsoft Visual
	Basic for Applications (VBA) code within Microsoft Access, you see the following
	error message:
	
	  Run-time error '3146':
	  ODBC --Call failed.
	
	CAUSE
	=====
	
	The default setting for SET NULL is ON for the Visual FoxPro ODBC Driver but it
	is OFF for the Visual FoxPro Development Environment.
	
	NOTE: If SET NULL is ON in the Visual FoxPro development environment, you cannot
	insert a null value into a field that does not allow a null.
	
	RESOLUTION
	==========
	
	You can resolve this problem in the following ways:
	
	- Mark all fields as allowing nulls.
	
	-or-
	
	- Make sure that you explicitly insert values into every non-null field.
	
	You can use the following VBA code within Access to add a record:
	
	NOTE: The sample code in this article uses Microsoft Data Access Objects. For
	this code to run properly, you must reference the Microsoft DAO 3.6 Object
	Library. To do so, click References on the Tools menu in the Visual Basic
	Editor, and ensure that the "Microsoft DAO 3.6 Object Library" check box is
	selected.
	
	  Sub Test_VFP_ODBC_Driver()
	
	     Dim wks As DAO.Workspace
	     Dim foo As DAO.Connection
	     Dim db As DAO.Database
	     Dim rs As DAO.Recordset
	
	     Set wks = DBEngine.CreateWorkspace("", "Admin", "", dbUseODBC)
	     wks.DefaultCursorDriver = dbUseODBCCursor
	     Set foo = wks.OpenConnection("", dbDriverNoPrompt, False, "ODBC;dsn=MyNameDSN;NULL=NO")
	     Set rs = foo.OpenRecordset("MyOrders", dbOpenDynaset, 0, dbOptimistic)
	
	     rs.MoveFirst
	
	     Do Until rs.EOF
	         rs.Edit
	         rs.Fields(0) = "150"
	         rs.Update
	         rs.MoveNext
	     Loop
	  End Sub
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code in a program file in a new directory:
	
	        CREATE DATA TEST1
	        CREATE TABLE TBL1(FLD1 C(10) PRIMARY KEY, FLD2 C(25))
	        close_data()
	        ?DBC()
	        CREATE DATA TEST2
	        CREATE CONNECTION CONN1 CONNSTR "driver=microsoft " ;
	           + "visual foxpro driver;sourcetype=dbc;" ;
	           + "sourcedb="+ SYS(5) + CURDIR() + "test1.dbc;backgroundfetch=no"
	        CREATE SQL VIEW TEST2 REMOTE CONNECTION CONN1 AS SELECT * FROM TBL1
	        DBSETPROP('Test2','View','SendUpdates',.T.)
	        DBSETPROP('Test2.Fld1','field','updatable',.T.)
	        USE TEST2
	        INSERT INTO TEST2 (FLD1) VALUES ('1')
	        ?TABLEUPDATE()
	        USE
	
	        PROCEDURE close_data
	           CLOSE DATA ALL
	        ENDPROC
	
	NOTE: To stop the error that occurs when you use the preceding code, issue the
	following command in the Command window:
	
	     ?TABLEREVERT(.T.)
	
	1. Run the code and note that TableUpdate() returns a .F. and Use returns the
	  following error:
	
	  Connectivity error: [Microsoft][ODBC Visual FoxPro Driver
	  Field FLD2 does not accept null values.
	
	2. Run the following code from a new program file in the same directory as the
	  preceding sample:
	
	        OPEN DATABASE TEST1
	        USE TBL1
	        INSERT INTO TBL1 (FLD1) VALUES('100')
	        ?ISNULL(FLD2)
	        ?EMPTY(FLD2)
	        ?ISBLANK(FLD2)
	        BROWSE NOWAIT
	
	Note that the record is added without an error, and the value of FLD2 is not
	'.Null.'. Whereas, as demonstrated in steps 1 and 2, the Vfpodbc.dll seems to be
	passing a null value for each field not being updated.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbMDAC250 _IK 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbODBCVFP500 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
