---
layout: page
title: "Q153285: INFO: Will VSS 5.0 Be Able to Read a VSS 6.0 Database?"
permalink: kb/153/Q153285/
---

## Q153285: INFO: Will VSS 5.0 Be Able to Read a VSS 6.0 Database?

	Article: Q153285
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbddconv kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbSsafe600FAQkbfaq
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Q. Will Visual SourceSafe 5.0 be able to read a Visual SourceSafe 6.0 database?
	
	A. Visual SourceSafe 5.0 and 4.0a clients can read a Visual SourceSafe 6.0
	database if the Visual SourceSafe 6.0 database has not been upgraded to the new
	database format. Initially, when you create a new Visual SourceSafe 6.0 database
	or upgrade from a previous version of the database, you are asked if you would
	like to upgrade to the new database format. Click No if you want your Visual
	SourceSafe 5.0 and 4.0a clients to be able to read a Visual SourceSafe 6.0
	database. If your clients receive an "Incompatible database version" error
	message after upgrading to Visual SourceSafe 6.0, the database format might have
	been inadvertently upgraded. There is a command line utility named Ddupd.exe,
	located in the win32 directory of the Visual SourceSafe server. This utility has
	an -undo switch that converts the database from a 6.0 format to a 4.0a or 5.0
	format. The syntax is:
	
	  ddupd.exe <path to data directory> -undo
	
	Additional query words: kb FAQ
	
	======================================================================
	Keywords          : kbddconv kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbSsafe600FAQ kbfaq
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0a,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
