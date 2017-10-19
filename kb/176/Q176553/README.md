---
layout: page
title: "Q176553: INFO: Database Architecture Changes in 4.0, 4.0a, and 5.0"
permalink: /kb/176/Q176553/
---

## Q176553: INFO: Database Architecture Changes in 4.0, 4.0a, and 5.0

	Article: Q176553
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbFAQ kbSsafe500FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual SourceSafe database architecture changed dramatically between versions
	3.x and 4.0. However, no architectural changes were made to the database log
	files between 4.x and 5.x.
	
	This means that a Visual SourceSafe 5.0 client (build 2218, 2219, or 2220) can be
	used on a 5.0 or 4.0 version database. Visual SourceSafe 4.0a (build 1309) can
	be used on a 5.0 or 4.0 version database as well. The only restriction is that
	4.0 clients (build 0811 or 0831) can only be used on 4.0 databases. The term
	"client" refers to the executables for the Visual SourceSafe Explorer and
	command line interfaces.
	
	MORE INFORMATION
	================
	
	The only change to files within the 5.0 database is the addition of a 16- byte
	(128 bit) unique identifier (GUID) to the um.dat file. However, this Guid is not
	added when the 5.0 version of DDCONV.exe is run on the 4.x database. It is only
	added if the SSARC or SSRESTOR (archive & restore utilities) are run on the
	database. This is to ensure that the database can be uniquely identified for
	archive & restore operations. This guarantees that Ssrestor.exe knows
	whether the archive it is restoring is being applied to the same or a different
	database than it was archived from.
	
	Restating the SUMMARY section: The 4.0 client (builds 0811 and 0831) can't read
	the um.dat file that contains a Guid. So they will not work with a 5.0 database.
	The 4.0a client (build 1309) and the 5.0 client (build 2218, 2219 and 2220) can
	read the um.dat file if it has a Guid or not, so these clients will work with
	all databases.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbFAQ kbSsafe500FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
