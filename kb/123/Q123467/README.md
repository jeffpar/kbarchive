---
layout: page
title: "Q123467: HOWTO: How to Create a New Database in SourceSafe"
permalink: kb/123/Q123467/
---

## Q123467: HOWTO: How to Create a New Database in SourceSafe

	Article: Q123467
	Product(s): Microsoft SourceSafe
	Version(s): MACINTOSH:2.0x,3.01,3.02,3.04; MS-DOS:2.0x,3.01,3.02,3.04; WINDOWS:2.0x,3.0,3.01,3.02,3
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
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
	
	Use the Mkss.exe in the ADMIN sub-directory to create a new SourceSafe database
	by following these steps:
	
	1. Create a target directory for the new database.
	
	2. Run MKSS <directory>.
	
	3. Run DDCONV <directory>.
	
	You do not need to use the following step with Visual Sourcesafe version 4.0.
	
	1. Execute SERIALIZE <directory> -s<serial number>, to initialize
	  the database with serial number information.
	
	If you need to move the resulting database, copy all resulting files and
	subdirectories to the new location.
	
	MKSS and DDCONV are in the WIN32 directory in Visual SourceSafe 4.x and 5.x.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q176909 HOWTO: Move a VSS Database or Project to New Location
	
	Additional query words: ss3 vss vbwin 3.0x 4.00 5.00
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe2xDOSSearch kbSSafe302 kbSSafe2xSearch kbSSafe301DOS kbSSafe302DOS kbSSafe301 kbSSafe304 kbSSafe304DOS kbSSafe20xMacSearch kbSSafe301Mac kbSSafe304Mac kbSSafe301UNIX kbSSafe302UNIX kbSSafe304UNIX kbSSafe300UNIX kbSSafe20xUNIXSearch kbSSafe302Mac kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe20xNTSearch kbSSafe301NT kbSSafe302NT kbSSafe304NT
	Version           : MACINTOSH:2.0x,3.01,3.02,3.04; MS-DOS:2.0x,3.01,3.02,3.04; WINDOWS:2.0x,3.0,3.01,3.02,3.04,4.0,5.0,6.0; winnt:2.0x,3.01,3.02,3.04
	Issue type        : kbhowto
	
	=============================================================================
	
