---
layout: page
title: "Q154486: PRB: Access Denied or File Locked When Log In to SourceSafe"
permalink: kb/154/Q154486/
---

## Q154486: PRB: Access Denied or File Locked When Log In to SourceSafe

	Article: Q154486
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Macintosh, version 4.0a 
	- Microsoft SourceSafe for Macintosh, version 3.1 
	- Microsoft SourceSafe for Windows, version 3.1 
	- Microsoft SourceSafe for Windows NT, version 3.1 
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users attempt to log in to the SourceSafe, they get one of the following
	error messages listed by version and platform:
	
	  Mac 3.1: "File '<path to data folder>:rights.dat' is locked."
	
	  Mac 4.0: "Error reading from file '<path to data
	  directory>:rights.dat'"
	
	  PC 3.1: "Access to file "<path to data directory>\rights.dat" denied"
	
	  PC 4.x and PC 5.: "Access to file "<path to data directory>\rights.dat"
	  denied"
	
	CAUSE
	=====
	
	The user may have read-only access to the data directory.
	
	RESOLUTION
	==========
	
	At the operating system level, change the user's rights to the SourceSafe data
	directory to include write or modification rights.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q131022 Required Network Rights for the SourceSafe Directories
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310 kbSSafe310DOS kbSSafe310Mac kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch kbSSafe310NT
	Issue type        : kbprb
	
	=============================================================================
	
