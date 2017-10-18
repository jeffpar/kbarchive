---
layout: page
title: "Q128154: How Toolbars Differ from Forms"
permalink: kb/128/Q128154/
---

## Q128154: How Toolbars Differ from Forms

	Article: Q128154
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Visual FoxPro for Windows, you can create and customize toolbars. They may
	contain any type of control. Although toolbars appear in a window and can be
	included in form sets, they are different objects from forms. This article lists
	the properties, events, and methods that highlight the differences between
	toolbars and forms.
	
	MORE INFORMATION
	================
	
	The main characteristics of a toolbar is that it is dockable, has a half height
	title bar, and is always on top. When you build a toolbar, you may consider
	using the properties, events, and methods discussed in this article.
	
	Closable Property
	-----------------
	
	The CLOSABLE property is not a property of the toolbar. Toolbars can be closed by
	clicking the Close box. Set the CONTROLBOX property to .F. to specify that a
	toolbar cannot be closed. Note that the ControlBox property has no effect in
	Visual FoxPro for the Macintosh.
	
	GetFocus and SetFocus Methods
	-----------------------------
	
	A toolbar never receives the focus, and there is no GETFOCUS or SETFOCUS event
	handler for the toolbar object. However text box, list box, and edit box
	controls placed on a toolbar can receive the focus.
	
	Activate event
	--------------
	
	The ACTIVATE event occurs when a toolbar object is shown. The toolbar object does
	not receive the ACTIVATE event when it is clicked.
	
	Deactivate event
	----------------
	
	The DEACTIVATE event occurs when the toolbar is closed or hidden.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
