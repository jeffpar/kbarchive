---
layout: page
title: "Q168325: WV: IPF Opening RTF File with Background Texture in Viewer"
permalink: /kb/168/Q168325/
---

## Q168325: WV: IPF Opening RTF File with Background Texture in Viewer

	Article: Q168325
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbinterop kbdta
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word Viewer 97-2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you save a Word 97 document containing a background texture as "Rich Text
	Format (*.rtf)" or "Word 6.0/95 (*.doc)" and then open the file in Microsoft
	Word Viewer 97-2000, the following error message may appear:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you receive the following message:
	
	  WORDVIEW caused an invalid page fault in module WORDVIEW.EXE at
	  <address>.
	
	WORKAROUND
	==========
	
	You may be able to work around the problem by opening and saving the Rich Text
	Format or Word 6.0/95 document in Microsoft WordPad before opening it in Word
	Viewer 97-2000.
	
	To save the document in WordPad:
	
	1. Open the Rich Text Format or Word 6.0/95 document in WordPad.
	
	2. On the File menu, click Save As.
	
	3. In the Save As Type list, click "Rich Text Format (RTF)" or "Word for Windows
	  6.0," and then click Save.
	
	NOTE: This procedure may remove the background texture formatting.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	You can open Word 97 documents containing background textures in Word Viewer
	97-2000 if you save the Word 97 document in the Word 97 native format.
	
	REFERENCES
	==========
	
	For more information about Word Viewer 97-2000, please see the following
	Knowledge Base article:
	
	  
	
	  Q165908 WV: How to Obtain Microsoft Word Viewers
	
	Additional query words: word97 gpf general protection fault
	
	======================================================================
	Keywords          : kbinterop kbdta 
	Technology        : kbWordViewerSearch kbViewerSearch kbWordViewer97
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
