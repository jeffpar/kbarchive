---
layout: page
title: "Q250314: PRB: Visual Basic Snap-In Designer Run-Time Error 9554"
permalink: kb/250/Q250314/
---

## Q250314: PRB: Visual Basic Snap-In Designer Run-Time Error 9554

	Article: Q250314
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMMC kbVBp600 kbGrpDSPlatform kbDSupport kbSnapIn
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programmatically expanding the Static Node at run time may cause the following
	error message to be displayed:
	
	  Run-time error "9554": The scope node is not connected to MMC. This can
	  happen with the static node before it is expanded.
	
	CAUSE
	=====
	
	If the Static Node has not been expanded by the user by either double-clicking
	the Static Node or by clicking the plus sign next to the Static Node, the
	ExpandInNameSpace method displays the error message shown in the "Symptoms"
	section.
	
	RESOLUTION
	==========
	
	The Static Node must be expanded manually by the user.
	
	MORE INFORMATION
	================
	
	The following code demonstrates this error. Using the Views_AddTopMenuItems code
	below, the call to open the Static Node causes the error message:
	
	  Private Sub Views_AddTopMenuItems(ByVal View As SnapInLib.View, _
	                                    ByVal Selection As SnapInLib.MMCClipboard, _
	                                    ByVal ContextMenu As SnapInLib.ContextMenu, _
	                                    InsertionAllowed As Boolean)
	                                    
	      With Selection.ScopeItems(1)
	          'Check to see if the current ScopeNode has been
	          'expanded and if only a sigular ScopeNode has been
	          'selected.
	          If .ScopeNode.ExpandedOnce = False And Selection.SelectionType = siSingleScopeItem Then
	              'Expand the currently selected ScopeNode
	              .ScopeNode.ExpandInNameSpace
	              'Add Context Menu.
	              ContextMenu.AddMenu mnuMain
	          End If
	      End With
	      
	  End Sub
	
	This error is rare because the Static Node object is normally fully loaded before
	other methods attempt to expand the node.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMMC kbVBp600 kbGrpDSPlatform kbDSupport kbSnapIn 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
