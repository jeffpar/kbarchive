---
layout: page
title: "Q215432: PRB: CE TabStrip Images Might Not Be Redrawn Properly"
permalink: /kb/215/Q215432/
---

## Q215432: PRB: CE TabStrip Images Might Not Be Redrawn Properly

{% raw %}

	Article: Q215432
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change the image on the selected tab of a TabStrip control, the image is
	not updated until you change tabs. If you remove all the images, the tabstrip
	does not reflect the removal of the images.
	
	CAUSE
	=====
	
	Modification of the ImageList control after another control is bound to it is
	unsupported. Do not expect the bound control to check for any immediate changes
	in the underlying ImageList control.
	
	RESOLUTION
	==========
	
	The solution is to rebind the ImageList to the TabStrip control to view any
	changes to the images. In the sample below, you need to uncomment the following
	line of code after the ImageList is changed in the Command3 and Command4 click
	events:
	
	  TabStrip1.ImageList = ImageList1.hImageList
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: You might need to make changes to the names of the bitmap files depending
	upon what image files are available in the Windows directory of the emulator or
	on the device.
	
	1. Create a new Windows CE Project in Visual Basic. Form1 is created by default.
	
	2. On the Project menu, choose Components, and add the Microsoft CE ImageList
	  Control 6.0 and Microsoft CE TabStrip Control 6.0 to the project.
	
	3. Add a TabStrip, an ImageList, and four CommandButton controls to Form1.
	
	4. Copy and paste the following code into Form1's code module:
	
	  Private Sub Command1_Click()
	      TabStrip1.Tabs.Clear
	      TabStrip1.Tabs.Add , , "One", 0
	      TabStrip1.Tabs.Add , , "Two", 1
	      TabStrip1.Tabs.Add , , "Three", 2
	  End Sub
	
	  Private Sub Command2_Click()
	      ImageList1.Add "\windows\tiles.bmp"
	      ImageList1.Add "\windows\weave.bmp"
	      ImageList1.Add "\windows\default.bmp"
	      TabStrip1.ImageList = ImageList1.hImageList
	  End Sub
	
	  Private Sub Command3_Click()
	      ImageList1.Replace TabStrip1.SelectedItem.Index - 1, _
	          "\windows\cubes.bmp"
	      'Uncomment the next line for the workaround
	      'TabStrip1.ImageList = ImageList1.hImageList
	  End Sub
	
	  Private Sub Command4_Click()
	      If ImageList1.Count > 0 Then ImageList1.RemoveAll
	      'Uncomment the next line for the workaround
	      'TabStrip1.ImageList = ImageList1.hImageList
	  End Sub
	   
	  Private Sub Form_Load()
	      Form1.Move 0, 0, 3000, 3000
	      Command1.Move 100, 60, 1245, 300
	      Command2.Move 1560, 60, 1245, 300
	      Command3.Move 100, 480, 1245, 300
	      Command4.Move 1560, 480, 1245, 300
	      TabStrip1.Move 100, 1000, 2800, 1600
	      Command1.Caption = "Set up tabs"
	      Command2.Caption = "Load images"
	      Command3.Caption = "Change image"
	      Command4.Caption = "Clear ImageList"
	      Form1.Caption = "Tabstrip Problem Repro"
	  End Sub
	
	5. Press the F5 key to run the application in emulation or on the device,
	  depending on what the target is set to.
	
	6. Click on Command1 and note that three tabs appear on the TabStrip control.
	
	7. Click on Command2 and note that an image is added to each tab.
	
	8. Select any of the tabs and then click on Command3. The image on the selected
	  tab does not change.
	
	9. Select a different tab and note that the image on the previously selected tab
	  changes.
	
	10. After clicking on Command4, note that the images on the tabs are not
	  cleared.
	
	11. Select a different tab and note that the images on the previously selected
	  and currently selected tabs are cleared.
	
	Additional query words: wce vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600 kbVBeMb300
	Version           : :1.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
