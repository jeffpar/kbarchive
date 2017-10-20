---
layout: page
title: "Q140693: FIX: Error When Changing Data Type in Remote View"
permalink: /kb/140/Q140693/
---

## Q140693: FIX: Error When Changing Data Type in Remote View

{% raw %}

	Article: Q140693
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use DBSETPROP() to change the data type of a field in a remote view,
	you receive the following error after issuing the REQUERY() command:
	
	  Error: View definition has been changed.
	
	CAUSE
	=====
	
	Visual FoxPro 3.0 tests the local data dictionary of the old view and the
	requeried view and finds a change in the data contained in the column.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create and save a remote view of a table that contains a datetime field.
	
	2. In the Command window, type the following line of code, substituting the
	  appropriate names where indicated by the brackets (<>):
	
	     ? DBSETPROP( <'RemoteViewName.FieldName'>, 'Field', 'DataType', 'D' )
	
	3. Close the remote view and re-open it. Then run the view again and confirm
	  that it works as expected.
	
	4. In the Command window, type this code:
	
	     =REQUERY()
	
	  The following error appears:
	
	  Error: View definition has been changed.
	
	Additional query words: VFoxWin field type
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
