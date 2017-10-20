---
layout: page
title: "Q247147: WD97: Index Headings Incorrect with Some Nordic Characters"
permalink: /kb/247/Q247147/
---

## Q247147: WD97: Index Headings Incorrect with Some Nordic Characters

{% raw %}

	Article: Q247147
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert an index in your Word document that contains words that begin
	with the Nordic character a-ring (an "a" with a ring over it), and other words
	that begin with Aa or aa (double a), an additional index heading is inserted as
	part of the index as
	
	  
	
	  
	      A
	
	  Aaron, 1
	
	  
	      A        (a-ring)
	
	  Aaron, 1     (a-ring)
	
	instead of the expected index entry as
	
	  
	
	  
	      A
	
	  Aaron, 1
	
	  Aaron, 1     (a-ring)
	
	NOTE: This problem occurs with both the Norwegian Nynorsk and Norwegian Bokmal
	regional settings, and even if you define the language ID in the INDEX field.
	
	For additional information about how to define the language that is used to
	create your index, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q220568 WD2000: Undocumented Index Field Switches
	
	NOTE: This problem does not occur with Microsoft Word 97 for Windows on the
	Microsoft Windows 2000 platform.
	
	
	WORKAROUND
	==========
	
	To work around this problem, convert the index to plain text (unlink the INDEX
	field). To do this, select your index and press CTRL+SHIFT+F9. Then delete the
	additional index heading.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbOSWinSearch kbWord97 kbWord97Search kbOSWinNT400 kbZNotKeyword2 kbOSWinNTSearch
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
