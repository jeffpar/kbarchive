---
layout: page
title: "Q143427: FIX: Cannot Programmatically Select Items in ListView"
permalink: /kb/143/Q143427/
---

## Q143427: FIX: Cannot Programmatically Select Items in ListView

{% raw %}

	Article: Q143427
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After setting the Selected property of a ListItem in the ListView control to
	True, the SelectedItem property returns the last item that was selected with a
	mouse click.
	
	RESOLUTION
	==========
	
	The code below can be used as a workaround instead of Selected = True.
	
	     Sub SelectAListItem(iItemToSelect%)
	
	           Dim Item As ListItem
	           Set Item = ListView1.ListItems(iItemToSelect%)
	           Set ListView1.SelectedItem = Item
	
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic 4.0, or select New Project from the File menu if it is
	  already running.
	
	2. Add Command button and Listview controls to the default Form1.
	
	3. Add the following code to Form1:
	
	      Private Sub Form_Load()
	         Dim itmX As ListItem
	         Dim i As Integer
	
	         For i = 1 To 10
	             Set itmX = ListView1.ListItems.Add(, , CStr(i))
	         Next i
	      End Sub
	
	      Private Sub Command1_Click()
	         ListView1.ListItems(5).Selected = True
	         MsgBox "Index of selected item is " & ListView1.SelectedItem.Index
	      End Sub
	
	4. Press F5 to start the application. Click once on the Command button and see
	  that the message box displays the index of the selected item as 1, despite
	  the fact that it was set to 5 by the previous line of code.
	
	5. Change the code in the Command1_Click event to the following to fix the
	  problem:
	
	      Private Sub Command1_Click()
	         Dim item As ListItem
	
	         Set item = ListView1.ListItems(5)
	         Set ListView1.SelectedItem = item
	
	         MsgBox "Index of selected item is " & ListView1.SelectedItem.Index
	      End Sub
	
	Additional query words: errmsg vb432 listview kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
