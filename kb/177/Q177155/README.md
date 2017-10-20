---
layout: page
title: "Q177155: PRB: &quot;Save Changes?&quot; Dialog Box Appears When No Changes Made"
permalink: /kb/177/Q177155/
---

## Q177155: PRB: &quot;Save Changes?&quot; Dialog Box Appears When No Changes Made

{% raw %}

	Article: Q177155
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox
	Last Modified: 14-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the ESC key to close a form that has a spinner or a combo box in a
	PageFrame, the Discard Changes dialog box appears although changes have not been
	made to the form. If you use any other way to close the form, the "Do you want
	to save changes?" dialog box appears.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Some objects that you have on a form cause the "Do you want to save changes?"
	dialog box to appear even though changes have not been made to the form. NOTE:
	This behavior may occur with other controls.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form in the Form Designer.
	
	2. Add a PageFrame to the form.
	
	3. Edit the PageFrame and add either a spinner or a combo box to the PageFrame.
	
	4. Close and save the form.
	
	5. Open the form again and without making any changes try to close the form by
	  pressing the ESC key or selecting Close from the File menu.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
