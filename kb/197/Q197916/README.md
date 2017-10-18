---
layout: page
title: "Q197916: HOWTO: Use GUIDs with Access,SQL 6.5 and SQL 7"
permalink: kb/197/Q197916/
---

## Q197916: HOWTO: Use GUIDs with Access,SQL 6.5 and SQL 7

	Article: Q197916
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.5,2.0,2.1 SP2,2.5,2.6,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbtophit kbAccess kbADO200 kbDatabase kbSQLServ kbVBp500 kbVBp600 kbGrpDSMDAC kb
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Data Access Components versions 1.5, 2.0, 2.1 SP2, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	AdoGUIDz.exe is a self-extracting executable that contains a sample project that
	demonstrates using the globally unique identifier datatype (GUID) with Microsoft
	Access, SQL 6.5 and SQL 7.0. The sample code may be particularly helpful if you
	are attempting to manipulate GUIDs with ODBC versions 3.51 and below because
	those versions of ODBC do not support a native GUID datatype. ODBC versions 3.6
	and above include the GUID datatype. Consequently, the methods for manipulating
	GUIDs with ODBC 3.6 are simpler.
	
	NOTE: SQL 6.5 does not support a native GUID datatype so in order to
	store/retrieve GUIDs in SQL 6.5 you must use the VarBinary datatype and Byte
	Arrays.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Adoguidz.exe
	  (http://download.microsoft.com/download/vb60pro/sample/1/WIN98/EN-US/Adoguidz.exe)
	
	Release Date: DEC-29-1998
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	  FileName                  Size
	  ---------------------------------------------------------
	
	  AdoGUID.bas                 3KB
	  AdoGUID.exe                60KB
	  AdoGUID.frm                25KB
	  AdoGUID.frx                 1KB
	  AdoGUID.mdb                80KB
	  AdoGUID.vbp                 2KB
	  Readme.txt                  4KB
	
	Microsoft Access has a ReplicationID AutoNumber field that is a 16-byte (128 bit)
	Globally Unique Identifier (GUID) that uniquely identifies each record in the
	database. Please reference the sample project for the code that demonstrates how
	to SELECT specific GUIDs and Insert GUIDs using the AutoNumber field with
	Microsoft Access. The following function is a code snippet from the sample that
	demonstrates how to SELECT a specific GUID from an Access table using Microsoft
	ActiveX Data Objects (ADO):
	
	Sample Code
	-----------
	
	     Sub AccessReQueryADO()
	
	     On Error GoTo ErrorMessage
	
	     Dim adoCn As adoDb.Connection
	     Dim adoRs As adoDb.Recordset
	     Dim strCn As String
	     Dim strSQL As String
	
	     strCn = App.Path & "\adoGUID.mdb"
	
	     Set adoCn = New adoDb.Connection
	     With adoCn
	         .Provider = "Microsoft.JET.OLEDB.3.51"
	         .CommandTimeout = 500
	         .ConnectionTimeout = 500
	         .Open strCn, "admin", ""
	     End With
	
	     If Option7.Value = True Then
	         strSQL = "SELECT * FROM GUIDtable WHERE " & _
	                  "Instr(1,[colGUID],'" & strGUID & "')"
	     Else
	         strSQL = "SELECT * FROM GUIDtable"
	     End If
	
	     Set adoRs = New adoDb.Recordset
	     With adoRs
	         Set .ActiveConnection = adoCn
	         .LockType = adLockOptimistic
	         .CursorLocation = adUseServer
	         .CursorType = adOpenForwardOnly
	     End With
	
	     adoRs.Open strSQL
	
	     txtMessage.Text = ""
	
	     While Not adoRs.EOF
	         txtMessage.Text = txtMessage.Text & _
	                           adoRs.Fields("colGUID").Value & "  |  "
	         txtMessage.Text = txtMessage.Text & _
	                           adoRs.Fields("colDescription").Value & vbCrLf
	         adoRs.MoveNext
	     Wend
	
	     GoTo ExitSub
	
	     ErrorMessage:
	         MsgBox Err.Number & " : " & vbCrLf & Err.Description
	
	     ExitSub:
	         Label6.Caption = "- ReQueried AccessADO GUID Table..."
	         Set adoCn = Nothing
	         Set adoRs = Nothing
	
	     End Sub
	
	Unlike SQL 6.5, SQL 7.0 supports a GUID datatype known as UNIQUEIDENTIFIER. This
	datatype is a 16-byte GUID stored in the same format as the Microsoft Access
	AutoNumber (GUID) datatype. There are subtle differences concerning how to
	Insert and Retrieve the GUIDs among the different database engines. Since SQL
	6.5 does not support a native GUID datatype the methods used for
	storing/retrieving GUIDs are much different than SQL 7.0 or Microsoft Access.
	SQL 7.0 with the OLEDB provider is almost the same as Microsoft Access with or
	without the OLEDB provider (SQLOLEDB), as you will see in the sample code. With
	SQL 6.5 you must store the GUID as a VarBinary(16) datatype. Consequently, to
	retrieve the GUID with SQL65 you must use a stored procedure and build a Command
	object with the appropriate ByteArray parameter to pass to the stored procedure
	SELECT statement.
	
	NOTE: You must use the same code techniques with SQL 7.0 as with SQL 6.5 if you
	are using the ODBC provider (MSDASQL) since in ODBC 3.51 and below the GUID
	datatype is not recognized.
	The 16-byte (128 bit) data structure of a GUID:
	
	     typedef struct _GUID
	     {
	         unsigned long        Data1;
	         unsigned short       Data2;
	         unsigned short       Data3;
	         unsigned char        Data4[8];
	     } GUID;
	
	  * Data1
	  An unsigned long integer data value.
	  * Data2
	  An unsigned short integer data value.
	  * Data3
	  An unsigned short integer data value.
	  * Data4
	  An array of unsigned characters.
	
	To demonstrate GUIDs with SQL 7.0 or SQL 6.5 in the sample project you must
	specify a valid (test) SQL 7.0/SQL 6.5 server and database. To do so, navigate
	to the Connection Info tab and change the Server and Database reference. The
	defaults are (local) Server and the Pubs database. Also, to use the native GUID
	datatype for SQL 7.0, you must change to the OLEDB provider (SQLOLEDB) by
	clicking the appropriate option button in the Provider frame at the top of the
	Form. If you select ODBC as the provider for SQL 7.0 then the application uses
	the same code as with SQL 6.5.
	
	NOTE: The Connection Info tab has no bearing on Microsoft Access. The default
	database for Microsoft Access is included with the sample project AadoGUID.mdb
	as should reside in the Application path.
	
	For each database you select in the sample project you must run Create Table to
	create the GUID test table and then Insert to automatically generate some test
	GUID data before running a ReQuery.
	
	NOTE: CoCreateGUID() is called in the Insert sample code to generate the test
	GUID values.
	
	In the sample application there is a ByteArray2GUID() function that is used to
	convert the VarBinary(16) byte array to a GUID string for display. Also, the
	function is used to convert the GUID string to a byte array for storage in the
	SQLServer VarBinary(16) datatype column. Note that the function is needed when
	using the GUIDs interchangeably between Microsoft Access and SQL 6.5. If you
	Export the Microsoft Access table to SQL 6.5 you will see that the bytes are not
	stored in the same order in which they display in the Microsoft Access table
	view. For example:
	
	    Reversed...        Not Reversed...
	  >----------------<|>---------------<
	  20C68F83-9593-0011-BFBB-00C04F8F8347 'SQLServer view after table Export.
	  838FC620-9395-1100-BFBB-00C04F8F8347 'Microsoft Access view.
	
	NOTE: The bytes are in (DWord and Word) reverse order after Exporting the
	Microsoft Access table.
	
	Because the Microsoft Access Upsizing Wizard results in the same storage of the
	bytes in SQL 6.5, you must use the ByteArray2GUID() and GUID2ByteArray()
	functions to remain compatible with the storage of the GUIDs in Microsoft
	Access. If you do not need to Export the Microsoft Access table to SQL 6.5 or
	upsize the Microsoft Access database to SQL 6.5 then you need only store the
	bytes in a straightforward fashion.
	
	The following is a code snippet from the code sample that demonstrates the
	storage of the GUID in the byte format of Microsoft Access.
	
	Sample Code
	-----------
	
	     Sub SQL65InsertGUID()
	
	     'Insert GUID record.
	     On Error GoTo ErrorMessage
	
	     Dim adoCn As adoDb.Connection
	     Dim adoRs As adoDb.Recordset
	     Dim strGUIDtmp As String
	     Dim bytGUID() As Byte
	     Dim strCn As String
	     Dim strSQL As String
	
	     strCn = "Provider=" & strProvider & _
	             ";Driver={SQL Server}" & _
	             ";Server=" & txtServer & _
	             ";Database=" & txtDatabase & _
	             ";Uid=" & txtUserID & _
	             ";Pwd=" & txtPassword
	
	     Set adoCn = New adoDb.Connection
	     With adoCn
	         .ConnectionString = strCn
	         .CommandTimeout = 500
	         .ConnectionTimeout = 500
	         .Open
	     End With
	
	     strGUIDtmp = strGUID
	
	     bytGUID = GUID2ByteArray(FilterGUID(strGUIDtmp))
	
	     strSQL = "SELECT * FROM GUIDtable WHERE 1=0"
	
	     Set adoRs = New adoDb.Recordset
	     With adoRs
	        Set .ActiveConnection = adoCn
	        .LockType = adLockOptimistic
	        .CursorLocation = adUseServer
	        .CursorType = adOpenForwardOnly
	     End With
	
	     adoRs.Open strSQL
	
	     adoRs.AddNew
	     adoRs.Fields("colGUID").Value = bytGUID
	     adoRs.Fields("colDescription").Value = "This is a test GUID"
	     adoRs.Update
	
	     GoTo ExitSub
	
	     ErrorMessage:
	        MsgBox Err.Number & " : " & vbCrLf & Err.Description
	
	     ExitSub:
	        Label6.Caption = "[ASCII 176] Inserted SQL65 GUID Record..."
	        Set adoCn = Nothing
	        Set adoRs = Nothing
	
	     End Sub
	
	     '======================
	     Function GUID2ByteArray(ByVal strGUID As String) As Byte()
	
	     Dim i As Integer
	     Dim j As Integer
	     Dim sPos As Integer
	     Dim OffSet As Integer
	     Dim sGUID(0 To 2) As Byte
	     Dim bytArray() As Byte
	
	     ReDim bytArray(0 To 15) As Byte
	
	     sGUID(0) = 7
	     sGUID(1) = 11
	     sGUID(2) = 15
	
	     OffSet = 0
	     sPos = 0
	
	     'AABBCCDD-AABB-CCDD-XXXX-XXXXXXXXXXXX 'Microsoft Access view.
	     'DDCCBBAA-BBAA-DDCC-XXXX-XXXXXXXXXXXX 'SQLServer view.
	     'Need to loop through to build the GUID byte array in the Microsoft
	     'Access storage format since the first eight bytes are reversed.
	     For i = 0 To UBound(sGUID)
	        For j = sGUID(i) To (OffSet + 1) Step -2
	           bytArray(sPos) = "&H" & Mid$(strGUID, j, 2)
	           sPos = sPos + 1
	        Next j
	        OffSet = sGUID(i)
	     Next i
	
	     For i = 17 To 31 Step 2
	        bytArray(sPos) = "&H" & Mid$(strGUID, i, 2)
	        sPos = sPos + 1
	     Next i
	
	     GUID2ByteArray = bytArray()
	
	     End Function
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q176790 : HOWTO: Use CoCreateGUID API to Generate a GUID with VB
	
	Microsoft SQL 7.0 Books Online; search on: "UNIQUEIDENTIFIER"
	
	Microsoft SQL 6.5 Books Online; search on: "VarBinary"
	
	Microsoft Access Help; search on: "ReplicationID - AutoNumber field"
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Mark S. Miller, Microsoft Corporation
	
	
	Additional query words: Adoguidz
	
	======================================================================
	Keywords          : kbfile kbtophit kbAccess kbADO200 kbDatabase kbSQLServ kbVBp500 kbVBp600 kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC250 kbADO250 kbMDAC260 kbADO260 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbMDACSearch kbMDAC150 kbMDAC200 kbMDAC210SP2 kbMDAC250 kbMDAC260
	Version           : :1.5,2.0,2.1 SP2,2.5,2.6,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
