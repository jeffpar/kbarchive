---
layout: page
title: "Q157468: HOWTO: Use CompareMemo and Update Memo Fields"
permalink: /kb/157/Q157468/
---

## Q157468: HOWTO: Use CompareMemo and Update Memo Fields

	Article: Q157468
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp500 kbvfp600 KbDBFDBC
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CompareMemo is a new property added to the CursorSetProp command in Visual
	FoxPro 5.0. CursorSetProp specifies property settings for a Visual FoxPro table
	or cursor. The new CompareMemo property determines how conflicts are detected.
	There have not been any other changes from Visual FoxPro 3.0 in the manner in
	which memo fields are updated.
	
	MORE INFORMATION
	================
	
	The new CompareMemo property determines how conflicts are detected during an
	update. With CompareMemo set to .T. (the default), memo fields are included in
	the WHERE clause for updates (the conflict detection behavior is the same as in
	Visual FoxPro 3.0). When CompareMemo is set to .F., memo fields are not included
	in the WHERE clause for updates and, therefore, are not checked for conflict
	even though the WhereType is DB_KEYANDUPDATABLE or DB_KEYANDMODIFIED.
	
	Additionally, General fields are not included in the WHERE clause under any
	circumstance in Visual FoxPro 5.0 because many servers do not support comparison
	of long type columns. Conflict detection on fields of all other types remains
	the same as in Visual FoxPro 3.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp500 kbvfp600 KbDBFDBC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
