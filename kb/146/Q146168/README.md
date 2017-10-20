---
layout: page
title: "Q146168: Cannot Restore From Archive When Exchange Server is Shut Down"
permalink: /kb/146/Q146168/
---

## Q146168: Cannot Restore From Archive When Exchange Server is Shut Down

{% raw %}

	Article: Q146168
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows NT, version 7.0 
	- Microsoft Schedule+ for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a user tries to restore an archive file while the Microsoft Exchange Server
	is shut down, the user will receive the following error message:
	
	  Your schedule may have been only partially synchronized. Try again later. A
	  problem occurred while connecting to the network. See your administrator.
	
	
	MORE INFORMATION
	================
	
	This behavior is by design because restoring from an archive while the Microsoft
	Exchange Server was shut down could result in duplicate items. If the user would
	like to access the archive file, they can open it by clicking File, Open,
	Archive or Project Schedule, and choosing the archive file.
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbZNotKeyword3 kbSchedule700NT kbSchedule700Win95
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
