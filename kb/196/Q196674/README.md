---
layout: page
title: "Q196674: WD97: Word Doesn't Include Page Ranges in Index"
permalink: /kb/196/Q196674/
---

## Q196674: WD97: Word Doesn't Include Page Ranges in Index

{% raw %}

	Article: Q196674
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an item to be indexed appears on consecutive pages, Word represents those
	pages individually in the index, rather than showing them as a range. This
	happens even when you use the \g switch to gather ranges.
	
	For example, if the word "Apple" appears on pages 4, 5, 6, and 7, Word lists each
	page separately in the index:
	
	  Apple, 4, 5, 6, 7
	
	rather than showing a range:
	
	  Apple, 4-7
	
	Using the \g switch without also using bookmarks and XE fields does not change
	the way the index appears.
	
	CAUSE
	=====
	
	By design in Word, when you compile an index in a document that contains
	multiple XE fields for identical index entries, Word lists a page number for
	each index entry (for example, Apple, 4, 5, 6, 7). In contrast, when the range
	of pages is bookmarked, Word compiles the index showing this range (for example,
	Apple, 4-7).
	
	WORKAROUND
	==========
	
	Use bookmarks and a special XE field to tell Word to show a range for certain
	words.
	
	To include page ranges in your index, follow these steps:
	
	1. Highlight the range of pages on which the word appears.
	
	2. On the Insert menu, click Bookmark.
	
	3. Type a name for the bookmark. A good name to use is the word you are
	  indexing.
	
	4. Click Add.
	
	5. Place the insertion point somewhere in the area you applied the bookmark to.
	
	6. On the Insert menu, click Index And Tables.
	
	7. Select the Index tab.
	
	8. Click Mark Entry.
	
	9. In the Main Entry box, type the word as you want it to appear in the index.
	
	10. Select the Page Range option.
	
	11. In the Bookmark box, select the bookmark name you applied.
	
	12. Click Mark.
	
	13. Click Close.
	
	When you insert the index, it will include the range over which the word appears.
	An en dash separates the page numbers. If you want to change this character, see
	the "More Information" section of this article.
	
	MORE INFORMATION
	================
	
	By default, Word uses an en dash to separate the beginning and ending pages in
	an indexed range. You can specify a different separation character by using the
	\g switch.
	
	To specify a different separator, add the \g switch and the separator character,
	with the separator in quotation marks.
	
	  This field               Yields this result
	  --------------------------------------------------------
	
	  { INDEX \g " to " }      Apples, 4 to 7
	  { INDEX \g ":" }         Apples, 4:7
	
	Additional query words: index entry xe bookmark range page pages switch
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
