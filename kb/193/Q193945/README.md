---
layout: page
title: "Q193945: PRB: Warning Displays Saving Class With SET SAFETY OFF"
permalink: /kb/193/Q193945/
---

## Q193945: PRB: Warning Displays Saving Class With SET SAFETY OFF

{% raw %}

	Article: Q193945
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a class and give it a filename of a class that already exists, the
	following error occurs even if SET SAFETY is OFF:
	
	  A class with that name already exists, overwrite it?
	
	Visual FoxPro provides you the ability to suppress an overwrite screen on forms,
	reports, and etc. However, there is not a way to suppress this message when
	overwriting a class.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Issue the following commands in the Command window:
	
	        SET SAFETY OFF
	        CREATE CLASS mycheck OF myclass AS checkbox
	
	2. Close and save the Class Designer dialog box.
	
	3. Issue the CREATE CLASS command shown in Step 1 in the Command window again.
	  Note that a message box appears asking to overwrite the class. The SET SAFETY
	  command does not turn off the message box when saving a class.
	
	Additional query words: kbVFp300 kbVFp500 kbVFp600 kbDesigner kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
