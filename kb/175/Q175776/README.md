---
layout: page
title: "Q175776: PRB: Problem with VisData Print Structure and Indexes"
permalink: kb/175/Q175776/
---

## Q175776: PRB: Problem with VisData Print Structure and Indexes

	Article: Q175776
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is an issue with VisData and printing the structure of a table. It seems
	that if there are multiple indexes for a table, the same index name is printed
	multiple times.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The index name that is selected in the Table Structure dialog will be printed
	the number of times that there are index names. For example, if there are three
	index names, and the index named "customer" is highlighted, "customer" will be
	printed three times.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the Add-Ins menu, select Visual Data Manager.
	
	2. Open the Biblio.MDB file, and select the Publishers table.
	
	3. Right-click and choose Design, which will open the Table Structure dialog.
	
	4. Add Indexes so that there are more than one.
	
	5. Select an Index from the list and click on Print Structure. Note that the
	  Index name selected will be printed multiple times.
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdse kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
