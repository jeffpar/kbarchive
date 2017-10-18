---
layout: page
title: "Q215397: BUG: Menu Cannot be Disabled By CommandBar Controls Collection"
permalink: kb/215/Q215397/
---

## Q215397: BUG: Menu Cannot be Disabled By CommandBar Controls Collection

	Article: Q215397
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual Basic, version 3.0, on platform(s):
	   - Microsoft Windows CE versions 2.0, 2.11 for the Handheld PC 
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows CE CommandBar menu is not disabled when accessing the object through
	the Controls collection of the CommandBar.
	
	RESOLUTION
	==========
	
	Enable and disable a CommandBar menu object by accessing the Enabled property of
	the CommandBarMenuBar object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps by Step Example
	---------------------
	
	1. Start a new Windows CE H/PC Pro Project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandBar control, a ListBox and two CommandButtons to Form1.
	
	3. Paste the following code in to the form's code window:
	
	  Option Explicit
	  Dim cbrMnuBar As CommandBarMenuBar
	
	  Private Sub Form_Activate()
	      Set cbrMnuBar = CommandBar1.Controls.Add(cbrMenuBar)
	      cbrMnuBar.Items.Add , , "MenuBug"
	      cbrMnuBar.Items(1).SubItems.Add , , "SubMenuBug"
	      cbrMnuBar.Items.Add , , "MenuFix"
	      cbrMnuBar.Items(2).SubItems.Add , , "SubMenuFix"
	      Command1.Caption = "Disable MenuBug"
	      Command2.Caption = "Disable MenuFix"
	  End Sub
	
	  Private Sub Command1_Click()
	      CommandBar1.Controls(1).Enabled = Not CommandBar1.Controls(1).Enabled
	      List1.AddItem "MenuBug Enabled = " & CommandBar1.Controls(1).Enabled
	      If CommandBar1.Controls(1).Enabled Then
	         Command1.Caption = "Disable MenuBug"
	      Else
	         Command1.Caption = "Enable MenuBug"
	      End If
	  End Sub
	
	  Private Sub Command2_Click()
	      cbrMnuBar.Items(2).Enabled = Not cbrMnuBar.Items(2).Enabled
	      List1.AddItem "MenuFix Enabled = " & cbrMnuBar.Items(2).Enabled
	      If cbrMnuBar.Items(2).Enabled Then
	         Command2.Caption = "Disable MenuFix"
	      Else
	         Command2.Caption = "Enable MenuFix"
	      End If
	  End Sub
	
	  Private Sub CommandBar1_MenuClick(ByVal Item As CommandbarLib.Item)
	      MsgBox Item.Caption & " click fired"
	  End Sub
	
	4. Click Command1 to disable the first menu and notice that clicking the menu
	  still fires the MenuClick event and the menu still appears enabled. The menu
	  has not been disabled.
	
	5. Click Command2 and notice that the second menu has been disabled and the
	  MenuClick event does not fire.
	
	Additional query words: vbce wce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch
	Version           : :1.0,2.0,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
