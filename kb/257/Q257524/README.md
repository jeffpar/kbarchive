---
layout: page
title: "Q257524: FIX:Adding Items to ListView Control Results inIPF onWin95/98/Me"
permalink: /kb/257/Q257524/
---

## Q257524: FIX:Adding Items to ListView Control Results inIPF onWin95/98/Me

	Article: Q257524
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbCtrl kbListView kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Invalid Page Fault is encountered when dynamically loading and populating
	ListView controls within a control array.
	
	RESOLUTION
	==========
	
	This problem can be solved in one of three ways:
	
	- Install Visual Studio Service Pack 4.
	- Dynamically load all ListView controls before adding ListItems collections to
	  any of them.
	- Pre-load the ListView controls at design time instead of creating them
	  dynamically.
	
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
	
	This behavior occurs under the Microsoft Windows 95, Microsoft Windows 98 and
	Microsoft Windows Me operating systems but does not occur under Microsoft
	Windows NT or Microsoft Windows 2000.
	
	By using a DoEvents command during the process of dynamically loading the
	controls, you may prevent the error from occurring immediately. However, the
	error still occurs when you terminate the application.
	
	In addition, this problem does not occur if all ListView controls are loaded
	before items are added to them or if the ListView controls are all loaded at
	design time.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, select Components, check Microsoft Windows Common
	  Controls 6.0, and then click OK.
	
	3. Add a ListView control to Form1.
	
	4. Set the Index property of the ListView control to 0.
	
	5. Paste the following code into Form1's code window:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	     Dim i As Integer
	     Dim j As Integer
	     Dim objListItem As ListItem
	
	     ' Set view to report
	     ListView1(0).View = lvwReport
	     
	     ' Add some columns to listview
	     ListView1(0).ColumnHeaders.Add , "col1", "col1"
	     ListView1(0).ColumnHeaders.Add , "col2", "col2"
	     ListView1(0).ColumnHeaders.Add , "col3", "col3"
	
	     ' Load and populate total of 6 ListView controls
	     For i = 0 To 5
	        If i > 0 Then
	           ' Create a new ListView control
	           Load ListView1(i)
	           
	           ' Position and show the new control
	           ListView1(i).Left = ListView1(i - 1).Left + 250
	           ListView1(i).Top = ListView1(i - 1).Top + 250
	           ListView1(i).Visible = True
	        End If
	          
	        ' Add 10 data items to the listview just created
	        For j = 1 To 10
	           Set objListItem = ListView1(i).ListItems.Add(, , "data1-" & j)
	           objListItem.SubItems(1) = "data2-" & j
	           objListItem.SubItems(2) = "data3-" & j
	           
	           ' Set the tag property of the new ListItem
	           objListItem.Tag = j
	        Next j
	     Next i
	  End Sub
	
	6. Run the program.
	
	RESULT: An Invalid Page Fault occurs.
	
	Additional query words: sp4 IPF GPF
	
	======================================================================
	Keywords          : kbCmnCtrls kbCtrl kbListView kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbVS600sp4fix kbOSWinME kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
