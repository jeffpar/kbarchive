---
layout: page
title: "Q180496: BUG: Lines Drawn on Form Disappear After Menu Covers Them"
permalink: /kb/180/Q180496/
---

## Q180496: BUG: Lines Drawn on Form Disappear After Menu Covers Them

	Article: Q180496
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500bug kbVBp600bug kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a menu drops down and covers lines drawn directly on a form, the line that
	is covered will not be repainted correctly. This behavior also occurs with the
	CommandBar and MenuBar controls.
	
	RESOLUTION
	==========
	
	To avoid this problem, redraw the line in the Click event of the submenu. For
	example, if you have a File menu with a submenu named "New," add the following
	code for the "New" submenu Click event:
	
	     Private Sub mnuNew_Click()
	        'Normal New menu code here
	        Drawline 0,0,1000,1000   'Redraw line.
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE Handheld PC Pro Project in either eMbedded Visual
	  Basic or Visual Basic. Form1 is created by default.
	
	2. From the Project menu, choose Components and select the CommandBar control.
	
	3. Add a CommandBar control and a Command Button to Form1.
	
	4. Add the following code to Form1:
	
	      Option Explicit
	
	         Private Sub Command1_Click()
	             DrawLine 0, 0, 1000, 1000
	         End Sub
	
	  Private Sub Form_Load()
	      Dim mnuMain As CommandbarLib.CommandBarMenuBar
	      Dim mnuFile As CommandbarLib.Item
	      
	      Set mnuMain = CommandBar1.Controls.Add(cbrMenuBar, "MainMenu")
	      
	      'add File menu items
	      Set mnuFile = mnuMain.Items.Add(1, "File", "File")
	          mnuFile.SubItems.Add , "Open", "Open"
	          mnuFile.SubItems.Add , "Add", "Add"
	          mnuFile.SubItems.Add , "Update", "Update"
	          mnuFile.SubItems.Add , "Delete", "Delete"
	  End Sub
	
	5. Press F5 to run the project.
	
	6. Click on the CommandButton to draw a line.
	
	7. Select an option on the submenu and note that either all or part of the line
	  does not get repainted.
	
	Additional query words: wce vbce vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp500bug kbVBp600bug kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
