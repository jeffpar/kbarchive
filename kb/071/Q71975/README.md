---
layout: page
title: "Q71975: DOCERR: QuickHelp Searches C:&#92;QH, DPATH, PATH, BOOKSHELF"
permalink: /kb/071/Q71975/
---

## Q71975: DOCERR: QuickHelp Searches C:&#92;QH, DPATH, PATH, BOOKSHELF

	Article: Q71975
	Product(s): Microsoft Programming Utilities
	Version(s): 1.7,1.83
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft QuickHelp for MS-DOS, versions 1.7, 1.83 
	- Microsoft QuickHelp for OS/2, versions 1.7, 1.83 
	-------------------------------------------------------------------------------
	
	When invoking QuickHelp with the HELPFILES and QH environment
	variables set to directories that do not contain help files, QuickHelp
	will search (in the order listed) the following places for help files:
	
	1. The directory C:\QH (if it exists).
	
	2. The directories listed in the DPATH environment variable.
	
	3. The directories listed in the PATH environment variable.
	
	4. The directories listed in the BOOKSHELF environment variable (this only
	  applies to the OS/2 version of QuickHelp).
	
	QuickHelp will stop searching as soon as it finds any help files.
	
	Additional query words: 1.70
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbQBASICSearch kbQuickHelpSearch kbQuickHelp170DOS kbQuickHelp183DOS kbQuickHelp170OS2
	Version           : :1.7,1.83
	
	=============================================================================
	
