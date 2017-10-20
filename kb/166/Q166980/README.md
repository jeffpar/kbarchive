---
layout: page
title: "Q166980: WD97: Format Changed If Hyperlink Spans Several Paragraphs"
permalink: /kb/166/Q166980/
---

## Q166980: WD97: Format Changed If Hyperlink Spans Several Paragraphs

{% raw %}

	Article: Q166980
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbusage word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you format a document so that it contains a hyperlink that includes several
	paragraphs, the document formatting near the hyperlink may change when the
	document is saved in HTML format.
	
	CAUSE
	=====
	
	When a single hyperlink includes several paragraphs, an Internet browser may
	format the information much differently than Word will.
	
	RESOLUTION
	==========
	
	Format the hyperlink so that it only includes a single paragraph. Create a
	hyperlink for each paragraph if necessary.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The most common problem may occur when combining hyperlinks with bullets or
	numbering. Word, when dealing with the file as a Word document, will be able to
	apply bullets or number to the individual paragraphs. However, when the document
	is saved as HTML, the paragraphs contained within the hyperlink may be combined
	so that only one of them is numbered.
	
	For example, here is how a document may look when formatted as a Word document.
	Note that in this example the entire text of the example is a single hyperlink:
	
	  1. Item a
	  2. Item b
	  3. Item c
	
	When saved as HTML and viewed in a browser, the document may look like This:
	
	  1. Item a
	  Item b
	  Item c
	
	Note that it is not considered to be a single numbered item rather than 3
	separate items.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbusage word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
