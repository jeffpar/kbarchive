---
layout: page
title: "Q153501: PRB: &quot;Error reading from file&quot; When Logging into SourceSafe"
permalink: kb/153/Q153501/
---

## Q153501: PRB: &quot;Error reading from file&quot; When Logging into SourceSafe

	Article: Q153501
	Product(s): Microsoft SourceSafe
	Version(s): 3.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310
	Last Modified: 06-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Visual SourceSafe Explorer, the following message may appear
	before or after you're prompted to log in:
	
	  "Error reading from file"
	
	CAUSE
	=====
	
	One possible cause is that the Names.dat file is corrupted. This file contains
	the long filenames of both projects and files in the SourceSafe database.
	
	RESOLUTION
	==========
	
	At the command prompt, type:
	
	     analyze -f <path to data folder>
	
	For example:
	
	     analyze -f s:\\vss\data
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310DOS kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : :3.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
