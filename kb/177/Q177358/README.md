---
layout: page
title: "Q177358: HOWTO: Pass a Date Value to a Oracle Stored Procedure"
permalink: kb/177/Q177358/
---

## Q177358: HOWTO: Pass a Date Value to a Oracle Stored Procedure

	Article: Q177358
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbODBC kbOracle kbRDO kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 26-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives an example of passing a Date datatype value to an Oracle
	stored procedure and getting back a result from the stored procedure. The
	example below uses RDO 2.0, and the second version, 2.73.7253, of the Microsoft
	Oracle ODBC driver. Note that the first version of the Microsoft Oracle ODBC
	driver, Ver 2.00.006325, does not support passing dates to a stored procedure.
	
	This example also demonstrates how the ODBC will take care of converting the
	Visual Basic Date to the acceptable Oracle Date format.
	
	MORE INFORMATION
	================
	
	Create a new project in Visual Basic and reference the Microsoft Remote Data
	Object 2.0 under Project/References.
	
	1. On the new Form add a CommandButton.
	
	2. Paste the following code in the General Declarations section of the Form:
	
	     Option Explicit
	     Dim Cn As New rdoConnection
	     Dim En As rdoEnvironment
	     Dim Qd As New rdoQuery
	     Dim Rs As rdoResultset
	     Dim Conn As String
	     Dim tempcnt As Integer
	
	     Private Sub Command1_Click()
	
	         Dim strDate, strQd$, strQd1$
	         strDate = InputBox("Enter the date you wish to retrieve:")
	         Qd(0) = CDate(strDate)
	         Qd.Execute
	         strQd = Mid(Qd(1), 12)
	         strQd1 = Mid(Qd(1), 1, 11)
	         Debug.Print "For the date you entered: " & strQd1 & vbCrLf & strQd
	         MsgBox "For the date you entered: " & strQd1 & vbCrLf & strQd
	
	     End Sub
	
	     Private Sub Form_Load()
	
	         Command1.Caption = "Start"
	         'Change each <> field to the appropriate value for your system
	         Conn = "UID=<uid>;PWD=<password>;" _
	         & "driver={Microsoft ODBC for Oracle};SERVER=<server>;"
	
	         Set En = rdoEnvironments(0)
	         En.CursorDriver = rdUseOdbc
	         With Cn
	             .Connect = Conn
	             .CursorDriver = rdUseOdbc
	             .EstablishConnection rdDriverNoPrompt, False
	         End With
	
	         Set Qd.ActiveConnection = Cn
	
	         Qd.SQL = "{call testdate1(?,?)}"
	         Qd(0).Direction = rdParamInput
	         Qd(1).Direction = rdParamOutput
	         Qd(0).Type = rdTypeDATE
	
	     End Sub
	
	     Private Sub Form_Unload(Cancel As Integer)
	         Qd.Close
	         Cn.Close
	         En.Close
	
	     End Sub
	
	3. Create an Oracle stored procedure using this script:
	
	     CREATE OR REPLACE PROCEDURE TESTDATE1(
	
	     /* This is called by a Visual Basic project that passes in */ 
	     /* a Date parameter in any Visual Basic-acceptable format and */ 
	     /* returns a Count value and the input date in */ 
	     /* a different format */ 
	
	        INDATE IN DATE,
	        OUTSTR OUT VARCHAR2 )
	
	     IS
	
	        m_Count NUMBER;
	
	     BEGIN
	        SELECT
	        COUNT(*) INTO m_Count
	        FROM EMP WHERE HIREDATE < INDATE;
	
	        OUTSTR:=TO_CHAR(INDATE,'DD-Mon-YYYY') ||
	        'The Count is: '|| TO_CHAR(m_Count);
	
	     END;
	     / 
	
	Run the project by pressing the F5 key and, when prompted, enter a date in any
	Visual Basic-acceptable date format that is greater than Jan 1, 1983 to get a
	count value of all records in the EMP table.
	
	Additional Information:
	
	1. This stored procedure uses the DEMO account EMP table supplied in a standard
	  Oracle 7.3 installation.
	
	2. This demonstrates that the Microsoft Oracle ODBC driver will handle Date
	  conversion from an acceptable Visual Basic format to an acceptable Oracle
	  format.
	
	The return should be a count of 14 and the date that was entered in standard
	military format of DD-MON-YYYY.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q167225 HOWTO: Access an Oracle Database Using RDO
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbOracle kbRDO kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
