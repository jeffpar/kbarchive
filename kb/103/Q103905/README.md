---
layout: page
title: "Q103905: PC WRmt: Cannot Create New .MMF If Old Location Unavailable"
permalink: kb/103/Q103905/
---

## Q103905: PC WRmt: Cannot Create New .MMF If Old Location Unavailable

	Article: Q103905
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of Microsoft Mail Remote for Windows may return the following error
	message
	
	  Your message file could not be found
	
	followed by:
	
	  Open Message File
	
	After the error message, even if you change to a different directory, Mail Remote
	ignores the change to the directory and creates a new Mail message file (.MMF)
	in the directory listed on the OfflineMessages line of the MSMAIL.INI file.
	
	CAUSE
	=====
	
	This error occurs only when the Mail Remote for Windows .MMF file is moved to a
	floppy disk or to a network drive, and you start Mail with the floppy disk out
	of the drive or with the network drive disconnected. If this occurs, it is
	impossible to create a new message file from the dialog box.
	
	Following the design of Microsoft Mail for PC Networks, Mail Remote for Windows
	ignores changed directories when you are in the dialog box for creating a new
	message file. Because the old location is not available (due to the floppy disk
	being out of the drive or the network connection missing), the error appears.
	
	RESOLUTION
	==========
	
	To work around this problem, either modify or comment out the OfflineMessages
	line in the MSMAIL.INI file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. We are researching this problem and will post new
	information here in the Knowledge Base as it becomes available.
	
	
	Additional query words: 3.20 errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
