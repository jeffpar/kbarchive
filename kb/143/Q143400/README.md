---
layout: page
title: "Q143400: PRB: Resetting Defaults May Fix Form Misbehavior in VFP"
permalink: /kb/143/Q143400/
---

## Q143400: PRB: Resetting Defaults May Fix Form Misbehavior in VFP

{% raw %}

	Article: Q143400
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form is run, either the form or controls on the form may exhibit
	unexpected or inexplicable behavior.
	
	
	CAUSE
	=====
	
	Some property settings in which the default value has been manually entered may
	cause erratic behavior in certain forms. The exact properties or combination of
	properties has not yet been determined.
	
	RESOLUTION
	==========
	
	To determine if this is the cause of unexplainable behavior, look for any
	properties having the word "Default" within parenthesis which also appears in
	bold. To correct this condition, right-click the bolded default property to
	bring up the property menu. Then choose Reset to Default.
	
	For more information about a specific instance of this problem, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q139188 BUG: Cannot Click a List Box on a Pageframe by Using the Mouse
	
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: revert undo VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
