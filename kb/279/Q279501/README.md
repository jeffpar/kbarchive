---
layout: page
title: "Q279501: WD97: Err Msg When You Scroll in Document That Contains Table"
permalink: kb/279/Q279501/
---

## Q279501: WD97: Err Msg When You Scroll in Document That Contains Table

	Article: Q279501
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using page layout view and are paging up and down in a document,
	you receive an error message similar to the following:
	
	  The instruction at '0x30323c9a" referenced memory at "0x00000000". The memory
	  could not be "read".
	
	CAUSE
	=====
	
	The error message results from Word causing an access violation. This problem
	can occur when the following conditions are all true:
	
	- The document contains a table.
	
	- In the Border and Shading Options dialog box, "Measure from" is set to Text,
	  and the "Align paragraph borders and table edges with page border" check box
	  is selected.
	
	- You press PAGE UP and PAGE DOWN repeatedly, or you drag the scroll bar up and
	  down to scroll through the pages in the document.
	
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
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem is fixed in the latest
	Word 97 update.
	
	
	Additional query words: word97 wd97 scroll pageup pagedown crash av crashes hang hangs 0x30323c9a 0x00000000
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
