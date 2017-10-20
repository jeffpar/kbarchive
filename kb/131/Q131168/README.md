---
layout: page
title: "Q131168: PRB: Length Not Updating Properly in Table Structure Dialog"
permalink: /kb/131/Q131168/
---

## Q131168: PRB: Length Not Updating Properly in Table Structure Dialog

{% raw %}

	Article: Q131168
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Table Structure dialog box brought up by the MODIFY STRUCTURE command,
	the length information displayed at the bottom of the dialog box does not seem
	correct. It adds one to the sum of the length of each field in the table.
	
	CAUSE
	=====
	
	In the status bar of the Table Structure dialog box, the length information
	displays the length of each record. It sums the length of each field, and adds
	an additional byte, which flags whether or not the record is deleted. For
	example, if the table has two fields, field1 C(20) and field2 C(20), the length
	of the record is 20+20+1=41.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a New table. Add:
	
	  Field1                 C    10
	  Field2                 C    20
	
	2. Verify the length displayed in the status bar of the table structure dialog
	  box.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
