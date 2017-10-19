---
layout: page
title: "Q172432: ODE97: Setup Wizard Doesn't Include Intl ActiveX Dependency DLL"
permalink: /kb/172/Q172432/
---

## Q172432: ODE97: Setup Wizard Doesn't Include Intl ActiveX Dependency DLL

	Article: Q172432
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	
	SYMPTOMS
	========
	
	When you install an international run-time application, ActiveX controls show
	dialog boxes, error messages, or other text in English instead of in the
	appropriate language.
	
	CAUSE
	=====
	
	When you distribute an international Microsoft Access run-time application that
	includes an ActiveX control, the international dependency file is not
	automatically included.
	
	RESOLUTION
	==========
	
	You must include the appropriate international dependency .dll manually.
	
	If, for example, you are distributing a German run-time application that includes
	the Comctl32.ocx ActiveX control, you must manually add Cmctlde.dll in the Add
	Files list in the Setup Wizard.
	
	To determine what international dependency file you need for a particular ActiveX
	control, follow these steps:
	
	1. In Notepad, open the associated .dep file for the ActiveX control; for
	  example, Comctl32.dep, if you are including Comctl32.ocx.
	
	2. Find the section that matches your international settings; for example, **
	  German (DE) ***
	
	3. The international .dll is listed on the Uses1 line; for example:
	
	  [ComCt232.ocx <0010>]
	  Uses1=CmCt2IT.dll
	
	When you have determined which international .dll to include, follow these steps
	to manually add it in the Setup Wizard:
	
	1. Run the ODE Setup Wizard.
	
	2. On the List Of Files screen, add the ActiveX file and other files that you
	  typically add.
	
	3. On the List Of Files screen, click Add.
	
	4. In the \Windows\System folder, select the international .dll you found in the
	  previous steps, and click Add.
	
	5. IMPORTANT: Confirm that the Destination Folder property for the .dll file is
	  set to $(WinSysPath)
	
	6. Continue building your run-time application and finish the Setup Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office Developer
	Edition ODE Tools 97.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Install German Microsoft Access and German Microsoft ODE.
	
	2. Run the Setup Wizard.
	
	3. In the List Of Files, add Comctl32.ocx.
	
	When you add comctl32.ocx, it adds Comcat32.dll, but not Cmctlde.dll.
	
	Additional query words: globalization international int'l localization localisation intl
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
