---
layout: page
title: "Q192860: PRB: Creating Join in Join Condition Dialog Box Creates Filter"
permalink: /kb/192/Q192860/
---

## Q192860: PRB: Creating Join in Join Condition Dialog Box Creates Filter

{% raw %}

	Article: Q192860
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
	
	When creating a remote view though the View Designer, if a join condition is
	specified in the Join Condition Dialog box, the join condition is specified as a
	filter rather than a join.
	
	RESOLUTION
	==========
	
	If you desire to use the Join syntax, you should use the Join tab to specify
	your join condition. You can also use the CREATE SQL VIEW command to create the
	remote view.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a remote view though the View Designer.
	
	2. Add two related tables, and note that the Join Condition dialog box is
	  displayed.
	
	3. Create a join in that dialog and close the dialog.
	
	4. Click the Join tab in the View Designer, and note that there is no join
	  specified there.
	
	5. Click the Filter tab in the View Designer. Note that there is a filter
	  entered that matches the join condition specified in the Join Condition
	  dialog box.
	
	Additional query words: kbDSupport KBDSE kbVFp600 kbDatabase KbDBFDBC kbDesigner
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
