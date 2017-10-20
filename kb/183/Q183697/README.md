---
layout: page
title: "Q183697: WD97: Table Border Print Problems When Next to Frame or Text Box"
permalink: /kb/183/Q183697/
---

## Q183697: WD97: Table Border Print Problems When Next to Frame or Text Box

{% raw %}

	Article: Q183697
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a table that displays correctly in page layout or print preview,
	some of the table borders may not be printed.
	
	CAUSE
	=====
	
	This symptom occurs when the table is placed to the right of a wrapping frame or
	a text box.
	
	WORKAROUND
	==========
	
	Table Is in a Frame
	-------------------
	
	When the table is placed to the right of a picture or graphic contained in a
	frame, replace the frame with a text box. To do this, follow these steps:
	
	1. On the Insert menu, click Text Box, and then draw a text box anywhere in your
	  document.
	
	2. Select the information in the frame.
	
	3. On the Edit menu, click Copy.
	
	4. Place the insertion point into the text box.
	
	5. On the Edit menu, click Paste.
	
	6. Delete the frame and its contents.
	
	7. Move the text box to the appropriate position on your document.
	
	8. Follow the instructions for Case 2.
	
	Table Is Within a Text Box
	--------------------------
	
	When the table is within a text box, use any of the following methods.
	
	Method 1:
	
	If the table is placed to the right of a text box, move it to the left of the
	text box or, follow these steps:
	
	1. Click once to select the text box.
	
	2. On the Format menu, click Text Box, and select the Wrapping tab.
	
	3. Under Wrapping Style, select None, and click OK.
	
	4. Place the insertion point inside the table. On the Table menu, click Select
	  Table.
	
	5. On the Table menu, click Cell Height and Width.
	
	6. In the Indent From Left input box, set a left indent on the table large
	  enough to move it to the right enough to that it does not overlap the text
	  box.
	
	7. Click OK.
	
	NOTE: When you set the wrapping to none for the text box, the text box may
	overlap the text within your document. If this is the case, you will need to
	move that text down the page.
	Method 2: Add Another Column to the Table
	
	To place the graphic in an additional column of the table, follow these steps:
	
	1. Place the insertion pint in the upper left cell of the table.
	
	2. On the Table menu, click Select Column.
	
	3. On the table menu, click Insert Columns.
	
	4. On the Table menu, click Merge Cells.
	
	5. Place the graphic into this cell of the table.
	
	MORE INFORMATION
	================
	
	Several different problems may occur when you apply, display, and print table
	borders, as indicated below:
	
	- If only bottom borders are applied to some of the table cells, they will
	  display in page layout and print preview, but some of the bottom borders will
	  not be printed.
	
	- Borders can be applied to all of the table and successfully viewed. If the
	  right border is not the same for the entire table, then some of the border
	  lines may not be printed. If the right border is the same, then it will be
	  printed correctly.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	  Q172042 WD97: Document Text Extends into Margin, Overlaps, or Gaps
	
	  Q179185 WD97: Text Disappears Behind Floating Object
	
	  Q159942 WD97: General Information about Text Boxes and Frames in Word 97
	
	Additional query words: missing cannot apply add word97 word8
	
	======================================================================
	Keywords          : kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
