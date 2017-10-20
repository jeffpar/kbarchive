---
layout: page
title: "Q113930: ADT2: Shortcut Menus Cannot Be Disabled in Microsoft Access"
permalink: /kb/113/Q113930/
---

## Q113930: ADT2: Shortcut Menus Cannot Be Disabled in Microsoft Access

{% raw %}

	Article: Q113930
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 25-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 2.0 
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	You cannot disable, or turn off, the shortcut menus in the Microsoft Access
	version 2.0 Database window. Shortcut menus are displayed by clicking the right
	mouse button.
	
	RESOLUTION
	==========
	
	Although you cannot disable shortcut menus in the Database window, you can
	disable them in forms by setting the form's ShortCutMenu property to No.
	
	The shortcut menus are also disabled when a Microsoft Access application is run
	using the run-time version of Microsoft Access provided in the Microsoft Access
	Developer's Toolkit (ADT).
	
	To prevent users from seeing the built-in toolbars, set the Built-In Toolbars
	Available option to No in the Options dialog box. Note that this will not
	prevent users from seeing any available custom toolbars.
	
	To prevent users from changing custom toolbars, set the Can Customize Toolbars
	option to No in the Options dialog box.
	
	STATUS
	======
	
	This behavior no longer occurs in Microsoft Access for Windows 95, version 7.0.
	
	REFERENCES
	==========
	
	For more information about toolbar options, search for "Options command -
	general," and then "Options Command (View Menu)" using the Microsoft Access Help
	menu.
	
	Additional query words: menus short cut right
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbAudDeveloper kbAccessSearch kbAccess200 kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
