---
layout: page
title: "Q165034: ODE97: Using Undo Create to Delete Page Removes Tab Control"
permalink: /kb/165/Q165034/
---

## Q165034: ODE97: Using Undo Create to Delete Page Removes Tab Control

	Article: Q165034
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you insert a new Tab control on a form in Microsoft Access 97, clicking the
	Undo Create command on the Edit menu will cause the following behavior to
	occur:
	
	- If you insert a new object on the Tab control, such as a text box or a label,
	  the Undo Create command will delete the newly created object.
	
	- If you insert a new page on the Tab control, the Undo Create command will
	  delete the entire Tab control.
	
	CAUSE
	=====
	
	The Undo Create command can only be used to delete new objects that have been
	inserted on the Tab control or the form. It cannot be used to delete new pages
	that you add to the Tab control.
	
	RESOLUTION
	==========
	
	If you want to delete a new page from a Tab control, click the Delete command on
	the Edit menu or the Delete Page command on the Tab Control shortcut menu.
	
	MORE INFORMATION
	================
	
	When you create a Tab control on your form, you can use the Undo Create command
	on the Edit menu to delete new objects that you insert on the control, delete
	new objects that you add to the form, or delete the Tab control itself. However,
	if you want to delete a new page that you have added to the Tab control, you
	must use the Delete command.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the sample database Northwind.mdb in Microsoft Access 97.
	
	2. Create a form and insert a Tab control on the form.
	
	3. Add a text box to the Tab control.
	
	4. On the Edit menu, click Undo Create. The text box is deleted from the Tab
	  control.
	
	5. On the Insert menu, click Tab Control Page. This inserts a new page for the
	  Tab control.
	
	6. On the Edit menu, click Undo Create. Note that the entire Tab control is
	  removed.
	
	REFERENCES
	==========
	
	For more information about creating Tab controls, search the Help Index for "Tab
	controls, creating," or ask the Microsoft Access 97 Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbOffice97Search kbAccess97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
