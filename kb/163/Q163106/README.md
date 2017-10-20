---
layout: page
title: "Q163106: ODE97: ODBC Desktop Database Drivers Needed by ODE Setup Wizard"
permalink: /kb/163/Q163106/
---

## Q163106: ODE97: ODBC Desktop Database Drivers Needed by ODE Setup Wizard

{% raw %}

	Article: Q163106
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SUMMARY
	=======
	
	If you are creating a custom Setup program for your application using the
	Microsoft Office 97 Developer Edition Tools (ODE) Setup Wizard, and you include
	the ODBC components on the "You may now add redistributable Microsoft Office,
	Microsoft Jet, and ODBC components to your custom Setup program" screen, you
	must be certain that all the files needed for the added components are included
	in the Setup Wizard program.
	
	This article lists the files that are required by the ODBC Desktop Database
	Drivers included in the Microsoft Office 97, Professional Edition. Some files
	are included automatically. Some files are required by more than one component.
	You must include these files when you run the Microsoft Office 97 Developer
	Edition Tools (ODE) Setup Wizard if they are not automatically included.
	
	MORE INFORMATION
	================
	
	For certain components that you add to the Setup Wizard program, all necessary
	files are added automatically as long as Setup can find them on your computer.
	For other components that you add to the Setup Wizard program, you will need to
	add the files specific to those components using the "Add the files that you
	want your custom Setup program to copy and then set properties for each file"
	dialog box.
	
	For example, if you plan to include the ODBC Support with SQL Server component in
	your custom Setup program, the Setup Wizard will automatically include the files
	needed for that component to your custom Setup program, provided the Microsoft
	SQL Server driver is already installed on your computer.
	
	Files Needed For Distributing ODBC Support with SQL Server Components
	---------------------------------------------------------------------
	
	The following files are automatically included with your custom Setup program
	when you select "ODBC Support with SQL Server" if they can be found on your
	computer.
	
	  12520437.cpx     12520850.cpx
	  Dbnmpntw.dll     Drvssrvr.hlp
	  Ds16gt.dll       Ds32gt.dll
	  Mscpxl32.dll     Odbc16gt.dll
	  Odbc32.dll       Odbc32gt.dll
	  Odbcad32.exe     Odbccp32.cpl
	  Odbccp32.dll     Odbccr32.dll
	  Odbcinst.hlp     Odbcint.dll
	  Odbcjet.hlp      Odbcji32.dll
	  Odbcjt32.dll     Odbcjtnw.hlp
	  Odbckey.inf      Odbcstf.dll
	  Odbctl32.dll     Odbctrac.dll
	  Sqlsrv32.dll
	
	Files Needed for Distributing ISAM Components
	---------------------------------------------
	
	The Microsoft Access ISAM driver, Msrd2x35.dll, is automatically preselected by
	the Setup Wizard. The following files are specific for each database driver, and
	are included when the appropriate component is selected from the "You may now
	add redistributable Microsoft Office, Microsoft Jet, and ODBC components to your
	custom Setup program" screen.
	
	  Database Driver      File Name(s)
	  ---------------------------------
	  dBASE                Msxbse35.dll
	  Lotus 1-2-3          Msltus35.dll
	  Microsoft Excel      Msexcl35.dll
	  Microsoft Exchange   Msexch35.dll
	  Microsoft FoxPro     Msxbse35.dll
	  Paradox              Mspdox35.dll
	  Text                 Mstext35.dll
	
	REFERENCES
	==========
	
	For more information about adding redistributable files in the Setup Wizard,
	search the Microsoft ODE Tools Help Index for "redistributable components in
	Setup Wizard."
	
	For more information about which files you are licensed to redistribute with the
	Microsoft Office 97 Developer Edition Tools (ODE), see the Odeeula.txt file
	included with the ODE.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
