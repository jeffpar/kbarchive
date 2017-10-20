---
layout: page
title: "Q220876: HOWTO: Restore an Entire Database Archive with Restore Wizard"
permalink: /kb/220/Q220876/
---

## Q220876: HOWTO: Restore an Entire Database Archive with Restore Wizard

{% raw %}

	Article: Q220876
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbSSafe600 kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After archiving an entire database, you can use the Restore Wizard to restore
	the database. The Restore Wizard is available from the Visual SourceSafe
	Administrator. From the Archive menu, click Restore Projects for the product
	version listed above.
	
	NOTE: This article assumes that you already know how to archive a database.
	
	MORE INFORMATION
	================
	
	1. Archive an entire database either by using the Archive Wizard or by using the
	  SSARC command.
	
	2. Create a new database using the Visual SourceSafe Administrator. From the
	  Tools menu, click Create Database.
	
	3. Open the newly created database by clicking the Users menu, and selecting
	  Open SourceSafe Database. Click the Browse button to find the Srcsafe.ini
	  file.
	
	4. Once the new database appears in the list of available databases, make sure
	  the database name and path are selected and click Open. You may get the
	  following warning after clicking Open:
	
	  The Admin user currently has no SourceSafe password. Therefore, any user can
	  run the Administrator's program. To secure this program, give the Admin user
	  a password.
	
	  Click OK.
	
	5. From the Archive menu, click Restore Projects.
	
	6. In Step 1 of the Restore Wizard, browse for the archive file (.ssa) created
	  in Step 1 of this article. Click Next. You many get the following warning
	  after clicking Next:
	
	  Destination database is not the same as the original. Some links may not be
	  restored.
	
	  Click OK. This dialog box will appear if you are restoring to a different
	  database than you archived from.
	
	7. In Step 2 of the Restore Wizard, select the root project ($/) and select the
	  "Display subprojects" check box.
	
	8. Deselect the root project by holding down the CTRL key and clicking on the $/
	  folder.
	
	  NOTE: If the root project remains selected, you will see the problem described
	  in the Knowledge Base article Q173387 (see REFERENCES section below for more
	  information). Click Next.
	
	9. In Step 3 of the Restore Wizard, select "Restore to the project the item was
	  archived from". Click Finish.
	
	REFERENCES
	==========
	
	For more information, see the following articles in the Microsoft Knowledge
	Base:
	
	  Q173387 PRB: Restoring an Archive of an Entire Database
	
	  Q172157 PRB: Do Not Use SourceSafe When Running SSARC or SSRESTOR
	
	  Q186361 INFO: ERR "...Some links may not be restored"
	
	Additional query words: restore wizard
	
	======================================================================
	Keywords          : kbSSafe600 kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
