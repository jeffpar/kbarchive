---
layout: page
title: "Q168634: INFO: When -d Switch of Analyze Deletes Files"
permalink: kb/168/Q168634/
---

## Q168634: INFO: When -d Switch of Analyze Deletes Files

	Article: Q168634
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the -d switch on Analyze.exe to delete unnecessary files from the
	database. This switch will not delete all unnecessary files, only those that
	meet a certain condition.
	
	MORE INFORMATION
	================
	
	Under most circumstances, when you delete a file from a SourceSafe project it
	will delete the associated file pair from the SourceSafe database (usually the
	VSS\DATA directory.)
	
	However, if a file is branched to another project and then deleted, SourceSafe
	does not delete the associated file pair from the database because it needs
	those files to maintain the history of the branched version.
	
	Even when the branched version is subsequently deleted, its associated file pair
	is not deleted.
	
	The only time the -d switch on Analyze will delete files from the SourceSafe
	database is when it detects a file that was involved in a branch at one point,
	and no branched versions of the file are now active (not deleted) in the project
	tree.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q190881 SAMPLE: Analyze6.exe Utility for Visual SourceSafe
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by David de
	Groot, Microsoft Corporation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : :4.0,4.0a,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
