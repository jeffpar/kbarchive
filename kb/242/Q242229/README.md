---
layout: page
title: "Q242229: HOWTO: Create An OCX View with the MMC Snap-in Designer for VB"
permalink: /kb/242/Q242229/
---

## Q242229: HOWTO: Create An OCX View with the MMC Snap-in Designer for VB

	Article: Q242229
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
	
	SUMMARY
	=======
	
	The Microsoft Management Console (MMC) Snap-in Designer for Visual Basic offers
	the ability to create result views based on ActiveX UserControls. The use of
	ActiveX UserControls allows for greater flexibility in what can be displayed in
	the Result View window. This article outlines the steps needed to create an OCX
	View.
	
	MORE INFORMATION
	================
	
	Steps to Create an OCX View
	---------------------------
	
	1. Start Visual Basic and select a new SnapIn project from the New Project
	  dialog box.
	
	2. Add a new UserControl to the project. By default this new UserControl will be
	  named UserControl1.
	
	3. Open the SnapIn1 Designer. Under the Static node, right-click the ResultView
	  node, and then select Add New Result View -> OCX View from the pop-up
	  menu. By default, the new Result View will be named OCXView1.
	
	4. Right-click the OCXView1 node and select Properties from the pop-up menu.
	
	5. When the property dialog box appears for OCXView1, set the ProgID text field
	  to the ProgID of the project's UserControl (Snapin.UserControl1). Close the
	  property sheet when done.
	
	6. Right-click the main parent node, Snapin1, and select Properties.
	
	7. When the Snap-in property sheet appears, set the Default Result View value to
	  OCXView1. Close the property sheet.
	
	8. Open the UserControl1 code window, and add the following code:
	
	  Private Sub UserControl_Click()
	      UserControl.BackColor = vbRed
	  End Sub
	
	9. Compile the project and start MMC.
	
	10. Load the snap-in into MMC and select the SnapIn1 scope item. The UserControl
	  will be rendered in the result view window.
	
	11. Click anywhere in the result view window and the background color of the
	  window will change to red.
	
	Notes:
	
	- An OCX View will not display when a snap-in is run from within the Visual
	  Basic integrated development environment (IDE). The SnapIn project must be
	  compiled to an executable to work properly.
	
	- A UserControl will resize to fill the Result View window, regardless of the
	  window's size. Any controls sited on the UserControl will not be
	  automatically repositioned when the UserControl is resized.
	
	- By default, a UserControl is only initialized once, the first time it is used
	  in a Result View. The ResultViews_InitializeControl event will only be fired
	  once for each OCX View. An OCX View provides the AlwaysCreateNewOCX property
	  to change this behavior. With the AlwaysCreateNewOCX property set to TRUE, a
	  new instance of the UserControl is created each time a Result View is
	  rendered.
	
	Additional query words: snapin designer mmc
	
	======================================================================
	Keywords          : kbMMC kbVBp600 kbGrpDSPlatform kbMMC110 kbDSupport kbMMC120 kbSnapIn 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbMMCSearch kbMMC110 kbMMC120
	Version           : WINDOWS:1.1,1.2,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
