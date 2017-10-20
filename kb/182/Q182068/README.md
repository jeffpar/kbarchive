---
layout: page
title: "Q182068: BUG: ListView SubItemIndex Property Not Converted"
permalink: /kb/182/Q182068/
---

## Q182068: BUG: ListView SubItemIndex Property Not Converted

{% raw %}

	Article: Q182068
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You convert a project written in Visual Basic 4.0 to Visual Basic 5.0. When you
	run the project, you note that the SubItemIndex property of a column header in a
	ListView control has a value of 0 (zero), or you receive the following error:
	
	  Run-time Error '380':
	  Invalid Property Value
	
	CAUSE
	=====
	
	The SubItemIndex property is omitted from the form file (.FRM) after Visual
	Basic version 5.0 converts a 4.0 form containing a ListView control. This
	results in the SubItemIndex property having a value of 0.
	
	RESOLUTION
	==========
	
	Open the form file (.FRM) in Notepad and add the missing SubItemIndex value. See
	the MORE INFORMATION section for a step-by step-example.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project in Visual Basic 4.0. Form1 is created by default.
	
	2. Choose Custom Controls from the Tools menu, and deselect all controls except
	  for "Microsoft Windows Common Controls." (Comctl32.ocx should be the version
	  that ships with Visual Basic 4.0.)
	
	3. Add a ListView control and CommandButton control to Form1.
	
	4. Using the custom properties of the ListView1 control, insert 2 column
	  headers:
	
	  Index: 1
	  Text : Name
	  Key  : Name
	
	  Index: 2
	  Text : Address
	  Key  : Address
	
	5. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	           Dim itmX As ListItem
	           ListView1.View = 3 'report view
	           Set itmX = ListView1.ListItems.Add(1, "Bob", "Bob")
	           itmX.SubItems(ListView1.ColumnHeaders("Address").SubItemIndex) _
	              = "123 Main Street"
	        End Sub
	
	6. Save and run the project. Click the CommandButton to make sure there are no
	  errors. You should see "Bob" and "123 Main Street" in the ListView.
	
	7. On a computer that has Visual Basic 5.0 installed, open, save, and run the
	  project in Visual Basic 5.0.
	
	8. Click the CommandButton and note that the result is:
	
	  Run-time Error '380': Invalid Property Value
	
	  Because the SubItemIndex property has a 0 value, the error occurs. The
	  SubItemIndex is supposed to have a value of 1 for the Address column (because
	  it is the second column).
	
	Workaround
	----------
	
	Close the project in Visual Basic. Backup the Form1.frm file, and then open the
	Form1.frm file using Notepad and add the missing SubItemIndex value as follows.
	
	Before editing, the column 2 header information in Form1.frm will resemble the
	following:
	
	     BeginProperty ColumnHeader(2) {0713E8C7-850A-101B-AFC0-4210102A8DA7}
	        Key             =   "Address"
	        Object.Tag             =   ""
	        Text            =   "Address"
	        Object.Width           =   2540
	     EndProperty
	
	After adding the SubItemIndex line (use spaces to indent), it should resemble:
	
	     BeginProperty ColumnHeader(2) {0713E8C7-850A-101B-AFC0-4210102A8DA7}
	        SubItemIndex    =   1
	        Key             =   "Address"
	        Object.Tag             =   ""
	        Text            =   "Address"
	        Object.Width           =   2540
	     EndProperty
	
	NOTE: If there were more than 2 columns, you would do the same for any additional
	column headers. For example, Column 3 would have a SubItemIndex = 2.
	
	1. Save the changes to Form1.frm and close Notepad.
	
	2. Reopen the project in Visual Basic 5.0.
	
	3. Run the project and click the Command button. There should be no error this
	  time. You should see "Bob" and "123 Main Street" in the ListView.
	
	Additional query words: conversion
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
