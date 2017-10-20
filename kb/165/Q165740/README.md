---
layout: page
title: "Q165740: WD97: Cross-Reference to ListNum Field Is Incomplete"
permalink: /kb/165/Q165740/
---

## Q165740: WD97: Cross-Reference to ListNum Field Is Incomplete

{% raw %}

	Article: Q165740
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert a cross-reference to a ListNum field, the cross-reference may
	not include the complete ListNum context if all of the following conditions are
	true:
	
	- The ListNum field is located previous to the cross-reference.
	
	  -and-
	
	- The cross-reference is being inserted into a paragraph containing a higher
	  level ListNum then the ListNum being referenced.
	
	  -and-
	
	- There is not a higher level ListNum field (other than the ListNum field
	  contained in the paragraph where the cross-reference is being inserted)
	  between the cross-reference and the ListNum that is being cross- referenced.
	
	WORKAROUND
	==========
	
	Consider using outline numbering or a combination of outline numbering and
	ListNum fields.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	A cross-reference to a ListNum field should include the entire context of the
	ListNum that is being cross-referenced unless there are no higher level ListNum
	fields between the paragraph containing the cross-reference and the ListNum
	field that is being cross-referenced.
	
	In the following discussion, the term ListNum "context" is used. A paragraph is
	said to be in the same ListNum context as a certain ListNum field if no higher
	level ListNum fields occur between the paragraph and the ListNum field.
	
	Here is a sample list with the numbering created using ListNum fields:
	
	  ------------------------------------
	  1) This is a ListNum of level 1
	       a) This is a ListNum of level 2
	       b) This is a ListNum of level 2
	
	  2) This is a ListNum of level 1
	       a) This is a ListNum of level 2
	       b) This is a ListNum of level 2
	       c) This is a ListNum of level 2
	       d) This is a ListNum of level 2
	
	  3) This is a ListNum of level 1
	       a) This is a ListNum of level 2
	       b) This is a ListNum of level 2
	  ------------------------------------
	
	Cross-references to this list:
	
	If you insert a cross-reference in line 2d and reference either line 2a, 2b, 2c,
	or 2d, you will only get "a)," "b)," "c)," or "d)" as the cross reference
	because the cross-reference is in the same context as the item being
	cross-referenced.
	
	However, if you insert a cross-reference in line 2d and reference either line 1a,
	1b, 3a, or 3b, you will get the full context "1)a)," "1)b)," "3)a)," or "3)b)"
	as the cross-reference because the cross-reference is in a different context
	than the item being cross-referenced.
	
	The problem also occurs when you insert a cross-reference in line 3) and
	reference 2a, 2b, 2c, or 2d. You should get the full context of "2)a)," "2)b),"
	"2)c)," or "2)d)" because you are referencing a line that is outside the context
	of the paragraph where you are inserting the cross reference. However, in this
	situation, you will get the incorrect cross- reference of "a," "b," "c," or
	"d."
	
	NOTE: Inserting a cross-reference in line "3)" and cross-referencing lines "1a"
	or "1b" works correctly (giving you the full context).
	
	REFERENCES
	==========
	
	For more information on ListNum fields and Outline Numbering, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q159943 WD97: General Information About Bullets and Numbering
	
	  Q162895 WD97: How to Use the ListNum Field in Word
	
	  Q155961 WD97: ListNum Field Not Converted Saving to Word 6.0/95
	
	  Q160977 WD97: Error: ListNum Field In Table Causes Invalid Page Fault
	
	  Q165470 WD97: Outline Numbering Links to All Styles After Style Copy
	
	  Q157138 WD97: Outline Numbering Is Not Reapplied
	
	For more information about the ListNum field, click Contents And Index on the
	Help menu, click the Index tab in Help Topics: Microsoft Word, type the
	following text
	
	  ListNum
	
	and then double-click the selected text to go to the "LISTNUM field" topic. If
	you are unable to find the information you need, ask the Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbusage word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
