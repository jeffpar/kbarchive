---
layout: page
title: "Q136695: How to Use the Load, Init, Destroy, and Unload Events"
permalink: /kb/136/Q136695/
---

## Q136695: How to Use the Load, Init, Destroy, and Unload Events

{% raw %}

	Article: Q136695
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the sequence of the Load, Init, Destroy, and Unload
	events, and it gives points to consider when writing user code for these events.
	The Load event occurs before the controls on a form are created, whereas the
	Init event occurs after the controls on a form are created. When a form is
	released, the Destroy event occurs before the controls on a form are released,
	and the Unload event occurs after the controls on a form are released.
	
	MORE INFORMATION
	================
	
	Load Event
	----------
	
	The Load event occurs before any controls are created. That means the form's Load
	event procedure must not reference any of the controls.
	
	The form's Load event procedure is a good place to:
	
	- Define any global variables that the controls need to refer to in their Init
	  events
	
	- Open any tables or queries not in the data environment.
	
	- Call the OpenTables of the data environment if the AutoOpenTables property of
	  the data environment is set to False (.F.). If the data environment's
	  AutoOpenTables property is set to True (.T.), the tables and views will
	  already be open when the form's Load event occurs.
	
	Init Event
	----------
	
	The form's Init event occurs after all the controls are created, so you can refer
	to any control on a form in the form's Init event procedure. If certain controls
	should be disabled or have certain values specified, the form's Init code is a
	good place to assign values to controls or disable them. The form's Init event
	has not yet occurred when the controls are created, so any variables that a
	control's Init event code needs should not be set in the form's Init method.
	
	Destroy Event
	-------------
	
	The form's Destroy event occurs before the controls on a form are released, so
	you can refer to the controls in the form's Destroy event. For example, code
	that stores the value left in an unbound control can be placed in the form's
	Destroy event. The controls have not yet been released, so any tables that the
	controls refer to should not be closed in the form's Destroy event code.
	
	Unload Event
	------------
	
	The Unload event occurs after the controls are released. The code in the Unload
	event of a form cannot refer to the controls on the form because they do not
	exist when the Unload event fires. Because the controls no longer exist, the
	Unload event code is a safe place to close any tables or release memory
	variables that any controls used. If the data environment's AutoCloseTables
	property is set to False (.F.), the form's Unload event code is a good place to
	call the data environment's CloseTables method. If the data environment's
	AutoCloseTables property is set to True (.T.), the tables and views will be
	closed after the form's Unload method is completed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	

{% endraw %}
