---
layout: page
title: "Q207282: PRB: Cannot Use Title Bar to Activate Forms in Converted 2.6 App"
permalink: /kb/207/Q207282/
---

## Q207282: PRB: Cannot Use Title Bar to Activate Forms in Converted 2.6 App

	Article: Q207282
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After converting a FoxPro for Windows application from version 2.6 to Visual
	FoxPro, clicking the title bar, of a form in the background, no longer brings
	the form to the front as the active form.
	
	RESOLUTION
	==========
	
	Click inside the form window to activate forms that are behind the currently
	active form.
	
	You can also use the CTRL+F1 keyboard combination if the Windows menu, Cycle
	command has been built into the menu system. Refer to the Visual FoxPro Online
	help topic "Menu menu, Visual FoxPro system (internal)" for more information.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: These steps assume that the FoxPro for Windows 2.6 product is installed,
	including the sample files.
	
	1. Start FoxPro 2.6 for Windows.
	
	2. Issue the following command in the Command window:
	
	  SET DEFAULT TO HOME()+"Goodies\Fndation"
	
	3. Run the Ex1.app. If necessary, open the Ex1.pjx project and build the
	  application. However, the application should already be installed.
	
	4. On the application menu, click Customers, and then Salesmento open the
	  Customers and Salesmen screens.
	
	5. Click between these two screens by clicking the title bars. Note that when
	  you click the title bar of the inactive screen, that screen comes to the
	  front and is now activate. Also, click inside the screen windows to activate
	  the screens. This also works.
	
	6. Quit the Ex1.app by clicking Quit on the File menu. Exit FoxPro 2.6 for
	  Windows
	
	7. Make a new directory on your hard drive and name it test. Copy all
	  directories and files from the HOME()+"Goodies\Fndation" directory into the
	  new test directory.
	
	8. Start Visual FoxPro and set the default directory to the test directory.
	
	9. Open the Ex1.pjx project. This should open the Visual FoxPro Converter.
	
	10. Perform a Functional Conversion. You do not need to backup the files because
	  this should be a copy of the original files.
	
	11. When the conversion completes, click the Build button in the Project Manager
	  and build an application. Name the application Ex1.app.
	
	12. When the application is built, run the Ex1.app.
	
	13. Click Customers, and then click Salesmen on the application menu to open the
	  Customers and the Salesmen screens.
	
	14. Try to activate the screens by clicking the title bars. For this test, do
	  not click on the title bar of the navigation form. The inactive form should
	  not be able to be made active by clicking the title bar.
	
	15. Click inside the form window to activate the inactive form. Click the title
	  bar of the navigation form before you click the title bar of the inactive
	  form, which will allow you to activate the inactive form by clicking its
	  title bar.
	
	REFERENCES
	==========
	
	Visual FoxPro Online Help; topic: "Menu menu, Visual FoxPro system (internal)"
	
	Additional query words: kbDSE
	
	======================================================================
	Keywords          : kbOOP kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
