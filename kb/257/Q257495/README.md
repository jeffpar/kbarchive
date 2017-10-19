---
layout: page
title: "Q257495: FIX: ListView Executes ItemClick Twice with Label Set to Manual"
permalink: /kb/257/Q257495/
---

## Q257495: FIX: ListView Executes ItemClick Twice with Label Set to Manual

	Article: Q257495
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActivexEvents kbCtrl kbListView kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kb
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click on an item in a ListView control, the ItemClick event for the
	ListView control executes twice.
	
	CAUSE
	=====
	
	This problem is caused by the way in which manual label editing is implemented.
	When you select an item, the ItemClick event is fired normally, but, in
	addition, the ListView control enables a built-in timer whose delay is equal to
	that of the duration of a double-click. When this delay elapses, the timer's
	event is triggered and the code for this timer determines if the ListView
	control should enter the label editing mode. If label editing is aborted, which
	is always the case for manual label editing, then the selection is cleared and
	re-selected. This re-selection triggers the second ItemClick.
	
	You can cause this problem to occur in one of two ways. The first is to set the
	LabelEdit property of ListView to lvwManual (as in the sample code in the "More
	Information" section of this article). An alternate way of reproducing this
	behavior is to set the LabelEdit property to lvwAutomatic and set Cancel equal
	to True in the BeforeLabelEdit event of ListView.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the latest service pack for Visual Studio 6.0.
	
	If installing the service pack is not an option or you are running a version of
	Visual Basic earlier than version 6.0, set the LabelEdit property of the
	ListView control to lvwAutomatic and do not set Cancel equal to True in the in
	the BeforeLabelEdit event of ListView.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, choose Components, select Microsoft Windows Common
	  Controls, and then click OK.
	
	3. Add a ListView control to Form1.
	
	4. Paste the following code into Form1's code window:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	      Dim Col As ColumnHeader
	      Dim itmAdd As ListItem
	      
	      ' Set the report's view
	      ListView1.View = lvwReport
	      
	      ' Add a column to the listview
	      Set Col = ListView1.ColumnHeaders.Add(Text:="Items")
	      
	      ' Set the label editing to manual
	      ListView1.LabelEdit = lvwManual
	      
	      ' Add some sample data
	      Set itmAdd = ListView1.ListItems.Add(Text:="one")
	      Set itmAdd = ListView1.ListItems.Add(Text:="two")
	  End Sub
	
	  Private Sub ListView1_ItemClick(ByVal Item As MSComctlLib.ListItem)
	      Debug.Print ListView1.SelectedItem.Text
	  End Sub
	
	5. Run the sample.
	
	6. Click item "two" in the ListView control. This should result in the text of
	  item "two" being displayed in the debug/immediate window.
	
	7. Wait a moment and then click item "two" again. This results in the text of
	  item "two" being displayed two more times in the debug/immediate window.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbActivexEvents kbCtrl kbListView kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
