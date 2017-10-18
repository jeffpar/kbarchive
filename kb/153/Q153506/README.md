---
layout: page
title: "Q153506: PRB: Cannot Set Working Directory by Using .ini File"
permalink: kb/153/Q153506/
---

## Q153506: PRB: Cannot Set Working Directory by Using .ini File

	Article: Q153506
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbSSafe400 kbSSafe500
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Macintosh, versions 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Defining a working directory from either the Srcsafe.ini or Ss.ini file does not
	work. Any files that are checked out are stored to a different location from
	that specified.
	
	CAUSE
	=====
	
	The working directory is defined by default by whatever directory is defined in
	MPW's Directory menu.
	
	RESOLUTION
	==========
	
	Type the following statement in the appropriate .ini file (after a project
	section) to cause Visual SourceSafe to use the working directory specified:
	
	  Force_Dir=Yes
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbSSafe400 kbSSafe500 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper
	Issue type        : kbprb
	
	=============================================================================
	
