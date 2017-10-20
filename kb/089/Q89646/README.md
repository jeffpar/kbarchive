---
layout: page
title: "Q89646: WD97: Error Msg: Text Formatted with No Proofing Was Skipped"
permalink: /kb/089/Q89646/
---

## Q89646: WD97: Error Msg: Text Formatted with No Proofing Was Skipped

{% raw %}

	Article: Q89646
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbproof word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word, if part or all of your document is formatted with no language
	reference, when you run either the spelling checker or the grammar checker, you
	receive either of the following messages.
	
	  The spelling and grammar check is complete. Text set to (no proofing) was
	  skipped. To find (no proofing) text, click Edit/Replace, click More, click
	  Format, click Language, and select (no proofing).
	
	Note that the document will not be hyphenated automatically if text is formatted
	with (no proofing).
	
	CAUSE
	=====
	
	To use the spelling checker, you must specify a language. Word uses the default
	language unless you specifically format part or all of your document with no
	proofing. Word skips any text formatted in this way, because it does not have a
	language to check against.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Select any paragraphs in your documents formatted as [no proofing], or click
	  Select All on the Edit menu to select your entire document.
	
	2. Point to Language on the Tools menu, and click Set Language. Select English
	  (United States).
	
	3. Run the spelling checker again.
	
	The misspelled words will be correctly flagged.
	
	Additional query words: speller errmsg err msg error hyphen automatic zone consecutive
	
	======================================================================
	Keywords          : kbproof word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
