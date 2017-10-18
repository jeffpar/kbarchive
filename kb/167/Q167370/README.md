---
layout: page
title: "Q167370: WD97: Word Stops Responding Opening MacWord 5.x File"
permalink: kb/167/Q167370/
---

## Q167370: WD97: Word Stops Responding Opening MacWord 5.x File

	Article: Q167370
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbfield
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Word 97 stops responding (hangs) when you open a Word for the
	Macintosh, version 5.x, file that contains an If, Ask, or Set field.
	
	The following message appears in the status bar at the bottom of the Word
	Window:
	
	  Reading Word for the Macintosh file
	
	This is followed by a progress meter, which indicates that the conversion is
	90-percent complete.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, open the file in Word for the Macintosh, remove the
	If, Ask, or Set field, save, and close the document. Reopen the file in Word 97
	and re-create the If, Ask, or Set field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1. This problem has been
	corrected for Word 98 for Macintosh.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	The problem occurs when you have a field nested inside an IF field. An example
	of a nested field would be:
	
	  <<IF quantity => 50>> you will have more than
	  <<quantity>> <<endif>>
	
	This problem also occurs if you have a nested ASK or SET field.
	
	REFERENCES
	==========
	
	For more information about converting from other formats, click the Office
	Assistant, type "converting from other formats" (without the quotation marks),
	click Search, and then click "Customize Word to work with converted documents."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	"User's Guide," version 5.1, Chapter 33, "Print Merge Basics," pages 601- 607.
	
	For more information about conditional mail merges, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q29193 WD: Print Merge Only Certain Records from a Data Document
	
	  Q165635 WD: Conditional MERGEFIELD Lost When Converted to MacWord
	
	Additional query words: sr1 release1 8.0 8.00 mailmerge printmerge mail merge print
	
	======================================================================
	Keywords          : kbinterop kbfield 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
