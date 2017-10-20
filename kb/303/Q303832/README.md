---
layout: page
title: "Q303832: BUG: cPath Parameter Not Passed to DBC_Before/AfterDropOffline"
permalink: /kb/303/Q303832/
---

## Q303832: BUG: cPath Parameter Not Passed to DBC_Before/AfterDropOffline

{% raw %}

	Article: Q303832
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbOOP kbvfp KbDBFDBC kbGrpDSFox kbDSupport kbvfp700
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Only one parameter (cViewName) is sent to the DBC_BeforeDropOffline and
	DBC_AfterDropOffline events although the Help topics for these events describe
	the second parameter (cpath).
	
	CAUSE
	=====
	
	The documentation for the DBC_BeforeDropOffline and DBC_AfterDropOffline events
	incorrectly states that two parameters are passed to these two events. Actually,
	only the first parameter is passed to the event. Also, note that the prototype
	for these functions created by the Database Designer Properties dialog box is
	incorrect. The prototype created by the Database Designer has a LPARAMETERS
	statement that includes the second cPath parameter.
	
	RESOLUTION
	==========
	
	Do not use the second (cpath) parameter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbOOP kbvfp KbDBFDBC kbGrpDSFox kbDSupport kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
