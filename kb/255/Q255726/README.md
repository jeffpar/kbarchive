---
layout: page
title: "Q255726: PRB: Error 429 Occurs When You Use the Package &amp; Deployment Wiz."
permalink: /kb/255/Q255726/
---

## Q255726: PRB: Error 429 Occurs When You Use the Package &amp; Deployment Wiz.

{% raw %}

	Article: Q255726
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): _IK_kbATLComposite kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 26-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Office 2000 Developer 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Package and Deployment Wizard, error 429 may occur in the
	following two situations:
	
	- When you open the Package and Deployment Wizard, this error message appears:
	
	  Run-time error '429':
	  ActiveX component can't create object
	
	-or-
	
	- After you choose the Package or Deploy button in the Package and Deployment
	  Wizard, the following error message appears:
	
	  Unexpected error number 429 has occurred: ActiveX component can't create
	  object.
	
	CAUSE
	=====
	
	A file needed by the Package and Deployment Wizard does not exist or has not
	been properly registered on the development computer.
	
	RESOLUTION
	==========
	
	To resolve the problem, use these steps:
	
	- If the error occurs when you try to open the Package and Deployment Wizard,
	  you need to unload the Package and Deployment Wizard, manually register the
	  file named Pdwizard.ocx, and then reload the wizard.
	
	  1. From the Add-Ins menu, choose Add-In Manager.
	
	  2. Select Package and Deployment Wizard from the list of available add-ins.
	
	  3. Clear the Loaded/Unload check box in the Load Behavior section of the
	     Add-In Manager dialog box and then close the dialog box.
	
	  4. Register the Pdwizard.ocx file by using the RegSvr32 utility. On the
	     Windows Start menu, select Run and execute the following command:
	
	  " Regsvr32 "C:\Program Files\Microsoft Visual
	  Studio\VB98\WIZARDS\PDWIZARD\pdwizard.ocx" " (without the quotation marks)
	
	  5. From the Add-Ins menu, choose Add-In Manager.
	
	  6. Select Package and Deployment Wizard from the list of available add-ins.
	
	  7. Check the Loaded/Unload check box in the Load Behavior section of the
	     Add-In Manager dialog box and then close the dialog box.
	
	- If the error occurs just after you choose the Package or Deploy button, the
	  file named Hostwiz.dll needs to be manually registered.
	
	  1. Register the Hostwiz.dll file by using the RegSvr32 utility. On the
	     Windows Start menu, select Run, and then execute the following command:
	
	" Regsvr32 "C:\Program Files\Microsoft Visual
	Studio\COMMON\Wizards98\hostwiz.dll" " (without the quotation marks)
	
	MORE INFORMATION
	================
	
	After the error occurs, the Package and Deployment Wizard menu item may appear
	more than once in the Add-Ins menu. The additional menu item exists because the
	Package and Deployment Wizard Add-In terminated prematurely and was unable to
	remove the menu item. You can remove the extra menu item by using the Customize
	feature.
	
	To remove the extra menu item, use these steps:
	
	1. From the View menu, choose Toolbars and then select Customize on the Toolbars
	  layout. The Customize dialog box opens.
	
	2. With the Customize dialog box visible, drop down the Add-Ins menu.
	
	3. Drag the unnecessary menu item off of the Add-Ins menu and drop it onto the
	  Customize dialog box.
	
	4. Close the Customize dialog box.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q198038 INFO: Useful Tools for Package and Deployment Issues
	
	Additional query words: error 429 PDW
	
	======================================================================
	Keywords          : _IK_kbATLComposite kbwizard kbAppSetup kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbOfficeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbOffice2000Search kbVB600Search kbOffice2000 kbVB600 kbOffice2000DevSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
