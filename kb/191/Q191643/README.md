---
layout: page
title: "Q191643: BUG: Insert Field Into Table In Designer Doesn't Highlight Name"
permalink: /kb/191/Q191643/
---

## Q191643: BUG: Insert Field Into Table In Designer Doesn't Highlight Name

{% raw %}

	Article: Q191643
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a field in an existing table in the Table Designer, the field
	name is not highlighted for overwriting.
	
	RESOLUTION
	==========
	
	Once the NewFld is inserted to the field column in the table design, pressing
	CTRL+A selects the entire entry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code in the Command window:
	
	        CREATE TABLE test1 (fld1 c(10), fld2 c(25))
	        MODIFY STRUCTURE
	
	2. Using the Insert button, insert a new field.
	
	Notice that the field name 'NewFld' is not selected for overwrite.
	
	Additional query words: kbVFp600bug kbDesigner
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
