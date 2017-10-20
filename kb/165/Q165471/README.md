---
layout: page
title: "Q165471: WD97: ListNum Changes Numbering Level When Heading Style Applied"
permalink: /kb/165/Q165471/
---

## Q165471: WD97: ListNum Changes Numbering Level When Heading Style Applied

{% raw %}

	Article: Q165471
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
	
	When you insert a ListNum field into a document and then apply a heading style
	to a paragraph before the ListNum field, the result of the ListNum field will be
	demoted one numbering level below the heading level you applied (rather than
	retaining the numbering level that was applied when the ListNum field was
	inserted).
	
	WORKAROUND
	==========
	
	Manually promote or demote the ListNum field to the numbering level you want,
	using one of the following methods:
	
	Method 1
	--------
	
	1. Position the insertion point inside the ListNum field.
	
	2. Click the Increase Indent button on the Formatting toolbar to promote the
	  value of the ListNum field to a higher numbering level, or click the Decrease
	  Indent button on the Formatting toolbar to demote the value of the ListNum
	  field to a lower numbering level.
	
	NOTE: You can also right-click the ListNum field and click the Increase Indent or
	Decrease indent button on the shortcut menu.
	
	Method 2
	--------
	
	1. Turn on the field codes by pressing ALT+F9 on the keyboard if the field codes
	  are not already visible.
	
	2. Modify the number in the ListNum field that is immediately after the \l
	  switch to indicate the numbering level you want. For example, a ListNum field
	  formatted for numbering level two would appear as {LISTNUM \l 2}, and a
	  ListNum field formatted for numbering level three would appear as {LISTNUM \l
	  3}.
	
	3. Press ALT+F9 on the keyboard to toggle the field codes off.
	
	4. Update the field by clicking on the field and pressing F9 on the keyboard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For more information on using the ListNum field, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q159943 WD97: General Information About Bullets and Numbering
	
	  Q162895 WD97: How to Use the ListNum Field in Word
	
	  Q160977 WD97: Error: ListNum Field In Table Causes Invalid Page Fault
	
	  Q155961 WD97: ListNum Field Not Converted Saving to Word 6.0/95
	
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
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
