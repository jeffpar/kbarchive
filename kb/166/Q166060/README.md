---
layout: page
title: "Q166060: WV: Cannot Copy and Paste Floating Objects in Word Viewer"
permalink: kb/166/Q166060/
---

## Q166060: WV: Cannot Copy and Paste Floating Objects in Word Viewer

	Article: Q166060
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbviewer word97
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word Viewer 97-2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word Viewer 97-2000, if you open a document containing floating
	objects and then attempt to copy the floating object from Word Viewer and paste
	it into another application, a blank object is pasted.
	
	WORKAROUND
	==========
	
	Use one of the following methods to work around this problem.
	
	Method 1: Copy and Paste the Entire Document
	--------------------------------------------
	
	In Microsoft Word Viewer 97-2000, use the following steps to copy the entire
	document:
	
	1. On the Edit menu, click Select All (or press CTRL+A on the keyboard).
	
	2. On the Edit menu, click Copy.
	
	3. In the receiving application, click Paste.
	
	  The entire document is pasted into the receiving application.
	
	4. Delete the unwanted parts of the document in the receiving application.
	
	Method 2: Convert the Floating Objects to Inline Shapes
	-------------------------------------------------------
	
	To convert a floating object to an inline shape, follow these steps:
	
	1. Open the document in Word.
	
	2. Select the object you want to convert to an inline object.
	
	3. On the Edit menu, click Cut.
	
	4. Position the insertion point where you want the object.
	
	5. On the Edit menu, click Paste Special.
	
	6. Clear the Float over text check box.
	
	7. Click Picture, and click the OK button.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about Word Viewer 97-2000, please see the following
	Knowledge Base article:
	
	  
	
	  Q165908 WV: How to Obtain Microsoft Word Viewers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbdta kbviewer word97 
	Technology        : kbWordViewerSearch kbViewerSearch kbWordViewer97
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	
