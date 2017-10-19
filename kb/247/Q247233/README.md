---
layout: page
title: "Q247233: WD97: IPF When You Press ENTER in Table or Label Row"
permalink: /kb/247/Q247233/
---

## Q247233: WD97: IPF When You Press ENTER in Table or Label Row

	Article: Q247233
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta wd2000
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you press ENTER in the left-most cell of a table or label row that appears
	at the top of the screen, the following error message may appear:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details, the following error message appears:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at 015f:address.
	
	NOTE: This problem occurs only when in normal view and the top table or label row
	that is visible is cut off by the top of the display screen.
	
	
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
	
	This problem occurs only when a table or label row is partially visible on
	screen and when you press ENTER. To prevent this problem, scroll the page so
	that the entire table or label row is visible before you press ENTER.
	
	To scroll the page so the entire table or label row is visible, do either of the
	following:
	
	- Use the vertical scroll bar to move the page down on the screen. This
	  prevents the top of the table or label row from being cut off.
	
	  -or-
	
	- Use the arrow keys on your keyboard to move the insertion point into the
	  table or label row above the row that appears cut off. This causes the row to
	  move down on screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Avery 5160 labels 5162 full page
	
	======================================================================
	Keywords          : kbdta wd2000 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
