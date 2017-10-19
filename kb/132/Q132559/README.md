---
layout: page
title: "Q132559: PC WSPlus: Err Msg: Your Passwords Don't Match..."
permalink: /kb/132/Q132559/
---

## Q132559: PC WSPlus: Err Msg: Your Passwords Don't Match...

	Article: Q132559
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 1.0 and 1.0a of Microsoft Schedule+ for Windows, the following error
	will be displayed when a user's offline calendar file password does not match
	the online version of the calendar file maintained on the server in the CAL
	directory.
	
	  Your passwords don't match. Type your old password.
	
	CAUSE
	=====
	
	This error message will be displayed when one of the following situations
	occurs:
	
	1. The user changed his or her password under Microsoft Mail for Windows.
	
	2. The Mail Administrator has recovered the user's password using the ADMIN.EXE
	  program from versions 3.0 and 3.0a of Microsoft Mail for PC Networks.
	
	RESOLUTION
	==========
	
	If you are on a version 3.0 or 3.0a Mail for the PC Networks postoffice, the
	ADMIN.EXE program that shipped with these versions did not recover the password
	for the user's \MAILDATA\CAL\HEXID.CAL file. You must obtain the latest
	ADMIN.EXE file for version 3.2 of Mail for PC Networks.
	
	This problem was corrected in ADMIN.EXE version 3.2. If you do not have version
	3.2 (or later), the following self-extracting file is available for download
	from the Microsoft Software Library:
	
	  Admin.exe (http://support.microsoft.com/download/support/mslfiles/Admin.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q107443 PC Adm: Microsoft Mail ADMIN.EXE 3.2.17 Update
	
	MORE INFORMATION
	================
	
	The following procedures are required when you recover calendar file passwords.
	Please read all procedures prior to performing them.
	
	1. Rename the user's local calendar file to USERNAME.BAK. The location of this
	  file is defined in the SCHDPLUS.INI file's 'LocalPath=' parameter.
	
	  NOTE:: If you are already recovered the user's password running ADMIN.EXE
	  version 3.2x, go to step 4.
	
	2. Launch ADMIN.EXE version 3.2x against the postoffice the user resides on.
	
	3. Using Local-Admin, Recover, select the user's name from the list. This will
	  set the user's password to the global password as defined in the ADMIN.EXE
	  program under Local-Admin, Options, Password.
	
	4. Have the user login to Schedule+ using the global password.
	
	  a. The user will receive the following dialog box:
	
	  The local copy of your schedule file could not be accessed in the location
	  specified in your SCHDPLUS.INI file.
	
	     Click the OK button.
	
	  b. The Find Local File dialog box will appear.
	
	     Click the New button.
	
	  c. The user will receive another dialog box confirming that the new file has
	     been created.
	
	     Click the OK button.
	
	At this point, the user should be able to login to Schedule+ without the error
	occurring. The \MAILDATA\CAL\HEXID.CAL file associated with the user has been
	copied into the local file, USERNAME.CAL.
	
	Additional query words: schedule plus 1.00 1.00a mail 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
