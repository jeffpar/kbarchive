---
layout: page
title: "Q141022: How to Change the Setup Application Name"
permalink: /kb/141/Q141022/
---

## Q141022: How to Change the Setup Application Name

	Article: Q141022
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Setup Wizard in Visual Basic version 4.0 creates SETUP1.EXE that when
	executed displays a blue background with white letters that say, "<EXE
	NAME> Setup," where <EXE NAME> is the name of your application. This
	article explains how to change that message to something other than the default.
	
	MORE INFORMATION
	================
	
	To change the display of <EXE NAME>, follow these steps:
	
	1. Run the Setup Wizard as you normally would to create installation disks.
	
	2. Insert the first installation disk into drive A.
	
	3. Run Notepad.
	
	4. Open the file "SETUP.LST" from the disk.
	
	5. Change the item "Title" in the "[Setup]" group as shown below:
	
	        [Setup]
	        Title=YourNewTitle
	
	6. Save the file.
	
	7. Close Notepad.
	
	If you have saved your Setup Wizard installation you can make the modification
	permanent the next time you build a set of installation disks. Follow these
	steps:
	
	1. Run Notepad.
	
	2. Open the .VBZ file that pertains to your application.
	
	3. Change the item "AppTitle" in the "[Flags]" group as shown below:
	
	        [Flags]
	        AppTitle=YourNewTitle
	
	4. Save the file.
	
	5. Close Notepad.
	
	This will automatcally be added to you "SETUP.LST" file the next time you build
	installation disks from the Setup Wizard.
	
	Additional query words: 4.00 setup wizard setupwizard vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	
