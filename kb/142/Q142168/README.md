---
layout: page
title: "Q142168: PRB: Connectivity Error: Illegal reference in query"
permalink: /kb/142/Q142168/
---

## Q142168: PRB: Connectivity Error: Illegal reference in query

	Article: Q142168
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update data in a remote view, the following error may occur:
	
	  Connectivity Error [<<driver specific information>>] Illegal
	  reference in query
	
	CAUSE
	=====
	
	In the Update Criteria tab of the view designer, the "SQL WHERE clause includes"
	option is set to "Key and Modified Fields," and one of the modified fields is a
	memo field. A memo field cannot be used in a SQL WHERE clause.
	
	RESOLUTION
	==========
	
	Change the "SQL WHERE clause includes" option in the Update Criteria tab of the
	view designer to "Key Fields Only" or "Key and Timestamp."
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a remote view based on a table that contains a memo field.
	
	2. In the Fields tab, click the Add All button.
	
	3. In the Update Criteria tab, specify a key field, click the Update All button,
	  select the Send SQL Updates check box, and set the SQL WHERE clause includes
	  option to "Key and Modified Fields."
	
	4. Save the view as View_Test.
	
	5. Type the following commands in the Command window:
	
	     USE View_Test
	     BROWSE
	
	6. Make some changes to the memo field data.
	
	7. Type the following command in the Command window:
	
	     USE
	
	The Illegal reference in query error occurs at this point.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
