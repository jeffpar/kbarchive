---
layout: page
title: "Q116386: ADT/ODE: Minimizing All Objects Sets Focus to Database Window"
permalink: /kb/116/Q116386/
---

## Q116386: ADT/ODE: Minimizing All Objects Sets Focus to Database Window

	Article: Q116386
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0,7.0,97
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, versions 2.0, 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When all the objects in an application that is running in the run-time version
	of Microsoft Access are minimized, focus is passed to the Database window even
	though the Database window is not visible.
	
	If you press a key or key combination that is a valid command in the Database
	window while all the objects in the application are minimized, the Database
	window command corresponding to the key or key combination will be carried out.
	Examples of a key or a key combination that are valid commands in the Database
	window include ENTER, which opens or runs the currently selected object, and
	ALT+N, which creates a new object.
	
	RESOLUTION
	==========
	
	Include a form in the application that cannot be minimized.
	
	MORE INFORMATION
	================
	
	Many Microsoft Access applications include a Main Menu or Main Switchboard form
	that is automatically opened with the AutoExec macro and stays open the entire
	time that the application is open. This form is a good choice for a form that
	cannot be minimized.
	
	The following form property settings will prevent the form from being minimized:
	
	  Property        Setting
	  -----------------------------------------------------------------
	  Min Max Buttons   No  (Microsoft Access 97 and 7.0 property only)
	  Min Button        No  (Version 2.0 property only)
	  Control Box       No
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the sample database Northwind.mdb (or NWIND.MDB in version 2.0).
	
	2. In Microsoft Access 97 and 7.0:
	
	  a. On the Tools menu, click Startup.
	
	  b. In the Startup dialog box, under Display Form, select Main Switchboard as
	     the startup form.
	
	  In Microsoft Access 2.0:
	
	  Create a new macro with the following action, and then save the macro as
	  AutoExec:
	
	           Action: OpenForm
	           FormName: Main Switchboard
	
	3. Quit Microsoft Access.
	
	4. On the Start Menu click Run. (Or in Windows 3.x, in Program Manager, choose
	  Run from the File menu.)
	
	5. In the Open box (or Command Line box in Windows 3.x), type the following
	  line, and then press ENTER.
	
	  NOTE: In the following command, an underscore (_) at the end of a line is used
	  as a line-continuation character. Remove the underscore from the end of the
	  line when re-creating this command.
	
	  In Microsoft Access 97:
	
	  "C:\Program Files\Microsoft Office\Office\Msaccess.exe _
	        C:\Program Files\Microsoft Office\Office\Samples\Northwind.mdb_
	        /Runtime"
	
	  In Microsoft Access version 7.0:
	
	  C:\MSOffice\Access\Msaccess.exe _
	        C:\MSOffice\Access\Samples\Northwind.mdb /Runtime
	
	  In Microsoft Access version 2.0:
	
	  C:\ACCESS\MSARN200.EXE C:\ACCESS\SAMPAPPS\NWIND.MDB _
	        /INI C:\WINDOWS\MSACC20.INI
	
	6. After Microsoft Access starts and the Main Switchboard form opens, minimize
	  the Main Switchboard form.
	
	7. Press ENTER or ALT+N. Note that because these are valid commands in the
	  Database window, the Database window command is carried out.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbAccessDevTK200 kbOffice97 kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:2.0,7.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
