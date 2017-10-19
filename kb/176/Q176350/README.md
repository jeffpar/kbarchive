---
layout: page
title: "Q176350: HOWTO: Open Visual SourceSafe to a Specific Database"
permalink: /kb/176/Q176350/
---

## Q176350: HOWTO: Open Visual SourceSafe to a Specific Database

	Article: Q176350
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default the Visual SourceSafe Explorer opens the last database that you used.
	This article demonstrates how to open a different database when you start the
	Visual SourceSafe Explorer by using an -S switch.
	
	MORE INFORMATION
	================
	
	By using the -S switch, you may direct the SSEXP to a different Srcsafe.ini
	file. The Srcsafe.ini should contain a pointer to a valid Visual SourceSafe 4.0a
	or 5.0 data directory. The command is as follows:
	
	  C:\VSS\WIN32\SSEXP.EXE -S\\SourceSafe\Servers\Training
	
	-or-
	
	  C:\VSS\WIN32\SSEXP.EXE -SF:\Programs\VSS
	
	By executing these commands, you may invoke an open dialog box that enables the
	user to verify the Srcsafe.ini selection. After confirming this selection, the
	Visual SourceSafe 4.0a or 5.0 database that Srcsafe.ini points to is opened. To
	bypass the login dialog box, you can add the -y switch ( -y<username,
	password>).
	
	Within Windows 95 or Windows NT you can create a shortcut whose Target URL (shown
	in the shortcut Properties dialog box) uses the command described above. By
	doing this, you can open the specified database by double- clicking the shortcut
	icon. If you have several Visual SourceSafe databases, you can create a shortcut
	for each one, making it easy to pick the database that you want to work on.
	
	In Visual SourceSafe version 6.0, you can create a shortcut to a specific project
	by choosing Create Shortcut from the File menu.
	
	REFERENCES
	==========
	
	Visual SourceSafe "User's Guide," version 5.0, page 181
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Issue type        : kbhowto
	
	=============================================================================
	
