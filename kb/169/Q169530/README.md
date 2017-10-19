---
layout: page
title: "Q169530: WD97: Date/Time Field Doesn't Update to International Version"
permalink: /kb/169/Q169530/
---

## Q169530: WD97: Date/Time Field Doesn't Update to International Version

	Article: Q169530
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbusage winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, when you open a document formatted in the English (US)
	document language in an international version of Microsoft Word 97, the Date and
	Time fields are not updated to the localized version of Word.
	
	NOTE: The Date and Time fields remain in English (the day of the week, and month)
	and are not updated to the correct language.
	
	This problem only occurs when an English (US) version of the document is opened
	in the French, Spanish, or German versions of Microsoft Word 97.
	
	
	WORKAROUND
	==========
	
	Use the following steps to change the language within the main part of your
	document:
	
	1. In the localized version of Microsoft Word 97, open the document.
	
	2. On the Edit menu, click Select All.
	
	3. On the Tools menu, point to Language, and then click Set Language.
	
	4. Under "Mark selected text as," click the language that corresponds to the
	  version of Microsoft Word you have installed, and then click OK.
	
	5. Update the document by clicking Print Preview on the File menu.
	
	If the Date and Time fields are in the header or footer area of the document, you
	will need to:
	
	1. Click Header And Footer on the View menu.
	
	2. Select the Date and Time fields.
	
	3. On the Tools menu, point to Language, and then click Set Language.
	
	4. Under "Mark selected text as," click the correct language (the language that
	  corresponds to the version of Microsoft Word you have installed), and then
	  click OK.
	
	5. On the Header And Footer toolbar, click Close.
	
	6. Update the document by clicking Print Preview on the File menu.
	
	Any Date and Time field contained in the document should now appear correctly in
	the current international version of Microsoft Word. In other words, the day of
	the week and the month should now be in the correct international language. For
	example, if the day of the week is Tuesday, Tuesday will show as the correct
	word of Dienstag in the German version of Microsoft Word 97.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	Additional query words: sr1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbinterop kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
