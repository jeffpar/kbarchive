---
layout: page
title: "Q194974: BUG: Visual Modeler 2.0 Reverse Engineering Error"
permalink: kb/194/Q194974/
---

## Q194974: BUG: Visual Modeler 2.0 Reverse Engineering Error

	Article: Q194974
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAddIn kbVBp600bug kbGrpDSVBDB kbVMod200
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When reverse engineering a Visual Basic project to Visual Modeler with the Load
	Behavior as Loaded/Unloaded, the following error occurs:
	
	  No Visual Basic Project was selected for reverse engineering.
	
	RESOLUTION
	==========
	
	For Reverse Engineering to work correctly, you have to specify the Visual
	Modeler Load Behavior as Load on Startup in Visual Basic 6.0 Add-In Manager, and
	then restart Visual Basic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic and open the project you want to reverse
	  engineer.
	
	2. If Visual Modeler is not listed as one of the Add-In items under Add-Ins
	  menu, bring up Add-In Manager from Add-Ins menu.
	
	3. From the Available Add-Ins list, find Visual Modeler Add-In and Visual
	  Modeler Menus Add-In. Place a check next to Loaded/Unloaded as the Load
	  Behavior for both.
	
	4. Choose Reverse Engineering Wizard from the Visual Modeler submenu, found on
	  the Add-Ins menu.
	
	5. A dialog box, titled Reverse Engineering Wizard, is displayed. Click New to
	  have Visual Modeler start with an empty model loaded.
	
	  The following error message occurs:
	
	  No Visual Basic project was selected for reverse engineering.
	
	To work around the problem, do the following before launching Visual Modeler
	Reverse Engineering:
	
	1. From the Available Add-Ins list, find Visual Modeler Add-In and Visual
	  Modeler Menus Add-In. Place a check next to Load on Startup for the Load
	  Behavior.
	
	2. Exit and launch Visual Basic again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAddIn kbVBp600bug kbGrpDSVBDB kbVMod200 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
