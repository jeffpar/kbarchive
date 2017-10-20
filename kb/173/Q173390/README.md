---
layout: page
title: "Q173390: DOC: Status Property of RdoResultset/RdoColumn is Read-Only"
permalink: /kb/173/Q173390/
---

## Q173390: DOC: Status Property of RdoResultset/RdoColumn is Read-Only

{% raw %}

	Article: Q173390
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 27-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Contrary to what the Visual Basic documentation states (including Books Online
	and Help files), the Status property of the rdoResultset/rdoColumn object cannot
	be modified.
	
	MORE INFORMATION
	================
	
	When using the optimistic batch update cursor library, the Status property
	indicates the status of the current row for an rdoResultset or rdoColumn
	object.
	
	Prior to the BatchUpdate operation, its value determines if and how a row will
	update in the next optimistic batch update. Once BatchUpdate is complete, its
	value can be re-examined to determine if the update was successful.
	
	If an attempt is made to set this property at run-time, one or both of the
	following error will occur:
	
	  Run-time error '-2147467263 (80004001)': Object Collection: Couldn't find
	  item indicated by text.
	
	  -or-
	
	  Run-time error '445': Object doesn't support this action.
	
	NOTE: The above errors are not consistent with run-time errors caused by setting
	read-only properties.
	
	Additional query words: kbVBp500 kbVBp kbWinOS98 kbDSupport kbdse kbVBp600 kbdocerr
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
