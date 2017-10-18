---
layout: page
title: "Q131253: PRB: Right Mouse Functions Incorrectly w/ IntelliPoint Driver"
permalink: kb/131/Q131253/
---

## Q131253: PRB: Right Mouse Functions Incorrectly w/ IntelliPoint Driver

	Article: Q131253
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro for Windows, a right mouse click displays a context- sensitive
	short-cut menu for that specific function or area. If the secondary button
	option of the IntelliPoint software's Button tab is enabled, the Visual FoxPro
	context-sensitive short-cut menu items are disabled when a right mouse click is
	executed.
	
	CAUSE
	=====
	
	The settings in the IntelliPoint driver (Version 1.1) override the settings
	specific to an application.
	
	WORKAROUND
	==========
	
	To enable the right mouse button functions of Visual FoxPro, the setting for the
	Secondary button must be set to Unassigned.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Access the IntelliPoint Mouse driver settings by choosing Mouse from the
	  Control Panel, or by clicking the 'IntelliPoint Tools & Controls' icon in
	  the 'Microsoft Input Devices' group.
	
	2. On the Buttons page, assign the Seconday button to Help.
	
	3. Observe that in Visual FoxPro, clicking the right mouse button now displays
	  the Help topics rather than the appropriate task list available for that
	  particular Visual FoxPro feature.
	
	Additional query words: VFoxWin key wrong menu choice
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
