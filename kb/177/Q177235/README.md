---
layout: page
title: "Q177235: WD97: Undoing Grouped Linked Text Boxes Causes IPF and Crash"
permalink: kb/177/Q177235/
---

## Q177235: WD97: Undoing Grouped Linked Text Boxes Causes IPF and Crash

	Article: Q177235
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Undo button to undo, all at once, the following three actions:
	
	- Group objects
	
	- Insert Text Box
	
	- Text Box Linking
	
	the following error message may appear:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, the following message appears:
	
	  Winword caused an invalid page fault in module Winword.exe at
	  <Address>.
	
	When you click Close, Word closes without allowing you to save any work.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following.
	
	Method 1: Using the Undo Button
	-------------------------------
	
	Click the Undo button three separate times, undoing each of the three actions one
	at a time.
	
	Method 2: Using the Edit Menu
	-----------------------------
	
	1. On the Edit menu, click Undo Group Objects.
	
	2. On the Edit menu, click Undo Insert Text Box.
	
	3. On the Edit menu, click Undo Text Box Linking.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	This problem occurs when the following three actions:
	
	  Group objects
	  Insert Text Box
	  Text Box Linking
	
	are performed in that specific order with no other action in between. If you
	perform an action in between one of the above actions, undoing them all at once
	does not cause an error or cause your computer to stop responding (crash).
	
	
	Additional query words: OFF97 Word97 fail
	
	======================================================================
	Keywords          : kberrmsg word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
