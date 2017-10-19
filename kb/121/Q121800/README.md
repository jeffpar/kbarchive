---
layout: page
title: "Q121800: PC WSPlus:  How to Use Schedule+  Without Microsoft Mail"
permalink: /kb/121/Q121800/
---

## Q121800: PC WSPlus:  How to Use Schedule+  Without Microsoft Mail

	Article: Q121800
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	1.00
	WINDOWS
	kbsetup kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	You can use Microsoft Schedule+ as a stand-alone application (without using
	Microsoft Mail) by doing the following:
	
	1. Perform a fresh installation of Windows for Workgroups or Windows NT.
	
	2. Start Schedule+ (before you create or attach to a postoffice). The following
	  message will be displayed:
	
	  Until you run Mail once, you will not be able to use the workgroup features
	  of Schedule+. Do you want to use only the personal features of Schedule+ now?
	
	3. Choose OK. The Mail sign-in dialog box will be displayed.
	
	4. Enter a user name and password that will be easy to remember and press ENTER.
	  The following message will be displayed:
	
	  Mail could not connect to your mail server. The Mail server path in your
	  MSMAIL.INI is missing or invalid.
	
	5. Choose OK. The message, "Would you like to work off-line?" will be displayed.
	
	6. Choose OK. Schedule+ will create a local .CAL file and a SCHDPLUS.INI file.
	
	7. From the Options menu, choose General Options, and choose Startup Offline.
	
	8. Choose OK.
	
	Schedule+ will now run without a workgroup postoffice. Step 7 places the
	Startupoffline=1 statement in the SCHDPLUS.INI file.)
	
	Additional query words: schedule plus 1.00 sched+
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
