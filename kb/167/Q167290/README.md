---
layout: page
title: "Q167290: HOWTO: Enable Visual SourceSafe Locking"
permalink: /kb/167/Q167290/
---

## Q167290: HOWTO: Enable Visual SourceSafe Locking

	Article: Q167290
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Normally, Visual SourceSafe allows the Operating System to handle the file
	locking. However, if there is a lot of network traffic or high latency, file
	errors can occur. You can also use the Visual SourceSafe application to handle
	file locking. When Visual SourceSafe locking is enabled, Visual SourceSafe
	handles all of the file locking for itself.
	
	MORE INFORMATION
	================
	
	You can use the Visual SourceSafe program called TESTLOCK to check to see if you
	need to enable Visual SourceSafe locking. TESTLOCK is located in the Dos and
	Win32 directories under the Visual SourceSafe directory on the server.
	
	After you start TESTLOCK on multiple computers, it will tell you whether it is
	safe to use native locking. To run TESTLOCK you must give it a parameter of a
	shared directory on a server or some other computer, however, all the machines
	that will run TESTLOCK must have full access to the shared location. The command
	might look like the following:
	
	  TESTLOCK F:\VSS\TEMP
	
	If TESTLOCK reports that you must enable Visual SourceSafe locking, you may do so
	by adding the following to your Visual SourceSafe database's Srcsafe.ini file:
	
	  Lock_Mode=Lockfile
	
	Make sure that there is a LOCKS directory in the DATA subdirectory and have all
	the Visual SourceSafe users restart Visual SourceSafe after you make the
	change.
	
	It is recommended that if you are using Macintosh and Unix clients and/or servers
	that you enable Visual SourceSafe locking.
	
	REFERENCES
	==========
	
	For more information about TESTLOCK please refer to page 178 of the Visual
	SourceSafe 4.0 manual, page 221 of the Visual SourceSafe 5.0 manual, or search
	for TESTLOCK.EXE in the online documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
