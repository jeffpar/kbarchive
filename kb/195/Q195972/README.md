---
layout: page
title: "Q195972: BUG: Data Report Not Always in WindowList"
permalink: kb/195/Q195972/
---

## Q195972: BUG: Data Report Not Always in WindowList

	Article: Q195972
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbVBp kbVBp600bug kbGrpDSVBDB
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MDIFORM does not show the child form in the WindowList menu if the child form
	is a Data Report. If the Data Report is minimized and then returned to a normal
	state, it will show up in the WindowList.
	
	RESOLUTION
	==========
	
	To work around this problem, add code to your program that minimizes the report
	prior to opening the report in normal mode. Refer to the Steps to Reproduce
	Behavior section of this article for sample code on this workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new standard EXE project. Form1 is created by default.
	
	2. Add an MDIFORM to the project.
	
	3. Add a menu to the form, and check the WindowList property, as follows:
	
	  
	
	     Caption: View
	     Name:  mnuView
	
	4. Add a Data Report to the project and then add a Data Environment. Set the
	  Datasource property and the Datamember property. You don't have to drop any
	  fields onto the report in order to see the problem.
	
	5. Set the MDICHILD property to True on Form1 and DataReport1.
	
	6. Add a CommandButton to Form1 and, in the Click event, show the DataReport
	  (DataReport1.Show).
	
	7. Run the application. If you select the View menu, Form1 shows up. Click the
	  CommandButton and select the View menu again. Note that the DataReport is not
	  listed in the WindowList.
	
	  If you modify the Click event of the CommandButton to do the following, the
	  DataReport appears in the WindowList as expected:
	
	        Private Sub Command1_Click()
	         DataReport1.Visible = False
	         DataReport1.WindowState = vbMinimized
	
	         DataReport1.WindowState = vbNormal
	         DataReport1.Show
	        End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbReportWriter kbVBp kbVBp600bug kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
