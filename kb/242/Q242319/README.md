---
layout: page
title: "Q242319: PRB: A &quot;The Parameter Is Incorrect&quot; Error Message In VB SnapIn"
permalink: /kb/242/Q242319/
---

## Q242319: PRB: A &quot;The Parameter Is Incorrect&quot; Error Message In VB SnapIn

	Article: Q242319
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:1.1,1.2,6.0
	Operating System(s): 
	Keyword(s): kbMMC kbVBp600 kbGrpDSPlatform kbMMC110 kbDSupport kbMMC120 kbSnapIn
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Management Console, versions 1.1, 1.2 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Snap-in developed by the Microsoft Management Console (MMC) Snap-in Designer
	For Microsoft Visual Basic might display the following error message:
	
	  Runtime Error -2147024809 (80070057)
	  The Parameter Is Incorrect
	
	CAUSE
	=====
	
	A Toolbar control in the SnapIn project is attempting to use a bitmap from an
	Image List which is not 16x16 pixels in size.
	
	RESOLUTION
	==========
	
	Make sure that all Toolbar controls use bitmaps images that are exactly 16x16
	pixels in size.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and select a new SnapIn project from the New Project
	  dialog box.
	
	2. Open the SnapIn1 Designer from the Project Explorer window and add a new
	  Toolbar and Image List control. By default these news controls will be named
	  ToolBar1 and ImageList1.
	
	3. View the properties of the Image List control, and insert a new bitmap image
	  that is not 16x16.
	
	4. Give the Key field a value for the new image.
	
	5. View the properties of the Toolbar control, and set the ImageList field to
	  ImageList1.
	
	6. On the Buttons tag, insert a new button on the toolbar.
	
	7. Set the Image field to the Key field of the bitmap image in the image list.
	
	8. Open the Snapin1 Designer's code window and paste in the following code:
	
	  Private Sub Views_SetControlbar(ByVal View As SnapInLib.View, ByVal Controlbar As SnapInLib.MMCControlbar)
	
	      Controlbar.Attach Toolbar1
	      
	  End Sub
	
	9. Compile the SnapIn project and load it into MMC.
	
	10. Select the default static node, SnapIn1. The error mentioned in the
	  "Symptoms" section appears.
	
	11. Change the bitmap image in the Image List control to a 16x16 bitmap.
	
	12. Retest the SnapIn. This time the error does not occur.
	
	Additional query words: snapin designer mmc
	
	======================================================================
	Keywords          : kbMMC kbVBp600 kbGrpDSPlatform kbMMC110 kbDSupport kbMMC120 kbSnapIn 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbMMCSearch kbMMC110 kbMMC120
	Version           : WINDOWS:1.1,1.2,6.0
	Issue type        : kbprb
	
	=============================================================================
	
