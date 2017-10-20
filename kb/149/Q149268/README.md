---
layout: page
title: "Q149268: BUG: Odd Behavior with Modal Dialog/Form in ListView ItemClick"
permalink: /kb/149/Q149268/
---

## Q149268: BUG: Odd Behavior with Modal Dialog/Form in ListView ItemClick

{% raw %}

	Article: Q149268
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVB
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Showing a modal form or dialog box (such as a message box) as a result of code
	in the ItemClick event of a ListView control can cause odd behavior with the
	ListView when the modal form or dialog box is dismissed. The ListItem that was
	clicked often moves around the ListView control and appears to be attached to
	the mouse pointer.
	
	RESOLUTION
	==========
	
	This problem is a result of the modal form interrupting the normal flow of
	execution. To avoid this problem, do not show any modal forms or dialog boxes in
	code for the ItemClick event. If the ListView needs to be able to respond to an
	ItemClick and needs information from the item that was clicked on, one should
	save the ListItem object passed to the ItemClick event and use it in the Click
	event for the same ListView control. Any processing that needs to be completed
	when an item is clicked upon can be performed in the Click event with the saved
	ListItem object. The following code shows this technique by declaring and using
	private form-level variable of type ListItem. This variable is set in the
	ItemClick event (which is fired before the Click event) and then is used in the
	Click event that is fired immediately after the ItemClick.
	
	     Private itmSaved As ListItem
	
	     Private Sub ListView1_ItemClick(ByVal Item As ListItem)
	        Set itmSaved = Item
	     End Sub
	
	     Private Sub ListView1_Click()
	        MsgBox itmSaved.Text
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic 4.0, 32-bit version. Form1 is created by default.
	
	2. Add a single ListView control to the form.
	
	3. Add this code to Form1:
	
	        Private Sub Form_Load()
	        ListView1.ListItems.Add , "K1", "hello world"
	        End Sub
	
	        Private Sub ListView1_ItemClick(ByVal Item As ListItem)
	        MsgBox Item.Text
	        End Sub
	
	4. Press F5 or select Start from the Run menu to start the application. Click on
	  the single ListItem object and choose OK to dismiss the message box. Observe
	  the fact that the ListItem object now appears attached to the mouse pointer
	  and moves with the mouse pointer all over the ListView control.
	
	Additional query words: kbVBp400bug kbVBp kbdsd kbDSupport kbControl kbVBp500bug kbVBp600bug
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
