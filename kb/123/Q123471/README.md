---
layout: page
title: "Q123471: HOWTO: Change the Data Directory Location"
permalink: kb/123/Q123471/
---

## Q123471: HOWTO: Change the Data Directory Location

	Article: Q123471
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft SourceSafe for MS-DOS, versions 2.0x, 3.01, 3.02, 3.04 
	- Microsoft SourceSafe for Windows, versions 2.0x, 3.01, 3.02, 3.04 
	- Microsoft SourceSafe for Macintosh, versions 2.0x, 3.01, 3.02, 3.04 
	- Microsoft SourceSafe for Windows NT, versions 2.0x, 3.01, 3.02, 3.04 
	- Microsoft SourceSafe for UNIX, versions 2.0x, 3.0, 3.01, 3.02, 3.04 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To move the SourceSafe data directory to a location different from the
	SourceSafe location, follow these steps:
	
	1. Copy the DATA directory to the new directory.
	
	  IMPORTANT: Make sure you copy all subdirectories even if they are empty.
	  SourceSafe will not work correctly if they are not present. SourceSafe users
	  must have FULL rights in the target directory.
	
	  To reduce confusion, you may want to delete the old directory once you have
	  successfully copied the DATA directory to its new location.
	
	2. Edit the SRCSAFE.INI file using any text editor. Change this line:
	
	        Data_Path = data
	
	  to this line:
	
	        Data_Path = <new path>\data_dir
	
	  NOTE: This variable must be defined in the SRCSAFE.INI for version 3.x or
	  later and in the SYSTEM.INI for version 2.x.
	
	REFERENCES
	==========
	
	See "SourceSafe Concepts and Configuration" Manual for version 3.x, p.154.
	
	Additional query words: ss3
	
	======================================================================
	Keywords          : kbsetup kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe2xDOSSearch kbSSafe302 kbSSafe2xSearch kbSSafe301DOS kbSSafe302DOS kbSSafe301 kbSSafe304 kbSSafe304DOS kbSSafe20xMacSearch kbSSafe301Mac kbSSafe304Mac kbSSafe301UNIX kbSSafe302UNIX kbSSafe304UNIX kbSSafe300UNIX kbSSafe20xUNIXSearch kbSSafe302Mac kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe20xNTSearch kbSSafe301NT kbSSafe302NT kbSSafe304NT
	Issue type        : kbhowto
	
	=============================================================================
	
