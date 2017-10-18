---
layout: page
title: "Q197441: WD97: &quot;Find Whole Words Only&quot; and &quot;Match Case&quot; Are Unavailable"
permalink: kb/197/Q197441/
---

## Q197441: WD97: &quot;Find Whole Words Only&quot; and &quot;Match Case&quot; Are Unavailable

	Article: Q197441
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The "Find Whole Words Only" and "Match Case" options are unavailable (dimmed)
	when you click to select Use Wildcards.
	
	CAUSE
	=====
	
	Selecting Use Wildcards actually has the effect of turning on these other
	options. When you type text in the Find What box and select Use Wildcards, Word
	matches the case of the typed words and finds only whole words.
	
	WORKAROUND
	==========
	
	You can override these implied options by using Advanced Search Criteria. For
	example, to search for a word that may appear in the document as "JONES",
	"Jones", or "jones", select the Use Wildcards check box, and type the following
	in the Find What box:
	
	  "[Jj][Oo][Nn][Ee][Ss]" (without the quotation marks)
	
	Including each uppercase and lowercase pair in brackets tells Word to search for
	either letter in that position.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q106622 Can't Choose "Find Whole Words Only" with More Than One Word
	
	  Q122758 WD: How to Search for Special Characters When Pattern Matching
	
	REFERENCES
	==========
	
	For more information about Find and Replace, click Contents And Index on the
	Help menu, click the Index tab in Microsoft Word Help, type the following text
	
	  "find" (without the quotation marks)
	
	and then double-click the selected text to go to the "Find and Replace" topic. If
	you are unable to find the information you need, ask the Office Assistant.
	
	Additional query words: gray grey greyed disable disabled grayed
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
