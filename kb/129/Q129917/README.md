---
layout: page
title: "Q129917: How to Determine Which Tables Exist in a DBC"
permalink: /kb/129/Q129917/
---

## Q129917: How to Determine Which Tables Exist in a DBC

	Article: Q129917
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro for Windows 3.0, you can use the ADBOBJECTS() function to find
	out which tables exist in a database container.
	
	MORE INFORMATION
	================
	
	The syntax for the ADBOBJECTS() function is as follows:
	
	     ADBOBJECTS(arrayname,csetting)
	
	The arrayname parameter specifies the name of the array in which the names are
	placed. If the array you specify doesn't exist, Visual FoxPro automatically
	creates the array. If the array exists and isn't large enough to contain all the
	names, Visual FoxPro automatically increases the size of the array to
	accommodate the names. If the array is larger than necessary, Visual FoxPro
	truncates the array. If the array exists and ADBOBJECTS( ) returns zero (0)
	because no names are found, the array remains unchanged. If the array doesn't
	exist and ADBOBJECTS() returns zero (0), the array isn't created.
	
	The cSetting parameter specifies which names to place in the memory variable
	array. The following table shows the allowable values for cSetting and the
	corresponding names placed in the array:
	
	  cSetting      Names
	  ---------------------------
	  CONNECTION    Connection names
	  RELATION      Table relationships
	  TABLE         Table names
	  VIEW          View names
	
	The following example code demonstrates how to determine which tables exist in a
	DBC:
	
	     OPEN DATABASE C:\VFP\SAMPLES\DATA\testdata.dbc
	     =ADBOBJECTS(tablearry,"TABLE")
	     DISPLAY MEMORY LIKE tablearry
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
