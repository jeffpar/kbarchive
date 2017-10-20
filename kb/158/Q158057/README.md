---
layout: page
title: "Q158057: WD97: Backslash, Semicolon Dropped from XE Field"
permalink: /kb/158/Q158057/
---

## Q158057: WD97: Backslash, Semicolon Dropped from XE Field

{% raw %}

	Article: Q158057
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an index entry ({XE}) field that contains a backslash (\)
	followed by a semicolon (;) and then convert the document to Word 6.0, Word 95,
	or Rich Text Format (RTF), the backslash and the semicolon are dropped from the
	{XE} field. Consequently, when you update your index, the result is incorrect.
	
	WORKAROUND
	==========
	
	To work around this problem, install the Word 97 converter on the computer where
	you have Word 6.0 or 7.0. This allows you to open Word 97 documents in Word 6.0
	or 7.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	MORE INFORMATION
	================
	
	The backslash in the field indicates to Word that the semicolon is to appear in
	the index and that it does not indicate the end of the material. If the
	backslash is not present, the text that appears in the index ends with the
	semicolon.
	
	Additional query words: 8.0 word8 word97 semi-colon semi colon dot comma
	
	======================================================================
	Keywords          : kbfield 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
