---
layout: page
title: "Q146335: Command-Line Parameters for Schedule+"
permalink: /kb/146/Q146335/
---

## Q146335: Command-Line Parameters for Schedule+

{% raw %}

	Article: Q146335
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	7.00
	WINDOWS
	kbother
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	The following are the valid command-line parameters for Schedule+:
	
	/U "user name"
	
	  Starts Schedule+ using a specific profile (if mail is enabled) or as a
	  specific user (in standalone mode). Quotes are only necessary if the
	  login name has a space in it. If you try to start as an user named
	  TEST, add /u test. If you try to start as an user named TEST USER,
	  add /u "TEST USER". The user name is not case-sensitive.
	
	/p <password>
	
	  Starts Schedule+ with a specified password, where <password> is the
	  password to the /U "user name" Schedule+ file(SCD).
	
	/a
	
	 Starts Schedule+ and displays the New Appointment dialog box.
	
	/t
	
	  Starts Schedule+ and displays the new Task dialog box.
	
	/c
	
	  Starts Schedule+ and displays the New Contact dialog box.
	
	Additional query words: 7.00 startup switches switch
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
