---
layout: page
title: "Q137441: Why the UIEnable Event Does Not Exist for All Controls"
permalink: kb/137/Q137441/
---

## Q137441: Why the UIEnable Event Does Not Exist for All Controls

	Article: Q137441
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The UIEnable event does not occur for the Column, Custom, Form, Header,
	OptionButton, Page, _SCREEN, Timer, and ToolBar objects.
	
	MORE INFORMATION
	================
	
	You can use the UIEnable event to specify user interface actions that should
	occur for an object or control when the Page control that contains it is
	activated or deactivated. There are three reasons a class of object does not
	contain this event:
	
	- The class of object depends on its container object. This is the case with
	  Column, Header, OptionButton, and Page controls, which are dependent,
	  respectively, on the Grid, Column, OptionGroup, and PageFrame controls. The
	  UIEnable event goes to the container for these objects.
	
	- The class of object has no user interface. This is the case with the Custom
	  and Timer objects. They have no user interface, so they do not receive
	  UIEnable event notification.
	
	- The class of object can not be contained within a page. This is the case with
	  Form, _SCREEN, and Toolbar objects.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
