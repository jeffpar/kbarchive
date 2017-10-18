---
layout: page
title: "Q172157: PRB: Do Not Use SourceSafe When Running SSARC or SSRESTO"
permalink: kb/172/Q172157/
---

## Q172157: PRB: Do Not Use SourceSafe When Running SSARC or SSRESTO

	Article: Q172157
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the archiving or restore utilities SSARC and SSRESTOR while users are
	working in Visual SourceSafe, the archive or restore may fail. Database
	corruption may also occur.
	
	We recommend that every user log out of the Visual SourceSafe Database before you
	use the SSARC or SSRESTOR utilities.
	
	CAUSE
	=====
	
	SSARC and SSRESTOR can write or remove many files from the Visual SourceSafe
	database, depending on the scope of its operation. If other users are in the
	process of making changes to log files that the archive and restore utilities
	need, unpredictable results may occur.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	
