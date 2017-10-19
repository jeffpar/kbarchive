---
layout: page
title: "Q206904: BUG: Copying the Tab Control Does Not Display All Child Controls"
permalink: /kb/206/Q206904/
---

## Q206904: BUG: Copying the Tab Control Does Not Display All Child Controls

	Article: Q206904
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbTabCtrl kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Tabbed Dialog control (SP3) on a form and copy it,
	the control displays all of the child controls on the active tab on the
	resulting paste operation, but the child controls are not displayed on any other
	tab. The Left property is still set at a Left -75000 offset.
	
	CAUSE
	=====
	
	The SSTab control keeps an internal list of child controls on each tab. It also
	keeps a count of the child controls on each tab. If Form1 is saved and then
	examined in a text editor, such as Notepad, the number of controls on Tab 0 is 0
	instead of 1.
	
	The SSTab control builds a list of information about the controls contained on
	it, including the name of each of the controls. When the SSTab control is
	copied, its persisted data contains this array of control information. When the
	new tabctl is created by a Paste operation, the persisted data from the first
	control is used. The problem is that the controls that are created by Visual
	Basic with the second SSTab have different names than those in the persisted
	data: Command2 becomes Command3, and so forth. So when the SSTab tries to
	rebuild the controls dispid's array, it cannot find any matching names.
	Therefore, if the SSTab is pasted onto a different form that does not contain
	controls with the same names as its child controls, they all appear normal.
	
	RESOLUTION
	==========
	
	The workaround is to reset the Left properties of each control after the paste
	operation, while its parent tab is selected. This task can be simplified by
	placing the controls on each tab in a container control, such as a PictureBox or
	Frame control. Now only one control per tab must be repositioned after a paste,
	because the Left property of contained controls is not affected by the paste.
	
	Another approach is to replace the SSTab control with the TabStrip control from
	the Microsoft Windows Common Controls.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, select Components. Mark the Microsoft Tabbed Dialog
	  control and click OK.
	
	3. Add an SSTab control to Form1.
	
	4. Place a CommandButton on Tab 0.
	
	5. Select Tab 1 and place a CommandButton on it.
	
	6. Copy the tab control by selecting it and pressing the CTRL+C key combination.
	
	7. Paste the tab control by selecting Form1 and entering the CTRL+V key
	  combination. Note that you are asked you want to create a control array. The
	  problem occurs either way, but click No for each prompt.
	
	8. Click Tab 0 on the new control. The CommandButton is not visible on Tab 0.
	
	REFERENCES
	==========
	
	MSDN Library Visual Studio 6.0, Index "SSTab Control," "SSTab Control - MSTab
	Control"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbTabCtrl kbVBp kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
