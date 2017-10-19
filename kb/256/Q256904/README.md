---
layout: page
title: "Q256904: WD97: Day Name Is Incorrect in a Date and Time Field"
permalink: /kb/256/Q256904/
---

## Q256904: WD97: Day Name Is Incorrect in a Date and Time Field

	Article: Q256904
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Word 97 for Windows, when you save a document as type Word 6.0/95 (*.doc) or
	Rich Text Format (*.rtf), the name of the day for a date after February 29,
	2000, is incorrect. For example, instead of seeing
	
	  Monday, March 6, 2000
	
	you see
	
	  Sunday, March 6, 2000
	
	CAUSE
	=====
	
	In some cases, Word calculates the day incorrectly if the date is after February
	29, 2000. See the "More Information" section of this article for specific cases.
	
	RESOLUTION
	==========
	
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
	
	For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	STATUS
	======
	
	
	Microsoft has confirmed that this is a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Linked and Embedded Word Document Objects
	-----------------------------------------
	
	Given a linked or embedded Word document object, only the insertion of a
	CreateDate field results in an incorrect day. PrintDate and SaveDate do not
	result in an incorrect day.
	
	EditTime
	--------
	
	The EditTime field includes any minutes for the time that the document was open
	on February 29, 2000.
	
	In addition, you may see the problem in any of the following cases:
	
	- You insert a SaveDate field and then save the document as type Word 6.0/95 or
	  RTF.
	
	  -or-
	
	- You insert a CreateDate field and then save the document as type Word 6.0/95
	  or RTF.
	
	  -or-
	
	- You insert a PrintDate field and then save the document as type Word 6.0/95
	  or RTF.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new blank document.
	
	2. Click Field on the Insert menu.
	
	3. Select the CreateDate field from the Field names list.
	
	4. Click Options, select the dddd MMMM,dd,yyyy format, and then click Add to
	  field.
	
	5. Click OK twice.
	
	6. Save the document as a Word document.
	
	7. Save the document as an RTF document.
	
	8. Close and reopen the RTF document.
	
	9. Select the Date field and press F9 to update field.
	
	Result: Notice that the day displayed is one day off. If the current day is
	Monday, it will show Sunday.
	
	You will not see this problem if you have "Hide known file extensions" turned on
	in Windows Explorer.
	
	This release also includes the ODMA fixes of interest to PCDocs users. For
	additional information, click the article numbers below to view the articles in
	the Microsoft Knowledge Base:
	
	  Q145584 WD97: Documents May Be Deleted from ODMA System
	
	  Q142685 WD97: ODMA Close Doc Function Never Issued After Printing Selection
	  with Background Printing Enabled
	
	  Q237848 WD97: File Not Registered in ROT After Being Opened in ODMA
	
	This release also includes the template security issue that was previously
	released by Microsoft. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q214652 WD97: No Macro Warning When You Open File Attached to Template That
	  Contains Macros
	
	Additional query words: y2k wd97 word97 date day field createdate savedate printdata edittime leapyear leap year
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
