---
layout: page
title: "Q173886: ADT/ODE: Icon Doesn't Show in Title/Taskbar of Run-Time App"
permalink: /kb/173/Q173886/
---

## Q173886: ADT/ODE: Icon Doesn't Show in Title/Taskbar of Run-Time App

	Article: Q173886
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you use the Setup Wizard that ships with the Microsoft Office 97 Developer
	Edition Tools (ODE) or the Microsoft Access Developer's Toolkit (ADT), and you
	specify an icon in the Icon File box of the "Add the shortcuts screen," that
	icon does not appear in the title bar or the taskbar of your application after
	you have installed it on the target computer.
	
	CAUSE
	=====
	
	The Icon File box specifies the icon that you want Windows to display for the
	shortcut, but it does not specify the icon that appears in the application's
	title bar or the taskbar.
	
	RESOLUTION
	==========
	
	Set the Application Icon for the main application database, and then add the
	icon in the list of files that you want the Setup Wizard to include in the
	installation.
	
	Note: The following steps assume that the application's icon file is located in
	the Windows System folder (directory). If you want to place the icon file within
	the same folder as the custom application, you must create a custom profile for
	your application, which includes a Run-Time options registry entry.
	
	For more information about creating custom profiles, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q165631 ODE97: Creating Profiles for Custom Application in Setup Wizard
	
	Setting the Application Icon
	----------------------------
	
	1. Open your database file in Microsoft Access.
	
	2. On the Tools menu, click Startup.
	
	3. In the Startup dialog box, type the name of your icon file in the Application
	  Icon box. You may also click the Build button and select your icon file in
	  the Icon Browser dialog box.
	
	4. After you have selected the icon file, edit the Application Icon box so that
	  the icon file does not have a path associated with it. For example, if you
	  select the icon file in the Icon Browser dialog box, there may be a path to
	  the file as follows: C:\MyIcons\MyIcon.ico. For the icon to be displayed in
	  the ADT/ODE application, modify the Application Icon so that it reads as
	  follows: MyIcon.ico.
	
	5. Click OK.
	
	6. Close the database.
	
	Building the Disk Images to Use the Application Icon
	----------------------------------------------------
	
	1. Open the ADT or ODE Setup Wizard.
	
	2. On the Add Files screen of the Setup wizard, add your database file to the
	  List Of Files box and select the "Set as Application's Main File" check box.
	
	3. Add the icon file that you set as the Application Icon for your database.
	
	4. Change the Destination Folder box for the icon file to $(WinSysPath).
	
	5. Add any additional files that you may need for your application.
	
	6. Complete the Setup Wizard as you would normally for your application.
	
	When you install your application to the target computer, your icon appears in
	both the title bar and the taskbar.
	
	NOTE: If you select your icon as the Icon File for your shortcut, the icon also
	appears on the Start menu for your application.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: By default, the sample database Northwind.mdb does not have an Application
	Icon set. If you have changed this property in the Northwind database, this
	example will not work.
	
	1. Run the ADT or ODE Setup wizard.
	
	2. On the Add Files screen of the Setup wizard, add the Northwind.mdb file and
	  select the "Set as Application's Main File" check box.
	
	3. Add an icon file to the List Of Files box.
	
	4. Click Next.
	
	5. On the "Add the shortcuts" screen of the Setup wizard, create a shortcut to
	  start the database and select the Run-Time check box. Select the icon file
	  from the Icon File box. NOTE: In the ADT 7.0, the Run-Time check box is
	  listed under the Database Command-Line Options. In the ODE 97, these options
	  are listed on the Database Shortcut Properties tab.
	
	6. Complete the Setup wizard by clicking Finish.
	
	7. Install the application on a target computer.
	
	Note that the shortcut created by the Setup program displays your icon, but when
	you run the application, only the default Windows icon appears in the title bar
	and the taskbar.
	
	REFERENCES
	==========
	
	For more information about the Application Icon, search the Help Index for
	"Application Icon," or ask the Microsoft Access 97 Office Assistant.
	
	Additional query words: tool kit
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
