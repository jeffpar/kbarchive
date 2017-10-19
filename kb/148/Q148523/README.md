---
layout: page
title: "Q148523: ADT/ODE: Run-time Application Error with Exit Button"
permalink: /kb/148/Q148523/
---

## Q148523: ADT/ODE: Run-time Application Error with Exit Button

	Article: Q148523
	Product(s): Microsoft Access Distribution Kit
	Version(s): 7.0,97
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you add a switchboard item to close a run-time application installed with
	the Microsoft Office 97 Developer Edition Tools or the Microsoft Access
	Developer's Toolkit for Windows 95, a user may receive the following error
	message when the user clicks the button:
	
	  Execution of this application has stopped due to a run-time error. The
	  application cannot continue and will be shut down.
	
	Although the desired result is to quit the program, the message box can be very
	distracting to the user.
	
	RESOLUTION
	==========
	
	There are two workarounds to prevent the user from receiving this error
	message.
	
	Workaround 1
	------------
	
	1. Create the following new macro:
	
	  Macro Name  Macro Action
	        ------------------------
	        QuitMacro   Quit
	
	2. Add the following command button to the switchboard form:
	
	  Command button:
	           Name: Button0
	           Caption: Quit Application
	           OnClick: QuitMacro
	
	Workaround 2
	------------
	
	1. Add the following command button to the switchboard form:
	
	  Command button:
	           Name: Button0
	           Caption: Quit Application
	           OnClick: [Event Procedure]
	
	2. Set the command button's OnClick property to the following event procedure:
	
	  DoCmd.Quit
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : :7.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
