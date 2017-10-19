---
layout: page
title: "Q176353: FIX: SourceSafe OLE Automation Does Not Support Label Comments"
permalink: /kb/176/Q176353/
---

## Q176353: FIX: SourceSafe OLE Automation Does Not Support Label Comments

	Article: Q176353
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600fix kbFAQ kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual SourceSafe OLE Automation interface does not support label comments.
	The Visual SourceSafe OLE Automation model exposes the ability to set, retrieve
	or modify the standard comment information, but it does not expose the ability
	to retrieve label comment information. A label comment is a special comment that
	is only available from within the label details dialog box. It is not possible
	to set or retrieve these labels from within the OLE Automation interface.
	
	CAUSE
	=====
	
	This functionality was not exposed in this version of the OLE Automation
	interface.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected Visual SourceSafe version
	6.0 for Windows.
	
	MORE INFORMATION
	================
	
	At this time the only possible way to work around this behavior is to use the
	command line interface.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600fix kbFAQ kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
