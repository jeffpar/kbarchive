---
layout: page
title: "Q198316: WD97: Some Underlines Lost After Opening Word 6.0/95 or RTF File"
permalink: /kb/198/Q198316/
---

## Q198316: WD97: Some Underlines Lost After Opening Word 6.0/95 or RTF File

{% raw %}

	Article: Q198316
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a Word 97 document in an earlier version of Word, if that document
	contains underlines, some of the underlines may be lost.
	
	CAUSE
	=====
	
	This problem occurs when the document was saved as any of the following file
	types:
	
	- Word 6.0/95 (*.doc)
	
	- Rich Text Format (*.rtf)
	
	- Word 97 & 6.0/95 - RTF (*.doc)
	
	  NOTE: This converter is only available in Word 97 for Windows SR-1 when
	  installed from the Office 97 for Windows SR-1 Enterprise Update or the Word
	  97 for Windows SR-1 Update (non-patch).
	
	WORKAROUND
	==========
	
	Save your document as a Word Document (*.doc), and then use the Word 97
	Converter to open the file in the earlier version of Word.
	
	For information about how to obtain the Word 97 converter, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q162214 How to Obtain the Word 97 Converter
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	In Word 97 for Windows, there are some additional underlines available for
	underlining text. The additional underlines, which are not included in earlier
	versions of Word, include:
	
	- Thick
	
	- Dash
	
	- Dot Dash
	
	- Dot Dot Dash
	
	- Wave
	
	When you save your document containing any of these underlines in the Word 6.0/95
	(*.doc), Rich Text Format (*.rtf), or Word 97 & 6.0/95 - RTF (*.doc)
	formats, earlier versions of Word cannot interpret the RTF commands for these
	types of underlines.
	
	When you use the Word 97 or Word 97-98 Import converter to open your Word 97 for
	Windows document in an earlier version of Word, the underlines are converted to
	either a single or a double underline.
	
	Additional query words: uldash uldashd uldashdd ulwave missing gone none
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
