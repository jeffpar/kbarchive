---
layout: page
title: "Q176556: ODE97: MSRDO20.DLL Can't Register Itself in the System Registry"
permalink: kb/176/Q176556/
---

## Q176556: ODE97: MSRDO20.DLL Can't Register Itself in the System Registry

	Article: Q176556
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 23-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	When you use the Setup wizard to create a custom setup program on a Windows 95
	computer, and you add the ODBCDirect component on the screen that asks "Which of
	the following components do you want to include?", you may receive the following
	error message if you run your custom setup program from a Network setup to a
	workstation computer:
	
	  Msrdo20.dll was unable to register itself in the system registry.
	
	Setup then fails to complete successfully.
	
	CAUSE
	=====
	
	When you created the distribution disks, you did not select the "ODBC Support
	with SQL Server" component along with the ODBCDirect component.
	
	RESOLUTION
	==========
	
	Include the option for "ODBC Support with SQL server" on the Add Components
	screen of the Setup wizard program if you include the ODBCDirect component.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the Microsoft Office 97 Professional Edition Tools (ODE) Setup wizard
	  program.
	
	2. On the Introduction screen, click "Create a new set of setup options for my
	  application's custom setup program".
	
	3. Click Next to move to the "Add the files that you want your custom setup
	  program to copy and then set properties for each file" screen.
	
	4. Click Add.
	
	5. Locate the Northwind.mdb database, and then click Add.
	
	6. Click to select the "Set as Application's Main File" check box.
	
	7. Click Next to move to the "Add the shortcuts that you want your custom Setup
	  program to create and then set the properties for each shortcut" screen.
	
	8. Click Add.
	
	9. In the Description box, type a description for your shortcut.
	
	10. On the Database Shortcut Properties tab, click to select the Run-time check
	  box.
	
	11. Click Next until you get to the "Which of the following components do you
	  want to include?" screen.
	
	12. Select ODBCDirect.
	
	13. Click Next until you get to the "Where do you want the Setup Wizard to copy
	  the files for your custom setup program" screen.
	
	14. Click to select the "Network or CD Setup" check box, and then click Finish.
	
	15. After the Setup wizard finishes creating the Network Setup, run your custom
	  setup program on another workstation.
	
	  Note that before the custom setup program is finished, you receive the
	  message mentioned in the "Symptoms" section.
	
	REFERENCES
	==========
	
	For more information about other issues involving the ODE Setup wizard and
	distributing ODBC components, please see the following articles in The Microsoft
	Knowledge Base:
	
	  Q163106 ODE97: ODBC Desktop Database drivers Needed by the ODE Setup Wizard
	
	  Q172701 ODE97: Setup Wizard requires ODESP2 for updated ODBC Drivers
	
	Additional query words: msrdo20 dll was unable to register itself in the system registry
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
