---
layout: page
title: "Q194792: HOWTO: Retrieve Values in SQL Server Stored Procedures with ADO"
permalink: /kb/194/Q194792/
---

## Q194792: HOWTO: Retrieve Values in SQL Server Stored Procedures with ADO

{% raw %}

	Article: Q194792
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1 SP2,2.5,2.6,2.7,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbADO200 kbDatabase kbPrinting kbSQLServ kbStoredProc kbVBp kbVBp500 kbVBp600 k
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are important issues to consider when attempting to retrieve
	RAISERROR/PRINT/RETURN values from SQL Server stored procedures through ActiveX
	Data Objects (ADO). Here are three issues:
	
	- RAISERROR statements in SQL Server must be a severity level of 11-18.
	
	- PRINT statements in SQL Server can also populate the ADO errors collection.
	  However, PRINT statements are severity level zero (0) so, at least one
	  RAISERROR statement is required in the stored procedure to retrieve a PRINT
	  statement with ADO through the Errors collection.
	
	- RETURN values in a stored procedure must be associated with at least one
	  resultset.
	
	MORE INFORMATION
	================
	
	The following code sample demonstrates browsing the ADO Errors collection to
	access the RAISERROR/PRINT/RETURN detail from a SQL Server stored procedure
	returning multiple resultsets:
	
	1. Paste and execute the following code in the ISQL_W window to create the
	  stored procedure used for the ADO sample in step 4:
	
	        use pubs
	        GO
	
	        if exists (select * from sysobjects where id =
	          object_id('dbo.ADOTestRPE') and sysstat & 0xf = 4)
	        drop procedure dbo.ADOTestRPE
	        GO
	
	        create procedure ADOTestRPE
	        (
	        @SetRtn  INT=0 OUTPUT,
	        @R1Num   INT=1,
	        @P1Num   INT=1,
	        @E1Num   INT=1,
	        @R2Num   INT=2,
	        @P2Num   INT=2,
	        @E2Num   INT=2
	        )
	        AS
	        DECLARE @iLoop     INT
	        DECLARE @PrintText VARCHAR(255)
	        DECLARE @iErrNum   INT
	
	        /*   Check for no Resultsets - needed to get the RETURN value back */ 
	        IF @R1Num + @R2Num = 0 SELECT NULL
	
	        /*   Resultset 1  ******************************* */ 
	
	        IF @R1Num > 0
	        BEGIN
	           SET ROWCOUNT @R1Num
	           SELECT 'Resultset 1' RsNum, Title
	           FROM Pubs..Titles
	           SET ROWCOUNT 0
	        END
	
	           /* Must raise a default error context in which to return the PRINT */ 
	          /*  statement */ 
	         /* (if none present) since PRINT statements are a severity level of */ 
	        /*0. */ 
	        IF (@P1Num > 0) AND (@E1Num = 0) RAISERROR ("RAISERROR.PError1",
	           11, 2)
	
	        IF @P1Num > 0
	        BEGIN
	           SELECT @iLoop = 0
	           WHILE @iLoop < @P1Num
	           BEGIN
	              SELECT @iLoop = @iLoop + 1
	              SELECT @PrintText = 'PRINT.Resultset.1: Line ' +
	        CONVERT(char(2), @iLoop)
	           PRINT @PrintText
	          END
	        END
	
	        IF @E1Num > 0
	        BEGIN
	           SELECT @iLoop = 0
	           WHILE @iLoop < @E1Num
	           BEGIN
	              SELECT @iLoop = @iLoop + 1
	              SELECT @iErrNum = @iLoop + 201000
	              RAISERROR ("RAISERROR.Resultset.1", 11, 2)
	           END
	        END
	
	        /*   Resultset 2  ******************************* */ 
	
	        IF @R2Num > 0
	        BEGIN
	           SET ROWCOUNT @R2Num
	           SELECT 'Resultset 2' RsNum, Title
	           FROM Pubs..Titles
	           SET ROWCOUNT 0
	        END
	
	        /* Must raise a default error context in which to return the PRINT */ 
	        /*  statement */ 
	        /* (if none present) since PRINT statements are a severity level of */ 
	        /*  0. */ 
	        IF (@P2Num > 0) AND (@E2Num = 0) RAISERROR ("RAISERROR.PError2",
	        11, 2)
	
	        IF @P2Num > 0
	        BEGIN
	           SELECT @iLoop = 0
	           WHILE @iLoop < @P2Num
	           BEGIN
	              SELECT @iLoop = @iLoop + 1
	              SELECT @PrintText = 'PRINT.Resultset.2: Line ' +
	         CONVERT(char(2), @iLoop)
	              PRINT @PrintText
	           END
	        END
	
	        IF @E2Num > 0
	        BEGIN
	           SELECT @iLoop = 0
	           WHILE @iLoop < @E2Num
	           BEGIN
	              SELECT @iLoop = @iLoop + 1
	
	              SELECT @iErrNum = @iLoop + 202000
	              RAISERROR ("RAISERROR.Resultset.2", 11, 2)
	           END
	        END
	
	        /*   Return & Output ************************************ */ 
	        
	        select @SetRtn = -1
	        RETURN @SetRtn
	        GO
	
	2. Create a Standard .EXE project in Visual Basic. Form1 is created by default.
	
	3. From the Project menu, choose References and select the Microsoft ActiveX
	  Data Objects Library.
	
	NOTE: You must use ADO version 2.0 or later for the code to work correctly. You
	can obtain the latest Microsoft Data Access Components (MDAC) components on the
	Web at the following URL:
	
	  http://www.microsoft.com/data/
	
	4. Place a Command button on the Form, and then paste the following code in the
	  General Declarations section of the Form:
	
	NOTE: You may need to change the database connect string for your environment.
	
	        'This Code demonstrates RAISERROR/PRINT/RETURN values with ADO and
	        'multiple resultsets.
	
	        Sub CreateParms()
	
	        Dim ADOCmd As New ADODB.Command
	        Dim ADOPrm As New ADODB.Parameter
	        Dim ADOCon As ADODB.Connection
	        Dim ADORs As ADODB.Recordset
	        Dim sParmName As String
	        Dim strConnect As String
	        Dim rStr As String
	
	        On Error GoTo ErrHandler
	
	        strConnect = "driver={SQL
	          Server};server=(local);uid=sa;pwd=;database=pubs"
	
	        Set ADOCon = New ADODB.Connection
	        With ADOCon
	            .Provider = "MSDASQL"
	            .CursorLocation = adUseServer  'Must use Server side cursor.
	            .ConnectionString = strConnect
	            .Open
	        End With
	
	        Set ADOCmd.ActiveConnection = ADOCon
	        With ADOCmd
	            .CommandType = adCmdStoredProc
	            .CommandText = "ADOTestRPE"
	        End With
	
	        'Parameter 0 is the stored procedure Return code.
	        sParmName = "Return"
	        Set ADOPrm = ADOCmd.CreateParameter(sParmName, adInteger, _
	          adParamReturnValue, , 0)
	        ADOCmd.Parameters.Append ADOPrm
	        ADOCmd.Parameters(sParmName).Value = -1
	
	        'Parameter 1 is the setting for the stored procedure Output
	        ' parameter.
	        sParmName = "Output"
	        Set ADOPrm = ADOCmd.CreateParameter(sParmName, adInteger, _
	          adParamOutput)
	        ADOCmd.Parameters.Append ADOPrm
	        ADOCmd.Parameters(sParmName).Value = 999
	
	        'Parameter 2
	        sParmName = "R1Num"     'Number of rows to return in Resultset 1.
	        Set ADOPrm = ADOCmd.CreateParameter(sParmName, adInteger, _
	          adParamInput)
	        ADOCmd.Parameters.Append ADOPrm
	        ADOCmd.Parameters(sParmName).Value = 1
	
	        'Parameter 3
	        sParmName = "P1Num"     'Number of PRINT statements in Resultset 1.
	        Set ADOPrm = ADOCmd.CreateParameter(sParmName, adInteger, _
	         adParamInput)
	        ADOCmd.Parameters.Append ADOPrm
	        ADOCmd.Parameters(sParmName).Value = 0
	
	        'Parameter 4
	        sParmName = "E1Num"     'Number of RAISERROR statements in Resultset
	                                '1.
	        Set ADOPrm = ADOCmd.CreateParameter(sParmName, adInteger, _
	          adParamInput)
	        ADOCmd.Parameters.Append ADOPrm
	        ADOCmd.Parameters(sParmName).Value = 0
	
	        'Parameter 5
	        sParmName = "R2Num"     'Number of rows to return in Resultset 2.
	        Set ADOPrm = ADOCmd.CreateParameter(sParmName, adInteger, _
	          adParamInput)
	        ADOCmd.Parameters.Append ADOPrm
	        ADOCmd.Parameters(sParmName).Value = 2
	
	        'Parameter 6
	        sParmName = "P2Num"     'Number of PRINT statements in Resultset 2.
	        Set ADOPrm = ADOCmd.CreateParameter(sParmName, adInteger, _
	          adParamInput)
	        ADOCmd.Parameters.Append ADOPrm
	        ADOCmd.Parameters(sParmName).Value = 0
	
	        'Parameter 7
	        sParmName = "E2Num"     'Number of RAISERROR statements in Resultset
	                                ' 2.
	        Set ADOPrm = ADOCmd.CreateParameter(sParmName, adInteger, _
	         adParamInput)
	        ADOCmd.Parameters.Append ADOPrm
	        ADOCmd.Parameters(sParmName).Value = 0
	
	        Set ADORs = ADOCmd.Execute
	
	        Do While (Not ADORs Is Nothing)
	            If ADORs.State = adStateClosed Then Exit Do
	            While Not ADORs.EOF
	                For i = 0 To ADORs.Fields.Count - 1
	                    rStr = rStr & " : " & ADORs(i)
	                Next i
	                Debug.Print Mid(rStr, 3, Len(rStr))
	                ADORs.MoveNext
	                rStr = ""
	            Wend
	            Debug.Print "----------------------"
	            Set ADORs = ADORs.NextRecordset
	        Loop
	
	        Debug.Print "Return: " & ADOCmd.Parameters("Return").Value
	        Debug.Print "Output: " & ADOCmd.Parameters("Output").Value
	
	        GoTo Shutdown
	
	        ErrHandler:
	            Call ErrHandler(ADOCon)
	            Resume Next
	
	        Shutdown:
	            Set ADOCmd = Nothing
	            Set ADOPrm = Nothing
	            Set ADORs = Nothing
	            Set ADOCon = Nothing
	
	        End Sub
	
	        Private Sub Command1_Click()
	
	        Call CreateParms
	
	        End Sub
	
	        Sub ErrHandler(objCon As Object)
	
	        Dim ADOErr As ADODB.Error
	        Dim strError As String
	
	        For Each ADOErr In objCon.Errors
	         strError = "Error #" & ADOErr.Number & vbCrLf & ADOErr.Description _
	            & vbCr & _
	             "   (Source: " & ADOErr.Source & ")" & vbCr & _
	             "   (SQL State: " & ADOErr.SQLState & ")" & vbCr & _
	             "   (NativeError: " & ADOErr.NativeError & ")" & vbCr
	         If ADOErr.HelpFile = "" Then
	             strError = strError & "   No Help file available" & vbCr & vbCr
	         Else
	             strError = strError & "   (HelpFile: " & ADOErr.HelpFile & ")" _
	         & vbCr & _
	                         "   (HelpContext: " & ADOErr.HelpContext & ")" & _
	         vbCr & vbCr
	         End If
	         Debug.Print strError
	        Next
	
	        objCon.Errors.Clear
	
	        End Sub
	
	5. Change the value of parameters two through seven to alter the number of PRINT
	  statements and/or RAISERROR statements generated by the stored procedure and
	  returned through ADO. Run the Visual Basic code sample again and note that
	  the RAISERROR and PRINT statements are returned through the ADO errors
	  collection. Change the values to experiment with different combinations of
	  PRINT/RAISERROR statements with different resultsets. Please refer to the SQL
	  stored procedures for specific workarounds for special cases.
	
	  NOTE: To retrieve a RETURN value in ADO with a stored procedure there must be
	  at least one resultset. In order to work around this problem, when no
	  resultsets are specified (in the ADO sample code) the stored procedure
	  executes a SELECT NULL to return a null resultset to ADO thereby populating
	  the RETURN value. In addition, to work around the issue of specifying no
	  RAISERROR statements and a combination of PRINT statements, default RAISERROR
	  statements are generated in order to provide a context for returning the
	  PRINT statement via ADO. You must code RAISERROR statements in the format
	  shown in the stored procedure because only severity levels of 11-18 return
	  through the ADO errors collection.
	
	REFERENCES
	==========
	
	Transact-SQL Help: search on: "PRINT/RAISERROR statement"
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q190988 HOWTO: Open ADO Recordsets Asynchronously Using WithEvents
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbADO200 kbDatabase kbPrinting kbSQLServ kbStoredProc kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC250 kbADO250 kbMDAC260 kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO200 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbADO270
	Version           : :2.0,2.1 SP2,2.5,2.6,2.7,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
