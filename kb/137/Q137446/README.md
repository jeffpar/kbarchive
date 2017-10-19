---
layout: page
title: "Q137446: Differences Between FoxPro and Visual FoxPro Setup Wizard"
permalink: /kb/137/Q137446/
---

## Q137446: Differences Between FoxPro and Visual FoxPro Setup Wizard

	Article: Q137446
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article compares the Visual FoxPro 3.0 and the FoxPro 2.6 Setup Wizards and
	highlights the functionality of the new wizard.
	
	MORE INFORMATION
	================
	
	The interface and the functionality of the Setup Wizard has changed. Following
	are some of the changes for the specified Setup Wizard steps:
	
	Step 2 - Optional Components
	----------------------------
	
	NOTE: Check Win32s if you plan to distribute this application to users that have
	Windows or Windows for Workgroups.
	
	The differences are:
	
	- With FoxPro 2.x for Windows, Windows 3.1 is the only platform used for
	  distributing application files. In Visual FoxPro 3.0, you can select the
	  operating systems on which users can install your application. The Setup
	  Wizard will create a setup routine that includes all necessary system files
	  for the system features you specify:
	
	   - Win32s
	
	   - Windows 95
	
	   - Windows NT
	
	- In Visual FoxPro 3.0, you can specify if you want to ship the Visual FoxPro
	  3.0 Runtime (Vfp300.esl) with your application files.
	
	- In Visual FoxPro 3.0, when you select the ODBC Drivers option, the ODBC
	  Drivers dialog box appears so that you can select the necessary drivers.
	
	Step 3 - Disk Images
	--------------------
	
	The Setup Wizard creates a distribution subdirectory containing disk images for
	each type of disk you specify. If you select the Netsetup option, the Setup
	Wizard creates a single directory that contains all the files.
	
	Step 4 - Setup Options
	----------------------
	
	The Setup Wizard creates installation dialog boxes with the title you specify in
	the Dialog Caption box. It also places the copyright statement in the About
	Setup dialog box.
	
	Entries are required in the Dialog Caption and Setup Copyright boxes. The
	Post-Setup Executable entry is optional.
	
	NOTE: Though this field is optional, the insertion point must enter this field in
	order for the Next button to become active.
	
	Step 6 - File Summary
	---------------------
	
	This is a new step in the Setup Wizard for Visual FoxPro 3.0. The Setup Wizard
	lists your files in a grid. You can change the settings for any file by clicking
	the item that you want to change. The following table describes the settings
	displayed in each column.
	
	Column      Description
	--------------------------------------------------------------------------
	
	File        The file name as it will be created on the user's computer.
	
	Target Dir  The file can be installed on the user's computer in the
	           Application directory, Windows directory, or Windows System
	           directory.
	
	PM Item     If you would like the Setup program to create a program group
	           and icon, select the PM Item check box for your distributed
	           .exe or program file, and then supply the following:
	
	            - A description of the icon.
	
	            - An icon file to represent your exe.
	
	            - A command line to run your .exe file. In the command line,
	              you can use an embedded %s sequence to replace the
	              application directory. The "s" must be lowercase. Use the %s
	              sequence when you install files in application
	              subdirectories. This ensures that files are installed in the
	              correct subdirectory if users specify a name for the
	              application directory other than the default name. For
	              example, use the following to run an executable called
	              Myapp.exe:
	
	                 %s\Myapp.exe
	
	OLE         If you select this option, the generated setup will register
	           the OLE control when it is installed on a user's computer. This
	           does not register a design-time license for the control on the
	           user's computer. Have your setup program register OLE controls
	           to ensure that your user always uses the correct version of the
	           control.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
