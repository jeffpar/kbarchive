---
layout: page
title: "Q242322: PRB: ToolTipText Property On MMCToolbar Button Does Not Update"
permalink: kb/242/Q242322/
---

## Q242322: PRB: ToolTipText Property On MMCToolbar Button Does Not Update

	Article: Q242322
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
	
	A SnapIn project developed with the MMC Snap-in Designer for Visual Basic may
	require that a MMCToolbar button's ToolTipText property be changed at runtime.
	While the ToolTipText property for an MMCToolbar button cannot be changed
	dynamically, it can be changed the next time the MMCToolbar control is attached
	to a view.
	
	CAUSE
	=====
	
	By design the ToolTipText property for an MMCToolbar button control cannot be
	changed while it's MMCToolbar is being displayed in the current view.
	
	RESOLUTION
	==========
	
	Remove the MMCToolbar button from the MMCToolbar button collection. Modify the
	ToolTipText property and re-add the MMCButton to the MMCToolbar control. The
	next time the MMCToolbar control is attached to a view, the updated ToolTipText
	will be displayed. The following code demonstrates how to achieve this
	functionality:
	
	      ' only modify a certain toolbar button
	      Select Case Button.Key
	      
	          Case "Test":
	          
	              ' change the tooltiptext for this button
	              Button.ToolTipText = "This is a different tip"
	              
	              ' remove the button from the toolbar control
	              Call Toolbar1.Buttons.Remove(Button.Index)
	              
	              ' re-add the button to the toolbar control
	              Call Toolbar1.Buttons.Add(Button.Index, Button.Key, Button.Caption, Button.Style, Button.Image, Button.ToolTipText)
	              
	      End Select
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following steps demonstrate how to change the ToolTipText property of an
	MMCToolbar button control.
	
	Steps to reproduce sample
	-------------------------
	
	1. Start Visual Basic and select a New SnapIn project.
	
	2. Open the SnapIn1 Designer from the Project Explorer, and add a new ImageList
	  and Toolbar object under the Tools Node. By default these objects will be
	  named ImageList1 and Toolbar1.
	
	3. View the properties of ImageList1, and insert a 16x16 bitmap into the
	  Imagelist. Set the Key field of the bitmap to "Test."
	
	4. View the properties of Toolbar1 and set the ImageList field to ImageList1. On
	  the Buttons tab, insert a new button onto the toolbar. Set the Key and Image
	  fields to "Test," and the ToolTipText field to "First ToolTip."
	
	5. Open the code window to the SnapIn1 Designer and paste in the following code:
	
	  Private Sub Toolbar1_ButtonClick(ByVal Selection As SnapInLib.MMCClipboard, ByVal Button As SnapInLib.MMCButton)
	
	      ' only modify a certain toolbar button
	      Select Case Button.Key
	      
	          Case "Test":
	          
	              ' change the tooltiptext for this button
	              Button.ToolTipText = "This is a different tip"
	              
	              ' remove the button from the toolbar control
	              Call Toolbar1.Buttons.Remove(Button.Index)
	              
	              ' re-add the button to the toolbar control
	              Call Toolbar1.Buttons.Add(Button.Index, Button.Key, Button.Caption, Button.Style, Button.Image, Button.ToolTipText)
	              
	      End Select
	      
	  End Sub
	
	  Private Sub Views_SetControlbar(ByVal View As SnapInLib.View, ByVal Controlbar As SnapInLib.MMCControlbar)
	
	      ' attach the test MMCToolbar control to the Controlbar
	      Controlbar.Attach Toolbar1
	      
	  End Sub
	
	6. Compile the SnapIn and load it into MMC.
	
	7. When the SnapIn loads, the sample button appears in the MMC menu item area.
	  Move the mouse over the button, and the current ToolTipText will be
	  displayed.
	
	8. Click the button. Move the mouse over the button, and notice the original
	  ToolTipText is still displayed.
	
	9. On the ScopeNode pane, select the ConsoleRoot node, and then the SnapIn1
	  Node. When the SnapIn1 Node is selected the MMCToolbar is re-attach to the
	  MMC Controlbar with the updated button./
	
	10. Move the mouse over the button. The new ToolTipText displays.
	
	Additional query words: snapin designer mmc
	
	======================================================================
	Keywords          : kbMMC kbVBp600 kbGrpDSPlatform kbMMC110 kbDSupport kbMMC120 kbSnapIn 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbMMCSearch kbMMC110 kbMMC120
	Version           : WINDOWS:1.1,1.2,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
