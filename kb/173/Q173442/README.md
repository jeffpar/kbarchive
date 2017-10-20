---
layout: page
title: "Q173442: WD97: Imported WordPerfect Document Contains Gaps"
permalink: /kb/173/Q173442/
---

## Q173442: WD97: Imported WordPerfect Document Contains Gaps

{% raw %}

	Article: Q173442
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): word97 kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you import a WordPerfect document into Microsoft Word, the document may
	contain large gaps between paragraphs.
	
	CAUSE
	=====
	
	This problem occurs when the WordPerfect document contains secondary leading
	with a negative value. (To adjust this setting in WordPerfect, press SHIFT+F8,
	4, 6, 6).
	
	For example, a secondary leading of -3 points in WordPerfect results in 652.35
	points of spacing after paragraphs in Word. (To adjust this setting in Word,
	click Paragraph on the Format menu).
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Remove the Spacing After Value in Word
	------------------------------------------------
	
	To fix this problem after you have imported the document into Word, follow these
	steps:
	
	1. On the Edit menu, click Select All.
	
	2. On the Format menu, click Paragraph, and then click the Indents And Spacing
	  tab.
	
	3. Change the Spacing After setting to 0 pt.
	
	4. Click OK.
	
	Method 2: Change the Negative Value Before Converting to Word
	-------------------------------------------------------------
	
	To prevent this problem from occurring, change the negative value for secondary
	leading in WordPerfect before you import the document into Word. Use the
	appropriate method for your version of WordPerfect.
	
	WordPerfect 5.1 for MS-DOS:
	
	In WordPerfect 5.1 for MS-DOS, the secondary leading code is similar to the
	Spacing After setting for paragraphs.
	
	To change this value in WordPerfect 5.1 for MS-DOS, press SHIFT+F8, 4, 6, 6, and
	reset the Secondary Leading value to 0".
	
	NOTE: Pressing SHIFT+F8 opens the Format menu. Pressing "4" selects Other
	Formats. Pressing "6" selects the Printer Settings menu, and pressing "6" again
	selects the Leading value. Press the TAB key or ENTER to place the cursor on the
	Secondary value.
	
	WordPerfect 5.2 for Windows:
	
	To change this value in WordPerfect 5.2 for Windows, change the Between
	Paragraphs [HRt] setting under Line Height (Leading) Adjustment in the
	Typesetting dialog box (available on the Layout menu).
	
	WordPerfect 6.x:
	
	To change this value in WordPerfect 6.x, change the Adjust Leading setting on the
	Word Spacing and Letter Spacing dialog box. Use the Typesetting command on the
	Layout menu (in WordPerfect 6.0), or the Format menu (in WordPerfect 6.1 for
	Windows).
	
	MORE INFORMATION
	================
	
	WordPerfect is manufactured by Corel Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	In WordPerfect, there are two different codes for line breaks: [SRt] (Soft
	Return), and [HRt] (Hard Return).
	
	The [SRt] Code
	--------------
	
	WordPerfect automatically inserts the [SRt] code at the end of each line in a
	paragraph. The Leading Primary value in WordPerfect is equivalent to the Line
	Spacing setting in Word; it controls how much additional vertical space is after
	each line. If you change the Leading Primary value, WordPerfect adjusts the line
	spacing for the paragraph.
	
	The [HRt] Code
	--------------
	
	WordPerfect inserts the [HRt] code when you press the ENTER key. This code is
	equivalent to the paragraph mark in Word. Therefore, the Leading Secondary value
	in WordPerfect is equivalent to the Spacing After setting in Word. However,
	unlike the Spacing After setting, you can set Secondary Leading to a negative
	number. This forces adjacent paragraphs to overlap.
	
	Word for the Macintosh version 6.x, Word for Windows 95 version 7.0, and Word 97
	all convert the [HRt] code to the Spacing After setting. However, because Word
	does not allow a negative value, it incorrectly sets Spacing After to a large
	value (approximately 671.75 points).
	
	REFERENCES
	==========
	
	For additional information on how Microsoft Word converts leading from
	WordPerfect, please see the following article in the Microsoft Knowledge Base:
	
	  Q72292 WD: How Word Converts WordPerfect 5.x/6.x Hard and Soft Returns
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the versions of Microsoft Word
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
