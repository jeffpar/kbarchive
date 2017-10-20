---
layout: page
title: "Q266377: PRB: .Exe File Created in Visual FoxPro Doesn't Appear on Screen"
permalink: /kb/266/Q266377/
---

## Q266377: PRB: .Exe File Created in Visual FoxPro Doesn't Appear on Screen

{% raw %}

	Article: Q266377
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 01-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Application Wizard to create an application, it creates a
	Config.fpw file in the same folder. If the main program is changed to another
	file in the application's project and an .exe file is built, then the .exe may
	not show up on the computer screen when it is run. The .exe name shows up in the
	Task Manager as running, but it is not accessible. This behavior can also occur
	when other .exe files that have been built using the Project Manager read this
	Config.fpw file.
	
	RESOLUTION
	==========
	
	If another file is used as the main program in a project built with the
	Application Wizard, remove the SCREEN=OFF command from the Config.fpw file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	As the Application Wizard builds all the necessary files for the application, it
	creates a Config.fpw file with the SCREEN=OFF command in it. This command turns
	off the background of the Visual FoxPro library. The main program that the
	Application Wizard originally builds knows that SCREEN=OFF is in the Config.fpw
	file and has the necessary code built into it to allow the .exe to appear
	properly. Changing the main program in the project to another file causes the
	.exe to not appear on the screen because the background of the Visual FoxPro
	library has been turned off by the SCREEN=OFF command.
	
	Note that if an .exe is run that has a form as the main program and its
	ShowWindow property is set to As Top-Level, then SCREEN=OFF should not be
	remarked out.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the Tools menu, select Applications, and then click to select Wizards. In
	  the text box of the Application Wizard dialog box, name your project "MyApp"
	  (without the quotation marks), and then click OK.
	
	2. Click OK in the Application Builder dialog box.
	
	3. Select the Code tab in the Project Manager, and then click New. Add a WAIT
	  WINDOW command in the dialog box.
	
	4. Close the dialog box and save it as "Mymain" (without the quotation marks).
	
	5. Right-click on the Mymain file and select the Set Main menu item.
	
	6. Click Build, and create a Win32 executable, saving it in the current folder.
	
	7. Run the .exe and note that it does not appear, but runs as a process in
	  memory. You can check this in the Task Manager (CTRL+ALT+DEL).
	
	8. To allow an .exe to appear, modify the Config.fpw (usually in the same folder
	  as the .exe), and remark out the SCREEN=OFF command. Note that the .exe
	  appears as expected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
