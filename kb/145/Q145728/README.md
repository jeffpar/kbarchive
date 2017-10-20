---
layout: page
title: "Q145728: HOWTO: Create a Listbox with Clickable Checkboxes"
permalink: /kb/145/Q145728/
---

## Q145728: HOWTO: Create a Listbox with Clickable Checkboxes

{% raw %}

	Article: Q145728
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many Windows programs incorporate listboxes with embedded checkboxes as part of
	their user interface. The References dialog in Visual Basic 4.0 is one example
	of this kind of listbox. This article shows how to implement a listbox with this
	functionality in Visual Basic 4.0 by using the ListView control.
	
	NOTE: With Visual Basic versions 5.0 and later, you can set the Style property of
	the intrinsic listbox control to indicate a "CheckBox" style.
	
	MORE INFORMATION
	================
	
	The ListView control has the capability to show images and text for each item in
	a list. The graphics to be displayed are held in an associated ImageList control
	and can be checked and unchecked checkboxes or whatever images are desired.
	
	NOTE: To use ImageList controls with the ListView control, you must associate a
	particular ImageList control with the Icons and SmallIcons properties, as
	follows:
	
	      ListView1.Icons = ImageList1
	      ListView1.SmallIcons = ImageList2
	
	Follow these steps to create a listbox with the capability to display graphics
	and text:
	
	1. Start Visual Basic 4.0, 32-bit, or if it is already running, open a new
	  project.
	
	2. Place a ListView and an ImageList control on the form.
	
	3. Right click on the ImageList control and select Properties. On the General
	  tab, ensure that the '16 x 16' option button is selected. Switch to the
	  Images tab and use the Insert Picture button to add two images to the
	  ImageList. So that the code below will work without modification, make the
	  first picture the 'unchecked' image, and the second the 'checked'. Visual
	  Basic 4.0 does not ship with images that represent simple checked and
	  unchecked checkboxes. Two complementary icons that are included in the Icons
	  directory beneath the Visual Basic directory can be used (e.g. the
	  Trash02a.ico and Trash02b.ico icons located in the \Icons\Computer
	  directory.) Or, if you have a previous version of Visual Basic, these icons
	  can be easily created with the IconWorks sample that is included with
	  previous versions of Visual Basic.
	
	4. Insert these lines of code in the General Declaration section of the form.
	
	        'store the item selected in the ItemClick event
	        'for use in the DblClick event
	        Private ItemClicked As ListItem
	
	5. Add the following code into the code window for the form. The operation of
	  the code is explained in the included comments.
	
	        Private Sub Form_Load()
	            Dim itmX As ListItem
	            Dim i As Integer
	
	            'loop and add 10 items to the ListView control
	            'this code should be replaced by your add item code
	            For i = 1 To 10
	                Set itmX = ListView1.ListItems.Add()
	                'set icon to unchecked
	                itmX.SmallIcon = 1
	                itmX.Text = "ListItem " & i
	            Next i
	
	            'other views will work, but will allow additional
	            'behavior over a standard listbox
	            ListView1.View = lvwList
	
	            'display full label
	            ListView1.LabelWrap = False
	        End Sub
	
	        Private Sub ListView1_DblClick()
	
	            'toggle icon between checked and unchecked
	            'use the private ItemClicked variable set in the
	            'ListView1_ItemClick event
	            With ItemClicked
	                If .SmallIcon = 1 Then
	                    .SmallIcon = 2
	                Else
	                    .SmallIcon = 1
	                End If
	            End With
	        End Sub
	
	        Private Sub ListView1_ItemClick(ByVal Item As ListItem)
	            'since there is no ItemDblClick event, save the item
	            'clicked on for use in the ListView's DblClick Event
	            Set ItemClicked = Item
	        End Sub
	
	REFERENCES
	==========
	
	Online help for ListView and ImageList controls
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
