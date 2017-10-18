---
layout: page
title: "Q136186: DOC: Incorrect Description of Array Created by ADBOBJECTS()"
permalink: kb/136/Q136186/
---

## Q136186: DOC: Incorrect Description of Array Created by ADBOBJECTS()

	Article: Q136186
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro Help file gives the following incorrect information for
	ADBOBJECTS():
	
	  A two-dimensional array is created when you specify RELATION for cSetting.
	  Each row in the two-dimensional array corresponds to a relationship in the
	  database. The first column in an array row contains the name of the parent
	  table, and the second column in an array row contains the name of the child
	  table. The third column contains the name of the index tag for the parent
	  table and the fourth column contains the name of the index tag of the child
	  table.
	
	This documentation error has been fixed in Visual FoxPro 5.0 and 3.0b for
	Windows.
	
	MORE INFORMATION
	================
	
	Actually, the child table's information is displayed in the columns before the
	parent table's information is displayed. Therefore, the information in the
	ADBOBJECTS() topic should say:
	
	  A two-dimensional array is created when you specify RELATION for cSetting.
	  Each row in the two-dimensional array corresponds to a relationship in the
	  database. The first column in an array row contains the name of the child
	  table, and the second column in an array row contains the name of the parent
	  table. The third column contains the name of the index tag for the child
	  table and the fourth column contians the name of the index tag of the parent
	  table.
	
	Additional query words: docerr VFoxWin 3.00b 5.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
