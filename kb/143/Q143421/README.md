---
layout: page
title: "Q143421: HOWTO: Synchronize Data on the Form with a dbCombo"
permalink: /kb/143/Q143421/
---

## Q143421: HOWTO: Synchronize Data on the Form with a dbCombo

{% raw %}

	Article: Q143421
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
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
	
	You can use the DBCombo control to link data from two data controls if the
	DataField property of the DBCombo control uses a field common to the
	RecordSource of the data controls. The FindFirst method allows you to
	synchronize the data between the two data controls when the DataField property
	of the DBCombo control is linked to a primary key.
	
	MORE INFORMATION
	================
	
	The following code example allows you to synchronize data between two data
	controls when the DBCombo control is bound to a field common to both data
	controls. The field is a primary key.
	
	Code Example
	------------
	
	1. Start 16-bit or 32-bit Visual Basic or if it is already running, click New
	  Project on the File menu.
	
	2. Add the listed controls to the Form and set the indicated properties
	
	     Control     Default Name   Property           Value
	     -------------------------------------------------------------------
	
	      Data        Data1          DatabaseName       Biblio.mdb
	                                 RecordSource       Publishers
	
	      Data        Data2          DatabaseName       Biblio.mdb
	                                 RecordSource       Titles
	
	      TextBox     Text1          DataSource         Data1
	                                 DataField          PubID
	
	      TextBox     Text2          DataSource         Data1
	                                 DataField          Name
	
	      TextBox     Text3          DataSource         Data1
	                                 DataField          Company Name
	
	      TextBox     Text4          DataSource         Data2
	                                 DataField          Title
	
	      DBCombo     DBCombo1       DataSource         Data2
	                                 RowSource          Data1
	                                 BoundColumn        PubID
	                                 DataField          PubID
	                                 ListField          PubID
	                                 Style              2 - DropDown List
	
	3. Copy the following code to the Code window of the Form1 form to do the
	  synchronization:
	
	        Private Sub DBCombo1_Change()
	           Data1.Recordset.FindFirst "PubID=" & DBCombo1.BoundText
	        End Sub
	
	        Private Sub Form_Load()
	           Data1.Refresh
	        End Sub
	
	4. On the Run menu, click Start or press the F5 key to start the program. Select
	  a number from the ComboBox control and note that all the text boxes change.
	  The ComboBox control and the first text box match showing the
	  synchronization.
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
