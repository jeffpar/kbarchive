---
layout: page
title: "Q146017: PRB: History in Explorer Differs from History File w/ Keywords"
permalink: /kb/146/Q146017/
---

## Q146017: PRB: History in Explorer Differs from History File w/ Keywords

{% raw %}

	Article: Q146017
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the History keyword is used, the file's history is reflected in the
	document. However, this listing may be different from the listing displayed in
	the Explorer. The history prior to the point when keyword expansion was
	implemented will not be reflected in the document.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Demonstrate Behavior
	-----------------------------
	
	1. Create a new project, and add a file that has a .txt extension. Check the
	  file out, make some modifications, and check the file in. Do this several
	  times to establish some history entries.
	
	2. Enable keyword expansion. In the Srcsafe.ini file, ensure that the following
	  entry exists:
	
	  Keyword_Masks = *.txt
	
	3. Restart SourceSafe, check the file out, and add the History keyword to the
	  file ($History: $). Check the file out, make some modifications and check the
	  file in. Do this several times, and then compare the history entries in the
	  file to the entries in the Visual SourceSafe Explorer. Only the entries made
	  after Keyword expansion went into effect will appear in the file.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q141504 How to Make SourceSafe Keyword Expansion Work in Text Docs
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
