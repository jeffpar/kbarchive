---
layout: page
title: "Q186896: HOWTO: Use the ImageCombo Control with Visual Basic 6.0"
permalink: kb/186/Q186896/
---

## Q186896: HOWTO: Use the ImageCombo Control with Visual Basic 6.0

	Article: Q186896
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ImageCombo Control is a picture-enabled version of the standard Windows
	combo box. Each item in the list portion of the control can have a picture
	assigned to it.
	
	MORE INFORMATION
	================
	
	The ImageCombo provides an object with a collection-based list control. Each
	item in the list portion of the control is a distinct ComboItem object, and
	together the items in the list make up the ComboItems collection. This makes it
	easy to specify properties such as Tag, Text, Image, and so forth, on an
	item-by-item basis.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new standard EXE project.
	
	2. From the Project menu select Components. On the Controls Tab, select
	  Microsoft Windows Common Controls 6.0 and click OK.
	
	3. Add an ImageCombo control and an ImageList control to the form.
	
	4. Add four images to the ImageList control.
	
	5. Add two Command Buttons and a Textbox to the form.
	
	6. Add four OptionButtons to the form and set the Style to 1 - Graphical for all
	  four OptionButtons.
	
	7. Add the following code to the form:
	
	        Private Sub Command1_Click()
	        'Add a new ComboItem to the ImageCombo
	           Dim sItemKey As String
	           Dim sText As String
	           Dim i As Integer
	           Static iCount As Integer
	           sText = InputBox("Enter Text for new ComboItem")
	           If Len(sText) > 0 Then
	              iCount = iCount + 1
	              sItemKey = "I00" & Str(iCount)
	              'If you don't have a selected image you will not see an
	              'image when the item is selected.
	              'Get the image you want to use.
	              i = SelectPic
	              ImageCombo1.ComboItems.Add , sItemKey, sText, _
	               i, i, Val(Text1.Text)
	              'Make the ComboItem you just added the selected item.
	              ImageCombo1.SelectedItem = ImageCombo1.ComboItems(sItemKey)
	              'Make sure the Remove button is enabled.
	              Command2.Enabled = True
	           End If
	        End Sub
	
	        Private Sub Command2_Click()
	        'Remove the selected ComboItem.
	           Dim i As Integer
	           i = ImageCombo1.SelectedItem.Index
	           ImageCombo1.ComboItems.Remove i
	           'Make the first ComboItem the select item if there is one.
	           If ImageCombo1.ComboItems.Count > 0 Then
	             ImageCombo1.SelectedItem = ImageCombo1.ComboItems(1)
	           Else
	             ImageCombo1.Text = ""
	             ImageCombo1.Refresh 'clear the image
	             Command2.Enabled = False
	           End If
	        End Sub
	
	        Private Sub Form_Load()
	          ImageCombo1.ImageList = ImageList1
	          Command1.Caption = "Add"
	          Command2.Caption = "Remove"
	          Option1.Caption = ""
	          Option2.Caption = ""
	          Option3.Caption = ""
	          Option4.Caption = ""
	          Option1.Picture = ImageList1.ListImages(1).Picture
	          Option2.Picture = ImageList1.ListImages(2).Picture
	          Option3.Picture = ImageList1.ListImages(3).Picture
	          Option4.Picture = ImageList1.ListImages(4).Picture
	          Text1.Text = 1
	          ImageCombo1.Text = ""
	          Command2.Enabled = False
	          Option1.Value = True
	        End Sub
	
	        Private Function SelectPic() As Integer
	        'Find out which OptionButton is selected and use that
	        'image in the ImageCombo that you are adding.
	          Dim i As Integer
	          Dim b As Boolean
	          b = True
	          Select Case b
	            Case Option1.Value
	              i = 1
	            Case Option2.Value
	              i = 2
	            Case Option3.Value
	              i = 3
	            Case Option4.Value
	              i = 4
	          End Select
	          SelectPic = i
	        End Function
	
	8. Save and run the form. When you click Add, a ComboItem is added to the
	  ImageCombo control. When the ComboItem is added, the image from the selected
	  OptionButton is used. Also, the ComboItem is indented by the amount you enter
	  in to Text1. You can remove a ComboItem by clicking the Remove button.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Brian
	Combs, Microsoft Corporation
	
	
	Additional query words: kbDSupport kbDSD kbCtrl kbUsage kbVBp600 kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
