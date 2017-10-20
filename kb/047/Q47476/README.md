---
layout: page
title: "Q47476: WD97: How to Create Multiple References to the Same Footnote"
permalink: /kb/047/Q47476/
---

## Q47476: WD97: How to Create Multiple References to the Same Footnote

{% raw %}

	Article: Q47476
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbtemplate word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You can number more than one footnote or endnote with the same number in Word by
	using the Footnote Reference field within a cross reference field.
	
	MORE INFORMATION
	================
	
	Scientific journals generally require that all references to a source have the
	same footnote number. They also require that the footnote be printed only once
	for each source.
	
	To number a footnote reference with the same number as another, use the following
	steps:
	
	1. Place the insertion point where you want the cross-reference to appear.
	
	2. On the Insert menu, click Cross-Reference.
	
	3. From the Reference Type box, select Footnote or Endnote. Choose the footnote
	  or endnote you want to refer to, and click Insert.
	
	4. If you want the cross-reference to be in superscript like the original, use
	  the following steps:
	
	  a. Show Field Codes by highlighting the cross-referenced item and pressing
	     SHIFT+F9. A field similar to the following appears:
	
	     {NOTEREF _Ref0123456789}
	
	  b. Place the insertion point between the final number and the closing brace.
	
	  c. Press the spacebar once, and type "\f" (without the quotation marks).
	
	     The field will resemble the following:
	
	     {NOTEREF _Ref0123456789 \f}
	
	  d. With the insertion point in the field, update the field by pressing F9.
	
	  e. Show the cross-reference by pressing SHIFT+F9.
	
	Additional query words: cross reference duplicate
	
	======================================================================
	Keywords          : kbdta kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
