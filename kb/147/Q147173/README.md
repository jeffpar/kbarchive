---
layout: page
title: "Q147173: PRB: Visual C++ Seems to Hang - Updating Source Control Status"
permalink: kb/147/Q147173/
---

## Q147173: PRB: Visual C++ Seems to Hang - Updating Source Control Status

	Article: Q147173
	Product(s): Microsoft SourceSafe
	Version(s): 4.00 4.10 4.20 | 4.00 4.10 4.20
	Operating System(s): 
	Keyword(s): kbVC
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 4.0 
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While running Visual C++, you notice that the system seems to be hung and the
	message "Updating source code control status" appears in the status bar.
	
	CAUSE
	=====
	
	Visual C++ is querying Visual SourceSafe to check the status of files so that
	Visual C++ can keep its icons up to date. It is this querying that takes so much
	time and makes it seem like Visual C++ has hung. By default, Visual C++ is
	installed so that this functionality is activated; it checks the status of ten
	files each time it queries.
	
	RESOLUTION
	==========
	
	You can turn off the functionality of updating the status of the files, or you
	can reduce the number of files that Visual C++ checks. Both solutions require
	changing the Registry. Please back up the registry before attempting either of
	these.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT or Windows 95 to correct
	them. Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	Step-by-Step Procedure
	----------------------
	
	1. Back up the Registry
	
	2. In Windows NT, start the Registry Editor (Regedt32.exe), and go to the
	  following subkey:
	
	     HKEY_Current_User on Local
	        Machine\Software\Microsoft\Developer\Source Control
	
	  -or-
	
	  In Windows 95, start the Registry Editor (Regedit.exe), and go to the
	  following subkey:
	
	     HKEY_Current_User\Software\Microsoft\Developer\Source Control
	
	3. If you want to turn off the updating of Visual C++ icons completely,
	  double-click AllowStatusUpdates, and change it from the default of 1(On) to
	  0(Off). This will keep Visual C++ from querying Visual SourceSafe.
	
	  -or-
	
	  If you want to reduce the number of files that it updates, double-click
	  StatusThreshold, and change it from the default of 10 to 1. This will reduce
	  the number of files it checks each time Visual C++ queries Visual SourceSafe.
	
	4. Exit the Registry Editor.
	
	5. Restart Visual C++ to allow it to read the new values from the registry.
	
	NOTE: Reducing the number of files Visual C++ queries will not reduce the time
	between each call to Visual SourceSafe. It will just reduce the amount of time
	the system seems to hang each time it queries.
	
	
	Additional query words: 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbVC 
	Technology        : kbVCsearch kbVC400 kbSSafeSearch kbAudDeveloper kbVC410 kbVC420 kbSSafe400
	Version           : 4.00 4.10 4.20 | 4.00 4.10 4.20
	Issue type        : kbprb
	
	=============================================================================
	
