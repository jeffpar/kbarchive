---
layout: page
title: "Q191803: PRB: Click Event for DBGrid Returns Previous Row Values"
permalink: /kb/191/Q191803/
---

## Q191803: PRB: Click Event for DBGrid Returns Previous Row Values

{% raw %}

	Article: Q191803
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When clicking on a row of the DBGrid, the Click event is fired prior to the
	RowColChange event. If you attempt to print out the values of the columns
	collection in the Click event, the values from the previous row are printed.
	
	RESOLUTION
	==========
	
	To display data associated with the row you are navigating to, use either the
	Reposition event of the Data control (if the DBGrid is bound to the Data
	control) or the RowColChange event of the DBGrid control, or use the timer
	control in the Click event of the DBGrid.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Place a data control on the form and set these properties:
	
	  DatabaseName = Biblio.mdb
	  RecordSource = Titles
	
	3. Place a DBGrid the form. Set the DataSource property to Data1.
	
	4. Enter the following code:
	
	        Private Sub DBGrid1_Click()
	          Debug.Print DBGrid1.Columns(0).Value
	        End Sub
	
	5. Press the F5 key to run and begin clicking on rows in the DBGrid. Note that
	  the previous rows values are printed in the debug window.
	
	6. Stop the project and enter the following code:
	
	        Private Sub Data1_Reposition()
	           Debug.Print "Data1_Reposition Value=" & DBGrid1.Columns(0).Value
	        End Sub
	
	  --OR--
	
	        Private Sub DBGrid1_RowColChange()
	           Debug.Print "DBGrid_RowColChange Value=" _
	              & DBGrid1.Columns(0).Value
	        End Sub
	
	  --OR--
	
	  Add a Timer control to Form1 and add the following code:
	
	        Private Sub DBGrid1_Click()
	           Timer1.Interval = 1
	        End Sub
	
	        Private Sub Timer1_Timer()
	           Debug.Print DBGrid1.Columns(0).Value
	           Timer1.Interval = 0
	        End Sub
	
	7. Press the F5 key to run the project again and begin clicking on rows in the
	  DBGrid. Note that one of the following will occur:
	
	   - If the 1st or 2nd code option is used (Data1_Reposition or
	     DBGrid1_RowColChange code segments), the user can capture the values from
	     the row they are on, rather then the previous rows values.
	
	   - If the timer control coding option was used (the 3rd coding option), the
	     data for the currently selected row is printed to the debug window.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbDebug
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
