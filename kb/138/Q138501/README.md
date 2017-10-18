---
layout: page
title: "Q138501: PRB: Modifying a Remote View Results in a Syntax Error"
permalink: kb/138/Q138501/
---

## Q138501: PRB: Modifying a Remote View Results in a Syntax Error

	Article: Q138501
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a remote view to gain access to a remote data source through
	ODBC, any attempt to modify the remote view results in a Syntax Error.
	
	CAUSE
	=====
	
	One or more of the field names in the tables included in the remote view
	contains a space or other special character, such as one of the following:
	
	  ~ !
	
	RESOLUTION
	==========
	
	Do not add tables that have spaces in field names to a remote view. Use the
	underscore (_) character in place of a space. Alternatively, use the CREATE SQL
	VIEW command to modify the remote view. Follow the same naming conventions used
	for table and field names.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual FoxPro does not support tables that have field names that contain spaces
	whether they are local or remote tables. The only reason Visual FoxPro sometimes
	works with spaces in field names is because of the SQL parsing mechanism used.
	
	This behavior depends on the ODBC driver being used to gain access to the remote
	data. If you experience these errors when attempting to modify a remote view,
	ensure that none of the field names in the remote view contains a space.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbprb
	
	=============================================================================
	
