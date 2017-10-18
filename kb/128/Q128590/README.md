---
layout: page
title: "Q128590: How to Size, Minimize, or Define a READ Form Window"
permalink: kb/128/Q128590/
---

## Q128590: How to Size, Minimize, or Define a READ Form Window

	Article: Q128590
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some windows attributes related to a form. The tasks
	described in this article are available as commands in Microsoft FoxPro versions
	2.x for Windows and for MS-DOS. As the association between the functionality and
	the properties might not be readily apparent, this article describes how the
	BorderStyle, WindowState, and WindowType properties relate to sizing,
	minimizing, or defining a READ form window.
	
	MORE INFORMATION
	================
	
	Sizing a Window
	---------------
	
	It is possible to control whether or not a form window can be resized. The
	sizable attribute can be controlled with the BorderStyle property. To conform to
	Windows interface guidelines, all System windows can be sized. Furthermore,
	because only System windows can be resized, the style of the border defined for
	the window determines whether or not the window can be sized. When the
	BorderStyle property has a value of 3 (System), the Form window can be sized by
	dragging the lower right hand corner or by pressing CTRL+F8.
	
	
	Minimizing a Window
	-------------------
	
	By using the MinButton and MaxButton properties, you can control whether a user
	can click the Minimize or Maximize buttons. You can use the WINDOWSTATE property
	to minimize or maximize a form window. For example, the following command
	minimizes a form called oFrmtest:
	
	     oFrmtest.WindowState = 1
	
	Using a READ Window
	-------------------
	
	Two values (2-READ and 3-READ MODAL) of the WindowType property, define a READ
	form window where program execution stops at the Show method or the DO FORM
	command. These values are only available in a form set, and one of the forms in
	the form set has to contain a Page Frame. As this feature is implemented for
	backwards compatibility, it is preferable to use the new event model with your
	Microsoft Visual FoxPro forms.
	
	For more information about the BorderStyle, WindowState, and WindowType
	properties, please search in the online FoxPro Help menu using the words
	BorderStyle, WindowState, or WindowType.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
