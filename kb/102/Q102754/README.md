---
layout: page
title: "Q102754: PC Forms: Working with Data in Combo Boxes"
permalink: /kb/102/Q102754/
---

## Q102754: PC Forms: Working with Data in Combo Boxes

{% raw %}

	Article: Q102754
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With version 1.0 of the Microsoft Electronic Forms Designer, you can include
	Microsoft Visual Basic's combo box control on a form, giving users the option to
	choose from items in a list. When the form is sent, however, only the selection
	from the list box is written to the MEFPackage and sent. This can produce
	unexpected results when the form is read, because the entire list of items in a
	list box is not automatically packaged.
	
	MORE INFORMATION
	================
	
	There are three ways to handle list boxes in an E-form:
	
	1. Transfer the selection from the list box on the Compose form to a read-only
	  text edit box on the Read form.
	
	2. Duplicate the Compose form's list box on the Read form and display which
	  option was selected by the user.
	
	3. Manually package and send each of the items in the list box.
	
	Method 1
	--------
	
	To transfer the selection from the list box on the Compose form to a read-only
	text box on the Read form, you can add code to the WriteMessage() and
	ReadMessage() functions in the EFORM.BAS file. Comments in each function
	indicate where to add code.
	
	In the following procedure, the variable "MyText" describes the value of the list
	box control lstColor on the Compose form. The control, txtColor, is the
	corresponding text edit box on the Read form in which the value will be placed.
	
	1. Declare the variable and set its value:
	
	        Dim MyText As String
	        MyText = frmCompose.lstColor.Text
	
	2. Add the value of "MyText" to the package as a data item identified by the
	  item ID "TheString" by calling MEFWriteText in the WriteMessage() function:
	
	        MEFWriteText gPackage, "TheString", MyText
	
	3. Read the variable from the package and assign it to the text edit control box
	  by adding the following code to the ReadMessage() function:
	
	        frmRead.txtColor.Text =
	        MEFReadText(gPackage,"TheString","")
	
	4. Make the control box read-only by adding the following line to the Load event
	  procedure of the Read form:
	
	        MEFSetEditReadOnlyState txtColor, 1
	
	Additionally, change the BackColor property of the text box control to gray so
	users know they cannot modify the contents of the text box.
	
	Method 2
	--------
	
	To duplicate the list in both the Compose and Read forms, use the Microsoft
	Visual Basic AddItem method in the Load event procedure on each of the forms.
	
	The following is an example that describes this process, where lstColor is the
	list box control name on both the Compose and Read forms:
	
	1. Add a list of items to the list box on the Compose form using the AddItem
	  method in the Load event procedure.
	
	        lstColor.AddItem "Red" 
	        lstColor.AddItem "Green" 
	        lstColor.AddItem "Blue" 
	        lstColor.AddItem "Yellow"
	
	2. Repeat step 1 for the Read form by copying the text entered above and pasting
	  it into the Load event procedure of the Read form.
	
	The WriteTaggedControls() function in EFORM.BAS will write both the list index
	and the text of lstColor so data will be preserved even if the user does not
	make a selection from the list.
	
	Method 3
	--------
	
	If the contents of the list box change based on options selected by the user, you
	can manually package and unpackage the contents of the list.
	
	Using a For...Next loop with the List and ListCount properties of a list box, you
	can cycle through each of the items in the list, calling MEFWriteText to add
	each item to the MEFPackage. You can unpackage the items in the list on the Read
	form in a similar manner, by adding code to the WriteMessage() and ReadMessage()
	functions in EFORM.BAS. Comments in each function indicate where to add code.
	
	The following example lists the code you should add to each function. In the
	example, the variable "TheTotal" stores the total number of items in the list
	and is written to the package by MEFWriteLong. The variable "theText"
	temporarily stores each item in the list so it can be written to the package by
	MEFWriteText. Each of the items in the list is written to the package separately
	and is defined by a unique item ID. Finally, the variable "SelectedText" stores
	which item is currently selected from the list and is written to the package
	using MEFWriteText.
	
	1. Add the following code to the WriteMessage() function in EFORM.BAS. Note the
	  comments that describe the various steps.
	
	        'Declare the variables
	         Dim n As Integer
	         Dim TheTotal As Long
	         Dim theText As String
	         Dim SelectedText As String
	
	        'Find the number of items in the list and write it to the
	        'package
	         TheTotal = frmCompose.lstColor.ListCount - 1
	         MEFWriteLong gPackage, "Total", TheTotal
	
	        'Process the list, writing each item to the package using a
	        'unique itemID, ("List0". "List1", etc.)
	         For n = 0 To TheTotal
	           theText = frmCompose.lstColor.List(n)
	           MEFWriteText gPackage, "List" & Str$(n), theText
	         Next
	
	        'Write the current contents of the selection to the package
	         SelectedText = frmCompose.lstColor.Text
	         MEFWriteText gPackage, "SelText", SelectedText
	
	2. Add the following code to the ReadMessage() function to unpackage the data.
	
	        'Declare variables
	         Dim n As Integer
	         Dim TheTotal As Long
	
	        'Find the number of items in the list by reading the package.
	         TheTotal = MEFReadLong(gPackage, "Total", 0)
	
	        'Read in each of the items and add it to the list using AddItem
	         For n = 0 To TheTotal
	           frmRead.lstColor.AddItem MEFReadText(gPackage, "List"&
	           Str$(n), "")
	         Next
	
	        'Read the selected text from the package and assign to the
	        'list box
	         frmRead.lstColor.Text = MEFReadText(gPackage, "SelText", "")
	
	Additional query words: 1.00 grey
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
