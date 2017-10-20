---
layout: page
title: "Q141525: PRB: DataSessionID Property Does Not Appear on Property Sheet"
permalink: /kb/141/Q141525/
---

## Q141525: PRB: DataSessionID Property Does Not Appear on Property Sheet

{% raw %}

	Article: Q141525
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	According to the Help file, the DataSessionID Property is read-only at design
	time and read-write at run time. The DataSessionID Property can be accessed at
	run time, but it does not appear on the Property Sheet at design time.
	
	
	WORKAROUND
	==========
	
	No workaround is necessary. There is no loss of functionality associated with
	this because the intended behavior of the DataSessionID Property is to be
	accessible at run time and read-only at design time.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For more information on the DataSessionID Property, refer to the "DataSessionID
	Property" topic in Help file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and note that the DataSessionID Property is not listed.
	
	2. Save and close the form. Then use the DO FORM command to run it.
	
	3. With the form running, on the Tools menu, click Debug Window, and in the left
	  side of the Debug window, type:
	
	     _SCREEN.ACTIVEFORM.DATASESSIONID
	
	4. Note that a value is returned.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
