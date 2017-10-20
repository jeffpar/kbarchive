---
layout: page
title: "Q150219: BUG: Progress Bar Does Not Paint When DragMode Automatic"
permalink: /kb/150/Q150219/
---

## Q150219: BUG: Progress Bar Does Not Paint When DragMode Automatic

{% raw %}

	Article: Q150219
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400bug
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the DragMode property of the Microsoft Windows 95 Progress Bar control is set
	to 1-Automatic, it does not paint if the progress of the control is updated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article.
	
	RESOLUTION
	==========
	
	Set DragMode to 0-Manual before progress is updated, and then reset it to 1-
	Automatic after the control has had time to paint.
	
	Instead of updating the value directly, the following subroutine can be called to
	update the value. The first parameter is the control itself and the second
	parameter is the new value for the progress:
	
	     Public Sub UpdateProgress(ProgBar As Object, NewValue As Integer)
	        'Turn drag to Manual briefly.
	        ProgBar. Value = 0
	        'Update the progress.
	        ProgBar.Value = NewValue
	        'Turn drag to Automatic, and allow time for repaint.
	        ProgBar.DragMode = 1
	        DoEvents
	     End Sub
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a progress bar control on Form1. Change the DragMode property to
	  1-Automatic.
	
	3. In the Click event of Form1, place the following code:
	
	        Private Sub Form_Click()
	           For i = 1 To 10
	              ProgressBar1.Value = ProgressBar1.Value + 10
	           Next i
	        End Sub
	
	4. Run the project by pressing the F5 key. Click the form, and note that nothing
	  happens. If DragMode was initially set to 0-Manual, then progress is shown
	  until the bar fills.
	
	To work around the problem above, include the UpdateProgess subroutine in the
	code of Form1, and modify the Click event of the Form to the following:
	
	     Private Sub Form_Click()
	        For i = 1 To 10
	           UpdateProgress ProgressBar1, ProgressBar1.Value + 10
	        Next i
	     End Sub
	
	Additional query words: 4.00 vb4win vb432 buglist4.00
	
	======================================================================
	Keywords          : kbVBp400bug 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
