---
layout: page
title: "Q169773: PRB: Setup Wizard Displays &quot;Invalid command-line parameters&quot;"
permalink: /kb/169/Q169773/
---

## Q169773: PRB: Setup Wizard Displays &quot;Invalid command-line parameters&quot;

	Article: Q169773
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing an application using a setup program created with the Microsoft
	Visual Basic 5.0 Setup Wizard or Setup Toolkit, the following message appears:
	
	  Invalid command-line parameters. Unable to continue.
	
	CAUSE
	=====
	
	When an application's setup program is run from a network drive, the full
	server, share, and folder names for the setup folder are parsed. If the setup
	program's folder name contains a dash (-) or a space, it is perceived by the
	setup program as a command-line parameter. For example, if an application is
	being installed from the server\share\folder location:
	
	  \\server1\share1\folder-1
	
	the dash is mistakenly perceived as a command-line parameter for the setup
	program when the path is parsed. In this example, -1 is not a valid command-
	line parameter and the message above is displayed.
	
	This message is not displayed if the application's setup program is run from the
	local hard drive or from floppy disks.
	
	RESOLUTION
	==========
	
	Run the application's setup program from a folder that does not have a dash or a
	space in the name.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbprb
	
	=============================================================================
	
