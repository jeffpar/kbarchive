---
layout: page
title: "Q139971: BUG:DBGrid with Visible Property Set to False Becomes Visible"
permalink: kb/139/Q139971/
---

## Q139971: BUG:DBGrid with Visible Property Set to False Becomes Visible

	Article: Q139971
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A DBGrid that has its Visible property set to False does not remain invisible
	when the data control referenced in its DataSource property is refreshed (via
	the Refresh method) or has its current record changed.
	
	CAUSE
	=====
	
	As a side effect of these methods, a message to repaint is sent to a data bound
	grid. In this case, the problem is that the DBGrid control does not check its
	Visible property to see if it is all right to draw itself on the form, it just
	goes ahead and does it.
	
	WORKAROUND
	==========
	
	Executing the following line of code
	
	      <DBGrid Name>.Visible = False
	
	causes another Paint message to be sent to the DBGrid control, but this time the
	grid behaves correctly and hides itself. The workaround is to place this line of
	code (shown above) in the Reposition event of the data control. Whenever a data
	control executes a Refresh method, or any of the Move methods, the Reposition
	event is called, and this line of code causes the correct painting to occur.
	
	
	Another workaround is to move the DBGrid control off of the visible section of
	the form when it should not be seen. You can use a line of code such as the
	following:
	
	    DBGrid1.Move -5000, -5000
	
	To make the DBGrid visible again, move it back to the correct location on the
	form.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of the article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to reproduce problem
	--------------------------
	
	1. Start Visual Basic, or if it is already running, click New Project on the
	  File menu.
	
	2. In the toolbox, double-click the data control button to add a new data
	  control to the project.
	
	3. Modify the following properties of the data control:
	
	        DatabaseName: <path to your VB directory>\biblio.mdb
	        RecordSource: Authors
	
	4. In the toolbox, double-click DBGrid to add a DBGrid control to the form.
	
	5. In the Properties window, change the DataSource property of the DBGrid
	  control to Data1.
	
	6. Change the DBGrid's Visible property to False.
	
	7. Click and drag a single command button, named Command1 by default, onto the
	  form.
	
	8. Add the following code to the Command1_Click procedure:
	
	         Private Sub Command1_Click()
	            Data1.Refresh
	         End Sub
	
	9. On the Run menu, click Start or press the F5 key to start your application.
	  The DBGrid control is not displayed as expected.
	
	10. Click the command button to send a Refresh to the data control. This causes
	  the DBGrid control to be drawn on the form, despite the fact that its
	  Visible property is false.
	
	11. Stop the application, then add the following code to the Data1_Reposition
	  procedure:
	
	        Private Sub Data1_Reposition()
	           DBGrid1.Visible = False
	        End Sub
	
	12. On the Run menu, click Start or press F5 to start your application. The
	  DBGrid control is not displayed.
	
	13. Click the command button to send a Refresh to the data control. The DBGrid
	  control is not displayed, which is the desired behavior.
	
	Additional query words: 4.00 vb4win vb4all buglist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
