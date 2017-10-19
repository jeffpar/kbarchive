---
layout: page
title: "Q180749: BUG: Menu Shortcuts May Not Be Disabled with Form"
permalink: /kb/180/Q180749/
---

## Q180749: BUG: Menu Shortcuts May Not Be Disabled with Form

	Article: Q180749
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp kbVBp500bug kbVBp600 kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Form in a project has been disabled (Enabled property = False) the Shortcut
	keys to the last menu item of the first top-level menu are not disabled. Note
	that this happens only in emulation mode and not on the device itself.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	NOTE: The Windows CE Toolkit for Visual Basic 6.0 provides a command bar control
	that does not have this problem.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE (HPC) Project in Visual Basic. Form1 is created by
	  default.
	
	2. When the Project Properties dialog window appears, keep all the default
	  properties and click OK.
	
	3. On the Tools menu, select Menu Editor.
	
	4. In the Menu Editor dialog, enter the following properties:
	
	  Caption: File
	  Name: mnuFile
	
	5. Click Next, and then enter the following properties:
	
	  Caption: Open
	  Name: mnuFileOpen
	  Shortcut: CTRL + Q
	
	6. Click the RIGHT ARROW key to make mnuFileOpen a submenu item to mnuFile.
	
	7. Click Next, and then enter the following properties:
	
	  Caption: Close
	  Name: mnuFileClose
	  Shortcut: CTRL + W
	
	8. Click the RIGHT ARROW key to make mnuFileClose a submenu item to mnuFile.
	
	9. Click OK to dismiss the Menu Editor.
	
	10. Add the following code to Form1:
	
	        Private Sub mnuFileOpen_Click()
	           MsgBox "mnuFileOpen"
	           Form1.Enabled = True
	        End Sub
	
	        Private Sub mnuFileClose_Click()
	           MsgBox "mnuFileClose"
	           Form1.Enabled = True
	        End Sub
	
	11. Set the Enabled property of Form1 to False.
	
	12. Press F5 to run the project.
	
	13. Press the shortcut key for the File...Close menu (CTRL+W), and note that the
	  menu item select event fires.
	
	Additional query words: wince vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp kbVBp500bug kbVBp600 kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
