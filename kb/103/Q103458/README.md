---
layout: page
title: "Q103458: PC OS2: No Check for Disk Space Before Install"
permalink: /kb/103/Q103458/
---

## Q103458: PC OS2: No Check for Disk Space Before Install

	Article: Q103458
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2, on platform(s):
	   - the operating system: OS/2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail for PC Networks, OS/2 workstation Setup program tries to
	install a file, runs out of disk space, and displays the following message
	
	  Problem writing <filename> file.
	
	where <filename> is the name of file the Setup program is currently trying
	to install.
	
	After you receive the message, Setup quits. If you then try to set up the
	Presentation Manager (PM) client on another drive, you may still receive the
	message if the MSMAIL directory still exists on the original drive.
	
	CAUSE
	=====
	
	SETUP.EXE begins without checking to see if there is sufficient disk space for
	the Mail installation, finds there is not enough space, and quits.
	
	RESOLUTION
	==========
	
	Delete the MSMAIL directory and either clear enough disk space on the current
	drive or choose another drive with more disk space.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for PC Networks, OS/2 workstation. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
