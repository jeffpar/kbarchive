---
layout: page
title: "Q298501: BUG: Menu Item Captions Is Displayed Incorrectly"
permalink: /kb/298/Q298501/
---

## Q298501: BUG: Menu Item Captions Is Displayed Incorrectly

	Article: Q298501
	Product(s): Microsoft Visual Basic for Windows
	Version(s): (all versions and editions),4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMenu kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kb32bitOnly
	Last Modified: 28-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows NT, versions (all versions and editions), 4.0 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer that is running Windows 95 or Windows NT 4.0, if you change the
	caption of a menu item that has a shortcut key in the parent menu click event,
	the new caption is displayed incorrectly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	If you change the menu item caption from any other event, or if you change it in
	the parent menu click event while you are running on another operating system,
	the changed caption is displayed correctly.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a Windows 95-based or a Windows NT 4.0-based system, create a new Standard
	  EXE project in Visual Basic. Form1 is created by default.
	
	2. Select Form1. From the Tools menu, click Menu Editor, or click the Menu
	  Editor button on the toolbar.
	
	3. In the Caption text box, type "Edit" (without the quotation marks). This is
	  the parent item that appears on the menu bar.
	
	4. In the Name text box, type "mnuEdit" (without the quotation marks), and then
	  click Next to create another menu item.
	
	5. In the Caption text box, type "Copy" (without the quotation marks).
	
	6. In the Name text box, type "mnuCopy" (without the quotation marks).
	
	7. In the Shortcut combo box, click the CTRL+C key combination.
	
	8. Click the right arrow button to change the indentation level of the item, and
	  then click OK to close the Menu Editor dialog box.
	
	9. Paste the following code in the general declarations section of Form1:
	
	  Private Sub mnuEdit_Click()
	      mnuCopy.Caption = "Paste"
	  End Sub
	
	10. Press F5 to run the project, and then click the Edit menu. Notice that the
	  caption of the child menu item is not displayed correctly.
	
	Additional query words: properly
	
	======================================================================
	Keywords          : kbMenu kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :(all versions and editions),4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
