---
layout: page
title: "Q171982: WD97: Tabs in Heading Styles Look Wrong in Table of Contents"
permalink: kb/171/Q171982/
---

## Q171982: WD97: Tabs in Heading Styles Look Wrong in Table of Contents

	Article: Q171982
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Page numbers in the table of contents may wrap to the next line if the text that
	has been designated to be included in the table of contents contains tabs.
	
	CAUSE
	=====
	
	By default, the TOC style used to create table of contents entries contains two
	tab stops: one at .5-inch and another at the right margin. If the text that the
	TOC entry is being created from contains more than .5-inches of text before it
	reaches the tab, then the first tab in the text will cause the text after the
	tab to appear at the right margin in the table of contents, and the page number
	will wrap to the next line.
	
	WORKAROUND
	==========
	
	To correct this problem, in the table of contents entry, drag the .5-inch tab
	marker to the desired location. To do this, follow these steps:
	
	1. Position the insertion point on the line in the table of contents that is
	  incorrectly formatted.
	
	2. On the ruler, click on the .5-inch tab marker and drag it to the right until
	  it is slightly beyond the text that is on the left side of the table of
	  contents entry.
	
	For example, if the document text that was tagged for a table of contents entry
	is "INTRODUCTION <tab> DAY 1," drag the .5-inch tab to just beyond the
	word INTRODUCTION (about 1.25 inches on the ruler). This should correct the
	table of contents entry so that it resembles the following:
	
	             tab                                                 tab
	              |                                                   |
	              |                                                   |
	             \ /                                                 \ / 
	              V                                                   V
	0----------1----------2----------3----------4----------5----------6
	INTRODUCTION->DAY 1...............................................1
	
	Because the TOC styles of the table of contents entries are defined by default to
	have "Automatically Update" enabled, changing one occurrence of the TOC style
	will automatically change all occurrences of this style.
	
	STATUS
	======
	
	This functionality is by design of Microsoft Word 97 and is different from
	functionality in Microsoft Word 6.x and 7.x. In Microsoft Word 6.x and 7.x, tabs
	in table of contents entries are replaced with a single space.
	
	Microsoft Word 97 will retain the space in the table of contents entry, but it
	may cause formatting problems in certain situations.
	
	MORE INFORMATION
	================
	
	The following example illustrates how this may happen.
	
	Correct Formatting
	------------------
	
	If you enter the following text and format it with a style that you will base a
	table of contents on (for example, Heading 1)
	
	  INTRO <tab> DAY 1
	
	and you then create a table of contents based on that (Heading 1 in this
	example), the following may occur:
	
	The TOC style of the table of contents will be formatted with a tab stop at
	.5-inch and one at the right margin. If you formatted your document on
	8.5-by-11-inch paper with 1.25-inch left and right margins, the ruler settings
	will resemble the following example.
	
	     tab                                                         tab
	      |                                                           |
	      |                                                           |
	     \ /                                                         \ / 
	      V                                                           V
	0----------1----------2----------3----------4----------5----------6
	INTRO->Day 1......................................................1
	
	Incorrect Formatting
	--------------------
	
	If you enter the following text and format it with a style that you will base a
	table of contents on (for example, Heading 1)
	
	  INTRODUCTION <tab> DAY 1
	
	and you then create a table of contents based on the style you used for the text,
	the following may occur:
	
	The TOC style of the table of contents will be formatted with a tab stop at
	.5-inch and one at the right margin. If you format your document as 8.5-by-11
	inches with 1.25 inch left and right margins, the ruler settings will look like
	this:
	
	     tab                                                         tab
	      |                                                           |
	      |                                                           |
	     \ /                                                         \ / 
	      V                                                           V
	0----------1----------2----------3----------4----------5----------6
	INTRODUCTION           -->                                    DAY 1
	......1
	
	NOTE: Because the word "INTRODUCTION" is longer than .5-inch, the tab between
	INTRODUCTION and DAY is moved to the next tab stop (at 6.0 inches), and the page
	number wraps to the next line.
	
	REFERENCES
	==========
	
	For more information about automatically updating styles, click the Office
	Assistant, type "automatically updating styles," click Search, and then click
	"Have Word automatically update styles."
	
	For more information about tabs in a table of contents, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q110418 Tabs Not Included in Table of Contents or Index
	
	  Q167620 WD97: TOC Styles Don't Have Tab Stop When Applied Manually
	
	For more information about creating and formatting a table of contents, click the
	Office Assistant, type "table of contents," click Search, and then click one of
	the topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: tc fields figures authorities
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
