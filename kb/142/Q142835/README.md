---
layout: page
title: "Q142835: BUG: DBCombo Issues Click Event While Scrolling"
permalink: /kb/142/Q142835/
---

## Q142835: BUG: DBCombo Issues Click Event While Scrolling

{% raw %}

	Article: Q142835
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While using the mouse to scroll through items in the list of a DBCombo control
	the DBCombo's Click event is fired for every row scrolled.
	
	WORKAROUND
	==========
	
	Do not rely upon the Click event of the DBCombo control to indicate when an item
	has been selected. One possible workaround to detect when a user has made a
	change would be to store the contents of the Text property of the DBCombo in the
	DBCombo's GotFocus event, and then check to see whether this had changed in the
	LostFocus event of the same control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start Visual Basic, or if Visual Basic is already running, start a new
	  project.
	
	2. Add a data control to Form1.
	
	3. Change these properties of the data control:
	
	     DatabaseName:   BIBLIO.MDB
	     RecordSource:   Authors
	
	4. Add a DBCombo control to the form.
	
	5. Change these properties of the DBCombo control:
	
	     RowSource:   Data1
	     ListField:   AU_ID
	
	6. Add the following code to the Click event of DBCombo1:
	
	     Private Sub DBCombo1_Click(Area As Integer)
	         Debug.Print "CLICK"
	     End Sub
	
	7. Press F5 to run the application. Use the mouse to drop the combo box. Select
	  a visible number and keep the mouse button depressed. Now drag downwards to
	  force the list to scroll. Notice the generated "CLICK" statements in the
	  debug window.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
