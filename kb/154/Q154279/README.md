---
layout: page
title: "Q154279: PRB: Visual SourceSafe Status Truncates Filenames to 20 Char"
permalink: kb/154/Q154279/
---

## Q154279: PRB: Visual SourceSafe Status Truncates Filenames to 20 Char

	Article: Q154279
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Visual SourceSafe Command line command "SS Status" to determine the
	checkout status of files only returns the first 20 characters of the filename.
	
	CAUSE
	=====
	
	The SS Status Command line returns information in a columnar format. Because of
	the columns for Filename, User name, Date/Time, and checkout directory, there is
	a limit of 20 characters for the filename. When working with files that have
	long filenames greater than 20 characters, the filenames are truncated at the
	20th character.
	
	RESOLUTION
	==========
	
	An alternative is to use the short filename mode that displays the long filename
	using MS-DOS 8.3 filename conventions such as SS Status -NS. Although the 16-bit
	version of the Visual SourceSafe Explorer allows the use of long file names, the
	16-bit Command line does not.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Be aware that Visual SourceSafe does not use the same method for converting long
	filenames as Windows 95 or Windows NT, so the converted Short filename as
	supplied by Visual SourceSafe may not match the filenames in the working
	directory exactly.
	
	Step-by-Step Example
	--------------------
	
	1. In a project ($/TEST), place a file with the name "New Text Document.txt,"
	  and check the file out.
	
	2. From the Visual SourceSafe MS-DOS directory Command line, issue the following
	  command:
	
	  "ss status $/TEST"
	
	3. The filename of the SS STATUS should be: NEW_TE~1.TXT.
	
	4. From the MS-DOS prompt, perform a directory (dir) of the working directory
	  (or the directory where the file was checked out). The resultant filename
	  should be "NEWTEX~1 TXT" (Win95 or WinNT).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
