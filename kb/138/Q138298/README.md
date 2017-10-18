---
layout: page
title: "Q138298: INFO: Visual SourceSafe System Capacities and Specifications"
permalink: kb/138/Q138298/
---

## Q138298: INFO: Visual SourceSafe System Capacities and Specifications

	Article: Q138298
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbFAQ kbSsafe600FAQ
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information concerning the system capacities of Visual
	SourceSafe.
	
	NOTE: All capacities are related to versions 4.0 and 5.0 of Visual SourceSafe
	unless otherwise noted.
	
	MORE INFORMATION
	================
	
	General Specifications & Limits
	-------------------------------
	
	- Users running Visual SourceSafe concurrently: Unlimited.
	
	- Files and projects in a SourceSafe Database: approx. 4 billion.
	
	- Files and projects directly in a single project: 8191 (however, for
	  performance reasons, Microsoft recommends that there be no more than a few
	  hundred files in a single project).
	
	- Nested project Depth: 15 (this is a recommended limit. You may add more than
	  15 projects, but Microsoft only supports nested projects 15 levels deep).
	
	- Bytes in a file:
	
	  Visual SourceSafe 4.0: 64 megabytes.
	  Visual SourceSafe 5.0: 2 gigabytes.
	  Log file: 2 gigabytes.
	
	- Lines in the Windows View Command: 64,000.
	
	- Versions in a file or project history: 32,767 (the count on a project history
	  does not include file Updates in that project).
	
	- Bytes in the Windows history display: 32,767.
	
	- Lines in a project history: 8191.
	
	- Files correlated in a project history: 8191.
	
	String Lengths
	--------------
	
	- Project Path (for example, $/Word/Spelling): 259 Characters.
	
	- Filename: 255 characters (all platforms except MS-DOS and 16-bit Windows). A
	  short (8.3) name is also stored for compatibility with the FAT file system.
	  Names are not case sensitive.
	
	- Username: 31 characters.
	
	- Password:
	
	  Visual SourceSafe 4.0: 15 characters.
	  Visual SourceSafe 5.0: 31 characters.
	
	- File or project Label: 31 characters.
	
	- String to scan for when using "Find in Files": 63 characters.
	
	- Line in the SS.ini file: 511 characters.
	
	- Length of a checkout comment: 63 characters.
	
	- Length of a check in or label comment:
	
	  GUI = 4095 characters
	  Command Line = 511 characters
	
	Additional query words: vbwin 4.00 5.00 Windows 95 vss limitation capacity
	
	======================================================================
	Keywords          : kbFAQ kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Version           : :4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
