---
layout: page
title: "Q109337: ADT/ODE: How to Hide the Database Window Menu Bar"
permalink: kb/109/Q109337/
---

## Q109337: ADT/ODE: How to Hide the Database Window Menu Bar

	Article: Q109337
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.1,2.0,7.0,97; :
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Distribution Kit, version 1.1 
	- Microsoft Access Developer's Toolkit, versions 2.0, 7.0 
	- Microsoft Office 97 Developer Edition 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SUMMARY
	=======
	
	In Microsoft Access 97 and 7.0, you can disable the default menus by simply
	selecting an option in the Startup dialog box. In Microsoft Access version 2.0,
	you can use the MenuBar property to hide the menu bar. In Microsoft Access
	version 1.x, in order to hide the menu bar associated with the Database window,
	you must hide the Database window itself.
	
	MORE INFORMATION
	================
	
	Microsoft Access 7.0 and Microsoft Access 97
	--------------------------------------------
	
	In Microsoft Access 7.0 and Microsoft Access 97, the version 2.0 method will
	work, but there is also an easier way. On the Tools menu, click Startup. In the
	lower left of the dialog box, select a new default menu from the Menubar box.
	You can also click to clear the Allow Full Menus check box to limit the
	available menu items to basic choices.
	
	Microsoft Access 2.0
	--------------------
	
	In Microsoft Access 2.0, the MenuBar property applies to the application object,
	forms, and reports, and can be set in the AutoExec macro for the application as
	a whole. You can use the MenuBar property for custom menu bars at all points in
	your application, even while in the Database window and reports.
	
	Microsoft Access 1.x
	--------------------
	
	In version 1.x, the menu bar that appears when the Database window is selected is
	always the Database window menu bar. The run-time version of Microsoft Access
	hides the Database window by keeping it minimized and not displaying the
	minimized window's icon. However, the Database window's menus and commands are
	still available on the menu bar.
	
	To keep the Database window's menu bar from being displayed, you must hide the
	Database window. The following sample macro action demonstrates how to hide the
	Database window. Add this action to the executable application's AutoExec
	macro.
	
	NOTE: Make sure to add this action before any OpenForm actions in the AutoExec
	macro in order to avoid hiding the forms after they are opened.
	
	  Macro Name  Action
	  --------------------------------
	  AutoExec    DoMenuItem
	                 MenuBar: Database
	                 Menuname: Window
	                 Command: Hide
	
	REFERENCES
	==========
	
	For more information about creating an application, search the Help Index for
	"creating applications," or ask the Microsoft Access 97 Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbAccessDevTK200 kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbAccessDistKit110 kbOffice97DevSearch
	Version           : WINDOWS:1.1,2.0,7.0,97; :
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
