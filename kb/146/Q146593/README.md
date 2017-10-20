---
layout: page
title: "Q146593: WD97: Corrupted Field Codes in Header or Footer"
permalink: /kb/146/Q146593/
---

## Q146593: WD97: Corrupted Field Codes in Header or Footer

{% raw %}

	Article: Q146593
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Word may exhibit any of the following behaviors when the following conditions
	are true:
	
	- You have turned on Save Preview Picture for your document (on the File menu,
	  click Properties and click the Summary tab).
	
	  -and-
	
	- Your document contains a PAGE field in the header or footer, and a PAGE field
	  on any page other than the first page has a result of more digits than the
	  first page number.
	
	  For example, the first page PAGE field appears as a 1, and the tenth page PAGE
	  field appears as a 10.
	
	Examples of some behaviors that may occur include the following:
	
	- Fields in the header or footer of a document appear incorrectly. Two fields
	  may blend together. For example, a {Page} field and a {Title} field that are
	  supposed to show this result:
	
	  10Document Title
	
	  show this or a similar result when field codes are turned off:
	
	  1title
	
	  and this or a similar result when field codes are turned on:
	
	  {PageTitle}
	
	  -or-
	
	- The right field brace for the page field is missing. For example, the page
	  field displays the following when field codes are turned on:
	
	  {PAGE
	
	  -or-
	
	- The display results of a PAGE field include a vertical bar. For example, the
	  page field displays the following when field codes are turned on:
	
	  |10
	
	  rather than 10.
	
	  -or-
	
	- Word stops responding (hangs) when you delete text in the header or footer.
	
	  -or-
	
	- You receive an invalid page fault (IPF) in module Winword.exe when saving the
	  document as RTF.
	
	
	CAUSE
	=====
	
	When the above conditions are true, Word incorrectly saves the field length
	information, resulting in corrupted field codes.
	
	RESOLUTION
	==========
	
	This problem can be corrected for all future documents you create in Microsoft
	Word; however, this problem may still occur in existing documents even though
	you have installed the fix discussed in this article. For additional information
	about correcting similar problems in an existing document, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q87856 WD97: Troubleshooting Damaged Documents in Word for Windows
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT NOTE: Microsoft Word 97 post-service release fixes are cumulative. The
	latest update contains all of the fixes since Service Release 2. If you install
	the latest update for Word 97, you do not need to install any other updates
	after Service Release 2.
	
	For additional information about the fixes included in the latest update for Word
	97, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Word
	2000.
	
	Additional query words: page field right brace bracket
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
