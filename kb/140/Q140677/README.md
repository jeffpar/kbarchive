---
layout: page
title: "Q140677: FIX: Go Back Button in InfoView Viewer Window Is Disabled"
permalink: /kb/140/Q140677/
---

## Q140677: FIX: Go Back Button in InfoView Viewer Window Is Disabled

{% raw %}

	Article: Q140677
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC410fix kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the infoview viewer window, when an item is selected from the See Also
	drop-down list, the Go Back button on the toolbar of the window may be disabled
	after the new topic comes up.
	
	RESOLUTION
	==========
	
	To go back to the previous topic, you need to search for the topic again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	To reproduce this behavior, select the Project Workspace window, and press the
	F1 key to bring up help for the Project Workspace Window. In the viewer window,
	click the See Also button, and select a different topic in the drop- down list.
	Once help on that topic comes up, the Go Back button cannot be used to go back
	to the previous topic.
	
	You may also see this behavior in the regular help viewer window, but it does not
	happen very often.
	
	Additional query words: kbVC400bug 4.00 4.10 infoviewer alwaysupdate dskbsweep
	
	======================================================================
	Keywords          : kbide kbVC kbVC410fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
