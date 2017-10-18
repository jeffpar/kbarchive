---
layout: page
title: "Q229742: WD97: Error Message After You Undo a Deletion of a Section Break"
permalink: kb/229/Q229742/
---

## Q229742: WD97: Error Message After You Undo a Deletion of a Section Break

	Article: Q229742
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97 for Windows, when you try to do any of the following:
	
	- Print a document.
	
	  -or-
	
	- Perform a mail merge.
	
	  -or-
	
	- Delete the last character in a document.
	
	  -or-
	
	- Scroll through a document.
	
	  -or-
	
	- Select all and press DELETE.
	
	  -or-
	
	- Open a file.
	
	You may receive an error message similar to one of the following:
	
	Windows NT 4.0:
	
	  WINWORD.exe - Application Error
	
	  The instruction at 0x3007ceac referenced memory at 0x001252d1.
	
	  The memory could not be 'read'.
	
	  Click ok to terminate the application.
	
	Windows 95 or Windows 98:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an invalid page fault in WINWORD.EXE at 0137:301e4f1f.
	
	NOTE: The actual memory address may vary.
	
	
	CAUSE
	=====
	
	You previously deleted a section break and then undid the delete, and the header
	in the section before the deleted section break contains a shape.
	
	Formatting information for shapes in the document header is corrupted. This can
	occur when you undo the deletion of a section break, and the header of the
	previous section contains one or more shapes.
	
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
	
	
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, save the document in RTF format, and then open the
	RTF document in Microsoft Word 97.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	
	Additional query words: wd97 word97 section break corrupt IPF error errmsg crash
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
