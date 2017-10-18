---
layout: page
title: "Q135117: PRB: Unable to Modify Tables in Database Flagged as Read-only"
permalink: kb/135/Q135117/
---

## Q135117: PRB: Unable to Modify Tables in Database Flagged as Read-only

	Article: Q135117
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The tables in a database cannot be modified. Stored Procedures cannot be edited.
	Referential integrity cannot be accessed. Tables cannot be added or removed.
	Table indexes cannot be added or modified. In parentheses next to the name of
	the database it says "Read Only."
	
	CAUSE
	=====
	
	The database has been opened as SHARED not as EXCLUSIVE.
	
	RESOLUTION
	==========
	
	Use either of the following resolutions:
	
	- Use the CLOSE ALL command followed by SET EXCLUSIVE ON command. Then re-open
	  the database.
	
	-or-
	
	- Close the database. Then on the Tools menu, click Options. Click the Data
	  tab, and select the Open Exclusive check box. Then re-open the database.
	
	STATUS
	======
	
	This behavior is by design. The Help file information for MODIFY DATABASE states
	that a database must be opened exclusively before it can be modified. To open a
	database for exclusive use, include EXCLUSIVE in the OPEN DATABASE command, or
	select the Open Exclusive check box in the Data tab of the Options dialog box.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the Tools menu, click Options. Click the Data tab, and clear the Open
	  Exclusive check box.
	
	2. Open the Tastrade database in the Samples\Data directory.
	
	3. Notice that it says "Read Only" next to the name of the database. Also note
	  that most choices under the Database menu item are grayed out (unavailable).
	  If click a table using the right mouse button, you will also see that the
	  Delete and Modify choices are grayed out (unavailable) as well.
	
	Additional query words: 3.00 VFoxWin dbc environment
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
