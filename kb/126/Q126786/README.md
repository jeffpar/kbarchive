---
layout: page
title: "Q126786: HOWTO: Remove or Change a Label"
permalink: /kb/126/Q126786/
---

## Q126786: HOWTO: Remove or Change a Label

{% raw %}

	Article: Q126786
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can remove or change a project or file label using the GUI interface or the
	command line product. To remove a label, use the following steps:
	
	GUI Interface
	-------------
	
	1. Select the file or project from which you want to remove the label.
	
	2. Click the History button on the toolbar, choose the Info.History menu item
	  with SourceSafe 3.1 or the Tools.Show History menu item with Visual
	  SourceSafe 4.0 or later, or press CTRL+H to bring up the history dialog or
	  output window.
	
	3. If the History dialog box appears, select the desired options and click OK.
	
	4. Select the labeled history item that you want to remove or change.
	
	5. Click the Details button.
	
	6. In the Label: text box, completely delete current label characters to remove
	  the label. To change the label, change the contents to the desired new label.
	
	7. Click Close.
	
	Command Line
	------------
	
	1. Execute the Label command with the desired label options. For example:
	
	  To change a label:
	
	        ss Label $/test "-vl old label" "-l new label"
	
	  To remove a label:
	
	        ss label $/test "-vl old label" "-l "
	
	2. You will get a message:
	
	  "This version of <SourceSafe object name> already has a label. Do you
	  want to overwrite with new label? (Y/N)."
	
	  Type y to confirm the label change.
	
	Additional query words: 3.10 update 4.00 5.00
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
