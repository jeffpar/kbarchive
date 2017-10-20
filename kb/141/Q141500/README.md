---
layout: page
title: "Q141500: PC WSPlus: How to Access Multiple CAL Files Working Offline"
permalink: /kb/141/Q141500/
---

## Q141500: PC WSPlus: How to Access Multiple CAL Files Working Offline

{% raw %}

	Article: Q141500
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Schedule+ in Work Offline mode, the Open Other's Appt. Book...
	option is disabled, limiting your ability to open multiple calendar files. In
	the Work Offline mode, you use your local calendar file (.CAL) instead of the
	calendar file located on the Mail server. When you are in Work Offline mode, you
	are not able to access multiple .CAL files.
	
	WORKAROUND
	==========
	
	Create a Schedule+ icon for each of the .CAL files you want to use, and assign
	each of the icons to a different account by placing an user's mailbox name after
	the command line of SCHEDULE.EXE in the Program Item Properties window; for
	example,
	
	  C:\SCHDPLUS\SCHDPLUS.EXE admin
	  C:\SCHDPLUS\SCHDPLUS.EXE user1
	
	Using this method you can use a different local .CAL at a time by running the
	appropriate icon.
	
	Notes:
	
	- You must have the password for these calendar files in order to access them.
	
	- You must have at sometime logged on to the other user's Schedule+ account in
	  order to have the local calendar (*.CAL) files created.
	
	- The changes to the local files will not be merged into the server calendars
	  until the next time the user of each account signs on to the mail server.
	
	MORE INFORMATION
	================
	
	When the user's name on the command line is present, Schedule+ ignores the
	LocalUser and LocalPath entries in SCHDPLUS.INI and uses the parameter on
	command line to display the account to sign on in the Mail sign in dialog box.
	
	The following are examples of SCHDPLUS.INI entries for using Schedule+ offline:
	
	     StartupOffline=1
	     LocalUser=admin
	     LocalPath=C:\SCHDPLUS\ADMIN.CAL
	
	This configuration is unsupported by Microsoft.
	
	Additional query words: 1.00 1.00a schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
