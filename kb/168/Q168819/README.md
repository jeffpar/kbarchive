---
layout: page
title: "Q168819: FP97: FP Explorer Finds Misspellings that FP Editor Doesn't"
permalink: kb/168/Q168819/
---

## Q168819: FP97: FP Explorer Finds Misspellings that FP Editor Doesn't

	Article: Q168819
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to check spelling across Webs from FrontPage Explorer, the
	spell checker may find misspellings that were not found by FrontPage Editor.
	
	CAUSE
	=====
	
	FrontPage Explorer uses a method of spell checking that spell checks words
	separated by punctuation without spaces. FrontPage Editor checks the word on
	either side of the punctuation, but not including the punctuation.
	
	For example, FrontPage Explorer will flag the following string as a misspelling:
	
	  "filename.back"
	
	RESOLUTION
	==========
	
	To correct the spelling, use a copy and paste operation to place the contents of
	the Web page in a word processing program, such as Microsoft Word 97, and run
	the spell checker from there.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: proof proofing speller check fpeditor misspellings
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
