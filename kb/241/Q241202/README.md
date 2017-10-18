---
layout: page
title: "Q241202: HOWTO: Make a Manufactured Hierarchical Recordset from Another"
permalink: kb/241/Q241202/
---

## Q241202: HOWTO: Make a Manufactured Hierarchical Recordset from Another

	Article: Q241202
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbADO210 kbMDAC kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbADO250 kbADO2
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some corporate policies only allow read-access to database tables with all
	updates being performed through stored procedures. If you want to bind a data
	control, such as the Hierarchical Flex Grid or List View control to a
	hierarchical recordset, this can pose a problem keeping the recordset in sync
	with the data if you allow adding, deleting, and modifying records, but you
	cannot edit it directly through the hierarchical recordset.
	
	MORE INFORMATION
	================
	
	If you want to keep a hierarchical recordset in sync with the server, but you
	cannot add records via the hierarchical recordset, there are a number of
	workarounds:
	
	1. You can requery the recordset. This has the disadvantage of poor performance.
	
	2. You can disconnect the recordset and perform additions and other
	  modifications in parallel with stored procedures. The problem is that certain
	  fields are read-only, such as Identity and TimeStamp, and you cannot set
	  their value. This becomes problematic if the Identity column in the parent
	  record is used to link the child recordset(s) or is supplied to the stored
	  procedures to identify the record to be updated, or if the TimeStamp column
	  is passed to the stored procedure to determine if someone else has editied
	  the record in the mean-time. There are a number of workarounds:
	
	  a. You can copy the data to a local database, such as a Jet MDB, and use
	     datatypes that do not make the field read-only. You can then update the
	     hierarchical recordset in parallel to using stored procedures and keep the
	     data in sync.
	
	  b. You can manufacture a hierarchical recordset based on the original and
	     copy the data into it. The fields will all be updatable and you can update
	     the recordset in parallel to using stored procedures.
	
	This article provides sample code for the latter workaround. It is generic enough
	to work with any hierarchical recordset as long as it (a) is not parameterized,
	and (b) doesn't use the COMPUTE or BY keywords. If you need either of these
	features, you should copy the data to a local database and manipulate from
	there.
	
	The article provides the following functions:
	
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Function Name        | Description                                                                                                                                                                                                                                                                                                                                                    | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| GenerateShapeSQL     | Generates a SHAPE statement given an open hierarchical recordset. The syntax it generates is different from the usual SHAPE syntax, in that it does not get the field names and data types from the back-end data provider. For more on this syntax, see the following Knowledge Base article:
	Q196029 HOWTO: Create Hierarchical Recordsets Programmatically | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| GenerateRelateClause | Generates a RELATE clause based on the field numbers specified in the RELATIONCONDITIONS property of the Chapter field. This function is used by GenerateShapeSQL.                                                                                                                                                                                             | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| TypeName             | Returns the text representation of a field's data type with optional size information in parentheses. The implementation given in the article does not cover all data types - most notably absent are adNumeric and adDecimal. This function is used by GenerateShapeSQL.                                                                                      | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| CopyData             | This is a recursive copy function which copies data from one recordset to another. It calls itself recursively to copy child recordset data.                                                                                                                                                                                                                   | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	The sample application has the following steps:
	
	1. It opens a hierarchical recordset.
	
	2. It calls GenerateShapeSQL to provide a SHAPE statement to open an
	  equivalently structured hierarchical recordset that is not based on any
	  provider and hence does not have any read-only fields.
	
	3. It calls CopyData to copy the data from the original recordset into the
	  manufactured recordset.
	
	4. It closes the original recordset.
	
	5. It binds the Hierarchical Flex Grid to the manufactured recordset.
	
	NOTE: The code does not provide samples of updating the server table and making
	equivalent changes to the manufactured recordset. This is left as an exercise
	for the reader since the manufactured recordset is now in a state to make this
	possible.
	
	Sample Application
	------------------
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	1. Open a new project in Microsoft Visual Basic 6.
	
	2. Using the Projects | Components menu, select the "Microsoft Hierarchical
	  FlexGrid 6.0 (OLEDB)" control and place it on the form. Make it fairly large.
	
	3. Using the Projects | References menu, select "Microsoft ActiveX Data Objects
	  Library".
	
	4. Add the following code to the form module:
	
	  Option Explicit
	
	  Dim rsManufactured As ADODB.Recordset
	
	  Private Sub Form_Load()
	  Dim cn As ADODB.Connection, rsSource As ADODB.Recordset, SQL As String
	  '
	  ' Get original data
	  '
	    Set cn = New ADODB.Connection
	    Set rsSource = New ADODB.Recordset
	    cn.Open "Provider=MSDATASHAPE;Data Provider=SQLOLEDB;Data Source=MyServer;User ID=xxx;Password=yyy;Initial Catalog=Northwind;"
	    rsSource.CursorLocation = adUseClient
	    rsSource.Open "SHAPE {SELECT * FROM Customers} APPEND ({SELECT * FROM Orders} RELATE CustomerID TO CustomerID)", _
	                  cn, adOpenStatic, adLockOptimistic, adCmdText
	  '
	  ' Generate SHAPE statement for manufactured recordset
	  '
	    SQL = GenerateShapeSQL(rsSource)
	  '
	  ' Build manufactured recordset
	  '
	    Set cn = New ADODB.Connection
	    Set rsManufactured = New ADODB.Recordset
	    cn.Open "Provider=MSDATASHAPE;Data Provider=none"
	    rsManufactured.Open SQL, cn, adOpenStatic, adLockOptimistic
	    CopyData rsSource, rsManufactured
	    rsSource.Close
	    Set rsSource = Nothing
	    Set cn = Nothing
	  '
	  ' Bind manufactured recordset
	  '
	    Set MSHFlexGrid1.DataSource = rsManufactured
	  End Sub
	
	  Private Function GenerateShapeSQL(rs As ADODB.Recordset, Optional ByVal Level As Long = 0) As String
	  Dim FieldList As String, SQL As String, I As Long, F As ADODB.Field
	  '
	  ' SQL Prefix
	  '
	    If Level = 0 Then
	      SQL = "SHAPE APPEND "
	    Else
	      SQL = ", ((SHAPE APPEND "
	    End If
	  '
	  ' Add fields
	  '
	    FieldList = ""
	    For Each F In rs.Fields
	      If F.Type = adChapter Then
	        FieldList = FieldList & GenerateShapeSQL(F.Value, Level + 1) & ") AS [" & F.Name & "] " & _
	                    GenerateRelateClause(F, rs) & ")"
	      Else
	        FieldList = FieldList & ", New " & TypeName(F) & " AS [" & F.Name & "]"
	      End If
	    Next F
	  '
	  ' SQL Suffix
	  '
	    GenerateShapeSQL = SQL & Mid$(FieldList, 3)
	  End Function
	
	  Private Function GenerateRelateClause(F As ADODB.Field, rsParent As ADODB.Recordset) As String
	  Dim I As Long, FieldInfo() As Byte, FieldList As String, rsChild As ADODB.Recordset
	    FieldInfo = F.Properties("RELATIONCONDITIONS").Value
	    Set rsChild = F.Value
	    For I = 0 To UBound(FieldInfo) - 11 Step 12
	      FieldList = FieldList & ", [" & rsParent(FieldInfo(I) - 1).Name & "] To [" & rsChild(FieldInfo(I + 4) - 1).Name & "]"
	    Next I
	    GenerateRelateClause = "RELATE" & Mid$(FieldList, 2)
	  End Function
	
	  Private Function TypeName(ByVal F As ADODB.Field) As String
	  '
	  ' Returns the text name of the field type and optional size specification
	  '
	    Select Case F.Type
	      Case adBinary
	        TypeName = "adBinary(" & F.DefinedSize & ")"
	      Case adBoolean
	        TypeName = "adBoolean"
	      Case adChar
	        TypeName = "adChar(" & F.DefinedSize & ")"
	      Case adCurrency
	        TypeName = "adCurrency"
	      Case adDBTimeStamp
	        TypeName = "adDBTimeStamp"
	      Case adDouble
	        TypeName = "adDouble"
	      Case adInteger
	        TypeName = "adInteger"
	      Case adLongVarBinary
	        TypeName = "adLongVarBinary"
	      Case adLongVarChar
	        TypeName = "adLongVarChar"
	      Case adLongVarWChar
	        TypeName = "adLongVarWChar"
	      Case adNumeric
	        TypeName = "adNumeric"
	      Case adSingle
	        TypeName = "adSingle"
	      Case adSmallInt
	        TypeName = "adSmallInt"
	      Case adTinyInt
	        TypeName = "adTinyInt"
	      Case adUnsignedTinyInt
	        TypeName = "adUnsignedTinyInt"
	      Case adVarBinary
	        TypeName = "adVarBinary (" & F.DefinedSize & ")"
	      Case adVarChar
	        TypeName = "adVarChar (" & F.DefinedSize & ")"
	      Case adVarWChar
	        TypeName = "adVarWChar(" & F.DefinedSize & ")"
	      Case adWChar
	        TypeName = "adWChar(" & F.DefinedSize & ")"
	      Case Else
	        MsgBox "UnKnown Field Type: " & F.Name & ", " & F.Type
	    End Select
	  End Function
	
	  Private Sub CopyData(rsSource As ADODB.Recordset, rsDest As ADODB.Recordset)
	  '
	  ' Copies all data from rsSource to rsDest
	  '
	  Dim I As Long
	    Do While Not rsSource.EOF
	      ' add record copy standard field values
	      rsDest.AddNew
	      For I = 0 To rsSource.Fields.Count - 1
	        If rsSource(I).Type <> adChapter Then
	          rsDest(I).Value = rsSource(I).Value
	        End If
	      Next I
	      rsDest.Update
	      ' call CopyData recursively for each child recordset
	      For I = 0 To rsSource.Fields.Count - 1
	        If rsSource(I).Type = adChapter Then CopyData rsSource(I).Value, rsDest(I).Value
	      Next I
	      rsSource.MoveNext
	    Loop
	  End Sub
	
	5. Modify the connect string in the Form_Load procedure and run the project. The
	  customers data will be displayed in the grid. If you scroll to the right, you
	  will be able to see the order records for each customer.
	
	NOTE: If you put the functions in a .bas module, remove the Private keyword from
	the function declaration.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO210 kbMDAC kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbADO250 kbADO260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : WINDOWS:2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
