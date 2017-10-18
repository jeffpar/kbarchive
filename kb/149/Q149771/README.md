---
layout: page
title: "Q149771: BUG: Rebind Fails if Retrieve Fields Are Set at Design Time"
permalink: kb/149/Q149771/
---

## Q149771: BUG: Rebind Fails if Retrieve Fields Are Set at Design Time

	Article: Q149771
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute the Rebind method after changing the data on a Data control
	bound to a DBGrid control with fields retrieved by clicking the right-mouse
	button on the DBGrid control, clicking on Retrieve Fields clears the DBGrid
	control but does not display the changed data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	Use a Recordset to retrieve Field names instead of using Retrieve Fields from
	the right-click pop-up menu.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the 16-bit or 32-bit Visual Basic 4.0. If it is already running, on the
	  File menu, click New Project.
	
	2. Add a Data control and a DBGrid Control to the Form1 form. Set the properties
	  of the following controls:
	
	  Control          Default Name        Property            Value
	  ------------------------------------------------------------------
	
	  Data Control     Data1               DatabaseName       BIBLIO.MDB
	                                       RecordSource       Authors
	  DBGrid           DBGrid1             DataSource         Data1
	
	3. Right-click on the DBGrid control and click Retrieve Fields on the menu. The
	  Column headers on the DBGrid control contain the names of the Fields.
	
	4. Copy the following code to the Code window of the Form1 form:
	
	        Option Explicit
	
	        Private Sub Form_Click()
	           'Change the RecordSource to the Titles table
	           Data1.RecordSource = "Titles"
	           Data1.Refresh
	           DBGrid1.Rebind
	        End Sub
	
	5. On the Run menu, click Start, or press F5. Click on the form and note that
	  the DBGrid control is cleared of all data.
	
	Additional query words: 4.00 vb4win vb4all DBGrid buglist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
