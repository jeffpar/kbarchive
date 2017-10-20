---
layout: page
title: "Q161978: WD97: RTF Format Given to File Saved in Word 6.0/95"
permalink: /kb/161/Q161978/
---

## Q161978: WD97: RTF Format Given to File Saved in Word 6.0/95

{% raw %}

	Article: Q161978
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversionkbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article applies to Microsoft Word 97. It does not apply to Microsoft Word
	97 for Windows, Service Release 1 (SR-1). For information about saving in Word
	6.0 or 7.0 format from Microsoft Word 97 SR-1, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q171684 WD97: Differences Between Binary and RTF Export Converters
	
	When you save a document in the Word 6.0/95 format, you may notice the following
	behavior:
	
	- When you open the document in Word 6.0, 7.0, or 97 with the Confirm
	  Conversions option selected (on the Tools menu, click Options, and click the
	  Confirm Conversions check box to select it), you are prompted to convert the
	  file from Rich Text Format (RTF).
	
	- When you attempt to save the file, the Save As dialog box lists "Rich Text
	  Format (*.rtf)" as the current format of the document.
	
	- If you save the document from the Save As dialog box, the file name extension
	  of the document is changed to .rtf (rather than .doc).
	
	CAUSE
	=====
	
	When you select the Word 6.0/95 Save As option, the document is saved as an RTF
	file (but Word initially uses the .doc extension with the file). This feature of
	Microsoft Word 97 for Windows ensures that Word 97 is compatible with earlier
	versions of Microsoft Word.
	
	When you open the Word 97 document that was saved as Word 6.0/95, Word recognizes
	it as an RTF document.
	
	If you use the Save As dialog box to save the file, and if you do not change the
	file type to Word 6.0/95, the file name extension will change to .rtf.
	
	WORKAROUND
	==========
	
	To restore the .doc file name extension, use the following steps:
	
	1. On the File menu, click Save As.
	
	2. In the Save As Type box, select "Word 6.0/95 (*.doc)," and click Save.
	
	  You may be prompted with the message "Do you want to replace the existing
	  <filename.doc>?" Click Yes to overwrite the document and return the
	  current document to the .doc extension.
	
	  CAUTION: Be sure that clicking Yes is appropriate in your case. If a document
	  exists with the current document's name, that version of the document will be
	  overwritten.
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kbdta kbconversion kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
