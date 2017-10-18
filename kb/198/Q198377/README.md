---
layout: page
title: "Q198377: WD97: &quot;Float Over Text&quot; Object Converts with Extra Para Mark"
permalink: kb/198/Q198377/
---

## Q198377: WD97: &quot;Float Over Text&quot; Object Converts with Extra Para Mark

	Article: Q198377
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word97 kbframe
	Last Modified: 07-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a Word 97 for Windows document that contains Float Over Text
	objects in an earlier version of Word, all of the Float Over Text objects are
	converted to frames and an extra paragraph mark is placed after the frame.
	
	CAUSE
	=====
	
	Earlier versions of Word do not support Float Over Text objects. When you open a
	Word document that contains Float Over Text objects into an earlier version of
	Word, the Float Over Text objects are converted to objects in a frame. When the
	frame is inserted, an extra paragraph is inserted with it. This extra paragraph
	mark can change the layout of your document.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- In an earlier version of Word, open the document and delete the unwanted
	  paragraph marks (blank lines).
	
	  -or-
	
	- In Word 97 for Windows, open the document and replace all of the Float Over
	  Text objects with objects that are placed in text boxes.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q157088 WD97: Limitations Converting Documents from Word 97 to 6.x/95
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 kbframe 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
