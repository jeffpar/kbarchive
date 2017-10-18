---
layout: page
title: "Q200454: BUG: Visual Basic Does Not Receive Some OSP Notifications"
permalink: kb/200/Q200454/
---

## Q200454: BUG: Visual Basic Does Not Receive Some OSP Notifications

	Article: Q200454
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDataBinding kbMDAC kbOSP kbGrpDSVBDB kbMDAC260
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Errors may be reported by Visual Basic controls, such as the DataGrid, if schema
	changes occur in the underlying data source where that data source is an OLE DB
	Simple Provider (OSP). A schema change is not a change to the data provided, but
	a change to the structure of that data. For example, adding or removing a column
	from a table constitutes a schema change.
	
	CAUSE
	=====
	
	Visual Basic controls, such as the DataGrid, do not receive the OLE DB
	notifications required to process schema changes.
	
	RESOLUTION
	==========
	
	There are no known workarounds at this time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: kbDSupport kbdse
	
	======================================================================
	Keywords          : kbDataBinding kbMDAC kbOSP kbGrpDSVBDB kbMDAC260 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
