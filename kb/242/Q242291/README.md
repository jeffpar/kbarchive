---
layout: page
title: "Q242291: INFO: GetResultView Event Does Not Fire As Expected"
permalink: /kb/242/Q242291/
---

## Q242291: INFO: GetResultView Event Does Not Fire As Expected

	Article: Q242291
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:1.1,1.2,6.0
	Operating System(s): 
	Keyword(s): kbMMC kbVBp600bug kbGrpDSPlatform kbMMC110 kbDSupport kbMMC120 kbSnapIn
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Management Console, versions 1.1, 1.2 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the MMC SnapIn Designer for Visual Basic states that if
	the GetResultViewInfo event is not implemented, then the GetResultView event
	fires to allow the SnapIn to reuse a cached result view. However, the
	GetResultView event only fires if a result view for the selected scope pane item
	has been cached through the ResultView_Deactivate event.
	
	MORE INFORMATION
	================
	
	The following sample demonstrates the event sequence for the following three
	events:
	
	1. ResultView_Deactivate
	
	2. ScopePaneItems_GetResultView
	
	3. ScopePaneItems_GetResultViewInfo
	
	Steps To Reproduce
	------------------
	
	1. Start Visual Basic and select a new SnapIn project from the New Project
	  dialog box.
	
	2. Open the Snapin1 Designer and add a new URL view under the static node. By
	  default this new URL view is named URLView1.
	
	3. View the properties of URL view1, and set the URL field to a valid address
	  (http://example.microsoft.com/) and click Ok.
	
	4. View the properties of the static node and set the default view to URLView1
	  and click Ok.
	
	5. Open the code window for the Snapin1 Designer, and then paste in the
	  following code:
	
	     
	  Private Sub ResultViews_Deactivate(ByVal ResultView As SnapInLib.ResultView, Keep As Boolean)
	      Keep = True
	  End Sub
	
	  Private Sub ScopePaneItems_GetResultView(ByVal ScopePaneItem As SnapInLib.ScopePaneItem, Index As Variant)
	      ScopePaneItem.ResultView = ScopePaneItem.ResultViews(1)
	  End Sub
	
	  Private Sub ScopePaneItems_GetResultViewInfo(ByVal ScopePaneItem As SnapInLib.ScopePaneItem, 
	  ViewType As SnapInLib.SnapInResultViewTypeConstants, DisplayString As String)
	     ScopePaneItem.ResultViewType = siURLView
	  End Sub
	
	6. Set breakpoints in all three events and start the project in the debugger.
	
	7. Load the SnapIn into MMC. When the SnapIn loads, select the SnapIn1 scope
	  item. The debugger breaks in the ScopePaneItems_GetResultViewInfo event
	  handler. Press F5 to continue code execution.
	
	8. Click off the SnapIn1 scope item, and the debugger breaks in the
	  ResultViews_Deactivate event handler. Note that the keep property is set to
	  True. This indicates that this result view will be cached, and the
	  ScopePaneItems_GetResultView will be fired the next time the Result View is
	  needed. Press F5 to continue code execution
	
	9. Click back on the SnapIn1 scope item, the debugger breaks in the
	  ScopePaneItems_GetResultViewInfo event handler again. This time step through
	  the code using the F8 key, and note that the ScopePaneItems_GetResultView
	  event is handled.
	
	10. Stop the SnapIn and comment out the ResultViews_Deactivate event handler.
	
	11. Run the project again, and follow the above steps. Note that the
	  ScopePaneItems_GetResultView event is never fired.
	
	REFERENCES
	==========
	
	Refer to the following topic(s) in the SnapIn Designer for Visual Basic
	documentation :
	
	1. ScopePaneItems
	
	2. Debugging a SnapIn
	
	Additional query words: snapin designer mmc
	
	======================================================================
	Keywords          : kbMMC kbVBp600bug kbGrpDSPlatform kbMMC110 kbDSupport kbMMC120 kbSnapIn 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbMMCSearch kbMMC110 kbMMC120
	Version           : WINDOWS:1.1,1.2,6.0
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
