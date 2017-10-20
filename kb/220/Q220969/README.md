---
layout: page
title: "Q220969: INFO: Description of Files in the DATA Directory"
permalink: /kb/220/Q220969/
---

## Q220969: INFO: Description of Files in the DATA Directory

{% raw %}

	Article: Q220969
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following files can be found in the \Data directory for your Microsoft
	Visual SourceSafe Server Installation (versions 4.x, 5.x, and 6.x):
	
	- Names.dat
	
	- Rights.dat
	
	- Status.dat
	
	- UM.dat
	
	- Version.dat
	
	The following list of files and folders are new for version 6.0:
	
	- CRCS.dat
	
	- Labels (Folder)
	
	MORE INFORMATION
	================
	
	Following is a brief description for each of the files listed above:
	
	Names.Dat:
	Names.dat stores the namespace information for a file.
	
	Rights.dat:
	The Rights.dat file has a list of rights assignments for each user issued through
	the Administrator utility either under Rights by Project or Rights Assignment
	for User on the Tools menu.
	
	Status.dat:
	The Status.dat file is used to optimize the GUI interface. There is a 4 byte
	entry in this file for every item in Visual SourceSafe.
	
	UM.dat:
	UM.dat stores the users' names, their encrypted passwords, and whether the user
	has read-only or read-write permissions. This file also contains a 2-byte
	representation of the database version used by the Visual SourceSafe Explorer.
	
	Version.dat:
	Version.dat stores a 2-byte version number of the database used by the Analyze
	utility.
	
	CRCS.dat
	CRCS.dat contains CRC information for items in the database.
	
	Labels (Folder):
	The Labels folder contains the Label information for every labeled item in the
	Visual SourceSafe database.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q168248 INFO: Description of SourceSafe .DAT files
	
	Additional query words: rebuild rebuilding fix error
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
