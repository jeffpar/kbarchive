---
layout: page
title: "Q297531: PRB: Report Designer Menu Item Is Missing"
permalink: kb/297/Q297531/
---

## Q297531: PRB: Report Designer Menu Item Is Missing

	Article: Q297531
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAddin kbVBp600 kbReport kbIDEProject kbGrpDSVB kbDSupport
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Report Designer menu item is missing from the Add-Ins menu. Furthermore, you
	cannot use the Customize feature to add the menu item back onto the Add-Ins
	menu.
	
	CAUSE
	=====
	
	If Crystal Reports, which is included on the Visual Basic 6.0 CD-ROM, is not
	installed, the Report Designer menu item is not available on the Add-Ins menu.
	
	NOTE: In Visual Basic version 5.0, the Report Designer menu item is available on
	the Add-Ins menu, regardless if Crystal Reports is installed.
	
	RESOLUTION
	==========
	
	To resolve this problem, install Crystal Reports (Crystl32.exe) from the Visual
	Basic version 6.0 CD-ROM. For information about Crystal Reports for use in
	Visual Basic, see the "References" section.
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. If Crystal Reports is installed on the system, use the Add/Remove Programs
	  option in Control Panel to uninstall it.
	
	2. Create a new Standard EXE project in Visual Basic.
	
	3. In the Add-Ins drop-down list box, notice that the Report Designer menu item
	  is missing.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q193336 HOWTO: Install Crystal Reports for Use in Visual Basic 6.0
	
	Additional query words: disappear does not appear visible
	
	======================================================================
	Keywords          : kbAddin kbVBp600 kbReport kbIDEProject kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
