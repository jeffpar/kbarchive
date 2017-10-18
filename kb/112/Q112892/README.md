---
layout: page
title: "Q112892: PC WRmt: Friendly Name Doesn't Change"
permalink: kb/112/Q112892/
---

## Q112892: PC WRmt: Friendly Name Doesn't Change

	Article: Q112892
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Mail Remote for Windows and you change your friendly
	name, you will see both your old and new friendly names in the Address Book.
	
	CAUSE
	=====
	
	Changing your friendly name on the postoffice does not change your friendly name
	in Mail Remote for Windows unless you obtain a new Data disk.
	
	When you change your friendly name, your friendly name listed in the RNETWORK.GLB
	file no longer matches your friendly name listed in the CONNECT.GLB file.
	
	Mail Remote for Windows gets a user's friendly name from the CONNECT.GLB file and
	creates the local postoffice list. If the Remote user is in the list, nothing
	happens. Because the name has changed, the new name isn't found, so Mail Remote
	for Windows add the new name.
	
	RESOLUTION
	==========
	
	Contact your system administrator and ask for a new Data disk when you change
	your friendly name.
	
	REFERENCES
	==========
	
	For more information, see the Microsoft Mail Remote for Windows on-line Help
	documentation under "Remote Help," "Solving Message or Address List Problems."
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
