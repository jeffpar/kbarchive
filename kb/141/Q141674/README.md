---
layout: page
title: "Q141674: PC WSPlus: Err Msg: Cannot Access Your Server"
permalink: /kb/141/Q141674/
---

## Q141674: PC WSPlus: Err Msg: Cannot Access Your Server

{% raw %}

	Article: Q141674
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbenv kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Microsoft Schedule+, you may see the following error:
	
	  Cannot access your server. Do you want to work offline?
	
	NOTE: You can continue to use Schedule+, and a local calendar file (.CAL) file
	will be created if one does not exist. However, you will not be able to access
	your server calendar file, and the Open Other's Appt. Books... option will not
	be available.
	
	CAUSE
	=====
	
	This often happens with a new user account, and the SCHEDULE.KEY file is locked
	open on the server by another process. If the file is locked open, the new users
	cannot write their hexid number to the file.
	
	NOTE: The SCHEDULE.KEY file contains pointers to each user's hexid
	<nnnnnnnn>.CAL file.
	
	RESOLUTION
	==========
	
	To check for and release a file lock, do the following based on the Network
	Operating System (NOS):
	
	Microsoft Windows NT:
	
	1. Open File Manager.
	
	2. From the File menu, choose Properties. Then select Open by... This will tell
	  you what user or process has the file locked open.
	
	3. Stop the process or have the user log off to eliminate the lock on the file.
	
	Novell NetWare:
	
	1. Run the Monitor NLM at the server or RCONSOLE at a remote workstation.
	
	2. Select File Open/Lock Activity from the Available Options.
	
	3. Remove the lock from the file.
	
	MORE INFORMATION
	================
	
	The above error may also be caused by networking issues. For additional
	information, please see the following articles in the Microsoft Knowledge Base:
	
	  Q122851 Restoring the SCHEDULE.KEY File
	
	  Q140194 Tuning a Schedule+ 1.0 Installation
	
	  Q102967 Server Service Entries, PART 1
	
	Additional query words: 3.x locked open file schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
