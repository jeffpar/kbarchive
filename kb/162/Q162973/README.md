---
layout: page
title: "Q162973: ODE97: Changing the Application Name Does Not Change Folder Name"
permalink: /kb/162/Q162973/
---

## Q162973: ODE97: Changing the Application Name Does Not Change Folder Name

	Article: Q162973
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you change the Application name when using an existing template with the
	Microsoft Office Developer Edition 97 Setup Wizard, the Setup Wizard will not
	automatically change the folder name in either the default installation folder
	or the name for the folder for systems that do not support long file name
	spaces.
	
	CAUSE
	=====
	
	This happens if either of those folder names have been changed from the default.
	Once they have been changed, the Setup Wizard will no longer automatically
	change folder names when you change the application name.
	
	RESOLUTION
	==========
	
	If you change your Application name when using the Setup Wizard to create disk
	images from a saved template, manually change the folder names for the default
	and the folder for systems that do not support long file names. Another
	workaround is to create a new template for each version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office Developer
	Edition 97.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the Microsoft Office Developer Edition 97 Setup Wizard.
	
	2. Click Next on the first page of the Setup Wizard.
	
	3. Add the Northwind sample database to the list of files and select "Set As
	  Application's Main File." Then click Next on this screen and on the next 3
	  screens.
	
	4. Type "Test Northwinds" (without the quotation marks) in the space for the
	  Application's name. In the space for the default folder for installation,
	  type "C:\Northwind" (without the quotation marks), and in the space for the
	  folder name for systems that do not support long file names, type "C:\Nwind"
	  (without the quotation marks).
	
	5. Click Next.
	
	6. Click the Save button to save the Current Template, and then click Save on
	  the Save Template Window. This will save the template to the name
	  TestNort.mdt.
	
	7. Click Cancel to stop the creation of disk images.
	
	8. Start the Microsoft Office Developer Edition 97 Setup Wizard again.
	
	9. On the first screen, select the "Use previously saved setup options to create
	  a custom Setup program for my application," and click Next.
	
	10. Select TestNort.mdt from the list of templates, and click Open.
	
	11. Click Next on the next four screens.
	
	12. Change the name of the application from Application to "My Cool App"
	  (without the quotation marks), and press the TAB key.
	
	  Note that neither of the installation folder names on this page change.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
