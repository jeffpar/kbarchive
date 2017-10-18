---
layout: page
title: "Q252350: PRB: Err Message: &quot;Runtime Error -2147217885 (80040e23) : A ...&quot;"
permalink: kb/252/Q252350/
---

## Q252350: PRB: Err Message: &quot;Runtime Error -2147217885 (80040e23) : A ...&quot;

	Article: Q252350
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:2.0,2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbADO250 kbMDAC260 kbADO260
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an optimistic batch update operation, if you try to access the Value property
	for a field that is in a record marked for deletion, when you set the
	disconnected recordset's Filter property to adFilterPendingRecords the following
	run-time error message occurs:
	
	  Run-time error '-2147217885(8004e23)' : A given HROW referred to a hard- or
	  soft-deleted row.
	
	CAUSE
	=====
	
	When a record is deleted in a disconnected ADO Recordset by using the rs.Delete
	method, you cannot access the Value property of its constituent fields in code.
	
	RESOLUTION
	==========
	
	To access the values that were stored in the fields of the deleted record, use
	the ADO Field object OriginalValue or UnderlyingValue property.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In an optimistic batch update operation, disconnected recordsets are updated
	locally on the client computer. Then the disconnected recordsets are associated
	with an active connection to post the changes made to the database. The changes
	may include the following:
	
	- The addition of new records.
	- Modification's to the values stored in the fields of existing records.
	- Deletion of records in the disconnected recordset.
	
	It is a good practice to examine the changes made to a disconnected recordset
	locally before you connect and apply the changes to the database. The Filter
	property of the ADO Recordset can be set to the adFilterPendingRecords ADO
	constant value to identify the records in the disconnected recordset that have
	changed, which will be applied to the database on the next call to the
	UpdateBatch method.
	
	Setting the recordset's Filter property to adFilterPendingRecords enforces a
	filter on the recordset object so that the view of its constituent records is
	restricted to the records changed in the disconnected recordset that have not
	been posted to the database. When you set the filter you can loop through the
	records and examine the Status property of each record to determine whether a
	record has been added, changed, or deleted. Deleted records have their status
	property set to adStatusDeleted.
	
	Although it is possible to access the values in the fields of the newly added and
	modified records by using the ADO Field object's Value property, doing the same
	for the deleted records results in the run-time error message shown in the
	"Symptoms" section of this article. The values that were stored in the fields of
	the records marked for deletion can only be accessed through the OriginalValue
	or UnderlyingValue properties of the ADO Field object.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Use the following code example to reproduce this problem. This example uses the
	Microsoft Access Biblio.mdb database that is installed with Visual Basic 6.0.
	
	1. Start a new Standard EXE project in Visual Basic 6.0.
	
	2. Set a project reference to the Microsoft ActiveX Data Objects 2.1 (or later)
	  Library.
	
	3. Place a Command button on Form1.
	
	4. In the General Declarations section of Form1, insert the following code:
	
	    Dim cn as ADODB.Connection
	    Dim rs as ADODB.Recordset
	
	5. Place the following code in the Command button's Click event procedure:
	
	  Private Sub Command1_Click()
	    Set cn = New ADODB.Connection
	    cn.ConnectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=Biblio.mdb"
	    cn.Open
	
	    Set rs = New ADODB.Recordset
	    rs.CursorLocation = adUseClient
	    rs.Open "Select * from [Title Author]", cn, adOpenStatic,   adLockBatchOptimistic
	    'THE RECORDSET IS DISCONNECTED
	    Set rs.ActiveConnection = Nothing
	
	    rs.MoveFirst
	    rs.Delete
	    rs.Filter = adFilterPendingRecords
	    Do While Not rs.EOF
	      If rs.Status = adRecDeleted Then                                                           
	        MsgBox "ISBN : " & rs.Fields("ISBN") & " has been deleted !" 'Error occurs on this line
	      End If
	      rs.MoveNext
	    Loop
	    rs.Filter = adFilterNone
	
	    Set rs.ActiveConnection = cn
	    rs.CancelBatch
	    rs.Close
	  End Sub
	
	Press F5 to run the code. Note that the error message occurs.
	6. In the preceding code segment replace the following line:
	
	      MsgBox "ISBN : " & rs.Fields("ISBN") & " has been deleted !"
	
	with this line:
	
	      MsgBox "ISBN : " & rs.Fields("ISBN").OriginalValue & " has been deleted !"
	
	Note that you can see the value of the "ISBN" field in the record marked for
	deletion.
	7. In the preceding example, the deletion is not posted to the database. The
	  call to rs.CancelBatch ensures that the deletion is not reflected in the
	  database.
	
	Additional query words: error -2147217885 (80040e23)
	
	======================================================================
	Keywords          : kbVBp kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbADO250 kbMDAC260 kbADO260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO200 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : WINDOWS:2.0,2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	
