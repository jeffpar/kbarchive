---
layout: page
title: "Q112240: Running Multiuser Screens Created w/ Screen Wizard"
permalink: /kb/112/Q112240/
---

## Q112240: Running Multiuser Screens Created w/ Screen Wizard

	Article: Q112240
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.6; WINDOWS:2.6,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6 
	- Microsoft FoxPro for MS-DOS, version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Screens created with the Screen Wizard do not alter the setting of SET
	EXCLUSIVE. In order to use a screen that was created with the Screen Wizard in a
	multiuser environment, you must issue the SET EXCLUSIVE OFF command before
	running the screen.
	
	MORE INFORMATION
	================
	
	NOTE: A database can be opened as SHARED without issuing SET EXCLUSIVE OFF prior
	to opening the database.
	
	Example 1
	---------
	
	  NOTE: This is an example of running a screen that was created with the Screen
	  Wizard in a multiuser environment.
	
	FoxPro 2.x Code:
	----------------
	
	     SET EXCLUSIVE ON
	     USE xyz.dbf SHARED
	     DO screen.spr          && This screen could be a screen that was
	                             * created with the Screen Wizard.
	
	Visual FoxPro Code:
	-------------------
	
	     SET EXCLUSIVE ON
	     USE xyz.dbf SHARED
	     DO FORM screen.scx          && This screen could be a screen that was
	                                  * created with the Screen Wizard.
	
	Example 2
	---------
	
	NOTE: This is an example of running a screen that was created with the Screen
	Wizard in a multiuser environment.
	
	FoxPro 2.x Code:
	----------------
	
	     SET EXCLUSIVE OFF
	     USE xyz.dbf
	     DO screen.spr         && This screen could be a screen that was
	                            * created with the Screen Wizard.
	
	Visual FoxPro Code:
	-------------------
	
	     SET EXCLUSIVE OFF
	     USE xyz.dbf
	     DO FORM screen.scx          && This screen could be a screen that was
	                                  * created with the Screen Wizard.
	
	For more information about multiuser programming, see page D19-6 in the FoxPro
	for Windows "Developer's Guide."
	
	Additional query words: VFoxWin FoxDos FoxWin 2.6 SCR dBASE CONVERSION MIGRATE CANCEL screenwizard multi-user
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260DOS kbFoxPro260 kbVFP300
	Version           : MS-DOS:2.6; WINDOWS:2.6,3.0
	
	=============================================================================
	
