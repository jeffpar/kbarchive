---
layout: page
title: "Q147150: Command Line Parameters for Schedule+ 7.0"
permalink: /kb/147/Q147150/
---

## Q147150: Command Line Parameters for Schedule+ 7.0

	Article: Q147150
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	7.00
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	The following are the valid command line parameters for Microsoft Schedule+
	version 7.0:
	
	The /U Parameter
	----------------
	
	Syntax: /U "user name"
	
	Explanation: Starts Schedule+ using a specific profile (if mail is enabled)
	or as a specific user (in standalone mode). Quotes are only necessary if
	the login name has a space. If you attempt to start Schedule+ as a user
	named TEST, add the following to the command line:
	
	  /u test.
	
	If you attempt to start as a user named TEST USER add the following to
	the command line:
	
	  /u "TEST USER".
	
	NOTE: The user name is not case-sensitive.
	
	The /P Parameter
	----------------
	
	Syntax: /p <password>
	
	Explanation: Starts Schedule+ with a specified password, where <password>
	is the password to the /U "user name" Schedule+ file (SCD).
	
	The /A Parameter
	----------------
	
	Syntax: /a
	
	Explanation: Starts Schedule+ and displays the New Appointment dialog box.
	
	The /T Parameter
	----------------
	
	Syntax: /t
	
	Explanation: Starts Schedule+ and displays the new Task dialog box.
	
	The /C Parameter
	----------------
	
	Syntax: /c
	
	Explanation: Starts Schedule+ and displays the new Contact dialog box.
	
	Additional query words: 7.00 startup switches switch
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
