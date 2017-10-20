---
layout: page
title: "Q221118: HOWTO: Upgrade a VSS5 Database to VSS6 Using Archive Utility"
permalink: /kb/221/Q221118/
---

## Q221118: HOWTO: Upgrade a VSS5 Database to VSS6 Using Archive Utility

{% raw %}

	Article: Q221118
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600 kbSSExplorer kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes an alternative to using DDUPD.exe when updating a
	database from Microsoft Visual SourceSafe (VSS) 5.0 to VSS 6.0 format. The
	process involves archiving a VSS 5.0 formatted database and restoring it to a
	new VSS 6.0 formatted database.
	
	MORE INFORMATION
	================
	
	A new database can be created either using the VSS 6.0 CD and performing a
	server install or from the Visual SourceSafe 6.0 Administrator by selecting from
	the Tools menu Create Database. The second method creates a basic install
	including only the Users.txt and Srcsafe.ini files along with the data, temp,
	and users directories.
	
	In the VSS6 Administrator tool you can select a database from the Users menu and
	then select Open SourceSafe Database. You should start by opening the VSS 5.0
	database that you intend to upgrade. (VSS6 Explorer and VSS6 Administrator tools
	can read VSS5 formatted databases.) You should then select the menu item from
	the Archive menu and then select Archive Projects. This takes you through a
	three-step process.
	
	1. The root project should be selected. Click OK and then Next.
	
	2. The Save data to a file option should be selected by default. Type a name for
	  the archive file *.ssa in the space provided and click Next.
	
	3. The Archive all data option should be selected by default, click Finish.
	
	You should then select the new VSS6 database and select the menu item from the
	Archive and then select Restore Projects. Again, this starts a three-step
	process.
	
	1. Select the name of the archive file - *.ssa. You may get the following
	  message:
	
	  "Destination database is not the same as the original. Some links may not be
	  restored."
	
	  Click OK and then click Next.
	
	2. Select Display subprojects checkbox and unselect $/. Click Next.
	
	3. Click Finish.
	
	This type of conversion process requires you to re-add all user and users rights
	since the new database will only have the admin and guest accounts setup.
	
	NOTE: Sometimes it is necessary to archive the database in parts. If you decide
	archive in parts you will lose any shares and branches between files that are in
	projects archived separately.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q173387 PRB: Restoring an Archive of an Entire Database
	
	  Q172157 PRB: Do Not Use SourceSafe When Running SSARC or SSRESTOR
	
	  Q186361 INFO: ERR ...Some links may not be restored
	
	  Q220876 HOWTO: Restore an Entire Database Archive with Restore Wizard
	
	  Q238155 Create a New Database in Visual SourceSafe
	
	Additional query words: archive restore ssarc ssrestor
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 kbSSExplorer kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
