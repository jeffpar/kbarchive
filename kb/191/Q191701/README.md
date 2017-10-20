---
layout: page
title: "Q191701: PRB: Comments Echo to Command Window w/ SourceSafe Integration"
permalink: /kb/191/Q191701/
---

## Q191701: PRB: Comments Echo to Command Window w/ SourceSafe Integration

{% raw %}

	Article: Q191701
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Visual SourceSafe integration in Visual FoxPro 6.0, you will notice
	comments echoed to the Visual FoxPro Command window when you perform various
	source control actions.
	
	CAUSE
	=====
	
	This is a change in the way that the Visual SourceSafe integration reports the
	results of source control actions. In Visual FoxPro version 5.0, there was a
	Results dialog box that showed the results of SourceSafe integration actions,
	such as file additions, checkouts, and so forth. This information now displays
	as comments in the Visual FoxPro Command window.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a Visual FoxPro project that is under source control in Visual
	  SourceSafe.
	
	2. Check Out one of the files in the project.
	
	The following comments appear in the Visual FoxPro Command window:
	
	     * Source Control: Checking out <source file name>
	     * Source Control: Completed
	
	Additional query words: kbVFp600 kbinterop
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
