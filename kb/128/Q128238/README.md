---
layout: page
title: "Q128238: BUG: SourceSafe Update Command Fails on Large Binary File"
permalink: /kb/128/Q128238/
---

## Q128238: BUG: SourceSafe Update Command Fails on Large Binary File

	Article: Q128238
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe310bug
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, version 3.1 
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	- Microsoft SourceSafe for Macintosh, version 3.1 
	- Microsoft SourceSafe for UNIX, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A large binary file cannot be updated in SourceSafe.
	
	CAUSE
	=====
	
	Insufficient resources to create the difference file.
	
	RESOLUTION
	==========
	
	If it is not possible to increase the HMA by decreasing the number of drivers
	necessary for a given system, try putting all binary files in a subproject, and
	put the following line in the project header for that subproject:
	
	  Store_Deltas = No
	
	This will turn off the calculation of differences (storing the entire file) for
	this subproject only.
	
	For example, you may want to organize your projects as shown in the documentation
	(User Guide Chapter 2 Overview), with a subproject containing the binary files:
	
	       $/-
	         |
	         TESTDATA
	            |
	             -BINARIES
	
	Such that:
	
	  [$/TESTDATA/BINARIES]
	
	would be a subproject header. Put this line under the subproject header in the
	SS.INI file for each user:
	
	  Store_Deltas = No
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe310bug 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310 kbSSafe310DOS kbSSafe310Mac kbSSafe300UNIX
	Issue type        : kbbug
	
	=============================================================================
	
