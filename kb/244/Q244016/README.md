---
layout: page
title: "Q244016: HOWTO: Back Up a Visual SourceSafe Database"
permalink: /kb/244/Q244016/
---

## Q244016: HOWTO: Back Up a Visual SourceSafe Database

{% raw %}

	Article: Q244016
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSSafe600 kbFAQ kbDSupport kbGrpDSSSafe kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to back up a Visual SourceSafe database.
	
	MORE INFORMATION
	================
	
	1. Make sure that no one is using the database and that Analyze will not begin
	  to run while you are backing up the database.
	
	2. Copy the following folders:
	
	  
	
	  \DATA
	  \Temp
	  \USERS
	
	3. Copy the User.txt and Srcsafe.ini files.
	
	When you follow this procedure, you can do a full restore of the database by
	replacing the existing Users, Temp and Data folders as well as the Users.txt and
	Srcsafe.ini files with the copied versions.
	
	You can also use this procedure to move the database to another location by
	placing the copied files into a new folder. To open the database, on the File
	menu in the Visual SourceSafe Explorer, click Open SourceSafe Database to browse
	to the new location.
	
	Additional query words: move
	
	======================================================================
	Keywords          : kbSSafe600 kbFAQ kbDSupport kbGrpDSSSafe kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
