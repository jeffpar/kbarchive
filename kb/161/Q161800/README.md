---
layout: page
title: "Q161800: ADT95: Setup of Custom Application Not Completed Successfully"
permalink: /kb/161/Q161800/
---

## Q161800: ADT95: Setup of Custom Application Not Completed Successfully

	Article: Q161800
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 22-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you try to install a custom application using Setup disks created with the
	Setup Wizard in the Microsoft Access Developer's Toolkit (ADT) for Windows 95,
	you may receive the following error:
	
	  Setup was not completed successfully
	
	CAUSE
	=====
	
	This error has different causes, depending on what options you selected in the
	ADT Setup Wizard at the time that you created the Setup disks:
	
	- In the Setup Wizard, you added the name of an executable file that will run
	  after the Setup program is completed and used the default setting on the
	  command line for the executable file. For example, if you add the file
	  README.TXT, in the "Run the following file after the custom Setup program is
	  completed" box, then the default command line is as follows:
	
	  "$(FilePath)\README.TXT"
	
	- In the Setup Wizard, you added the Replication functionality and specified a
	  server name in the "Path to Shared Network Folder" box that does not exist or
	  contains a space. For example, you entered a \\server\share path as follows:
	
	  \\My App\Share
	
	- In the Setup Wizard, you added the Replication functionality and specified a
	  particular network server in the "Path to Shared Network Folder" box.
	  However, when you tried to install the custom application, the computer did
	  not have a connection to the particular network server.
	
	- In the Setup Wizard, you added the Replication functionality and specified a
	  particular network server in the "Path to Shared Network Folder" box.
	  However, adequate permissions have not been set for the individual running
	  the custom setup program
	
	.  - In the Setup Wizard, on the screen marked "Add the files that you want your
	  custom Setup program to copy and then set properties for each file:", the
	  "Set as Workgroup file" check box has been selected for your main application
	  file (.mdb).
	
	RESOLUTION
	==========
	
	There are five possible workarounds to this error:
	
	- If the cause is that you included an executable file to run after setup
	  finishes, then run the Setup Wizard again and specify a complete command line
	  for the file. Enclose any files, paths, or strings that might contain spaces
	  in quotation marks, for example:
	
	  "$(WinPath)\NOTEPAD.EXE" "$(AppPath)\README.TXT"
	
	- If the cause is an error in the "Path to Shared Network Folder" setting for
	  the Replication feature, then run the Setup Wizard again and enter a correct
	  server name without spaces, for example:
	
	  \\MyApp\Share
	
	- If the cause is the lack of a connection to a network share for the
	  Replication feature, then establish a connection and rerun the Setup program
	  for the custom application.
	
	- If the cause is that inadequate permissions have been set for the individual
	  running the custom setup program, then have share level permissions of
	  read/write/create assigned to this individual before running the custom setup
	  program.
	
	- If the cause is that you specified your main application file as your
	  workgroup file, then rerun the Setup Wizard and specify a valid workgroup
	  file (.mdw). The selected file should store option and security settings for
	  your application.
	
	  NOTE: If you do not specify a workgroup information file for your application
	  and your application requires one, the Setup Wizard will create this file for
	  you.
	
	REFERENCES
	==========
	
	For more information about using the Setup Wizard in the ADT, search for
	"Setup," and then "Setup Wizard in ADT," using the Microsoft Access Developer's
	Toolkit for Windows 95 Help Index.
	
	For more information about using replication functionality in your custom
	application, search on "Replication," and then "Replication manager," using the
	Microsoft Access for Windows 95 Help Index.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbAudDeveloper kbAccessSearch kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
