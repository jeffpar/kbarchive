---
layout: page
title: "Q161403: ADT/ODE: Err Running Setup If More Than 40 Registry Keys Define"
permalink: /kb/161/Q161403/
---

## Q161403: ADT/ODE: Err Running Setup If More Than 40 Registry Keys Define

	Article: Q161403
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you use the Setup Wizard to create a custom Setup in Microsoft Office 97
	Developer Edition Tools (ODE) or Microsoft Access Developer's Toolkit version
	7.0, if you specify more than 40 custom Registry keys for a single component,
	you may receive the following error message when you try to install the
	application:
	
	  
	
	  In Microsoft Office 97 Developer Edition Tools:
	
	  Object <id>
	  Your Setup files may be damaged. Try restarting the Setup program from
	  where you originally ran it.
	
	
	  In Microsoft Access Developer's Toolkit version 7.0:
	
	  Object <id>
	  Your Setup files may be damaged. Try restarting the Setup program.
	
	This message is followed by another one stating that Setup was not completed
	successfully.
	
	CAUSE
	=====
	
	Applications created with the Setup Wizard are limited to 40 custom Registry
	keys per component name.
	
	RESOLUTION
	==========
	
	If you need to include more than 40 custom Registry keys, create a new component
	name in the Setup Wizard to include the additional keys.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Setup Wizard.
	
	2. In the "What would you like to do?" dialog box, click "Create a new set of
	  setup options for my application's custom Setup program," and then click
	  Next.
	
	3. In the "List of Files" box, click the Add button and add the sample database
	  Northwind.mdb. Click "Set as Application's Main File," and then click Next.
	
	4. In the "List of Shortcuts" box, click the Add button. Type Northwind Test in
	  the Description box, and then click Next.
	
	5. In the "List of Registry Values" box, click the Add button and complete the
	  following information:
	
	     Top-Level for Key: $(Machine's Software Key for App)
	     Path to Key: Options
	     Value Name: Key1
	     Base Value Data on File: (none)
	     Value Data: Test
	     Value Data Type: String
	     Component Name: Application
	
	6. Perform step 5 a total of 41 times; each time increment the Value Name by
	  one, such as Key2, Key3, Key4, and so on, for a total of 41 keys.
	
	7. Click the Finish button, and save the Setup template as RegKey.mdt.
	
	8. After the disk images are created, run the Setup program. Note that you
	  receive the error message mentioned in the "Symptoms" section.
	
	REFERENCES
	==========
	
	For more information about creating custom Registry keys in the Setup Wizard
	with Microsoft Office 97 Developer Edition Tools, search the Microsoft ODE Tools
	Help Index for "registry, adding keys in Setup Wizard."
	
	For more information about creating custom Registry keys in the Setup Wizard with
	the Microsoft Access Developer's Toolkit version 7.0, click the Help button in
	the Setup Wizard screen displaying the "List of Registry Values."
	
	Additional query words: ADT ODE STF 1045 1545 827
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
