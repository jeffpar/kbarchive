---
layout: page
title: "Q190063: PRB: Form Wizard &quot;Scrolling Grid&quot; Option Does Not Add Pages"
permalink: /kb/190/Q190063/
---

## Q190063: PRB: Form Wizard &quot;Scrolling Grid&quot; Option Does Not Add Pages

{% raw %}

	Article: Q190063
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	All of the selected fields are not available on a form that was created using
	the Form Wizard with the "Scrolling Grid" option selected. The following dialog
	box appears:
	
	  The form wizard could not fit all the fields and depending on the style
	  selected, you might try one of the following:
	
	  1. Click the Add Pages checkbox.
	
	  2. Remove some of your selected fields.
	
	  3. Increase the Maximum Design Area setting in the Options dialog.
	
	In this particular instance, option 1 does not work.
	
	RESOLUTION
	==========
	
	The "Scrolling Grid" style does not support pages (option 1). Therefore, you
	must select one of the other styles or options.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the system menu, select the Tools menu pad and the Wizards menu bar.
	  Click Form Wizard.
	
	2. Using the Customer table, select all of the fields on Step 1.
	
	3. On Step 2, select Custom, select Scrolling Grid as the Button Type, and click
	  Finish.
	
	4. Check the "Add pages for fields that do not fit" option, and click Preview.
	
	RESULT: A dialog box appears stating that "The form wizard could not fit all the
	fields...". Click OK.
	
	Additional query words: kbVFp600 kbWizard
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
