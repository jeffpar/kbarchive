---
layout: page
title: "Q240317: HOWTO: Implement Multiuser Custom Counters in Jet 4.0 &amp; ADO 2.1"
permalink: /kb/240/Q240317/
---

## Q240317: HOWTO: Implement Multiuser Custom Counters in Jet 4.0 &amp; ADO 2.1

{% raw %}

	Article: Q240317
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.1 SP1,2.1 SP2,2.5,2.6,5.0,6.0
	Operating System(s): 
	Keyword(s): kbClient kbDatabase kbJET kbOLEDB kbGrpDSVBDB kbDSupport kbADO250 kbADO260 kbATM
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- ActiveX Data Objects (ADO), versions 2.1 SP1, 2.1 SP2, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because the Microsoft Jet database engine has a read cache and lazy writes, you
	can get duplicate values in your custom counter field if two applications add
	records in less time than it takes for the cache to refresh and the lazy-write
	mechanism to flush to disk. This article presents a method that takes these
	factors into account.
	
	MORE INFORMATION
	================
	
	The Microsoft Jet database engine provides a Counter (AutoIncrement) field.
	Starting with Jet 4.0, you can specify a starting value and an increment value.
	This solves most of the need for using a custom counter that users of earlier
	versions of Jet had. However, if your counter is a text value or does not
	increase in a fixed amount, the steps outlined in this article may benefit your
	application.
	
	Microsoft Jet has a read-cache that is updated every PageTimeout milliseconds
	(default is 5000ms = 5 seconds). It also has a lazy-write mechanism that
	operates on a separate thread to main processing and thus writes changes to disk
	asynchronously. These two mechanisms help boost performance, but in certain
	situations that require high concurrency, they may create problems.
	
	The Microsoft Jet 4.0 OLEDB provider and the Microsoft Jet and Replication
	Objects type library provide two methods to ensure that your application has
	current data:
	
	- JetEngine object's RefreshCache method.
	
	- "Jet OLEDB:Transaction Commit Mode" Connection property.
	
	JetEngine object's RefreshCache Method
	--------------------------------------
	
	There is a separate read-cache for each connection object. Calling the
	RefreshCache method of the JetEngine object, as exposed by the Microsoft Jet and
	Replication Objects type library, immediately refreshes the read-cache for the
	Connection objects passed as a method argument. The read-cache for all other
	Connection objects in the application are not affected.
	
	"Jet OLEDB:Transaction Commit Mode" Connection Property
	-------------------------------------------------------
	
	In Microsoft Jet 2.x and earlier, all writes were immediately committed. With
	Win32 and multi-threading, Microsoft Jet introduced a lazy-write mechanism.
	Setting this property to a value of 1 causes all transaction commits to be
	written immediately to disk for that Connection object. All other Connection
	objects are unaffected.
	
	These methods are preferable to modifying registry values to get the same effect
	because you can precisely control where you need this value and they are more
	deterministic in operation. Global registry programs will adversely affect
	engine performance in other areas and in other applications.
	
	EXAMPLE
	
	The following example provides a function for generating custom counter numbers
	and handling the concurrency and locking issues that result from the process. It
	involves the use of a second table to store the next available key value. This
	is used for performance reasons and also to avoid adversely affecting users who
	would just need to read data.
	
	The main function is NextKeyValue. It accepts three arguments:
	
	- Connection object
	
	- Table name
	
	- Increment value
	
	Increment value is optional and defaults to 1. The function opens the table using
	a server-side cursor, a transaction, and pessimistic locking and then reads the
	value from the first field of the first record. This is the key value returned.
	It then increments the value for the next user and releases the table.
	
	When you set the initial value in the table, this is the first value returned by
	the function.
	
	The error handling is designed to handle locking problems opening the table. If
	the locks time-out, the function returns -1 as the next key value. If any other
	error occurs, the function raises a run-time error that the main application
	will need to trap.
	
	Because most people leave their registry settings untouched, Microsoft Jet will
	usually have a 100ms delay between lock-retries. If all instances of Jet have
	the same delay, this could result in a race situation and cause your application
	to time-out more than is necessary. The NextKeyValue function sets the lock
	retry to a random interval between 60 and 150 milliseconds to reduce the chance
	of a race condition occurring. The test application is responsible for using the
	RANDOM statement to seed the random number generator.
	
	The test application adds 100 records to the table. It does not implement any but
	the most basic error handling to handle lock timeouts between the program and
	others like it.
	
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
	
	Database Setup
	--------------
	
	1. In Microsoft Access, open the NWind.MDB file, and create the following
	  tables:
	
	          Table: KeyStore
	     Field Name: NextValue
	           Type: Number, Long Integer
	
	     Field Name: Dummy
	           Type: Number, Long Integer
	
	          Table: KeyTest
	     Field Name: ID
	           Type: Number, Long Integer
	
	     Field Name: Description
	
	           Type: Text, 50
	
	2. Open the KeyStore table and add a record. Set NextValue to the amount from
	  which you want your counter to start. For example: 3.
	
	3. Save the record and close Microsoft Access.
	
	Test Program
	------------
	
	1. Open a new Visual Basic or Visual Basic for Applications project with a Form
	  (Form1) and a Module (Module1).
	
	2. From the Project menu, choose References and add a reference to the Microsoft
	  ActiveX Data Objects 2.1 (or later) Library and the Microsoft Jet and
	  Replication Objects 2.1 (or later) Library.
	
	3. Add the following code to the Module:
	
	  Option Explicit
	
	  Private Const MAX_RETRIES = 10
	
	  Function NextKeyValue(cn As ADODB.Connection, _
	                        ByVal TableName As String, _
	                        Optional Increment As Long = 1) As Long
	  Dim OldCommitMode As Long, rs As Recordset, ErrorCount As Long
	  Dim TempKeyValue As Long, Jet As JRO.JetEngine, InTrans As Boolean
	    NextKeyValue = -1   ' returns this if the routine times out
	    OldCommitMode = cn.Properties("Jet OLEDB:Transaction Commit Mode")
	    cn.Properties("Jet OLEDB:Transaction Commit Mode") = 1
	    cn.Properties("Jet OLEDB:Lock Delay") = 90 + Int(Rnd * 60)
	    Set rs = New ADODB.Recordset
	    Set Jet = New JRO.JetEngine
	    On Error GoTo NKV_Error
	    rs.Open TableName, cn, adOpenDynamic, adLockPessimistic, adCmdTableDirect
	    cn.BeginTrans
	    InTrans = True
	  NKV_InnerRetry:
	    If rs.EditMode Then rs.CancelUpdate
	    rs!Dummy = 0            ' lock the record
	    Jet.RefreshCache cn     ' get current data
	    TempKeyValue = rs(0)    ' .UnderlyingValue gives an error
	    rs(0) = TempKeyValue + Increment
	    rs.Update
	    InTrans = False
	    cn.CommitTrans
	    rs.Close
	    cn.Properties("Jet OLEDB:Transaction Commit Mode") = OldCommitMode
	    NextKeyValue = TempKeyValue
	    Exit Function
	    
	  NKV_Abort:
	    On Error Resume Next
	    If rs.EditMode Then rs.CancelUpdate
	    cn.RollbackTrans
	    rs.Close
	    cn.Properties("Jet OLEDB:Transaction Commit Mode") = OldCommitMode
	    Exit Function
	
	  NKV_Error:
	    Select Case Err.Number
	      Case &H80004005
	        ' Various locking errors (above)
	        ErrorCount = ErrorCount + 1
	        If ErrorCount < MAX_RETRIES Then
	          Resume NKV_Abort
	        ElseIf InTrans Then
	          Resume NKV_InnerRetry
	        Else
	          Resume
	        End If
	      Case Else   ' unhandled errors
	        Err.Raise Err.Number, Err.Source, Err.Description
	    End Select
	  End Function
	
	4. Add a command button (Command1) and a text box (Text1) to the form.
	
	5. Add the following code to the form:
	
	  Option Explicit
	
	  Dim cn As ADODB.Connection
	
	  Private Sub Command1_Click()
	  Dim SQL As String, I As Long
	    For I = 1 To 100
	      SQL = "INSERT INTO KeyTest VALUES (" & _
	            NextKeyValue(cn, "KeyStore", 10) & _
	            ",'Test Record " & Me.hWnd & " " & Time & "')"
	      On Error GoTo C1_Error
	      cn.Execute SQL, , adExecuteNoRecords
	      On Error GoTo 0
	      Text1 = CStr(I)
	      Me.Refresh
	    Next I
	    Exit Sub
	    
	  C1_Error:
	    Resume
	  End Sub
	
	  Private Sub Form_Load()
	    Randomize
	    Set cn = New ADODB.Connection
	    cn.Open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=\\moonbase\public\northwind40.mdb"
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	    cn.Close
	  End Sub
	
	6. In Visual Basic, compile the application to an EXE. Run the application from
	  multiple computers and click Command1 at the same time. It will run to
	  completion (barring any unhandled errors) and then add records without
	  duplicate ID numbers.
	
	NOTES
	-----
	
	- The KeyStore table does not require an index. You will get better performance
	  and have fewer problems if you do not add (or allow Microsoft Access to add)
	  and index or Primary Key to the table.
	
	- The fewer indexes on the KeyText table, the better. Indices have a negative
	  effect on the ability to lock and update data quickly. If you have problems
	  in your application, try reducing the number of indices.
	
	- Unlike Data Access Objects (DAO) or Remote Data Objects (RDO), ADO does not
	  have an Edit method. In order to turn on pessimistic locking, the program
	  modifies the "Dummy" field in the record to get the same effect. This field
	  has been added to the table solely for this purpose and does not contain any
	  useful information.
	
	REFERENCES
	==========
	
	For more information about Jet and ADO, please see:
	
	  Migrating from DAO to ADO and Using ADO with the Jet Provider
	
	For information on implementing a mutli-user custom counter using Microsoft Data
	Access Objects (DAO):
	
	  Q191253 HOWTO: Implement Multi-user Custom Counters in DAO 3.5
	
	Additional query words: count autonumber custom multiuser kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbClient kbDatabase kbJET kbOLEDB kbGrpDSVBDB kbDSupport kbADO250 kbADO260 kbATM 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :2.1 SP1,2.1 SP2,2.5,2.6,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
