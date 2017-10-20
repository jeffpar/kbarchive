---
layout: page
title: "Q184358: WD97: Text Becomes Wider Using Generic/Text Only Printer"
permalink: /kb/184/Q184358/
---

## Q184358: WD97: Text Becomes Wider Using Generic/Text Only Printer

{% raw %}

	Article: Q184358
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbdta
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Typed characters become very wide if you select the Roman 10 cpi font when the
	Generic/Text Only printer driver is selected as the default printer.
	
	CAUSE
	=====
	
	Unlike earlier versions of Microsoft Word, Word 97 does not rely on printer
	information (metrics) to lay out the document. Word 97 uses a new
	printer-independent layout scheme controlled by the "Use printer metrics to lay
	out document" compatibility option. In Word 97, this option is turned off by
	default.
	
	The Roman 10 cpi font is the only font available when the Generic/Text Only
	printer driver is selected as the default printer. This font is not displayed
	properly by the printer-independent layout scheme.
	
	WORKAROUND
	==========
	
	To work around this behavior, select the "Use printer metrics to layout
	document" option. To do this, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the Compatibility tab.
	
	3. In the Recommended Options For list, click Microsoft Word 97.
	
	4. Click to select the "Use printer metrics to layout document" check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
