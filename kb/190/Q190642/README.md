---
layout: page
title: "Q190642: PRB: ADODC Error on Reposition When EOFAction Is adDoAddNew"
permalink: /kb/190/Q190642/
---

## Q190642: PRB: ADODC Error on Reposition When EOFAction Is adDoAddNew

{% raw %}

	Article: Q190642
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you move past EOF, a new blank record is displayed and the ADO Data
	Control's EOFAction property is set to 2-adDoAddNew. If you do not enter data
	for the new record and move off the record, you get the error message:
	
	  Cannot insert an empty row - must have at least one column value set.
	
	CAUSE
	=====
	
	ADO does an implicit update on a Move in a recordset. When the ADO Data
	Control's EOFAction property is set to 2-adDoAddNew, ADO adds a new record and
	allows the user to edit the record in bound controls. When the user moves off of
	the newly-created record, ADO does a recordset Update. If the user has decided
	not to add a record, leaves the bound controls blank, and moves off the
	newly-created record, the attempted update causes ADO to display the message,
	"Cannot insert an empty row - must have at least one column value set".
	
	The ADO Data Control's EOFAction - adDoAddNew behavior is different than the DAO
	Data Control's EOFAction - Add New behavior and the Remote Data Control's
	EOFAction - rdAddNew behavior. You will not get a message if you move off of a
	newly-added record when using the Data Control or the Remote Data Control.
	
	RESOLUTION
	==========
	
	You can work around this behavior by adding error handling code in the ADO Data
	Control's Error event procedure. Here is an example of code to handle this
	specific error, which is error number 16389:
	
	      Private Sub Adodc1_Error(ByVal ErrorNumber As Long, _
	          Description As String,  ByVal Scode As Long, _
	          ByVal Source As String, ByVal HelpFile As String, _
	          ByVal HelpContext As Long, fCancelDisplay As Boolean)
	
	          If ErrorNumber = 16389 Then
	              If Adodc1.Recordset.State = ADODB.adStateOpen Then
	                  Adodc1.Recordset.CancelUpdate
	                  Adodc1.Recordset.MoveLast
	                  fCancelDisplay = True
	              End If
	          End If
	      End Sub
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	This example uses the Biblio.MDB database that is included with Visual Basic.
	
	1. In Visual Basic, create a new Standard EXE project. Form1 is created by
	  default.
	
	2. From the Project menu, choose Components, and then select the Microsoft ADO
	  Data Control.
	
	3. Draw a Text box and an ADO Data Control on Form1.
	
	4. Set the ADO Data Control's properties:
	
	  a. Set the ConnectionString property (change the path in the DataSource
	     string below to reflect the location of Biblio.MDB on your system):
	
	           Provider=Microsoft.Jet.OLEDB.3.51;Data Source=C:\Program
	                Files\Microsoft Visual Studio\VB98\Biblio.mdb
	     
	
	  b. Set the EOFAction property to 2-adDoAddNew.
	
	  c. Set the RecordSource property to Authors.
	
	5. Set the Text box's properties.
	
	  a. Set the DataSource property to ADODC1.
	
	  b. Set the DataField property to Author.
	
	6. Test the application.
	
	  a. Click run. The text box should display the first author.
	
	  b. Click the ADODC's MoveLast button. The text box will display the last
	     author.
	
	  c. Click the ADODC's MoveNext button. Because you set the ADODC's EOFAction
	     to 2-adDoAddNew, you will see a blank text box, ready for your data entry.
	
	  d. Click the ADODC's MovePrevious button, to cancel your AddNew. You will see
	     the message:
	
	  Cannot insert an empty row - must have at least one column value set.
	
	     Click the Message box's OK button.
	
	  e. To continue, you must either type a new author's name in the Text box,
	     then move off the record, or click Form1's Close button.
	
	7. Add the work around code:
	
	  a. In Design mode, double-click on the ADO Data Control to open its Event
	     Procedure window.
	
	  b. Copy the following code into the ADO Data Control's Error event
	     procedure:
	
	           If ErrorNumber = 16389 Then
	              If Adodc1.Recordset.State = ADODB.adStateOpen Then
	                  Adodc1.Recordset.CancelUpdate
	                  Adodc1.Recordset.MoveLast
	                  fCancelDisplay = True
	              End If
	           End If
	     
	
	8. Retest the application. You will no longer get the error message.
	
	REFERENCES
	==========
	
	In Visual Basic, select Help, Search... and enter "ADO Data Control".
	
	On the form containing your ADO Data Control, select the control, then press the
	F1 key.
	
	Additional query words: kbdse
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
