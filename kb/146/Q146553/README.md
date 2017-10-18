---
layout: page
title: "Q146553: Other Systems Options Unavailable When Export"
permalink: kb/146/Q146553/
---

## Q146553: Other Systems Options Unavailable When Export

	Article: Q146553
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to export data from Schedule+, the Other Systems option may not be
	available.
	
	CAUSE
	=====
	
	The option is unavailable because the user that installed Schedule+ is not the
	currently logged in user. The Schedule+ information for this menu is written to
	the Microsoft Windows NT Registry under HKEY_CURRENT_USER, and this information
	is different for each user that uses the Windows NT computer.
	
	Additional query words: 7.00 schedule plus gray grey grayed out
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
