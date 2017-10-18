---
layout: page
title: "Q153502: PRB: Unable to Open Project Error When Running Analyze"
permalink: kb/153/Q153502/
---

## Q153502: PRB: Unable to Open Project Error When Running Analyze

	Article: Q153502
	Product(s): Microsoft SourceSafe
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtshoot kbusage kbSSafe
	Last Modified: 06-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 95 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running Analyze returns the following error message:
	
	  "Unable to open project <DOS path>\a\aaaaaaaa" Continue Y?
	
	CAUSE
	=====
	
	The analyze utility is unable to find the database.
	
	RESOLUTION
	==========
	
	Ensure that Analyze is pointing to the correct database location. It should
	include DATA. For example, if the database resides on a file server mapped to
	drive F:
	
	  Analyze -i- f:\VSS\data
	
	The full syntax is:
	
	  ANALYZE [-B<directory>] [-C] [-F] [-I-] [-V] [-X] [-?] [-H] <Full
	  Database Path>
	
	This particular message is corrected in later revisions of Analyze.exe. However,
	later versions of Analyze (specifically 1309 or above) also fail if you don't
	include the data directory as part of the entire path to the Database. In that
	case, the following error appears:
	
	  "File '<Path Used>\version.dat' not found"
	
	where the Version.dat file is located in the data directory. For more information
	about the newest analyze utility, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q190881 SAMPLE: Analyze6.exe Utility for Visual SourceSafe
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot kbusage kbSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : :95
	Issue type        : kbprb
	
	=============================================================================
	
