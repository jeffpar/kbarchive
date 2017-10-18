---
layout: page
title: "Q157373: How to Insert Sample Text into a Document"
permalink: kb/157/Q157373/
---

## Q157373: How to Insert Sample Text into a Document

	Article: Q157373
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbautotext word97
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Word allows you to quickly insert sample text into a document. To do
	this, type "=rand()" (without the quotation marks) in the document where you
	want the text to appear, and then press ENTER.
	
	The inserted sample text appears similar to the following:
	
	  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over
	  the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown
	  fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.<B6>
	
	  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over
	  the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown
	  fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.<B6>
	
	  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over
	  the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown
	  fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.<B6>
	
	This feature is turned on by default, and is disabled when the "Replace text as
	you type" option is turned off. To turn this option on or off, click AutoCorrect
	on the Tools menu, click the AutoCorrect tab, and then click to select or clear
	the "Replace text as you type" check box.
	
	To view the paragraph marks (<B6>) in your Word document, do one of the following:
	
	- On the Standard toolbar, click Show/Hide (<B6>).
	
	  -or-
	
	- On the Tools menu, click Options. On the View tab, click to select the All
	  check box, and then click OK.
	
	NOTE: Word will not insert sample text when the insertion point immediately
	follows either a PAGE BREAK or a COLUMN BREAK.
	
	
	MORE INFORMATION
	================
	
	By default, the sample text contains three paragraphs, with each paragraph
	containing five sentences. You can control how many paragraphs and sentences
	appear by adding numbers inside the parentheses.
	
	The =rand() function has the following syntax
	
	  =rand(<p>,<s>)
	
	where <p> is the number of paragraphs and <s> is the number of
	sentences that you want to appear in each paragraph.
	
	Examples:
	
	  =rand(1) inserts one five-sentence paragraph of text
	
	  =rand(1,1) inserts one one-sentence paragraph of text.
	
	  =rand(1,2) inserts one two-sentence paragraph of text
	
	  =rand(2) inserts two five-sentence paragraphs of text
	
	  =rand(2,1) inserts two one-sentence paragraphs of text
	
	  =rand(10) inserts 10 five-sentence paragraphs of text
	
	  =rand(10,1) inserts 10 one-sentence paragraphs of text
	
	  =rand(10,10) inserts 10 ten-sentence paragraphs of text
	
	NOTE: When you omit the second number, the default is five sentences of text. The
	maximum number that can be used inside the parenthesis is 200 (this number may
	be lower depending on the number of paragraphs and sentences specified).
	
	Additional query words: example boilerplate default generate random standard dummy
	
	======================================================================
	Keywords          : kbdta word8 kbautotext word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
