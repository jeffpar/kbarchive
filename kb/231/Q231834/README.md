---
layout: page
title: "Q231834: PRB: ADO to SQL w/ ODBC Not Supporting adAsyncFetchNonBlocking"
permalink: kb/231/Q231834/
---

## Q231834: PRB: ADO to SQL w/ ODBC Not Supporting adAsyncFetchNonBlocking

	Article: Q231834
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1 SP2,2.5,2.6,2.7,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO260fix kbADO210sp2 kbADO250 kbMDAC26
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- ActiveX Data Objects (ADO), versions 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to use ActiveX Data Objects (ADO) to access SQL Server databases
	through the ODBC provider (MSDASQL), you will receive the following error if you
	specify adAsyncFetchNonBlocking with Server-side cursors:
	
	  -2147217890 lRowsOffset would position you past either end of the rowset,
	  regardless of the cRows value specified; cRowsObtained is 0.
	
	The following error is returned from ADO 2.5:
	
	  -2147217890 No rows were returned because the offset value moves the position
	  before the beginning or after the end of the rowset.
	
	NOTE: If you are using the SQLOLEDB provider you will not see this error message.
	However, fetching is still not supported for the cursor and it is blocked until
	the cursor is fully populated.
	
	CAUSE
	=====
	
	The adAsyncFetchNonBlocking recordset option is not supported with a Server
	cursor. Additional enhancements would be required for the server and client in
	order to implement this feature. The two way communication necessary to support
	adAsyncFetchNonBlocking with a server cursor is not available at this time.
	
	RESOLUTION
	==========
	
	adAsyncFetchNonBlocking is only supported with a Client cursor when you use 2.5
	or earlier versions of MDAC.
	
	STATUS
	======
	
	MDAC 2.6 supports adAsyncFetchNonBlocking for server side cursors. Earlier
	versions of MDAC do not support this.
	
	MORE INFORMATION
	================
	
	Step to Reproduce Behavior
	--------------------------
	
	1. Paste the following code into SQL Server's ISQL_w or Query Analyzer Utility.
	  Select a database with at least 2.5 MB of free space and execute the code.
	  This code creates the test table and populates it with data.
	
	  create table adoAsyncTest
	  (
	  	col1 int identity(1,1) primary key,
	  	col2 varchar(255),
	  	col3 varchar(255)
	  )
	  go
	  set nocount on
	  declare @iCnt int
	  select @iCnt=1
	  while @iCnt < 5001
	  begin
	  	insert into adoAsyncTest values('my test data col1', 'my test data col2')
	  	select @iCnt = @iCnt + 1
	  end
	
	2. Open Visual Basic and create a new Standard EXE Project. Form1 is created by
	  default.
	
	3. Add a reference to the Microsoft ActiveX Data Objects 2.x Library.
	
	4. Paste the following code into the General Declarations section of the form:
	
	  Option Explicit
	
	  Private WithEvents adoCn As ADODB.Connection
	  Private WithEvents adoRs As ADODB.Recordset
	  Private adoErr As Errors
	
	  Private Sub Form_Load()
	
	  Dim strConnect As String
	  strConnect = "Driver={SQL Server};Server=<ServerName>;User ID=<UserID>;Password=<Password>;Initial Catalog=<Database>"
	
	  Set adoCn = New ADODB.Connection
	  With adoCn
	      '.Provider = "SQLOLEDB"
	      .ConnectionString = strConnect
	      .Open
	  End With
	
	  Set adoRs = New ADODB.Recordset
	  With adoRs
	      Set .ActiveConnection = adoCn
	      .CursorLocation = adUseServer 'adUseClient
	      .CursorType = adOpenStatic
	      .LockType = adLockReadOnly
	      .Open "SELECT * FROM adoAsyncTest", , , , (adCmdText + adAsyncFetchNonBlocking)
	  End With
	
	  Debug.Print "Executing Async..."
	
	  End Sub
	
	  Private Sub adoCn_ExecuteComplete(ByVal RecordsAffected As Long, ByVal pError As ADODB.Error, adStatus As ADODB.EventStatusEnum, ByVal pCommand As ADODB.Command, ByVal pRecordset As ADODB.Recordset, ByVal pConnection As ADODB.Connection)
	
	  Debug.Print "---------Execute Complete---------"
	  Debug.Print "RecordCount = " & adoRs.RecordCount
	
	  End Sub
	
	  Private Sub adoRs_FetchComplete(ByVal pError As ADODB.Error, adStatus As ADODB.EventStatusEnum, ByVal pRecordset As ADODB.Recordset)
	
	  Debug.Print "---------Fetch Complete---------"
	
	  End Sub
	
	  Private Sub adoRs_FetchProgress(ByVal Progress As Long, ByVal MaxProgress As Long, adStatus As ADODB.EventStatusEnum, ByVal pRecordset As ADODB.Recordset)
	
	  Debug.Print "Fetch Progress = " & pRecordset.RecordCount
	
	  End Sub
	
	5. Run the project. Do not step through the project, as stepping will change the
	  behavior.
	
	6. Change the CursorLocation to adUseClient to resolve the error.
	
	NOTE: You can use adAsyncExecute with a Server cursor, which enhances the
	responsiveness of your application. Using adAsyncExecute enables your
	application to perform other tasks while waiting on the server cursor to
	populate. However, you will not be able to use the recordset until an
	ExecuteComplete event fires, which indicates the server cursor is fully
	populated. With a Client cursor, you get more flexibility in async mode and you
	can check the Fetch progress of the cursor population as the rows are fetched to
	the client cursor.
	
	REFERENCES
	==========
	
	For more information, see the following article in the Microsoft Knowledge
	Base:
	
	  Q190606 PRB: QueryTimeout Event Not Available
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO260fix kbADO210sp2 kbADO250 kbMDAC260 kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbADO270
	Version           : :2.1 SP2,2.5,2.6,2.7,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
