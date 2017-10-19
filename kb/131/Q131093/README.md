---
layout: page
title: "Q131093: PRB: SourceSafe 3.1 Cannot Use UNC Names"
permalink: /kb/131/Q131093/
---

## Q131093: PRB: SourceSafe 3.1 Cannot Use UNC Names

	Article: Q131093
	Product(s): Microsoft SourceSafe
	Version(s): MS-DOS:3.1; WINDOWS:3.1; winnt:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for MS-DOS, version 3.1 
	- Microsoft SourceSafe for Windows, version 3.1 
	- Microsoft SourceSafe for Windows NT, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SourceSafe cannot use Universal Naming Convention (UNC) names. For example the
	following setting won't work:
	
	  Data_Path = \\SOURCESAFE\SSAFE\SS\DATA
	
	It gives this error:
	
	  Invalid path: C:\SOURCESAFE\SSAFE\SS\DATA\um.dat
	
	STATUS
	======
	
	This behavior is by design in SourceSafe version 3.1. Visual SourceSafe version
	4.0 can use UNC names.
	
	Additional query words: relative path
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310 kbSSafe310DOS kbSSafe310NT
	Version           : MS-DOS:3.1; WINDOWS:3.1; winnt:3.1
	Issue type        : kbprb
	
	=============================================================================
	
