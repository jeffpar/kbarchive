---
layout: page
title: "Q119828: PC WSPlus: Standalone Install Login Name Shouldn't Have Spaces"
permalink: kb/119/Q119828/
---

## Q119828: PC WSPlus: Standalone Install Login Name Shouldn't Have Spaces

	Article: Q119828
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbother
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Schedule+ for Windows independently of a Microsoft
	Mail for PC Networks postoffice, if you enter spaces as part of the user name in
	the login name field of the Sign In dialog box, you will receive error messages
	and functionality limitations when you choose various menu options in Schedule+.
	
	CAUSE
	=====
	
	This problem occurs because the <username>.CAL file contains a space in
	the filename.
	
	RESOLUTION
	==========
	
	Delete or rename the <username>.CAL file, then modify the MSMAIL.INI and
	SCHDPLUS.INI files to replace any references to the login name containing spaces
	with a login name with no spaces.
	
	MORE INFORMATION
	================
	
	When you install Schedule+ as a standalone application, you run the Setup
	program from disk 2. When you start Schedule+ for the first time, Schedule+
	searches for a logon=<username> statement under the [Microsoft Mail]
	section of the MSMAIL.INI file. Because Mail is not installed, the following
	dialog box appears:
	
	  STOP: Mail could not connect to your Mail server. The Mail server path in
	  your MSMAIL.INI is missing or invalid. (Choice: OK)
	
	The next dialog box is:
	
	  STOP: Would you like to work offline? (Choice: OK, Cancel)
	
	NOTE: You can avoid seeing the above dialog boxes the next time you start
	Schedule+ by adding "StartUpOffline=1" (without the quotation marks) to the
	SCHDPLUS.INI file.
	
	If you choose OK, the Sign In dialog box appears and prompts for a name and
	password. If you enter your name with spaces (for example, John Doe), and then
	enter a password (or leave it blank), a data file named JOHN DOE.CAL is created.
	Additionally, an MSMAIL.INI file is created with a "logon=John Doe" statement in
	the [Microsoft Mail] section.
	
	If you then try to use the Export Appointments or Create Archive features under
	the File menu, you will receive the following error message:
	
	  There is not enough memory to display this dialogue box. Please close some
	  windows and try again.
	
	Because you cannot export the data in the CAL file, there is no way to transfer
	this data into a new CAL file. You must delete or rename the
	<username>.CAL file and modify the MSMAIL.INI and SCHDPLUS.INI files to
	remove any references to the old login name containing spaces.
	
	Additional query words: schedule plus 1.00 1.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
