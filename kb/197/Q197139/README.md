---
layout: page
title: "Q197139: WD97: Heading 1 Style Starts with &quot;2&quot; When Numbered"
permalink: /kb/197/Q197139/
---

## Q197139: WD97: Heading 1 Style Starts with &quot;2&quot; When Numbered

{% raw %}

	Article: Q197139
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbualink97 kbdta winword word97 kbnumberingkbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Outline Numbering in Microsoft Word, if any heading style (Heading
	1 through 9) appears in the text before a Heading 1 paragraph, then the Heading
	1 paragraph will be numbered "2" when you apply Outline Numbering.
	
	CAUSE
	=====
	
	This behavior is by design in the Word versions listed at the beginning of this
	article and is different from behavior seen in earlier versions of Word. In
	earlier versions, heading numbering did not increment the numbering for the
	Heading 1 style based on the existence of a lower style (Heading 2, for
	instance) preceding Heading 1 in the document. The result in earlier versions of
	Word is that the first Heading 1 paragraph would be numbered "1."
	
	In Word, the first Heading 1 paragraph when preceded by a lower style starts with
	"2" because of the existence of another heading paragraph earlier, not because
	of how many earlier heading paragraphs there are. For example, if you have five
	paragraphs formatted with the following heading styles:
	
	  Heading 2
	  Heading 2
	  Heading 2
	  Heading 2
	  Heading 1
	
	the result after numbering is that the Heading 1 paragraph is numbered as "2,"
	not "5."
	
	
	WORKAROUND
	==========
	
	This behavior may cause a problem in Word when you use chapter-page numbering in
	your document. Heading 1 is usually used to mark the start of a chapter, so
	whenever another heading style appears before the first Heading 1 paragraph,
	Word numbers the first chapter number as "2." To work around this problem, use
	either of the following methods.
	
	Method 1
	--------
	
	Rearrange your document so the Heading 1 paragraph is the first heading-level
	paragraph in your document. If this is not possible, use Method 2 instead.
	
	Method 2
	--------
	
	1. Position the insertion point at the beginning of the Heading 1 paragraph.
	
	2. On the Insert menu, click Break. Select the Continuous option and then click
	  OK.
	
	3. On the Format menu, click Bullets And Numbering.
	
	4. In the Bullets And Numbering dialog box, select the Outline Numbered tab.
	
	5. Under "List numbering", click Restart Numbering, and then click OK.
	
	NOTE: This workaround may be inappropriate for multiple-section documents that
	depend on continuous numbering.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbdta winword word97 kbnumbering kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
