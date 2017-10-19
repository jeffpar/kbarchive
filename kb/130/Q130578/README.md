---
layout: page
title: "Q130578: HOWTO: Customize the Visual FoxPro Environment"
permalink: /kb/130/Q130578/
---

## Q130578: HOWTO: Customize the Visual FoxPro Environment

	Article: Q130578
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbvfp300 kbvfp500 kbvfp600
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can customize the Visual FoxPro environment by using a configuration file,
	the Options dialog box, or a combination of both. Visual FoxPro provides two
	optional startup switches. The switches are used to prevent the display of the
	sign-on screen and to point to a configuration file. This article explains how
	to use Visual FoxPro Startup options.
	
	Information in this article is also available in the Visual FoxPro Help file
	under "Setting the Environment."
	
	MORE INFORMATION
	================
	
	Using Visual FoxPro Startup Options
	-----------------------------------
	
	You can customize the Visual FoxPro environment by using a configuration file,
	the Options dialog, or a combination of both. Some environment settings are SET
	commands or system variables. The values of the settings are stored either for
	the current data session or as startup defaults in the system registry or
	resource file.
	
	Visual FoxPro provides two optional startup switches. The switches are used to:
	
	- Prevent the display of the sign-on screen.
	
	- Point to a configuration file.
	
	Suppressing the Sign-on Screen Display
	--------------------------------------
	
	The sign-on screen displays the Visual FoxPro logo and product registration
	information. You might want to suppress this information for your own
	applications.
	
	To prevent the display of the sign-on screen:
	
	Add the -T switch to the Visual FoxPro command line.
	
	For example, to start Visual FoxPro without the sign-on screen, use this command
	line:
	
	VFP.EXE -T
	
	Specifying a Configuration File
	-------------------------------
	
	To specify a configuration file:
	
	Add the -C switch plus the path and file name of the configuration file to the
	command line. Don't put any space between the switch and the path information.
	For example, to point to a configuration file in C:\Myapp, use this command
	line:
	
	VFP.EXE -CC:\MYAPP\CONFIG.FPW
	
	-or -
	
	If applicable, add the following line to your Autoexec.bat file:
	
	SET FOXPROWCFG=C:\MYAPP\CONFIG.FPW
	
	Displaying Settings
	-------------------
	
	Once Visual FoxPro is running, you can verify environment settings by using the
	Options dialog box or the DISPLAY STATUS command or by displaying the values of
	individual SET commands.
	
	To display multiple environment settings:
	
	Open the Tools Options dialog box, and view the current settings.
	
	-or-
	
	Type DISPLAY STATUS in the Command window.
	
	To display individual environment settings:
	
	Use the SET() function in the Command window to display the current value of any
	SET Command. For example, to view the current status of SET TALK, type:
	
	    ? SET('TALK')
	
	-or-
	
	Use the SET('TALK) function in the Debug window without the Print command (?).
	
	Saving Settings
	---------------
	
	To save current data session settings:
	
	1. In the Options dialog box, make setting choices.
	
	2. Click OK.
	
	When you run Visual FoxPro, saved values for SET commands are read in from the
	system registry. Any settings you change during a session of Visual FoxPro are
	lost when you exit unless you save them as defaults in the Options dialog box.
	
	To save default settings:
	
	1. In the Options dialog box, make setting changes.
	
	2. Click the Set As Default button.
	
	Echoing Settings
	----------------
	
	Settings are only valid for the current data session, so you might want to
	capture your settings and place them in a program or in a form's Init event
	code. One way to do this is to echo the settings to the Command window, and then
	copy and paste them to another location.
	
	To echo Options dialog box settings to the Command window:
	
	1. In the Options dialog box, make setting choices.
	
	2. Hold down the SHIFT key, and click OK. The settings are echoed to the Command
	  window.
	
	3. Copy the setting commands from the Command window. Then paste them into a
	  program file or into a form's Init event.
	
	Information in this article is also available in the Visual FoxPro Help file
	under "Setting the Environment."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
