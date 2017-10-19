---
layout: page
title: "Q162884: ODE97: Troubleshooting ODE Setup Wizard Problems"
permalink: /kb/162/Q162884/
---

## Q162884: ODE97: Troubleshooting ODE Setup Wizard Problems

	Article: Q162884
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the most common problems encountered when using the Setup
	Wizard and describes how to avoid or solve them. Much of this information comes
	from the Setup Wizard Help file (Setupwiz.hlp), which is accessible from the
	Tips button in the Setup Wizard.
	
	MORE INFORMATION
	================
	
	Contents
	--------
	
	The following problems are discussed in more detail later in this article:
	
	- Setup Wizard Error Message Occurs When You Attempt to Create Disk Images
	
	- "Object Error 325" Occurs While Your Custom Setup Program Is Running
	
	- Default Installation Folder for Your Application Is Always on Drive C
	
	- You Receive a Compile Error When You Run Your Run-Time Application
	
	- Users Can't Run Microsoft Graph 97 from Your Run-Time Application
	
	- Can't Run a Run-Time Application Without a Network Server or CD-ROM
	
	- Database (.Mdb) Files No Longer Automatically Open in Microsoft Access
	
	- Users Can't Open the Custom Help File for Your Run-Time Application
	
	- You Must Use Either Full or No File Name Extensions for Compressed Files
	
	- Open Disk Image Folders and Highlight All Files When Copying Files to Disks
	
	- Creating Front-End/Back-End Applications
	
	- Specify a Unique Application Name, Version Number, and Destination Folder
	
	Setup Wizard Error Message Occurs When You Attempt to Create Disk Images
	------------------------------------------------------------------------
	
	You may see the following error message when you try to create disk images for
	your application using the Setup Wizard:
	
	  Setup Wizard
	  Permission Denied
	
	After you see this error message, you'll see the error message "The creation of
	your custom Setup program was not completed successfully." This error occurs if
	you specify a workgroup information (.mdw) file for your application that is the
	same workgroup information file being used for the current instance of Microsoft
	Access. You specify a workgroup information file on the Add Files page of the
	Setup Wizard, using the "Set As Workgroup File" check box.
	
	To avoid this error message, create a copy of the workgroup information file, and
	use this copy as the workgroup information file for your application.
	
	NOTE: You will also see the same error message if you try to add any file to your
	custom application that is currently in use by Microsoft Access or another
	application.
	
	"Object Error 325" Occurs While Your Custom Setup Program Is Running
	--------------------------------------------------------------------
	
	To avoid this error, always change the version number of your application each
	time you change the files included in the Setup program. In addition, make sure
	you use a different name for each application you create.
	
	Default Installation Folder for Your Application Is Always on Drive C
	---------------------------------------------------------------------
	
	When a user sets up your application, your custom Setup program suggests a
	default folder for the application's installation. You set the default folder
	that is suggested on the Provide Application Details page of the Setup Wizard.
	
	You can enter any folder path you want, but note that the custom Setup program
	will always suggest the first available hard drive, typically drive C, as the
	root for this path. Your users can choose to use another location for the
	application's installation.
	
	You Receive a Compile Error When You Run Your Run-Time Application
	------------------------------------------------------------------
	
	If your run-time application uses methods, properties, or functions in a
	referenced database, your application must include the referenced database, or
	you must remove the methods, properties, or functions from your run-time
	application.
	
	You can check to see if your run-time application uses such methods, properties,
	or functions by running your application in full Microsoft Access. The
	References dialog box on the Tools menu lists any referenced databases. You can
	add such databases to your application's custom Setup program by using the Add
	Files page in the Setup Wizard.
	
	Users Can't Run Microsoft Graph 97 from Your Run-Time Application
	-----------------------------------------------------------------
	
	After uninstalling an Office application, users of your application may receive
	an error message saying the application can't find the dynamic-link library
	(DLL) Mso97 when they try to run Graph from within your application. To correct
	this problem, they need to reinstall your application.
	
	Can't Run a Run-Time Application Without a Network Server or CD-ROM
	-------------------------------------------------------------------
	
	If users have installed Microsoft Office Professional 97 or Microsoft Access 97
	on a network server or on a CD-ROM (that is, they don't have a full local
	version of Microsoft Access), installing your custom run-time application on
	their computer does not install a local version of Microsoft Access. So, in
	order to run your run-time application, users must be connected to the network
	server or have the CD-ROM available. To work around this problem, users can
	uninstall both Microsoft Office Professional 97 or Microsoft Access 97 and your
	run-time application, and then reinstall them, making sure to install your
	run-time application first.
	
	Database (.Mdb) Files No Longer Automatically Open in Microsoft Access
	----------------------------------------------------------------------
	
	After uninstalling Microsoft Access, users of your run-time application may find
	that .mdb files no longer automatically open in Microsoft Access even though the
	run-time version of Microsoft Access is still installed on their computers.
	
	To work around this problem, users can either reinstall your application or
	manually add an association between .mdb files and Msaccess.exe. To keep this
	problem from occurring, make sure you include "Msaccess.exe" in the command line
	for the shortcut that opens your application (for example, "Msaccess.exe"
	/runtime "$(FilePath)\MyApp.mdb").
	
	Users Can't Open the Custom Help File for Your Run-Time Application
	-------------------------------------------------------------------
	
	If users of your run-time application are prompted to open the Microsoft Access
	Help file instead of your custom Help file, you need to create and set the
	AppHelpFile key in the Windows registry under the Run-Time Options key. For more
	information about creating these keys, see Microsoft Access Run-Time Option
	Settings.
	
	You Must Use Either Full or No File Name Extensions for Compressed Files
	------------------------------------------------------------------------
	
	If you create disk images for your application in compressed format (you select
	1.44-MB Disks or Compressed Network or CD Setup on the Specify Disk Image
	Options page in the Setup Wizard), you must either use full three-letter file
	name extensions (for example, MyApp.mdb) or use no extension (for example,
	Readme) for any files you specify for your application. If you don't, you will
	receive a "Setup could not open the file 'filename'" error when you are running
	the custom Setup program for your application.
	
	Open Disk Image Folders and Highlight All Files When Copying Files to Disks
	---------------------------------------------------------------------------
	
	When copying files from the disk images for your application to 1.44-MB disks,
	you must open each folder in the disk images set and highlight all the files in
	the folder before copying its files to the disks. The default folder for your
	disk images is c:\Program Files\Microsoft OfficeODETools\Setup
	Wizard\Images\Disks. This folder will contain folders named Disk1, Disk2, and so
	on. To copy the files in the Disk1 folder, open this folder and highlight all
	the files before copying the folder to floppy disks. Repeat this procedure for
	all the other disk folders.
	
	You should also make sure the .dll files for your application are visible in the
	disk images before you copy the files. By default, Microsoft Windows 95 hides
	.dll files in Windows Explorer.
	
	Creating Front-End/Back-End Applications
	----------------------------------------
	
	The Setup Wizard does not support administrative installations using the /a
	switch when installing Microsoft Access run-time applications. That is, you
	cannot install a main application containing all of your data and database
	objects on a server, and then from that server installation install "front-end"
	applications containing just the queries, forms, reports, macros, and modules on
	workstation computers.
	
	To simulate this functionality, you should create two applications. Create one
	application that contains all of the data and database objects you want in your
	application (this is called a "main" or "back-end" application). Create another
	application that contains just the queries, forms, reports, macros, and modules
	from the main application (this is called a "front-end" application). In this
	application, include links to the data in the main application. Use the Setup
	Wizard to create a custom Setup program containing two components. One component
	contains the main application. You can specify that this component is only
	available in a Complete or Custom installation. The second component, available
	in a Typical installation, contains the front-end application. Administrators
	can then run your custom Setup program and install the main application on a
	network server. Users can run your custom Setup program and install the
	front-end application on a local computer.
	
	Specify a Unique Application Name, Version Number, and Destination Folder
	-------------------------------------------------------------------------
	
	When you create an application's custom Setup program using the Setup Wizard, be
	sure to specify a unique application name, version number, and destination
	folder for the application in the Provide Application Details page of the Setup
	Wizard. For example, it is usually a bad idea to install an application in the
	same folder as Microsoft Access; file names in your application could conflict
	with existing Microsoft Access file names.
	
	REFERENCES
	==========
	
	For more information on compile errors, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q160870 ACC: VBA Functions Break in Database with Missing References
	
	For more tips on avoiding problems in the Setup Wizard, search the Help Index for
	"avoiding problems in Setup Wizard," or ask the Microsoft Office 97, Developer's
	Edition Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	
	=============================================================================
	
