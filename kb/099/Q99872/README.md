---
layout: page
title: "Q99872: FIX: Wrong Menu Click Event After Hiding Menu"
permalink: kb/099/Q99872/
---

## Q99872: FIX: Wrong Menu Click Event After Hiding Menu

	Article: Q99872
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	- Microsoft Visual Basic Standard Edition for Windows, versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The wrong menu Click event is executed after hiding and showing menu items in
	Visual Basic.
	
	CAUSE
	=====
	
	This problem occurs when a menu is made invisible before another menu item is
	made visible.
	
	WORKAROUND
	==========
	
	Change the order followed to make menus visible and invisible. For example
	replace the following code (listed in step 4 in the More Information section
	below):
	
	     Sub Command1_Click ()
	        MnuFile.Visible = 0
	        MnuEdit.Visible = -1
	     End Sub
	
	     Sub Command2_Click ()
	        MnuEdit.Visible = 0
	        MnuFile.Visible = -1
	     End Sub
	
	with this code:
	
	     Sub Command1_Click ()
	        MnuEdit.Visible = -1
	        MnuFile.Visible = 0
	     End Sub
	
	     Sub Command2_Click ()
	        MnuFile.Visible = -1
	        MnuEdit.Visible = 0
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in Visual Basic
	version 4.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic or from the File menu, choose New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. From the menu design dialog box of Visual Basic (VB.EXE), create a set of
	  menus using the following table as a guide:
	
	  Caption     CtlName (or Name)  Level    Visible
	  ------------------------------------------------
	  &File       MnuFile              1       False
	  &New        MnuFileNew           2       True
	  &Edit       MnuEdit              1       False
	  &Copy       MnuEditCopy          2       True
	
	3. Add two command buttons (Command1 and Command2) to the form.
	
	4. Add the following code to your program in the appropriate places:
	
	     Sub Command1_Click ()
	        MnuFile.Visible = 0
	        MnuEdit.Visible = -1
	     End Sub
	
	     Sub Command2_Click ()
	        MnuEdit.Visible = 0
	        MnuFile.Visible = -1
	     End Sub
	
	     Sub MnuEdit_Click ()
	        Debug.Print "Edit Click"
	     End Sub
	
	     Sub MnuEditCopy_Click ()
	        Debug.Print "Copy Click"
	     End Sub
	
	     Sub MnuFile_Click ()
	        Debug.Print "File Click"
	     End Sub
	
	     Sub MnuFileNew_Click ()
	        Debug.Print "New Click"
	     End Sub
	
	5. From the Run menu, choose start (ALT, R, S), or press F5.
	
	6. From the Window menu, choose debug (ALT, W, D), or press CTRL+B.
	
	7. Click Command1. You will see the Edit menu on Form1.
	
	8. Click the Edit menu on Form1. Then click the Copy menu. You will see Edit
	  Click and Copy Click displayed in the Debug Window.
	
	9. Click Command2. You will now see the File menu in place of the Edit menu on
	  Form1.
	
	10. Click the File menu on Form1. Then click the New menu. You will see File
	  Click and New Click in the Debug Window.
	
	11. Repeat steps 7 and 8. Instead of seeing Edit Click and Copy Click in the
	  Debug Window, you will now see New Click and Copy Click in the Debug Window.
	
	The click event for the previously visible menu is being executed instead of the
	click event for the currently visible menu.
	
	Additional query words: buglist1.00 buglist2.00 buglist3.00 2.00 3.00 fixlist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :1.0,2.0,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
