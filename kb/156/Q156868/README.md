---
layout: page
title: "Q156868: FIX: Click Event Triggered If &quot;S&quot; Is Used as Hot Key"
permalink: /kb/156/Q156868/
---

## Q156868: FIX: Click Event Triggered If &quot;S&quot; Is Used as Hot Key

{% raw %}

	Article: Q156868
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbui kbvfp kbvfp500aFIXkbbuglist kbfixlist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0, if "S" is used as a hot key for a CommandButton control,
	pressing the Delete key while a Checkbox control is selected triggers the click
	event of the CommandButton.
	
	STATUS
	======
	
	This problem has been fixed in Visual FoxPro 5.0a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add a CheckBox control and a commandbutton with Caption = "\<Save", in the
	  click event of the commandbutton, and put in the following code:
	
	        THISFORM.Release
	
	3. Save and run the form.
	
	4. Set the focus to the check box.
	
	5. Press the Delete key.
	
	The \<Save command button is selected, and the form closes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui kbvfp kbvfp500aFIX kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
