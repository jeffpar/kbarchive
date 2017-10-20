---
layout: page
title: "Q291007: INFO: All Submenu Items Cannot Be Invisible"
permalink: /kb/291/Q291007/
---

## Q291007: INFO: All Submenu Items Cannot Be Invisible

{% raw %}

	Article: Q291007
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMenu kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet
	Last Modified: 23-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	All submenu items in a menu cannot be set to invisible at run time or design
	time. At least one of the submenu items must remain visible at all times.
	
	MORE INFORMATION
	================
	
	Visual Basic does not allow a top-level menu item with no submenu items to
	display. Therefore, setting all submenu items to invisible rasies an error
	message. If you attempt to deselect (uncheck) the Visible option for all
	submenus in the Menu Editor, and then click OK to save the menu, you receive the
	following error message:
	
	  At least one submenu item must be visible.
	
	Steps to Demonstrate Run-Time Behavior
	--------------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Tools menu, click to select the Menu Editor. Create a menu on Form1
	  with a top-level menu with the caption Top and name mnuTop.
	
	3. Create two submenu items with captions Sub1 and Sub2, and names mnuSub1 and
	  mnuSub2. Note that you create submenu items by pressing the RIGHT-ARROW
	  button to indent one level.
	
	4. Paste the following code into the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	  mnuSub1.Visible = False
	  mnuSub2.Visible = False
	  End Sub
	
	5. Press the F5 key to run the project, and note that you see the following
	  error message:
	
	  Runtime Error '387':
	  'Visible' property can't be set on this control.
	
	6. Click End to dismiss the error, and then comment out the line:
	
	  mnuSub2.Visible = False
	
	7. Press F5, and note that there is no error.
	
	Note that making the top-level menu item invisible is fine. For example:
	
	  mnuTop.Visible = False
	
	Naturally, with the top-level menu item invisible, this effectively removes all
	the submenu items as well. However, if you make the top-level item invisible, it
	can still be displayed as a shortcut menu. Any submenu items made invisible do
	not appear on the shortcut menu.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMenu kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
