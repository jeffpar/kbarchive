---
layout: page
title: "Q180170: DOC: TopIndex Property Incorrectly Documented"
permalink: /kb/180/Q180170/
---

## Q180170: DOC: TopIndex Property Incorrectly Documented

{% raw %}

	Article: Q180170
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbdocerr kbHWMAC kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Help file and the Visual FoxPro Language Reference incorrectly states that
	the TopIndex property is read/write at run-time.
	
	MORE INFORMATION
	================
	
	The TopIndex Property topic of the Help file states:
	
	  Specifies the item that appears in the top-most position in a list. Not
	  available at design time; read-write at run-time.
	
	This is incorrect. The property is read only at run-time. If you attempt to
	change the property, error 1743 appears with this message:
	
	  Property TopIndex is read only.
	
	REFERENCES
	==========
	
	Visual FoxPro 3.x for Windows Help; search on: "TopIndex" (without the quotation
	marks)
	Visual FoxPro 3.0b for Macintosh Help; search on: "TopIndex" (without the
	quotation marks)
	Visual FoxPro 5.x for Windows Help; search on: "TopIndex" (without the quotation
	marks)
	Visual FoxPro 3.x for Windows, "Language Reference", page 820.
	Visual FoxPro 5.x for Windows, "Language Reference", page 422.
	Visual FoxPro 3.0b for Macintosh, "Language Reference", page 876.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
