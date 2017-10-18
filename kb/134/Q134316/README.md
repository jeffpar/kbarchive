---
layout: page
title: "Q134316: List of Read-Only Properties at Design Time in Visual FoxPro"
permalink: kb/134/Q134316/
---

## Q134316: List of Read-Only Properties at Design Time in Visual FoxPro

	Article: Q134316
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although the majority of object properties are available while in Form Designer,
	some (such as CurrentX) must be determined at run time and are therefore not
	accessible, and others (such as BaseClass) are attributes of the object and must
	remain unchanged.
	
	MORE INFORMATION
	================
	
	The following is a list of those properties extracted from the Language
	Reference (Visual FoxPro 3.0 Professional Edition only) and the Help file:
	
	ActiveColumn
	ActiveControl
	ActiveForm
	ActiveRow
	BaseClass
	Buttons
	ChildAlias
	Class
	ClassLibrary
	ControlCount
	Controls
	CurrentX
	CurrentY
	CursorSource
	Database
	Docked
	DockPosition
	DocumentFile
	FormCount
	Forms
	ItemData
	ItemIDData
	LeftColumn
	List
	ListCount
	ListIndex
	ListItem
	ListItemID
	NewIndex
	NewItemID
	Object
	OleClass
	OleTypeAllowed
	PageHeight
	Pages
	Parent
	ParentAlias
	ParentClass
	RelativeColumn
	RelativeRow
	ReleaseType
	Selected
	SelectedID
	SelLength
	SelStart
	SelText
	TopIndex
	TopItemID
	Picture (Combobox only)
	
	For more information concerning the use and syntax of these properties, please
	see the Help file or Language Reference.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
