---
layout: page
title: "Q305101: BUG: VB Modal Form Freezes When Called from DataGrid Click Event"
permalink: /kb/305/Q305101/
---

## Q305101: BUG: VB Modal Form Freezes When Called from DataGrid Click Event

	Article: Q305101
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Operating System(s): 
	Keyword(s): kbVBp600bug kbGrpDSVBDB kbDSupport
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4, 6.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Visual Basic form as modal on the Click event of a DataGrid
	control, if you click on the header section instead of the grid cells, the form
	freezes. This problem does not occur if you click on the grid cells.
	
	RESOLUTION
	==========
	
	To work around this problem, disable the grid on the Click event, and enable the
	grid on the modal form's Unload event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Create two forms (Form1
	  and Form2).
	
	2. From the Project menu, click Components, and select the "Microsoft ADO Data
	  Control 6.0 (OLEDB)" and Microsoft DataGrid Control 6.0 (OLEDB) check boxes.
	
	3. Add the following controls to Form1:
	
	   - Microsoft ADO Data Control 6.0 (OLEDB)
	   - Microsoft DataGrid Control 6.0 (OLEDB)
	
	4. Paste the following code into the code window of Form1:
	
	  Private Sub DataGrid1_Click()
	      'Me.DataGrid1.Enabled = False
	      Form2.Show vbModal
	  End Sub
	
	5. Paste the following code into the code window of Form2:
	
	  Private Sub Form_Unload(Cancel As Integer)
	      Form1.DataGrid1.Enabled = True
	  End Sub
	
	6. Run the project, and click on the header of the DataGrid. Notice that the
	  application freezes.
	
	7. To work around this problem, uncomment the "Me.DataGrid1.Enabled = False"
	  line in the "DataGrid1_Click" event of Form1, and run the project again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600bug kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP4 kbVB600SP5
	Version           : :6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
