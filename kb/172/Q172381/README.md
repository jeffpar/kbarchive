---
layout: page
title: "Q172381: HOWTO: Respond to the Auto-commit Feature of a VB Data Control"
permalink: /kb/172/Q172381/
---

## Q172381: HOWTO: Respond to the Auto-commit Feature of a VB Data Control

{% raw %}

	Article: Q172381
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you perform any of the following actions on a Visual Basic Data Control,
	any changes to controls bound to the Data Control are automatically committed to
	the Database:
	
	- Move off the current record with any of the Move methods (MoveFirst,
	  MovePrevious, MoveNext, MoveLast, or Move).
	
	- Move off the current record using the VCR-like buttons of the Data Control.
	
	- Add a new record with the AddNew method.
	
	- Update a record that is being edited or added with the Update method. Note
	  that this is not the UpdateRecord method.
	
	- Delete the current record with the Delete method.
	
	- Move off the current record with any of the Find methods (FindFirst,
	  FindNext, FindPrevious, FindLast, or Seek). This only applies to the
	  Table-type RecordSet object.
	
	- Move off the current record by setting the Bookmark property.
	
	- Close the RecordSet with the Close method.
	
	- Unload the form that the data control is on.
	
	This article shows how to use the Action parameter of the Data Control's Validate
	event to respond to this automatic commit.
	
	MORE INFORMATION
	================
	
	The Action argument passes the action that is taking place on the Data Control
	to the Sub procedure. If you use a Select Case statement on the Action
	parameter, you can choose the events to which you want to respond.
	
	The Validate event occurs before the next record becomes active. The action that
	causes the Validate to be fired can be cancelled by setting the Action parameter
	to vbDataActionCancel. You can cancel the saving of the data by setting the Save
	parameter in the Validate event to False. Also, you can choose not to save bound
	control values individually by changing the DataChanged property (which all
	bindable controls have) to False for the individual controls.
	
	If you want to roll back all the changes of an editing session, you can place
	BeginTrans and Commitrans (or Rollback) statements around your Data Control
	code. However, the following example code gives you better control.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Data Control (Data1) and two Text Boxes (Text1 and Text2) to Form1.
	
	3. Set the following properties of the controls:
	
	  Control     Property          Value
	  ------------------------------------------
	  Data1       DatabaseName      Biblio.mdb
	  Data1       RecordSource      PUBLISHERS
	  Text1       DataSource        Data1
	  Text1       DataField         Name
	  Text2       DataSource        Data1
	  Text2       DataField         City
	
	4. Add the following code to the Data1_Validate event:
	
	     Sub Data1_Validate (Action As Integer, Save As Integer)
	        Dim RC As Integer
	        Debug.Print "Action "; Action; " generated the Validate event."
	        If Save Then
	           Select Case Action
	              Case vbDataActionFind, _
	                 vbDataActionDelete, _
	                 vbDataActionAddNew, _
	                 vbDataActionCancel, _
	                 vbDataActionClose
	                 'No action
	              Case vbDataActionMoveNext, _
	                 vbDataActionMovePrevious, _
	                 vbDataActionMoveFirst, _
	                 vbDataActionMoveLast, _
	                 vbDataActionUnload
	                 RC = MsgBox("Save changes to current record?", vbYesNo + _
	                    vbQuestion)
	                 If RC = vbNo Then
	                    Save = False
	                    Debug.Print "The data will NOT be saved."
	                 Else
	                    If Not IsValid() Then
	                       ' Write your own IsValid Function to return T/F value
	                       ' and do any additional validation that you want.
	                       Action = vbDataActionCancel
	                    End If
	                 End If
	              Case Else
	                 ' This case should never be executed unless a new
	                 ' (unhandled) value is added to the Action parameter.
	           End Select
	        End If
	     End Sub
	
	     Function IsValid() As Boolean
	        IsValid = True
	        ' Write your own validation routine here.
	     End Function
	
	5. Start the program by choosing Start from the Run menu or by pressing the F5
	  key.
	
	6. Make changes to the Text boxes.
	
	7. Move off the current record by using the Data control buttons.
	
	The current behavior prompts you to save or not save the data. You can easily
	modify this so that it does the internal validation checking that you need, as
	long as you do not use any of the methods described at the beginning of this
	article to generate another change in the current record within the Validation
	event.
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbCtrl kbVBp400
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
