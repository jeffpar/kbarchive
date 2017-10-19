---
layout: page
title: "Q159278: PRB: Can Log on to a Locked Visual SourceSafe Database"
permalink: /kb/159/Q159278/
---

## Q159278: PRB: Can Log on to a Locked Visual SourceSafe Database

	Article: Q159278
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Admin utility that ships with Visual SourceSafe version 5.0 allows the
	Visual SourceSafe administrator to "lock" a database. In theory, when a database
	is locked, no user can log on to the database. However, because the database
	format between version 4.0a and 5.0 was not changed and the database locking
	feature is new to version 5.0, users of Visual SourceSafe Explorer 4.0a can log
	on to a locked 5.0 database.
	
	CAUSE
	=====
	
	Database locking is a new feature in version 5.0, and the Visual SourceSafe
	Explorer version 4.0a does not check to see if the database is locked.
	
	RESOLUTION
	==========
	
	Upgrade all Visual SourceSafe installations to version 5.0 or above.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Locate a system that has Visual SourceSafe versions 4.0a and 5.0 installed.
	
	2. Launch the Visual SourceSafe 5.0 Admin utility, and click Lock SourceSafe
	  Database on the Tools menu.
	
	3. Select the "Lock all users out of Visual SourceSafe" check box, and then
	  click Close.
	
	4. Close the Admin utility and open the Visual SourceSafe Explorer 5.0.
	
	  NOTE: The following message appears:
	
	  The SourceSafe Database has been locked by the Administrator
	
	5. Click OK, and then close the Login dialog box.
	
	6. Open the Srcsafe.ini file for the Visual SourceSafe version 4.0a installation
	  and change the DATA_PATH entry so that it points to the data directory of the
	  Visual SourceSafe 5.0 installation. Save the change, and close the
	  Srcsafe.ini file.
	
	7. Open Visual SourceSafe Explorer 4.0a. Although the database is locked by the
	  administrator, you can log on to the database.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
