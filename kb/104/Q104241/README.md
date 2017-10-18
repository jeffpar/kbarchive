---
layout: page
title: "Q104241: PRB: Missing Menu IDs from ClassWizard &quot;Object IDs&quot; Window"
permalink: kb/104/Q104241/
---

## Q104241: PRB: Missing Menu IDs from ClassWizard &quot;Object IDs&quot; Window

	Article: Q104241
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbwizard kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbGrpDSTools
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, included with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The menu IDs of a menu created with App Studio, or Developer Studio in Visual
	C++ version 4.0, do not appear in the ClassWizard Object IDs window when a
	CDialog, CDialog-derived, CFormView, or CFormView-derived class is selected in
	the ClassWizard Class Name combo box. However, the IDs do appear when other
	classes, such as a program's CWinApp-derived class, are selected.
	
	CAUSE
	=====
	
	This is by design. ClassWizard associates only one class with a resource. Follow
	the steps below to associate the menu IDs with a particular class.
	
	RESOLUTION
	==========
	
	Below are the steps that allow the developer to see the menu IDs in the Object
	IDs list when a CFormview or CDialog class is selected within ClassWizard.
	
	1. Go to App Studio or Developer Studio and select the desired menu.
	
	2. Press CTRL+W or choose the ClassWizard toolbar button.
	
	3. For Visual C++ for Windows or Visual C++, 32-bit Edition, version 2.x, choose
	  "Select Class" when the ClassWizard dialog box "Add Class" is displayed. (For
	  Visual C++, 32-bit Edition, version 4.0, the "MFC ClassWizard" dialog box is
	  displayed.)
	
	4. Select the CDialog, CDialog-derived, CFormView, or CFormView-derived class
	  from the "Class Name" list. The menu IDs will be displayed in the Object IDs
	  list.
	
	MORE INFORMATION
	================
	
	One example of when this problem occurs is when a menu is attached to a dialog,
	through the menu selection box in the dialog properties sheet, and an attempt is
	made to create handlers for the menu items in the dialog class. Upon building
	the project, the menu will be visible in the dialog box, but the menu item IDs
	are not available in ClassWizard. Therefore, no command handlers can be created
	for these menu items. As stated above, it is necessary to invoke ClassWizard
	with the menu visible in the Resource Editor to properly associate these menu
	items with the dialog class.
	
	In Visual C++ version 1.5 and above, the Message Maps tab needs to be in the fore
	because ClassWizard is a tabbed dialog box in these versions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
