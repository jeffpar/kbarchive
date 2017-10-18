---
layout: page
title: "Q194910: FIX: Cannot Set ImageList for ImageCombo at Design on MDIForm"
permalink: kb/194/Q194910/
---

## Q194910: FIX: Cannot Set ImageList for ImageCombo at Design on MDIForm

	Article: Q194910
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ImageCombo control on an MDIForm initially appears empty. Even when an item
	is selected from the drop-down list it does not display any images.
	
	CAUSE
	=====
	
	When on an MDIForm, the ImageCombo does not initially bind to its ImageList nor
	does it display its text. So the image(s) does not appear if the ImageList
	property of the ImageCombo was set at design-time.
	
	RESOLUTION
	==========
	
	To make the image(s) appear, set the ImageList property of the ImageCombo at
	run-time when on an MDIForm. To make the text display, set the focus to the
	ImageCombo. Note that making the ImageCombo's TabIndex = 0 will not work.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	
	Steps To Reproduce
	------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Select Components from the Project menu, select Microsoft Windows Common
	  Controls 6.0," and click OK.
	
	3. Add an MDIForm, MDIForm1, to the project.
	
	4. Choose Properties from the Project menu and make MDIForm1 the Startup Object.
	
	5. Place a PictureBox onto MDIForm1.
	
	6. Place an ImageList control and an ImageCombo into the PictureBox.
	
	7. Alternate-click on ImageList and select Properties. Select the tab and insert
	  an image into the ImageList.
	
	8. From the Custom Properties of the ImageCombo, set the ImageList property to
	  ImageList1.
	
	9. Place the following into the MDIForm's module:
	
	        Private Sub MDIForm_Load()
	           ImageCombo1.ComboItems.Add , "Key1", "Test", 1, 1
	           ImageCombo1.SelectedItem = ImageCombo1.ComboItems(1)
	        End Sub
	
	10. Run the project and note that the ImageCombo is initially blank.
	
	11. Try to pick the item from the list. Note that at no time does the image
	  appear, but the Text appears after the list has been dropped.
	
	12. Close the project.
	
	13. Change the code above (from step 9) to the following:
	
	        Private Sub MDIForm_Load()
	           ImageCombo1.ImageList = ImageList1   ' set ImageList at run-time
	           ImageCombo1.ComboItems.Add , "Key1", "Test", 1, 1
	           ImageCombo1.SelectedItem = ImageCombo1.ComboItems(1)
	           Me.Show  ' Show now rather than after this event finishes
	           ImageCombo1.SetFocus  ' This makes the Text appear
	        End Sub
	
	14. From the properties window of the ImageCombo, set ImageList to <None>.
	
	15. Run the project and note that the image and text now immediately appear in
	  the ImageCombo.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
