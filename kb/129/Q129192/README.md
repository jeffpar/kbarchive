---
layout: page
title: "Q129192: BUG: Keyword Expansion Fails on the Macintosh"
permalink: /kb/129/Q129192/
---

## Q129192: BUG: Keyword Expansion Fails on the Macintosh

{% raw %}

	Article: Q129192
	Product(s): Microsoft SourceSafe
	Version(s): MACINTOSH:3.04,3.1
	Operating System(s): 
	Keyword(s): kbSSafe310bug kbSSafe304bug
	Last Modified: 22-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Macintosh, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Keyword expansion does not work correctly in SourceSafe for Macintosh when
	Keyword_Masks is set in the SRCSAFE.INI.
	
	RESOLUTION
	==========
	
	To fix this problem, set Keyword_Masks in the SS.INI file. Here's an example:
	
	1. Set Keyword_Masks in the SS.INI file.
	
	2. Update a .TXT file.
	
	3. Observe that the keywords are expanded.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in SourceSafe version 3.1 for
	Macintosh.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Set Keyword_Masks in the SRCSAFE.INI file to *.TXT.
	
	2. Add a keyword to a .TXT file, and update the file.
	
	3. Observe that the keywords are not expanded.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe310bug kbSSafe304bug 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword3 kbSSafe304Mac kbSSafe310Mac
	Version           : MACINTOSH:3.04,3.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
