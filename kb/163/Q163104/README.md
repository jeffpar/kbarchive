---
layout: page
title: "Q163104: ODE97: Setup Wizard: Prompts Users to Change Version Number"
permalink: kb/163/Q163104/
---

## Q163104: ODE97: Setup Wizard: Prompts Users to Change Version Number

	Article: Q163104
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbsetup kbtool
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you run your custom Setup program to install your custom application, you
	may receive the following error message:
	
	  Object error 325
	
	CAUSE
	=====
	
	The version number of your custom application was not updated when you added or
	changed files using the ODE Setup wizard.
	
	RESOLUTION
	==========
	
	Always change the version number for your custom application each time you
	change the files included in the Setup program. This includes adding, deleting,
	or modifying the files. The version number should be changed on the Provide
	Application Details screen of the Setup Wizard in the "What is the version
	number of your application?" box.
	
	MORE INFORMATION
	================
	
	The ODE Setup Wizard program requires that you update the version number for
	your application each time you update your disk images. If you do not do this
	when you make changes to your custom Setup program, you may receive the "Object
	error 325" error message.
	
	REFERENCES
	==========
	
	For more information about using version numbers in the ODE Setup wizard
	program, search the Microsoft ODE Setup Wizard Help Index for "version numbers,
	specifying in Setup Wizard."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbtool 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbOffice97Search kbAccess97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
