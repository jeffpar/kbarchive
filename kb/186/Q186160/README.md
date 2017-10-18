---
layout: page
title: "Q186160: WD97: Invalid Page Fault Using Replace Dialog"
permalink: kb/186/Q186160/
---

## Q186160: WD97: Invalid Page Fault Using Replace Dialog

	Article: Q186160
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to replace a string of text using the Replace feature in Word,
	you may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click the Details button, you receive the following error message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at
	  0137:<address>.
	
	CAUSE
	=====
	
	This problem occurs when the following are true:
	
	- The Replace With box (in the Find And Replace dialog box) contains a text
	  string of 255 characters.
	
	  -and-
	
	- You clicked Find Next, Replace, or Replace All in the Find And Replace dialog
	  box.
	
	WORKAROUND
	==========
	
	To work around this problem reduce the number of characters in the Replace With
	box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: 8.0 8.00 gpf ipf crash hang
	
	======================================================================
	Keywords          : kberrmsg kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
