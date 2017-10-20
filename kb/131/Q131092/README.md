---
layout: page
title: "Q131092: PRB: Keyword Expansion Is Case Sensitive"
permalink: /kb/131/Q131092/
---

## Q131092: PRB: Keyword Expansion Is Case Sensitive

{% raw %}

	Article: Q131092
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SourceSafe keyword expansion is case sensitive. For example, the following do
	not expand as expected:
	
	        $nokeywords: $
	
	        $Nokeywords: $
	
	CAUSE
	=====
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	The syntax for the keywords is:
	
	        $Archive: $
	        $Author: $
	        $Date: $
	        $Header: $
	        $History: $
	        $Log: $
	        $Logfile: $
	        $Modtime: $
	        $NoKeywords: $
	        $Revision: $
	        $Workfile: $
	
	Visual SourceSafe 6.0 also contains:
	
	        $JustDate: $
	
	The capital letters are required.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
