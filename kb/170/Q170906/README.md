---
layout: page
title: "Q170906: WD97: Widow/Orphan Setting Not Preserved Saving As Word 6.0/95"
permalink: /kb/170/Q170906/
---

## Q170906: WD97: Widow/Orphan Setting Not Preserved Saving As Word 6.0/95

{% raw %}

	Article: Q170906
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
	
	When you create a document in Microsoft Word 97 with the Widow/Orphan Control
	setting turned on and then save it in the Microsoft Word 6.0/95 format or in
	Rich Text Format (RTF), none of the paragraphs will be formatted with
	Widow/Orphan control setting when you open it in Microsoft Word 6.x.
	
	CAUSE
	=====
	
	When Microsoft Word 97 writes out the RTF code for the Widow/Orphan Control
	setting, Microsoft Word 6.x only partially understands the code and does not
	apply the Widow/Orphan Control setting to any of the paragraphs.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, once you open the document in Microsoft Word 6.x,
	you can reapply the Widow/Orphan Control setting to the appropriate paragraphs.
	To do this, follow these steps:
	
	1. Select the text to which you want to apply the Widow/Orphan Control setting.
	
	2. On the Format menu, click Paragraph.
	
	3. Click the Text Flow tab.
	
	4. Under Pagination, click to select Widow/Orphan Control.
	
	5. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	To enable or disable the Widow/Orphan Control setting in Microsoft Word 97,
	follow these steps:
	
	1. On the Format menu, click Paragraph.
	
	2. Click the Line And Page Breaks tab.
	
	3. Click to select (enable) or to clear (disable) the Widow/Orphan Control check
	  box.
	
	Widow (the last line of a paragraph) control prevents a line from being printed
	by itself at the top of a page. It also prevents an orphan (the first line of a
	paragraph) from being printed by itself at the bottom of a page. Widow/Orphan
	Control should be turned off if every page must have the same number of lines.
	
	Widow/Orphan control is not applied to paragraphs that have three lines or fewer.
	An alternative for this situation is to use the Keep Paragraph Together option
	(on the Format menu, click Paragraph and then click the Text Flow or Line And
	Page Breaks tab) which keeps the paragraph from being split between pages.
	
	REFERENCES
	==========
	
	For more information about Window/Orphan Control, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q113906 WD: Unbalanced Columns Despite Continuous Section Break
	
	  Q118586 WD: Footnote Moved to Next Page
	
	For more information about Window/Orphan Control, click the Office Assistant,
	type "widow orphan control," click Search, and then click "Control widow and
	orphan lines."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: sr1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbinterop kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
