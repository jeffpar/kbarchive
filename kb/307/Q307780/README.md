---
layout: page
title: "Q307780: INFO: Administrator Changes Not Reflected Until App Restarted"
permalink: kb/307/Q307780/
---

## Q307780: INFO: Administrator Changes Not Reflected Until App Restarted

	Article: Q307780
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSExplorer kbDSupport kbGrpDSSSafe
	Last Modified: 23-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you change settings that affect the Visual SourceSafe Explorer in the
	Administrator tool, those changes are not reflected until you quit and restart
	the Visual SourceSafe Explorer application. For example, a shadow folder is not
	updated in response to check-ins unless the Visual SourceSafe Explorer is closed
	and reopened after you create the shadow folder.
	
	MORE INFORMATION
	================
	
	The Visual SourceSafe Explorer only "reads" the configuration file (SRCSAFE.ini)
	when the application is started. If you make changes in the Administrator tool
	or to the configuration file itself, the Visual SourceSafe Explorer will not be
	aware of these changes until it is restarted and reads the new configuration
	file. Some of the functions and settings affected include: shadow folder
	settings, allow multiple checkouts, keyword expansion, journaling, Web project
	settings, Web settings, and file types.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSExplorer kbDSupport kbGrpDSSSafe 
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
