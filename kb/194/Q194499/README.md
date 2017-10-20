---
layout: page
title: "Q194499: WD97:How Word Converts WordPerfect 5.x/6.x Hard and Soft Returns"
permalink: /kb/194/Q194499/
---

## Q194499: WD97:How Word Converts WordPerfect 5.x/6.x Hard and Soft Returns

{% raw %}

	Article: Q194499
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses the various types of "carriage returns" that are
	available in WordPerfect and Word for Windows, and how those returns are
	converted from one product to the other.
	
	MORE INFORMATION
	================
	
	WordPerfect 5.x and 6.x hard and soft returns are supported in conversion to
	Word. WordPerfect's dormant hard returns are converted to normal paragraph
	marks.
	
	Differences in character spacing between the two products may cause soft returns
	to be located in different locations than they appear in the original
	WordPerfect document.
	
	Leading for hard returns (secondary leading) is converted to spacing after import
	from WordPerfect only. Leading for soft returns (Primary leading) is not
	supported for conversion.
	
	Soft returns are automatically inserted by WordPerfect when text reaches the end
	of a line; a hard return is inserted by pressing ENTER.
	
	A WordPerfect dormant hard return dictates that if a hard return appears alone on
	a line at the top of a page that starts with a soft page break, it will be
	changed from a hard return code into a dormant hard return code. This is done so
	that the text at the top of the document is not needlessly shifted downward.
	
	The most common instance in which a dormant hard return is inserted in
	WordPerfect occurs if a user manually presses ENTER twice between the last
	paragraph of one page and the first paragraph on the next page. In this case,
	the formatting appears in Reveal Codes similar to:
	
	  Text at end of first page...[HRt-SPg]
	  [Dorm HRt]Text at beginning of following page...
	
	Given printer driver differences, the WordPerfect converter supplied with Word
	has no way to determine if a dormant hard return code will actually remain
	located at the top of a page following conversion, and therefore it converts the
	code to a normal paragraph mark. The result is that an unwanted blank line may
	appear in a converted document.
	
	The solution is to delete the extra paragraph mark following conversion. If the
	unwanted paragraph mark appears at the top of a page in the converted document,
	set Paragraph Spacing After to 12 pts in the last paragraph of the preceding
	pagefirst page to restore original layout. This process can be automated using
	the Autoformat feature in Word, which converts manual double-spacing between
	paragraphs into paragraph spacing after.
	
	Additional query words: convert converted converts converting conversion transfer transferred transfers transferring translate translated translates translating translation wpft5 word perfect 8.0 8.00
	
	======================================================================
	Keywords          : kbdta kbconversion winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
